"use strict";
function _createForOfIteratorHelper2(t, e) {
  var o =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!o) {
    if (
      Array.isArray(t) ||
      (o = _unsupportedIterableToArray2(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      o && (t = o);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
        },
        e: function (t) {
          throw t;
        },
        f: n,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var i,
    r = !0,
    s = !1;
  return {
    s: function () {
      o = o.call(t);
    },
    n: function () {
      var t = o.next();
      return (r = t.done), t;
    },
    e: function (t) {
      (s = !0), (i = t);
    },
    f: function () {
      try {
        r || null == o.return || o.return();
      } finally {
        if (s) throw i;
      }
    },
  };
}
function _unsupportedIterableToArray2(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray2(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === o && t.constructor && (o = t.constructor.name),
      "Map" === o || "Set" === o
        ? Array.from(t)
        : "Arguments" === o ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        ? _arrayLikeToArray2(t, e)
        : void 0
    );
  }
}
function _arrayLikeToArray2(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var o = 0, a = new Array(e); o < e; o++) a[o] = t[o];
  return a;
}
function _typeof2(t) {
  return (
    (_typeof2 =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _typeof2(t)
  );
}
var breakpoints = { xs: 0, sm: 576, md: 768, lg: 1024, xl: 1280 };
function throttle(t, e, o) {
  var a,
    n = o || {},
    i = n.noTrailing,
    r = void 0 !== i && i,
    s = n.noLeading,
    l = void 0 !== s && s,
    c = n.debounceMode,
    d = void 0 === c ? void 0 : c,
    u = !1,
    h = 0;
  function m() {
    a && clearTimeout(a);
  }
  function f() {
    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
      n[i] = arguments[i];
    var s = this,
      c = Date.now() - h;
    function f() {
      (h = Date.now()), e.apply(s, n);
    }
    function p() {
      a = void 0;
    }
    u ||
      (l || !d || a || f(),
      m(),
      void 0 === d && c > t
        ? l
          ? ((h = Date.now()), r || (a = setTimeout(d ? p : f, t)))
          : f()
        : !0 !== r && (a = setTimeout(d ? p : f, void 0 === d ? t - c : t)));
  }
  return (
    (f.cancel = function (t) {
      var e = (t || {}).upcomingOnly,
        o = void 0 !== e && e;
      m(), (u = !o);
    }),
    f
  );
}
function debounce(t, e, o) {
  var a = (o || {}).atBegin;
  return throttle(t, e, { debounceMode: !1 !== (void 0 !== a && a) });
}
!(function (t) {
  if (void 0 === t)
    throw new TypeError(
      "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
    );
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 === e[0] && 9 === e[1] && e[2] < 1) ||
    e[0] >= 4
  )
    throw new Error(
      "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
})($),
  /*!
   * Bootstrap util.js v4.5.0 (https://getbootstrap.com/)
   * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  (function (t, e) {
    "object" ===
      ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) &&
    "undefined" != typeof module
      ? (module.exports = e(require("jquery")))
      : "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : ((t = t || self).Util = e(t.jQuery));
  })(void 0, function (t) {
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    var e = "transitionend";
    function o(e) {
      var o = this,
        n = !1;
      return (
        t(this).one(a.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || a.triggerTransitionEnd(o);
        }, e),
        this
      );
    }
    var a = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");
        if (!e || "#" === e) {
          var o = t.getAttribute("href");
          e = o && "#" !== o ? o.trim() : "";
        }
        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var o = t(e).css("transition-duration"),
          a = t(e).css("transition-delay"),
          n = parseFloat(o),
          i = parseFloat(a);
        return n || i
          ? ((o = o.split(",")[0]),
            (a = a.split(",")[0]),
            1e3 * (parseFloat(o) + parseFloat(a)))
          : 0;
      },
      reflow: function (t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function (o) {
        t(o).trigger(e);
      },
      supportsTransitionEnd: function () {
        return Boolean(e);
      },
      isElement: function (t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, o) {
        for (var n in o)
          if (Object.prototype.hasOwnProperty.call(o, n)) {
            var i = o[n],
              r = e[n],
              s =
                r && a.isElement(r)
                  ? "element"
                  : null == (l = r)
                  ? "" + l
                  : {}.toString
                      .call(l)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(i).test(s))
              throw new Error(
                t.toUpperCase() +
                  ': Option "' +
                  n +
                  '" provided type "' +
                  s +
                  '" but expected type "' +
                  i +
                  '".'
              );
          }
        var l;
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
          var e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? a.findShadowRoot(t.parentNode)
          : null;
      },
      jQueryDetection: function () {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          e[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    return (
      a.jQueryDetection(),
      (t.fn.emulateTransitionEnd = o),
      (t.event.special[a.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function (e) {
          if (t(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        },
      }),
      a
    );
  }),
  /*!
   * Bootstrap collapse.js v4.5.0 (https://getbootstrap.com/)
   * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  (function (t, e) {
    "object" ===
      ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) &&
    "undefined" != typeof module
      ? (module.exports = e(require("jquery"), require("./util.js")))
      : "function" == typeof define && define.amd
      ? define(["jquery", "./util.js"], e)
      : ((t = t || self).Collapse = e(t.jQuery, t.Util));
  })(void 0, function (t, e) {
    function o(t, e) {
      for (var o = 0; o < e.length; o++) {
        var a = e[o];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    function a(t, e, o) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = o),
        t
      );
    }
    function n(t, e) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          o.push.apply(o, a);
      }
      return o;
    }
    function i(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? n(Object(o), !0).forEach(function (e) {
              a(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
          : n(Object(o)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(o, e)
              );
            });
      }
      return t;
    }
    (t =
      t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t),
      (e =
        e && Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e);
    var r = "collapse",
      s = "bs.collapse",
      l = "." + s,
      c = t.fn[r],
      d = { toggle: !0, parent: "" },
      u = { toggle: "boolean", parent: "(string|element)" },
      h = "show" + l,
      m = "shown" + l,
      f = "hide" + l,
      p = "hidden" + l,
      v = "click" + l + ".data-api",
      g = "show",
      y = "collapse",
      _ = "collapsing",
      b = "collapsed",
      w = "width",
      $ = '[data-toggle="collapse"]',
      C = (function () {
        function a(t, o) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(o)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (
            var a = [].slice.call(document.querySelectorAll($)),
              n = 0,
              i = a.length;
            n < i;
            n++
          ) {
            var r = a[n],
              s = e.getSelectorFromElement(r),
              l = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (e) {
                  return e === t;
                });
            null !== s &&
              l.length > 0 &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var n,
          l,
          c,
          v = a.prototype;
        return (
          (v.toggle = function () {
            t(this._element).hasClass(g) ? this.hide() : this.show();
          }),
          (v.show = function () {
            var o,
              n,
              i = this;
            if (
              !this._isTransitioning &&
              !t(this._element).hasClass(g) &&
              (this._parent &&
                0 ===
                  (o = [].slice
                    .call(this._parent.querySelectorAll(".show, .collapsing"))
                    .filter(function (t) {
                      return "string" == typeof i._config.parent
                        ? t.getAttribute("data-parent") === i._config.parent
                        : t.classList.contains(y);
                    })).length &&
                (o = null),
              !(
                o &&
                (n = t(o).not(this._selector).data(s)) &&
                n._isTransitioning
              ))
            ) {
              var r = t.Event(h);
              if ((t(this._element).trigger(r), !r.isDefaultPrevented())) {
                o &&
                  (a._jQueryInterface.call(t(o).not(this._selector), "hide"),
                  n || t(o).data(s, null));
                var l = this._getDimension();
                t(this._element).removeClass(y).addClass(_),
                  (this._element.style[l] = 0),
                  this._triggerArray.length &&
                    t(this._triggerArray)
                      .removeClass(b)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var c = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                  d = e.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(e.TRANSITION_END, function () {
                    t(i._element)
                      .removeClass(_)
                      .addClass(y + " " + g),
                      (i._element.style[l] = ""),
                      i.setTransitioning(!1),
                      t(i._element).trigger(m);
                  })
                  .emulateTransitionEnd(d),
                  (this._element.style[l] = this._element[c] + "px");
              }
            }
          }),
          (v.hide = function () {
            var o = this;
            if (!this._isTransitioning && t(this._element).hasClass(g)) {
              var a = t.Event(f);
              if ((t(this._element).trigger(a), !a.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  e.reflow(this._element),
                  t(this._element)
                    .addClass(_)
                    .removeClass(y + " " + g);
                var i = this._triggerArray.length;
                if (i > 0)
                  for (var r = 0; r < i; r++) {
                    var s = this._triggerArray[r],
                      l = e.getSelectorFromElement(s);
                    if (null !== l)
                      t([].slice.call(document.querySelectorAll(l))).hasClass(
                        g
                      ) || t(s).addClass(b).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var c = e.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(e.TRANSITION_END, function () {
                    o.setTransitioning(!1),
                      t(o._element).removeClass(_).addClass(y).trigger(p);
                  })
                  .emulateTransitionEnd(c);
              }
            }
          }),
          (v.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (v.dispose = function () {
            t.removeData(this._element, s),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (v._getConfig = function (t) {
            return (
              ((t = i(i({}, d), t)).toggle = Boolean(t.toggle)),
              e.typeCheckConfig(r, t, u),
              t
            );
          }),
          (v._getDimension = function () {
            return t(this._element).hasClass(w) ? w : "height";
          }),
          (v._getParent = function () {
            var o,
              n = this;
            e.isElement(this._config.parent)
              ? ((o = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (o = this._config.parent[0]))
              : (o = document.querySelector(this._config.parent));
            var i =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              r = [].slice.call(o.querySelectorAll(i));
            return (
              t(r).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
              o
            );
          }),
          (v._addAriaAndCollapsedClass = function (e, o) {
            var a = t(e).hasClass(g);
            o.length && t(o).toggleClass(b, !a).attr("aria-expanded", a);
          }),
          (a._getTargetFromElement = function (t) {
            var o = e.getSelectorFromElement(t);
            return o ? document.querySelector(o) : null;
          }),
          (a._jQueryInterface = function (e) {
            return this.each(function () {
              var o = t(this),
                n = o.data(s),
                r = i(
                  i(i({}, d), o.data()),
                  "object" === _typeof2(e) && e ? e : {}
                );
              if (
                (!n &&
                  r.toggle &&
                  "string" == typeof e &&
                  /show|hide/.test(e) &&
                  (r.toggle = !1),
                n || ((n = new a(this, r)), o.data(s, n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          (n = a),
          (c = [
            {
              key: "VERSION",
              get: function () {
                return "4.5.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return d;
              },
            },
          ]),
          (l = null) && o(n.prototype, l),
          c && o(n, c),
          a
        );
      })();
    return (
      t(document).on(v, $, function (o) {
        "A" === o.currentTarget.tagName && o.preventDefault();
        var a = t(this),
          n = e.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(n));
        t(i).each(function () {
          var e = t(this),
            o = e.data(s) ? "toggle" : a.data();
          C._jQueryInterface.call(e, o);
        });
      }),
      (t.fn[r] = C._jQueryInterface),
      (t.fn[r].Constructor = C),
      (t.fn[r].noConflict = function () {
        return (t.fn[r] = c), C._jQueryInterface;
      }),
      C
    );
  }),
  $(".acc__toggle:not(.not_toggle)").click(function (t) {
    var e = $(this);
    e.next().hasClass("show")
      ? (e.next().removeClass("show"),
        e.removeClass("active"),
        e.next().slideUp(200))
      : (e.parent().parent().find("li .inner").removeClass("show"),
        e.parent().parent().find("li .acc__toggle").removeClass("active"),
        e.parent().parent().find("li .inner").slideUp(200),
        e.next().toggleClass("show"),
        e.toggleClass("active"),
        e.next().slideToggle(200));
  });
var bigSlides = $(".main-slider .owl-carousel"),
  autoPlayTimeoutSec = parseInt(bigSlides.data("autoplay-timeout"));
bigSlides.owlCarousel({
  loop: !0,
  margin: 5,
  nav: !0,
  dots: !0,
  items: 1,
  autoplay: !0,
  autoplayTimeout: 1e3 * autoPlayTimeoutSec,
  navText: [
    '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>',
    '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>',
  ],
});
var radioButtons = document.querySelectorAll(
    '.delivery-selection input[type="radio"]'
  ),
  choices = document.querySelectorAll(".delivery-choice");
function gallery() {
  $.fancybox &&
    $(".owl-item [data-fancybox]").on("click", function () {
      var t = $(this)
        .parents(".owl-carousel")
        .find(".owl-item:not(.cloned) [data-fancybox]");
      return (
        $.fancybox.open(t, { selector: t, backFocus: !1 }, t.index(this)), !1
      );
    });
}
function header() {
  var t,
    e,
    o = $("header"),
    a = !1;
  function n() {
    o.hasClass("header_landing") ||
      ((e = $(window).scrollTop()),
      (t = o.height()),
      e > t ? o.addClass("fixed") : o.removeClass("fixed"));
  }
  n(),
    $(window).scroll(function () {
      a ||
        ((a = !0),
        setTimeout(function () {
          n(), (a = !1);
        }, 100));
    });
}
function homeBanner() {
  var t = $(".home-banner .owl-carousel");
  t.length &&
    t.owlCarousel({
      loop: !0,
      nav: !0,
      smartSpeed: 500,
      dots: !0,
      items: 1,
      lazyLoad: !0,
      autoplay: !0,
      autoplayTimeout: 1e3 * (+t.data("autoplay-timeout") || 5),
      navText: [
        '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M9,0l1.4,1.4L2.8,9l7.6,7.6L9,18.1L0,9C0,9,9.1,0,9,0z"></path></svg>',
        '<svg class="icon" viewBox="0 0 10.5 18.1"><path stroke="none" d="M1.4,18.1L0,16.7l7.6-7.6L0,1.5L1.4,0l9,9.1C10.4,9.1,1.3,18.1,1.4,18.1z"></path></svg>',
      ],
    });
}
function _typeof(t) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _typeof(t)
  );
}
function sliderDebounce(t, e, o) {
  var a = !1;
  return function () {
    var n = arguments,
      i = this;
    a && clearTimeout(a),
      (a = setTimeout(function () {
        t.apply(o || i, n);
      }, e));
  };
}
radioButtons.forEach(function (t) {
  t.addEventListener("change", function () {
    var t = this;
    choices.forEach(function (e) {
      e.classList.contains(t.id) ||
      e.classList.contains("delivery-type-" + t.value)
        ? (e.style.display = "block")
        : (e.style.display = "none");
    });
  });
}),
  $(".shopping-cart-item__delete").click(function () {
    $(this).parent(".shopping-cart-item").remove();
  }),
  $(".slider .owl-carousel").owlCarousel({
    loop: !0,
    margin: 0,
    items: 1,
    nav: !0,
  }),
  $(".news-slider .owl-carousel").owlCarousel({
    loop: !0,
    margin: 0,
    items: 4,
    responsive: {
      0: { nav: !1, dots: !0, items: 1 },
      479: { nav: !1, dots: !0, items: 2 },
      768: { nav: !0, dots: !1, items: 3 },
      992: { items: 4 },
    },
  }),
  $(".action-slider .owl-carousel").owlCarousel({
    loop: !0,
    margin: 20,
    nav: !0,
    dots: !1,
    items: 3,
    responsive: {
      0: { nav: !1, dots: !0, items: 1 },
      479: { nav: !1, dots: !0, items: 2 },
      768: { nav: !0, dots: !1, items: 3 },
    },
  }),
  $(".partners-slider .owl-carousel").owlCarousel({
    loop: !0,
    margin: 0,
    nav: !0,
    dots: !1,
    items: 5,
    responsive: {
      0: { dots: !0, nav: !1, items: 1 },
      566: { nav: !1, dots: !0, items: 2 },
      768: { nav: !1, dots: !0, items: 3 },
      900: { nav: !1, dots: !0, items: 4 },
      950: { dots: !1 },
    },
  }),
  (function () {
    var t = $(".button1"),
      e = $(".button2"),
      o = $(".button3"),
      a = $(".product-item");
    e.click(function (e) {
      t.removeClass("current"),
        o.removeClass("current"),
        $(e.currentTarget).addClass("current"),
        localStorage.setItem("catalogGrid", "wide"),
        a.removeClass("product-item--line"),
        a.addClass("product-item--wide");
    }),
      o.click(function (o) {
        e.removeClass("current"),
          t.removeClass("current"),
          $(o.currentTarget).addClass("current"),
          localStorage.setItem("catalogGrid", "wide"),
          a.removeClass("product-item--wide"),
          a.addClass("product-item--line");
      }),
      t.click(function (t) {
        e.removeClass("current"),
          o.removeClass("current"),
          $(t.currentTarget).addClass("current"),
          localStorage.setItem("catalogGrid", "default"),
          a.removeClass("product-item--wide"),
          a.removeClass("product-item--line");
      });
  })(),
  $(document).ready(function () {
    $(document).on("click", function (t) {
      !t.target.closest(".bottom-mobile-menu") &&
        $(".bottom-mobile-menu-list_active") &&
        ($(".bottom-mobile-menu-list_active").removeClass(
          "bottom-mobile-menu-list_active"
        ),
        $(".bottom-mobile-menu-button_active").removeClass(
          "bottom-mobile-menu-button_active"
        ));
    }),
      $(".catalog-filter-accordion a.opener").click(function () {
        return (
          $(this).parent().find("ul:first").slideToggle(),
          $(this).parent().toggleClass("active"),
          !1
        );
      }),
      $("[data-open-dropdown-content]").on("click", function (t) {
        var e = $(t.currentTarget);
        e.parent().find("[data-close-dropdown-content]").removeClass("d-none"),
          e.addClass("d-none");
      }),
      $("[data-close-dropdown-content]").on("click", function (t) {
        var e = $(t.currentTarget);
        e.parent().find("[data-open-dropdown-content]").removeClass("d-none"),
          e.addClass("d-none");
      }),
      $("[data-toggle-bottom-dropdown]").on("click", function (t) {
        $(".bottom-mobile-menu-list").toggleClass(
          "bottom-mobile-menu-list_active"
        ),
          $(t.currentTarget).toggleClass("bottom-mobile-menu-button_active");
      }),
      $("[data-close-search-modal]").on("click", function () {
        $(".search-modal-window").removeClass("d-block");
      }),
      $("[data-open-search-modal]").on("click", function () {
        $(".search-modal-window").addClass("d-block"),
          $(".search-modal-window__input").focus();
      }),
      $("[data-clear-input-button]").on("click", function (t) {
        var e = $(t.currentTarget).attr("data-clear-input-button");
        $('[data-clear-input="'.concat(e, '"]')).val("");
      }),
      $(".like-btn").on("click", function (t) {
        t.preventDefault(), $(this).toggleClass("active");
      }),
      $(".city-selection__link").click(function () {
        $(".city-selection__list").toggle(0);
      }),
      $(window).click(function (t) {
        t.target.classList.contains("city-selection__link") ||
          $(".city-selection__list").toggle(!1);
      }),
      $(".burger-menu").click(function () {
        $(".mobile-menu").toggle(0);
      }),
      $(".catalog-inner-btn").click(function (t) {
        t.preventDefault(),
          $(this).toggleClass("open"),
          $(".catalog-header-content").toggle(0);
      }),
      $(".catalog-inner-btn,.catalog-menu__head a").click(function (t) {
        t.preventDefault(), $(".catalog-menu").toggle(0);
      }),
      $(".burger-catalog").click(function (t) {
        t.preventDefault(), $(this).toggleClass("open");
      }),
      $(".share-btn").click(function () {
        $(".share-block__show").toggle(0);
      }),
      $(".close-panel").click(function () {
        $(".bottom-panel").toggle(0);
      }),
      $(".filter-btn, .close-btn-2").click(function () {
        $(".catalog-filter").toggle(0);
      }),
      $(".catalog-side__title").click(function () {
        $(".catalog-side__content").toggle(0),
          $(".catalog-side__content-accordeon").toggle(0);
      }),
      $(".catalog-opened").click(function () {
        $(".catalog-opened .submenu").toggle(0);
      }),
      $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
      }),
      $(".catalog-inner").click(function () {
        $(this).toggleClass("open"), $(".catalog-inner-content").toggle(0);
      });
  }),
  (function (t) {
    t("select.custom-select").each(function () {
      var e = t(this),
        o = e.attr("id"),
        a = e.children("optgroup"),
        n = "",
        i = "";
      a.length
        ? (a.each(function () {
            var e = t(this),
              o = e.attr("label");
            (n += '<li class="optgroup">' + o + "</li>"),
              e.children("option").each(function () {
                var e = t(this),
                  o = e.attr("value"),
                  a = e.html();
                "selected" === e.attr("selected")
                  ? ((i = a),
                    (n +=
                      '<li class="selected" data-value="' +
                      o +
                      '">' +
                      a +
                      "</li>"))
                  : (n += '<li data-value="' + o + '">' + a + "</li>");
              });
          }),
          e.children("option").each(function () {
            var e = t(this),
              o = e.attr("value"),
              a = e.html();
            "selected" === e.attr("selected")
              ? ((i = a),
                (n =
                  '<li class="selected" data-value="' +
                  o +
                  '">' +
                  a +
                  "</li>" +
                  n))
              : (n = '<li data-value="' + o + '">' + a + "</li>" + n);
          }))
        : e.children("option").each(function () {
            var e = t(this),
              o = e.attr("value"),
              a = e.html();
            "selected" === e.attr("selected")
              ? ((i = a),
                (n +=
                  '<li class="selected" data-value="' + o + '">' + a + "</li>"))
              : (n += '<li data-value="' + o + '">' + a + "</li>");
          }),
        t(
          '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>' +
            i +
            '</span></div><ul class="dropdown-select-ul" data-role="' +
            o +
            '">' +
            n +
            "</ul></div> \x3c!-- .custom-select-wrapper --\x3e"
        ).insertAfter(e);
    });
    var e = t(".dropdown-select"),
      o = t(".dropdown-select-ul"),
      a = t(".dropdown-select-ul li");
    e.on("click", function () {
      t(this).parent(".dropdown-container").toggleClass("active");
    }),
      o.on("mouseleave", function () {
        t(this).parent(".dropdown-container").removeClass("active");
      }),
      a.on("click", function () {
        var e = t(this);
        if (!e.hasClass("optgroup")) {
          var o = e.parent("ul"),
            a = o.siblings(".dropdown-select"),
            n = e.html(),
            i = e.attr("data-value"),
            r = "#" + o.attr("data-role");
          o.parent(".dropdown-container").toggleClass("active"),
            e.siblings("li").removeClass("selected"),
            e.addClass("selected"),
            t(r).val(i),
            a.children("span").html(n);
        }
      });
  })(jQuery),
  $(document).ready(function () {
    var t = $(".range-slider");
    $(t).each(function (t, e) {
      var o = $(e).data("name"),
        a = document.getElementById("id_" + o + "_0"),
        n = document.getElementById("id_" + o + "_1"),
        i = [a, n],
        r = a ? parseInt(a.dataset.currentValue) : void 0,
        s = n ? parseInt(n.dataset.currentValue) : void 0,
        l = a ? parseInt(a.dataset.minValue) : void 0,
        c = n ? parseInt(n.dataset.maxValue) : void 0,
        d = "";
      function u(t, o) {
        var a = [null, null];
        (a[t] = o), e.noUiSlider.set(a);
      }
      "price_range" == o && (d = " ₽"),
        "undefined" != typeof noUiSlider &&
          noUiSlider.create(e, {
            start: [r, s],
            connect: !0,
            range: { min: l, max: c },
            format: wNumb({ decimals: 0, thousand: " ", postfix: d }),
            step: 1,
          }),
        null !== e &&
          e.noUiSlider &&
          e.noUiSlider.on("update", function (t, e) {
            i[e].value = t[e];
          }),
        i.forEach(function (t, o) {
          null !== t &&
            (t.addEventListener("change", function () {
              u(o, this.value);
            }),
            t.addEventListener("keydown", function (t) {
              var a,
                n = e.noUiSlider.get(),
                i = Number(n[o]),
                r = e.noUiSlider.steps()[o];
              switch (t.which) {
                case 13:
                  u(o, this.value);
                  break;
                case 38:
                  !1 === (a = r[1]) && (a = 1), null !== a && u(o, i + a);
                  break;
                case 40:
                  !1 === (a = r[0]) && (a = 1), null !== a && u(o, i - a);
              }
            }));
        });
    });
  }),
  $(function () {
    $(".smoothScroll").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var t = $(this.hash);
        if ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length)
          return $("html,body").animate({ scrollTop: t.offset().top }, 1e3), !1;
      }
    });
  }),
  $(document).ready(function () {
    var t = $("#sync1"),
      e = $("#sync2");
    t
      .owlCarousel({
        items: 1,
        slideSpeed: 2e3,
        nav: !0,
        autoplay: !1,
        dots: !0,
        loop: !0,
        responsiveRefreshRate: 200,
        margin: 10,
      })
      .on("changed.owl.carousel", function (t) {
        var o = t.item.count - 1,
          a = Math.round(t.item.index - t.item.count / 2 - 0.5);
        a < 0 && (a = o);
        a > o && (a = 0);
        e.find(".owl-item").removeClass("current").eq(a).addClass("current");
        var n = e.find(".owl-item.active").length - 1,
          i = e.find(".owl-item.active").first().index(),
          r = e.find(".owl-item.active").last().index();
        a > r && e.data("owl.carousel").to(a, 100, !0);
        a < i && e.data("owl.carousel").to(a - n, 100, !0);
      }),
      e
        .on("initialized.owl.carousel", function () {
          e.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
          items: 3,
          dots: !0,
          nav: !0,
          margin: 10,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: 3,
          responsiveRefreshRate: 100,
        })
        .on("changed.owl.carousel", function (e) {
          var o = e.item.index;
          t.data("owl.carousel").to(o, 100, !0);
        }),
      e.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var o = $(this).index();
        t.data("owl.carousel").to(o, 300, !0);
      });
  }),
  $(".tab-content").hide(),
  $(".tab-content:first").show(),
  $("ul.tabs li,.product-card__review-link a,.schedule-btn a").click(
    function () {
      $(".tab-content").hide();
      var t = $(this).attr("rel");
      $("#" + t).fadeIn(),
        $("ul.tabs li").removeClass("active"),
        $(this).addClass("active"),
        $(".tab_drawer_heading").removeClass("d_active"),
        $(".tab_drawer_heading[rel^='" + t + "']").addClass("d_active");
    }
  ),
  $(".tab_drawer_heading").click(function () {
    var t = $(this).attr("rel"),
      e = $("#" + t + ":hidden"),
      o = $(this).not(".d_active");
    $(".tab-content").hide(),
      e.fadeIn(),
      $(".tab_drawer_heading").removeClass("d_active"),
      o.addClass("d_active"),
      $("ul.tabs li").removeClass("active"),
      $("ul.tabs li[rel^='" + t + "']").addClass("active");
  }),
  $("ul.tabs li").last().addClass("tab_last"),
  jQuery(document).ready(function () {
    jQuery(".schedule-btn a").click(function () {
      jQuery(".schedule-link").toggleClass("active");
    });
  }),
  jQuery(document).ready(function () {
    jQuery(".product-card__review-link a").click(function () {
      jQuery(".review-tab-link").toggleClass("active");
    });
  }),
  $(".tab-content").hide(),
  $(".tab-content:first").show(),
  $("ul.tabs li,.product-card__review-link a,.schedule-btn a").click(
    function () {
      $(".tab-content").hide();
      var t = $(this).attr("rel");
      $("#" + t).fadeIn(),
        $("ul.tabs li").removeClass("active"),
        $(this).addClass("active"),
        $(".tab_drawer_heading").removeClass("d_active"),
        $(".tab_drawer_heading[rel^='" + t + "']").addClass("d_active");
    }
  ),
  $(".tab_drawer_heading").click(function () {
    var t = $(this).attr("rel"),
      e = $("#" + t + ":hidden"),
      o = $(this).not(".d_active");
    $(".tab-content").hide(),
      e.fadeIn(),
      $(".tab_drawer_heading").removeClass("d_active"),
      o.addClass("d_active"),
      $("ul.tabs li").removeClass("active"),
      $("ul.tabs li[rel^='" + t + "']").addClass("active");
  }),
  $("ul.tabs li").last().addClass("tab_last"),
  jQuery(document).ready(function () {
    jQuery(".schedule-btn a").click(function () {
      jQuery(".schedule-link").toggleClass("active");
    });
  }),
  jQuery(document).ready(function () {
    jQuery(".product-card__review-link a").click(function () {
      jQuery(".review-tab-link").toggleClass("active");
    });
  }),
  $(function () {
    if ($("[data-booking-tooltip-content]").length) {
      var t = $("[data-booking-tooltip-content]"),
        e = t.clone();
      t.remove(),
        tippy("[data-booking-tooltip]", {
          content: e.html(),
          allowHTML: !0,
          placement: "top-start",
          theme: "light",
          interactive: !0,
          delay: [100, 200],
          onMount: function (t) {
            var e = $(t.reference),
              o = e
                .parent()
                .parent()
                .find("[data-booking-title]")
                .attr("data-booking-title"),
              a = e.attr("data-booking-time"),
              n = e.attr("data-submit-url"),
              i = $("[data-booking-tooltip-button]"),
              r = /\/\d{4}-\d{2}-\d{2}\/\d+(?:\/\d+)?\/?$/.test(n),
              s = n.match(/\d{4}-\d{2}-\d{2}/),
              l = s
                ? new Date(s[0]).toLocaleDateString()
                : new Date().toLocaleDateString();
            i.attr("data-booking-tooltip-button-time", a),
              i.attr("data-booking-tooltip-button-title", o),
              $("[data-booking-tooltip-title]").text(o),
              $("[data-booking-tooltip-time]").text(a),
              $("[data-booking-tooltip-button]").on("click", function (t) {
                var i = $("#booking-form");
                if (
                  ($("[data-booking-item-selected]").removeAttr(
                    "data-booking-item-selected"
                  ),
                  e.attr("data-booking-item-selected", ""),
                  i.length)
                ) {
                  if (
                    (i.find("input, textarea, button").removeAttr("disabled"),
                    i.attr("action", n),
                    r && l)
                  )
                    return (
                      i
                        .find('[name="message"]')
                        .val(
                          "Хочу забронировать: "
                            .concat(o, ", дата: ")
                            .concat(l, ", время: ")
                            .concat(a, " \nКол-во гостей: -")
                        ),
                      void $("html, body").animate(
                        {
                          scrollTop:
                            $("[data-booking-form]").offset().top - 200,
                        },
                        500
                      )
                    );
                  if (l)
                    return (
                      i
                        .find('[name="message"]')
                        .val(
                          "Хочу забронировать: "
                            .concat(o, ", дата: ")
                            .concat(l, " \nКол-во гостей: -")
                        ),
                      void $("html, body").animate(
                        {
                          scrollTop:
                            $("[data-booking-form]").offset().top - 200,
                        },
                        500
                      )
                    );
                  i
                    .find('[name="message"]')
                    .val(
                      "Хочу забронировать: "
                        .concat(o, ", ")
                        .concat(a, "  \nКол-во гостей: -")
                    ),
                    $("html, body").animate(
                      {
                        scrollTop: $("[data-booking-form]").offset().top - 200,
                      },
                      500
                    );
                }
              });
          },
        }),
        $("[data-booking-scroll]").scroll(function (t) {
          $(t.currentTarget).scrollLeft() > 1
            ? $("[data-booking-mobile-titles]").attr(
                "data-booking-mobile-titles-active",
                ""
              )
            : $("[data-booking-mobile-titles-active]").removeAttr(
                "data-booking-mobile-titles-active"
              );
        });
      $("[data-booking-title]").each(function (t, e) {
        var o = $(e),
          a = o.clone();
        a.css({ "min-height": o.height() }),
          $("[data-booking-mobile-titles]").append(a);
      });
    }
  }),
  $(function () {
    Array.from($("[data-custom-collapse]")).forEach(function (t) {
      var e,
        o = $(t),
        a = o.attr("data-custom-collapse"),
        n = 0,
        i = _createForOfIteratorHelper2(o.children());
      try {
        for (i.s(); !(e = i.n()).done; ) {
          var r = e.value;
          n += $(r).height();
        }
      } catch (t) {
        i.e(t);
      } finally {
        i.f();
      }
      n > 85 ||
        (o.attr("data-custom-collapse-inactive", ""),
        $('[data-custom-collapse-open="'.concat(a, '"]')).addClass("d-none"),
        $('[data-custom-collapse-close="'.concat(a, '"]')).addClass("d-none"));
    }),
      $("[data-custom-collapse-open]").on("click", function (t) {
        var e = $(t.currentTarget),
          o = e.attr("data-custom-collapse-open");
        e.addClass("d-none"),
          $('[data-custom-collapse-close="'.concat(o, '"]')).removeClass(
            "d-none"
          );
      }),
      $("[data-custom-collapse-close]").on("click", function (t) {
        var e = $(t.currentTarget),
          o = e.attr("data-custom-collapse-close");
        e.addClass("d-none"),
          $('[data-custom-collapse-open="'.concat(o, '"]')).toggleClass(
            "d-none"
          );
      });
  }),
  $(document).ready(function () {
    var t = 0,
      e = 0;
    $(".product-card-slideshow__sector").on("mousemove", function (t) {
      var e = $(t.currentTarget),
        o = e.attr("data-sector"),
        a = e.parent().parent();
      a
        .find(".product-card-slideshow__image_active")
        .removeClass("product-card-slideshow__image_active"),
        a
          .find(".product-card-slideshow__dot_active")
          .removeClass("product-card-slideshow__dot_active"),
        a
          .find('[data-sector-image="'.concat(o, '"]'))
          .addClass("product-card-slideshow__image_active"),
        a
          .find('[data-sector-dot="'.concat(o, '"]'))
          .addClass("product-card-slideshow__dot_active");
    }),
      $(".product-card-slideshow__sectors").on("touchstart", function (e) {
        t = e.changedTouches[0].screenX;
      }),
      $(".product-card-slideshow__sectors").on("touchend", function (o) {
        e = o.changedTouches[0].screenX;
        var a = $(o.currentTarget).parent(),
          n = a.find(".product-card-slideshow__image_active"),
          i = Number(n.attr("data-sector-image")),
          r = a.find(".product-card-slideshow__image").length;
        if (e < t) {
          if (
            (a
              .find(".product-card-slideshow__image_active")
              .removeClass("product-card-slideshow__image_active"),
            a
              .find(".product-card-slideshow__dot_active")
              .removeClass("product-card-slideshow__dot_active"),
            i >= r)
          )
            return (
              a
                .find("[data-sector-image]:nth-child(1)")
                .addClass("product-card-slideshow__image_active"),
              void a
                .find("[data-sector-dot]:nth-child(1)")
                .addClass("product-card-slideshow__dot_active")
            );
          a
            .find('[data-sector-image="'.concat(i, '"]'))
            .next()
            .addClass("product-card-slideshow__image_active"),
            a
              .find('[data-sector-dot="'.concat(i, '"]'))
              .next()
              .addClass("product-card-slideshow__dot_active");
        }
        if (e > t) {
          if (
            (a
              .find(".product-card-slideshow__image_active")
              .removeClass("product-card-slideshow__image_active"),
            a
              .find(".product-card-slideshow__dot_active")
              .removeClass("product-card-slideshow__dot_active"),
            i <= 1)
          )
            return (
              a
                .find("[data-sector-image]:nth-child(".concat(r, ")"))
                .addClass("product-card-slideshow__image_active"),
              void a
                .find("[data-sector-dot]:nth-child(".concat(r, ")"))
                .addClass("product-card-slideshow__dot_active")
            );
          a
            .find('[data-sector-image="'.concat(i, '"]'))
            .prev()
            .addClass("product-card-slideshow__image_active"),
            a
              .find('[data-sector-dot="'.concat(i, '"]'))
              .prev()
              .addClass("product-card-slideshow__dot_active");
        }
      }),
      $(
        ".product-card-slideshow .product-card-slideshow__image:first-child"
      ).addClass("product-card-slideshow__image_active"),
      $(
        ".product-card-slideshow .product-card-slideshow__dot:first-child"
      ).addClass("product-card-slideshow__dot_active");
  });
var SliderConstructor = (function () {
  function t(e) {
    _classCallCheck(this, t), (this.element = e);
  }
  return (
    _createClass(t, [
      {
        key: "init",
        value: function () {
          var t = this;
          (this.params = {}),
            (this.params.autoplay =
              null !== this.element.getAttribute("data-autoplay-timeout")),
            (this.params.autoplayTimeout =
              +this.element.getAttribute("data-autoplay-timeout") || 5e3),
            (this.params.arrows =
              null === this.element.getAttribute("data-no-arrows")),
            window.matchMedia("(min-width: 575.98px)").matches
              ? (this.params.dots =
                  null === this.element.getAttribute("data-no-dots"))
              : (this.params.dots = !0),
            (this.params.adaptiveHeight =
              null !== this.element.getAttribute("data-adaptive-height")),
            (this.params.centerMode =
              null !== this.element.getAttribute("data-center")),
            (this.params.infinite =
              null === this.element.getAttribute("data-no-infinite")),
            (this.params.count = {}),
            (this.params.count.xs =
              +this.element.getAttribute("data-slides") || 1),
            (this.params.count.sm =
              +this.element.getAttribute("data-sm-slides") ||
              this.params.count.xs),
            (this.params.count.md =
              +this.element.getAttribute("data-md-slides") ||
              this.params.count.sm),
            (this.params.count.lg =
              +this.element.getAttribute("data-lg-slides") ||
              this.params.count.md),
            (this.params.count.xl =
              +this.element.getAttribute("data-xl-slides") ||
              this.params.count.lg),
            (this.params.rows = {}),
            (this.params.rows.xs =
              +this.element.getAttribute("data-rows") || 1),
            (this.params.rows.sm =
              +this.element.getAttribute("data-sm-rows") ||
              this.params.rows.xs),
            (this.params.rows.md =
              +this.element.getAttribute("data-md-rows") ||
              this.params.rows.sm),
            (this.params.rows.lg =
              +this.element.getAttribute("data-lg-rows") ||
              this.params.rows.md),
            (this.params.rows.xl =
              +this.element.getAttribute("data-xl-rows") ||
              this.params.rows.lg),
            (this.params.state = {}),
            Object.keys(breakpoints).forEach(function (e, o) {
              var a = 0 !== o ? "-" + e + "-" : "-",
                n = t.element.getAttribute("data".concat(a, "mounted"));
              if (null === n && 0 !== o) {
                var i = Object.keys(breakpoints)[o - 1];
                t.params.state[e] = t.params.state[i];
              } else t.params.state[e] = "true" === n || (0 === o && "false" !== n);
            }),
            (this.slides = []),
            (this.containsMobileHiddenSlides = !1),
            this.element.childNodes.forEach(function (e) {
              e.tagName &&
                (null !== e.getAttribute("data-slide-mobile-hidden") &&
                  (t.containsMobileHiddenSlides = !0),
                t.slides.push(e));
            }),
            this.createIcons(),
            this.checkSliderState(),
            (this.checkSliderStateDebounced = sliderDebounce(
              this.checkSliderState,
              500,
              this
            )),
            window.addEventListener("resize", this.checkSliderStateDebounced);
        },
      },
      {
        key: "createIcons",
        value: function () {
          var t =
              '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.4 18.1L0 16.7L7.6 9.10001L0 1.5L1.4 0L10.4 9.10001C10.4 9.10001 1.3 18.1 1.4 18.1Z"/>\n      </svg>\n    ',
            e =
              '\n      <svg viewBox="0 0 11 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.00039 7.24792e-05L10.4004 1.40007L2.80039 9.00009L10.4004 16.6001L9.00039 18.1001L0.000391006 9.00009C0.000391006 9.00009 9.10039 7.24792e-05 9.00039 7.24792e-05Z"/>\n      </svg>\n    ',
            o = "custom-icon-left",
            a = "custom-icon-right";
          this.element
            .querySelectorAll(".".concat(o, ", .").concat(a))
            .forEach(function (n) {
              var i = n.classList.contains(o),
                r = n.classList.contains(a);
              i
                ? (n.classList.remove(o), (t = n.outerHTML))
                : r && (n.classList.remove(a), (e = n.outerHTML)),
                n.remove();
            });
          var n = this.element.getAttribute("data-prev-button-id"),
            i = this.element.getAttribute("data-next-button-id");
          if (n) {
            var r = document.getElementById(n);
            (this.prevArrow = r.outerHTML), r.remove();
          } else
            this.prevArrow =
              '<button type="button" class="button button_style-1 slick-prev">'.concat(
                e,
                "</button>"
              );
          if (i) {
            var s = document.getElementById(i);
            (this.nextArrow = s.outerHTML), s.remove();
          } else
            this.nextArrow =
              '<button type="button" class="button button_style-1 slick-next">'.concat(
                t,
                "</button>"
              );
        },
      },
      {
        key: "checkSliderState",
        value: function () {
          if (!this.mounted || this.savedWindowWidth !== window.innerWidth) {
            var t;
            for (var e in ((this.savedWindowWidth = window.innerWidth),
            this.mounted && this.unmount(),
            breakpoints))
              window.innerWidth >= breakpoints[e] && (t = this.params.state[e]);
            t
              ? (this.element.classList.remove("visible"),
                this.containsMobileHiddenSlides && this.checkSlidesVisibility(),
                this.mount())
              : this.element.classList.add("visible");
          }
        },
      },
      {
        key: "checkSlidesVisibility",
        value: function () {
          var t = this;
          this.slides.forEach(function (t) {
            t.remove();
          }),
            this.slides.forEach(function (e) {
              var o = null !== e.getAttribute("data-slide-mobile-hidden"),
                a = window.innerWidth < breakpoints.sm;
              (o && a) || t.element.insertAdjacentElement("beforeend", e);
            });
        },
      },
      {
        key: "mount",
        value: function () {
          $(this.element).slick({
            autoplay: this.params.autoplay,
            autoplaySpeed: this.params.autoplayTimeout,
            mobileFirst: !0,
            slidesToShow: this.params.count.xs,
            slidesToScroll: this.params.count.xs,
            rows: this.params.rows.xs,
            prevArrow: this.prevArrow,
            nextArrow: this.nextArrow,
            arrows: this.params.arrows,
            adaptiveHeight: this.params.adaptiveHeight,
            dots: this.params.dots,
            centerMode: this.params.centerMode,
            accessibility: !1,
            infinite: this.params.infinite,
            responsive: [
              {
                breakpoint: breakpoints.sm - 1,
                settings: {
                  slidesToShow: this.params.count.sm,
                  slidesToScroll: this.params.count.sm,
                  rows: this.params.rows.sm,
                },
              },
              {
                breakpoint: breakpoints.md - 1,
                settings: {
                  slidesToShow: this.params.count.md,
                  slidesToScroll: this.params.count.md,
                  rows: this.params.rows.md,
                },
              },
              {
                breakpoint: breakpoints.lg - 1,
                settings: {
                  slidesToShow: this.params.count.lg,
                  slidesToScroll: this.params.count.lg,
                  rows: this.params.rows.lg,
                },
              },
              {
                breakpoint: breakpoints.xl - 1,
                settings: {
                  slidesToShow: this.params.count.xl,
                  slidesToScroll: this.params.count.xl,
                  rows: this.params.rows.xl,
                },
              },
            ],
          }),
            $(document).ready(function () {
              var t = 0,
                e = 0;
              $(".product-card-slideshow__sector").on(
                "mousemove",
                function (t) {
                  var e = $(t.currentTarget),
                    o = e.attr("data-sector"),
                    a = e.parent().parent();
                  a
                    .find(".product-card-slideshow__image_active")
                    .removeClass("product-card-slideshow__image_active"),
                    a
                      .find(".product-card-slideshow__dot_active")
                      .removeClass("product-card-slideshow__dot_active"),
                    a
                      .find('[data-sector-image="'.concat(o, '"]'))
                      .addClass("product-card-slideshow__image_active"),
                    a
                      .find('[data-sector-dot="'.concat(o, '"]'))
                      .addClass("product-card-slideshow__dot_active");
                }
              ),
                $(".product-card-slideshow__sectors").on(
                  "touchstart",
                  function (e) {
                    t = e.changedTouches[0].screenX;
                  }
                ),
                $(".product-card-slideshow__sectors").on(
                  "touchend",
                  function (o) {
                    e = o.changedTouches[0].screenX;
                    var a = $(o.currentTarget).parent(),
                      n = a.find(".product-card-slideshow__image_active"),
                      i = Number(n.attr("data-sector-image")),
                      r = a.find(".product-card-slideshow__image").length;
                    if (e < t) {
                      if (
                        (a
                          .find(".product-card-slideshow__image_active")
                          .removeClass("product-card-slideshow__image_active"),
                        a
                          .find(".product-card-slideshow__dot_active")
                          .removeClass("product-card-slideshow__dot_active"),
                        i >= r)
                      )
                        return (
                          a
                            .find("[data-sector-image]:nth-child(1)")
                            .addClass("product-card-slideshow__image_active"),
                          void a
                            .find("[data-sector-dot]:nth-child(1)")
                            .addClass("product-card-slideshow__dot_active")
                        );
                      a
                        .find('[data-sector-image="'.concat(i, '"]'))
                        .next()
                        .addClass("product-card-slideshow__image_active"),
                        a
                          .find('[data-sector-dot="'.concat(i, '"]'))
                          .next()
                          .addClass("product-card-slideshow__dot_active");
                    }
                    if (e > t) {
                      if (
                        (a
                          .find(".product-card-slideshow__image_active")
                          .removeClass("product-card-slideshow__image_active"),
                        a
                          .find(".product-card-slideshow__dot_active")
                          .removeClass("product-card-slideshow__dot_active"),
                        i <= 1)
                      )
                        return (
                          a
                            .find(
                              "[data-sector-image]:nth-child(".concat(r, ")")
                            )
                            .addClass("product-card-slideshow__image_active"),
                          void a
                            .find("[data-sector-dot]:nth-child(".concat(r, ")"))
                            .addClass("product-card-slideshow__dot_active")
                        );
                      a
                        .find('[data-sector-image="'.concat(i, '"]'))
                        .prev()
                        .addClass("product-card-slideshow__image_active"),
                        a
                          .find('[data-sector-dot="'.concat(i, '"]'))
                          .prev()
                          .addClass("product-card-slideshow__dot_active");
                    }
                  }
                ),
                $(
                  ".product-card-slideshow .product-card-slideshow__image:first-child"
                ).addClass("product-card-slideshow__image_active"),
                $(
                  ".product-card-slideshow .product-card-slideshow__dot:first-child"
                ).addClass("product-card-slideshow__dot_active");
            }),
            (this.mounted = !0);
        },
      },
      {
        key: "unmount",
        value: function () {
          $(this.element).slick("unslick"), (this.mounted = !1);
        },
      },
    ]),
    t
  );
})();
function _defineProperties(t, e) {
  for (var o = 0; o < e.length; o++) {
    var a = e[o];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(t, a.key, a);
  }
}
function _createClass(t, e, o) {
  return (
    e && _defineProperties(t.prototype, e), o && _defineProperties(t, o), t
  );
}
function _createForOfIteratorHelper(t, e) {
  var o;
  if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
    if (
      Array.isArray(t) ||
      (o = _unsupportedIterableToArray(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      o && (t = o);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
        },
        e: function (t) {
          throw t;
        },
        f: n,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var i,
    r = !0,
    s = !1;
  return {
    s: function () {
      o = t[Symbol.iterator]();
    },
    n: function () {
      var t = o.next();
      return (r = t.done), t;
    },
    e: function (t) {
      (s = !0), (i = t);
    },
    f: function () {
      try {
        r || null == o.return || o.return();
      } finally {
        if (s) throw i;
      }
    },
  };
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === o && t.constructor && (o = t.constructor.name),
      "Map" === o || "Set" === o
        ? Array.from(t)
        : "Arguments" === o ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        ? _arrayLikeToArray(t, e)
        : void 0
    );
  }
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var o = 0, a = new Array(e); o < e; o++) a[o] = t[o];
  return a;
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function landing_sliders() {
  var t = $(".landing-slider .owl-carousel");
  t.length &&
    t.each(function () {
      var t,
        e,
        o,
        a,
        n = $(this);
      n.is(".landing-slider_1 .owl-carousel")
        ? ((t = 2), (e = 2), (o = 3), (a = 4))
        : n.is(".landing-slider_2 .owl-carousel") &&
          ((t = 1), (e = 2), (o = 3), (a = 4)),
        n.owlCarousel({
          loop: !0,
          margin: 20,
          responsive: {
            0: { items: t, margin: 16 },
            576: { items: e },
            768: { items: o },
            992: { items: a },
          },
        });
    });
}
function toggle() {
  var t = $(".toggle-section");
  t.each(function () {
    var t,
      e,
      o = $(this),
      a = o.children(".toggle-section__trigger"),
      n = o.children(".toggle-section__content"),
      i = n.find(".toggle-section__close"),
      r = !!o.hasClass("active");
    (a.on("click", function () {
      (r = !r), s();
    }),
    i.on("click", function () {
      (r = !1), s();
    }),
    o.is("[data-hover]")) &&
      (a.add(n).on("mouseenter", function (t) {
        isTouch || (e && clearTimeout(e), (r = !0), s());
      }),
      a.add(n).on("mouseleave", function (t) {
        var o;
        isTouch ||
          ((o = $(this).is(a) ? 500 : 100),
          (e = setTimeout(function () {
            (r = !1), s();
          }, o)));
      }));
    function s() {
      r
        ? (o.add(n).add(a).addClass("active"),
          o.is("[data-slide]") && n.slideDown(250))
        : (o.add(a).add(n).removeClass("active"),
          o.is("[data-slide]") && (t ? n.stop().slideUp(250) : n.hide(0)));
    }
    (o.is("[data-out-hide]") || o.is("[data-hover]")) &&
      $(document).on("click touchstart", function (t) {
        var e = $(t.target);
        e.closest(n).length || e.closest(a).length || !r || ((r = !1), s());
      }),
      s(),
      (t = !0);
  });
}
function up() {
  var t = $(".js-up");
  function e() {
    $(window).scrollTop() > 50
      ? t.addClass("visible")
      : t.removeClass("visible");
  }
  var o = !1;
  $(window).on("scroll", function () {
    o ||
      ((o = !0),
      setTimeout(function () {
        e(), (o = !1);
      }, 100));
  }),
    e(),
    t.on("click", function (t) {
      t.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 500);
    });
}
function chatBlock() {
  var t = $(".chat-block"),
    e = $("[data-chat-open]"),
    o = $("[data-chat-close]");
  e.on("click", function () {
    t.addClass("active");
  }),
    o.on("click", function () {
      t.removeClass("active");
    });
}
$(document).ready(function () {
  var t = document.querySelector(".filter-toggle .toggle-input");
  if (t) {
    t.addEventListener("change", function () {
      var t = document.querySelector(".parameter-block"),
        e = document.querySelector(".auto-block"),
        o = document.querySelector(".po-parametram"),
        a = document.querySelector(".po-auto");
      if (this.checked)
        return (
          (t.style.display = "none"),
          (e.style.display = "block"),
          (o.style.color = "#A7A7AB"),
          void (a.style.color = "#000")
        );
      (t.style.display = "block"),
        (e.style.display = "none"),
        (o.style.color = "#000"),
        (a.style.color = "#A7A7AB");
    });
    var e = document.querySelector(".parameter-block .button-reset");
    if (e) {
      var o = document.querySelector(".parameter-block");
      e.addEventListener("click", function () {
        h(o);
      });
    }
    var a = document.querySelector(".auto-block .button-reset");
    if (a) {
      var n = document.querySelector(".auto-block");
      a.addEventListener("click", function () {
        h(n);
      });
    }
    var i = document.querySelectorAll(".selector");
    i.forEach(function (t) {
      t.addEventListener("click", function (t) {
        t.target !== this.firstChild &&
          (function () {
            var t = Array.from(i).some(function (t) {
              return null !== t.querySelector(".parameter-block .selected");
            });
            e.style.display = t ? "flex" : "none";
            var o = Array.from(i).some(function (t) {
              return null !== t.querySelector(".auto-block .selected");
            });
            a.style.display = o ? "flex" : "none";
          })();
      });
      var o = t.querySelector(".selected-option"),
        n = t.querySelector(".select-search-input"),
        r = t.querySelector(".select-options");
      (o.style.display = "block"),
        (n.style.display = "none"),
        (r.style.display = "none"),
        o.addEventListener("click", function () {
          !(function (t, e, o) {
            (e.style.display = "none" === e.style.display ? "block" : "none"),
              (t.style.display = "none" === t.style.display ? "block" : "none"),
              (o.style.display =
                "block" === o.style.display ? "none" : "block"),
              "block" === e.style.display && t.focus();
          })(n, r, o);
        });
      var s = t.querySelectorAll(".select-option");
      s.forEach(function (e) {
        e.addEventListener("click", function (a) {
          var i = a.target;
          if (i !== t.firstChild) {
            var s = t.querySelector(".selected");
            s && s.classList.remove("selected"), i.classList.add("selected");
          }
          (o.textContent = e.textContent), m(n, r, o);
        });
      }),
        document.querySelector("body").addEventListener("click", function (e) {
          t.contains(e.target) || m(n, r, o);
        }),
        n.addEventListener("input", function () {
          var t = n.value.toLowerCase();
          s.forEach(function (e) {
            !(function (t, e) {
              var o = t.textContent.toLowerCase();
              t.style.display = o.includes(e) ? "block" : "none";
            })(e, t);
          });
        });
    }),
      $(".tabs-slider-mobile").slick({
        infinite: !1,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: !1,
        variableWidth: !1,
        centerMode: !1,
      });
    var r = document.querySelectorAll(".tab-content");
    document.documentElement.clientWidth < 768 &&
      r.forEach(function (t) {
        t.style.display = "none";
      });
    var s = document.querySelectorAll(".tabs-slider-mobile .slider-item");
    document.documentElement.clientWidth < 768 &&
      s.forEach(function (t) {
        t.addEventListener("click", function (e) {
          var o = e.target,
            a = t.getAttribute("data-tab"),
            n = document.getElementById(a);
          document.querySelectorAll(".tab-content").forEach(function (t) {
            t.style.display = "none";
          }),
            (n.style.display = "block");
          var i = document
            .querySelector(".tabs-slider-mobile")
            .querySelector(".slider-item.active");
          i && i.classList.remove("active"), o.classList.add("active");
        });
      });
    var l = document.querySelector(".auto-modal-content");
    tippy("#auto-modal-btn", {
      content: l.innerHTML,
      allowHTML: !0,
      theme: "light",
      placement: "bottom",
      trigger: "click",
    });
    var c = document.querySelector(".auto__modal-button-mobile"),
      d = document.querySelector(".po-auto__modal-mobile"),
      u = document.querySelector(".po-auto-close-button");
    c.addEventListener("click", function () {
      d.style.display = "block";
    }),
      u.addEventListener("click", function () {
        d.style.display = "none";
      });
  }
  function h(t) {
    var e = t.querySelectorAll(".parameter-select .selector");
    (t.querySelector(".button-reset").style.display = "none"),
      e.forEach(function (t) {
        var e = t.querySelector(".selected-option"),
          o = t.querySelector(".select-options");
        e.textContent = o.firstElementChild.textContent;
      });
  }
  function m(t, e, o) {
    (e.style.display = "none"),
      (t.style.display = "none"),
      (o.style.display = "block");
  }
}),
  (function (t) {
    var e = "cscrlb";
    function o(o, a) {
      var n,
        i,
        r,
        s,
        l,
        c = o,
        d = t(o),
        u = d.find(".cscrlb-content"),
        h = 7 / 8,
        m = "vert",
        f = "scrollTop",
        p = "height",
        v = "top";
      function g(e) {
        e.preventDefault();
        var o = e.pageY;
        "horiz" === m && (o = e.pageX),
          (s = o - r.offset()[v]),
          t(document).on("mousemove", y),
          t(document).on("mouseup", _);
      }
      function y(t) {
        t.preventDefault();
        var e = t.pageY;
        "horiz" === m && (e = t.pageX);
        var o = ((e - i.offset()[v] - s) / i[p]()) * u[p]();
        n[f](o);
      }
      function _() {
        t(document).off("mousemove", y), t(document).off("mouseup", _);
      }
      function b(t) {
        if (t.target !== r[0]) {
          var e = h * n[p](),
            o =
              ("vert" === m ? t.originalEvent.layerY : t.originalEvent.layerX) <
              r.position()[v]
                ? n[f]() - e
                : n[f]() + e;
          n[f](o);
        }
      }
      function w(t) {
        C();
      }
      function $() {
        var t = u[p](),
          e = n[f](),
          o = i[p](),
          a = o / t,
          s = Math.round(a * e),
          l = Math.floor(a * (o + 2));
        o < t
          ? ("vert" === m
              ? r.css({ top: s, height: l })
              : r.css({ left: s, width: l }),
            i.show())
          : i.hide();
      }
      function C() {
        $(), k();
      }
      function k() {
        r.addClass("visible"),
          a.autoHide &&
            ("number" == typeof l && window.clearTimeout(l),
            (l = window.setTimeout(function () {
              r.removeClass("visible"),
                "number" == typeof l && window.clearTimeout(l);
            }, 1e3)));
      }
      function S() {
        "vert" === m
          ? (n.width(d.width() + T()), n.height(d.height()))
          : (n.width(d.width()),
            n.height(d.height() + T()),
            u.height(d.height()));
      }
      function T() {
        var e = t(
          '<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'
        );
        t("body").append(e);
        var o = t(e).innerWidth(),
          a = t("div", e).innerWidth();
        return (
          e.remove(),
          o === a && navigator.userAgent.toLowerCase().indexOf("firefox") > -1
            ? 17
            : o - a
        );
      }
      function A() {
        S(), $();
      }
      return (
        (a = t.extend({}, t.fn[e].defaults, a)),
        (window.onload = function () {
          u.focus();
        }),
        d.hasClass("horizontal") &&
          ((m = "horiz"), (f = "scrollLeft"), (p = "width"), (v = "left")),
        d.prepend(
          '<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>'
        ),
        (i = d.find(".cscrlb-scrollbar")),
        (r = d.find(".drag-handle")),
        a.wrapContent && u.wrap('<div class="cscrlb-scroll-content" />'),
        (n = d.find(".cscrlb-scroll-content")),
        S(),
        a.autoHide && d.on("mouseenter", C),
        r.on("mousedown", g),
        i.on("mousedown", b),
        n.on("scroll", w),
        $(),
        t(window).on("resize", function () {
          A();
        }),
        a.autoHide || k(),
        {
          option: function (t, e) {
            if (!e) return a[t];
            a[t] = e;
          },
          destroy: function () {
            var t;
            u.insertBefore(i),
              i.remove(),
              n.remove(),
              u.css({ height: d.height() + "px", "overflow-y": "scroll" }),
              void 0 !== a[(t = "onDestroy")] && a[t].call(c),
              d.removeData("plugin_" + e);
          },
          recalculate: A,
        }
      );
    }
    (t.fn[e] = function (a) {
      if ("string" == typeof arguments[0]) {
        var n,
          i = arguments[0],
          r = Array.prototype.slice.call(arguments, 1);
        return (
          this.each(function () {
            if (
              !t.data(this, "plugin_" + e) ||
              "function" != typeof t.data(this, "plugin_" + e)[i]
            )
              throw new Error(" " + i + " " + e);
            n = t.data(this, "plugin_" + e)[i].apply(this, r);
          }),
          void 0 !== n ? n : this
        );
      }
      if ("object" === _typeof(a) || !a)
        return this.each(function () {
          t.data(this, "plugin_" + e) ||
            t.data(this, "plugin_" + e, new o(this, a));
        });
    }),
      (t.fn[e].defaults = {
        onInit: function () {},
        onDestroy: function () {},
        wrapContent: !0,
        autoHide: !1,
      });
  })(jQuery),
  $(function () {
    $(".cscrlb-scrollable").cscrlb();
  }),
  $(document).ready(function () {
    homeBanner(),
      header(),
      gallery(),
      landing_sliders(),
      up(),
      chatBlock(),
      toggle(),
      new СustomInteraction({
        targets: "a, button, [data-custom-interaction], .image-zoom",
      }),
      document.querySelectorAll(".slider-constructor").forEach(function (t) {
        new SliderConstructor(t).init();
      });
  });
var СustomInteraction = function t() {
  var e = this,
    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  _classCallCheck(this, t),
    (this.targets = o.targets),
    (this.touchendDelay = o.touchendDelay || 100);
  var a = function (t) {
    var o = [];
    o[0] = t.target !== document ? t.target.closest(e.targets) : null;
    for (var a = o[0], n = 0; o[0] && (a = a.parentNode) !== document; )
      a.matches(o.value) && (n++, (o[n] = a));
    if ("touchstart" == t.type) {
      if (((e.touched = !0), e.timeout && clearTimeout(e.timeout), o[0])) {
        var i,
          r = _createForOfIteratorHelper(o);
        try {
          for (r.s(); !(i = r.n()).done; ) {
            i.value.setAttribute("data-touch", "");
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      }
    } else
      ("touchend" == t.type || ("contextmenu" == t.type && e.touched)) &&
        ((e.timeout = setTimeout(function () {
          e.touched = !1;
        }, e.touchendDelay)),
        o[0] &&
          setTimeout(function () {
            var t,
              e = _createForOfIteratorHelper(o);
            try {
              for (e.s(); !(t = e.n()).done; ) {
                t.value.removeAttribute("data-touch");
              }
            } catch (t) {
              e.e(t);
            } finally {
              e.f();
            }
          }, e.touchendDelay));
    "mouseenter" == t.type && !e.touched && o[0] && o[0] == t.target
      ? o[0].setAttribute("data-hover", "")
      : "mouseleave" == t.type &&
        !e.touched &&
        o[0] &&
        o[0] == t.target &&
        (o[0].removeAttribute("data-click"),
        o[0].removeAttribute("data-hover")),
      "mousedown" == t.type && !e.touched && o[0]
        ? o[0].setAttribute("data-click", "")
        : "mouseup" == t.type &&
          !e.touched &&
          o[0] &&
          o[0].removeAttribute("data-click");
  };
  document.addEventListener("touchstart", a),
    document.addEventListener("touchend", a),
    document.addEventListener("mouseenter", a, !0),
    document.addEventListener("mouseleave", a, !0),
    document.addEventListener("mousedown", a),
    document.addEventListener("mouseup", a),
    document.addEventListener("contextmenu", a);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIyIiwibyIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJTeW1ib2wiLCJpdGVyYXRvciIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTIiLCJsZW5ndGgiLCJpIiwiRiIsInMiLCJuIiwiZG9uZSIsInZhbHVlIiwiZSIsIl9lMyIsImYiLCJUeXBlRXJyb3IiLCJlcnIiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwiY2FsbCIsInN0ZXAiLCJuZXh0IiwiX2U0IiwicmV0dXJuIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiYXJyIiwibGVuIiwiYXJyMiIsIl90eXBlb2YyIiwiYnJlYWtwb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwidGhyb3R0bGUiLCJkZWxheSIsImNhbGxiYWNrIiwib3B0aW9ucyIsInRpbWVvdXRJRCIsIl9yZWYiLCJfcmVmJG5vVHJhaWxpbmciLCJub1RyYWlsaW5nIiwiX3JlZiRub0xlYWRpbmciLCJub0xlYWRpbmciLCJfcmVmJGRlYm91bmNlTW9kZSIsImRlYm91bmNlTW9kZSIsInVuZGVmaW5lZCIsImNhbmNlbGxlZCIsImxhc3RFeGVjIiwiY2xlYXJFeGlzdGluZ1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ3cmFwcGVyIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3VtZW50c18iLCJfa2V5Iiwic2VsZiIsInRoaXMiLCJlbGFwc2VkIiwiRGF0ZSIsIm5vdyIsImV4ZWMiLCJhcHBseSIsImNsZWFyIiwic2V0VGltZW91dCIsImNhbmNlbCIsIl9yZWYyJHVwY29taW5nT25seSIsInVwY29taW5nT25seSIsImRlYm91bmNlIiwiX3JlZiRhdEJlZ2luIiwiYXRCZWdpbiIsIiQiLCJ2ZXJzaW9uIiwiZm4iLCJqcXVlcnkiLCJzcGxpdCIsIkVycm9yIiwiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiVXRpbCIsImpRdWVyeSIsImhhc093blByb3BlcnR5IiwiVFJBTlNJVElPTl9FTkQiLCJ0cmFuc2l0aW9uRW5kRW11bGF0b3IiLCJkdXJhdGlvbiIsIl90aGlzIiwiY2FsbGVkIiwib25lIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsInRyaW0iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJjc3MiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsInRyaWdnZXIiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJCb29sZWFuIiwiaXNFbGVtZW50Iiwib2JqIiwibm9kZVR5cGUiLCJ0eXBlQ2hlY2tDb25maWciLCJjb21wb25lbnROYW1lIiwiY29uZmlnIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZVR5cGUiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiUmVnRXhwIiwidG9VcHBlckNhc2UiLCJmaW5kU2hhZG93Um9vdCIsImRvY3VtZW50RWxlbWVudCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJwYXJlbnROb2RlIiwialF1ZXJ5RGV0ZWN0aW9uIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJldmVudCIsInNwZWNpYWwiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsInRhcmdldCIsImlzIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsIkNvbGxhcHNlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHVzaCIsIl9vYmplY3RTcHJlYWQyIiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiRGVmYXVsdCIsInRvZ2dsZSIsInBhcmVudCIsIkRlZmF1bHRUeXBlIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiRElNRU5TSU9OX1dJRFRIIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl90cmlnZ2VyQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWQiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJfc2VsZWN0b3IiLCJfcGFyZW50IiwiX2dldFBhcmVudCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9wcm90byIsImhhc0NsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vdCIsImRhdGEiLCJzdGFydEV2ZW50IiwiRXZlbnQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzdHlsZSIsImF0dHIiLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsIl90aGlzMiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsImRpc3Bvc2UiLCJyZW1vdmVEYXRhIiwiX3RoaXMzIiwiY2hpbGRyZW4iLCJlYWNoIiwiX2dldFRhcmdldEZyb21FbGVtZW50IiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwidG9nZ2xlQ2xhc3MiLCIkdGhpcyIsImdldCIsIm9uIiwiY3VycmVudFRhcmdldCIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0cmlnZ2VyIiwic2VsZWN0b3JzIiwiJHRhcmdldCIsIm5vQ29uZmxpY3QiLCJjbGljayIsInNsaWRlVXAiLCJmaW5kIiwic2xpZGVUb2dnbGUiLCJiaWdTbGlkZXMiLCJhdXRvUGxheVRpbWVvdXRTZWMiLCJwYXJzZUludCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImRvdHMiLCJpdGVtcyIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwibmF2VGV4dCIsInJhZGlvQnV0dG9ucyIsImNob2ljZXMiLCJnYWxsZXJ5IiwiZmFuY3lib3giLCIkc2VsZWN0b3IiLCJwYXJlbnRzIiwib3BlbiIsImJhY2tGb2N1cyIsImluZGV4IiwiaGVhZGVyIiwiaGVpZ2h0Iiwic2Nyb2xsIiwiJGhlYWRlciIsImlzVGhyb3R0bGVkIiwiY2hlY2siLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJob21lQmFubmVyIiwiJHNsaWRlciIsInNtYXJ0U3BlZWQiLCJsYXp5TG9hZCIsIl90eXBlb2YiLCJzbGlkZXJEZWJvdW5jZSIsImZ1bmMiLCJpbnRlcnZhbCIsImNvbnRleHQiLCJ0aW1lb3V0IiwiX2FyZ3VtZW50cyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja2VkIiwiY2hvaWNlIiwiZGlzcGxheSIsInJlbW92ZSIsInJlc3BvbnNpdmUiLCJidXR0b25EZWZhdWx0VmlldyIsImJ1dHRvbldpZGVWaWV3IiwiYnV0dG9uTGluZVZpZXciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVhZHkiLCJjbG9zZXN0IiwiZm9jdXMiLCJjb25jYXQiLCJ2YWwiLCJ0aGF0IiwibGlzdElEIiwiZ3JvdXBzIiwidGhlT3B0aW9ucyIsInN0YXJ0aW5nT3B0aW9uIiwiY3VyR3JvdXAiLCJjdXJOYW1lIiwiY3VyT3B0IiwiY3VyVmFsIiwiY3VySHRtbCIsImh0bWwiLCJpbnNlcnRBZnRlciIsInNlbGVjdGRkIiwic2VsZWN0dWwiLCJzZWxlY3RsaSIsInBhcmVudFVsIiwidGhpc2RkIiwic2libGluZ3MiLCJsaWh0bWwiLCJsaXZhbHVlIiwib3JpZ2luYWxTZWxlY3QiLCJrZXlwcmVzc1NsaWRlcnMiLCJrZXlwcmVzc1NsaWRlciIsImZpZWxkX25hbWUiLCJpbnB1dDAiLCJpbnB1dDEiLCJpbnB1dHMiLCJzdGFydFZhbCIsImRhdGFzZXQiLCJjdXJyZW50VmFsdWUiLCJlbmRWYWwiLCJtaW5WYWwiLCJtaW5WYWx1ZSIsIm1heFZhbCIsIm1heFZhbHVlIiwicG9zdGZpeCIsInNldFNsaWRlckhhbmRsZSIsInIiLCJub1VpU2xpZGVyIiwic2V0IiwiY3JlYXRlIiwic3RhcnQiLCJjb25uZWN0IiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJmb3JtYXQiLCJ3TnVtYiIsImRlY2ltYWxzIiwidGhvdXNhbmQiLCJ2YWx1ZXMiLCJpbnB1dCIsInBvc2l0aW9uIiwiTnVtYmVyIiwic3RlcHMiLCJ3aGljaCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwiYW5pbWF0ZSIsIm9mZnNldCIsInRvcCIsInN5bmMxIiwic3luYzIiLCJzbGlkZVNwZWVkIiwicmVzcG9uc2l2ZVJlZnJlc2hSYXRlIiwiZWwiLCJjb3VudCIsIml0ZW0iLCJjdXJyZW50Iiwicm91bmQiLCJlcSIsIm9uc2NyZWVuIiwiZmlyc3QiLCJlbmQiLCJsYXN0IiwidG8iLCJzbGlkZUJ5IiwibnVtYmVyIiwiYWN0aXZlVGFiIiwiZmFkZUluIiwiZF9hY3RpdmVUYWIiLCJhY3RpdmVUYWJCbG9jayIsIiR0aGlzQWN0aXZlIiwidG9vbHRpcENvbnRlbnQiLCJjbG9uZWRUb29sdGlwQ29udGVudCIsImNsb25lIiwidGlwcHkiLCJjb250ZW50IiwiYWxsb3dIVE1MIiwicGxhY2VtZW50IiwidGhlbWUiLCJpbnRlcmFjdGl2ZSIsIm9uTW91bnQiLCJpbnN0YW5jZSIsInJlZmVyZW5jZSIsInRpdGxlIiwidGltZSIsImFjdGlvbiIsImJ1dHRvbiIsImlzVGltZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0ZXh0IiwiZm9ybSIsInJlbW92ZUF0dHIiLCJzY3JvbGxMZWZ0IiwiYXBwZW5kIiwiX3N0ZXAzIiwiY29sbGFwc2UiLCJjb2xsYXBzZUlkIiwiY29sbGFwc2VDaGlsZHJlbkhlaWdodCIsIl9pdGVyYXRvcjMiLCJjaGlsZCIsInRvdWNoc3RhcnRYIiwidG91Y2hlbmRYIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaW1nIiwicHJldiIsIlNsaWRlckNvbnN0cnVjdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwicGFyYW1zIiwiYXJyb3dzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsInJvd3MiLCJzdGF0ZSIsImJyZWFrcG9pbnQiLCJwcmV2S2V5Iiwic2xpZGVzIiwiY29udGFpbnNNb2JpbGVIaWRkZW5TbGlkZXMiLCJjaGlsZE5vZGVzIiwic2xpZGUiLCJjcmVhdGVJY29ucyIsImNoZWNrU2xpZGVyU3RhdGUiLCJjaGVja1NsaWRlclN0YXRlRGVib3VuY2VkIiwibGVmdEljb24iLCJyaWdodEljb24iLCJsZWZ0SWNvbkNsYXNzIiwicmlnaHRJY29uQ2xhc3MiLCJpY29uIiwiaXNMZWZ0SWNvbiIsImlzUmlnaHRJY29uIiwib3V0ZXJIVE1MIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJtb3VudGVkIiwic2F2ZWRXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJ1bm1vdW50IiwiY2hlY2tTbGlkZXNWaXNpYmlsaXR5IiwibW91bnQiLCJhZGQiLCJfdGhpczQiLCJzaG91bGRCZUhpZGRlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNsaWNrIiwiYXV0b3BsYXlTcGVlZCIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhY2Nlc3NpYmlsaXR5Iiwic2V0dGluZ3MiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9lIiwiX2UyIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJsYW5kaW5nX3NsaWRlcnMiLCIkc2xpZGVycyIsImNvdW50MSIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsIiRzZWN0aW9uIiwiaW5pdGlhbGl6ZWQiLCIkdG9nZ2xlIiwiJGNvbnRlbnQiLCIkY2xvc2UiLCJpc1RvdWNoIiwic2xpZGVEb3duIiwic3RvcCIsInVwIiwiJGJ0biIsImNoYXRCbG9jayIsIiRibG9jayIsIiRvcGVuIiwidGlyZUZpbHRlclRvZ2dsZSIsImJsb2NrUGFyYW1ldGVyIiwiYmxvY2tBdXRvIiwicG9QYXJhbWV0cmFtIiwicG9BdXRvIiwiY2hlY2tlZCIsImNvbG9yIiwicmVzZXRGaWx0ZXJCdXR0b25QYXJhbWV0ZXIiLCJwYXJhbWV0ZXJCbG9jayIsInJlc2V0RmlsdGVycyIsInJlc2V0RmlsdGVyQnV0dG9uQXV0byIsImF1dG9CbG9jayIsImZpcnN0Q2hpbGQiLCJhdExlYXN0T25lU2VsZWN0ZWRQYXJhbSIsInNvbWUiLCJhdExlYXN0T25lU2VsZWN0ZWRBdXRvIiwiY2hlY2tTZWxlY3RvcnMiLCJzZWxlY3RlZE9wdGlvbiIsInNlYXJjaElucHV0Iiwic2VsZWN0T3B0aW9ucyIsInRvZ2dsZU9wdGlvbnMiLCJzZWxlY3RPcHRpb24iLCJzZWxlY3RlZCIsInRleHRDb250ZW50IiwiY2xvc2VPcHRpb25zIiwic2VhcmNoU3RyaW5nIiwiaW5jbHVkZXMiLCJzZWFyY2hPcHRpb25zIiwidmFyaWFibGVXaWR0aCIsInRhYnMiLCJjbGllbnRXaWR0aCIsInRhYiIsInNsaWRlckl0ZW1zIiwidGFyZ2V0SXRlbSIsInRhYklkIiwiaXRlbUFjdGl2ZSIsImF1dG9Nb2RhbCIsImlubmVySFRNTCIsImF1dG9PcGVuQnV0dG9uIiwiYXV0b01vZGFsTW9iaWxlIiwiYXV0b0Nsb3NlQnV0dG9uIiwiYmxvY2siLCJmaXJzdEVsZW1lbnRDaGlsZCIsInBsdWdpbk5hbWUiLCJQbHVnaW4iLCIkc2Nyb2xsQ29udGVudEVsIiwiJHNjcm9sbGJhckVsIiwiJGRyYWdIYW5kbGVFbCIsImRyYWdPZmZzZXQiLCJmbGFzaFRpbWVvdXQiLCIkZWwiLCIkY29udGVudEVsIiwicGFnZUp1bXBNdWx0cCIsInNjcm9sbERpcmVjdGlvbiIsInNjcm9sbE9mZnNldEF0dHIiLCJzaXplQXR0ciIsIm9mZnNldEF0dHIiLCJzdGFydERyYWciLCJldmVudE9mZnNldCIsInBhZ2VZIiwicGFnZVgiLCJkcmFnIiwiZW5kRHJhZyIsInNjcm9sbFBvcyIsIm9mZiIsImp1bXBTY3JvbGwiLCJqdW1wQW10Iiwib3JpZ2luYWxFdmVudCIsImxheWVyWSIsImxheWVyWCIsIm9uU2Nyb2xsZWQiLCJmbGFzaFNjcm9sbGJhciIsInJlc2l6ZVNjcm9sbGJhciIsImNvbnRlbnRTaXplIiwic2Nyb2xsT2Zmc2V0Iiwic2Nyb2xsYmFyU2l6ZSIsInNjcm9sbGJhclJhdGlvIiwiaGFuZGxlT2Zmc2V0IiwiaGFuZGxlU2l6ZSIsImZsb29yIiwibGVmdCIsIndpZHRoIiwic2hvd1Njcm9sbGJhciIsImF1dG9IaWRlIiwicmVzaXplU2Nyb2xsQ29udGVudCIsInNjcm9sbGJhcldpZHRoIiwidGVtcEVsIiwid2lkdGhNaW51c1Njcm9sbGJhcnMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwicmVjYWxjdWxhdGUiLCJleHRlbmQiLCJkZWZhdWx0cyIsIm9ubG9hZCIsInByZXBlbmQiLCJ3cmFwQ29udGVudCIsIndyYXAiLCJvcHRpb24iLCJkZXN0cm95IiwiaG9va05hbWUiLCJpbnNlcnRCZWZvcmUiLCJyZXR1cm5WYWwiLCJtZXRob2ROYW1lIiwiYXJncyIsIm9uSW5pdCIsIm9uRGVzdHJveSIsImNzY3JsYiIsItChdXN0b21JbnRlcmFjdGlvbiIsInRhcmdldHMiLCJpbml0IiwidG91Y2hlbmREZWxheSIsImV2ZW50cyIsIiR0YXJnZXRzIiwiJGVsZW1lbnQiLCJ0eXBlIiwidG91Y2hlZCIsIl9zdGVwIiwiX2l0ZXJhdG9yIiwic2V0QXR0cmlidXRlIiwiX3N0ZXAyIiwiX2l0ZXJhdG9yMiIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSxTQUFTQSw0QkFBNEJDLEVBQUdDLEdBQWtCLElBQUlDLEVBQXVCLG9CQUFYQyxRQUEwQkgsRUFBRUcsT0FBT0MsV0FBYUosRUFBRSxjQUFlLElBQUtFLEVBQUksQ0FBRSxHQUFJRyxNQUFNQyxRQUFRTixLQUFPRSxFQUFLSyw2QkFBNkJQLEtBQU9DLEdBQWtCRCxHQUF5QixpQkFBYkEsRUFBRVEsT0FBcUIsQ0FBTU4sSUFBSUYsRUFBSUUsR0FBSSxJQUFJTyxFQUFJLEVBQU9D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V0gsRUFBUyxHQUMzREEsRUFBUyxHQUFHTSxhQUFhLGFBQWMsSUFHbEIsV0FBZDVlLEVBQU13ZSxPQUFzQjNZLEVBQU80WSxTQUFXSCxFQUFTLElBQzlEQSxFQUFTLEdBQUdTLGdCQUFnQixhQUVoQyxFQUVBM2hCLFNBQVM2TSxpQkFBaUIsYUFBY29VLEdBQ3hDamhCLFNBQVM2TSxpQkFBaUIsV0FBWW9VLEdBQ3RDamhCLFNBQVM2TSxpQkFBaUIsYUFBY29VLEdBQVEsR0FDaERqaEIsU0FBUzZNLGlCQUFpQixhQUFjb1UsR0FBUSxHQUNoRGpoQixTQUFTNk0saUJBQWlCLFlBQWFvVSxHQUN2Q2poQixTQUFTNk0saUJBQWlCLFVBQVdvVSxHQUNyQ2poQixTQUFTNk0saUJBQWlCLGNBQWVvVSxFQUMzQyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKFwidXNlIHN0cmljdFwiKTtcclxuXHJcbmNvbnN0IGJyZWFrcG9pbnRzID0ge1xyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzYsXHJcbiAgbWQ6IDc2OCxcclxuICBsZzogMTAyNCxcclxuICB4bDogMTI4MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIHZhciBfcmVmID0gb3B0aW9ucyB8fCB7fSxcclxuICAgIF9yZWYkbm9UcmFpbGluZyA9IF9yZWYubm9UcmFpbGluZyxcclxuICAgIG5vVHJhaWxpbmcgPSBfcmVmJG5vVHJhaWxpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRub1RyYWlsaW5nLFxyXG4gICAgX3JlZiRub0xlYWRpbmcgPSBfcmVmLm5vTGVhZGluZyxcclxuICAgIG5vTGVhZGluZyA9IF9yZWYkbm9MZWFkaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkbm9MZWFkaW5nLFxyXG4gICAgX3JlZiRkZWJvdW5jZU1vZGUgPSBfcmVmLmRlYm91bmNlTW9kZSxcclxuICAgIGRlYm91bmNlTW9kZSA9IF9yZWYkZGVib3VuY2VNb2RlID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmJGRlYm91bmNlTW9kZTtcclxuXHJcbiAgdmFyIHRpbWVvdXRJRDtcclxuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBsYXN0RXhlYyA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCkge1xyXG4gICAgaWYgKHRpbWVvdXRJRCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElEKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbChvcHRpb25zKSB7XHJcbiAgICB2YXIgX3JlZjIgPSBvcHRpb25zIHx8IHt9LFxyXG4gICAgICBfcmVmMiR1cGNvbWluZ09ubHkgPSBfcmVmMi51cGNvbWluZ09ubHksXHJcbiAgICAgIHVwY29taW5nT25seSA9IF9yZWYyJHVwY29taW5nT25seSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR1cGNvbWluZ09ubHk7XHJcblxyXG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcclxuICAgIGNhbmNlbGxlZCA9ICF1cGNvbWluZ09ubHk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xyXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c18gPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgIGFyZ3VtZW50c19bX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gbGFzdEV4ZWM7XHJcblxyXG4gICAgaWYgKGNhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhlYygpIHtcclxuICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjYWxsYmFjay5hcHBseShzZWxmLCBhcmd1bWVudHNfKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgICAgdGltZW91dElEID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbm9MZWFkaW5nICYmIGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEKSB7XHJcbiAgICAgIGV4ZWMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xyXG5cclxuICAgIGlmIChkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkpIHtcclxuICAgICAgaWYgKG5vTGVhZGluZykge1xyXG4gICAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgaWYgKCFub1RyYWlsaW5nKSB7XHJcbiAgICAgICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYywgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleGVjKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobm9UcmFpbGluZyAhPT0gdHJ1ZSkge1xyXG4gICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYyxcclxuICAgICAgICBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cmFwcGVyLmNhbmNlbCA9IGNhbmNlbDtcclxuXHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYm91bmNlKGRlbGF5LCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIHZhciBfcmVmID0gb3B0aW9ucyB8fCB7fSxcclxuICAgIF9yZWYkYXRCZWdpbiA9IF9yZWYuYXRCZWdpbixcclxuICAgIGF0QmVnaW4gPSBfcmVmJGF0QmVnaW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhdEJlZ2luO1xyXG5cclxuICByZXR1cm4gdGhyb3R0bGUoZGVsYXksIGNhbGxiYWNrLCB7XHJcbiAgICBkZWJvdW5jZU1vZGU6IGF0QmVnaW4gIT09IGZhbHNlLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQm9vdHN0cmFwICh2NC40LjApOiBpbmRleC5qc1xyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKTtcclxuICB9XHJcblxyXG4gIHZhciB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xyXG4gIHZhciBtaW5NYWpvciA9IDE7XHJcbiAgdmFyIGx0TWFqb3IgPSAyO1xyXG4gIHZhciBtaW5NaW5vciA9IDk7XHJcbiAgdmFyIG1pblBhdGNoID0gMTtcclxuICB2YXIgbWF4TWFqb3IgPSA0O1xyXG5cclxuICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJyk7XHJcbiAgfVxyXG59KSgkKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXHJcblxyXG4vKiFcclxuICAqIEJvb3RzdHJhcCB1dGlsLmpzIHY0LjUuMCAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcclxuICAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcclxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAgKi9cclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpIDpcclxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSkgOlxyXG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlV0aWwgPSBmYWN0b3J5KGdsb2JhbC5qUXVlcnkpKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKCQpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAkID0gJCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoJCwgJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQm9vdHN0cmFwICh2NC41LjApOiB1dGlsLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG4gIHZhciBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJztcclxuICB2YXIgTUFYX1VJRCA9IDEwMDAwMDA7XHJcbiAgdmFyIE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDsgLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxyXG5cclxuICBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XHJcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiBcIlwiICsgb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxyXG4gICAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxyXG4gICAgICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xyXG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcclxuICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIWNhbGxlZCkge1xyXG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQoX3RoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9LCBkdXJhdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xyXG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvcjtcclxuICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBQdWJsaWMgVXRpbCBBcGlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xyXG5cclxuXHJcbiAgdmFyIFV0aWwgPSB7XHJcbiAgICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXHJcbiAgICBnZXRVSUQ6IGZ1bmN0aW9uIGdldFVJRChwcmVmaXgpIHtcclxuICAgICAgZG8ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTsgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxyXG4gICAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKTtcclxuXHJcbiAgICAgIHJldHVybiBwcmVmaXg7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudDogZnVuY3Rpb24gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgIHZhciBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG5cclxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XHJcbiAgICAgICAgdmFyIGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGw7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQ6IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcclxuXHJcblxyXG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgdmFyIHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5Jyk7XHJcbiAgICAgIHZhciBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpOyAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXHJcblxyXG4gICAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9IC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcclxuXHJcblxyXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXTtcclxuICAgICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF07XHJcbiAgICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xyXG4gICAgfSxcclxuICAgIHJlZmxvdzogZnVuY3Rpb24gcmVmbG93KGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORCk7XHJcbiAgICB9LFxyXG4gICAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XHJcbiAgICBzdXBwb3J0c1RyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcclxuICAgICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpO1xyXG4gICAgfSxcclxuICAgIGlzRWxlbWVudDogZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xyXG4gICAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlO1xyXG4gICAgfSxcclxuICAgIHR5cGVDaGVja0NvbmZpZzogZnVuY3Rpb24gdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcclxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgIHZhciBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgdmFyIHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcclxuICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpO1xyXG5cclxuICAgICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKSArIFwiOiBcIiArIChcIk9wdGlvbiBcXFwiXCIgKyBwcm9wZXJ0eSArIFwiXFxcIiBwcm92aWRlZCB0eXBlIFxcXCJcIiArIHZhbHVlVHlwZSArIFwiXFxcIiBcIikgKyAoXCJidXQgZXhwZWN0ZWQgdHlwZSBcXFwiXCIgKyBleHBlY3RlZFR5cGVzICsgXCJcXFwiLlwiKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZmluZFNoYWRvd1Jvb3Q6IGZ1bmN0aW9uIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcclxuICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0gLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XHJcblxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdmFyIHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICB9IC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XHJcblxyXG5cclxuICAgICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcclxuICAgIH0sXHJcbiAgICBqUXVlcnlEZXRlY3Rpb246IGZ1bmN0aW9uIGpRdWVyeURldGVjdGlvbigpIHtcclxuICAgICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xyXG4gICAgICB2YXIgbWluTWFqb3IgPSAxO1xyXG4gICAgICB2YXIgbHRNYWpvciA9IDI7XHJcbiAgICAgIHZhciBtaW5NaW5vciA9IDk7XHJcbiAgICAgIHZhciBtaW5QYXRjaCA9IDE7XHJcbiAgICAgIHZhciBtYXhNYWpvciA9IDQ7XHJcblxyXG4gICAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBVdGlsLmpRdWVyeURldGVjdGlvbigpO1xyXG4gIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCk7XHJcblxyXG4gIHJldHVybiBVdGlsO1xyXG5cclxufSkpKTtcclxuXHJcbi8qIVxyXG4gICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzIHY0LjUuMCAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcclxuICAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcclxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAgKi9cclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJy4vdXRpbC5qcycpKSA6XHJcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnanF1ZXJ5JywgJy4vdXRpbC5qcyddLCBmYWN0b3J5KSA6XHJcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29sbGFwc2UgPSBmYWN0b3J5KGdsb2JhbC5qUXVlcnksIGdsb2JhbC5VdGlsKSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uICgkLCBVdGlsKSB7ICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgJCA9ICQgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCQsICdkZWZhdWx0JykgPyAkWydkZWZhdWx0J10gOiAkO1xyXG4gIFV0aWwgPSBVdGlsICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChVdGlsLCAnZGVmYXVsdCcpID8gVXRpbFsnZGVmYXVsdCddIDogVXRpbDtcclxuXHJcbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xyXG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XHJcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcclxuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xyXG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XHJcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoa2V5IGluIG9iaikge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcclxuXHJcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xyXG4gICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcclxuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xyXG4gICAgICB9KTtcclxuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXlzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcclxuXHJcbiAgICAgIGlmIChpICUgMikge1xyXG4gICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29uc3RhbnRzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG4gIHZhciBOQU1FID0gJ2NvbGxhcHNlJztcclxuICB2YXIgVkVSU0lPTiA9ICc0LjUuMCc7XHJcbiAgdmFyIERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJztcclxuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcclxuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XHJcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XHJcbiAgdmFyIERlZmF1bHQgPSB7XHJcbiAgICB0b2dnbGU6IHRydWUsXHJcbiAgICBwYXJlbnQ6ICcnXHJcbiAgfTtcclxuICB2YXIgRGVmYXVsdFR5cGUgPSB7XHJcbiAgICB0b2dnbGU6ICdib29sZWFuJyxcclxuICAgIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknXHJcbiAgfTtcclxuICB2YXIgRVZFTlRfU0hPVyA9IFwic2hvd1wiICsgRVZFTlRfS0VZO1xyXG4gIHZhciBFVkVOVF9TSE9XTiA9IFwic2hvd25cIiArIEVWRU5UX0tFWTtcclxuICB2YXIgRVZFTlRfSElERSA9IFwiaGlkZVwiICsgRVZFTlRfS0VZO1xyXG4gIHZhciBFVkVOVF9ISURERU4gPSBcImhpZGRlblwiICsgRVZFTlRfS0VZO1xyXG4gIHZhciBFVkVOVF9DTElDS19EQVRBX0FQSSA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWTtcclxuICB2YXIgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xyXG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJztcclxuICB2YXIgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xyXG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnO1xyXG4gIHZhciBESU1FTlNJT05fV0lEVEggPSAnd2lkdGgnO1xyXG4gIHZhciBESU1FTlNJT05fSEVJR0hUID0gJ2hlaWdodCc7XHJcbiAgdmFyIFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJztcclxuICB2YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xyXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENsYXNzIERlZmluaXRpb25cclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuXHJcbiAgdmFyIENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxhcHNlKGVsZW1lbnQsIGNvbmZpZykge1xyXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xyXG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1baHJlZj1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl0sXCIgKyAoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS10YXJnZXQ9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdXCIpKSk7XHJcbiAgICAgIHZhciB0b2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHZhciBlbGVtID0gdG9nZ2xlTGlzdFtpXTtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSk7XHJcbiAgICAgICAgdmFyIGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5maWx0ZXIoZnVuY3Rpb24gKGZvdW5kRWxlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZvdW5kRWxlbSA9PT0gZWxlbWVudDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHJcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IC8vIEdldHRlcnNcclxuXHJcblxyXG4gICAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcclxuXHJcbiAgICAvLyBQdWJsaWNcclxuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGFjdGl2ZXM7XHJcbiAgICAgIHZhciBhY3RpdmVzRGF0YTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9BQ1RJVkVTKSkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JykgPT09IF90aGlzLl9jb25maWcucGFyZW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NPTExBUFNFKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhY3RpdmVzKSB7XHJcbiAgICAgICAgYWN0aXZlc0RhdGEgPSAkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvcikuZGF0YShEQVRBX0tFWSk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVyk7XHJcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYWN0aXZlcykge1xyXG4gICAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJyk7XHJcblxyXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcclxuICAgICAgICAgICQoYWN0aXZlcykuZGF0YShEQVRBX0tFWSwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XHJcblxyXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcclxuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UgKyBcIiBcIiArIENMQVNTX05BTUVfU0hPVyk7XHJcbiAgICAgICAgX3RoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xyXG5cclxuICAgICAgICBfdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihFVkVOVF9TSE9XTik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTtcclxuICAgICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XHJcbiAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xyXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpO1xyXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudCk7XHJcblxyXG4gICAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xyXG5cclxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dICsgXCJweFwiO1xyXG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcclxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UgKyBcIiBcIiArIENMQVNTX05BTUVfU0hPVyk7XHJcbiAgICAgIHZhciB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXTtcclxuICAgICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKTtcclxuXHJcbiAgICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcclxuICAgICAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XHJcblxyXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcclxuICAgICAgICBfdGhpczIuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgICQoX3RoaXMyLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UpLnRyaWdnZXIoRVZFTlRfSElEREVOKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xyXG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcclxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9wcm90by5zZXRUcmFuc2l0aW9uaW5nID0gZnVuY3Rpb24gc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcclxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XHJcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBudWxsO1xyXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xyXG4gICAgfSAvLyBQcml2YXRlXHJcbiAgICA7XHJcblxyXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xyXG4gICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCksIGNvbmZpZyk7XHJcbiAgICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xyXG5cclxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSk7XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9O1xyXG5cclxuICAgIF9wcm90by5fZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gX2dldERpbWVuc2lvbigpIHtcclxuICAgICAgdmFyIGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhESU1FTlNJT05fV0lEVEgpO1xyXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBESU1FTlNJT05fV0lEVEggOiBESU1FTlNJT05fSEVJR0hUO1xyXG4gICAgfTtcclxuXHJcbiAgICBfcHJvdG8uX2dldFBhcmVudCA9IGZ1bmN0aW9uIF9nZXRQYXJlbnQoKSB7XHJcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgdmFyIHBhcmVudDtcclxuXHJcbiAgICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xyXG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQ7IC8vIEl0J3MgYSBqUXVlcnkgb2JqZWN0XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtkYXRhLXBhcmVudD1cXFwiXCIgKyB0aGlzLl9jb25maWcucGFyZW50ICsgXCJcXFwiXVwiO1xyXG4gICAgICB2YXIgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcbiAgICAgICQoY2hpbGRyZW4pLmVhY2goZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcclxuICAgICAgICBfdGhpczMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksIFtlbGVtZW50XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBfcHJvdG8uX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyA9IGZ1bmN0aW9uIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XHJcbiAgICAgIHZhciBpc09wZW4gPSAkKGVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVyk7XHJcblxyXG4gICAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICQodHJpZ2dlckFycmF5KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbikuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3Blbik7XHJcbiAgICAgIH1cclxuICAgIH0gLy8gU3RhdGljXHJcbiAgICA7XHJcblxyXG4gICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSk7XHJcblxyXG4gICAgICAgIHZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIERlZmF1bHQpLCAkdGhpcy5kYXRhKCkpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XHJcblxyXG4gICAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcclxuICAgICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgX2NvbmZpZyk7XHJcbiAgICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9jcmVhdGVDbGFzcyhDb2xsYXBzZSwgbnVsbCwgW3tcclxuICAgICAga2V5OiBcIlZFUlNJT05cIixcclxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAga2V5OiBcIkRlZmF1bHRcIixcclxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1dKTtcclxuXHJcbiAgICByZXR1cm4gQ29sbGFwc2U7XHJcbiAgfSgpO1xyXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG5cclxuICAkKGRvY3VtZW50KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxyXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICR0cmlnZ2VyID0gJCh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcclxuICAgIHZhciBzZWxlY3RvcnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgICQoc2VsZWN0b3JzKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR0YXJnZXQgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgZGF0YSA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSk7XHJcbiAgICAgIHZhciBjb25maWcgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKCk7XHJcblxyXG4gICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIGpRdWVyeVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xyXG5cclxuICAkLmZuW05BTUVdID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZTtcclxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2U7XHJcblxyXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XHJcbiAgICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gQ29sbGFwc2U7XHJcblxyXG59KSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXBcclxuXHJcblxyXG4kKFwiLmFjY19fdG9nZ2xlOm5vdCgubm90X3RvZ2dsZSlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgaWYgKCR0aGlzLm5leHQoKS5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICR0aGlzLm5leHQoKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAkdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICR0aGlzLm5leHQoKS5zbGlkZVVwKDIwMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCJsaSAuaW5uZXJcIikucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZChcImxpIC5hY2NfX3RvZ2dsZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCJsaSAuaW5uZXJcIikuc2xpZGVVcCgyMDApO1xyXG4gICAgJHRoaXMubmV4dCgpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICR0aGlzLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJHRoaXMubmV4dCgpLnNsaWRlVG9nZ2xlKDIwMCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBiaWdTbGlkZXMgPSAkKFwiLm1haW4tc2xpZGVyIC5vd2wtY2Fyb3VzZWxcIiksXHJcbiAgYXV0b1BsYXlUaW1lb3V0U2VjID0gcGFyc2VJbnQoYmlnU2xpZGVzLmRhdGEoXCJhdXRvcGxheS10aW1lb3V0XCIpKTtcclxuYmlnU2xpZGVzLm93bENhcm91c2VsKHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG1hcmdpbjogNSxcclxuICBuYXY6IHRydWUsXHJcbiAgZG90czogdHJ1ZSxcclxuICBpdGVtczogMSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVRpbWVvdXQ6IGF1dG9QbGF5VGltZW91dFNlYyAqIDEwMDAsXHJcbiAgbmF2VGV4dDogW1xyXG4gICAgJzxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMC41IDE4LjFcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk05LDBsMS40LDEuNEwyLjgsOWw3LjYsNy42TDksMTguMUwwLDlDMCw5LDkuMSwwLDksMHpcIj48L3BhdGg+PC9zdmc+JyxcclxuICAgICc8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAuNSAxOC4xXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMS40LDE4LjFMMCwxNi43bDcuNi03LjZMMCwxLjVMMS40LDBsOSw5LjFDMTAuNCw5LjEsMS4zLDE4LjEsMS40LDE4LjF6XCI+PC9wYXRoPjwvc3ZnPicsXHJcbiAgXSxcclxufSk7XHJcbnZhciByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsaXZlcnktc2VsZWN0aW9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG52YXIgY2hvaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsaXZlcnktY2hvaWNlXCIpO1xyXG5yYWRpb0J1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNsaWNrZWQgPSB0aGlzO1xyXG4gICAgY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNob2ljZS5jbGFzc0xpc3QuY29udGFpbnMoY2xpY2tlZC5pZCkgfHxcclxuICAgICAgICBjaG9pY2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsaXZlcnktdHlwZS1cIiArIGNsaWNrZWQudmFsdWUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNob2ljZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNob2ljZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuJChcIi5zaG9wcGluZy1jYXJ0LWl0ZW1fX2RlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS5wYXJlbnQoXCIuc2hvcHBpbmctY2FydC1pdGVtXCIpLnJlbW92ZSgpO1xyXG59KTtcclxuJChcIi5zbGlkZXIgLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBtYXJnaW46IDAsXHJcbiAgaXRlbXM6IDEsXHJcbiAgbmF2OiB0cnVlLFxyXG59KTtcclxuJChcIi5uZXdzLXNsaWRlciAub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG1hcmdpbjogMCxcclxuICBpdGVtczogNCxcclxuICByZXNwb25zaXZlOiB7XHJcbiAgICAwOiB7XHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiAxLFxyXG4gICAgfSxcclxuICAgIDQ3OToge1xyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpdGVtczogMixcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgaXRlbXM6IDMsXHJcbiAgICB9LFxyXG4gICAgOTkyOiB7XHJcbiAgICAgIGl0ZW1zOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuJChcIi5hY3Rpb24tc2xpZGVyIC5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbWFyZ2luOiAyMCxcclxuICBuYXY6IHRydWUsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgaXRlbXM6IDMsXHJcbiAgcmVzcG9uc2l2ZToge1xyXG4gICAgMDoge1xyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpdGVtczogMSxcclxuICAgIH0sXHJcbiAgICA0Nzk6IHtcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaXRlbXM6IDIsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgIGl0ZW1zOiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuJChcIi5wYXJ0bmVycy1zbGlkZXIgLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBtYXJnaW46IDAsXHJcbiAgbmF2OiB0cnVlLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGl0ZW1zOiA1LFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIDA6IHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgaXRlbXM6IDEsXHJcbiAgICB9LFxyXG4gICAgNTY2OiB7XHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpdGVtczogMyxcclxuICAgIH0sXHJcbiAgICA5MDA6IHtcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaXRlbXM6IDQsXHJcbiAgICB9LFxyXG4gICAgOTUwOiB7XHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbigoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uRGVmYXVsdFZpZXcgPSAkKFwiLmJ1dHRvbjFcIik7XHJcbiAgY29uc3QgYnV0dG9uV2lkZVZpZXcgPSAkKFwiLmJ1dHRvbjJcIik7XHJcbiAgY29uc3QgYnV0dG9uTGluZVZpZXcgPSAkKFwiLmJ1dHRvbjNcIik7XHJcbiAgY29uc3QgaXRlbXMgPSAkKFwiLnByb2R1Y3QtaXRlbVwiKTtcclxuXHJcbiAgYnV0dG9uV2lkZVZpZXcuY2xpY2soKGV2ZW50KSA9PiB7XHJcbiAgICBidXR0b25EZWZhdWx0Vmlldy5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICBidXR0b25MaW5lVmlldy5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0YWxvZ0dyaWRcIiwgXCJ3aWRlXCIpO1xyXG4gICAgaXRlbXMucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWl0ZW0tLWxpbmVcIik7XHJcbiAgICBpdGVtcy5hZGRDbGFzcyhcInByb2R1Y3QtaXRlbS0td2lkZVwiKTtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uTGluZVZpZXcuY2xpY2soKGV2ZW50KSA9PiB7XHJcbiAgICBidXR0b25XaWRlVmlldy5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICBidXR0b25EZWZhdWx0Vmlldy5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0YWxvZ0dyaWRcIiwgXCJ3aWRlXCIpO1xyXG4gICAgaXRlbXMucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWl0ZW0tLXdpZGVcIik7XHJcbiAgICBpdGVtcy5hZGRDbGFzcyhcInByb2R1Y3QtaXRlbS0tbGluZVwiKTtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uRGVmYXVsdFZpZXcuY2xpY2soKGV2ZW50KSA9PiB7XHJcbiAgICBidXR0b25XaWRlVmlldy5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICBidXR0b25MaW5lVmlldy5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiY3VycmVudFwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0YWxvZ0dyaWRcIiwgXCJkZWZhdWx0XCIpO1xyXG4gICAgaXRlbXMucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWl0ZW0tLXdpZGVcIik7XHJcbiAgICBpdGVtcy5yZW1vdmVDbGFzcyhcInByb2R1Y3QtaXRlbS0tbGluZVwiKTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIi5ib3R0b20tbW9iaWxlLW1lbnVcIikgJiYgJChcIi5ib3R0b20tbW9iaWxlLW1lbnUtbGlzdF9hY3RpdmVcIikpIHtcclxuICAgICAgJChcIi5ib3R0b20tbW9iaWxlLW1lbnUtbGlzdF9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJib3R0b20tbW9iaWxlLW1lbnUtbGlzdF9hY3RpdmVcIik7XHJcbiAgICAgICQoXCIuYm90dG9tLW1vYmlsZS1tZW51LWJ1dHRvbl9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJib3R0b20tbW9iaWxlLW1lbnUtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIi5jYXRhbG9nLWZpbHRlci1hY2NvcmRpb24gYS5vcGVuZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwidWw6Zmlyc3RcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJbZGF0YS1vcGVuLWRyb3Bkb3duLWNvbnRlbnRdXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudCgpO1xyXG4gICAgcGFyZW50LmZpbmQoXCJbZGF0YS1jbG9zZS1kcm9wZG93bi1jb250ZW50XVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgIHRhcmdldC5hZGRDbGFzcyhcImQtbm9uZVwiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIltkYXRhLWNsb3NlLWRyb3Bkb3duLWNvbnRlbnRdXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudCgpO1xyXG4gICAgcGFyZW50LmZpbmQoXCJbZGF0YS1vcGVuLWRyb3Bkb3duLWNvbnRlbnRdXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgdGFyZ2V0LmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiW2RhdGEtdG9nZ2xlLWJvdHRvbS1kcm9wZG93bl1cIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICQoXCIuYm90dG9tLW1vYmlsZS1tZW51LWxpc3RcIikudG9nZ2xlQ2xhc3MoXCJib3R0b20tbW9iaWxlLW1lbnUtbGlzdF9hY3RpdmVcIik7XHJcbiAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKFwiYm90dG9tLW1vYmlsZS1tZW51LWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJbZGF0YS1jbG9zZS1zZWFyY2gtbW9kYWxdXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgJChcIi5zZWFyY2gtbW9kYWwtd2luZG93XCIpLnJlbW92ZUNsYXNzKFwiZC1ibG9ja1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIltkYXRhLW9wZW4tc2VhcmNoLW1vZGFsXVwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICQoXCIuc2VhcmNoLW1vZGFsLXdpbmRvd1wiKS5hZGRDbGFzcyhcImQtYmxvY2tcIik7XHJcbiAgICAkKFwiLnNlYXJjaC1tb2RhbC13aW5kb3dfX2lucHV0XCIpLmZvY3VzKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJbZGF0YS1jbGVhci1pbnB1dC1idXR0b25dXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuYXR0cihcImRhdGEtY2xlYXItaW5wdXQtYnV0dG9uXCIpO1xyXG4gICAgJChgW2RhdGEtY2xlYXItaW5wdXQ9XCIke2lkfVwiXWApLnZhbChcIlwiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5saWtlLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgJChcIi5jaXR5LXNlbGVjdGlvbl9fbGlua1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmNpdHktc2VsZWN0aW9uX19saXN0XCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKHdpbmRvdykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2l0eS1zZWxlY3Rpb25fX2xpbmtcIikpIHtcclxuICAgICAgJChcIi5jaXR5LXNlbGVjdGlvbl9fbGlzdFwiKS50b2dnbGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIuYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5tb2JpbGUtbWVudVwiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5jYXRhbG9nLWlubmVyLWJ0blwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAkKFwiLmNhdGFsb2ctaGVhZGVyLWNvbnRlbnRcIikudG9nZ2xlKDApO1xyXG4gIH0pO1xyXG4gICQoXCIuY2F0YWxvZy1pbm5lci1idG4sLmNhdGFsb2ctbWVudV9faGVhZCBhXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKFwiLmNhdGFsb2ctbWVudVwiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5idXJnZXItY2F0YWxvZ1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgfSk7XHJcbiAgJChcIi5zaGFyZS1idG5cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5zaGFyZS1ibG9ja19fc2hvd1wiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5jbG9zZS1wYW5lbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmJvdHRvbS1wYW5lbFwiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5maWx0ZXItYnRuLCAuY2xvc2UtYnRuLTJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5jYXRhbG9nLWZpbHRlclwiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5jYXRhbG9nLXNpZGVfX3RpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuY2F0YWxvZy1zaWRlX19jb250ZW50XCIpLnRvZ2dsZSgwKTtcclxuICAgICQoXCIuY2F0YWxvZy1zaWRlX19jb250ZW50LWFjY29yZGVvblwiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5jYXRhbG9nLW9wZW5lZFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmNhdGFsb2ctb3BlbmVkIC5zdWJtZW51XCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmJ1cmdlci1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJtZW51LW9uXCIpO1xyXG4gIH0pO1xyXG4gICQoXCIuY2F0YWxvZy1pbm5lclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICQoXCIuY2F0YWxvZy1pbm5lci1jb250ZW50XCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICB2YXIgY3VzdG9tU2VsZWN0ID0gJChcInNlbGVjdC5jdXN0b20tc2VsZWN0XCIpOyAvLyBGSVJTVCwgY3JlYXRlIHRoZSBjdXN0b20gc2VsZWN0IG1lbnVzIGZyb20gdGhlIGV4aXN0aW5nIHNlbGVjdFxyXG5cclxuICBjdXN0b21TZWxlY3QuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICB2YXIgbGlzdElEID0gdGhhdC5hdHRyKFwiaWRcIiksXHJcbiAgICAgIGdyb3VwcyA9IHRoYXQuY2hpbGRyZW4oXCJvcHRncm91cFwiKSxcclxuICAgICAgdGhlT3B0aW9ucyA9IFwiXCIsXHJcbiAgICAgIHN0YXJ0aW5nT3B0aW9uID0gXCJcIixcclxuICAgICAgY3VzdG9tU2VsZWN0ID0gXCJcIjsgLy9jaGVjayBpZiB0aGVyZSBhcmUgb3B0aW9uIGdyb3Vwc1xyXG5cclxuICAgIGlmIChncm91cHMubGVuZ3RoKSB7XHJcbiAgICAgIGdyb3Vwcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VyR3JvdXAgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBjdXJOYW1lID0gY3VyR3JvdXAuYXR0cihcImxhYmVsXCIpOyAvL09wZW4gdGhlIG9wdGlvbiBncm91cFxyXG5cclxuICAgICAgICB0aGVPcHRpb25zICs9ICc8bGkgY2xhc3M9XCJvcHRncm91cFwiPicgKyBjdXJOYW1lICsgXCI8L2xpPlwiOyAvL2dldCB0aGUgb3B0aW9uc1xyXG5cclxuICAgICAgICBjdXJHcm91cC5jaGlsZHJlbihcIm9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBjdXJPcHQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgdmFyIGN1clZhbCA9IGN1ck9wdC5hdHRyKFwidmFsdWVcIiksXHJcbiAgICAgICAgICAgIGN1ckh0bWwgPSBjdXJPcHQuaHRtbCgpLFxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gY3VyT3B0LmF0dHIoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAoaXNTZWxlY3RlZCA9PT0gXCJzZWxlY3RlZFwiKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0aW5nT3B0aW9uID0gY3VySHRtbDtcclxuICAgICAgICAgICAgdGhlT3B0aW9ucyArPSAnPGxpIGNsYXNzPVwic2VsZWN0ZWRcIiBkYXRhLXZhbHVlPVwiJyArIGN1clZhbCArICdcIj4nICsgY3VySHRtbCArIFwiPC9saT5cIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoZU9wdGlvbnMgKz0gJzxsaSBkYXRhLXZhbHVlPVwiJyArIGN1clZhbCArICdcIj4nICsgY3VySHRtbCArIFwiPC9saT5cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsgLy9DbG9zZSB0aGUgb3B0aW9uIGdyb3VwXHJcbiAgICAgICAgLy90aGVPcHRpb25zICs9ICc8bGkgY2xhc3M9XCJvcHRncm91cC1jbG9zZVwiPjwvbGk+JztcclxuICAgICAgfSk7IC8vYWRkIG9wdGlvbnMgbm90IGluIGEgZ3JvdXAgdG8gdGhlIHRvcCBvZiB0aGUgbGlzdFxyXG5cclxuICAgICAgdGhhdC5jaGlsZHJlbihcIm9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VyT3B0ID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgY3VyVmFsID0gY3VyT3B0LmF0dHIoXCJ2YWx1ZVwiKSxcclxuICAgICAgICAgIGN1ckh0bWwgPSBjdXJPcHQuaHRtbCgpLFxyXG4gICAgICAgICAgaXNTZWxlY3RlZCA9IGN1ck9wdC5hdHRyKFwic2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIGlmIChpc1NlbGVjdGVkID09PSBcInNlbGVjdGVkXCIpIHtcclxuICAgICAgICAgIHN0YXJ0aW5nT3B0aW9uID0gY3VySHRtbDtcclxuICAgICAgICAgIHRoZU9wdGlvbnMgPVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwic2VsZWN0ZWRcIiBkYXRhLXZhbHVlPVwiJyArIGN1clZhbCArICdcIj4nICsgY3VySHRtbCArIFwiPC9saT5cIiArIHRoZU9wdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoZU9wdGlvbnMgPSAnPGxpIGRhdGEtdmFsdWU9XCInICsgY3VyVmFsICsgJ1wiPicgKyBjdXJIdG1sICsgXCI8L2xpPlwiICsgdGhlT3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhhdC5jaGlsZHJlbihcIm9wdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VyT3B0ID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgY3VyVmFsID0gY3VyT3B0LmF0dHIoXCJ2YWx1ZVwiKSxcclxuICAgICAgICAgIGN1ckh0bWwgPSBjdXJPcHQuaHRtbCgpLFxyXG4gICAgICAgICAgaXNTZWxlY3RlZCA9IGN1ck9wdC5hdHRyKFwic2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIGlmIChpc1NlbGVjdGVkID09PSBcInNlbGVjdGVkXCIpIHtcclxuICAgICAgICAgIHN0YXJ0aW5nT3B0aW9uID0gY3VySHRtbDtcclxuICAgICAgICAgIHRoZU9wdGlvbnMgKz0gJzxsaSBjbGFzcz1cInNlbGVjdGVkXCIgZGF0YS12YWx1ZT1cIicgKyBjdXJWYWwgKyAnXCI+JyArIGN1ckh0bWwgKyBcIjwvbGk+XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoZU9wdGlvbnMgKz0gJzxsaSBkYXRhLXZhbHVlPVwiJyArIGN1clZhbCArICdcIj4nICsgY3VySHRtbCArIFwiPC9saT5cIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSAvL2J1aWxkIHRoZSBjdXN0b20gc2VsZWN0XHJcblxyXG4gICAgY3VzdG9tU2VsZWN0ID1cclxuICAgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiZHJvcGRvd24tc2VsZWN0IGVudHlwby1kb3duLW9wZW4tYmlnXCI+PHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjdGFiLWFycm93XCI+PC91c2U+PC9zdmc+PHNwYW4+JyArXHJcbiAgICAgIHN0YXJ0aW5nT3B0aW9uICtcclxuICAgICAgJzwvc3Bhbj48L2Rpdj48dWwgY2xhc3M9XCJkcm9wZG93bi1zZWxlY3QtdWxcIiBkYXRhLXJvbGU9XCInICtcclxuICAgICAgbGlzdElEICtcclxuICAgICAgJ1wiPicgK1xyXG4gICAgICB0aGVPcHRpb25zICtcclxuICAgICAgXCI8L3VsPjwvZGl2PiA8IS0tIC5jdXN0b20tc2VsZWN0LXdyYXBwZXIgLS0+XCI7IC8vYXBwZW5kIGl0IGFmdGVyIHRoZSBhY3R1YWwgc2VsZWN0XHJcblxyXG4gICAgJChjdXN0b21TZWxlY3QpLmluc2VydEFmdGVyKHRoYXQpO1xyXG4gIH0pO1xyXG4gIHZhciBzZWxlY3RkZCA9ICQoXCIuZHJvcGRvd24tc2VsZWN0XCIpLFxyXG4gICAgc2VsZWN0dWwgPSAkKFwiLmRyb3Bkb3duLXNlbGVjdC11bFwiKSxcclxuICAgIHNlbGVjdGxpID0gJChcIi5kcm9wZG93bi1zZWxlY3QtdWwgbGlcIik7IC8vVEhFTiBtYWtlIHRoZW0gd29ya1xyXG5cclxuICBzZWxlY3RkZC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucGFyZW50KFwiLmRyb3Bkb3duLWNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTsgLy9IaWRlIGl0IG9uIG1vdXNlbGVhdmVcclxuXHJcbiAgc2VsZWN0dWwub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucGFyZW50KFwiLmRyb3Bkb3duLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTsgLy9zZWxlY3QgdGhlIG9wdGlvblxyXG5cclxuICBzZWxlY3RsaS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0aGF0ID0gJCh0aGlzKTsgLy9lbnN1cmUgY2xpY2tpbmcgZ3JvdXAgbGFiZWxzIGRvZXMgbm90IGNhdXNlIGNoYW5nZVxyXG5cclxuICAgIGlmICghdGhhdC5oYXNDbGFzcyhcIm9wdGdyb3VwXCIpKSB7XHJcbiAgICAgIHZhciBwYXJlbnRVbCA9IHRoYXQucGFyZW50KFwidWxcIiksXHJcbiAgICAgICAgdGhpc2RkID0gcGFyZW50VWwuc2libGluZ3MoXCIuZHJvcGRvd24tc2VsZWN0XCIpLFxyXG4gICAgICAgIGxpaHRtbCA9IHRoYXQuaHRtbCgpLFxyXG4gICAgICAgIGxpdmFsdWUgPSB0aGF0LmF0dHIoXCJkYXRhLXZhbHVlXCIpLFxyXG4gICAgICAgIG9yaWdpbmFsU2VsZWN0ID0gXCIjXCIgKyBwYXJlbnRVbC5hdHRyKFwiZGF0YS1yb2xlXCIpOyAvL2Nsb3NlIHRoZSBkcm9wZG93blxyXG5cclxuICAgICAgcGFyZW50VWwucGFyZW50KFwiLmRyb3Bkb3duLWNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTsgLy9yZW1vdmUgc2VsZWN0ZWQgY2xhc3MgZnJvbSBhbGwgbGlzdCBpdGVtc1xyXG5cclxuICAgICAgdGhhdC5zaWJsaW5ncyhcImxpXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7IC8vYWRkIC5zZWxlY3RlZCB0byBjbGlja2VkIGxpXHJcblxyXG4gICAgICB0aGF0LmFkZENsYXNzKFwic2VsZWN0ZWRcIik7IC8vc2V0IHRoZSB2YWx1ZSBvZiB0aGUgaGlkZGVuIGlucHV0XHJcblxyXG4gICAgICAkKG9yaWdpbmFsU2VsZWN0KS52YWwobGl2YWx1ZSk7IC8vY2hhbmdlIHRoZSBkcm9wZG93biB0ZXh0XHJcblxyXG4gICAgICB0aGlzZGQuY2hpbGRyZW4oXCJzcGFuXCIpLmh0bWwobGlodG1sKTtcclxuICAgIH1cclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnkoKSB7XHJcbiAgaWYgKCQuZmFuY3lib3gpIHtcclxuICAgICQoXCIub3dsLWl0ZW0gW2RhdGEtZmFuY3lib3hdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHNlbGVjdG9yID0gJCh0aGlzKVxyXG4gICAgICAucGFyZW50cyhcIi5vd2wtY2Fyb3VzZWxcIilcclxuICAgICAgLmZpbmQoXCIub3dsLWl0ZW06bm90KC5jbG9uZWQpIFtkYXRhLWZhbmN5Ym94XVwiKTtcclxuICAgICAgJC5mYW5jeWJveC5vcGVuKFxyXG4gICAgICAgICRzZWxlY3RvcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzZWxlY3RvcjogJHNlbGVjdG9yLFxyXG4gICAgICAgICAgYmFja0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRzZWxlY3Rvci5pbmRleCh0aGlzKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcigpIHtcclxuICB2YXIgJGhlYWRlciA9ICQoXCJoZWFkZXJcIiksXHJcbiAgICBoZWlnaHQsXHJcbiAgICBzY3JvbGw7XHJcbiAgbGV0IGlzVGhyb3R0bGVkID0gZmFsc2U7XHJcbiAgY2hlY2soKTtcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpc1Rocm90dGxlZCkgcmV0dXJuO1xyXG4gICAgaXNUaHJvdHRsZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNoZWNrKCk7XHJcbiAgICAgIGlzVGhyb3R0bGVkID0gZmFsc2U7XHJcbiAgICB9LCAxMDApO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBjaGVjaygpIHtcclxuICAgIGlmICghJGhlYWRlci5oYXNDbGFzcyhcImhlYWRlcl9sYW5kaW5nXCIpKSB7XHJcbiAgICAgIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgaGVpZ2h0ID0gJGhlYWRlci5oZWlnaHQoKTtcclxuXHJcbiAgICAgIGlmIChzY3JvbGwgPiBoZWlnaHQpIHtcclxuICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IC8vZ2FsbGVyeVxyXG5cclxuZnVuY3Rpb24gaG9tZUJhbm5lcigpIHtcclxuICB2YXIgJHNsaWRlciA9ICQoXCIuaG9tZS1iYW5uZXIgLm93bC1jYXJvdXNlbFwiKSxcclxuICAgIGFycm93UHJldiA9XHJcbiAgICAgICc8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAuNSAxOC4xXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNOSwwbDEuNCwxLjRMMi44LDlsNy42LDcuNkw5LDE4LjFMMCw5QzAsOSw5LjEsMCw5LDB6XCI+PC9wYXRoPjwvc3ZnPicsXHJcbiAgICBhcnJvd05leHQgPVxyXG4gICAgICAnPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwLjUgMTguMVwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTEuNCwxOC4xTDAsMTYuN2w3LjYtNy42TDAsMS41TDEuNCwwbDksOS4xQzEwLjQsOS4xLDEuMywxOC4xLDEuNCwxOC4xelwiPjwvcGF0aD48L3N2Zz4nO1xyXG5cclxuICBpZiAoJHNsaWRlci5sZW5ndGgpIHtcclxuICAgICRzbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXY6IHRydWUsXHJcbiAgICAgIHNtYXJ0U3BlZWQ6IDUwMCxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaXRlbXM6IDEsXHJcbiAgICAgIGxhenlMb2FkOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXlUaW1lb3V0OiAoKyRzbGlkZXIuZGF0YShcImF1dG9wbGF5LXRpbWVvdXRcIikgfHwgNSkgKiAxMDAwLFxyXG4gICAgICBuYXZUZXh0OiBbYXJyb3dQcmV2LCBhcnJvd05leHRdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgY29uc3Qga2V5cHJlc3NTbGlkZXJzID0gJChcIi5yYW5nZS1zbGlkZXJcIik7XHJcbiAgJChrZXlwcmVzc1NsaWRlcnMpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBrZXlwcmVzc1NsaWRlcikge1xyXG4gICAgY29uc3QgZmllbGRfbmFtZSA9ICQoa2V5cHJlc3NTbGlkZXIpLmRhdGEoXCJuYW1lXCIpO1xyXG4gICAgY29uc3QgaW5wdXQwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9cIiArIGZpZWxkX25hbWUgKyBcIl8wXCIpO1xyXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9cIiArIGZpZWxkX25hbWUgKyBcIl8xXCIpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gW2lucHV0MCwgaW5wdXQxXTtcclxuXHJcbiAgICBjb25zdCBzdGFydFZhbCA9IGlucHV0MCA/IHBhcnNlSW50KGlucHV0MC5kYXRhc2V0LmN1cnJlbnRWYWx1ZSkgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBlbmRWYWwgPSBpbnB1dDEgPyBwYXJzZUludChpbnB1dDEuZGF0YXNldC5jdXJyZW50VmFsdWUpIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbWluVmFsID0gaW5wdXQwID8gcGFyc2VJbnQoaW5wdXQwLmRhdGFzZXQubWluVmFsdWUpIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgbWF4VmFsID0gaW5wdXQxID8gcGFyc2VJbnQoaW5wdXQxLmRhdGFzZXQubWF4VmFsdWUpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIGxldCBwb3N0Zml4ID0gXCJcIjtcclxuXHJcbiAgICBpZiAoZmllbGRfbmFtZSA9PSBcInByaWNlX3JhbmdlXCIpIHtcclxuICAgICAgcG9zdGZpeCA9IFwiIOKCvVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygbm9VaVNsaWRlciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBub1VpU2xpZGVyLmNyZWF0ZShrZXlwcmVzc1NsaWRlciwge1xyXG4gICAgICAgIHN0YXJ0OiBbc3RhcnRWYWwsIGVuZFZhbF0sXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgbWluOiBtaW5WYWwsXHJcbiAgICAgICAgICBtYXg6IG1heFZhbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdDogd051bWIoe1xyXG4gICAgICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICB0aG91c2FuZDogXCIgXCIsXHJcbiAgICAgICAgICBwb3N0Zml4OiBwb3N0Zml4LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChrZXlwcmVzc1NsaWRlciAhPT0gbnVsbCAmJiBrZXlwcmVzc1NsaWRlci5ub1VpU2xpZGVyKSB7XHJcbiAgICAgIGtleXByZXNzU2xpZGVyLm5vVWlTbGlkZXIub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgaW5wdXRzW2hhbmRsZV0udmFsdWUgPSB2YWx1ZXNbaGFuZGxlXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U2xpZGVySGFuZGxlKGksIHZhbHVlKSB7XHJcbiAgICAgIGxldCByID0gW251bGwsIG51bGxdO1xyXG4gICAgICByW2ldID0gdmFsdWU7XHJcbiAgICAgIGtleXByZXNzU2xpZGVyLm5vVWlTbGlkZXIuc2V0KHIpO1xyXG4gICAgfSAvLyBMaXN0ZW4gdG8ga2V5ZG93biBldmVudHMgb24gdGhlIGlucHV0IGZpZWxkLlxyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCwgaGFuZGxlKSB7XHJcbiAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRTbGlkZXJIYW5kbGUoaGFuZGxlLCB0aGlzLnZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IGtleXByZXNzU2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gTnVtYmVyKHZhbHVlc1toYW5kbGVdKTsgLy8gW1toYW5kbGUwX2Rvd24sIGhhbmRsZTBfdXBdLCBbaGFuZGxlMV9kb3duLCBoYW5kbGUxX3VwXV1cclxuXHJcbiAgICAgICAgbGV0IHN0ZXBzID0ga2V5cHJlc3NTbGlkZXIubm9VaVNsaWRlci5zdGVwcygpOyAvLyBbZG93biwgdXBdXHJcblxyXG4gICAgICAgIGxldCBzdGVwID0gc3RlcHNbaGFuZGxlXTtcclxuICAgICAgICBsZXQgcG9zaXRpb247IC8vIDEzIGlzIGVudGVyLFxyXG4gICAgICAgIC8vIDM4IGlzIGtleSB1cCxcclxuICAgICAgICAvLyA0MCBpcyBrZXkgZG93bi5cclxuXHJcbiAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICBzZXRTbGlkZXJIYW5kbGUoaGFuZGxlLCB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgLy8gR2V0IHN0ZXAgdG8gZ28gaW5jcmVhc2Ugc2xpZGVyIHZhbHVlICh1cClcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBzdGVwWzFdOyAvLyBmYWxzZSA9IG5vIHN0ZXAgaXMgc2V0XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb24gPSAxO1xyXG4gICAgICAgICAgICB9IC8vIG51bGwgPSBlZGdlIG9mIHNsaWRlclxyXG5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVySGFuZGxlKGhhbmRsZSwgdmFsdWUgKyBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gc3RlcFswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbiA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHNldFNsaWRlckhhbmRsZShoYW5kbGUsIHZhbHVlIC0gcG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVGhpcyB3aWxsIHNlbGVjdCBldmVyeXRoaW5nIHdpdGggdGhlIGNsYXNzIHNtb290aFNjcm9sbFxyXG4gIC8vIFRoaXMgc2hvdWxkIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBjYXJvdXNlbCwgc2Nyb2xsc3B5LCBldGMuLi5cclxuICAkKFwiLnNtb290aFNjcm9sbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSAmJlxyXG4gICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lXHJcbiAgICApIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArIFwiXVwiKTtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgMTAwMFxyXG4gICAgICAgICk7IC8vIFRoZSBudW1iZXIgaGVyZSByZXByZXNlbnRzIHRoZSBzcGVlZCBvZiB0aGUgc2Nyb2xsIGluIG1pbGxpc2Vjb25kc1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHN5bmMxID0gJChcIiNzeW5jMVwiKTtcclxuICB2YXIgc3luYzIgPSAkKFwiI3N5bmMyXCIpO1xyXG4gIHZhciBzbGlkZXNQZXJQYWdlID0gMzsgLy9nbG9iYWx5IGRlZmluZSBudW1iZXIgb2YgZWxlbWVudHMgcGVyIHBhZ2VcclxuXHJcbiAgdmFyIHN5bmNlZFNlY29uZGFyeSA9IHRydWU7XHJcbiAgc3luYzFcclxuICAub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZVNwZWVkOiAyMDAwLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlUmVmcmVzaFJhdGU6IDIwMCxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgfSlcclxuICAub24oXCJjaGFuZ2VkLm93bC5jYXJvdXNlbFwiLCBzeW5jUG9zaXRpb24pO1xyXG4gIHN5bmMyXHJcbiAgLm9uKFwiaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHN5bmMyLmZpbmQoXCIub3dsLWl0ZW1cIikuZXEoMCkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gIH0pXHJcbiAgLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiBzbGlkZXNQZXJQYWdlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG5hdjogdHJ1ZSxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBzbWFydFNwZWVkOiAyMDAsXHJcbiAgICBzbGlkZVNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZUJ5OiBzbGlkZXNQZXJQYWdlLFxyXG4gICAgLy9hbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc2xpZGUgYnkgMSwgdGhpcyB3YXkgdGhlIGFjdGl2ZSBzbGlkZSB3aWxsIHN0aWNrIHRvIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBzZWNvbmQgY2Fyb3VzZWxcclxuICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMTAwLFxyXG4gIH0pXHJcbiAgLm9uKFwiY2hhbmdlZC5vd2wuY2Fyb3VzZWxcIiwgc3luY1Bvc2l0aW9uMik7XHJcblxyXG4gIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbihlbCkge1xyXG4gICAgLy9pZiB5b3Ugc2V0IGxvb3AgdG8gZmFsc2UsIHlvdSBoYXZlIHRvIHJlc3RvcmUgdGhpcyBuZXh0IGxpbmVcclxuICAgIC8vdmFyIGN1cnJlbnQgPSBlbC5pdGVtLmluZGV4O1xyXG4gICAgLy9pZiB5b3UgZGlzYWJsZSBsb29wIHlvdSBoYXZlIHRvIGNvbW1lbnQgdGhpcyBibG9ja1xyXG4gICAgdmFyIGNvdW50ID0gZWwuaXRlbS5jb3VudCAtIDE7XHJcbiAgICB2YXIgY3VycmVudCA9IE1hdGgucm91bmQoZWwuaXRlbS5pbmRleCAtIGVsLml0ZW0uY291bnQgLyAyIC0gMC41KTtcclxuXHJcbiAgICBpZiAoY3VycmVudCA8IDApIHtcclxuICAgICAgY3VycmVudCA9IGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50ID4gY291bnQpIHtcclxuICAgICAgY3VycmVudCA9IDA7XHJcbiAgICB9IC8vZW5kIGJsb2NrXHJcblxyXG4gICAgc3luYzIuZmluZChcIi5vd2wtaXRlbVwiKS5yZW1vdmVDbGFzcyhcImN1cnJlbnRcIikuZXEoY3VycmVudCkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgdmFyIG9uc2NyZWVuID0gc3luYzIuZmluZChcIi5vd2wtaXRlbS5hY3RpdmVcIikubGVuZ3RoIC0gMTtcclxuICAgIHZhciBzdGFydCA9IHN5bmMyLmZpbmQoXCIub3dsLWl0ZW0uYWN0aXZlXCIpLmZpcnN0KCkuaW5kZXgoKTtcclxuICAgIHZhciBlbmQgPSBzeW5jMi5maW5kKFwiLm93bC1pdGVtLmFjdGl2ZVwiKS5sYXN0KCkuaW5kZXgoKTtcclxuXHJcbiAgICBpZiAoY3VycmVudCA+IGVuZCkge1xyXG4gICAgICBzeW5jMi5kYXRhKFwib3dsLmNhcm91c2VsXCIpLnRvKGN1cnJlbnQsIDEwMCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnQgPCBzdGFydCkge1xyXG4gICAgICBzeW5jMi5kYXRhKFwib3dsLmNhcm91c2VsXCIpLnRvKGN1cnJlbnQgLSBvbnNjcmVlbiwgMTAwLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbjIoZWwpIHtcclxuICAgIGlmIChzeW5jZWRTZWNvbmRhcnkpIHtcclxuICAgICAgdmFyIG51bWJlciA9IGVsLml0ZW0uaW5kZXg7XHJcbiAgICAgIHN5bmMxLmRhdGEoXCJvd2wuY2Fyb3VzZWxcIikudG8obnVtYmVyLCAxMDAsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3luYzIub24oXCJjbGlja1wiLCBcIi5vd2wtaXRlbVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIG51bWJlciA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgIHN5bmMxLmRhdGEoXCJvd2wuY2Fyb3VzZWxcIikudG8obnVtYmVyLCAzMDAsIHRydWUpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoXCIudGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4kKFwiLnRhYi1jb250ZW50OmZpcnN0XCIpLnNob3coKTtcclxuLyogaWYgaW4gdGFiIG1vZGUgKi9cclxuXHJcbiQoXCJ1bC50YWJzIGxpLC5wcm9kdWN0LWNhcmRfX3Jldmlldy1saW5rIGEsLnNjaGVkdWxlLWJ0biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLnRhYi1jb250ZW50XCIpLmhpZGUoKTtcclxuICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKFwicmVsXCIpO1xyXG4gICQoXCIjXCIgKyBhY3RpdmVUYWIpLmZhZGVJbigpO1xyXG4gICQoXCJ1bC50YWJzIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgJChcIi50YWJfZHJhd2VyX2hlYWRpbmdcIikucmVtb3ZlQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxuICAkKFwiLnRhYl9kcmF3ZXJfaGVhZGluZ1tyZWxePSdcIiArIGFjdGl2ZVRhYiArIFwiJ11cIikuYWRkQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxufSk7XHJcbi8qIGlmIGluIGRyYXdlciBtb2RlICovXHJcblxyXG4kKFwiLnRhYl9kcmF3ZXJfaGVhZGluZ1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGRfYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKFwicmVsXCIpLFxyXG4gICAgYWN0aXZlVGFiQmxvY2sgPSAkKFwiI1wiICsgZF9hY3RpdmVUYWIgKyBcIjpoaWRkZW5cIiksXHJcbiAgICAkdGhpc0FjdGl2ZSA9ICQodGhpcykubm90KFwiLmRfYWN0aXZlXCIpO1xyXG4gICQoXCIudGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4gIGFjdGl2ZVRhYkJsb2NrLmZhZGVJbigpO1xyXG4gICQoXCIudGFiX2RyYXdlcl9oZWFkaW5nXCIpLnJlbW92ZUNsYXNzKFwiZF9hY3RpdmVcIik7XHJcbiAgJHRoaXNBY3RpdmUuYWRkQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxuICAkKFwidWwudGFicyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAkKFwidWwudGFicyBsaVtyZWxePSdcIiArIGRfYWN0aXZlVGFiICsgXCInXVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxufSk7XHJcbi8qIEV4dHJhIGNsYXNzIFwidGFiX2xhc3RcIlxyXG4gdG8gYWRkIGJvcmRlciB0byByaWdodCBzaWRlXHJcbiBvZiBsYXN0IHRhYiAqL1xyXG5cclxuJChcInVsLnRhYnMgbGlcIikubGFzdCgpLmFkZENsYXNzKFwidGFiX2xhc3RcIik7XHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGpRdWVyeShcIi5zY2hlZHVsZS1idG4gYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBqUXVlcnkoXCIuc2NoZWR1bGUtbGlua1wiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7XHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGpRdWVyeShcIi5wcm9kdWN0LWNhcmRfX3Jldmlldy1saW5rIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgalF1ZXJ5KFwiLnJldmlldy10YWItbGlua1wiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7IC8vc2xpZGVzaG93XHJcblxyXG4kKFwiLnRhYi1jb250ZW50XCIpLmhpZGUoKTtcclxuJChcIi50YWItY29udGVudDpmaXJzdFwiKS5zaG93KCk7XHJcbi8qIGlmIGluIHRhYiBtb2RlICovXHJcblxyXG4kKFwidWwudGFicyBsaSwucHJvZHVjdC1jYXJkX19yZXZpZXctbGluayBhLC5zY2hlZHVsZS1idG4gYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi50YWItY29udGVudFwiKS5oaWRlKCk7XHJcbiAgdmFyIGFjdGl2ZVRhYiA9ICQodGhpcykuYXR0cihcInJlbFwiKTtcclxuICAkKFwiI1wiICsgYWN0aXZlVGFiKS5mYWRlSW4oKTtcclxuICAkKFwidWwudGFicyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICQoXCIudGFiX2RyYXdlcl9oZWFkaW5nXCIpLnJlbW92ZUNsYXNzKFwiZF9hY3RpdmVcIik7XHJcbiAgJChcIi50YWJfZHJhd2VyX2hlYWRpbmdbcmVsXj0nXCIgKyBhY3RpdmVUYWIgKyBcIiddXCIpLmFkZENsYXNzKFwiZF9hY3RpdmVcIik7XHJcbn0pO1xyXG4vKiBpZiBpbiBkcmF3ZXIgbW9kZSAqL1xyXG5cclxuJChcIi50YWJfZHJhd2VyX2hlYWRpbmdcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gIHZhciBkX2FjdGl2ZVRhYiA9ICQodGhpcykuYXR0cihcInJlbFwiKSxcclxuICAgIGFjdGl2ZVRhYkJsb2NrID0gJChcIiNcIiArIGRfYWN0aXZlVGFiICsgXCI6aGlkZGVuXCIpLFxyXG4gICAgJHRoaXNBY3RpdmUgPSAkKHRoaXMpLm5vdChcIi5kX2FjdGl2ZVwiKTtcclxuICAkKFwiLnRhYi1jb250ZW50XCIpLmhpZGUoKTtcclxuICBhY3RpdmVUYWJCbG9jay5mYWRlSW4oKTtcclxuICAkKFwiLnRhYl9kcmF3ZXJfaGVhZGluZ1wiKS5yZW1vdmVDbGFzcyhcImRfYWN0aXZlXCIpO1xyXG4gICR0aGlzQWN0aXZlLmFkZENsYXNzKFwiZF9hY3RpdmVcIik7XHJcbiAgJChcInVsLnRhYnMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgJChcInVsLnRhYnMgbGlbcmVsXj0nXCIgKyBkX2FjdGl2ZVRhYiArIFwiJ11cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbn0pO1xyXG4vKiBFeHRyYSBjbGFzcyBcInRhYl9sYXN0XCJcclxuIHRvIGFkZCBib3JkZXIgdG8gcmlnaHQgc2lkZVxyXG4gb2YgbGFzdCB0YWIgKi9cclxuXHJcbiQoXCJ1bC50YWJzIGxpXCIpLmxhc3QoKS5hZGRDbGFzcyhcInRhYl9sYXN0XCIpO1xyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBqUXVlcnkoXCIuc2NoZWR1bGUtYnRuIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgalF1ZXJ5KFwiLnNjaGVkdWxlLWxpbmtcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBqUXVlcnkoXCIucHJvZHVjdC1jYXJkX19yZXZpZXctbGluayBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGpRdWVyeShcIi5yZXZpZXctdGFiLWxpbmtcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pOyAvL3NsaWRlc2hvd1xyXG5cclxuXHJcbiQoKCkgPT4ge1xyXG4gIGlmICghJChcIltkYXRhLWJvb2tpbmctdG9vbHRpcC1jb250ZW50XVwiKS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSAkKFwiW2RhdGEtYm9va2luZy10b29sdGlwLWNvbnRlbnRdXCIpO1xyXG4gIGNvbnN0IGNsb25lZFRvb2x0aXBDb250ZW50ID0gdG9vbHRpcENvbnRlbnQuY2xvbmUoKTtcclxuICB0b29sdGlwQ29udGVudC5yZW1vdmUoKTtcclxuXHJcbiAgdGlwcHkoXCJbZGF0YS1ib29raW5nLXRvb2x0aXBdXCIsIHtcclxuICAgIGNvbnRlbnQ6IGNsb25lZFRvb2x0aXBDb250ZW50Lmh0bWwoKSxcclxuICAgIGFsbG93SFRNTDogdHJ1ZSxcclxuICAgIHBsYWNlbWVudDogXCJ0b3Atc3RhcnRcIixcclxuICAgIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgIGRlbGF5OiBbMTAwLCAyMDBdLFxyXG4gICAgb25Nb3VudChpbnN0YW5jZSkge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSAkKGluc3RhbmNlLnJlZmVyZW5jZSk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGFyZ2V0XHJcbiAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgLmZpbmQoXCJbZGF0YS1ib29raW5nLXRpdGxlXVwiKVxyXG4gICAgICAgIC5hdHRyKFwiZGF0YS1ib29raW5nLXRpdGxlXCIpO1xyXG4gICAgICBjb25zdCB0aW1lID0gdGFyZ2V0LmF0dHIoXCJkYXRhLWJvb2tpbmctdGltZVwiKTtcclxuICAgICAgY29uc3QgYWN0aW9uID0gdGFyZ2V0LmF0dHIoXCJkYXRhLXN1Ym1pdC11cmxcIik7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoXCJbZGF0YS1ib29raW5nLXRvb2x0aXAtYnV0dG9uXVwiKTtcclxuICAgICAgY29uc3QgdGltZVBhdHRlcm4gPSAvXFwvXFxkezR9LVxcZHsyfS1cXGR7Mn1cXC9cXGQrKD86XFwvXFxkKyk/XFwvPyQvO1xyXG4gICAgICBjb25zdCBpc1RpbWUgPSB0aW1lUGF0dGVybi50ZXN0KGFjdGlvbilcclxuICAgICAgY29uc3QgZGF0ZVBhdHRlcm4gPSAvXFxkezR9LVxcZHsyfS1cXGR7Mn0vO1xyXG4gICAgICBjb25zdCBtYXRjaCA9IGFjdGlvbi5tYXRjaChkYXRlUGF0dGVybik7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBtYXRjaCA/IG5ldyBEYXRlKG1hdGNoWzBdKS50b0xvY2FsZURhdGVTdHJpbmcoKSA6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgIGJ1dHRvbi5hdHRyKFwiZGF0YS1ib29raW5nLXRvb2x0aXAtYnV0dG9uLXRpbWVcIiwgdGltZSk7XHJcbiAgICAgIGJ1dHRvbi5hdHRyKFwiZGF0YS1ib29raW5nLXRvb2x0aXAtYnV0dG9uLXRpdGxlXCIsIHRpdGxlKTtcclxuICAgICAgJChcIltkYXRhLWJvb2tpbmctdG9vbHRpcC10aXRsZV1cIikudGV4dCh0aXRsZSk7XHJcbiAgICAgICQoXCJbZGF0YS1ib29raW5nLXRvb2x0aXAtdGltZV1cIikudGV4dCh0aW1lKTtcclxuICAgICAgJChcIltkYXRhLWJvb2tpbmctdG9vbHRpcC1idXR0b25dXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICQoXCIjYm9va2luZy1mb3JtXCIpO1xyXG4gICAgICAgICQoXCJbZGF0YS1ib29raW5nLWl0ZW0tc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXHJcbiAgICAgICAgICBcImRhdGEtYm9va2luZy1pdGVtLXNlbGVjdGVkXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRhcmdldC5hdHRyKFwiZGF0YS1ib29raW5nLWl0ZW0tc2VsZWN0ZWRcIiwgXCJcIik7XHJcblxyXG4gICAgICAgIGlmICghZm9ybS5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBmb3JtLmZpbmQoXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvblwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgZm9ybS5hdHRyKFwiYWN0aW9uXCIsIGFjdGlvbik7XHJcbiAgICAgICAgaWYgKGlzVGltZSAmJiBkYXRlKSB7XHJcbiAgICAgICAgICBmb3JtXHJcbiAgICAgICAgICAgIC5maW5kKCdbbmFtZT1cIm1lc3NhZ2VcIl0nKVxyXG4gICAgICAgICAgICAudmFsKGDQpdC+0YfRgyDQt9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDogJHt0aXRsZX0sINC00LDRgtCwOiAke2RhdGV9LCDQstGA0LXQvNGPOiAke3RpbWV9IFxcbtCa0L7Quy3QstC+INCz0L7RgdGC0LXQuTogLWApO1xyXG4gICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIltkYXRhLWJvb2tpbmctZm9ybV1cIikub2Zmc2V0KCkudG9wIC0gMjAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICBmb3JtXHJcbiAgICAgICAgICAgIC5maW5kKCdbbmFtZT1cIm1lc3NhZ2VcIl0nKVxyXG4gICAgICAgICAgICAudmFsKGDQpdC+0YfRgyDQt9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDogJHt0aXRsZX0sINC00LDRgtCwOiAke2RhdGV9IFxcbtCa0L7Quy3QstC+INCz0L7RgdGC0LXQuTogLWApO1xyXG4gICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIltkYXRhLWJvb2tpbmctZm9ybV1cIikub2Zmc2V0KCkudG9wIC0gMjAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtXHJcbiAgICAgICAgICAuZmluZCgnW25hbWU9XCJtZXNzYWdlXCJdJylcclxuICAgICAgICAgIC52YWwoYNCl0L7Rh9GDINC30LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMOiAke3RpdGxlfSwgJHt0aW1lfSAgXFxu0JrQvtC7LdCy0L4g0LPQvtGB0YLQtdC5OiAtYCk7XHJcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiW2RhdGEtYm9va2luZy1mb3JtXVwiKS5vZmZzZXQoKS50b3AgLSAyMDAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAkKFwiW2RhdGEtYm9va2luZy1zY3JvbGxdXCIpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNjcm9sbExlZnQoKTtcclxuICAgIGlmIChjdXJyZW50U2Nyb2xsID4gMSkge1xyXG4gICAgICAkKFwiW2RhdGEtYm9va2luZy1tb2JpbGUtdGl0bGVzXVwiKS5hdHRyKFxyXG4gICAgICAgIFwiZGF0YS1ib29raW5nLW1vYmlsZS10aXRsZXMtYWN0aXZlXCIsXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiW2RhdGEtYm9va2luZy1tb2JpbGUtdGl0bGVzLWFjdGl2ZV1cIikucmVtb3ZlQXR0cihcclxuICAgICAgXCJkYXRhLWJvb2tpbmctbW9iaWxlLXRpdGxlcy1hY3RpdmVcIlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwZW5kTW9iaWxlVGl0bGVzID0gKCkgPT4ge1xyXG4gICAgJChcIltkYXRhLWJvb2tpbmctdGl0bGVdXCIpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoZWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGFyZ2V0LmNsb25lKCk7XHJcbiAgICAgIHRpdGxlLmNzcyh7IFwibWluLWhlaWdodFwiOiB0YXJnZXQuaGVpZ2h0KCkgfSk7XHJcbiAgICAgICQoXCJbZGF0YS1ib29raW5nLW1vYmlsZS10aXRsZXNdXCIpLmFwcGVuZCh0aXRsZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGFwcGVuZE1vYmlsZVRpdGxlcygpO1xyXG59KTtcclxuXHJcbiQoKCkgPT4ge1xyXG4gIGNvbnN0IGN1c3RvbUNvbGxhcHNlU2V0dXAgPSAoKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKCQoXCJbZGF0YS1jdXN0b20tY29sbGFwc2VdXCIpKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBjb2xsYXBzZSA9ICQoZWxlbWVudClcclxuICAgICAgY29uc3QgY29sbGFwc2VJZCA9IGNvbGxhcHNlLmF0dHIoXCJkYXRhLWN1c3RvbS1jb2xsYXBzZVwiKTtcclxuICAgICAgY29uc3QgY29sbGFwc2VDaGlsZHJlbiA9IGNvbGxhcHNlLmNoaWxkcmVuKCk7XHJcbiAgICAgIGxldCBjb2xsYXBzZUNoaWxkcmVuSGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY29sbGFwc2VDaGlsZHJlbikge1xyXG4gICAgICAgIGNvbGxhcHNlQ2hpbGRyZW5IZWlnaHQgKz0gJChjaGlsZCkuaGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGNvbGxhcHNlQ2hpbGRyZW5IZWlnaHQgPiA4NSkgcmV0dXJuO1xyXG4gIFxyXG4gICAgICBjb2xsYXBzZS5hdHRyKFwiZGF0YS1jdXN0b20tY29sbGFwc2UtaW5hY3RpdmVcIiwgJycpO1xyXG4gICAgICAkKGBbZGF0YS1jdXN0b20tY29sbGFwc2Utb3Blbj1cIiR7Y29sbGFwc2VJZH1cIl1gKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcclxuICAgICAgJChgW2RhdGEtY3VzdG9tLWNvbGxhcHNlLWNsb3NlPVwiJHtjb2xsYXBzZUlkfVwiXWApLmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgfSlcclxuICB9O1xyXG4gIGN1c3RvbUNvbGxhcHNlU2V0dXAoKTtcclxuXHJcbiAgJChcIltkYXRhLWN1c3RvbS1jb2xsYXBzZS1vcGVuXVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgY29uc3QgaWQgPSB0YXJnZXQuYXR0cihcImRhdGEtY3VzdG9tLWNvbGxhcHNlLW9wZW5cIik7XHJcbiAgICB0YXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAkKGBbZGF0YS1jdXN0b20tY29sbGFwc2UtY2xvc2U9XCIke2lkfVwiXWApLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiW2RhdGEtY3VzdG9tLWNvbGxhcHNlLWNsb3NlXVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxyXG4gICAgY29uc3QgaWQgPSB0YXJnZXQuYXR0cihcImRhdGEtY3VzdG9tLWNvbGxhcHNlLWNsb3NlXCIpO1xyXG4gICAgdGFyZ2V0LmFkZENsYXNzKCdkLW5vbmUnKVxyXG4gICAgJChgW2RhdGEtY3VzdG9tLWNvbGxhcHNlLW9wZW49XCIke2lkfVwiXWApLnRvZ2dsZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgbGV0IHRvdWNoc3RhcnRYID0gMDtcclxuICBsZXQgdG91Y2hlbmRYID0gMDtcclxuXHJcbiAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19zZWN0b3JcIikub24oXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgY29uc3QgaWQgPSB0YXJnZXQuYXR0cihcImRhdGEtc2VjdG9yXCIpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgcGFyZW50XHJcbiAgICAuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIilcclxuICAgIC5yZW1vdmVDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgIHBhcmVudFxyXG4gICAgLmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKVxyXG4gICAgLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2U9XCIke2lkfVwiXWApLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1kb3Q9XCIke2lkfVwiXWApLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19zZWN0b3JzXCIpLm9uKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHRvdWNoc3RhcnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICB9KTtcclxuXHJcbiAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19zZWN0b3JzXCIpLm9uKFwidG91Y2hlbmRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB0b3VjaGVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgY29uc3QgcGFyZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcclxuICAgIGNvbnN0IGltZyA9IHBhcmVudC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgIGNvbnN0IGlkID0gTnVtYmVyKGltZy5hdHRyKFwiZGF0YS1zZWN0b3ItaW1hZ2VcIikpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VcIikubGVuZ3RoO1xyXG5cclxuICAgIGlmICh0b3VjaGVuZFggPCB0b3VjaHN0YXJ0WCkge1xyXG4gICAgICBwYXJlbnRcclxuICAgICAgLmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpXHJcbiAgICAgIC5yZW1vdmVDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIilcclxuICAgICAgLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgaWYgKGlkID49IGxlbmd0aCkge1xyXG4gICAgICAgIHBhcmVudFxyXG4gICAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2VdOm50aC1jaGlsZCgxKWApXHJcbiAgICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgIHBhcmVudFxyXG4gICAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItZG90XTpudGgtY2hpbGQoMSlgKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudFxyXG4gICAgICAuZmluZChgW2RhdGEtc2VjdG9yLWltYWdlPVwiJHtpZH1cIl1gKVxyXG4gICAgICAubmV4dCgpXHJcbiAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItZG90PVwiJHtpZH1cIl1gKVxyXG4gICAgICAubmV4dCgpXHJcbiAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodG91Y2hlbmRYID4gdG91Y2hzdGFydFgpIHtcclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgIHBhcmVudFxyXG4gICAgICAuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpXHJcbiAgICAgIC5yZW1vdmVDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgIGlmIChpZCA8PSAxKSB7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICAgICAgLmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZV06bnRoLWNoaWxkKCR7bGVuZ3RofSlgKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgICBwYXJlbnRcclxuICAgICAgICAuZmluZChgW2RhdGEtc2VjdG9yLWRvdF06bnRoLWNoaWxkKCR7bGVuZ3RofSlgKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudFxyXG4gICAgICAuZmluZChgW2RhdGEtc2VjdG9yLWltYWdlPVwiJHtpZH1cIl1gKVxyXG4gICAgICAucHJldigpXHJcbiAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItZG90PVwiJHtpZH1cIl1gKVxyXG4gICAgICAucHJldigpXHJcbiAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvdyAucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2U6Zmlyc3QtY2hpbGRcIikuYWRkQ2xhc3MoXHJcbiAgICBcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiXHJcbiAgKTtcclxuICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3cgLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdDpmaXJzdC1jaGlsZFwiKS5hZGRDbGFzcyhcclxuICAgIFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiXHJcbiAgKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlXHJcbiAgICAgICAgPyBcInN5bWJvbFwiXHJcbiAgICAgICAgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGVyRGVib3VuY2UoZnVuYywgaW50ZXJ2YWwsIGNvbnRleHQpIHtcclxuICB2YXIgdGltZW91dCA9IGZhbHNlO1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cyxcclxuICAgICAgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCB8fCBfdGhpcywgX2FyZ3VtZW50cyk7XHJcbiAgICB9LCBpbnRlcnZhbCk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgU2xpZGVyQ29uc3RydWN0b3IgPSAvKiNfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gU2xpZGVyQ29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNsaWRlckNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZUNsYXNzKFNsaWRlckNvbnN0cnVjdG9yLCBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJpbml0XCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIGxldCBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmF1dG9wbGF5ID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYXV0b3BsYXktdGltZW91dFwiKSAhPT0gbnVsbDtcclxuICAgICAgICB0aGlzLnBhcmFtcy5hdXRvcGxheVRpbWVvdXQgPSArdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtYXV0b3BsYXktdGltZW91dFwiKSB8fCA1MDAwO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmFycm93cyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vLWFycm93c1wiKSA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTc1Ljk4cHgpXCIpO1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtZWRpYSBxdWVyeSBpcyB0cnVlXHJcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG4gICAgICAgICAgdGhpcy5wYXJhbXMuZG90cyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vLWRvdHNcIikgPT09IG51bGwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucGFyYW1zLmRvdHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXJhbXMuYWRhcHRpdmVIZWlnaHQgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hZGFwdGl2ZS1oZWlnaHRcIikgIT09IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2VudGVyTW9kZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNlbnRlclwiKSA9PT0gbnVsbCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5pbmZpbml0ZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vLWluZmluaXRlXCIpID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY291bnQgPSB7fTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jb3VudC54cyA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXNcIikgfHwgMTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jb3VudC5zbSA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zbS1zbGlkZXNcIikgfHwgdGhpcy5wYXJhbXMuY291bnQueHM7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY291bnQubWQgPSArdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWQtc2xpZGVzXCIpIHx8IHRoaXMucGFyYW1zLmNvdW50LnNtO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNvdW50LmxnID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxnLXNsaWRlc1wiKSB8fCB0aGlzLnBhcmFtcy5jb3VudC5tZDtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jb3VudC54bCA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS14bC1zbGlkZXNcIikgfHwgdGhpcy5wYXJhbXMuY291bnQubGc7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMucm93cyA9IHt9O1xyXG4gICAgICAgICh0aGlzLnBhcmFtcy5yb3dzLnhzID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd3NcIikgfHwgMSksXHJcbiAgICAgICAgICAodGhpcy5wYXJhbXMucm93cy5zbSA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zbS1yb3dzXCIpIHx8IHRoaXMucGFyYW1zLnJvd3MueHMpLFxyXG4gICAgICAgICAgKHRoaXMucGFyYW1zLnJvd3MubWQgPSArdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWQtcm93c1wiKSB8fCB0aGlzLnBhcmFtcy5yb3dzLnNtKSxcclxuICAgICAgICAgICh0aGlzLnBhcmFtcy5yb3dzLmxnID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxnLXJvd3NcIikgfHwgdGhpcy5wYXJhbXMucm93cy5tZCksXHJcbiAgICAgICAgICAodGhpcy5wYXJhbXMucm93cy54bCA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS14bC1yb3dzXCIpIHx8IHRoaXMucGFyYW1zLnJvd3MubGcpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLnN0YXRlID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcclxuICAgICAgICAgIGxldCBicmVha3BvaW50ID0gaW5kZXggIT09IDAgPyBcIi1cIiArIGtleSArIFwiLVwiIDogXCItXCI7XHJcblxyXG4gICAgICAgICAgbGV0IGF0dHIgPSBfdGhpczMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIuY29uY2F0KGJyZWFrcG9pbnQsIFwibW91bnRlZFwiKSk7XHJcblxyXG4gICAgICAgICAgaWYgKGF0dHIgPT09IG51bGwgJiYgaW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHByZXZLZXkgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cylbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgX3RoaXMzLnBhcmFtcy5zdGF0ZVtrZXldID0gX3RoaXMzLnBhcmFtcy5zdGF0ZVtwcmV2S2V5XTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gXCJ0cnVlXCIgfHwgKGluZGV4ID09PSAwICYmIGF0dHIgIT09IFwiZmFsc2VcIikpIHtcclxuICAgICAgICAgICAgX3RoaXMzLnBhcmFtcy5zdGF0ZVtrZXldID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzMy5wYXJhbXMuc3RhdGVba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2xpZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250YWluc01vYmlsZUhpZGRlblNsaWRlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgICAgICBpZiAoIXNsaWRlLnRhZ05hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBpZiAoc2xpZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZS1tb2JpbGUtaGlkZGVuXCIpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIF90aGlzMy5jb250YWluc01vYmlsZUhpZGRlblNsaWRlcyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgX3RoaXMzLnNsaWRlcy5wdXNoKHNsaWRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUljb25zKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1NsaWRlclN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1NsaWRlclN0YXRlRGVib3VuY2VkID0gc2xpZGVyRGVib3VuY2UodGhpcy5jaGVja1NsaWRlclN0YXRlLCA1MDAsIHRoaXMpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuY2hlY2tTbGlkZXJTdGF0ZURlYm91bmNlZCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiY3JlYXRlSWNvbnNcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUljb25zKCkge1xyXG4gICAgICAgIGxldCBsZWZ0SWNvbiA9XHJcbiAgICAgICAgICAnXFxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDExIDE5XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXG4gICAgICAgIDxwYXRoIGQ9XCJNMS40IDE4LjFMMCAxNi43TDcuNiA5LjEwMDAxTDAgMS41TDEuNCAwTDEwLjQgOS4xMDAwMUMxMC40IDkuMTAwMDEgMS4zIDE4LjEgMS40IDE4LjFaXCIvPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAnO1xyXG4gICAgICAgIGxldCByaWdodEljb24gPVxyXG4gICAgICAgICAgJ1xcbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMSAxOVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XFxuICAgICAgICA8cGF0aCBkPVwiTTkuMDAwMzkgNy4yNDc5MmUtMDVMMTAuNDAwNCAxLjQwMDA3TDIuODAwMzkgOS4wMDAwOUwxMC40MDA0IDE2LjYwMDFMOS4wMDAzOSAxOC4xMDAxTDAuMDAwMzkxMDA2IDkuMDAwMDlDMC4wMDAzOTEwMDYgOS4wMDAwOSA5LjEwMDM5IDcuMjQ3OTJlLTA1IDkuMDAwMzkgNy4yNDc5MmUtMDVaXCIvPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAnO1xyXG4gICAgICAgIGxldCBsZWZ0SWNvbkNsYXNzID0gXCJjdXN0b20taWNvbi1sZWZ0XCI7XHJcbiAgICAgICAgbGV0IHJpZ2h0SWNvbkNsYXNzID0gXCJjdXN0b20taWNvbi1yaWdodFwiO1xyXG4gICAgICAgIGxldCBjdXN0b21JY29ucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiLmNvbmNhdChsZWZ0SWNvbkNsYXNzLCBcIiwgLlwiKS5jb25jYXQocmlnaHRJY29uQ2xhc3MpKTtcclxuICAgICAgICBjdXN0b21JY29ucy5mb3JFYWNoKGZ1bmN0aW9uIChpY29uKSB7XHJcbiAgICAgICAgICBsZXQgaXNMZWZ0SWNvbiA9IGljb24uY2xhc3NMaXN0LmNvbnRhaW5zKGxlZnRJY29uQ2xhc3MpO1xyXG4gICAgICAgICAgbGV0IGlzUmlnaHRJY29uID0gaWNvbi5jbGFzc0xpc3QuY29udGFpbnMocmlnaHRJY29uQ2xhc3MpO1xyXG5cclxuICAgICAgICAgIGlmIChpc0xlZnRJY29uKSB7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShsZWZ0SWNvbkNsYXNzKTtcclxuICAgICAgICAgICAgbGVmdEljb24gPSBpY29uLm91dGVySFRNTDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNSaWdodEljb24pIHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKHJpZ2h0SWNvbkNsYXNzKTtcclxuICAgICAgICAgICAgcmlnaHRJY29uID0gaWNvbi5vdXRlckhUTUw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWNvbi5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldkJ1dHRvbiA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByZXYtYnV0dG9uLWlkXCIpO1xyXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uZXh0LWJ1dHRvbi1pZFwiKTtcclxuICAgICAgICBpZiAocHJldkJ1dHRvbikge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJldkJ1dHRvbik7XHJcbiAgICAgICAgICB0aGlzLnByZXZBcnJvdyA9IGJ1dHRvbi5vdXRlckhUTUw7XHJcbiAgICAgICAgICBidXR0b24ucmVtb3ZlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wcmV2QXJyb3cgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uX3N0eWxlLTEgc2xpY2stcHJldlwiPicuY29uY2F0KFxyXG4gICAgICAgICAgICByaWdodEljb24sXHJcbiAgICAgICAgICAgIFwiPC9idXR0b24+XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0QnV0dG9uKTtcclxuICAgICAgICAgIHRoaXMubmV4dEFycm93ID0gYnV0dG9uLm91dGVySFRNTDtcclxuICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5leHRBcnJvdyA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b25fc3R5bGUtMSBzbGljay1uZXh0XCI+Jy5jb25jYXQoXHJcbiAgICAgICAgICAgIGxlZnRJY29uLFxyXG4gICAgICAgICAgICBcIjwvYnV0dG9uPlwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJjaGVja1NsaWRlclN0YXRlXCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1NsaWRlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQgJiYgdGhpcy5zYXZlZFdpbmRvd1dpZHRoID09PSB3aW5kb3cuaW5uZXJXaWR0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZWRXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnVubW91bnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYnJlYWtwb2ludCBpbiBicmVha3BvaW50cykge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5wYXJhbXMuc3RhdGVbYnJlYWtwb2ludF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jb250YWluc01vYmlsZUhpZGRlblNsaWRlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU2xpZGVzVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMubW91bnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJjaGVja1NsaWRlc1Zpc2liaWxpdHlcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrU2xpZGVzVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBsZXQgX3RoaXM0ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgICAgIHNsaWRlLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgICAgICBsZXQgc2hvdWxkQmVIaWRkZW4gPSBzbGlkZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlLW1vYmlsZS1oaWRkZW5cIikgIT09IG51bGw7XHJcbiAgICAgICAgICBsZXQgYnJlYWtwb2ludCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludHMuc207XHJcblxyXG4gICAgICAgICAgaWYgKCEoc2hvdWxkQmVIaWRkZW4gJiYgYnJlYWtwb2ludCkpIHtcclxuICAgICAgICAgICAgX3RoaXM0LmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHNsaWRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJtb3VudFwiLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbW91bnQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnNsaWNrKHtcclxuICAgICAgICAgIGF1dG9wbGF5OiB0aGlzLnBhcmFtcy5hdXRvcGxheSxcclxuICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IHRoaXMucGFyYW1zLmF1dG9wbGF5VGltZW91dCxcclxuICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnBhcmFtcy5jb3VudC54cyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnBhcmFtcy5jb3VudC54cyxcclxuICAgICAgICAgIHJvd3M6IHRoaXMucGFyYW1zLnJvd3MueHMsXHJcbiAgICAgICAgICBwcmV2QXJyb3c6IHRoaXMucHJldkFycm93LFxyXG4gICAgICAgICAgbmV4dEFycm93OiB0aGlzLm5leHRBcnJvdyxcclxuICAgICAgICAgIGFycm93czogdGhpcy5wYXJhbXMuYXJyb3dzLFxyXG4gICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRoaXMucGFyYW1zLmFkYXB0aXZlSGVpZ2h0LFxyXG4gICAgICAgICAgZG90czogdGhpcy5wYXJhbXMuZG90cyxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IHRoaXMucGFyYW1zLmNlbnRlck1vZGUsXHJcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcclxuICAgICAgICAgIGluZmluaXRlOiB0aGlzLnBhcmFtcy5pbmZpbml0ZSxcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRzLnNtIC0gMSxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnBhcmFtcy5jb3VudC5zbSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnBhcmFtcy5jb3VudC5zbSxcclxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucGFyYW1zLnJvd3Muc20sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRzLm1kIC0gMSxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnBhcmFtcy5jb3VudC5tZCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnBhcmFtcy5jb3VudC5tZCxcclxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucGFyYW1zLnJvd3MubWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRzLmxnIC0gMSxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnBhcmFtcy5jb3VudC5sZyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnBhcmFtcy5jb3VudC5sZyxcclxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucGFyYW1zLnJvd3MubGcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRzLnhsIC0gMSxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnBhcmFtcy5jb3VudC54bCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnBhcmFtcy5jb3VudC54bCxcclxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMucGFyYW1zLnJvd3MueGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHRvdWNoc3RhcnRYID0gMDtcclxuICAgICAgICAgIGxldCB0b3VjaGVuZFggPSAwO1xyXG5cclxuICAgICAgICAgICQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fc2VjdG9yXCIpLm9uKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5hdHRyKFwiZGF0YS1zZWN0b3JcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZT1cIiR7aWR9XCJdYCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItZG90PVwiJHtpZH1cIl1gKS5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX3NlY3RvcnNcIikub24oXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0b3VjaHN0YXJ0WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX3NlY3RvcnNcIikub24oXCJ0b3VjaGVuZFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdG91Y2hlbmRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcihpbWcuYXR0cihcImRhdGEtc2VjdG9yLWltYWdlXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VcIikubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvdWNoZW5kWCA8IHRvdWNoc3RhcnRYKSB7XHJcbiAgICAgICAgICAgICAgcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgIHBhcmVudC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgIGlmIChpZCA+PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2VdOm50aC1jaGlsZCgxKWApLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1kb3RdOm50aC1jaGlsZCgxKWApLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZT1cIiR7aWR9XCJdYCkubmV4dCgpLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItZG90PVwiJHtpZH1cIl1gKS5uZXh0KCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0b3VjaGVuZFggPiB0b3VjaHN0YXJ0WCkge1xyXG4gICAgICAgICAgICAgIHBhcmVudC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICBpZiAoaWQgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50XHJcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtc2VjdG9yLWltYWdlXTpudGgtY2hpbGQoJHtsZW5ndGh9KWApXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuZmluZChgW2RhdGEtc2VjdG9yLWRvdF06bnRoLWNoaWxkKCR7bGVuZ3RofSlgKS5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2U9XCIke2lkfVwiXWApLnByZXYoKS5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICBwYXJlbnQuZmluZChgW2RhdGEtc2VjdG9yLWRvdD1cIiR7aWR9XCJdYCkucHJldigpLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93IC5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZTpmaXJzdC1jaGlsZFwiKS5hZGRDbGFzcyhcclxuICAgICAgICAgICAgXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgICQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvdyAucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90OmZpcnN0LWNoaWxkXCIpLmFkZENsYXNzKFxyXG4gICAgICAgICAgICBcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJ1bm1vdW50XCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bm1vdW50KCkge1xyXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gU2xpZGVyQ29uc3RydWN0b3I7XHJcbn0pKCk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRpcmVGaWx0ZXJUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZmlsdGVyLXRvZ2dsZSAudG9nZ2xlLWlucHV0XCJcclxuICApO1xyXG5cclxuICBpZiAoIXRpcmVGaWx0ZXJUb2dnbGUpIHJldHVybjtcclxuXHJcbiAgdGlyZUZpbHRlclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBibG9ja1BhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYW1ldGVyLWJsb2NrXCIpO1xyXG4gICAgbGV0IGJsb2NrQXV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0by1ibG9ja1wiKTtcclxuICAgIGxldCBwb1BhcmFtZXRyYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvLXBhcmFtZXRyYW1cIik7XHJcbiAgICBsZXQgcG9BdXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wby1hdXRvXCIpO1xyXG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICBibG9ja1BhcmFtZXRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGJsb2NrQXV0by5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBwb1BhcmFtZXRyYW0uc3R5bGUuY29sb3IgPSBcIiNBN0E3QUJcIjtcclxuICAgICAgcG9BdXRvLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJsb2NrUGFyYW1ldGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBibG9ja0F1dG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgcG9QYXJhbWV0cmFtLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XHJcbiAgICBwb0F1dG8uc3R5bGUuY29sb3IgPSBcIiNBN0E3QUJcIjtcclxuICB9KTtcclxuICBmdW5jdGlvbiByZXNldEZpbHRlcnMoYmxvY2spIHtcclxuICAgIGxldCBzZWxlY3RvcnMgPSBibG9jay5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhcmFtZXRlci1zZWxlY3QgLnNlbGVjdG9yXCIpO1xyXG4gICAgbGV0IHJlc2V0QnV0dG9uID0gYmxvY2sucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVzZXRcIik7XHJcbiAgICByZXNldEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtb3B0aW9uXCIpO1xyXG4gICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LW9wdGlvbnNcIik7XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0T3B0aW9ucy5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCByZXNldEZpbHRlckJ1dHRvblBhcmFtZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5wYXJhbWV0ZXItYmxvY2sgLmJ1dHRvbi1yZXNldFwiXHJcbiAgKTtcclxuICBpZiAocmVzZXRGaWx0ZXJCdXR0b25QYXJhbWV0ZXIpIHtcclxuICAgIGNvbnN0IHBhcmFtZXRlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbWV0ZXItYmxvY2tcIik7XHJcbiAgICByZXNldEZpbHRlckJ1dHRvblBhcmFtZXRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXNldEZpbHRlcnMocGFyYW1ldGVyQmxvY2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlc2V0RmlsdGVyQnV0dG9uQXV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5hdXRvLWJsb2NrIC5idXR0b24tcmVzZXRcIlxyXG4gICk7XHJcbiAgaWYgKHJlc2V0RmlsdGVyQnV0dG9uQXV0bykge1xyXG4gICAgY29uc3QgYXV0b0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRvLWJsb2NrXCIpO1xyXG4gICAgcmVzZXRGaWx0ZXJCdXR0b25BdXRvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlc2V0RmlsdGVycyhhdXRvQmxvY2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBzZWFyY2ggc2VsZWN0b3JcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlT3B0aW9ucyhzZWFyY2hJbnB1dCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgIHNlbGVjdE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgIHNlbGVjdE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcclxuICAgIHNlYXJjaElucHV0LnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICBzZWFyY2hJbnB1dC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gICAgc2VsZWN0ZWRPcHRpb24uc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgIHNlbGVjdGVkT3B0aW9uLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIiA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgaWYgKHNlbGVjdE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlT3B0aW9ucyhzZWFyY2hJbnB1dCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgIHNlbGVjdE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgc2VhcmNoSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgc2VsZWN0ZWRPcHRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2VhcmNoT3B0aW9ucyhzZWxlY3RPcHRpb24sIHNlYXJjaFN0cmluZykge1xyXG4gICAgY29uc3QgdGV4dCA9IHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgc2VsZWN0T3B0aW9uLnN0eWxlLmRpc3BsYXkgPSB0ZXh0LmluY2x1ZGVzKHNlYXJjaFN0cmluZykgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0b3JcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2VsZWN0b3JzKCkge1xyXG4gICAgY29uc3QgYXRMZWFzdE9uZVNlbGVjdGVkUGFyYW0gPSBBcnJheS5mcm9tKHNlbGVjdG9ycykuc29tZShmdW5jdGlvbiAoXHJcbiAgICAgIHNlbGVjdG9yXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIucGFyYW1ldGVyLWJsb2NrIC5zZWxlY3RlZFwiKSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgYXRMZWFzdE9uZVNlbGVjdGVkUGFyYW1cclxuICAgICAgPyAocmVzZXRGaWx0ZXJCdXR0b25QYXJhbWV0ZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKVxyXG4gICAgICA6IChyZXNldEZpbHRlckJ1dHRvblBhcmFtZXRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xyXG4gICAgY29uc3QgYXRMZWFzdE9uZVNlbGVjdGVkQXV0byA9IEFycmF5LmZyb20oc2VsZWN0b3JzKS5zb21lKGZ1bmN0aW9uIChcclxuICAgICAgc2VsZWN0b3JcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5hdXRvLWJsb2NrIC5zZWxlY3RlZFwiKSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgYXRMZWFzdE9uZVNlbGVjdGVkQXV0b1xyXG4gICAgICA/IChyZXNldEZpbHRlckJ1dHRvbkF1dG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKVxyXG4gICAgICA6IChyZXNldEZpbHRlckJ1dHRvbkF1dG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNoZWNrU2VsZWN0b3JzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLW9wdGlvblwiKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Qtc2VhcmNoLWlucHV0XCIpO1xyXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LW9wdGlvbnNcIik7XHJcbiAgICBzZWxlY3RlZE9wdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgc2VhcmNoSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgc2VsZWN0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBzZWxlY3RlZE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0b2dnbGVPcHRpb25zKHNlYXJjaElucHV0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3RlZE9wdGlvbik7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0LW9wdGlvblwiKTtcclxuICAgIHNlbGVjdE9wdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3RPcHRpb24pIHtcclxuICAgICAgc2VsZWN0T3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCAhPT0gc2VsZWN0b3IuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgc2VsZWN0ZWQgPyBzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikgOiBudWxsO1xyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24udGV4dENvbnRlbnQgPSBzZWxlY3RPcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgY2xvc2VPcHRpb25zKHNlYXJjaElucHV0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3RlZE9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvdXRlckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIG91dGVyQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmICghc2VsZWN0b3IuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIGNsb3NlT3B0aW9ucyhzZWFyY2hJbnB1dCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0ZWRPcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFN0cmluZyA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHNlbGVjdE9wdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3RPcHRpb24pIHtcclxuICAgICAgICBzZWFyY2hPcHRpb25zKHNlbGVjdE9wdGlvbiwgc2VhcmNoU3RyaW5nKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8g0YHQu9Cw0LnQtNC10YAg0LrQsNGC0LXQs9C+0YDQuNC5INCyINC80L7QsdC40LvQutC1XHJcblxyXG4gICQoXCIudGFicy1zbGlkZXItbW9iaWxlXCIpLnNsaWNrKHtcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMi41LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWNvbnRlbnRcIik7XHJcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDc2OCkge1xyXG4gICAgdGFicy5mb3JFYWNoKGZ1bmN0aW9uICh0YWIpIHtcclxuICAgICAgdGFiLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2xpZGVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIudGFicy1zbGlkZXItbW9iaWxlIC5zbGlkZXItaXRlbVwiXHJcbiAgKTtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNzY4KSB7XHJcbiAgICBzbGlkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEl0ZW0gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdGFiSWQgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIpO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYklkKTtcclxuICAgICAgICBjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWItY29udGVudFwiKTtcclxuICAgICAgICBhbGxUYWJzLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xyXG4gICAgICAgICAgdGFiLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YWIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBjb25zdCBtb2JpbGVTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnMtc2xpZGVyLW1vYmlsZVwiKTtcclxuICAgICAgICBjb25zdCBpdGVtQWN0aXZlID0gbW9iaWxlU2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWl0ZW0uYWN0aXZlXCIpO1xyXG4gICAgICAgIGl0ZW1BY3RpdmUgPyBpdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikgOiBudWxsO1xyXG4gICAgICAgIHRhcmdldEl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINCy0YHQv9C70YvQstCw0YjQutCwXHJcblxyXG4gIGNvbnN0IGF1dG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0by1tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICB0aXBweShcIiNhdXRvLW1vZGFsLWJ0blwiLCB7XHJcbiAgICBjb250ZW50OiBhdXRvTW9kYWwuaW5uZXJIVE1MLFxyXG4gICAgYWxsb3dIVE1MOiB0cnVlLFxyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIHBsYWNlbWVudDogXCJib3R0b21cIixcclxuICAgIHRyaWdnZXI6IFwiY2xpY2tcIixcclxuICB9KTtcclxuXHJcbiAgLy8g0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INCyINC80L7QsdC40LvQutC1XHJcblxyXG4gIGNvbnN0IGF1dG9PcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRvX19tb2RhbC1idXR0b24tbW9iaWxlXCIpO1xyXG4gIGNvbnN0IGF1dG9Nb2RhbE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG8tYXV0b19fbW9kYWwtbW9iaWxlXCIpO1xyXG4gIGNvbnN0IGF1dG9DbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG8tYXV0by1jbG9zZS1idXR0b25cIik7XHJcblxyXG4gIGF1dG9PcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhdXRvTW9kYWxNb2JpbGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9KTtcclxuICBhdXRvQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGF1dG9Nb2RhbE1vYmlsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICB2YXIgcGx1Z2luTmFtZSA9IFwiY3NjcmxiXCI7XHJcblxyXG4gIGZ1bmN0aW9uIFBsdWdpbihlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZWwgPSBlbGVtZW50O1xyXG4gICAgdmFyICRlbCA9ICQoZWxlbWVudCk7XHJcbiAgICB2YXIgJHNjcm9sbENvbnRlbnRFbDtcclxuICAgIHZhciAkY29udGVudEVsID0gJGVsLmZpbmQoXCIuY3NjcmxiLWNvbnRlbnRcIik7XHJcbiAgICB2YXIgJHNjcm9sbGJhckVsO1xyXG4gICAgdmFyICRkcmFnSGFuZGxlRWw7XHJcbiAgICB2YXIgZHJhZ09mZnNldDtcclxuICAgIHZhciBmbGFzaFRpbWVvdXQ7XHJcbiAgICB2YXIgcGFnZUp1bXBNdWx0cCA9IDcgLyA4O1xyXG4gICAgdmFyIHNjcm9sbERpcmVjdGlvbiA9IFwidmVydFwiO1xyXG4gICAgdmFyIHNjcm9sbE9mZnNldEF0dHIgPSBcInNjcm9sbFRvcFwiO1xyXG4gICAgdmFyIHNpemVBdHRyID0gXCJoZWlnaHRcIjtcclxuICAgIHZhciBvZmZzZXRBdHRyID0gXCJ0b3BcIjtcclxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJC5mbltwbHVnaW5OYW1lXS5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGNvbnRlbnRFbC5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICBpZiAoJGVsLmhhc0NsYXNzKFwiaG9yaXpvbnRhbFwiKSkge1xyXG4gICAgICAgIHNjcm9sbERpcmVjdGlvbiA9IFwiaG9yaXpcIjtcclxuICAgICAgICBzY3JvbGxPZmZzZXRBdHRyID0gXCJzY3JvbGxMZWZ0XCI7XHJcbiAgICAgICAgc2l6ZUF0dHIgPSBcIndpZHRoXCI7XHJcbiAgICAgICAgb2Zmc2V0QXR0ciA9IFwibGVmdFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkZWwucHJlcGVuZCgnPGRpdiBjbGFzcz1cImNzY3JsYi1zY3JvbGxiYXJcIj48ZGl2IGNsYXNzPVwiZHJhZy1oYW5kbGVcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgJHNjcm9sbGJhckVsID0gJGVsLmZpbmQoXCIuY3NjcmxiLXNjcm9sbGJhclwiKTtcclxuICAgICAgJGRyYWdIYW5kbGVFbCA9ICRlbC5maW5kKFwiLmRyYWctaGFuZGxlXCIpO1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMud3JhcENvbnRlbnQpIHtcclxuICAgICAgICAkY29udGVudEVsLndyYXAoJzxkaXYgY2xhc3M9XCJjc2NybGItc2Nyb2xsLWNvbnRlbnRcIiAvPicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2Nyb2xsQ29udGVudEVsID0gJGVsLmZpbmQoXCIuY3NjcmxiLXNjcm9sbC1jb250ZW50XCIpO1xyXG4gICAgICByZXNpemVTY3JvbGxDb250ZW50KCk7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5hdXRvSGlkZSkge1xyXG4gICAgICAgICRlbC5vbihcIm1vdXNlZW50ZXJcIiwgZmxhc2hTY3JvbGxiYXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkZHJhZ0hhbmRsZUVsLm9uKFwibW91c2Vkb3duXCIsIHN0YXJ0RHJhZyk7XHJcbiAgICAgICRzY3JvbGxiYXJFbC5vbihcIm1vdXNlZG93blwiLCBqdW1wU2Nyb2xsKTtcclxuICAgICAgJHNjcm9sbENvbnRlbnRFbC5vbihcInNjcm9sbFwiLCBvblNjcm9sbGVkKTtcclxuICAgICAgcmVzaXplU2Nyb2xsYmFyKCk7XHJcbiAgICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVjYWxjdWxhdGUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMuYXV0b0hpZGUpIHtcclxuICAgICAgICBzaG93U2Nyb2xsYmFyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydERyYWcoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBldmVudE9mZnNldCA9IGUucGFnZVk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsRGlyZWN0aW9uID09PSBcImhvcml6XCIpIHtcclxuICAgICAgICBldmVudE9mZnNldCA9IGUucGFnZVg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyYWdPZmZzZXQgPSBldmVudE9mZnNldCAtICRkcmFnSGFuZGxlRWwub2Zmc2V0KClbb2Zmc2V0QXR0cl07XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsIGRyYWcpO1xyXG4gICAgICAkKGRvY3VtZW50KS5vbihcIm1vdXNldXBcIiwgZW5kRHJhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhZyhlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGV2ZW50T2Zmc2V0ID0gZS5wYWdlWTtcclxuXHJcbiAgICAgIGlmIChzY3JvbGxEaXJlY3Rpb24gPT09IFwiaG9yaXpcIikge1xyXG4gICAgICAgIGV2ZW50T2Zmc2V0ID0gZS5wYWdlWDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGRyYWdQb3MgPSBldmVudE9mZnNldCAtICRzY3JvbGxiYXJFbC5vZmZzZXQoKVtvZmZzZXRBdHRyXSAtIGRyYWdPZmZzZXQ7XHJcbiAgICAgIHZhciBkcmFnUGVyYyA9IGRyYWdQb3MgLyAkc2Nyb2xsYmFyRWxbc2l6ZUF0dHJdKCk7XHJcbiAgICAgIHZhciBzY3JvbGxQb3MgPSBkcmFnUGVyYyAqICRjb250ZW50RWxbc2l6ZUF0dHJdKCk7XHJcbiAgICAgICRzY3JvbGxDb250ZW50RWxbc2Nyb2xsT2Zmc2V0QXR0cl0oc2Nyb2xsUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmREcmFnKCkge1xyXG4gICAgICAkKGRvY3VtZW50KS5vZmYoXCJtb3VzZW1vdmVcIiwgZHJhZyk7XHJcbiAgICAgICQoZG9jdW1lbnQpLm9mZihcIm1vdXNldXBcIiwgZW5kRHJhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24ganVtcFNjcm9sbChlKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gJGRyYWdIYW5kbGVFbFswXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGp1bXBBbXQgPSBwYWdlSnVtcE11bHRwICogJHNjcm9sbENvbnRlbnRFbFtzaXplQXR0cl0oKTtcclxuICAgICAgdmFyIGV2ZW50T2Zmc2V0ID0gc2Nyb2xsRGlyZWN0aW9uID09PSBcInZlcnRcIiA/IGUub3JpZ2luYWxFdmVudC5sYXllclkgOiBlLm9yaWdpbmFsRXZlbnQubGF5ZXJYO1xyXG4gICAgICB2YXIgZHJhZ0hhbmRsZU9mZnNldCA9ICRkcmFnSGFuZGxlRWwucG9zaXRpb24oKVtvZmZzZXRBdHRyXTtcclxuICAgICAgdmFyIHNjcm9sbFBvcyA9XHJcbiAgICAgICAgZXZlbnRPZmZzZXQgPCBkcmFnSGFuZGxlT2Zmc2V0XHJcbiAgICAgICAgICA/ICRzY3JvbGxDb250ZW50RWxbc2Nyb2xsT2Zmc2V0QXR0cl0oKSAtIGp1bXBBbXRcclxuICAgICAgICAgIDogJHNjcm9sbENvbnRlbnRFbFtzY3JvbGxPZmZzZXRBdHRyXSgpICsganVtcEFtdDtcclxuICAgICAgJHNjcm9sbENvbnRlbnRFbFtzY3JvbGxPZmZzZXRBdHRyXShzY3JvbGxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZWQoZSkge1xyXG4gICAgICBmbGFzaFNjcm9sbGJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbGJhcigpIHtcclxuICAgICAgdmFyIGNvbnRlbnRTaXplID0gJGNvbnRlbnRFbFtzaXplQXR0cl0oKTtcclxuICAgICAgdmFyIHNjcm9sbE9mZnNldCA9ICRzY3JvbGxDb250ZW50RWxbc2Nyb2xsT2Zmc2V0QXR0cl0oKTsgLy8gc2Nyb2xsVG9wKCkg44GLIHNjcm9sbExlZnQoKVxyXG5cclxuICAgICAgdmFyIHNjcm9sbGJhclNpemUgPSAkc2Nyb2xsYmFyRWxbc2l6ZUF0dHJdKCk7XHJcbiAgICAgIHZhciBzY3JvbGxiYXJSYXRpbyA9IHNjcm9sbGJhclNpemUgLyBjb250ZW50U2l6ZTtcclxuICAgICAgdmFyIGhhbmRsZU9mZnNldCA9IE1hdGgucm91bmQoc2Nyb2xsYmFyUmF0aW8gKiBzY3JvbGxPZmZzZXQpO1xyXG4gICAgICAvKiArIDI7ICovXHJcblxyXG4gICAgICB2YXIgaGFuZGxlU2l6ZSA9IE1hdGguZmxvb3Ioc2Nyb2xsYmFyUmF0aW8gKiAoc2Nyb2xsYmFyU2l6ZSArIDIpKTtcclxuICAgICAgLyogIC0gMikpIC0gMjsgKi9cclxuXHJcbiAgICAgIGlmIChzY3JvbGxiYXJTaXplIDwgY29udGVudFNpemUpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsRGlyZWN0aW9uID09PSBcInZlcnRcIikge1xyXG4gICAgICAgICAgJGRyYWdIYW5kbGVFbC5jc3Moe1xyXG4gICAgICAgICAgICB0b3A6IGhhbmRsZU9mZnNldCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRkcmFnSGFuZGxlRWwuY3NzKHtcclxuICAgICAgICAgICAgbGVmdDogaGFuZGxlT2Zmc2V0LFxyXG4gICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjcm9sbGJhckVsLnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2Nyb2xsYmFyRWwuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2hTY3JvbGxiYXIoKSB7XHJcbiAgICAgIHJlc2l6ZVNjcm9sbGJhcigpO1xyXG4gICAgICBzaG93U2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1Njcm9sbGJhcigpIHtcclxuICAgICAgJGRyYWdIYW5kbGVFbC5hZGRDbGFzcyhcInZpc2libGVcIik7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMuYXV0b0hpZGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZmxhc2hUaW1lb3V0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChmbGFzaFRpbWVvdXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmbGFzaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaGlkZVNjcm9sbGJhcigpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyKCkge1xyXG4gICAgICAkZHJhZ0hhbmRsZUVsLnJlbW92ZUNsYXNzKFwidmlzaWJsZVwiKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZmxhc2hUaW1lb3V0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChmbGFzaFRpbWVvdXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplU2Nyb2xsQ29udGVudCgpIHtcclxuICAgICAgaWYgKHNjcm9sbERpcmVjdGlvbiA9PT0gXCJ2ZXJ0XCIpIHtcclxuICAgICAgICAkc2Nyb2xsQ29udGVudEVsLndpZHRoKCRlbC53aWR0aCgpICsgc2Nyb2xsYmFyV2lkdGgoKSk7XHJcbiAgICAgICAgJHNjcm9sbENvbnRlbnRFbC5oZWlnaHQoJGVsLmhlaWdodCgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2Nyb2xsQ29udGVudEVsLndpZHRoKCRlbC53aWR0aCgpKTtcclxuICAgICAgICAkc2Nyb2xsQ29udGVudEVsLmhlaWdodCgkZWwuaGVpZ2h0KCkgKyBzY3JvbGxiYXJXaWR0aCgpKTtcclxuICAgICAgICAkY29udGVudEVsLmhlaWdodCgkZWwuaGVpZ2h0KCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICAgIHZhciB0ZW1wRWwgPSAkKFxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwic2Nyb2xsYmFyLXdpZHRoLXRlc3RlclwiIHN0eWxlPVwid2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdy15OnNjcm9sbDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwMHB4O2xlZnQ6LTIwMHB4O1wiPjxkaXYgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7XCI+PC9kaXY+J1xyXG4gICAgICApO1xyXG4gICAgICAkKFwiYm9keVwiKS5hcHBlbmQodGVtcEVsKTtcclxuICAgICAgdmFyIHdpZHRoID0gJCh0ZW1wRWwpLmlubmVyV2lkdGgoKTtcclxuICAgICAgdmFyIHdpZHRoTWludXNTY3JvbGxiYXJzID0gJChcImRpdlwiLCB0ZW1wRWwpLmlubmVyV2lkdGgoKTtcclxuICAgICAgdGVtcEVsLnJlbW92ZSgpO1xyXG5cclxuICAgICAgaWYgKHdpZHRoID09PSB3aWR0aE1pbnVzU2Nyb2xsYmFycyAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIikgPiAtMSkge1xyXG4gICAgICAgIHJldHVybiAxNztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHdpZHRoIC0gd2lkdGhNaW51c1Njcm9sbGJhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVjYWxjdWxhdGUoKSB7XHJcbiAgICAgIHJlc2l6ZVNjcm9sbENvbnRlbnQoKTtcclxuICAgICAgcmVzaXplU2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3B0aW9uKGtleSwgdmFsKSB7XHJcbiAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICBvcHRpb25zW2tleV0gPSB2YWw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICRjb250ZW50RWwuaW5zZXJ0QmVmb3JlKCRzY3JvbGxiYXJFbCk7XHJcbiAgICAgICRzY3JvbGxiYXJFbC5yZW1vdmUoKTtcclxuICAgICAgJHNjcm9sbENvbnRlbnRFbC5yZW1vdmUoKTtcclxuICAgICAgJGNvbnRlbnRFbC5jc3Moe1xyXG4gICAgICAgIGhlaWdodDogJGVsLmhlaWdodCgpICsgXCJweFwiLFxyXG4gICAgICAgIFwib3ZlcmZsb3cteVwiOiBcInNjcm9sbFwiLFxyXG4gICAgICB9KTtcclxuICAgICAgaG9vayhcIm9uRGVzdHJveVwiKTtcclxuICAgICAgJGVsLnJlbW92ZURhdGEoXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBob29rKGhvb2tOYW1lKSB7XHJcbiAgICAgIGlmIChvcHRpb25zW2hvb2tOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0aW9uc1tob29rTmFtZV0uY2FsbChlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcHRpb246IG9wdGlvbixcclxuICAgICAgZGVzdHJveTogZGVzdHJveSxcclxuICAgICAgcmVjYWxjdWxhdGU6IHJlY2FsY3VsYXRlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gICQuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdmFyIG1ldGhvZE5hbWUgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgdmFyIHJldHVyblZhbDtcclxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAkLmRhdGEodGhpcywgXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lKSAmJlxyXG4gICAgICAgICAgdHlwZW9mICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUpW21ldGhvZE5hbWVdID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVyblZhbCA9ICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUpW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIgXCIgKyBtZXRob2ROYW1lICsgXCIgXCIgKyBwbHVnaW5OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJldHVyblZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKG9wdGlvbnMpID09PSBcIm9iamVjdFwiIHx8ICFvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgcGx1Z2luTmFtZSkpIHtcclxuICAgICAgICAgICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUsIG5ldyBQbHVnaW4odGhpcywgb3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJC5mbltwbHVnaW5OYW1lXS5kZWZhdWx0cyA9IHtcclxuICAgIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge30sXHJcbiAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHt9LFxyXG4gICAgd3JhcENvbnRlbnQ6IHRydWUsXHJcbiAgICBhdXRvSGlkZTogZmFsc2UsXHJcbiAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIuY3NjcmxiLXNjcm9sbGFibGVcIikuY3NjcmxiKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XHJcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XHJcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XHJcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xyXG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcclxuICByZXR1cm4gQ29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7XHJcbiAgdmFyIGl0O1xyXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIEFycmF5LmlzQXJyYXkobykgfHxcclxuICAgICAgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fFxyXG4gICAgICAoYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpXHJcbiAgICApIHtcclxuICAgICAgaWYgKGl0KSBvID0gaXQ7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgczogRixcclxuICAgICAgICBuOiBmdW5jdGlvbiBuKCkge1xyXG4gICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlOiBmdW5jdGlvbiBlKF9lKSB7XHJcbiAgICAgICAgICB0aHJvdyBfZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGY6IEYsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICBcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCJcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSxcclxuICAgIGRpZEVyciA9IGZhbHNlLFxyXG4gICAgZXJyO1xyXG4gIHJldHVybiB7XHJcbiAgICBzOiBmdW5jdGlvbiBzKCkge1xyXG4gICAgICBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgfSxcclxuICAgIG46IGZ1bmN0aW9uIG4oKSB7XHJcbiAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xyXG4gICAgICBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lO1xyXG4gICAgICByZXR1cm4gc3RlcDtcclxuICAgIH0sXHJcbiAgICBlOiBmdW5jdGlvbiBlKF9lMikge1xyXG4gICAgICBkaWRFcnIgPSB0cnVlO1xyXG4gICAgICBlcnIgPSBfZTI7XHJcbiAgICB9LFxyXG4gICAgZjogZnVuY3Rpb24gZigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChkaWRFcnIpIHRocm93IGVycjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XHJcbiAgaWYgKCFvKSByZXR1cm47XHJcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcclxuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XHJcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcclxuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcclxuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XHJcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xyXG4gIH1cclxuICByZXR1cm4gYXJyMjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xyXG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xyXG4gIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGhvbWVCYW5uZXIoKTtcclxuICBoZWFkZXIoKTtcclxuICBnYWxsZXJ5KCk7XHJcbiAgbGFuZGluZ19zbGlkZXJzKCk7XHJcbiAgdXAoKTtcclxuICBjaGF0QmxvY2soKTtcclxuICB0b2dnbGUoKTsgLy9pbnRlcmFjdGlvblxyXG5cclxuICBuZXcg0KF1c3RvbUludGVyYWN0aW9uKHtcclxuICAgIHRhcmdldHM6IFwiYSwgYnV0dG9uLCBbZGF0YS1jdXN0b20taW50ZXJhY3Rpb25dLCAuaW1hZ2Utem9vbVwiLFxyXG4gIH0pOyAvL3NsaWRlciBjb25zdHJ1Y3RvclxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1jb25zdHJ1Y3RvclwiKS5mb3JFYWNoKGZ1bmN0aW9uICgkdGhpcykge1xyXG4gICAgbmV3IFNsaWRlckNvbnN0cnVjdG9yKCR0aGlzKS5pbml0KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbGFuZGluZ19zbGlkZXJzKCkge1xyXG4gIHZhciAkc2xpZGVycyA9ICQoXCIubGFuZGluZy1zbGlkZXIgLm93bC1jYXJvdXNlbFwiKTtcclxuXHJcbiAgaWYgKCRzbGlkZXJzLmxlbmd0aCkge1xyXG4gICAgJHNsaWRlcnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgIHZhciBjb3VudDEsIGNvdW50MiwgY291bnQzLCBjb3VudDQ7XHJcblxyXG4gICAgICBpZiAoJHRoaXMuaXMoXCIubGFuZGluZy1zbGlkZXJfMSAub3dsLWNhcm91c2VsXCIpKSB7XHJcbiAgICAgICAgY291bnQxID0gMjtcclxuICAgICAgICBjb3VudDIgPSAyO1xyXG4gICAgICAgIGNvdW50MyA9IDM7XHJcbiAgICAgICAgY291bnQ0ID0gNDtcclxuICAgICAgfSBlbHNlIGlmICgkdGhpcy5pcyhcIi5sYW5kaW5nLXNsaWRlcl8yIC5vd2wtY2Fyb3VzZWxcIikpIHtcclxuICAgICAgICBjb3VudDEgPSAxO1xyXG4gICAgICAgIGNvdW50MiA9IDI7XHJcbiAgICAgICAgY291bnQzID0gMztcclxuICAgICAgICBjb3VudDQgPSA0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkdGhpcy5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IGNvdW50MSxcclxuICAgICAgICAgICAgbWFyZ2luOiAxNixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IGNvdW50MixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IGNvdW50MyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgaXRlbXM6IGNvdW50NCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICB2YXIgJHNlY3Rpb24gPSAkKFwiLnRvZ2dsZS1zZWN0aW9uXCIpLFxyXG4gICAgc3BlZWQgPSAyNTA7XHJcbiAgJHNlY3Rpb24uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAkdG9nZ2xlID0gJHRoaXMuY2hpbGRyZW4oXCIudG9nZ2xlLXNlY3Rpb25fX3RyaWdnZXJcIiksXHJcbiAgICAgICRjb250ZW50ID0gJHRoaXMuY2hpbGRyZW4oXCIudG9nZ2xlLXNlY3Rpb25fX2NvbnRlbnRcIiksXHJcbiAgICAgICRjbG9zZSA9ICRjb250ZW50LmZpbmQoXCIudG9nZ2xlLXNlY3Rpb25fX2Nsb3NlXCIpLFxyXG4gICAgICBzdGF0ZSA9ICR0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICBpbml0aWFsaXplZDtcclxuICAgICR0b2dnbGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHN0YXRlID0gIXN0YXRlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICBjaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICAkY2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHN0YXRlID0gZmFsc2U7XHJcbiAgICAgIGNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJHRoaXMuaXMoXCJbZGF0YS1ob3Zlcl1cIikpIHtcclxuICAgICAgdmFyIHRpbWVvdXQ7XHJcbiAgICAgICR0b2dnbGUuYWRkKCRjb250ZW50KS5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFpc1RvdWNoKSB7XHJcbiAgICAgICAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgc3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkdG9nZ2xlLmFkZCgkY29udGVudCkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmICghaXNUb3VjaCkge1xyXG4gICAgICAgICAgdmFyIGRlbGF5O1xyXG5cclxuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCR0b2dnbGUpKSB7XHJcbiAgICAgICAgICAgIGRlbGF5ID0gNTAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsYXkgPSAxMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGVjaygpO1xyXG4gICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCR0aGlzLmlzKFwiW2RhdGEtb3V0LWhpZGVdXCIpIHx8ICR0aGlzLmlzKFwiW2RhdGEtaG92ZXJdXCIpKSB7XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2sgdG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKCEkdGFyZ2V0LmNsb3Nlc3QoJGNvbnRlbnQpLmxlbmd0aCAmJiAhJHRhcmdldC5jbG9zZXN0KCR0b2dnbGUpLmxlbmd0aCAmJiBzdGF0ZSkge1xyXG4gICAgICAgICAgc3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgIGNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVjaygpIHtcclxuICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgJHRoaXMuYWRkKCRjb250ZW50KS5hZGQoJHRvZ2dsZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGlmICgkdGhpcy5pcyhcIltkYXRhLXNsaWRlXVwiKSkge1xyXG4gICAgICAgICAgJGNvbnRlbnQuc2xpZGVEb3duKHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHRoaXMuYWRkKCR0b2dnbGUpLmFkZCgkY29udGVudCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGlmICgkdGhpcy5pcyhcIltkYXRhLXNsaWRlXVwiKSkge1xyXG4gICAgICAgICAgaWYgKGluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICRjb250ZW50LnN0b3AoKS5zbGlkZVVwKHNwZWVkKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRjb250ZW50LmhpZGUoMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soKTtcclxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXAoKSB7XHJcbiAgdmFyICRidG4gPSAkKFwiLmpzLXVwXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjaGVjaygpIHtcclxuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+IDUwKSB7XHJcbiAgICAgICRidG4uYWRkQ2xhc3MoXCJ2aXNpYmxlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGJ0bi5yZW1vdmVDbGFzcyhcInZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgaXNUaHJvdHRsZWQgPSBmYWxzZTtcclxuICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGlzVGhyb3R0bGVkKSByZXR1cm47XHJcbiAgICBpc1Rocm90dGxlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2hlY2soKTtcclxuICAgICAgaXNUaHJvdHRsZWQgPSBmYWxzZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfSk7XHJcbiAgY2hlY2soKTtcclxuICAkYnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgfSxcclxuICAgICAgNTAwXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGF0QmxvY2soKSB7XHJcbiAgdmFyICRibG9jayA9ICQoXCIuY2hhdC1ibG9ja1wiKSxcclxuICAgICRvcGVuID0gJChcIltkYXRhLWNoYXQtb3Blbl1cIiksXHJcbiAgICAkY2xvc2UgPSAkKFwiW2RhdGEtY2hhdC1jbG9zZV1cIik7XHJcbiAgJG9wZW4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkYmxvY2suYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgJGNsb3NlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJGJsb2NrLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG52YXIg0KF1c3RvbUludGVyYWN0aW9uID0gZnVuY3Rpb24g0KF1c3RvbUludGVyYWN0aW9uKCkge1xyXG4gIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCDQoXVzdG9tSW50ZXJhY3Rpb24pO1xyXG5cclxuICB0aGlzLnRhcmdldHMgPSBvcHRpb25zLnRhcmdldHM7XHJcbiAgdGhpcy50b3VjaGVuZERlbGF5ID0gb3B0aW9ucy50b3VjaGVuZERlbGF5IHx8IDEwMDsgLy9tc1xyXG5cclxuICB2YXIgZXZlbnRzID0gZnVuY3Rpb24gZXZlbnRzKGV2ZW50KSB7XHJcbiAgICB2YXIgJHRhcmdldHMgPSBbXTtcclxuICAgICR0YXJnZXRzWzBdID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudCA/IGV2ZW50LnRhcmdldC5jbG9zZXN0KF90aGlzMi50YXJnZXRzKSA6IG51bGw7XHJcbiAgICB2YXIgJGVsZW1lbnQgPSAkdGFyZ2V0c1swXSxcclxuICAgICAgaSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKCR0YXJnZXRzWzBdKSB7XHJcbiAgICAgICRlbGVtZW50ID0gJGVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgIGlmICgkZWxlbWVudCAhPT0gZG9jdW1lbnQpIHtcclxuICAgICAgICBpZiAoJGVsZW1lbnQubWF0Y2hlcygkdGFyZ2V0cy52YWx1ZSkpIHtcclxuICAgICAgICAgIGkrKztcclxuICAgICAgICAgICR0YXJnZXRzW2ldID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IC8vdG91Y2hzdGFydFxyXG5cclxuICAgIGlmIChldmVudC50eXBlID09IFwidG91Y2hzdGFydFwiKSB7XHJcbiAgICAgIF90aGlzMi50b3VjaGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKF90aGlzMi50aW1lb3V0KSBjbGVhclRpbWVvdXQoX3RoaXMyLnRpbWVvdXQpO1xyXG5cclxuICAgICAgaWYgKCR0YXJnZXRzWzBdKSB7XHJcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKCR0YXJnZXRzKSxcclxuICAgICAgICAgIF9zdGVwO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTsgKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gX3N0ZXAudmFsdWU7XHJcbiAgICAgICAgICAgICR0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS10b3VjaFwiLCBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIF9pdGVyYXRvci5lKGVycik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIF9pdGVyYXRvci5mKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL3RvdWNoZW5kXHJcbiAgICBlbHNlIGlmIChldmVudC50eXBlID09IFwidG91Y2hlbmRcIiB8fCAoZXZlbnQudHlwZSA9PSBcImNvbnRleHRtZW51XCIgJiYgX3RoaXMyLnRvdWNoZWQpKSB7XHJcbiAgICAgIF90aGlzMi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMyLnRvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgfSwgX3RoaXMyLnRvdWNoZW5kRGVsYXkpO1xyXG5cclxuICAgICAgaWYgKCR0YXJnZXRzWzBdKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKCR0YXJnZXRzKSxcclxuICAgICAgICAgICAgX3N0ZXAyO1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7ICkge1xyXG4gICAgICAgICAgICAgIHZhciBfJHRhcmdldCA9IF9zdGVwMi52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgXyR0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS10b3VjaFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xyXG4gICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgX3RoaXMyLnRvdWNoZW5kRGVsYXkpO1xyXG4gICAgICB9XHJcbiAgICB9IC8vbW91c2VlbnRlclxyXG5cclxuICAgIGlmIChldmVudC50eXBlID09IFwibW91c2VlbnRlclwiICYmICFfdGhpczIudG91Y2hlZCAmJiAkdGFyZ2V0c1swXSAmJiAkdGFyZ2V0c1swXSA9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgJHRhcmdldHNbMF0uc2V0QXR0cmlidXRlKFwiZGF0YS1ob3ZlclwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vbW91c2VsZWF2ZVxyXG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSBcIm1vdXNlbGVhdmVcIiAmJiAhX3RoaXMyLnRvdWNoZWQgJiYgJHRhcmdldHNbMF0gJiYgJHRhcmdldHNbMF0gPT0gZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICR0YXJnZXRzWzBdLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY2xpY2tcIik7XHJcbiAgICAgICR0YXJnZXRzWzBdLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtaG92ZXJcIik7XHJcbiAgICB9IC8vbW91c2Vkb3duXHJcblxyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJtb3VzZWRvd25cIiAmJiAhX3RoaXMyLnRvdWNoZWQgJiYgJHRhcmdldHNbMF0pIHtcclxuICAgICAgJHRhcmdldHNbMF0uc2V0QXR0cmlidXRlKFwiZGF0YS1jbGlja1wiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIC8vbW91c2V1cFxyXG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSBcIm1vdXNldXBcIiAmJiAhX3RoaXMyLnRvdWNoZWQgJiYgJHRhcmdldHNbMF0pIHtcclxuICAgICAgJHRhcmdldHNbMF0ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jbGlja1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBldmVudHMpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBldmVudHMpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50cywgdHJ1ZSk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZXZlbnRzLCB0cnVlKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50cyk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnRzKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZXZlbnRzKTtcclxufTtcclxuIl19
