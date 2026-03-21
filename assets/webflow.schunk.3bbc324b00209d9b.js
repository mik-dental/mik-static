(self.webpackChunk = self.webpackChunk || []).push([
  ["546"],
  {
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        l = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var o = a[i];
            o[0](0, o[1]);
          }
          ((a = []), t.extend(n.triggers, l));
        }),
        (n.async = function () {
          for (var e in l) {
            var t = l[e];
            l.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t, n) {
        var a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(a));
      }
      var l = window.jQuery,
        o = {},
        r = ".w-ix";
      ((o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + r, OUTRO: "w-ix-outro" + r }),
        l.extend(o.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE"));
          },
        }),
        (o.dispatchCustomEvent = i),
        (e.exports = o));
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      (i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          }),
        ));
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return Q;
        },
        animationFrameChanged: function () {
          return B;
        },
        clearRequested: function () {
          return G;
        },
        elementStateChanged: function () {
          return Y;
        },
        eventListenerAdded: function () {
          return U;
        },
        eventStateChanged: function () {
          return D;
        },
        instanceAdded: function () {
          return w;
        },
        instanceRemoved: function () {
          return j;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return H;
        },
        parameterChanged: function () {
          return x;
        },
        playbackRequested: function () {
          return F;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return C;
        },
        sessionInitialized: function () {
          return v;
        },
        sessionStarted: function () {
          return M;
        },
        sessionStopped: function () {
          return h;
        },
        stopRequested: function () {
          return V;
        },
        testFrameRendered: function () {
          return k;
        },
        viewportWidthChanged: function () {
          return W;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: d,
          IX2_SESSION_STOPPED: u,
          IX2_PREVIEW_REQUESTED: s,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: E,
          IX2_CLEAR_REQUESTED: p,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: b,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: g,
          IX2_INSTANCE_ADDED: O,
          IX2_INSTANCE_STARTED: m,
          IX2_INSTANCE_REMOVED: _,
          IX2_ELEMENT_STATE_CHANGED: L,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
          IX2_VIEWPORT_WIDTH_CHANGED: N,
          IX2_MEDIA_QUERIES_DEFINED: A,
        } = l.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        C = (e) => ({ type: r, payload: { ...S(e) } }),
        v = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        M = () => ({ type: d }),
        h = () => ({ type: u }),
        P = ({ rawData: e, defer: t }) => ({
          type: s,
          payload: { defer: t, rawData: e },
        }),
        F = ({
          actionTypeId: e = l.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: o,
          testManual: r,
          verbose: c,
          rawData: d,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: r,
            eventId: a,
            allowEvents: i,
            immediate: o,
            verbose: c,
            rawData: d,
          },
        }),
        V = (e) => ({ type: E, payload: { actionListId: e } }),
        G = () => ({ type: p }),
        U = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        k = (e = 1) => ({ type: T, payload: { step: e } }),
        D = (e, t) => ({ type: b, payload: { stateKey: e, newState: t } }),
        B = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        x = (e, t) => ({ type: g, payload: { key: e, value: t } }),
        w = (e) => ({ type: O, payload: { ...e } }),
        X = (e, t) => ({ type: m, payload: { instanceId: e, time: t } }),
        j = (e) => ({ type: _, payload: { instanceId: e } }),
        Y = (e, t, n, a) => ({
          type: L,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        Q = ({ actionListId: e, isPlaying: t }) => ({
          type: R,
          payload: { actionListId: e, isPlaying: t },
        }),
        W = ({ width: e, mediaQueries: t }) => ({
          type: N,
          payload: { width: e, mediaQueries: t },
        }),
        H = () => ({ type: A });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return d;
          },
          destroy: function () {
            return p;
          },
          init: function () {
            return E;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return s;
          },
        };
      for (var l in i)
        Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = n(9516),
        r = (a = n(7243)) && a.__esModule ? a : { default: a },
        c = n(1970),
        d = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, l, o)
                : (a[l] = e[l]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(3946));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      let s = (0, o.createStore)(r.default);
      function f(e) {
        e() && (0, c.observeRequests)(s);
      }
      function E(e) {
        (p(), (0, c.startEngine)({ store: s, rawData: e, allowEvents: !0 }));
      }
      function p() {
        (0, c.stopEngine)(s);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return g;
        },
        getChildElements: function () {
          return m;
        },
        getClosestElement: function () {
          return L;
        },
        getProperty: function () {
          return p;
        },
        getQuerySelector: function () {
          return T;
        },
        getRefType: function () {
          return R;
        },
        getSiblingElements: function () {
          return _;
        },
        getStyle: function () {
          return E;
        },
        getValidDocument: function () {
          return b;
        },
        isSiblingNode: function () {
          return O;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: r } = l.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: d,
          PLAIN_OBJECT: u,
          WF_PAGE: s,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function E(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function p(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[r](e);
      }
      function T({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(s)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function b(e) {
        return null == e || e === document.documentElement.getAttribute(s)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function g(e, t) {
        return e.contains(t);
      }
      function O(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function m(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function _(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let l = i.firstElementChild;
          for (; null != l; )
            (-1 === e.indexOf(l) && t.push(l), (l = l.nextElementSibling));
        }
        return t;
      }
      let L = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[r] && n[r](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function R(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? d
            : u
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return q;
        },
        startActionGroup: function () {
          return ep;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return eE;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = y(n(9777)),
        o = y(n(4738)),
        r = y(n(4659)),
        c = y(n(3452)),
        d = y(n(6633)),
        u = y(n(3729)),
        s = y(n(2397)),
        f = y(n(5082)),
        E = n(7087),
        p = n(9468),
        I = n(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = g(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, l, o)
                : (a[l] = e[l]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(5012)),
        b = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function g(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (g = function (e) {
          return e ? n : t;
        })(e);
      }
      let O = Object.keys(E.QuickEffectIds),
        m = (e) => O.includes(e),
        {
          COLON_DELIMITER: _,
          BOUNDARY_SELECTOR: L,
          HTML_ELEMENT: R,
          RENDER_GENERAL: N,
          W_MOD_IX: A,
        } = E.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: C,
          getDestinationValues: v,
          observeStore: M,
          getInstanceId: h,
          renderHTMLElement: P,
          clearAllStyles: F,
          getMaxDurationItemIndex: V,
          getComputedStyle: G,
          getInstanceOrigin: U,
          reduceListToGroup: k,
          shouldNamespaceEventParameter: D,
          getNamespacedParameterId: B,
          shouldAllowMediaQuery: x,
          cleanupHTMLElement: w,
          clearObjectCache: X,
          stringifyTarget: j,
          mediaQueriesEqual: Y,
          shallowEqual: Q,
        } = p.IX2VanillaUtils,
        {
          isPluginType: W,
          createPluginInstance: H,
          getPluginDuration: K,
        } = p.IX2VanillaPlugins,
        z = navigator.userAgent,
        $ = z.match(/iPad/i) || z.match(/iPhone/);
      function q(e) {
        (M({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          M({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          M({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          M({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en }));
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          (ea({ store: n, rawData: e, allowEvents: !0 }), J());
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: l,
            allowEvents: o,
            immediate: r,
            testManual: c,
            verbose: d = !0,
          } = e,
          { rawData: u } = e;
        if (a && i && u && r) {
          let e = u.actionLists[a];
          e && (u = k({ actionList: e, actionItemId: i, rawData: u }));
        }
        if (
          (ea({ store: t, rawData: u, allowEvents: o, testManual: c }),
          (a && n === E.ActionTypeConsts.GENERAL_START_ACTION) || m(n))
        ) {
          (eE({ store: t, actionListId: a }),
            es({ store: t, actionListId: a, eventId: l }));
          let e = ep({
            store: t,
            eventId: l,
            actionListId: a,
            immediate: r,
            verbose: d,
          });
          d &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !r,
              }),
            );
        }
      }
      function et({ actionListId: e }, t) {
        (e ? eE({ store: t, actionListId: e }) : ef({ store: t }), ei(t));
      }
      function en(e, t) {
        (ei(t), F({ store: t, elementApi: T }));
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(L),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (er(e),
                (0, s.default)(n, (t, n) => {
                  let a = b.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!$) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: l } = e[a],
                          o = T.getQuerySelector(l);
                        t[o] ||
                          ((i === E.EventTypeConsts.MOUSE_CLICK ||
                            i === E.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: d } = c,
                      u = ec(n, eu);
                    if (!(0, r.default)(u)) return;
                    (0, s.default)(u, (e, a) => {
                      let i = n[a],
                        {
                          action: r,
                          id: u,
                          mediaQueries: s = c.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = r.config;
                      (Y(s, c.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        r.actionTypeId ===
                          E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, o.default)(
                                d,
                                `${f}.continuousParameterGroups`,
                                [],
                              ),
                              r = (0, l.default)(i, ({ id: e }) => e === a),
                              c = (n.smoothing || 0) / 100,
                              s = (n.restingState || 0) / 100;
                            r &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: l,
                                  parameterGroup: r,
                                  smoothing: c,
                                  restingValue: d,
                                }) {
                                  let { ixData: u, ixSession: s } =
                                      e.getState(),
                                    { events: f } = u,
                                    p = f[a],
                                    { eventTypeId: I } = p,
                                    b = {},
                                    y = {},
                                    g = [],
                                    { continuousActionGroups: O } = r,
                                    { id: m } = r;
                                  D(I, i) && (m = B(t, m));
                                  let R =
                                    s.hasBoundaryNodes && n
                                      ? T.getClosestElement(n, L)
                                      : null;
                                  (O.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let l = i.boundaryMode ? R : null,
                                        o = j(i) + _ + a;
                                      if (
                                        ((y[o] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0),
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(y[o], t, e)),
                                        !b[o])
                                      ) {
                                        b[o] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: p,
                                          eventTarget: n,
                                          elementRoot: l,
                                          elementApi: T,
                                        }).forEach((e) => {
                                          g.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    g.forEach(({ element: t, key: n }) => {
                                      let i = y[n],
                                        r = (0, o.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: u } = r,
                                        s = (
                                          u === E.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                r.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : W(u)
                                        )
                                          ? H(u)?.(t, r)
                                          : null,
                                        f = v(
                                          {
                                            element: t,
                                            actionItem: r,
                                            elementApi: T,
                                          },
                                          s,
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: l,
                                        actionItem: r,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: m,
                                        actionGroups: i,
                                        smoothing: c,
                                        restingValue: d,
                                        pluginInstance: s,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: u + _ + a,
                                  eventTarget: e,
                                  eventId: u,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: r,
                                  smoothing: c,
                                  restingValue: s,
                                });
                              });
                          }),
                        (r.actionTypeId ===
                          E.ActionTypeConsts.GENERAL_START_ACTION ||
                          m(r.actionTypeId)) &&
                          es({ store: t, actionListId: f, eventId: u }));
                    });
                    let p = (e) => {
                        let { ixSession: a } = t.getState();
                        ed(u, (l, o, r) => {
                          let d = n[o],
                            u = a.eventState[r],
                            { action: s, mediaQueries: f = c.mediaQueryKeys } =
                              d;
                          if (!x(f, a.mediaQueryKey)) return;
                          let p = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: l,
                                event: d,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: r,
                              },
                              u,
                            );
                            Q(a, u) ||
                              t.dispatch((0, I.eventStateChanged)(r, a));
                          };
                          s.actionTypeId ===
                          E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(d.config)
                                ? d.config
                                : [d.config]
                              ).forEach(p)
                            : p();
                        });
                      },
                      b = (0, f.default)(p, 12),
                      y = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? b : p;
                            (e.addEventListener(n, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [n, i])));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(y)
                      : "string" == typeof a && y(e);
                  })({ logic: a, store: e, events: t });
                }));
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    er(e);
                  };
                  (eo.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              M({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (ei(e),
                    F({ store: e, elementApi: T }),
                    ea({ store: e, allowEvents: !0 }),
                    J());
                },
              }));
          (e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: l } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(a, l)), t)) {
                    let t = M({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a));
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(el), X(), e.dispatch((0, I.sessionStopped)()));
        }
      }
      function el({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function er(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: a, mediaQueries: t }),
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, u.default)(e, t), d.default),
        ed = (e, t) => {
          (0, s.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + _ + a);
            });
          });
        },
        eu = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: T,
          });
      function es({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: l, events: r } = a,
          c = r[n],
          d = l[t];
        if (d && d.useFirstGroupAsInitialState) {
          let l = (0, o.default)(d, "actionItemGroups[0].actionItems", []);
          if (
            !x(
              (0, o.default)(c, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey,
            )
          )
            return;
          l.forEach((a) => {
            let { config: i, actionTypeId: l } = a,
              o = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : i,
                event: c,
                elementApi: T,
              }),
              r = W(l);
            o.forEach((i) => {
              let o = r ? H(l)?.(i, a) : null;
              eI({
                destination: v({ element: i, actionItem: a, elementApi: T }, o),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, s.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            (eT(t, e),
              a &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: l, ixSession: r } = e.getState(),
          c = r.hasBoundaryNodes && n ? T.getClosestElement(n, L) : null;
        (0, s.default)(l, (n) => {
          let l = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            r = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && r) {
            if (c && l && !T.elementContains(c, n.element)) return;
            (eT(n, e),
              n.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: l = 0,
        immediate: r,
        verbose: c,
      }) {
        let { ixData: d, ixSession: u } = e.getState(),
          { events: s } = d,
          f = s[t] || {},
          { mediaQueries: E = d.mediaQueryKeys } = f,
          { actionItemGroups: p, useFirstGroupAsInitialState: I } = (0,
          o.default)(d, `actionLists.${i}`, {});
        if (!p || !p.length) return !1;
        (l >= p.length && (0, o.default)(f, "config.loop") && (l = 0),
          0 === l && I && l++);
        let b =
            (0 === l || (1 === l && I)) && m(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, o.default)(p, [l, "actionItems"], []);
        if (!y.length || !x(E, u.mediaQueryKey)) return !1;
        let g = u.hasBoundaryNodes && n ? T.getClosestElement(n, L) : null,
          O = V(y),
          _ = !1;
        return (
          y.forEach((o, d) => {
            let { config: u, actionTypeId: s } = o,
              E = W(s),
              { target: p } = u;
            p &&
              S({
                config: u,
                event: f,
                eventTarget: n,
                elementRoot: p.boundaryMode ? g : null,
                elementApi: T,
              }).forEach((u, f) => {
                let p = E ? H(s)?.(u, o) : null,
                  I = E ? K(s)(u, o) : null;
                _ = !0;
                let y = G({ element: u, actionItem: o }),
                  g = v({ element: u, actionItem: o, elementApi: T }, p);
                eI({
                  store: e,
                  element: u,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: l,
                  isCarrier: O === d && 0 === f,
                  computedStyle: y,
                  destination: g,
                  immediate: r,
                  verbose: c,
                  pluginInstance: p,
                  pluginDuration: I,
                  instanceDelay: b,
                });
              });
          }),
          _
        );
      }
      function eI(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: l,
            actionItem: o,
            immediate: r,
            pluginInstance: c,
            continuous: d,
            restingValue: u,
            eventId: s,
          } = i,
          f = h(),
          { ixElements: p, ixSession: b, ixData: y } = n.getState(),
          g = C(p, l),
          { refState: O } = p[g] || {},
          m = T.getRefType(l),
          _ = b.reducedMotion && E.ReducedMotionTypes[o.actionTypeId];
        if (_ && d)
          switch (y.events[s]?.eventTypeId) {
            case E.EventTypeConsts.MOUSE_MOVE:
            case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = u;
              break;
            default:
              t = 0.5;
          }
        let L = U(l, O, a, o, T, c);
        if (
          (n.dispatch(
            (0, I.instanceAdded)({
              instanceId: f,
              elementId: g,
              origin: L,
              refType: m,
              skipMotion: _,
              skipToValue: t,
              ...i,
            }),
          ),
          eb(document.body, "ix2-animation-started", f),
          r)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: a } = e.getState();
            ey(a[t], e);
          })(n, f);
        (M({ store: n, select: ({ ixInstances: e }) => e[f], onChange: ey }),
          d || n.dispatch((0, I.instanceStarted)(f, b.tick)));
      }
      function eT(e, t) {
        eb(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: l, refType: o } = i[n] || {};
        (o === R && w(l, a, T), t.dispatch((0, I.instanceRemoved)(e.id)));
      }
      function eb(e, t, n) {
        let a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a));
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: l,
            actionItem: o,
            actionTypeId: r,
            renderType: c,
            current: d,
            groupIndex: u,
            eventId: s,
            eventTarget: f,
            eventStateKey: E,
            actionListId: p,
            isCarrier: b,
            styleProp: y,
            verbose: g,
            pluginInstance: O,
          } = e,
          { ixData: m, ixSession: _ } = t.getState(),
          { events: L } = m,
          { mediaQueries: A = m.mediaQueryKeys } = L && L[s] ? L[s] : {};
        if (x(A, _.mediaQueryKey) && (a || n || i)) {
          if (d || (c === N && i)) {
            t.dispatch((0, I.elementStateChanged)(l, r, d, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[l] || {},
              u = i && i[r];
            (a === R || W(r)) && P(n, i, u, s, o, y, T, c, O);
          }
          if (i) {
            if (b) {
              let e = ep({
                store: t,
                eventId: s,
                eventTarget: f,
                eventStateKey: E,
                actionListId: p,
                groupIndex: u + 1,
                verbose: g,
              });
              g &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: p,
                    isPlaying: !1,
                  }),
                );
            }
            eT(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eE;
          },
        }));
      let i = s(n(5801)),
        l = s(n(4738)),
        o = s(n(3789)),
        r = n(7087),
        c = n(1970),
        d = n(3946),
        u = n(9468);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: E,
          MOUSE_DOWN: p,
          MOUSE_UP: I,
          MOUSE_OVER: T,
          MOUSE_OUT: b,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: g,
          SLIDER_ACTIVE: O,
          SLIDER_INACTIVE: m,
          TAB_ACTIVE: _,
          TAB_INACTIVE: L,
          NAVBAR_CLOSE: R,
          NAVBAR_OPEN: N,
          MOUSE_MOVE: A,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: C,
          SCROLL_OUT_OF_VIEW: v,
          PAGE_SCROLL_UP: M,
          SCROLLING_IN_VIEW: h,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: F,
          ECOMMERCE_CART_OPEN: V,
          PAGE_START: G,
          PAGE_SCROLL: U,
        } = r.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: B } = r.IX2EngineConstants,
        { getNamespacedParameterId: x } = u.IX2VanillaUtils,
        w = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = w(({ element: e, nativeEvent: t }) => e === t.target),
        j = w(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        Y = (0, i.default)([X, j]),
        Q = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        W = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!Q(e, a);
        },
        H = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: o, id: r } = t,
            { actionListId: d, autoStopEventId: u } = o.config,
            s = Q(e, u);
          return (
            s &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + B + a.split(B)[1],
                actionListId: (0, l.default)(s, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: r,
              eventTarget: n,
              eventStateKey: a,
              actionListId: d,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: r,
              eventTarget: n,
              eventStateKey: a,
              actionListId: d,
            }),
            i
          );
        },
        K = (e, t) => (n, a) => (!0 === e(n, a) ? t(n, a) : a),
        z = { handler: K(Y, H) },
        $ = { ...z, types: [k, D].join(" ") },
        q = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: q },
        ee = { PAGE_START: G, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            l = e.contains(a);
          if ("mouseover" === n && l) return !0;
          let o = e.contains(i);
          return "mouseout" === n && !!l && !!o;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            l = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? l : (i * (l || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: a,
            bottom: i - o,
          });
        },
        el = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [k, D].indexOf(a) ? a === k : n.isActive,
            l = { ...n, isActive: i };
          return ((!n || l.isActive !== n.isActive) && e(t, l)) || l;
        },
        eo = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        er =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: l, scrollHeight: o, innerHeight: r } = et(),
              {
                event: { config: c, eventTypeId: d },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: s } = c,
              f = o - r,
              E = Number((l / f).toFixed(2));
            if (n && n.percentTop === E) return n;
            let p = ("PX" === s ? u : (r * (u || 0)) / 100) / f,
              I = 0;
            n &&
              ((a = E > n.percentTop),
              (I = (i = n.scrollingDown !== a) ? E : n.anchorTop));
            let T = d === S ? E >= I + p : E <= I - p,
              b = {
                ...n,
                percentTop: E,
                inBounds: T,
                anchorTop: I,
                scrollingDown: a,
              };
            return (n && T && (i || b.inBounds !== n.inBounds) && e(t, b)) || b;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ed =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        eu = (e = !0) => ({
          ...$,
          handler: K(
            e ? Y : X,
            el((e, t) => (t.isActive ? z.handler(e, t) : t)),
          ),
        }),
        es = (e = !0) => ({
          ...$,
          handler: K(
            e ? Y : X,
            el((e, t) => (t.isActive ? t : z.handler(e, t))),
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: l } = i.getState(),
                { events: o } = l;
              return !o[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === C) === n
                  ? (H(e), { ...t, triggered: !0 })
                  : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        eE = {
          [O]: eu(),
          [m]: es(),
          [g]: eu(),
          [y]: es(),
          [N]: eu(!1),
          [R]: es(!1),
          [_]: eu(),
          [L]: es(),
          [V]: { types: "ecommerce-cart-open", handler: K(Y, H) },
          [F]: { types: "ecommerce-cart-close", handler: K(Y, H) },
          [f]: {
            types: "click",
            handler: K(
              Y,
              ed((e, { clickCount: t }) => {
                W(e) ? 1 === t && H(e) : H(e);
              }),
            ),
          },
          [E]: {
            types: "click",
            handler: K(
              Y,
              ed((e, { clickCount: t }) => {
                2 === t && H(e);
              }),
            ),
          },
          [p]: { ...z, types: "mousedown" },
          [I]: { ...z, types: "mouseup" },
          [T]: {
            types: Z,
            handler: K(
              Y,
              eo((e, t) => {
                t.elementHovered && H(e);
              }),
            ),
          },
          [b]: {
            types: Z,
            handler: K(
              Y,
              eo((e, t) => {
                t.elementHovered || H(e);
              }),
            ),
          },
          [A]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              l = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: c,
                  continuousParameterGroupId: u,
                  reverse: s,
                  restingState: f = 0,
                } = n,
                {
                  clientX: E = l.clientX,
                  clientY: p = l.clientY,
                  pageX: I = l.pageX,
                  pageY: T = l.pageY,
                } = a,
                b = "X_AXIS" === c,
                y = "mouseout" === a.type,
                g = f / 100,
                O = u,
                m = !1;
              switch (o) {
                case r.EventBasedOn.VIEWPORT:
                  g = b
                    ? Math.min(E, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                case r.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  g = b ? Math.min(e + I, n) / n : Math.min(t + T, a) / a;
                  break;
                }
                case r.EventBasedOn.ELEMENT:
                default: {
                  O = x(i, u);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== Y({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: l, top: o, width: r, height: c } = n;
                  if (!e && !ec({ left: E, top: p }, n)) break;
                  ((m = !0), (g = b ? (E - l) / r : (p - o) / c));
                }
              }
              return (
                y && (g > 0.95 || g < 0.05) && (g = Math.round(g)),
                (o !== r.EventBasedOn.ELEMENT || m || m !== l.elementHovered) &&
                  ((g = s ? 1 - g : g),
                  e.dispatch((0, d.parameterChanged)(O, g))),
                {
                  elementHovered: m,
                  clientX: E,
                  clientY: p,
                  pageX: I,
                  pageY: T,
                }
              );
            },
          },
          [U]: {
            types: q,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: l, clientHeight: o } = et(),
                r = i / (l - o);
              ((r = a ? 1 - r : r), e.dispatch((0, d.parameterChanged)(n, r)));
            },
          },
          [h]: {
            types: q,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: l,
                  scrollTop: o,
                  scrollWidth: c,
                  scrollHeight: u,
                  clientHeight: s,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: E,
                  continuousParameterGroupId: p,
                  startsEntering: I,
                  startsExiting: T,
                  addEndOffset: b,
                  addStartOffset: y,
                  addOffsetValue: g = 0,
                  endOffsetValue: O = 0,
                } = n;
              if (f === r.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === E ? l / c : o / u;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, d.parameterChanged)(p, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = x(a, p),
                  l = e.getBoundingClientRect(),
                  o = (y ? g : 0) / 100,
                  r = (b ? O : 0) / 100;
                ((o = I ? o : 1 - o), (r = T ? r : 1 - r));
                let c = l.top + Math.min(l.height * o, s),
                  f = Math.min(s + (l.top + l.height * r - c), u),
                  E = Math.min(Math.max(0, s - c), f) / f;
                return (
                  E !== i.scrollPercent &&
                    t.dispatch((0, d.parameterChanged)(n, E)),
                  { scrollPercent: E }
                );
              }
            },
          },
          [C]: ef,
          [v]: ef,
          [S]: {
            ...J,
            handler: er((e, t) => {
              t.scrollingDown && H(e);
            }),
          },
          [M]: {
            ...J,
            handler: er((e, t) => {
              t.scrollingDown || H(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: K(X, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return (n.finished && !(t && t.finshed) && H(e), n);
            }),
          },
          [G]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: K(X, (e, t) => (t || H(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return m;
          },
        }));
      let a = n(7087),
        i = n(9468),
        l = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: r,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: d,
          IX2_INSTANCE_REMOVED: u,
          IX2_ANIMATION_FRAME_CHANGED: s,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: E,
          createBezierEasing: p,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = a.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: b,
          getStyleProp: y,
        } = i.IX2VanillaUtils,
        g = (e, t) => {
          let n,
            a,
            i,
            o,
            {
              position: r,
              parameterId: c,
              actionGroups: d,
              destinationKeys: u,
              smoothing: s,
              restingValue: p,
              actionTypeId: I,
              customEasingFn: b,
              skipMotion: y,
              skipToValue: g,
            } = e,
            { parameters: O } = t.payload,
            m = Math.max(1 - s, 0.01),
            _ = O[c];
          null == _ && ((m = 1), (_ = p));
          let L = f((Math.max(_, 0) || 0) - r),
            R = y ? g : f(r + L * m),
            N = 100 * R;
          if (R === r && e.current) return e;
          for (let e = 0, { length: t } = d; e < t; e++) {
            let { keyframe: t, actionItems: l } = d[e];
            if ((0 === e && (n = l[0]), N >= t)) {
              n = l[0];
              let r = d[e + 1],
                c = r && N !== t;
              ((a = c ? r.actionItems[0] : null),
                c && ((i = t / 100), (o = (r.keyframe - t) / 100)));
            }
          }
          let A = {};
          if (n && !a)
            for (let e = 0, { length: t } = u; e < t; e++) {
              let t = u[e];
              A[t] = T(I, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== o) {
            let e = (R - i) / o,
              t = E(n.config.easing, e, b);
            for (let e = 0, { length: i } = u; e < i; e++) {
              let i = u[e],
                l = T(I, i, n.config),
                o = (T(I, i, a.config) - l) * t + l;
              A[i] = o;
            }
          }
          return (0, l.merge)(e, { position: R, current: A });
        },
        O = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: o,
              renderType: r,
              verbose: c,
              actionItem: d,
              destination: u,
              destinationKeys: s,
              pluginDuration: p,
              instanceDelay: T,
              customEasingFn: b,
              skipMotion: y,
            } = e,
            g = d.config.easing,
            { duration: O, delay: m } = d.config;
          (null != p && (O = p),
            (m = null != T ? T : m),
            r === I ? (O = 0) : (o || y) && (O = m = 0));
          let { now: _ } = t.payload;
          if (n && a) {
            let t = _ - (i + m);
            if (c) {
              let t = O + m,
                n = f(Math.min(Math.max(0, (_ - i) / t), 1));
              e = (0, l.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / O), 1)),
              o = E(g, n, b),
              r = {},
              d = null;
            return (
              s.length &&
                (d = s.reduce((e, t) => {
                  let n = u[t],
                    i = parseFloat(a[t]) || 0,
                    l = parseFloat(n) - i;
                  return ((e[t] = l * o + i), e);
                }, {})),
              (r.current = d),
              (r.position = n),
              1 === n && ((r.active = !1), (r.complete = !0)),
              (0, l.merge)(e, r)
            );
          }
          return e;
        },
        m = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case r:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: o,
                  eventTarget: r,
                  eventStateKey: c,
                  actionListId: d,
                  groupIndex: u,
                  isCarrier: s,
                  origin: f,
                  destination: E,
                  immediate: I,
                  verbose: T,
                  continuous: g,
                  parameterId: O,
                  actionGroups: m,
                  smoothing: _,
                  restingValue: L,
                  pluginInstance: R,
                  pluginDuration: N,
                  instanceDelay: A,
                  skipMotion: S,
                  skipToValue: C,
                } = t.payload,
                { actionTypeId: v } = i,
                M = b(v),
                h = y(M, v),
                P = Object.keys(E).filter(
                  (e) => null != E[e] && "string" != typeof E[e],
                ),
                { easing: F } = i.config;
              return (0, l.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: E,
                destinationKeys: P,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: v,
                eventId: o,
                eventTarget: r,
                eventStateKey: c,
                actionListId: d,
                groupIndex: u,
                renderType: M,
                isCarrier: s,
                styleProp: h,
                continuous: g,
                parameterId: O,
                actionGroups: m,
                smoothing: _,
                restingValue: L,
                pluginInstance: R,
                pluginDuration: N,
                instanceDelay: A,
                skipMotion: S,
                skipToValue: C,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? p(F) : void 0,
              });
            }
            case d: {
              let { instanceId: n, time: a } = t.payload;
              return (0, l.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case u: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: l } = i;
              for (let t = 0; t < l; t++) {
                let l = i[t];
                l !== n && (a[l] = e[l]);
              }
              return a;
            }
            case s: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let o = 0; o < i; o++) {
                let i = a[o],
                  r = e[i],
                  c = r.continuous ? g : O;
                n = (0, l.set)(n, i, c(r, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: l,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case l: {
              let { key: n, value: a } = t.payload;
              return ((e[n] = a), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let a = n(9516),
        i = n(4609),
        l = n(628),
        o = n(5862),
        r = n(9468),
        c = n(7718),
        d = n(1540),
        { ixElements: u } = r.IX2ElementsReducer,
        s = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: l.ixRequest,
          ixSession: o.ixSession,
          ixElements: u,
          ixInstances: c.ixInstances,
          ixParameters: d.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: l,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: r,
          IX2_CLEAR_REQUESTED: c,
        } = a.IX2EngineActionTypes,
        d = { preview: {}, playback: {}, stop: {}, clear: {} },
        u = Object.create(null, {
          [l]: { value: "preview" },
          [o]: { value: "playback" },
          [r]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        s = (e = d, t) => {
          if (t.type in u) {
            let n = [u[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: r,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: d,
          IX2_EVENT_STATE_CHANGED: u,
          IX2_ANIMATION_FRAME_CHANGED: s,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: E,
          IX2_MEDIA_QUERIES_DEFINED: p,
        } = a.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = I, t) => {
          switch (t.type) {
            case l: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case o:
              return (0, i.set)(e, "active", !0);
            case r: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case c:
              return I;
            case s: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case d: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case u: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case E: {
              let { width: n, mediaQueries: a } = t.payload,
                l = a.length,
                o = null;
              for (let e = 0; e < l; e++) {
                let { key: t, min: i, max: l } = a[e];
                if (n >= i && n <= l) {
                  o = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case p:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return r;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return d;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        l = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        r = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        d = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        u = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        l = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        d = () => null,
        u = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        s = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        E = (e, { PLUGIN_RIVE: t }, n) => {
          let a = r();
          if (!a) return;
          let o = a.getInstance(e),
            c = a.rive.StateMachineInputType,
            { name: d, inputs: u = {} } = n.config.value || {};
          function s(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(d);
              if (null != n) {
                if ((e.isPlaying || e.play(d, !1), i in u || l in u)) {
                  let t = e.layout,
                    n = u[i] ?? t.fit,
                    a = u[l] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in u) {
                  if (e === i || e === l) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case c.Boolean:
                        null != u[e] && (a.value = !!u[e]);
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case c.Trigger:
                        u[e] && a.fire();
                    }
                }
              }
            }
          }
          o?.rive ? s(o.rive) : a.setLoadHandler(e, s);
        },
        p = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        r = (e, t) => e.value[t],
        c = () => null,
        d = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        u = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = d[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = d[t]), e), {});
        },
        s = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        E = (e, t, n) => {
          let a = l();
          if (!a) return;
          let i = a.getInstance(e),
            o = n.config.target.objectId,
            r = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              (null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ));
            };
          i ? r(i.spline) : a.setLoadHandler(e, r);
        },
        p = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = n(380),
        o = (e, t) => e.value[t],
        r = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(i) }
              : null != n.red && null != n.green && null != n.blue
                ? (0, l.normalizeColor)(i)
                : void 0;
        },
        d = (e) => e.value,
        u = () => null,
        s = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            l = t.PLUGIN_VARIABLE,
            o = Object.values(s).find((e) => e.match(l, i));
          o && document.documentElement.style.setProperty(a, o.getValue(l, i));
        },
        E = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let a = n(7087),
        i = d(n(7377)),
        l = d(n(2866)),
        o = d(n(2570)),
        r = d(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(a, l, o)
              : (a[l] = e[l]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
      let u = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...l }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...r }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return O;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return p;
        },
        IX2_CLEAR_REQUESTED: function () {
          return s;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return g;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return E;
        },
        IX2_INSTANCE_ADDED: function () {
          return T;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return b;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return _;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return d;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return l;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return r;
        },
        IX2_STOP_REQUESTED: function () {
          return u;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return L;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return m;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        l = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        r = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        d = "IX2_PLAYBACK_REQUESTED",
        u = "IX2_STOP_REQUESTED",
        s = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        E = "IX2_EVENT_STATE_CHANGED",
        p = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        T = "IX2_INSTANCE_ADDED",
        b = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        g = "IX2_ELEMENT_STATE_CHANGED",
        O = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        m = "IX2_VIEWPORT_WIDTH_CHANGED",
        _ = "IX2_MEDIA_QUERIES_DEFINED",
        L = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return Y;
        },
        BACKGROUND: function () {
          return D;
        },
        BACKGROUND_COLOR: function () {
          return k;
        },
        BAR_DELIMITER: function () {
          return H;
        },
        BORDER_COLOR: function () {
          return B;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return K;
        },
        COLON_DELIMITER: function () {
          return W;
        },
        COLOR: function () {
          return x;
        },
        COMMA_DELIMITER: function () {
          return Q;
        },
        CONFIG_UNIT: function () {
          return T;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return E;
        },
        CONFIG_X_VALUE: function () {
          return d;
        },
        CONFIG_Y_UNIT: function () {
          return p;
        },
        CONFIG_Y_VALUE: function () {
          return u;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return s;
        },
        DISPLAY: function () {
          return w;
        },
        FILTER: function () {
          return F;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return V;
        },
        HEIGHT: function () {
          return U;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return z;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return q;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return el;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return A;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return C;
        },
        SCALE_3D: function () {
          return N;
        },
        SCALE_X: function () {
          return _;
        },
        SCALE_Y: function () {
          return L;
        },
        SCALE_Z: function () {
          return R;
        },
        SIBLINGS: function () {
          return $;
        },
        SKEW: function () {
          return v;
        },
        SKEW_X: function () {
          return M;
        },
        SKEW_Y: function () {
          return h;
        },
        TRANSFORM: function () {
          return b;
        },
        TRANSLATE_3D: function () {
          return m;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return g;
        },
        TRANSLATE_Z: function () {
          return O;
        },
        WF_PAGE: function () {
          return l;
        },
        WIDTH: function () {
          return G;
        },
        WILL_CHANGE: function () {
          return j;
        },
        W_MOD_IX: function () {
          return r;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        l = "data-wf-page",
        o = "w-mod-js",
        r = "w-mod-ix",
        c = ".w-dyn-item",
        d = "xValue",
        u = "yValue",
        s = "zValue",
        f = "value",
        E = "xUnit",
        p = "yUnit",
        I = "zUnit",
        T = "unit",
        b = "transform",
        y = "translateX",
        g = "translateY",
        O = "translateZ",
        m = "translate3d",
        _ = "scaleX",
        L = "scaleY",
        R = "scaleZ",
        N = "scale3d",
        A = "rotateX",
        S = "rotateY",
        C = "rotateZ",
        v = "skew",
        M = "skewX",
        h = "skewY",
        P = "opacity",
        F = "filter",
        V = "font-variation-settings",
        G = "width",
        U = "height",
        k = "backgroundColor",
        D = "background",
        B = "borderColor",
        x = "color",
        w = "display",
        X = "flex",
        j = "willChange",
        Y = "AUTO",
        Q = ",",
        W = ":",
        H = "|",
        K = "CHILDREN",
        z = "IMMEDIATE_CHILDREN",
        $ = "SIBLINGS",
        q = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        el = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return l;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        l = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return r;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return l.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = d(n(1833), t),
        o = d(n(262), t);
      (d(n(8704), t), d(n(3213), t));
      let r = s(n(8023)),
        c = s(n(2686));
      function d(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(a, l, o)
              : (a[l] = e[l]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: l,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: r,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: d,
        } = n(262).ActionTypeConsts,
        u = { [a]: !0, [i]: !0, [l]: !0, [o]: !0, [r]: !0, [c]: !0, [d]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return l;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return r;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return u;
        },
        QuickEffectIds: function () {
          return d;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        l = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        r = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        d = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        u = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          l = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          r = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (r.startsWith("#")) {
          let e = r.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (l = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (l = parseInt(e.substring(6, 8), 16) / 255));
        } else if (r.startsWith("rgba")) {
          let e = r.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (l = parseFloat(e[3])));
        } else if (r.startsWith("rgb")) {
          let e = r.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)));
        } else if (r.startsWith("hsla")) {
          let e,
            n,
            o,
            c = r.match(/hsla\(([^)]+)\)/)[1].split(","),
            d = parseFloat(c[0]),
            u = parseFloat(c[1].replace("%", "")) / 100,
            s = parseFloat(c[2].replace("%", "")) / 100;
          l = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * s - 1)) * u,
            E = f * (1 - Math.abs(((d / 60) % 2) - 1)),
            p = s - f / 2;
          (d >= 0 && d < 60
            ? ((e = f), (n = E), (o = 0))
            : d >= 60 && d < 120
              ? ((e = E), (n = f), (o = 0))
              : d >= 120 && d < 180
                ? ((e = 0), (n = f), (o = E))
                : d >= 180 && d < 240
                  ? ((e = 0), (n = E), (o = f))
                  : d >= 240 && d < 300
                    ? ((e = E), (n = 0), (o = f))
                    : ((e = f), (n = 0), (o = E)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255)));
        } else if (r.startsWith("hsl")) {
          let e,
            n,
            l,
            o = r.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            d = parseFloat(o[1].replace("%", "")) / 100,
            u = parseFloat(o[2].replace("%", "")) / 100,
            s = (1 - Math.abs(2 * u - 1)) * d,
            f = s * (1 - Math.abs(((c / 60) % 2) - 1)),
            E = u - s / 2;
          (c >= 0 && c < 60
            ? ((e = s), (n = f), (l = 0))
            : c >= 60 && c < 120
              ? ((e = f), (n = s), (l = 0))
              : c >= 120 && c < 180
                ? ((e = 0), (n = s), (l = f))
                : c >= 180 && c < 240
                  ? ((e = 0), (n = f), (l = s))
                  : c >= 240 && c < 300
                    ? ((e = f), (n = 0), (l = s))
                    : ((e = s), (n = 0), (l = f)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((l + E) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return { red: t, green: a, blue: i, alpha: l };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return l;
        },
        IX2EasingUtils: function () {
          return r;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return d;
        },
        IX2VanillaUtils: function () {
          return u;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = f(n(2662)),
        o = f(n(8686)),
        r = f(n(3767)),
        c = f(n(5861)),
        d = f(n(1799)),
        u = f(n(4124));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(a, l, o)
              : (a[l] = e[l]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return d;
          },
          FLEX_PREFIXED: function () {
            return u;
          },
          IS_BROWSER_ENV: function () {
            return r;
          },
          TRANSFORM_PREFIXED: function () {
            return s;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return E;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var l in i)
        Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = (a = n(9777)) && a.__esModule ? a : { default: a },
        r = "undefined" != typeof window,
        c = (e, t) => (r ? e() : t),
        d = c(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        u = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        s = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = s.split("transform")[0],
        E = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return s;
          },
          createBezierEasing: function () {
            return u;
          },
          optimizeFloat: function () {
            return d;
          },
        };
      for (var l in i)
        Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, l, o)
                : (a[l] = e[l]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(8686)),
        r = (a = n(1361)) && a.__esModule ? a : { default: a };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function u(e) {
        return (0, r.default)(...e);
      }
      function s(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? d(t > 0 ? n(t) : t)
              : d(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return j;
          },
          ease: function () {
            return r;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return u;
          },
          easeOut: function () {
            return d;
          },
          inBack: function () {
            return F;
          },
          inCirc: function () {
            return v;
          },
          inCubic: function () {
            return p;
          },
          inElastic: function () {
            return U;
          },
          inExpo: function () {
            return A;
          },
          inOutBack: function () {
            return G;
          },
          inOutCirc: function () {
            return h;
          },
          inOutCubic: function () {
            return T;
          },
          inOutElastic: function () {
            return D;
          },
          inOutExpo: function () {
            return C;
          },
          inOutQuad: function () {
            return E;
          },
          inOutQuart: function () {
            return g;
          },
          inOutQuint: function () {
            return _;
          },
          inOutSine: function () {
            return N;
          },
          inQuad: function () {
            return s;
          },
          inQuart: function () {
            return b;
          },
          inQuint: function () {
            return O;
          },
          inSine: function () {
            return L;
          },
          outBack: function () {
            return V;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return M;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return k;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return m;
          },
          outSine: function () {
            return R;
          },
          swingFrom: function () {
            return x;
          },
          swingFromTo: function () {
            return B;
          },
          swingTo: function () {
            return w;
          },
        };
      for (var l in i)
        Object.defineProperty(t, l, { enumerable: !0, get: i[l] });
      let o = (a = n(1361)) && a.__esModule ? a : { default: a },
        r = (0, o.default)(0.25, 0.1, 0.25, 1),
        c = (0, o.default)(0.42, 0, 1, 1),
        d = (0, o.default)(0, 0, 0.58, 1),
        u = (0, o.default)(0.42, 0, 0.58, 1);
      function s(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function E(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function p(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function b(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function g(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function O(e) {
        return Math.pow(e, 5);
      }
      function m(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function _(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function L(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function R(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function N(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function A(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function C(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function v(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function M(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function h(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function V(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function D(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                a < 1
                  ? ((a = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                e < 1)
              ? -0.5 *
                (a *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : a *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function B(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function x(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function w(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return E;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return u;
        },
        isPluginType: function () {
          return r;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = n(2662),
        o = n(3690);
      function r(e) {
        return o.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!l.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        d = c("getPluginConfig"),
        u = c("getPluginOrigin"),
        s = c("getPluginDuration"),
        f = c("getPluginDestination"),
        E = c("createPluginInstance"),
        p = c("renderPlugin"),
        I = c("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return eQ;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return es;
        },
        getActionListProgress: function () {
          return ez;
        },
        getAffectedElements: function () {
          return eO;
        },
        getComputedStyle: function () {
          return em;
        },
        getDestinationValues: function () {
          return ev;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return eE;
        },
        getInstanceOrigin: function () {
          return eN;
        },
        getItemConfigByKey: function () {
          return eC;
        },
        getMaxDurationItemIndex: function () {
          return eK;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eM;
        },
        getStyleProp: function () {
          return eh;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return e$;
        },
        reifyState: function () {
          return eT;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return u.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eq;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = I(n(4075)),
        o = I(n(1455)),
        r = I(n(5720)),
        c = n(1185),
        d = n(7087),
        u = I(n(7164)),
        s = n(3767),
        f = n(380),
        E = n(1799),
        p = n(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: T,
          TRANSFORM: b,
          TRANSLATE_3D: y,
          SCALE_3D: g,
          ROTATE_X: O,
          ROTATE_Y: m,
          ROTATE_Z: _,
          SKEW: L,
          PRESERVE_3D: R,
          FLEX: N,
          OPACITY: A,
          FILTER: S,
          FONT_VARIATION_SETTINGS: C,
          WIDTH: v,
          HEIGHT: M,
          BACKGROUND_COLOR: h,
          BORDER_COLOR: P,
          COLOR: F,
          CHILDREN: V,
          IMMEDIATE_CHILDREN: G,
          SIBLINGS: U,
          PARENT: k,
          DISPLAY: D,
          WILL_CHANGE: B,
          AUTO: x,
          COMMA_DELIMITER: w,
          COLON_DELIMITER: X,
          BAR_DELIMITER: j,
          RENDER_TRANSFORM: Y,
          RENDER_GENERAL: Q,
          RENDER_STYLE: W,
          RENDER_PLUGIN: H,
        } = d.IX2EngineConstants,
        {
          TRANSFORM_MOVE: K,
          TRANSFORM_SCALE: z,
          TRANSFORM_ROTATE: $,
          TRANSFORM_SKEW: q,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: el,
          OBJECT_VALUE: eo,
        } = d.ActionTypeConsts,
        er = (e) => e.trim(),
        ec = Object.freeze({ [en]: h, [ea]: P, [ei]: F }),
        ed = Object.freeze({
          [p.TRANSFORM_PREFIXED]: b,
          [h]: T,
          [A]: A,
          [S]: S,
          [v]: v,
          [M]: M,
          [C]: C,
        }),
        eu = new Map();
      function es() {
        eu.clear();
      }
      let ef = 1;
      function eE() {
        return "i" + ef++;
      }
      let ep = 1;
      function eI(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + ep++;
      }
      function eT({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          i = n && n.mediaQueries,
          l = [];
        return (
          i
            ? (l = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: l,
            },
          }
        );
      }
      let eb = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: a = eb }) {
        let { getState: i, subscribe: l } = e,
          o = l(function () {
            let l = t(i());
            if (null == l) return void o();
            a(l, r) || n((r = l), e);
          }),
          r = t(i());
        return o;
      }
      function eg(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: l,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: l,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eO({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let l, o, r;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, l) =>
              e.concat(
                eO({
                  config: { target: l },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                }),
              ),
            [],
          );
        let {
            getValidDocument: u,
            getQuerySelector: s,
            queryDocument: f,
            getChildElements: E,
            getSiblingElements: I,
            matchSelector: T,
            elementContains: b,
            isSiblingNode: y,
          } = i,
          { target: g } = e;
        if (!g) return [];
        let {
          id: O,
          objectId: m,
          selector: _,
          selectorGuids: L,
          appliesTo: R,
          useEventTarget: N,
        } = eg(g);
        if (m) return [eu.has(m) ? eu.get(m) : eu.set(m, {}).get(m)];
        if (R === d.EventAppliesTo.PAGE) {
          let e = u(O);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[O || _] || {},
          S = !!(A.id || A.selector),
          C = t && s(eg(t.target));
        if (
          (S
            ? ((l = A.limitAffectedElements), (o = C), (r = s(A)))
            : (o = r = s({ id: O, selector: _, selectorGuids: L })),
          t && N)
        ) {
          let e = n && (r || !0 === N) ? [n] : f(C);
          if (r) {
            if (N === k) return f(r).filter((t) => e.some((e) => b(t, e)));
            if (N === V) return f(r).filter((t) => e.some((e) => b(e, t)));
            if (N === U) return f(r).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == o || null == r
          ? []
          : p.IS_BROWSER_ENV && a
            ? f(r).filter((e) => a.contains(e))
            : l === V
              ? f(o, r)
              : l === G
                ? E(f(o)).filter(T(r))
                : l === U
                  ? I(f(o)).filter(T(r))
                  : f(r);
      }
      function em({ element: e, actionItem: t }) {
        if (!p.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case el:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let e_ = /px/,
        eL = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e),
            e || {},
          ),
        eR = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eG[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function eN(e, t = {}, n = {}, a, i) {
        let { getStyle: o } = i,
          { actionTypeId: r } = a;
        if ((0, E.isPluginType)(r)) return (0, E.getPluginOrigin)(r)(t[r], a);
        switch (a.actionTypeId) {
          case K:
          case z:
          case $:
          case q:
            return t[a.actionTypeId] || eF[a.actionTypeId];
          case J:
            return eL(t[a.actionTypeId], a.config.filters);
          case ee:
            return eR(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, l.default)(parseFloat(o(e, A)), 1) };
          case et: {
            let t,
              i = o(e, v),
              r = o(e, M);
            return {
              widthValue:
                a.config.widthUnit === x
                  ? e_.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, l.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === x
                  ? e_.test(r)
                    ? parseFloat(r)
                    : parseFloat(n.height)
                  : (0, l.default)(parseFloat(r), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = ec[t],
                o = a(e, i),
                r = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eB, eD.test(o) ? o : n[i]).split(w);
              return {
                rValue: (0, l.default)(parseInt(r[0], 10), 255),
                gValue: (0, l.default)(parseInt(r[1], 10), 255),
                bValue: (0, l.default)(parseInt(r[2], 10), 255),
                aValue: (0, l.default)(parseFloat(r[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case el:
            return { value: (0, l.default)(o(e, D), n.display) };
          case eo:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eC = (e, t, n) => {
          if ((0, E.isPluginType)(e)) return (0, E.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, r.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, r.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function ev({ element: e, actionItem: t, elementApi: n }) {
        if ((0, E.isPluginType)(t.actionTypeId))
          return (0, E.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case K:
          case z:
          case $:
          case q: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: l } = n,
              { widthUnit: o, heightUnit: r } = t.config,
              { widthValue: c, heightValue: d } = t.config;
            if (!p.IS_BROWSER_ENV) return { widthValue: c, heightValue: d };
            if (o === x) {
              let t = a(e, v);
              (i(e, v, ""), (c = l(e, "offsetWidth")), i(e, v, t));
            }
            if (r === x) {
              let t = a(e, M);
              (i(e, M, ""), (d = l(e, "offsetHeight")), i(e, M, t));
            }
            return { widthValue: c, heightValue: d };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: l,
              aValue: o,
              globalSwatchId: r,
            } = t.config;
            if (r && r.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, r),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: l, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eA, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eM(e) {
        return /^TRANSFORM_/.test(e)
          ? Y
          : /^STYLE_/.test(e)
            ? W
            : /^GENERAL_/.test(e)
              ? Q
              : /^PLUGIN_/.test(e)
                ? H
                : void 0;
      }
      function eh(e, t) {
        return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, a, i, l, r, c, d) {
        switch (c) {
          case Y:
            var u = e,
              s = t,
              f = n,
              I = i,
              T = r;
            let b = ek
                .map((e) => {
                  let t = eF[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: l = "",
                      yUnit: o = "",
                      zUnit: r = "",
                    } = s[e] || {};
                  switch (e) {
                    case K:
                      return `${y}(${n}${l}, ${a}${o}, ${i}${r})`;
                    case z:
                      return `${g}(${n}${l}, ${a}${o}, ${i}${r})`;
                    case $:
                      return `${O}(${n}${l}) ${m}(${a}${o}) ${_}(${i}${r})`;
                    case q:
                      return `${L}(${n}${l}, ${a}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: A } = T;
            (ex(u, p.TRANSFORM_PREFIXED, T),
              A(u, p.TRANSFORM_PREFIXED, b),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a },
              ) {
                return (
                  (e === K && void 0 !== a) ||
                  (e === z && void 0 !== a) ||
                  (e === $ && (void 0 !== t || void 0 !== n))
                );
              })(I, f) && A(u, p.TRANSFORM_STYLE_PREFIXED, R));
            return;
          case W:
            return (function (e, t, n, a, i, l) {
              let { setStyle: r } = l;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: o, heightValue: c } = n;
                  (void 0 !== o &&
                    (t === x && (t = "px"), ex(e, v, l), r(e, v, o + t)),
                    void 0 !== c &&
                      (i === x && (i = "px"), ex(e, M, l), r(e, M, c + i)));
                  break;
                }
                case J:
                  var c = a.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eU(n, c)})`,
                      "",
                    ),
                    { setStyle: u } = l;
                  (ex(e, S, l), u(e, S, d));
                  break;
                case ee:
                  a.config;
                  let s = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: f } = l;
                  (ex(e, C, l), f(e, C, s));
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ec[a.actionTypeId],
                    i = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    d = n.aValue;
                  (ex(e, t, l),
                    r(
                      e,
                      t,
                      d >= 1
                        ? `rgb(${i},${o},${c})`
                        : `rgba(${i},${o},${c},${d})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  (ex(e, i, l), r(e, i, n.value + t));
                }
              }
            })(e, 0, n, i, l, r);
          case Q:
            var h = e,
              P = i,
              F = r;
            let { setStyle: V } = F;
            if (P.actionTypeId === el) {
              let { value: e } = P.config;
              V(h, D, e === N && p.IS_BROWSER_ENV ? p.FLEX_PREFIXED : e);
            }
            return;
          case H: {
            let { actionTypeId: e } = i;
            if ((0, E.isPluginType)(e)) return (0, E.renderPlugin)(e)(d, t, i);
          }
        }
      }
      let eF = {
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [z]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eV = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eG = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eU = (e, t) => {
          let n = (0, r.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ek = Object.keys(eF),
        eD = /^rgb/,
        eB = RegExp("rgba?\\(([^)]+)\\)");
      function ex(e, t, n) {
        if (!p.IS_BROWSER_ENV) return;
        let a = ed[t];
        if (!a) return;
        let { getStyle: i, setStyle: l } = n,
          o = i(e, B);
        if (!o) return void l(e, B, a);
        let r = o.split(w).map(er);
        -1 === r.indexOf(a) && l(e, B, r.concat(a).join(w));
      }
      function ew(e, t, n) {
        if (!p.IS_BROWSER_ENV) return;
        let a = ed[t];
        if (!a) return;
        let { getStyle: i, setStyle: l } = n,
          o = i(e, B);
        o &&
          -1 !== o.indexOf(a) &&
          l(
            e,
            B,
            o
              .split(w)
              .map(er)
              .filter((e) => e !== a)
              .join(w),
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        (Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: l } = n.action,
            { actionListId: o } = l,
            r = i[o];
          r && ej({ actionList: r, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            ej({ actionList: i[e], elementApi: t });
          }));
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        (a &&
          a.forEach((e) => {
            eY({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eY({ actionGroup: e, event: t, elementApi: n });
              });
            }));
      }
      function eY({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: l } = e;
          ((a = (0, E.isPluginType)(i)
            ? (t) => (0, E.clearPlugin)(i)(t, e)
            : eW({ effect: eH, actionTypeId: i, elementApi: n })),
            eO({ config: l, event: t, elementApi: n }).forEach(a));
        });
      }
      function eQ(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: l } = t;
        if (l === et) {
          let { config: n } = t;
          (n.widthUnit === x && a(e, v, ""), n.heightUnit === x && a(e, M, ""));
        }
        i(e, B) && eW({ effect: ew, actionTypeId: l, elementApi: n })(e);
      }
      let eW =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case K:
            case z:
            case $:
            case q:
              e(a, p.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, S, n);
              break;
            case ee:
              e(a, C, n);
              break;
            case Z:
              e(a, A, n);
              break;
            case et:
              (e(a, v, n), e(a, M, n));
              break;
            case en:
            case ea:
            case ei:
              e(a, ec[t], n);
              break;
            case el:
              e(a, D, n);
          }
        };
      function eH(e, t, n) {
        let { setStyle: a } = n;
        (ew(e, t, n),
          a(e, t, ""),
          t === p.TRANSFORM_PREFIXED && a(e, p.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function eK(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              l = i.delay + i.duration;
            l >= t && ((t = l), (n = a));
          }),
          n
        );
      }
      function ez(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: l = 0 } = t,
          o = 0,
          r = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              c = n[eK(n)],
              { config: d, actionTypeId: u } = c;
            i.id === c.id && (r = o + l);
            let s = eM(u) === Q ? 0 : d.duration;
            o += d.delay + s;
          }),
          o > 0 ? (0, s.optimizeFloat)(r / o) : 0
        );
      }
      function e$({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          l = [],
          o = (e) => (
            l.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(o)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, c.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: l }] },
          })
        );
      }
      function eq(e, { basedOn: t }) {
        return (
          (e === d.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === d.EventBasedOn.ELEMENT || null == t)) ||
          (e === d.EventTypeConsts.MOUSE_MOVE && t === d.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, u.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + j + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + j + n + j + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return L;
        },
        ixElements: function () {
          return _;
        },
        mergeActionState: function () {
          return R;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let l = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: r,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: d,
          CONFIG_X_VALUE: u,
          CONFIG_Y_VALUE: s,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: E,
          CONFIG_X_UNIT: p,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: b,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: g,
          IX2_ELEMENT_STATE_CHANGED: O,
        } = o.IX2EngineActionTypes,
        m = {},
        _ = (e = m, t = {}) => {
          switch (t.type) {
            case y:
              return m;
            case g: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: o,
                  refType: r,
                } = t.payload,
                { actionTypeId: c } = o,
                d = e;
              return (
                (0, l.getIn)(d, [n, a]) !== a && (d = L(d, a, r, n, o)),
                R(d, n, c, i, o)
              );
            }
            case O: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: l,
              } = t.payload;
              return R(e, n, a, i, l);
            }
            default:
              return e;
          }
        };
      function L(e, t, n, a, i) {
        let o =
          n === c ? (0, l.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, l.mergeIn)(e, [a], { id: a, ref: t, refId: o, refType: n });
      }
      function R(e, t, n, a, i) {
        let o = (function (e) {
          let { config: t } = e;
          return N.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              l = t[a],
              o = t[i];
            return (null != l && null != o && (e[i] = o), e);
          }, {});
        })(i);
        return (0, l.mergeIn)(e, [t, "refState", n], a, o);
      }
      let N = [
        [u, p],
        [s, I],
        [f, T],
        [E, b],
      ];
    },
    5230: function () {
      Webflow.require("ix2").init({
        events: {
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-3",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|69c1effc-bf1a-1f96-b5dd-2ece2c145aec",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|69c1effc-bf1a-1f96-b5dd-2ece2c145aec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-3-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19722dc1ccb,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|49a41150-2783-580f-fb67-44e8ef81ce8f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|49a41150-2783-580f-fb67-44e8ef81ce8f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180219a493d,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|49a41150-2783-580f-fb67-44e8ef81ce8f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|49a41150-2783-580f-fb67-44e8ef81ce8f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180219a493d,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223f8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223f8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223f8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223f8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922404",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922404",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922404",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922404",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922410",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922410",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922410",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922410",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922435",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922435",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922435",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922435",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922441",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922441",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922441",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e4922441",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e492244d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e492244d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e492244d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e492244d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1974467caa1,
          },
          "e-71": {
            id: "e-71",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-28",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|fca5cade-d7e5-7227-ea31-abd4230ef2d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|fca5cade-d7e5-7227-ea31-abd4230ef2d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-28-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1976394696a,
          },
          "e-72": {
            id: "e-72",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-73",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|4d533b3e-a87f-0a09-91a6-56f6a614ded7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|4d533b3e-a87f-0a09-91a6-56f6a614ded7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19763dfb274,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-75",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|5d150962-c8e7-8b50-df69-b09e5164ca80",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|5d150962-c8e7-8b50-df69-b09e5164ca80",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19763e10d5b,
          },
          "e-77": {
            id: "e-77",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-78",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19764439557,
          },
          "e-81": {
            id: "e-81",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-34",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|446e81f7-28b0-6079-567e-c8302d434650",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|446e81f7-28b0-6079-567e-c8302d434650",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-34-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1976993ae6f,
          },
          "e-85": {
            id: "e-85",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-38",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6839b77fbb995fb937210fea|2ac9a02c-b378-46be-276f-e271f2f693ca",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|2ac9a02c-b378-46be-276f-e271f2f693ca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-38-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-38-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x19769ba1573,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6839b77fbb995fb937210fea",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19769bd5647,
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-37",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-89",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19769d03319,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-39",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea2e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea2e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-39-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1978cfd06ff,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-92",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|5ebe2328-001b-01a0-963d-dad20f3a4a22",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|5ebe2328-001b-01a0-963d-dad20f3a4a22",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0955fe,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|5ebe2328-001b-01a0-963d-dad20f3a4a22",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|5ebe2328-001b-01a0-963d-dad20f3a4a22",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0955fe,
          },
          "e-93": {
            id: "e-93",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-94",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|6510f595-96fd-0a04-77bb-cf8348c3ae67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|6510f595-96fd-0a04-77bb-cf8348c3ae67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d095f10,
          },
          "e-94": {
            id: "e-94",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|6510f595-96fd-0a04-77bb-cf8348c3ae67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|6510f595-96fd-0a04-77bb-cf8348c3ae67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d095f10,
          },
          "e-95": {
            id: "e-95",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|845cefda-a69e-8e6f-3b34-9f03611b4cc9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|845cefda-a69e-8e6f-3b34-9f03611b4cc9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d09600b,
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-95",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|845cefda-a69e-8e6f-3b34-9f03611b4cc9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|845cefda-a69e-8e6f-3b34-9f03611b4cc9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d09600b,
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-98",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|dd6a2e7b-c4e7-0b19-0740-547525aa6563",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|dd6a2e7b-c4e7-0b19-0740-547525aa6563",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d096108,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-97",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|dd6a2e7b-c4e7-0b19-0740-547525aa6563",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|dd6a2e7b-c4e7-0b19-0740-547525aa6563",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d096108,
          },
          "e-99": {
            id: "e-99",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|dc278675-f199-9555-badc-5c4f6b25d860",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|dc278675-f199-9555-badc-5c4f6b25d860",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d096836,
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|dc278675-f199-9555-badc-5c4f6b25d860",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|dc278675-f199-9555-badc-5c4f6b25d860",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d096836,
          },
          "e-101": {
            id: "e-101",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-102",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|84ecaa10-c96c-c964-c903-528537bc9a95",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|84ecaa10-c96c-c964-c903-528537bc9a95",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0b882e,
          },
          "e-102": {
            id: "e-102",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|84ecaa10-c96c-c964-c903-528537bc9a95",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|84ecaa10-c96c-c964-c903-528537bc9a95",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0b882e,
          },
          "e-103": {
            id: "e-103",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|a14202f1-3361-7dce-5a7a-be14ca4a127a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|a14202f1-3361-7dce-5a7a-be14ca4a127a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0bb4d7,
          },
          "e-104": {
            id: "e-104",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|a14202f1-3361-7dce-5a7a-be14ca4a127a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|a14202f1-3361-7dce-5a7a-be14ca4a127a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0bb4d7,
          },
          "e-105": {
            id: "e-105",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-106",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|c8d5f4d8-a33f-3d1f-d75e-c562680417a0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|c8d5f4d8-a33f-3d1f-d75e-c562680417a0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0bb810,
          },
          "e-106": {
            id: "e-106",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-105",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|c8d5f4d8-a33f-3d1f-d75e-c562680417a0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|c8d5f4d8-a33f-3d1f-d75e-c562680417a0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0bb810,
          },
          "e-107": {
            id: "e-107",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-108",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|a59bd805-4238-af7e-8f28-634a2fce3f93",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|a59bd805-4238-af7e-8f28-634a2fce3f93",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0d81be,
          },
          "e-108": {
            id: "e-108",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-107",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|a59bd805-4238-af7e-8f28-634a2fce3f93",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|a59bd805-4238-af7e-8f28-634a2fce3f93",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1978d0d81be,
          },
          "e-109": {
            id: "e-109",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-110",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979260c2cc,
          },
          "e-111": {
            id: "e-111",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-42",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|2dd152de-bceb-148f-0fa1-8496b68195d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|2dd152de-bceb-148f-0fa1-8496b68195d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-42-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x197a7249d26,
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197b0c1d49f,
          },
          "e-114": {
            id: "e-114",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-44",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6839b77fbb995fb937210fea|2ac9a02c-b378-46be-276f-e271f2f693ca",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6839b77fbb995fb937210fea|2ac9a02c-b378-46be-276f-e271f2f693ca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-44-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x197b0d5303e,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-45",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-116",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199170b22c5,
          },
          "e-117": {
            id: "e-117",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-47",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "68b5a5970b26c2723e61acd5|0a0dcfeb-aab1-23a7-546e-b843c6019869",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|0a0dcfeb-aab1-23a7-546e-b843c6019869",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-47-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x199172972bb,
          },
          "e-118": {
            id: "e-118",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-119",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199172c368d,
          },
          "e-119": {
            id: "e-119",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-118",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199172c368d,
          },
          "e-129": {
            id: "e-129",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "PLUGIN_LOTTIE_EFFECT",
              instant: !1,
              config: {
                actionListId: "pluginLottie",
                autoStopEventId: "e-130",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19917dbf4a9,
          },
          "e-130": {
            id: "e-130",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "PLUGIN_LOTTIE_EFFECT",
              instant: !1,
              config: {
                actionListId: "pluginLottieReverse",
                autoStopEventId: "e-129",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !0,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19917dbf4aa,
          },
          "e-131": {
            id: "e-131",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "PLUGIN_LOTTIE_EFFECT",
              instant: !1,
              config: {
                actionListId: "pluginLottie",
                autoStopEventId: "e-132",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19917dc9a65,
          },
          "e-132": {
            id: "e-132",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "PLUGIN_LOTTIE_EFFECT",
              instant: !1,
              config: {
                actionListId: "pluginLottieReverse",
                autoStopEventId: "e-131",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !0,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19917dc9a66,
          },
          "e-133": {
            id: "e-133",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-51",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|2573720d-222d-2c2d-f434-e984b7c6334c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|2573720d-222d-2c2d-f434-e984b7c6334c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-51-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1991e87965b,
          },
          "e-136": {
            id: "e-136",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-52",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-137",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199a8e36c46,
          },
          "e-138": {
            id: "e-138",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|c685448d-aa23-4a54-2d5d-7ee4450c4fe6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|c685448d-aa23-4a54-2d5d-7ee4450c4fe6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae413e40f,
          },
          "e-140": {
            id: "e-140",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-141",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|91f1a534-77a4-689c-2bee-1a1a32ee040a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|91f1a534-77a4-689c-2bee-1a1a32ee040a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae419db88,
          },
          "e-142": {
            id: "e-142",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-143",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|e0094e31-5cab-619a-4f7c-8ded238ac5cf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|e0094e31-5cab-619a-4f7c-8ded238ac5cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae422a596,
          },
          "e-143": {
            id: "e-143",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-142",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|e0094e31-5cab-619a-4f7c-8ded238ac5cf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|e0094e31-5cab-619a-4f7c-8ded238ac5cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae422a596,
          },
          "e-144": {
            id: "e-144",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-145",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|f54352cc-9bea-68b7-4db7-26d36807d4ba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|f54352cc-9bea-68b7-4db7-26d36807d4ba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae42367e0,
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|f54352cc-9bea-68b7-4db7-26d36807d4ba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|f54352cc-9bea-68b7-4db7-26d36807d4ba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae42367e0,
          },
          "e-146": {
            id: "e-146",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-147",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|d96dc3a5-40c5-a9c9-368a-5eb5f2d109f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|d96dc3a5-40c5-a9c9-368a-5eb5f2d109f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae42369c6,
          },
          "e-147": {
            id: "e-147",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-146",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|d96dc3a5-40c5-a9c9-368a-5eb5f2d109f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|d96dc3a5-40c5-a9c9-368a-5eb5f2d109f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae42369c6,
          },
          "e-148": {
            id: "e-148",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-149",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|cecede9d-e442-1130-6ca2-a77128f7d598",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|cecede9d-e442-1130-6ca2-a77128f7d598",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae4236b7a,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-148",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|cecede9d-e442-1130-6ca2-a77128f7d598",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|cecede9d-e442-1130-6ca2-a77128f7d598",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae4236b7a,
          },
          "e-152": {
            id: "e-152",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-153",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|936bd476-0c17-b636-4d6f-f69ac9abdf86",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|936bd476-0c17-b636-4d6f-f69ac9abdf86",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae7a5b393,
          },
          "e-154": {
            id: "e-154",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-155",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|4265aa60-46b3-a267-0838-e0751850aeaa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|4265aa60-46b3-a267-0838-e0751850aeaa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae7a685e4,
          },
          "e-156": {
            id: "e-156",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-157",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|dff1da23-2de4-4ceb-e9f5-97e3ed2d693c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5|dff1da23-2de4-4ceb-e9f5-97e3ed2d693c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19ae7a6c03c,
          },
          "e-158": {
            id: "e-158",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-159",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19b6decedc6,
          },
          "e-160": {
            id: "e-160",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-56",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-161",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b5a5970b26c2723e61acd5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19b6df07636,
          },
          "e-162": {
            id: "e-162",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-163",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b5a5970b26c2723e61acd5|0d47b7d8-1c57-4b6d-3efd-dee22ad166bb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19b73d640e6,
          },
        },
        actionLists: {
          "a-3": {
            id: "a-3",
            title: "bits open",
            continuousParameterGroups: [
              {
                id: "a-3-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 41,
                    actionItems: [
                      {
                        id: "a-3-n",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6839b77fbb995fb937210fea|b6d9abad-3798-59fe-0377-099f9fe87475",
                          },
                          value: 0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 52,
                    actionItems: [
                      {
                        id: "a-3-n-2",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6839b77fbb995fb937210fea|b6d9abad-3798-59fe-0377-099f9fe87475",
                          },
                          value: 99,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19722dc2b8c,
          },
          "a-8": {
            id: "a-8",
            title: "FAQ04 accordion -> OPEN",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".uui-faq04_answer",
                        selectorGuids: ["a9b3bba4-744f-7b61-fb44-a550c5f2ffd3"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".uui-faq04_answer",
                        selectorGuids: ["a9b3bba4-744f-7b61-fb44-a550c5f2ffd3"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-icon_vertical-line",
                        selectorGuids: ["a9b3bba4-744f-7b61-fb44-a550c5f2ffdb"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17b1ea539da,
          },
          "a-13": {
            id: "a-13",
            title: "FAQ04 accordion -> CLOSE",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".uui-faq04_answer",
                        selectorGuids: ["a9b3bba4-744f-7b61-fb44-a550c5f2ffd3"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-icon_vertical-line",
                        selectorGuids: ["a9b3bba4-744f-7b61-fb44-a550c5f2ffdb"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17b1ea539da,
          },
          "a-20": {
            id: "a-20",
            title: "FAQ04 accordion -> OPEN 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223ff",
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223ff",
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223fd",
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17b1ea539da,
          },
          "a-25": {
            id: "a-25",
            title: "FAQ04 accordion -> CLOSE 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223ff",
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-25-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        id: "68418af0256011e974d89153|8827e92e-8b34-2778-60cc-58d3e49223fe",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17b1ea539da,
          },
          "a-28": {
            id: "a-28",
            title: "360",
            continuousParameterGroups: [
              {
                id: "a-28-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [],
              },
            ],
            createdOn: 0x1975d3b6756,
          },
          "a-30": {
            id: "a-30",
            title: "openshit",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".fs_modal-2_popup",
                        selectorGuids: ["4f27474e-14e1-411a-be51-a5304a4fe243"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19763dfd3c9,
          },
          "a-31": {
            id: "a-31",
            title: "close shit",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".fs_modal-2_popup",
                        selectorGuids: ["4f27474e-14e1-411a-be51-a5304a4fe243"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19763e2a711,
          },
          "a-33": {
            id: "a-33",
            title: "fadein",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-33-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6839b77fbb995fb937210fea|5bbcdbfc-75a0-e0fb-9714-945d0d32a16e",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-33-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6839b77fbb995fb937210fea|1cc073ec-56f7-a4fa-b7c5-ce28e4cff1ed",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-33-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6839b77fbb995fb937210fea|1cc073ec-56f7-a4fa-b7c5-ce28e4cff1ed",
                      },
                      yValue: -700,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6839b77fbb995fb937210fea|5bbcdbfc-75a0-e0fb-9714-945d0d32a16e",
                      },
                      value: 0.75,
                      unit: "",
                    },
                  },
                  {
                    id: "a-33-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6839b77fbb995fb937210fea|1cc073ec-56f7-a4fa-b7c5-ce28e4cff1ed",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-33-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6839b77fbb995fb937210fea|1cc073ec-56f7-a4fa-b7c5-ce28e4cff1ed",
                      },
                      yValue: -700,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 2e3,
                      target: {
                        id: "6839b77fbb995fb937210fea|1cc073ec-56f7-a4fa-b7c5-ce28e4cff1ed",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1976443b926,
          },
          "a-34": {
            id: "a-34",
            title: "box open",
            continuousParameterGroups: [
              {
                id: "a-34-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 27,
                    actionItems: [
                      {
                        id: "a-34-n",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "easeInOut",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6839b77fbb995fb937210fea|446e81f7-28b0-6079-567e-c8302d434650",
                          },
                          value: 0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 54,
                    actionItems: [
                      {
                        id: "a-34-n-3",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6839b77fbb995fb937210fea|446e81f7-28b0-6079-567e-c8302d434650",
                          },
                          value: 93,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-34-n-2",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6839b77fbb995fb937210fea|446e81f7-28b0-6079-567e-c8302d434650",
                          },
                          value: 94,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1976993d8db,
          },
          "a-38": {
            id: "a-38",
            title: "New Mouse Animation",
            continuousParameterGroups: [
              {
                id: "a-38-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [],
              },
              {
                id: "a-38-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [],
              },
            ],
            createdOn: 0x19778d81a75,
          },
          "a-36": {
            id: "a-36",
            title: "IdleFloatLoop-desktop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      target: {
                        selector: ".hero_lottie",
                        selectorGuids: ["b73388a7-d9a8-e3f2-e29f-56cd4faaee0f"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-36-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        selector: ".hero_lottie",
                        selectorGuids: ["b73388a7-d9a8-e3f2-e29f-56cd4faaee0f"],
                      },
                      xValue: 1.3,
                      yValue: 1.4,
                      zValue: 1,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19769b801d3,
          },
          "a-37": {
            id: "a-37",
            title: "IdleFloatLoop-Mobil",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-37-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      target: {
                        selector: ".hero_lottie",
                        selectorGuids: ["b73388a7-d9a8-e3f2-e29f-56cd4faaee0f"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                  {
                    id: "a-37-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 500,
                      target: {
                        selector: ".hero_lottie",
                        selectorGuids: ["b73388a7-d9a8-e3f2-e29f-56cd4faaee0f"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-37-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        selector: ".hero_lottie",
                        selectorGuids: ["b73388a7-d9a8-e3f2-e29f-56cd4faaee0f"],
                      },
                      xValue: 1.3,
                      yValue: 1.6,
                      zValue: 1,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                  {
                    id: "a-37-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        selector: ".hero_lottie",
                        selectorGuids: ["b73388a7-d9a8-e3f2-e29f-56cd4faaee0f"],
                      },
                      xValue: 0.3,
                      yValue: 0.5,
                      zValue: 0.6,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19769b801d3,
          },
          "a-39": {
            id: "a-39",
            title: "checkbox",
            continuousParameterGroups: [
              {
                id: "a-39-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 24,
                    actionItems: [
                      {
                        id: "a-39-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3a",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "easeInOut",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3a",
                          },
                          yValue: 25,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 27,
                    actionItems: [
                      {
                        id: "a-39-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3a",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "easeInOut",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3a",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 29,
                    actionItems: [
                      {
                        id: "a-39-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3f",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "easeInOut",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3f",
                          },
                          yValue: 25,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 32,
                    actionItems: [
                      {
                        id: "a-39-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3f",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "easeInOut",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea3f",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 34,
                    actionItems: [
                      {
                        id: "a-39-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea44",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "easeInOut",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea44",
                          },
                          yValue: 25,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 37,
                    actionItems: [
                      {
                        id: "a-39-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea44",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea44",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 39,
                    actionItems: [
                      {
                        id: "a-39-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea49",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea49",
                          },
                          yValue: 25,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-39-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea49",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-39-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6839b77fbb995fb937210fea|ee2ad764-ca87-2661-eff3-e75af06bea49",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1978cfd2cab,
          },
          "a-40": {
            id: "a-40",
            title: "New Timed Animation",
            actionItemGroups: [],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1979261104d,
          },
          "a-42": {
            id: "a-42",
            title: "snip",
            continuousParameterGroups: [
              {
                id: "a-42-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-42-n",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".snip-lottie",
                            selectorGuids: [
                              "f079d0b8-f384-9530-b2ee-ded58a699a7a",
                            ],
                          },
                          value: 4,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-42-n-3",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".snip-lottie",
                            selectorGuids: [
                              "f079d0b8-f384-9530-b2ee-ded58a699a7a",
                            ],
                          },
                          value: 99,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x197a724c0e1,
          },
          "a-43": {
            id: "a-43",
            title: "shake",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-43-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".button-_head-dark-copy",
                        selectorGuids: ["b63128c0-1584-497e-b106-4b199af52ea9"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".button-_head-dark-copy",
                        selectorGuids: ["b63128c0-1584-497e-b106-4b199af52ea9"],
                      },
                      xValue: -2,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".button-_head-dark-copy",
                        selectorGuids: ["b63128c0-1584-497e-b106-4b199af52ea9"],
                      },
                      xValue: 2,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".button-_head-dark-copy",
                        selectorGuids: ["b63128c0-1584-497e-b106-4b199af52ea9"],
                      },
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        selector: ".button-_head-dark-copy",
                        selectorGuids: ["b63128c0-1584-497e-b106-4b199af52ea9"],
                      },
                      xValue: -1,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".button-_head-dark-copy",
                        selectorGuids: ["b63128c0-1584-497e-b106-4b199af52ea9"],
                      },
                      xValue: 1,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x197b0c1f286,
          },
          "a-44": {
            id: "a-44",
            title: "sellbar visibility",
            continuousParameterGroups: [
              {
                id: "a-44-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 36,
                    actionItems: [
                      {
                        id: "a-44-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sell-bar",
                            selectorGuids: [
                              "e5a82aac-25ce-8ce2-b2db-f51b98687b02",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-44-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: [0.25, 0.25, 0.75, 0.75],
                          duration: 500,
                          target: {
                            selector: ".sell-bar",
                            selectorGuids: [
                              "e5a82aac-25ce-8ce2-b2db-f51b98687b02",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x197b0d54b43,
          },
          "a-45": {
            id: "a-45",
            title: "prost hero animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-45-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|35fbe645-f05c-3048-987c-ce84696f26f2",
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-45-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 1e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|35fbe645-f05c-3048-987c-ce84696f26f2",
                      },
                      value: 99,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199170b3145,
          },
          "a-47": {
            id: "a-47",
            title: "prost-text-testimoials",
            continuousParameterGroups: [
              {
                id: "a-47-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-47-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "68b5a5970b26c2723e61acd5|0a0dcfeb-aab1-23a7-546e-b843c6019869",
                          },
                          xValue: 5,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-47-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "68b5a5970b26c2723e61acd5|0a0dcfeb-aab1-23a7-546e-b843c6019869",
                          },
                          xValue: -40,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1991729a4b5,
          },
          "a-48": {
            id: "a-48",
            title: "in:prost-text-testi-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-48-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-48-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-1",
                        selectorGuids: ["60bb65da-04ba-e75c-1fb2-240edbac8276"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-2",
                        selectorGuids: ["1698bceb-d7ec-3bae-2bb7-9962e0cfcdbf"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-3",
                        selectorGuids: ["779e1350-675c-9b94-3601-29dcfff5bb8f"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-4",
                        selectorGuids: ["323b573c-ce0c-fcc8-d89a-b72744d0e8bb"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-5",
                        selectorGuids: ["d4336924-4957-b7ac-2f63-c3d9516f8e38"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-48-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-48-n-9",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-1",
                        selectorGuids: ["60bb65da-04ba-e75c-1fb2-240edbac8276"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 213,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-10",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 50,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-2",
                        selectorGuids: ["1698bceb-d7ec-3bae-2bb7-9962e0cfcdbf"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 213,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-11",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 100,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-3",
                        selectorGuids: ["779e1350-675c-9b94-3601-29dcfff5bb8f"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 213,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-12",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-4",
                        selectorGuids: ["323b573c-ce0c-fcc8-d89a-b72744d0e8bb"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 213,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-48-n-13",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-5",
                        selectorGuids: ["d4336924-4957-b7ac-2f63-c3d9516f8e38"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 213,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199172c46fe,
          },
          "a-49": {
            id: "a-49",
            title: "out:prost-text-testi-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-49-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "68b5a5970b26c2723e61acd5|4e0a4c86-554c-d2cf-9b32-4f9f11e4b8ae",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-49-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-1",
                        selectorGuids: ["60bb65da-04ba-e75c-1fb2-240edbac8276"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-49-n-9",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 50,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-2",
                        selectorGuids: ["1698bceb-d7ec-3bae-2bb7-9962e0cfcdbf"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-49-n-10",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 100,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-3",
                        selectorGuids: ["779e1350-675c-9b94-3601-29dcfff5bb8f"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-49-n-11",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-4",
                        selectorGuids: ["323b573c-ce0c-fcc8-d89a-b72744d0e8bb"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-49-n-12",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".star-5",
                        selectorGuids: ["d4336924-4957-b7ac-2f63-c3d9516f8e38"],
                      },
                      globalSwatchId: "",
                      rValue: 228,
                      bValue: 52,
                      gValue: 141,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199172c46fe,
          },
          "a-51": {
            id: "a-51",
            title: "prost-ticks",
            continuousParameterGroups: [
              {
                id: "a-51-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-51-n",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890caf",
                          },
                          globalSwatchId: "",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-51-n-3",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890cb3",
                          },
                          globalSwatchId: "",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                      {
                        id: "a-51-n-2",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890caf",
                          },
                          globalSwatchId: "",
                          rValue: 43,
                          bValue: 0,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-51-n-5",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890cb7",
                          },
                          globalSwatchId: "",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                      {
                        id: "a-51-n-4",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890cb3",
                          },
                          globalSwatchId: "",
                          rValue: 43,
                          bValue: 0,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-51-n-6",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890cbb",
                          },
                          globalSwatchId: "",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                      {
                        id: "a-51-n-9",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890cb7",
                          },
                          globalSwatchId: "",
                          rValue: 43,
                          bValue: 0,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-51-n-7",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|c8868dbe-c71d-6989-5ba7-ce75cc476d5c",
                          },
                          globalSwatchId: "",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                      {
                        id: "a-51-n-10",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|4f61bfbc-ed72-ca30-42b7-9e9abe890cbb",
                          },
                          globalSwatchId: "",
                          rValue: 43,
                          bValue: 0,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-51-n-8",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|fb70a79c-3497-2a10-ae31-9933705c4b1b",
                          },
                          globalSwatchId: "",
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                      {
                        id: "a-51-n-11",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|c8868dbe-c71d-6989-5ba7-ce75cc476d5c",
                          },
                          globalSwatchId: "",
                          rValue: 43,
                          bValue: 0,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-51-n-12",
                        actionTypeId: "STYLE_TEXT_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "68b5a5970b26c2723e61acd5|fb70a79c-3497-2a10-ae31-9933705c4b1b",
                          },
                          globalSwatchId: "",
                          rValue: 43,
                          bValue: 0,
                          gValue: 255,
                          aValue: 1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1991e87a893,
          },
          "a-52": {
            id: "a-52",
            title: "page flip loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-52-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|57f7b16a-c8a5-4fba-7c19-61265e2821d5",
                      },
                      value: 2,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|57f7b16a-c8a5-4fba-7c19-61265e2821d5",
                      },
                      value: 99,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-3",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|57f7b16a-c8a5-4fba-7c19-61265e2821d5",
                      },
                      value: 2,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199a8e37def,
          },
          "a-53": {
            id: "a-53",
            title: "close shit book",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-53-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".books-popup-copy",
                        selectorGuids: ["59163b6c-65e9-3633-2b04-3b92143d6495"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19763e2a711,
          },
          "a-54": {
            id: "a-54",
            title: "openshit book",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-54-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".books-popup-copy",
                        selectorGuids: ["59163b6c-65e9-3633-2b04-3b92143d6495"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19763dfd3c9,
          },
          "a-55": {
            id: "a-55",
            title: "master-sleeve-mobile-loop-in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-55-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-55-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
                      },
                      value: 98,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-55-n-3",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|3b2d6050-faba-b7a0-0d9b-d47f49b67acf",
                      },
                      value: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19b6ded0688,
          },
          "a-56": {
            id: "a-56",
            title: "Starter-sleeve-mobile-loop-in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-56-n-4",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 500,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-56-n-5",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
                      },
                      value: 98,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-56-n-6",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        id: "68b5a5970b26c2723e61acd5|537fbd47-cbdf-4ad3-ba95-099f9ce8d017",
                      },
                      value: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19b6ded0688,
          },
          pluginLottie: {
            id: "pluginLottie",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: "auto",
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 100,
                    },
                  },
                ],
              },
            ],
          },
          pluginLottieReverse: {
            id: "pluginLottieReverse",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 100,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: "auto",
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
