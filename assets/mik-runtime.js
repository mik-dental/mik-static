(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }

    callback();
  }

  function toArray(items) {
    return Array.from(items || []);
  }

  function parseBoolean(value) {
    return value === "true" || value === "1";
  }

  function injectRuntimeStyles() {
    if (document.getElementById("mik-runtime-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "mik-runtime-styles";
    style.textContent = `
      @keyframes mik-hero-float {
        0% {
          transform: translate3d(0, 0, 0) rotateZ(0deg);
        }
        100% {
          transform: translate3d(1.3px, 1.4px, 0) rotateZ(0.6deg);
        }
      }

      .mik-floating-hero {
        animation: mik-hero-float 1.15s ease-in-out infinite alternate;
        will-change: transform;
      }
    `;

    document.head.appendChild(style);
  }

  function isVisible(element) {
    if (!element) {
      return false;
    }

    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden";
  }

  function getInlineLottieData(source) {
    if (!source || !window.__MIK_LOTTIE_DATA__) {
      return null;
    }

    return (
      window.__MIK_LOTTIE_DATA__[source] ||
      window.__MIK_LOTTIE_DATA__[source.replace(/^\.\/assets\//, "")] ||
      null
    );
  }

  function initLottie() {
    const registry = new Map();

    if (!window.lottie) {
      return registry;
    }

    const elements = toArray(
      document.querySelectorAll('[data-animation-type="lottie"][data-src]'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const record = registry.get(entry.target);
          if (!record) {
            return;
          }

          if (entry.isIntersecting) {
            if (record.autoplay) {
              record.animation.play();
              return;
            }

            if (!record.hasPlayed || record.loop) {
              record.animation.goToAndPlay(0, true);
              record.hasPlayed = true;
            }
          } else if (!record.autoplay && record.loop) {
            record.animation.pause();
          }
        });
      },
      { threshold: 0.25 },
    );

    elements.forEach((element) => {
      const autoplay = parseBoolean(element.dataset.autoplay);
      const loop = parseBoolean(element.dataset.loop);
      const animationConfig = {
        container: element,
        renderer: element.dataset.renderer || "svg",
        loop,
        autoplay,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
        },
      };
      const inlineAnimationData = getInlineLottieData(element.dataset.src);

      if (inlineAnimationData) {
        animationConfig.animationData = inlineAnimationData;
      } else {
        animationConfig.path = element.dataset.src;
      }

      const animation = window.lottie.loadAnimation(animationConfig);

      if (!autoplay) {
        animation.stop();
      }

      registry.set(element, {
        animation,
        autoplay,
        loop,
        hasPlayed: autoplay,
      });

      observer.observe(element);
    });

    window.addEventListener("resize", () => {
      registry.forEach(({ animation }) => animation.resize());
    });

    return registry;
  }

  function resizeAndPlayLotties(container, registry) {
    if (!container || !registry.size) {
      return;
    }

    registry.forEach((record, element) => {
      if (!container.contains(element) || !isVisible(element)) {
        return;
      }

      record.animation.resize();

      if (!record.autoplay && !record.hasPlayed) {
        record.animation.goToAndPlay(0, true);
        record.hasPlayed = true;
      }
    });
  }

  function initTabs(lottieRegistry) {
    const tabsList = toArray(document.querySelectorAll(".w-tabs"));
    const targetSection = document.getElementById("tab");

    tabsList.forEach((tabs) => {
      const links = toArray(tabs.querySelectorAll(".w-tab-link"));
      const panes = toArray(tabs.querySelectorAll(".w-tab-pane"));

      if (!links.length || !panes.length) {
        return;
      }

      const activateTab = (selectedLink, shouldScroll) => {
        const selectedTab = selectedLink.dataset.wTab;

        links.forEach((link) => {
          const active = link === selectedLink;
          link.classList.toggle("w--current", active);
          link.setAttribute("aria-selected", String(active));
          link.tabIndex = active ? 0 : -1;
        });

        let activePane = null;
        panes.forEach((pane) => {
          const active = pane.dataset.wTab === selectedTab;
          pane.classList.toggle("w--tab-active", active);
          pane.hidden = !active;
          if (active) {
            activePane = pane;
          }
        });

        if (activePane) {
          resizeAndPlayLotties(activePane, lottieRegistry);
        }

        if (shouldScroll && targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      links.forEach((link, index) => {
        link.setAttribute("role", "tab");
        link.tabIndex = link.classList.contains("w--current") ? 0 : -1;
        link.setAttribute(
          "aria-selected",
          String(link.classList.contains("w--current")),
        );

        link.addEventListener("click", (event) => {
          event.preventDefault();
          activateTab(link, true);
        });

        link.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activateTab(link, true);
            return;
          }

          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
            return;
          }

          event.preventDefault();
          const direction = event.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (index + direction + links.length) % links.length;
          links[nextIndex].focus();
          activateTab(links[nextIndex], true);
        });
      });

      panes.forEach((pane) => {
        pane.setAttribute("role", "tabpanel");
      });

      const activeLink =
        links.find((link) => link.classList.contains("w--current")) || links[0];
      activateTab(activeLink, false);
    });
  }

  function setupModal(options) {
    const modal = document.querySelector(options.modalSelector);
    if (!modal) {
      return;
    }

    const openers = toArray(document.querySelectorAll(options.openSelector));
    const closers = toArray(modal.querySelectorAll(options.closeSelector));
    const content = modal.firstElementChild || modal;

    const setOpenState = (isOpen) => {
      modal.style.display = isOpen ? "flex" : "none";
      modal.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";

      if (typeof options.onToggle === "function") {
        options.onToggle(isOpen, modal);
      }
    };

    const open = (event) => {
      if (event) {
        event.preventDefault();
      }
      setOpenState(true);
    };

    const close = (event) => {
      if (event) {
        event.preventDefault();
      }
      setOpenState(false);
    };

    openers.forEach((opener) => {
      opener.addEventListener("click", open);
      opener.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          open(event);
        }
      });
    });

    closers.forEach((closer) => {
      closer.addEventListener("click", close);
      closer.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          close(event);
        }
      });
    });

    modal.addEventListener("click", (event) => {
      if (!content.contains(event.target)) {
        close(event);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display !== "none") {
        close();
      }
    });

    setOpenState(false);
  }

  function initSlider() {
    const sliders = toArray(document.querySelectorAll(".w-slider"));

    sliders.forEach((slider) => {
      const mask = slider.querySelector(".w-slider-mask");
      const slides = toArray(mask?.querySelectorAll(".w-slide"));
      const nav = slider.querySelector(".w-slider-nav");
      const previous = slider.querySelector(".w-slider-arrow-left");
      const next = slider.querySelector(".w-slider-arrow-right");

      if (!mask || slides.length < 2) {
        return;
      }

      let activeIndex = 0;
      let autoplayTimer = null;
      let pointerStartX = null;
      const transitionDuration = Number(slider.dataset.duration || 600);
      const autoplayDelay = Number(slider.dataset.delay || 4000);
      const shouldAutoplay = parseBoolean(slider.dataset.autoplay);

      mask.style.transition = `transform ${transitionDuration}ms ease`;
      mask.style.transform = "translate3d(0, 0, 0)";

      const dots = slides.map((_, index) => {
        const dot = document.createElement("div");
        dot.className = "w-slider-dot";
        dot.setAttribute("role", "button");
        dot.setAttribute("tabindex", "0");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => goTo(index, true));
        dot.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            goTo(index, true);
          }
        });
        nav?.appendChild(dot);
        return dot;
      });

      const updateAutoplay = () => {
        if (!shouldAutoplay) {
          return;
        }

        window.clearInterval(autoplayTimer);
        autoplayTimer = window.setInterval(() => {
          goTo(activeIndex + 1, false);
        }, autoplayDelay);
      };

      const goTo = (index, userInitiated) => {
        activeIndex = (index + slides.length) % slides.length;
        mask.style.transform = `translate3d(-${activeIndex * 100}%, 0, 0)`;

        slides.forEach((slide, slideIndex) => {
          slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
        });

        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("w-active", dotIndex === activeIndex);
        });

        if (userInitiated) {
          updateAutoplay();
        }
      };

      previous?.addEventListener("click", () => goTo(activeIndex - 1, true));
      next?.addEventListener("click", () => goTo(activeIndex + 1, true));

      slider.addEventListener("pointerdown", (event) => {
        pointerStartX = event.clientX;
      });

      slider.addEventListener("pointerup", (event) => {
        if (pointerStartX === null) {
          return;
        }

        const delta = event.clientX - pointerStartX;
        pointerStartX = null;

        if (Math.abs(delta) < 30) {
          return;
        }

        goTo(activeIndex + (delta > 0 ? -1 : 1), true);
      });

      slider.addEventListener("pointerleave", () => {
        pointerStartX = null;
      });

      goTo(0, false);
      updateAutoplay();
    });
  }

  function initFaq() {
    const accordions = toArray(document.querySelectorAll(".uui-faq04_accordion"));

    accordions.forEach((accordion) => {
      const question = accordion.querySelector(".uui-faq04_question");
      const answer = accordion.querySelector(".uui-faq04_answer");
      const verticalLine = accordion.querySelector(".accordion-icon_vertical-line");

      if (!question || !answer) {
        return;
      }

      answer.style.height = "0px";
      answer.style.transition = "height 400ms ease";

      if (verticalLine) {
        verticalLine.style.transition = "transform 300ms ease";
      }

      const open = () => {
        question.setAttribute("aria-expanded", "true");
        answer.style.height = `${answer.scrollHeight}px`;
        if (verticalLine) {
          verticalLine.style.transform = "rotate(90deg)";
        }
      };

      const close = () => {
        const currentHeight = answer.scrollHeight;
        answer.style.height = `${currentHeight}px`;
        requestAnimationFrame(() => {
          question.setAttribute("aria-expanded", "false");
          answer.style.height = "0px";
        });
        if (verticalLine) {
          verticalLine.style.transform = "rotate(0deg)";
        }
      };

      const toggle = () => {
        const isOpen = question.getAttribute("aria-expanded") === "true";
        if (isOpen) {
          close();
          return;
        }

        open();
      };

      answer.addEventListener("transitionend", () => {
        if (question.getAttribute("aria-expanded") === "true") {
          answer.style.height = "auto";
        }
      });

      question.setAttribute("role", "button");
      question.setAttribute("tabindex", "0");
      question.setAttribute("aria-expanded", "false");
      question.addEventListener("click", toggle);
      question.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      });
    });
  }

  function initTorqueForm() {
    const formWrapper = document.querySelector(".uui-contact01_component.w-form");
    const form = formWrapper?.querySelector("form");
    const done = formWrapper?.querySelector(".w-form-done");
    const fail = formWrapper?.querySelector(".w-form-fail");

    if (!formWrapper || !form || !done || !fail) {
      return;
    }

    const reset = () => {
      form.style.display = "";
      done.style.display = "none";
      fail.style.display = "none";
      form.reset();
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        fail.style.display = "block";
        done.style.display = "none";
        return;
      }

      fail.style.display = "none";
      done.style.display = "block";
      form.style.display = "none";
    });

    return { reset };
  }

  function initTorqueChrome() {
    const sellBar = document.querySelector(".sell-bar");
    const heroSection = document.querySelector(".section_1paralleax");
    const heroAccent = document.querySelector(
      '.title_container .div-block[style*="opacity: 0"]',
    );
    const heroLottie = document.querySelector(".hero_lottie");

    if (heroAccent) {
      heroAccent.style.transition = "opacity 500ms ease";
      requestAnimationFrame(() => {
        heroAccent.style.opacity = "1";
      });
    }

    if (heroLottie) {
      heroLottie.style.transition = "opacity 500ms ease";
      requestAnimationFrame(() => {
        heroLottie.style.opacity = "1";
      });
      heroLottie.classList.add("mik-floating-hero");
    }

    if (!sellBar || !heroSection) {
      return;
    }

    sellBar.style.transition = "opacity 300ms ease";

    const updateVisibility = () => {
      const threshold = Math.max(heroSection.offsetHeight * 0.35, 140);
      const visible = window.scrollY > threshold;
      sellBar.style.opacity = visible ? "1" : "0";
      sellBar.style.pointerEvents = visible ? "auto" : "none";
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
  }

  onReady(() => {
    injectRuntimeStyles();

    const lottieRegistry = initLottie();
    initTabs(lottieRegistry);
    initSlider();
    initFaq();

    setupModal({
      modalSelector: ".books-popup-copy",
      openSelector: '.submit-button[href="#"]',
      closeSelector: ".fs_modal-2_close",
    });

    const torqueForm = initTorqueForm();

    setupModal({
      modalSelector: ".fs_modal-2_popup",
      openSelector:
        '[fs-modal-element="open-1"], .button-_head-dark-copy[aria-haspopup="dialog"]',
      closeSelector: ".fs_modal-2_close",
      onToggle: (isOpen) => {
        if (isOpen && torqueForm) {
          torqueForm.reset();
        }
      },
    });

    initTorqueChrome();
  });
})();
