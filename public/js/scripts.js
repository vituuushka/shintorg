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
      C = '[data-toggle="collapse"]',
      $ = (function () {
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
            var a = [].slice.call(document.querySelectorAll(C)),
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
      t(document).on(v, C, function (o) {
        "A" === o.currentTarget.tagName && o.preventDefault();
        var a = t(this),
          n = e.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(n));
        t(i).each(function () {
          var e = t(this),
            o = e.data(s) ? "toggle" : a.data();
          $._jQueryInterface.call(e, o);
        });
      }),
      (t.fn[r] = $._jQueryInterface),
      (t.fn[r].Constructor = $),
      (t.fn[r].noConflict = function () {
        return (t.fn[r] = c), $._jQueryInterface;
      }),
      $
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
        a = document.querySelectorAll(".po-auto");
      if (this.checked)
        return (
          (t.style.display = "none"),
          (e.style.display = "block"),
          o.classList.add("disactive"),
          void a.forEach(function (t) {
            t.classList.remove("disactive");
          })
        );
      (t.style.display = "block"),
        (e.style.display = "none"),
        o.classList.remove("disactive"),
        a.forEach(function (t) {
          t.classList.add("disactive");
        });
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
      (d.style.display = "block"), document.body.appendChild(d);
    }),
      u.addEventListener("click", function () {
        (d.style.display = "none"),
          document.querySelector(".filter-auto").appendChild(d);
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
        $();
      }
      function C() {
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
      function $() {
        C(), k();
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
        S(), C();
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
        a.autoHide && d.on("mouseenter", $),
        r.on("mousedown", g),
        i.on("mousedown", b),
        n.on("scroll", w),
        C(),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIyIiwibyIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJTeW1ib2wiLCJpdGVyYXRvciIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTIiLCJsZW5ndGgiLCJpIiwiRiIsInMiLCJuIiwiZG9uZSIsInZhbHVlIiwiZSIsIl9lMyIsImYiLCJUeXBlRXJyb3IiLCJlcnIiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwiY2FsbCIsInN0ZXAiLCJuZXh0IiwiX2U0IiwicmV0dXJuIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiYXJyIiwibGVuIiwiYXJyMiIsIl90eXBlb2YyIiwiYnJlYWtwb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwidGhyb3R0bGUiLCJkZWxheSIsImNhbGxiYWNrIiwib3B0aW9ucyIsInRpbWVvdXRJRCIsIl9yZWYiLCJfcmVmJG5vVHJhaWxpbmciLCJub1RyYWlsaW5nIiwiX3JlZiRub0xlYWRpbmciLCJub0xlYWRpbmciLCJfcmVmJGRlYm91bmNlTW9kZSIsImRlYm91bmNlTW9kZSIsInVuZGVmaW5lZCIsImNhbmNlbGxlZCIsImxhc3RFeGVjIiwiY2xlYXJFeGlzdGluZ1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ3cmFwcGVyIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3VtZW50c18iLCJfa2V5Iiwic2VsZiIsInRoaXMiLCJlbGFwc2VkIiwiRGF0ZSIsIm5vdyIsImV4ZWMiLCJhcHBseSIsImNsZWFyIiwic2V0VGltZW91dCIsImNhbmNlbCIsIl9yZWYyJHVwY29taW5nT25seSIsInVwY29taW5nT25seSIsImRlYm91bmNlIiwiX3JlZiRhdEJlZ2luIiwiYXRCZWdpbiIsIiQiLCJ2ZXJzaW9uIiwiZm4iLCJqcXVlcnkiLCJzcGxpdCIsIkVycm9yIiwiZ2xvYmFsIiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiVXRpbCIsImpRdWVyeSIsImhhc093blByb3BlcnR5IiwiVFJBTlNJVElPTl9FTkQiLCJ0cmFuc2l0aW9uRW5kRW11bGF0b3IiLCJkdXJhdGlvbiIsIl90aGlzIiwiY2FsbGVkIiwib25lIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsInRyaW0iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJjc3MiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsInRyaWdnZXIiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJCb29sZWFuIiwiaXNFbGVtZW50Iiwib2JqIiwibm9kZVR5cGUiLCJ0eXBlQ2hlY2tDb25maWciLCJjb21wb25lbnROYW1lIiwiY29uZmlnIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZVR5cGUiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiUmVnRXhwIiwidG9VcHBlckNhc2UiLCJmaW5kU2hhZG93Um9vdCIsImRvY3VtZW50RWxlbWVudCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJwYXJlbnROb2RlIiwialF1ZXJ5RGV0ZWN0aW9uIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJldmVudCIsInNwZWNpYWwiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsInRhcmdldCIsImlzIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsIkNvbGxhcHNlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHVzaCIsIl9vYmplY3RTcHJlYWQyIiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiRGVmYXVsdCIsInRvZ2dsZSIsInBhcmVudCIsIkRlZmF1bHRUeXBlIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiRElNRU5TSU9OX1dJRFRIIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl90cmlnZ2VyQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWQiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsImZpbHRlckVsZW1lbnQiLCJmb3VuZEVsZW0iLCJfc2VsZWN0b3IiLCJfcGFyZW50IiwiX2dldFBhcmVudCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9wcm90byIsImhhc0NsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vdCIsImRhdGEiLCJzdGFydEV2ZW50IiwiRXZlbnQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzdHlsZSIsImF0dHIiLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsIl90aGlzMiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsImRpc3Bvc2UiLCJyZW1vdmVEYXRhIiwiX3RoaXMzIiwiY2hpbGRyZW4iLCJlYWNoIiwiX2dldFRhcmdldEZyb21FbGVtZW50IiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwidG9nZ2xlQ2xhc3MiLCIkdGhpcyIsImdldCIsIm9uIiwiY3VycmVudFRhcmdldCIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0cmlnZ2VyIiwic2VsZWN0b3JzIiwiJHRhcmdldCIsIm5vQ29uZmxpY3QiLCJjbGljayIsInNsaWRlVXAiLCJmaW5kIiwic2xpZGVUb2dnbGUiLCJiaWdTbGlkZXMiLCJhdXRvUGxheVRpbWVvdXRTZWMiLCJwYXJzZUludCIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsImRvdHMiLCJpdGVtcyIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwibmF2VGV4dCIsInJhZGlvQnV0dG9ucyIsImNob2ljZXMiLCJnYWxsZXJ5IiwiZmFuY3lib3giLCIkc2VsZWN0b3IiLCJwYXJlbnRzIiwib3BlbiIsImJhY2tGb2N1cyIsImluZGV4IiwiaGVhZGVyIiwiaGVpZ2h0Iiwic2Nyb2xsIiwiJGhlYWRlciIsImlzVGhyb3R0bGVkIiwiY2hlY2siLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJob21lQmFubmVyIiwiJHNsaWRlciIsInNtYXJ0U3BlZWQiLCJsYXp5TG9hZCIsIl90eXBlb2YiLCJzbGlkZXJEZWJvdW5jZSIsImZ1bmMiLCJpbnRlcnZhbCIsImNvbnRleHQiLCJ0aW1lb3V0IiwiX2FyZ3VtZW50cyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja2VkIiwiY2hvaWNlIiwiZGlzcGxheSIsInJlbW92ZSIsInJlc3BvbnNpdmUiLCJidXR0b25EZWZhdWx0VmlldyIsImJ1dHRvbldpZGVWaWV3IiwiYnV0dG9uTGluZVZpZXciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVhZHkiLCJjbG9zZXN0IiwiZm9jdXMiLCJjb25jYXQiLCJ2YWwiLCJ0aGF0IiwibGlzdElEIiwiZ3JvdXBzIiwidGhlT3B0aW9ucyIsInN0YXJ0aW5nT3B0aW9uIiwiY3VyR3JvdXAiLCJjdXJOYW1lIiwiY3VyT3B0IiwiY3VyVmFsIiwiY3VySHRtbCIsImh0bWwiLCJpbnNlcnRBZnRlciIsInNlbGVjdGRkIiwic2VsZWN0dWwiLCJzZWxlY3RsaSIsInBhcmVudFVsIiwidGhpc2RkIiwic2libGluZ3MiLCJsaWh0bWwiLCJsaXZhbHVlIiwib3JpZ2luYWxTZWxlY3QiLCJrZXlwcmVzc1NsaWRlcnMiLCJrZXlwcmVzc1NsaWRlciIsImZpZWxkX25hbWUiLCJpbnB1dDAiLCJpbnB1dDEiLCJpbnB1dHMiLCJzdGFydFZhbCIsImRhdGFzZXQiLCJjdXJyZW50VmFsdWUiLCJlbmRWYWwiLCJtaW5WYWwiLCJtaW5WYWx1ZSIsIm1heFZhbCIsIm1heFZhbHVlIiwicG9zdGZpeCIsInNldFNsaWRlckhhbmRsZSIsInIiLCJub1VpU2xpZGVyIiwic2V0IiwiY3JlYXRlIiwic3RhcnQiLCJjb25uZWN0IiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJmb3JtYXQiLCJ3TnVtYiIsImRlY2ltYWxzIiwidGhvdXNhbmQiLCJ2YWx1ZXMiLCJpbnB1dCIsInBvc2l0aW9uIiwiTnVtYmVyIiwic3RlcHMiLCJ3aGljaCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwiYW5pbWF0ZSIsIm9mZnNldCIsInRvcCIsInN5bmMxIiwic3luYzIiLCJzbGlkZVNwZWVkIiwicmVzcG9uc2l2ZVJlZnJlc2hSYXRlIiwiZWwiLCJjb3VudCIsIml0ZW0iLCJjdXJyZW50Iiwicm91bmQiLCJlcSIsIm9uc2NyZWVuIiwiZmlyc3QiLCJlbmQiLCJsYXN0IiwidG8iLCJzbGlkZUJ5IiwibnVtYmVyIiwiYWN0aXZlVGFiIiwiZmFkZUluIiwiZF9hY3RpdmVUYWIiLCJhY3RpdmVUYWJCbG9jayIsIiR0aGlzQWN0aXZlIiwidG9vbHRpcENvbnRlbnQiLCJjbG9uZWRUb29sdGlwQ29udGVudCIsImNsb25lIiwidGlwcHkiLCJjb250ZW50IiwiYWxsb3dIVE1MIiwicGxhY2VtZW50IiwidGhlbWUiLCJpbnRlcmFjdGl2ZSIsIm9uTW91bnQiLCJpbnN0YW5jZSIsInJlZmVyZW5jZSIsInRpdGxlIiwidGltZSIsImFjdGlvbiIsImJ1dHRvbiIsImlzVGltZSIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0ZXh0IiwiZm9ybSIsInJlbW92ZUF0dHIiLCJzY3JvbGxMZWZ0IiwiYXBwZW5kIiwiX3N0ZXAzIiwiY29sbGFwc2UiLCJjb2xsYXBzZUlkIiwiY29sbGFwc2VDaGlsZHJlbkhlaWdodCIsIl9pdGVyYXRvcjMiLCJjaGlsZCIsInRvdWNoc3RhcnRYIiwidG91Y2hlbmRYIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaW1nIiwicHJldiIsIlNsaWRlckNvbnN0cnVjdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwicGFyYW1zIiwiYXJyb3dzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhZGFwdGl2ZUhlaWdodCIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsInJvd3MiLCJzdGF0ZSIsImJyZWFrcG9pbnQiLCJwcmV2S2V5Iiwic2xpZGVzIiwiY29udGFpbnNNb2JpbGVIaWRkZW5TbGlkZXMiLCJjaGlsZE5vZGVzIiwic2xpZGUiLCJjcmVhdGVJY29ucyIsImNoZWNrU2xpZGVyU3RhdGUiLCJjaGVja1NsaWRlclN0YXRlRGVib3VuY2VkIiwibGVmdEljb24iLCJyaWdodEljb24iLCJsZWZ0SWNvbkNsYXNzIiwicmlnaHRJY29uQ2xhc3MiLCJpY29uIiwiaXNMZWZ0SWNvbiIsImlzUmlnaHRJY29uIiwib3V0ZXJIVE1MIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJtb3VudGVkIiwic2F2ZWRXaW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJ1bm1vdW50IiwiY2hlY2tTbGlkZXNWaXNpYmlsaXR5IiwibW91bnQiLCJhZGQiLCJfdGhpczQiLCJzaG91bGRCZUhpZGRlbiIsImluc2VydEFkamFjZW50RWxlbWVudCIsInNsaWNrIiwiYXV0b3BsYXlTcGVlZCIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhY2Nlc3NpYmlsaXR5Iiwic2V0dGluZ3MiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9lIiwiX2UyIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJsYW5kaW5nX3NsaWRlcnMiLCIkc2xpZGVycyIsImNvdW50MSIsImNvdW50MiIsImNvdW50MyIsImNvdW50NCIsIiRzZWN0aW9uIiwiaW5pdGlhbGl6ZWQiLCIkdG9nZ2xlIiwiJGNvbnRlbnQiLCIkY2xvc2UiLCJpc1RvdWNoIiwic2xpZGVEb3duIiwic3RvcCIsInVwIiwiJGJ0biIsImNoYXRCbG9jayIsIiRibG9jayIsIiRvcGVuIiwidGlyZUZpbHRlclRvZ2dsZSIsImJsb2NrUGFyYW1ldGVyIiwiYmxvY2tBdXRvIiwicG9QYXJhbWV0cmFtIiwicG9BdXRvIiwiY2hlY2tlZCIsInJlc2V0RmlsdGVyQnV0dG9uUGFyYW1ldGVyIiwicGFyYW1ldGVyQmxvY2siLCJyZXNldEZpbHRlcnMiLCJyZXNldEZpbHRlckJ1dHRvbkF1dG8iLCJhdXRvQmxvY2siLCJmaXJzdENoaWxkIiwiYXRMZWFzdE9uZVNlbGVjdGVkUGFyYW0iLCJzb21lIiwiYXRMZWFzdE9uZVNlbGVjdGVkQXV0byIsImNoZWNrU2VsZWN0b3JzIiwic2VsZWN0ZWRPcHRpb24iLCJzZWFyY2hJbnB1dCIsInNlbGVjdE9wdGlvbnMiLCJ0b2dnbGVPcHRpb25zIiwic2VsZWN0T3B0aW9uIiwic2VsZWN0ZWQiLCJ0ZXh0Q29udGVudCIsImNsb3NlT3B0aW9ucyIsInNlYXJjaFN0cmluZyIsImluY2x1ZGVzIiwic2VhcmNoT3B0aW9ucyIsInZhcmlhYmxlV2lkdGgiLCJ0YWJzIiwiY2xpZW50V2lkdGgiLCJ0YWIiLCJzbGlkZXJJdGVtcyIsInRhcmdldEl0ZW0iLCJ0YWJJZCIsIml0ZW1BY3RpdmUiLCJhdXRvTW9kYWwiLCJpbm5lckhUTUwiLCJhdXRvT3BlbkJ1dHRvbiIsImF1dG9Nb2RhbE1vYmlsZSIsImF1dG9DbG9zZUJ1dHRvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImJsb2NrIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJwbHVnaW5OYW1lIiwiUGx1Z2luIiwiJHNjcm9sbENvbnRlbnRFbCIsIiRzY3JvbGxiYXJFbCIsIiRkcmFnSGFuZGxlRWwiLCJkcmFnT2Zmc2V0IiwiZmxhc2hUaW1lb3V0IiwiJGVsIiwiJGNvbnRlbnRFbCIsInBhZ2VKdW1wTXVsdHAiLCJzY3JvbGxEaXJlY3Rpb24iLCJzY3JvbGxPZmZzZXRBdHRyIiwic2l6ZUF0dHIiLCJvZmZzZXRBdHRyIiwic3RhcnREcmFnIiwiZXZlbnRPZmZzZXQiLCJwYWdlWSIsInBhZ2VYIiwiZHJhZyIsImVuZERyYWciLCJzY3JvbGxQb3MiLCJvZmYiLCJqdW1wU2Nyb2xsIiwianVtcEFtdCIsIm9yaWdpbmFsRXZlbnQiLCJsYXllclkiLCJsYXllclgiLCJvblNjcm9sbGVkIiwiZmxhc2hTY3JvbGxiYXIiLCJyZXNpemVTY3JvbGxiYXIiLCJjb250ZW50U2l6ZSIsInNjcm9sbE9mZnNldCIsInNjcm9sbGJhclNpemUiLCJzY3JvbGxiYXJSYXRpbyIsImhhbmRsZU9mZnNldCIsImhhbmRsZVNpemUiLCJmbG9vciIsImxlZnQiLCJ3aWR0aCIsInNob3dTY3JvbGxiYXIiLCJhdXRvSGlkZSIsInJlc2l6ZVNjcm9sbENvbnRlbnQiLCJzY3JvbGxiYXJXaWR0aCIsInRlbXBFbCIsIndpZHRoTWludXNTY3JvbGxiYXJzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsInJlY2FsY3VsYXRlIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJvbmxvYWQiLCJwcmVwZW5kIiwid3JhcENvbnRlbnQiLCJ3cmFwIiwib3B0aW9uIiwiZGVzdHJveSIsImhvb2tOYW1lIiwiaW5zZXJ0QmVmb3JlIiwicmV0dXJuVmFsIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJvbkluaXQiLCJvbkRlc3Ryb3kiLCJjc2NybGIiLCLQoXVzdG9tSW50ZXJhY3Rpb24iLCJ0YXJnZXRzIiwiaW5pdCIsInRvdWNoZW5kRGVsYXkiLCJldmVudHMiLCIkdGFyZ2V0cyIsIiRlbGVtZW50IiwidHlwZSIsInRvdWNoZWQiLCJfc3RlcCIsIl9pdGVyYXRvciIsInNldEF0dHJpYnV0ZSIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiJBQUFBLGFBRUEsU0FBU0EsNEJBQTRCQyxFQUFHQyxHQUFrQixJQUFJQyxFQUF1QixvQkFBWEMsUUFBMEJILEVBQUVHLE9BQU9DLFdBQWFKLEVBQUUsY0FBZSxJQUFLRSxFQUFJLENBQUUsR0FBSUcsTUFBTUMsUUFBUU4sS0FBT0UsRUFBS0ssNkJBQTZCUCxLQUFPQyxHQUFrQkQsR0FBeUIsaUJBQWJBLEVBQUVRLE9BQXFCLENBQU1OLElBQUlGLEVBQUlFLEdBQUksSUFB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QU15ZSxPQUF5QjVZLEVBQU82WSxTQUFXSCxFQUFTLElBQU1BLEVBQVMsSUFBTXZlLEVBQU1LLFNBQzVGa2UsRUFBUyxHQUFHUyxnQkFBZ0IsY0FDNUJULEVBQVMsR0FBR1MsZ0JBQWdCLGVBR1osYUFBZGhmLEVBQU15ZSxPQUF3QjVZLEVBQU82WSxTQUFXSCxFQUFTLEdBQzNEQSxFQUFTLEdBQUdNLGFBQWEsYUFBYyxJQUdsQixXQUFkN2UsRUFBTXllLE9BQXNCNVksRUFBTzZZLFNBQVdILEVBQVMsSUFDOURBLEVBQVMsR0FBR1MsZ0JBQWdCLGFBRWhDLEVBRUE1aEIsU0FBUzZNLGlCQUFpQixhQUFjcVUsR0FDeENsaEIsU0FBUzZNLGlCQUFpQixXQUFZcVUsR0FDdENsaEIsU0FBUzZNLGlCQUFpQixhQUFjcVUsR0FBUSxHQUNoRGxoQixTQUFTNk0saUJBQWlCLGFBQWNxVSxHQUFRLEdBQ2hEbGhCLFNBQVM2TSxpQkFBaUIsWUFBYXFVLEdBQ3ZDbGhCLFNBQVM2TSxpQkFBaUIsVUFBV3FVLEdBQ3JDbGhCLFNBQVM2TSxpQkFBaUIsY0FBZXFVLEVBQzNDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoXCJ1c2Ugc3RyaWN0XCIpO1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NixcclxuICBtZDogNzY4LFxyXG4gIGxnOiAxMDI0LFxyXG4gIHhsOiAxMjgwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdGhyb3R0bGUoZGVsYXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYgPSBvcHRpb25zIHx8IHt9LFxyXG4gICAgX3JlZiRub1RyYWlsaW5nID0gX3JlZi5ub1RyYWlsaW5nLFxyXG4gICAgbm9UcmFpbGluZyA9IF9yZWYkbm9UcmFpbGluZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG5vVHJhaWxpbmcsXHJcbiAgICBfcmVmJG5vTGVhZGluZyA9IF9yZWYubm9MZWFkaW5nLFxyXG4gICAgbm9MZWFkaW5nID0gX3JlZiRub0xlYWRpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRub0xlYWRpbmcsXHJcbiAgICBfcmVmJGRlYm91bmNlTW9kZSA9IF9yZWYuZGVib3VuY2VNb2RlLFxyXG4gICAgZGVib3VuY2VNb2RlID0gX3JlZiRkZWJvdW5jZU1vZGUgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYkZGVib3VuY2VNb2RlO1xyXG5cclxuICB2YXIgdGltZW91dElEO1xyXG4gIHZhciBjYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGxhc3RFeGVjID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1RpbWVvdXQoKSB7XHJcbiAgICBpZiAodGltZW91dElEKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsKG9wdGlvbnMpIHtcclxuICAgIHZhciBfcmVmMiA9IG9wdGlvbnMgfHwge30sXHJcbiAgICAgIF9yZWYyJHVwY29taW5nT25seSA9IF9yZWYyLnVwY29taW5nT25seSxcclxuICAgICAgdXBjb21pbmdPbmx5ID0gX3JlZjIkdXBjb21pbmdPbmx5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHVwY29taW5nT25seTtcclxuXHJcbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xyXG4gICAgY2FuY2VsbGVkID0gIXVwY29taW5nT25seTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XHJcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzXyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgYXJndW1lbnRzX1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBsYXN0RXhlYztcclxuXHJcbiAgICBpZiAoY2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleGVjKCkge1xyXG4gICAgICBsYXN0RXhlYyA9IERhdGUubm93KCk7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50c18pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgICB0aW1lb3V0SUQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFub0xlYWRpbmcgJiYgZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQpIHtcclxuICAgICAgZXhlYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XHJcblxyXG4gICAgaWYgKGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSkge1xyXG4gICAgICBpZiAobm9MZWFkaW5nKSB7XHJcbiAgICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBpZiAoIW5vVHJhaWxpbmcpIHtcclxuICAgICAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4ZWMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChub1RyYWlsaW5nICE9PSB0cnVlKSB7XHJcbiAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLFxyXG4gICAgICAgIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyYXBwZXIuY2FuY2VsID0gY2FuY2VsO1xyXG5cclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVib3VuY2UoZGVsYXksIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgdmFyIF9yZWYgPSBvcHRpb25zIHx8IHt9LFxyXG4gICAgX3JlZiRhdEJlZ2luID0gX3JlZi5hdEJlZ2luLFxyXG4gICAgYXRCZWdpbiA9IF9yZWYkYXRCZWdpbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF0QmVnaW47XHJcblxyXG4gIHJldHVybiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIHtcclxuICAgIGRlYm91bmNlTW9kZTogYXRCZWdpbiAhPT0gZmFsc2UsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY0LjQuMCk6IGluZGV4LmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0LicpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XHJcbiAgdmFyIG1pbk1ham9yID0gMTtcclxuICB2YXIgbHRNYWpvciA9IDI7XHJcbiAgdmFyIG1pbk1pbm9yID0gOTtcclxuICB2YXIgbWluUGF0Y2ggPSAxO1xyXG4gIHZhciBtYXhNYWpvciA9IDQ7XHJcblxyXG4gIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKTtcclxuICB9XHJcbn0pKCQpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcclxuXHJcbi8qIVxyXG4gICogQm9vdHN0cmFwIHV0aWwuanMgdjQuNS4wIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxyXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxyXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICAqL1xyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSkgOlxyXG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KSA6XHJcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuVXRpbCA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSkpO1xyXG59KHRoaXMsIChmdW5jdGlvbiAoJCkgeyAndXNlIHN0cmljdCc7XHJcblxyXG4gICQgPSAkICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCgkLCAnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcclxuXHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBCb290c3RyYXAgKHY0LjUuMCk6IHV0aWwuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuXHJcbiAgdmFyIFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xyXG4gIHZhciBNQVhfVUlEID0gMTAwMDAwMDtcclxuICB2YXIgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwOyAvLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXHJcblxyXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcclxuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIFwiXCIgKyBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXHJcbiAgICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXHJcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcclxuICAgICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZChfdGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XHJcbiAgICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yO1xyXG4gICAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG5cclxuICB2YXIgVXRpbCA9IHtcclxuICAgIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcclxuICAgIGdldFVJRDogZnVuY3Rpb24gZ2V0VUlEKHByZWZpeCkge1xyXG4gICAgICBkbyB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpOyAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXHJcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHByZWZpeDtcclxuICAgIH0sXHJcbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50OiBmdW5jdGlvbiBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgdmFyIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcblxyXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcclxuICAgICAgICB2YXIgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudDogZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxyXG5cclxuXHJcbiAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZGVsYXknKTtcclxuICAgICAgdmFyIGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xyXG4gICAgICB2YXIgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7IC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcclxuXHJcbiAgICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxyXG5cclxuXHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xyXG4gICAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcclxuICAgICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XHJcbiAgICB9LFxyXG4gICAgcmVmbG93OiBmdW5jdGlvbiByZWZsb3coZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcclxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKTtcclxuICAgIH0sXHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcclxuICAgIHN1cHBvcnRzVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORCk7XHJcbiAgICB9LFxyXG4gICAgaXNFbGVtZW50OiBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGU7XHJcbiAgICB9LFxyXG4gICAgdHlwZUNoZWNrQ29uZmlnOiBmdW5jdGlvbiB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xyXG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjb25maWdbcHJvcGVydHldO1xyXG4gICAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpICsgXCI6IFwiICsgKFwiT3B0aW9uIFxcXCJcIiArIHByb3BlcnR5ICsgXCJcXFwiIHByb3ZpZGVkIHR5cGUgXFxcIlwiICsgdmFsdWVUeXBlICsgXCJcXFwiIFwiKSArIChcImJ1dCBleHBlY3RlZCB0eXBlIFxcXCJcIiArIGV4cGVjdGVkVHlwZXMgKyBcIlxcXCIuXCIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaW5kU2hhZG93Um9vdDogZnVuY3Rpb24gZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcclxuXHJcblxyXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB2YXIgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcclxuICAgICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIH0gLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcclxuXHJcblxyXG4gICAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpO1xyXG4gICAgfSxcclxuICAgIGpRdWVyeURldGVjdGlvbjogZnVuY3Rpb24galF1ZXJ5RGV0ZWN0aW9uKCkge1xyXG4gICAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XHJcbiAgICAgIHZhciBtaW5NYWpvciA9IDE7XHJcbiAgICAgIHZhciBsdE1ham9yID0gMjtcclxuICAgICAgdmFyIG1pbk1pbm9yID0gOTtcclxuICAgICAgdmFyIG1pblBhdGNoID0gMTtcclxuICAgICAgdmFyIG1heE1ham9yID0gNDtcclxuXHJcbiAgICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFV0aWwualF1ZXJ5RGV0ZWN0aW9uKCk7XHJcbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKTtcclxuXHJcbiAgcmV0dXJuIFV0aWw7XHJcblxyXG59KSkpO1xyXG5cclxuLyohXHJcbiAgKiBCb290c3RyYXAgY29sbGFwc2UuanMgdjQuNS4wIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxyXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxyXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICAqL1xyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgnLi91dGlsLmpzJykpIDpcclxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydqcXVlcnknLCAnLi91dGlsLmpzJ10sIGZhY3RvcnkpIDpcclxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Db2xsYXBzZSA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSwgZ2xvYmFsLlV0aWwpKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKCQsIFV0aWwpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAkID0gJCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoJCwgJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XHJcbiAgVXRpbCA9IFV0aWwgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFV0aWwsICdkZWZhdWx0JykgPyBVdGlsWydkZWZhdWx0J10gOiBVdGlsO1xyXG5cclxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XHJcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcclxuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xyXG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XHJcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcclxuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcclxuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcclxuICAgIGlmIChrZXkgaW4gb2JqKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xyXG5cclxuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XHJcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xyXG4gICAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xyXG5cclxuICAgICAgaWYgKGkgJSAyKSB7XHJcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb25zdGFudHNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuXHJcbiAgdmFyIE5BTUUgPSAnY29sbGFwc2UnO1xyXG4gIHZhciBWRVJTSU9OID0gJzQuNS4wJztcclxuICB2YXIgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnO1xyXG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xyXG4gIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcclxuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcclxuICB2YXIgRGVmYXVsdCA9IHtcclxuICAgIHRvZ2dsZTogdHJ1ZSxcclxuICAgIHBhcmVudDogJydcclxuICB9O1xyXG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcclxuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nLFxyXG4gICAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcclxuICB9O1xyXG4gIHZhciBFVkVOVF9TSE9XID0gXCJzaG93XCIgKyBFVkVOVF9LRVk7XHJcbiAgdmFyIEVWRU5UX1NIT1dOID0gXCJzaG93blwiICsgRVZFTlRfS0VZO1xyXG4gIHZhciBFVkVOVF9ISURFID0gXCJoaWRlXCIgKyBFVkVOVF9LRVk7XHJcbiAgdmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVk7XHJcbiAgdmFyIEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gXCJjbGlja1wiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZO1xyXG4gIHZhciBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdyc7XHJcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnO1xyXG4gIHZhciBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZyc7XHJcbiAgdmFyIENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XHJcbiAgdmFyIERJTUVOU0lPTl9XSURUSCA9ICd3aWR0aCc7XHJcbiAgdmFyIERJTUVOU0lPTl9IRUlHSFQgPSAnaGVpZ2h0JztcclxuICB2YXIgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnO1xyXG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSc7XHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xyXG5cclxuICB2YXIgQ29sbGFwc2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGFwc2UoZWxlbWVudCwgY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XHJcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtocmVmPVxcXCIjXCIgKyBlbGVtZW50LmlkICsgXCJcXFwiXSxcIiArIChcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtkYXRhLXRhcmdldD1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl1cIikpKTtcclxuICAgICAgdmFyIHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGVsZW0gPSB0b2dnbGVMaXN0W2ldO1xyXG4gICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKTtcclxuICAgICAgICB2YXIgZmlsdGVyRWxlbWVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbHRlcihmdW5jdGlvbiAoZm91bmRFbGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gZm91bmRFbGVtID09PSBlbGVtZW50O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cclxuICAgICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gLy8gR2V0dGVyc1xyXG5cclxuXHJcbiAgICB2YXIgX3Byb3RvID0gQ29sbGFwc2UucHJvdG90eXBlO1xyXG5cclxuICAgIC8vIFB1YmxpY1xyXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgYWN0aXZlcztcclxuICAgICAgdmFyIGFjdGl2ZXNEYXRhO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICAgIGFjdGl2ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0FDVElWRVMpKS5maWx0ZXIoZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gX3RoaXMuX2NvbmZpZy5wYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGFjdGl2ZXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFjdGl2ZXMpIHtcclxuICAgICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XKTtcclxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpO1xyXG5cclxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhY3RpdmVzKSB7XHJcbiAgICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKSwgJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xyXG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcclxuXHJcbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgJCh0aGlzLl90cmlnZ2VyQXJyYXkpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcclxuXHJcbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSArIFwiIFwiICsgQ0xBU1NfTkFNRV9TSE9XKTtcclxuICAgICAgICBfdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XHJcblxyXG4gICAgICAgIF90aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xyXG4gICAgICB2YXIgc2Nyb2xsU2l6ZSA9IFwic2Nyb2xsXCIgKyBjYXBpdGFsaXplZERpbWVuc2lvbjtcclxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XHJcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdICsgXCJweFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XHJcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSk7XHJcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XHJcblxyXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl0gKyBcInB4XCI7XHJcbiAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpO1xyXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSArIFwiIFwiICsgQ0xBU1NfTkFNRV9TSE9XKTtcclxuICAgICAgdmFyIHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldO1xyXG4gICAgICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRyaWdnZXIpO1xyXG5cclxuICAgICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsZW0gPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xyXG4gICAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcclxuXHJcbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIF90aGlzMi5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgJChfdGhpczIuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSkudHJpZ2dlcihFVkVOVF9ISURERU4pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJyc7XHJcbiAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xyXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgX3Byb3RvLnNldFRyYW5zaXRpb25pbmcgPSBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xyXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcclxuICAgICAgdGhpcy5fY29uZmlnID0gbnVsbDtcclxuICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGw7XHJcbiAgICB9IC8vIFByaXZhdGVcclxuICAgIDtcclxuXHJcbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XHJcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0KSwgY29uZmlnKTtcclxuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXHJcblxyXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKTtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH07XHJcblxyXG4gICAgX3Byb3RvLl9nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBfZ2V0RGltZW5zaW9uKCkge1xyXG4gICAgICB2YXIgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERJTUVOU0lPTl9XSURUSCk7XHJcbiAgICAgIHJldHVybiBoYXNXaWR0aCA/IERJTUVOU0lPTl9XSURUSCA6IERJTUVOU0lPTl9IRUlHSFQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9wcm90by5fZ2V0UGFyZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudCgpIHtcclxuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XHJcblxyXG4gICAgICB2YXIgcGFyZW50O1xyXG5cclxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XHJcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudDsgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnBhcmVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzZWxlY3RvciA9IFwiW2RhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCJdW2RhdGEtcGFyZW50PVxcXCJcIiArIHRoaXMuX2NvbmZpZy5wYXJlbnQgKyBcIlxcXCJdXCI7XHJcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgICAgJChjaGlsZHJlbikuZWFjaChmdW5jdGlvbiAoaSwgZWxlbWVudCkge1xyXG4gICAgICAgIF90aGlzMy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSwgW2VsZW1lbnRdKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9wcm90by5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzID0gZnVuY3Rpb24gX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcclxuICAgICAgdmFyIGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKTtcclxuXHJcbiAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgJCh0cmlnZ2VyQXJyYXkpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcclxuICAgICAgfVxyXG4gICAgfSAvLyBTdGF0aWNcclxuICAgIDtcclxuXHJcbiAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKTtcclxuXHJcbiAgICAgICAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCksICR0aGlzLmRhdGEoKSksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xyXG4gICAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKTtcclxuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKENvbGxhcHNlLCBudWxsLCBbe1xyXG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxyXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gVkVSU0lPTjtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxyXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gRGVmYXVsdDtcclxuICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBDb2xsYXBzZTtcclxuICB9KCk7XHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuXHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XHJcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHRyaWdnZXIgPSAkKHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xyXG4gICAgdmFyIHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHRhcmdldCA9ICQodGhpcyk7XHJcbiAgICAgIHZhciBkYXRhID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKTtcclxuICAgICAgdmFyIGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKTtcclxuXHJcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogalF1ZXJ5XHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG4gICQuZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xyXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDb2xsYXBzZTtcclxuXHJcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcclxuICAgIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBDb2xsYXBzZTtcclxuXHJcbn0pKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcFxyXG5cclxuXHJcbiQoXCIuYWNjX190b2dnbGU6bm90KC5ub3RfdG9nZ2xlKVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICBpZiAoJHRoaXMubmV4dCgpLmhhc0NsYXNzKFwic2hvd1wiKSkge1xyXG4gICAgJHRoaXMubmV4dCgpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICR0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJHRoaXMubmV4dCgpLnNsaWRlVXAoMjAwKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZChcImxpIC5pbm5lclwiKS5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwibGkgLmFjY19fdG9nZ2xlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZChcImxpIC5pbm5lclwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAkdGhpcy5uZXh0KCkudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgJHRoaXMudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkdGhpcy5uZXh0KCkuc2xpZGVUb2dnbGUoMjAwKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIGJpZ1NsaWRlcyA9ICQoXCIubWFpbi1zbGlkZXIgLm93bC1jYXJvdXNlbFwiKSxcclxuICBhdXRvUGxheVRpbWVvdXRTZWMgPSBwYXJzZUludChiaWdTbGlkZXMuZGF0YShcImF1dG9wbGF5LXRpbWVvdXRcIikpO1xyXG5iaWdTbGlkZXMub3dsQ2Fyb3VzZWwoe1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbWFyZ2luOiA1LFxyXG4gIG5hdjogdHJ1ZSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGl0ZW1zOiAxLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5VGltZW91dDogYXV0b1BsYXlUaW1lb3V0U2VjICogMTAwMCxcclxuICBuYXZUZXh0OiBbXHJcbiAgICAnPHN2ZyBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwLjUgMTguMVwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTksMGwxLjQsMS40TDIuOCw5bDcuNiw3LjZMOSwxOC4xTDAsOUMwLDksOS4xLDAsOSwwelwiPjwvcGF0aD48L3N2Zz4nLFxyXG4gICAgJzxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMC41IDE4LjFcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0xLjQsMTguMUwwLDE2LjdsNy42LTcuNkwwLDEuNUwxLjQsMGw5LDkuMUMxMC40LDkuMSwxLjMsMTguMSwxLjQsMTguMXpcIj48L3BhdGg+PC9zdmc+JyxcclxuICBdLFxyXG59KTtcclxudmFyIHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxpdmVyeS1zZWxlY3Rpb24gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbnZhciBjaG9pY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxpdmVyeS1jaG9pY2VcIik7XHJcbnJhZGlvQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidG4pIHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2xpY2tlZCA9IHRoaXM7XHJcbiAgICBjaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY2hvaWNlLmNsYXNzTGlzdC5jb250YWlucyhjbGlja2VkLmlkKSB8fFxyXG4gICAgICAgIGNob2ljZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxpdmVyeS10eXBlLVwiICsgY2xpY2tlZC52YWx1ZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY2hvaWNlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hvaWNlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4kKFwiLnNob3BwaW5nLWNhcnQtaXRlbV9fZGVsZXRlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnBhcmVudChcIi5zaG9wcGluZy1jYXJ0LWl0ZW1cIikucmVtb3ZlKCk7XHJcbn0pO1xyXG4kKFwiLnNsaWRlciAub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG1hcmdpbjogMCxcclxuICBpdGVtczogMSxcclxuICBuYXY6IHRydWUsXHJcbn0pO1xyXG4kKFwiLm5ld3Mtc2xpZGVyIC5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbWFyZ2luOiAwLFxyXG4gIGl0ZW1zOiA0LFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIDA6IHtcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaXRlbXM6IDEsXHJcbiAgICB9LFxyXG4gICAgNDc5OiB7XHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBuYXY6IHRydWUsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICBpdGVtczogMyxcclxuICAgIH0sXHJcbiAgICA5OTI6IHtcclxuICAgICAgaXRlbXM6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4kKFwiLmFjdGlvbi1zbGlkZXIgLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBtYXJnaW46IDIwLFxyXG4gIG5hdjogdHJ1ZSxcclxuICBkb3RzOiBmYWxzZSxcclxuICBpdGVtczogMyxcclxuICByZXNwb25zaXZlOiB7XHJcbiAgICAwOiB7XHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiAxLFxyXG4gICAgfSxcclxuICAgIDQ3OToge1xyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpdGVtczogMixcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgaXRlbXM6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4kKFwiLnBhcnRuZXJzLXNsaWRlciAub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG1hcmdpbjogMCxcclxuICBuYXY6IHRydWUsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgaXRlbXM6IDUsXHJcbiAgcmVzcG9uc2l2ZToge1xyXG4gICAgMDoge1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBpdGVtczogMSxcclxuICAgIH0sXHJcbiAgICA1NjY6IHtcclxuICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaXRlbXM6IDIsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiAzLFxyXG4gICAgfSxcclxuICAgIDkwMDoge1xyXG4gICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpdGVtczogNCxcclxuICAgIH0sXHJcbiAgICA5NTA6IHtcclxuICAgICAgZG90czogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuKCgpID0+IHtcclxuICBjb25zdCBidXR0b25EZWZhdWx0VmlldyA9ICQoXCIuYnV0dG9uMVwiKTtcclxuICBjb25zdCBidXR0b25XaWRlVmlldyA9ICQoXCIuYnV0dG9uMlwiKTtcclxuICBjb25zdCBidXR0b25MaW5lVmlldyA9ICQoXCIuYnV0dG9uM1wiKTtcclxuICBjb25zdCBpdGVtcyA9ICQoXCIucHJvZHVjdC1pdGVtXCIpO1xyXG5cclxuICBidXR0b25XaWRlVmlldy5jbGljaygoZXZlbnQpID0+IHtcclxuICAgIGJ1dHRvbkRlZmF1bHRWaWV3LnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgIGJ1dHRvbkxpbmVWaWV3LnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRhbG9nR3JpZFwiLCBcIndpZGVcIik7XHJcbiAgICBpdGVtcy5yZW1vdmVDbGFzcyhcInByb2R1Y3QtaXRlbS0tbGluZVwiKTtcclxuICAgIGl0ZW1zLmFkZENsYXNzKFwicHJvZHVjdC1pdGVtLS13aWRlXCIpO1xyXG4gIH0pO1xyXG5cclxuICBidXR0b25MaW5lVmlldy5jbGljaygoZXZlbnQpID0+IHtcclxuICAgIGJ1dHRvbldpZGVWaWV3LnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgIGJ1dHRvbkRlZmF1bHRWaWV3LnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRhbG9nR3JpZFwiLCBcIndpZGVcIik7XHJcbiAgICBpdGVtcy5yZW1vdmVDbGFzcyhcInByb2R1Y3QtaXRlbS0td2lkZVwiKTtcclxuICAgIGl0ZW1zLmFkZENsYXNzKFwicHJvZHVjdC1pdGVtLS1saW5lXCIpO1xyXG4gIH0pO1xyXG5cclxuICBidXR0b25EZWZhdWx0Vmlldy5jbGljaygoZXZlbnQpID0+IHtcclxuICAgIGJ1dHRvbldpZGVWaWV3LnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgIGJ1dHRvbkxpbmVWaWV3LnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKTtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJjdXJyZW50XCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRhbG9nR3JpZFwiLCBcImRlZmF1bHRcIik7XHJcbiAgICBpdGVtcy5yZW1vdmVDbGFzcyhcInByb2R1Y3QtaXRlbS0td2lkZVwiKTtcclxuICAgIGl0ZW1zLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1pdGVtLS1saW5lXCIpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmJvdHRvbS1tb2JpbGUtbWVudVwiKSAmJiAkKFwiLmJvdHRvbS1tb2JpbGUtbWVudS1saXN0X2FjdGl2ZVwiKSkge1xyXG4gICAgICAkKFwiLmJvdHRvbS1tb2JpbGUtbWVudS1saXN0X2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImJvdHRvbS1tb2JpbGUtbWVudS1saXN0X2FjdGl2ZVwiKTtcclxuICAgICAgJChcIi5ib3R0b20tbW9iaWxlLW1lbnUtYnV0dG9uX2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImJvdHRvbS1tb2JpbGUtbWVudS1idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNhdGFsb2ctZmlsdGVyLWFjY29yZGlvbiBhLm9wZW5lclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCJ1bDpmaXJzdFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgJChcIltkYXRhLW9wZW4tZHJvcGRvd24tY29udGVudF1cIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50KCk7XHJcbiAgICBwYXJlbnQuZmluZChcIltkYXRhLWNsb3NlLWRyb3Bkb3duLWNvbnRlbnRdXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgdGFyZ2V0LmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiW2RhdGEtY2xvc2UtZHJvcGRvd24tY29udGVudF1cIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50KCk7XHJcbiAgICBwYXJlbnQuZmluZChcIltkYXRhLW9wZW4tZHJvcGRvd24tY29udGVudF1cIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICB0YXJnZXQuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJbZGF0YS10b2dnbGUtYm90dG9tLWRyb3Bkb3duXVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgJChcIi5ib3R0b20tbW9iaWxlLW1lbnUtbGlzdFwiKS50b2dnbGVDbGFzcyhcImJvdHRvbS1tb2JpbGUtbWVudS1saXN0X2FjdGl2ZVwiKTtcclxuICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoXCJib3R0b20tbW9iaWxlLW1lbnUtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIltkYXRhLWNsb3NlLXNlYXJjaC1tb2RhbF1cIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAkKFwiLnNlYXJjaC1tb2RhbC13aW5kb3dcIikucmVtb3ZlQ2xhc3MoXCJkLWJsb2NrXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiW2RhdGEtb3Blbi1zZWFyY2gtbW9kYWxdXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgJChcIi5zZWFyY2gtbW9kYWwtd2luZG93XCIpLmFkZENsYXNzKFwiZC1ibG9ja1wiKTtcclxuICAgICQoXCIuc2VhcmNoLW1vZGFsLXdpbmRvd19faW5wdXRcIikuZm9jdXMoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIltkYXRhLWNsZWFyLWlucHV0LWJ1dHRvbl1cIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKFwiZGF0YS1jbGVhci1pbnB1dC1idXR0b25cIik7XHJcbiAgICAkKGBbZGF0YS1jbGVhci1pbnB1dD1cIiR7aWR9XCJdYCkudmFsKFwiXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmxpa2UtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICAkKFwiLmNpdHktc2VsZWN0aW9uX19saW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuY2l0eS1zZWxlY3Rpb25fX2xpc3RcIikudG9nZ2xlKDApO1xyXG4gIH0pO1xyXG4gICQod2luZG93KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaXR5LXNlbGVjdGlvbl9fbGlua1wiKSkge1xyXG4gICAgICAkKFwiLmNpdHktc2VsZWN0aW9uX19saXN0XCIpLnRvZ2dsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIi5idXJnZXItbWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm1vYmlsZS1tZW51XCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmNhdGFsb2ctaW5uZXItYnRuXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICQoXCIuY2F0YWxvZy1oZWFkZXItY29udGVudFwiKS50b2dnbGUoMCk7XHJcbiAgfSk7XHJcbiAgJChcIi5jYXRhbG9nLWlubmVyLWJ0biwuY2F0YWxvZy1tZW51X19oZWFkIGFcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoXCIuY2F0YWxvZy1tZW51XCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmJ1cmdlci1jYXRhbG9nXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICB9KTtcclxuICAkKFwiLnNoYXJlLWJ0blwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLnNoYXJlLWJsb2NrX19zaG93XCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmNsb3NlLXBhbmVsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuYm90dG9tLXBhbmVsXCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmZpbHRlci1idG4sIC5jbG9zZS1idG4tMlwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmNhdGFsb2ctZmlsdGVyXCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmNhdGFsb2ctc2lkZV9fdGl0bGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5jYXRhbG9nLXNpZGVfX2NvbnRlbnRcIikudG9nZ2xlKDApO1xyXG4gICAgJChcIi5jYXRhbG9nLXNpZGVfX2NvbnRlbnQtYWNjb3JkZW9uXCIpLnRvZ2dsZSgwKTtcclxuICB9KTtcclxuICAkKFwiLmNhdGFsb2ctb3BlbmVkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuY2F0YWxvZy1vcGVuZWQgLnN1Ym1lbnVcIikudG9nZ2xlKDApO1xyXG4gIH0pO1xyXG4gICQoXCIuYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm1lbnUtb25cIik7XHJcbiAgfSk7XHJcbiAgJChcIi5jYXRhbG9nLWlubmVyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgJChcIi5jYXRhbG9nLWlubmVyLWNvbnRlbnRcIikudG9nZ2xlKDApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIHZhciBjdXN0b21TZWxlY3QgPSAkKFwic2VsZWN0LmN1c3RvbS1zZWxlY3RcIik7IC8vIEZJUlNULCBjcmVhdGUgdGhlIGN1c3RvbSBzZWxlY3QgbWVudXMgZnJvbSB0aGUgZXhpc3Rpbmcgc2VsZWN0XHJcblxyXG4gIGN1c3RvbVNlbGVjdC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgIHZhciBsaXN0SUQgPSB0aGF0LmF0dHIoXCJpZFwiKSxcclxuICAgICAgZ3JvdXBzID0gdGhhdC5jaGlsZHJlbihcIm9wdGdyb3VwXCIpLFxyXG4gICAgICB0aGVPcHRpb25zID0gXCJcIixcclxuICAgICAgc3RhcnRpbmdPcHRpb24gPSBcIlwiLFxyXG4gICAgICBjdXN0b21TZWxlY3QgPSBcIlwiOyAvL2NoZWNrIGlmIHRoZXJlIGFyZSBvcHRpb24gZ3JvdXBzXHJcblxyXG4gICAgaWYgKGdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgZ3JvdXBzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJHcm91cCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGN1ck5hbWUgPSBjdXJHcm91cC5hdHRyKFwibGFiZWxcIik7IC8vT3BlbiB0aGUgb3B0aW9uIGdyb3VwXHJcblxyXG4gICAgICAgIHRoZU9wdGlvbnMgKz0gJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+JyArIGN1ck5hbWUgKyBcIjwvbGk+XCI7IC8vZ2V0IHRoZSBvcHRpb25zXHJcblxyXG4gICAgICAgIGN1ckdyb3VwLmNoaWxkcmVuKFwib3B0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGN1ck9wdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICB2YXIgY3VyVmFsID0gY3VyT3B0LmF0dHIoXCJ2YWx1ZVwiKSxcclxuICAgICAgICAgICAgY3VySHRtbCA9IGN1ck9wdC5odG1sKCksXHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBjdXJPcHQuYXR0cihcInNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChpc1NlbGVjdGVkID09PSBcInNlbGVjdGVkXCIpIHtcclxuICAgICAgICAgICAgc3RhcnRpbmdPcHRpb24gPSBjdXJIdG1sO1xyXG4gICAgICAgICAgICB0aGVPcHRpb25zICs9ICc8bGkgY2xhc3M9XCJzZWxlY3RlZFwiIGRhdGEtdmFsdWU9XCInICsgY3VyVmFsICsgJ1wiPicgKyBjdXJIdG1sICsgXCI8L2xpPlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhlT3B0aW9ucyArPSAnPGxpIGRhdGEtdmFsdWU9XCInICsgY3VyVmFsICsgJ1wiPicgKyBjdXJIdG1sICsgXCI8L2xpPlwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAvL0Nsb3NlIHRoZSBvcHRpb24gZ3JvdXBcclxuICAgICAgICAvL3RoZU9wdGlvbnMgKz0gJzxsaSBjbGFzcz1cIm9wdGdyb3VwLWNsb3NlXCI+PC9saT4nO1xyXG4gICAgICB9KTsgLy9hZGQgb3B0aW9ucyBub3QgaW4gYSBncm91cCB0byB0aGUgdG9wIG9mIHRoZSBsaXN0XHJcblxyXG4gICAgICB0aGF0LmNoaWxkcmVuKFwib3B0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJPcHQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBjdXJWYWwgPSBjdXJPcHQuYXR0cihcInZhbHVlXCIpLFxyXG4gICAgICAgICAgY3VySHRtbCA9IGN1ck9wdC5odG1sKCksXHJcbiAgICAgICAgICBpc1NlbGVjdGVkID0gY3VyT3B0LmF0dHIoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQgPT09IFwic2VsZWN0ZWRcIikge1xyXG4gICAgICAgICAgc3RhcnRpbmdPcHRpb24gPSBjdXJIdG1sO1xyXG4gICAgICAgICAgdGhlT3B0aW9ucyA9XHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3RlZFwiIGRhdGEtdmFsdWU9XCInICsgY3VyVmFsICsgJ1wiPicgKyBjdXJIdG1sICsgXCI8L2xpPlwiICsgdGhlT3B0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhlT3B0aW9ucyA9ICc8bGkgZGF0YS12YWx1ZT1cIicgKyBjdXJWYWwgKyAnXCI+JyArIGN1ckh0bWwgKyBcIjwvbGk+XCIgKyB0aGVPcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LmNoaWxkcmVuKFwib3B0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJPcHQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBjdXJWYWwgPSBjdXJPcHQuYXR0cihcInZhbHVlXCIpLFxyXG4gICAgICAgICAgY3VySHRtbCA9IGN1ck9wdC5odG1sKCksXHJcbiAgICAgICAgICBpc1NlbGVjdGVkID0gY3VyT3B0LmF0dHIoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQgPT09IFwic2VsZWN0ZWRcIikge1xyXG4gICAgICAgICAgc3RhcnRpbmdPcHRpb24gPSBjdXJIdG1sO1xyXG4gICAgICAgICAgdGhlT3B0aW9ucyArPSAnPGxpIGNsYXNzPVwic2VsZWN0ZWRcIiBkYXRhLXZhbHVlPVwiJyArIGN1clZhbCArICdcIj4nICsgY3VySHRtbCArIFwiPC9saT5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhlT3B0aW9ucyArPSAnPGxpIGRhdGEtdmFsdWU9XCInICsgY3VyVmFsICsgJ1wiPicgKyBjdXJIdG1sICsgXCI8L2xpPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IC8vYnVpbGQgdGhlIGN1c3RvbSBzZWxlY3RcclxuXHJcbiAgICBjdXN0b21TZWxlY3QgPVxyXG4gICAgICAnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJkcm9wZG93bi1zZWxlY3QgZW50eXBvLWRvd24tb3Blbi1iaWdcIj48c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiN0YWItYXJyb3dcIj48L3VzZT48L3N2Zz48c3Bhbj4nICtcclxuICAgICAgc3RhcnRpbmdPcHRpb24gK1xyXG4gICAgICAnPC9zcGFuPjwvZGl2Pjx1bCBjbGFzcz1cImRyb3Bkb3duLXNlbGVjdC11bFwiIGRhdGEtcm9sZT1cIicgK1xyXG4gICAgICBsaXN0SUQgK1xyXG4gICAgICAnXCI+JyArXHJcbiAgICAgIHRoZU9wdGlvbnMgK1xyXG4gICAgICBcIjwvdWw+PC9kaXY+IDwhLS0gLmN1c3RvbS1zZWxlY3Qtd3JhcHBlciAtLT5cIjsgLy9hcHBlbmQgaXQgYWZ0ZXIgdGhlIGFjdHVhbCBzZWxlY3RcclxuXHJcbiAgICAkKGN1c3RvbVNlbGVjdCkuaW5zZXJ0QWZ0ZXIodGhhdCk7XHJcbiAgfSk7XHJcbiAgdmFyIHNlbGVjdGRkID0gJChcIi5kcm9wZG93bi1zZWxlY3RcIiksXHJcbiAgICBzZWxlY3R1bCA9ICQoXCIuZHJvcGRvd24tc2VsZWN0LXVsXCIpLFxyXG4gICAgc2VsZWN0bGkgPSAkKFwiLmRyb3Bkb3duLXNlbGVjdC11bCBsaVwiKTsgLy9USEVOIG1ha2UgdGhlbSB3b3JrXHJcblxyXG4gIHNlbGVjdGRkLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoXCIuZHJvcGRvd24tY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pOyAvL0hpZGUgaXQgb24gbW91c2VsZWF2ZVxyXG5cclxuICBzZWxlY3R1bC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoXCIuZHJvcGRvd24tY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pOyAvL3NlbGVjdCB0aGUgb3B0aW9uXHJcblxyXG4gIHNlbGVjdGxpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRoYXQgPSAkKHRoaXMpOyAvL2Vuc3VyZSBjbGlja2luZyBncm91cCBsYWJlbHMgZG9lcyBub3QgY2F1c2UgY2hhbmdlXHJcblxyXG4gICAgaWYgKCF0aGF0Lmhhc0NsYXNzKFwib3B0Z3JvdXBcIikpIHtcclxuICAgICAgdmFyIHBhcmVudFVsID0gdGhhdC5wYXJlbnQoXCJ1bFwiKSxcclxuICAgICAgICB0aGlzZGQgPSBwYXJlbnRVbC5zaWJsaW5ncyhcIi5kcm9wZG93bi1zZWxlY3RcIiksXHJcbiAgICAgICAgbGlodG1sID0gdGhhdC5odG1sKCksXHJcbiAgICAgICAgbGl2YWx1ZSA9IHRoYXQuYXR0cihcImRhdGEtdmFsdWVcIiksXHJcbiAgICAgICAgb3JpZ2luYWxTZWxlY3QgPSBcIiNcIiArIHBhcmVudFVsLmF0dHIoXCJkYXRhLXJvbGVcIik7IC8vY2xvc2UgdGhlIGRyb3Bkb3duXHJcblxyXG4gICAgICBwYXJlbnRVbC5wYXJlbnQoXCIuZHJvcGRvd24tY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpOyAvL3JlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIGFsbCBsaXN0IGl0ZW1zXHJcblxyXG4gICAgICB0aGF0LnNpYmxpbmdzKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTsgLy9hZGQgLnNlbGVjdGVkIHRvIGNsaWNrZWQgbGlcclxuXHJcbiAgICAgIHRoYXQuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTsgLy9zZXQgdGhlIHZhbHVlIG9mIHRoZSBoaWRkZW4gaW5wdXRcclxuXHJcbiAgICAgICQob3JpZ2luYWxTZWxlY3QpLnZhbChsaXZhbHVlKTsgLy9jaGFuZ2UgdGhlIGRyb3Bkb3duIHRleHRcclxuXHJcbiAgICAgIHRoaXNkZC5jaGlsZHJlbihcInNwYW5cIikuaHRtbChsaWh0bWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeSgpIHtcclxuICBpZiAoJC5mYW5jeWJveCkge1xyXG4gICAgJChcIi5vd2wtaXRlbSBbZGF0YS1mYW5jeWJveF1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkc2VsZWN0b3IgPSAkKHRoaXMpXHJcbiAgICAgIC5wYXJlbnRzKFwiLm93bC1jYXJvdXNlbFwiKVxyXG4gICAgICAuZmluZChcIi5vd2wtaXRlbTpub3QoLmNsb25lZCkgW2RhdGEtZmFuY3lib3hdXCIpO1xyXG4gICAgICAkLmZhbmN5Ym94Lm9wZW4oXHJcbiAgICAgICAgJHNlbGVjdG9yLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlbGVjdG9yOiAkc2VsZWN0b3IsXHJcbiAgICAgICAgICBiYWNrRm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJHNlbGVjdG9yLmluZGV4KHRoaXMpXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gIHZhciAkaGVhZGVyID0gJChcImhlYWRlclwiKSxcclxuICAgIGhlaWdodCxcclxuICAgIHNjcm9sbDtcclxuICBsZXQgaXNUaHJvdHRsZWQgPSBmYWxzZTtcclxuICBjaGVjaygpO1xyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGlzVGhyb3R0bGVkKSByZXR1cm47XHJcbiAgICBpc1Rocm90dGxlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2hlY2soKTtcclxuICAgICAgaXNUaHJvdHRsZWQgPSBmYWxzZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xyXG4gICAgaWYgKCEkaGVhZGVyLmhhc0NsYXNzKFwiaGVhZGVyX2xhbmRpbmdcIikpIHtcclxuICAgICAgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICBoZWlnaHQgPSAkaGVhZGVyLmhlaWdodCgpO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbCA+IGhlaWdodCkge1xyXG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0gLy9nYWxsZXJ5XHJcblxyXG5mdW5jdGlvbiBob21lQmFubmVyKCkge1xyXG4gIHZhciAkc2xpZGVyID0gJChcIi5ob21lLWJhbm5lciAub3dsLWNhcm91c2VsXCIpLFxyXG4gICAgYXJyb3dQcmV2ID1cclxuICAgICAgJzxzdmcgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMC41IDE4LjFcIj48cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk05LDBsMS40LDEuNEwyLjgsOWw3LjYsNy42TDksMTguMUwwLDlDMCw5LDkuMSwwLDksMHpcIj48L3BhdGg+PC9zdmc+JyxcclxuICAgIGFycm93TmV4dCA9XHJcbiAgICAgICc8c3ZnIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAuNSAxOC4xXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMS40LDE4LjFMMCwxNi43bDcuNi03LjZMMCwxLjVMMS40LDBsOSw5LjFDMTAuNCw5LjEsMS4zLDE4LjEsMS40LDE4LjF6XCI+PC9wYXRoPjwvc3ZnPic7XHJcblxyXG4gIGlmICgkc2xpZGVyLmxlbmd0aCkge1xyXG4gICAgJHNsaWRlci5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgc21hcnRTcGVlZDogNTAwLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpdGVtczogMSxcclxuICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBhdXRvcGxheVRpbWVvdXQ6ICgrJHNsaWRlci5kYXRhKFwiYXV0b3BsYXktdGltZW91dFwiKSB8fCA1KSAqIDEwMDAsXHJcbiAgICAgIG5hdlRleHQ6IFthcnJvd1ByZXYsIGFycm93TmV4dF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICBjb25zdCBrZXlwcmVzc1NsaWRlcnMgPSAkKFwiLnJhbmdlLXNsaWRlclwiKTtcclxuICAkKGtleXByZXNzU2xpZGVycykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGtleXByZXNzU2xpZGVyKSB7XHJcbiAgICBjb25zdCBmaWVsZF9uYW1lID0gJChrZXlwcmVzc1NsaWRlcikuZGF0YShcIm5hbWVcIik7XHJcbiAgICBjb25zdCBpbnB1dDAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX1wiICsgZmllbGRfbmFtZSArIFwiXzBcIik7XHJcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX1wiICsgZmllbGRfbmFtZSArIFwiXzFcIik7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBbaW5wdXQwLCBpbnB1dDFdO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0VmFsID0gaW5wdXQwID8gcGFyc2VJbnQoaW5wdXQwLmRhdGFzZXQuY3VycmVudFZhbHVlKSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGVuZFZhbCA9IGlucHV0MSA/IHBhcnNlSW50KGlucHV0MS5kYXRhc2V0LmN1cnJlbnRWYWx1ZSkgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBtaW5WYWwgPSBpbnB1dDAgPyBwYXJzZUludChpbnB1dDAuZGF0YXNldC5taW5WYWx1ZSkgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBtYXhWYWwgPSBpbnB1dDEgPyBwYXJzZUludChpbnB1dDEuZGF0YXNldC5tYXhWYWx1ZSkgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgbGV0IHBvc3RmaXggPSBcIlwiO1xyXG5cclxuICAgIGlmIChmaWVsZF9uYW1lID09IFwicHJpY2VfcmFuZ2VcIikge1xyXG4gICAgICBwb3N0Zml4ID0gXCIg4oK9XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBub1VpU2xpZGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKGtleXByZXNzU2xpZGVyLCB7XHJcbiAgICAgICAgc3RhcnQ6IFtzdGFydFZhbCwgZW5kVmFsXSxcclxuICAgICAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICBtaW46IG1pblZhbCxcclxuICAgICAgICAgIG1heDogbWF4VmFsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiB3TnVtYih7XHJcbiAgICAgICAgICBkZWNpbWFsczogMCxcclxuICAgICAgICAgIHRob3VzYW5kOiBcIiBcIixcclxuICAgICAgICAgIHBvc3RmaXg6IHBvc3RmaXgsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleXByZXNzU2xpZGVyICE9PSBudWxsICYmIGtleXByZXNzU2xpZGVyLm5vVWlTbGlkZXIpIHtcclxuICAgICAga2V5cHJlc3NTbGlkZXIubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICBpbnB1dHNbaGFuZGxlXS52YWx1ZSA9IHZhbHVlc1toYW5kbGVdO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTbGlkZXJIYW5kbGUoaSwgdmFsdWUpIHtcclxuICAgICAgbGV0IHIgPSBbbnVsbCwgbnVsbF07XHJcbiAgICAgIHJbaV0gPSB2YWx1ZTtcclxuICAgICAga2V5cHJlc3NTbGlkZXIubm9VaVNsaWRlci5zZXQocik7XHJcbiAgICB9IC8vIExpc3RlbiB0byBrZXlkb3duIGV2ZW50cyBvbiB0aGUgaW5wdXQgZmllbGQuXHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0LCBoYW5kbGUpIHtcclxuICAgICAgaWYgKGlucHV0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldFNsaWRlckhhbmRsZShoYW5kbGUsIHRoaXMudmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0ga2V5cHJlc3NTbGlkZXIubm9VaVNsaWRlci5nZXQoKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBOdW1iZXIodmFsdWVzW2hhbmRsZV0pOyAvLyBbW2hhbmRsZTBfZG93biwgaGFuZGxlMF91cF0sIFtoYW5kbGUxX2Rvd24sIGhhbmRsZTFfdXBdXVxyXG5cclxuICAgICAgICBsZXQgc3RlcHMgPSBrZXlwcmVzc1NsaWRlci5ub1VpU2xpZGVyLnN0ZXBzKCk7IC8vIFtkb3duLCB1cF1cclxuXHJcbiAgICAgICAgbGV0IHN0ZXAgPSBzdGVwc1toYW5kbGVdO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbjsgLy8gMTMgaXMgZW50ZXIsXHJcbiAgICAgICAgLy8gMzggaXMga2V5IHVwLFxyXG4gICAgICAgIC8vIDQwIGlzIGtleSBkb3duLlxyXG5cclxuICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgIHNldFNsaWRlckhhbmRsZShoYW5kbGUsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAvLyBHZXQgc3RlcCB0byBnbyBpbmNyZWFzZSBzbGlkZXIgdmFsdWUgKHVwKVxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHN0ZXBbMV07IC8vIGZhbHNlID0gbm8gc3RlcCBpcyBzZXRcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbiA9IDE7XHJcbiAgICAgICAgICAgIH0gLy8gbnVsbCA9IGVkZ2Ugb2Ygc2xpZGVyXHJcblxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICBzZXRTbGlkZXJIYW5kbGUoaGFuZGxlLCB2YWx1ZSArIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBzdGVwWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uID0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVySGFuZGxlKGhhbmRsZSwgdmFsdWUgLSBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAvLyBUaGlzIHdpbGwgc2VsZWN0IGV2ZXJ5dGhpbmcgd2l0aCB0aGUgY2xhc3Mgc21vb3RoU2Nyb2xsXHJcbiAgLy8gVGhpcyBzaG91bGQgcHJldmVudCBwcm9ibGVtcyB3aXRoIGNhcm91c2VsLCBzY3JvbGxzcHksIGV0Yy4uLlxyXG4gICQoXCIuc21vb3RoU2Nyb2xsXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChcclxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpICYmXHJcbiAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcclxuICAgICkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJChcIltuYW1lPVwiICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgXCJdXCIpO1xyXG5cclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAxMDAwXHJcbiAgICAgICAgKTsgLy8gVGhlIG51bWJlciBoZXJlIHJlcHJlc2VudHMgdGhlIHNwZWVkIG9mIHRoZSBzY3JvbGwgaW4gbWlsbGlzZWNvbmRzXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICB2YXIgc3luYzEgPSAkKFwiI3N5bmMxXCIpO1xyXG4gIHZhciBzeW5jMiA9ICQoXCIjc3luYzJcIik7XHJcbiAgdmFyIHNsaWRlc1BlclBhZ2UgPSAzOyAvL2dsb2JhbHkgZGVmaW5lIG51bWJlciBvZiBlbGVtZW50cyBwZXIgcGFnZVxyXG5cclxuICB2YXIgc3luY2VkU2Vjb25kYXJ5ID0gdHJ1ZTtcclxuICBzeW5jMVxyXG4gIC5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlU3BlZWQ6IDIwMDAsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICB9KVxyXG4gIC5vbihcImNoYW5nZWQub3dsLmNhcm91c2VsXCIsIHN5bmNQb3NpdGlvbik7XHJcbiAgc3luYzJcclxuICAub24oXCJpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgc3luYzIuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgfSlcclxuICAub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IHNsaWRlc1BlclBhZ2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIHNtYXJ0U3BlZWQ6IDIwMCxcclxuICAgIHNsaWRlU3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlQnk6IHNsaWRlc1BlclBhZ2UsXHJcbiAgICAvL2FsdGVybmF0aXZlbHkgeW91IGNhbiBzbGlkZSBieSAxLCB0aGlzIHdheSB0aGUgYWN0aXZlIHNsaWRlIHdpbGwgc3RpY2sgdG8gdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIHNlY29uZCBjYXJvdXNlbFxyXG4gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAxMDAsXHJcbiAgfSlcclxuICAub24oXCJjaGFuZ2VkLm93bC5jYXJvdXNlbFwiLCBzeW5jUG9zaXRpb24yKTtcclxuXHJcbiAgZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKSB7XHJcbiAgICAvL2lmIHlvdSBzZXQgbG9vcCB0byBmYWxzZSwgeW91IGhhdmUgdG8gcmVzdG9yZSB0aGlzIG5leHQgbGluZVxyXG4gICAgLy92YXIgY3VycmVudCA9IGVsLml0ZW0uaW5kZXg7XHJcbiAgICAvL2lmIHlvdSBkaXNhYmxlIGxvb3AgeW91IGhhdmUgdG8gY29tbWVudCB0aGlzIGJsb2NrXHJcbiAgICB2YXIgY291bnQgPSBlbC5pdGVtLmNvdW50IC0gMTtcclxuICAgIHZhciBjdXJyZW50ID0gTWF0aC5yb3VuZChlbC5pdGVtLmluZGV4IC0gZWwuaXRlbS5jb3VudCAvIDIgLSAwLjUpO1xyXG5cclxuICAgIGlmIChjdXJyZW50IDwgMCkge1xyXG4gICAgICBjdXJyZW50ID0gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnQgPiBjb3VudCkge1xyXG4gICAgICBjdXJyZW50ID0gMDtcclxuICAgIH0gLy9lbmQgYmxvY2tcclxuXHJcbiAgICBzeW5jMi5maW5kKFwiLm93bC1pdGVtXCIpLnJlbW92ZUNsYXNzKFwiY3VycmVudFwiKS5lcShjdXJyZW50KS5hZGRDbGFzcyhcImN1cnJlbnRcIik7XHJcbiAgICB2YXIgb25zY3JlZW4gPSBzeW5jMi5maW5kKFwiLm93bC1pdGVtLmFjdGl2ZVwiKS5sZW5ndGggLSAxO1xyXG4gICAgdmFyIHN0YXJ0ID0gc3luYzIuZmluZChcIi5vd2wtaXRlbS5hY3RpdmVcIikuZmlyc3QoKS5pbmRleCgpO1xyXG4gICAgdmFyIGVuZCA9IHN5bmMyLmZpbmQoXCIub3dsLWl0ZW0uYWN0aXZlXCIpLmxhc3QoKS5pbmRleCgpO1xyXG5cclxuICAgIGlmIChjdXJyZW50ID4gZW5kKSB7XHJcbiAgICAgIHN5bmMyLmRhdGEoXCJvd2wuY2Fyb3VzZWxcIikudG8oY3VycmVudCwgMTAwLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudCA8IHN0YXJ0KSB7XHJcbiAgICAgIHN5bmMyLmRhdGEoXCJvd2wuY2Fyb3VzZWxcIikudG8oY3VycmVudCAtIG9uc2NyZWVuLCAxMDAsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3luY1Bvc2l0aW9uMihlbCkge1xyXG4gICAgaWYgKHN5bmNlZFNlY29uZGFyeSkge1xyXG4gICAgICB2YXIgbnVtYmVyID0gZWwuaXRlbS5pbmRleDtcclxuICAgICAgc3luYzEuZGF0YShcIm93bC5jYXJvdXNlbFwiKS50byhudW1iZXIsIDEwMCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzeW5jMi5vbihcImNsaWNrXCIsIFwiLm93bC1pdGVtXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgbnVtYmVyID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgc3luYzEuZGF0YShcIm93bC5jYXJvdXNlbFwiKS50byhudW1iZXIsIDMwMCwgdHJ1ZSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChcIi50YWItY29udGVudFwiKS5oaWRlKCk7XHJcbiQoXCIudGFiLWNvbnRlbnQ6Zmlyc3RcIikuc2hvdygpO1xyXG4vKiBpZiBpbiB0YWIgbW9kZSAqL1xyXG5cclxuJChcInVsLnRhYnMgbGksLnByb2R1Y3QtY2FyZF9fcmV2aWV3LWxpbmsgYSwuc2NoZWR1bGUtYnRuIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQoXCIudGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4gIHZhciBhY3RpdmVUYWIgPSAkKHRoaXMpLmF0dHIoXCJyZWxcIik7XHJcbiAgJChcIiNcIiArIGFjdGl2ZVRhYikuZmFkZUluKCk7XHJcbiAgJChcInVsLnRhYnMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAkKFwiLnRhYl9kcmF3ZXJfaGVhZGluZ1wiKS5yZW1vdmVDbGFzcyhcImRfYWN0aXZlXCIpO1xyXG4gICQoXCIudGFiX2RyYXdlcl9oZWFkaW5nW3JlbF49J1wiICsgYWN0aXZlVGFiICsgXCInXVwiKS5hZGRDbGFzcyhcImRfYWN0aXZlXCIpO1xyXG59KTtcclxuLyogaWYgaW4gZHJhd2VyIG1vZGUgKi9cclxuXHJcbiQoXCIudGFiX2RyYXdlcl9oZWFkaW5nXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZF9hY3RpdmVUYWIgPSAkKHRoaXMpLmF0dHIoXCJyZWxcIiksXHJcbiAgICBhY3RpdmVUYWJCbG9jayA9ICQoXCIjXCIgKyBkX2FjdGl2ZVRhYiArIFwiOmhpZGRlblwiKSxcclxuICAgICR0aGlzQWN0aXZlID0gJCh0aGlzKS5ub3QoXCIuZF9hY3RpdmVcIik7XHJcbiAgJChcIi50YWItY29udGVudFwiKS5oaWRlKCk7XHJcbiAgYWN0aXZlVGFiQmxvY2suZmFkZUluKCk7XHJcbiAgJChcIi50YWJfZHJhd2VyX2hlYWRpbmdcIikucmVtb3ZlQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxuICAkdGhpc0FjdGl2ZS5hZGRDbGFzcyhcImRfYWN0aXZlXCIpO1xyXG4gICQoXCJ1bC50YWJzIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICQoXCJ1bC50YWJzIGxpW3JlbF49J1wiICsgZF9hY3RpdmVUYWIgKyBcIiddXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuLyogRXh0cmEgY2xhc3MgXCJ0YWJfbGFzdFwiXHJcbiB0byBhZGQgYm9yZGVyIHRvIHJpZ2h0IHNpZGVcclxuIG9mIGxhc3QgdGFiICovXHJcblxyXG4kKFwidWwudGFicyBsaVwiKS5sYXN0KCkuYWRkQ2xhc3MoXCJ0YWJfbGFzdFwiKTtcclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgalF1ZXJ5KFwiLnNjaGVkdWxlLWJ0biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGpRdWVyeShcIi5zY2hlZHVsZS1saW5rXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59KTtcclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgalF1ZXJ5KFwiLnByb2R1Y3QtY2FyZF9fcmV2aWV3LWxpbmsgYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBqUXVlcnkoXCIucmV2aWV3LXRhYi1saW5rXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59KTsgLy9zbGlkZXNob3dcclxuXHJcbiQoXCIudGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4kKFwiLnRhYi1jb250ZW50OmZpcnN0XCIpLnNob3coKTtcclxuLyogaWYgaW4gdGFiIG1vZGUgKi9cclxuXHJcbiQoXCJ1bC50YWJzIGxpLC5wcm9kdWN0LWNhcmRfX3Jldmlldy1saW5rIGEsLnNjaGVkdWxlLWJ0biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKFwiLnRhYi1jb250ZW50XCIpLmhpZGUoKTtcclxuICB2YXIgYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKFwicmVsXCIpO1xyXG4gICQoXCIjXCIgKyBhY3RpdmVUYWIpLmZhZGVJbigpO1xyXG4gICQoXCJ1bC50YWJzIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgJChcIi50YWJfZHJhd2VyX2hlYWRpbmdcIikucmVtb3ZlQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxuICAkKFwiLnRhYl9kcmF3ZXJfaGVhZGluZ1tyZWxePSdcIiArIGFjdGl2ZVRhYiArIFwiJ11cIikuYWRkQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxufSk7XHJcbi8qIGlmIGluIGRyYXdlciBtb2RlICovXHJcblxyXG4kKFwiLnRhYl9kcmF3ZXJfaGVhZGluZ1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGRfYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKFwicmVsXCIpLFxyXG4gICAgYWN0aXZlVGFiQmxvY2sgPSAkKFwiI1wiICsgZF9hY3RpdmVUYWIgKyBcIjpoaWRkZW5cIiksXHJcbiAgICAkdGhpc0FjdGl2ZSA9ICQodGhpcykubm90KFwiLmRfYWN0aXZlXCIpO1xyXG4gICQoXCIudGFiLWNvbnRlbnRcIikuaGlkZSgpO1xyXG4gIGFjdGl2ZVRhYkJsb2NrLmZhZGVJbigpO1xyXG4gICQoXCIudGFiX2RyYXdlcl9oZWFkaW5nXCIpLnJlbW92ZUNsYXNzKFwiZF9hY3RpdmVcIik7XHJcbiAgJHRoaXNBY3RpdmUuYWRkQ2xhc3MoXCJkX2FjdGl2ZVwiKTtcclxuICAkKFwidWwudGFicyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAkKFwidWwudGFicyBsaVtyZWxePSdcIiArIGRfYWN0aXZlVGFiICsgXCInXVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxufSk7XHJcbi8qIEV4dHJhIGNsYXNzIFwidGFiX2xhc3RcIlxyXG4gdG8gYWRkIGJvcmRlciB0byByaWdodCBzaWRlXHJcbiBvZiBsYXN0IHRhYiAqL1xyXG5cclxuJChcInVsLnRhYnMgbGlcIikubGFzdCgpLmFkZENsYXNzKFwidGFiX2xhc3RcIik7XHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGpRdWVyeShcIi5zY2hlZHVsZS1idG4gYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBqUXVlcnkoXCIuc2NoZWR1bGUtbGlua1wiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7XHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGpRdWVyeShcIi5wcm9kdWN0LWNhcmRfX3Jldmlldy1saW5rIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgalF1ZXJ5KFwiLnJldmlldy10YWItbGlua1wiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7IC8vc2xpZGVzaG93XHJcblxyXG5cclxuJCgoKSA9PiB7XHJcbiAgaWYgKCEkKFwiW2RhdGEtYm9va2luZy10b29sdGlwLWNvbnRlbnRdXCIpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b29sdGlwQ29udGVudCA9ICQoXCJbZGF0YS1ib29raW5nLXRvb2x0aXAtY29udGVudF1cIik7XHJcbiAgY29uc3QgY2xvbmVkVG9vbHRpcENvbnRlbnQgPSB0b29sdGlwQ29udGVudC5jbG9uZSgpO1xyXG4gIHRvb2x0aXBDb250ZW50LnJlbW92ZSgpO1xyXG5cclxuICB0aXBweShcIltkYXRhLWJvb2tpbmctdG9vbHRpcF1cIiwge1xyXG4gICAgY29udGVudDogY2xvbmVkVG9vbHRpcENvbnRlbnQuaHRtbCgpLFxyXG4gICAgYWxsb3dIVE1MOiB0cnVlLFxyXG4gICAgcGxhY2VtZW50OiBcInRvcC1zdGFydFwiLFxyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgZGVsYXk6IFsxMDAsIDIwMF0sXHJcbiAgICBvbk1vdW50KGluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9ICQoaW5zdGFuY2UucmVmZXJlbmNlKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0YXJnZXRcclxuICAgICAgICAucGFyZW50KClcclxuICAgICAgICAucGFyZW50KClcclxuICAgICAgICAuZmluZChcIltkYXRhLWJvb2tpbmctdGl0bGVdXCIpXHJcbiAgICAgICAgLmF0dHIoXCJkYXRhLWJvb2tpbmctdGl0bGVcIik7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSB0YXJnZXQuYXR0cihcImRhdGEtYm9va2luZy10aW1lXCIpO1xyXG4gICAgICBjb25zdCBhY3Rpb24gPSB0YXJnZXQuYXR0cihcImRhdGEtc3VibWl0LXVybFwiKTtcclxuICAgICAgY29uc3QgYnV0dG9uID0gJChcIltkYXRhLWJvb2tpbmctdG9vbHRpcC1idXR0b25dXCIpO1xyXG4gICAgICBjb25zdCB0aW1lUGF0dGVybiA9IC9cXC9cXGR7NH0tXFxkezJ9LVxcZHsyfVxcL1xcZCsoPzpcXC9cXGQrKT9cXC8/JC87XHJcbiAgICAgIGNvbnN0IGlzVGltZSA9IHRpbWVQYXR0ZXJuLnRlc3QoYWN0aW9uKVxyXG4gICAgICBjb25zdCBkYXRlUGF0dGVybiA9IC9cXGR7NH0tXFxkezJ9LVxcZHsyfS87XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gYWN0aW9uLm1hdGNoKGRhdGVQYXR0ZXJuKTtcclxuICAgICAgY29uc3QgZGF0ZSA9IG1hdGNoID8gbmV3IERhdGUobWF0Y2hbMF0pLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgYnV0dG9uLmF0dHIoXCJkYXRhLWJvb2tpbmctdG9vbHRpcC1idXR0b24tdGltZVwiLCB0aW1lKTtcclxuICAgICAgYnV0dG9uLmF0dHIoXCJkYXRhLWJvb2tpbmctdG9vbHRpcC1idXR0b24tdGl0bGVcIiwgdGl0bGUpO1xyXG4gICAgICAkKFwiW2RhdGEtYm9va2luZy10b29sdGlwLXRpdGxlXVwiKS50ZXh0KHRpdGxlKTtcclxuICAgICAgJChcIltkYXRhLWJvb2tpbmctdG9vbHRpcC10aW1lXVwiKS50ZXh0KHRpbWUpO1xyXG4gICAgICAkKFwiW2RhdGEtYm9va2luZy10b29sdGlwLWJ1dHRvbl1cIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gJChcIiNib29raW5nLWZvcm1cIik7XHJcbiAgICAgICAgJChcIltkYXRhLWJvb2tpbmctaXRlbS1zZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcclxuICAgICAgICAgIFwiZGF0YS1ib29raW5nLWl0ZW0tc2VsZWN0ZWRcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGFyZ2V0LmF0dHIoXCJkYXRhLWJvb2tpbmctaXRlbS1zZWxlY3RlZFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFmb3JtLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGZvcm0uZmluZChcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uXCIpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBmb3JtLmF0dHIoXCJhY3Rpb25cIiwgYWN0aW9uKTtcclxuICAgICAgICBpZiAoaXNUaW1lICYmIGRhdGUpIHtcclxuICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgLmZpbmQoJ1tuYW1lPVwibWVzc2FnZVwiXScpXHJcbiAgICAgICAgICAgIC52YWwoYNCl0L7Rh9GDINC30LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMOiAke3RpdGxlfSwg0LTQsNGC0LA6ICR7ZGF0ZX0sINCy0YDQtdC80Y86ICR7dGltZX0gXFxu0JrQvtC7LdCy0L4g0LPQvtGB0YLQtdC5OiAtYCk7XHJcbiAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiW2RhdGEtYm9va2luZy1mb3JtXVwiKS5vZmZzZXQoKS50b3AgLSAyMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICAgIGZvcm1cclxuICAgICAgICAgICAgLmZpbmQoJ1tuYW1lPVwibWVzc2FnZVwiXScpXHJcbiAgICAgICAgICAgIC52YWwoYNCl0L7Rh9GDINC30LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMOiAke3RpdGxlfSwg0LTQsNGC0LA6ICR7ZGF0ZX0gXFxu0JrQvtC7LdCy0L4g0LPQvtGB0YLQtdC5OiAtYCk7XHJcbiAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiW2RhdGEtYm9va2luZy1mb3JtXVwiKS5vZmZzZXQoKS50b3AgLSAyMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1cclxuICAgICAgICAgIC5maW5kKCdbbmFtZT1cIm1lc3NhZ2VcIl0nKVxyXG4gICAgICAgICAgLnZhbChg0KXQvtGH0YMg0LfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw6ICR7dGl0bGV9LCAke3RpbWV9ICBcXG7QmtC+0Lst0LLQviDQs9C+0YHRgtC10Lk6IC1gKTtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCJbZGF0YS1ib29raW5nLWZvcm1dXCIpLm9mZnNldCgpLnRvcCAtIDIwMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gICQoXCJbZGF0YS1ib29raW5nLXNjcm9sbF1cIikuc2Nyb2xsKChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFNjcm9sbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2Nyb2xsTGVmdCgpO1xyXG4gICAgaWYgKGN1cnJlbnRTY3JvbGwgPiAxKSB7XHJcbiAgICAgICQoXCJbZGF0YS1ib29raW5nLW1vYmlsZS10aXRsZXNdXCIpLmF0dHIoXHJcbiAgICAgICAgXCJkYXRhLWJvb2tpbmctbW9iaWxlLXRpdGxlcy1hY3RpdmVcIixcclxuICAgICAgICBcIlwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCJbZGF0YS1ib29raW5nLW1vYmlsZS10aXRsZXMtYWN0aXZlXVwiKS5yZW1vdmVBdHRyKFxyXG4gICAgICBcImRhdGEtYm9va2luZy1tb2JpbGUtdGl0bGVzLWFjdGl2ZVwiXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhcHBlbmRNb2JpbGVUaXRsZXMgPSAoKSA9PiB7XHJcbiAgICAkKFwiW2RhdGEtYm9va2luZy10aXRsZV1cIikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gJChlbGVtZW50KTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0YXJnZXQuY2xvbmUoKTtcclxuICAgICAgdGl0bGUuY3NzKHsgXCJtaW4taGVpZ2h0XCI6IHRhcmdldC5oZWlnaHQoKSB9KTtcclxuICAgICAgJChcIltkYXRhLWJvb2tpbmctbW9iaWxlLXRpdGxlc11cIikuYXBwZW5kKHRpdGxlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgYXBwZW5kTW9iaWxlVGl0bGVzKCk7XHJcbn0pO1xyXG5cclxuJCgoKSA9PiB7XHJcbiAgY29uc3QgY3VzdG9tQ29sbGFwc2VTZXR1cCA9ICgpID0+IHtcclxuICAgIEFycmF5LmZyb20oJChcIltkYXRhLWN1c3RvbS1jb2xsYXBzZV1cIikpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbGxhcHNlID0gJChlbGVtZW50KVxyXG4gICAgICBjb25zdCBjb2xsYXBzZUlkID0gY29sbGFwc2UuYXR0cihcImRhdGEtY3VzdG9tLWNvbGxhcHNlXCIpO1xyXG4gICAgICBjb25zdCBjb2xsYXBzZUNoaWxkcmVuID0gY29sbGFwc2UuY2hpbGRyZW4oKTtcclxuICAgICAgbGV0IGNvbGxhcHNlQ2hpbGRyZW5IZWlnaHQgPSAwO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjb2xsYXBzZUNoaWxkcmVuKSB7XHJcbiAgICAgICAgY29sbGFwc2VDaGlsZHJlbkhlaWdodCArPSAkKGNoaWxkKS5oZWlnaHQoKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoY29sbGFwc2VDaGlsZHJlbkhlaWdodCA+IDg1KSByZXR1cm47XHJcbiAgXHJcbiAgICAgIGNvbGxhcHNlLmF0dHIoXCJkYXRhLWN1c3RvbS1jb2xsYXBzZS1pbmFjdGl2ZVwiLCAnJyk7XHJcbiAgICAgICQoYFtkYXRhLWN1c3RvbS1jb2xsYXBzZS1vcGVuPVwiJHtjb2xsYXBzZUlkfVwiXWApLmFkZENsYXNzKFwiZC1ub25lXCIpO1xyXG4gICAgICAkKGBbZGF0YS1jdXN0b20tY29sbGFwc2UtY2xvc2U9XCIke2NvbGxhcHNlSWR9XCJdYCkuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgICB9KVxyXG4gIH07XHJcbiAgY3VzdG9tQ29sbGFwc2VTZXR1cCgpO1xyXG5cclxuICAkKFwiW2RhdGEtY3VzdG9tLWNvbGxhcHNlLW9wZW5dXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXHJcbiAgICBjb25zdCBpZCA9IHRhcmdldC5hdHRyKFwiZGF0YS1jdXN0b20tY29sbGFwc2Utb3BlblwiKTtcclxuICAgIHRhcmdldC5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICQoYFtkYXRhLWN1c3RvbS1jb2xsYXBzZS1jbG9zZT1cIiR7aWR9XCJdYCkucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJbZGF0YS1jdXN0b20tY29sbGFwc2UtY2xvc2VdXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXHJcbiAgICBjb25zdCBpZCA9IHRhcmdldC5hdHRyKFwiZGF0YS1jdXN0b20tY29sbGFwc2UtY2xvc2VcIik7XHJcbiAgICB0YXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAkKGBbZGF0YS1jdXN0b20tY29sbGFwc2Utb3Blbj1cIiR7aWR9XCJdYCkudG9nZ2xlQ2xhc3MoXCJkLW5vbmVcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICBsZXQgdG91Y2hzdGFydFggPSAwO1xyXG4gIGxldCB0b3VjaGVuZFggPSAwO1xyXG5cclxuICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX3NlY3RvclwiKS5vbihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICBjb25zdCBpZCA9IHRhcmdldC5hdHRyKFwiZGF0YS1zZWN0b3JcIik7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJcbiAgICBwYXJlbnRcclxuICAgIC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKVxyXG4gICAgLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgcGFyZW50XHJcbiAgICAuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpXHJcbiAgICAucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZT1cIiR7aWR9XCJdYCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICBwYXJlbnQuZmluZChgW2RhdGEtc2VjdG9yLWRvdD1cIiR7aWR9XCJdYCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX3NlY3RvcnNcIikub24oXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdG91Y2hzdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX3NlY3RvcnNcIikub24oXCJ0b3VjaGVuZFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHRvdWNoZW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICBjb25zdCBwYXJlbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xyXG4gICAgY29uc3QgaW1nID0gcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgY29uc3QgaWQgPSBOdW1iZXIoaW1nLmF0dHIoXCJkYXRhLXNlY3Rvci1pbWFnZVwiKSk7XHJcbiAgICBjb25zdCBsZW5ndGggPSBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZVwiKS5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHRvdWNoZW5kWCA8IHRvdWNoc3RhcnRYKSB7XHJcbiAgICAgIHBhcmVudFxyXG4gICAgICAuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIilcclxuICAgICAgLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICBwYXJlbnRcclxuICAgICAgLmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICBpZiAoaWQgPj0gbGVuZ3RoKSB7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICAgICAgLmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZV06bnRoLWNoaWxkKDEpYClcclxuICAgICAgICAuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICAgICAgLmZpbmQoYFtkYXRhLXNlY3Rvci1kb3RdOm50aC1jaGlsZCgxKWApXHJcbiAgICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2U9XCIke2lkfVwiXWApXHJcbiAgICAgIC5uZXh0KClcclxuICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICBwYXJlbnRcclxuICAgICAgLmZpbmQoYFtkYXRhLXNlY3Rvci1kb3Q9XCIke2lkfVwiXWApXHJcbiAgICAgIC5uZXh0KClcclxuICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIGlmICh0b3VjaGVuZFggPiB0b3VjaHN0YXJ0WCkge1xyXG4gICAgICBwYXJlbnRcclxuICAgICAgLmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpXHJcbiAgICAgIC5yZW1vdmVDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIilcclxuICAgICAgLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgaWYgKGlkIDw9IDEpIHtcclxuICAgICAgICBwYXJlbnRcclxuICAgICAgICAuZmluZChgW2RhdGEtc2VjdG9yLWltYWdlXTpudGgtY2hpbGQoJHtsZW5ndGh9KWApXHJcbiAgICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgIHBhcmVudFxyXG4gICAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItZG90XTpudGgtY2hpbGQoJHtsZW5ndGh9KWApXHJcbiAgICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcGFyZW50XHJcbiAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2U9XCIke2lkfVwiXWApXHJcbiAgICAgIC5wcmV2KClcclxuICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICBwYXJlbnRcclxuICAgICAgLmZpbmQoYFtkYXRhLXNlY3Rvci1kb3Q9XCIke2lkfVwiXWApXHJcbiAgICAgIC5wcmV2KClcclxuICAgICAgLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93IC5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZTpmaXJzdC1jaGlsZFwiKS5hZGRDbGFzcyhcclxuICAgIFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCJcclxuICApO1xyXG4gICQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvdyAucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90OmZpcnN0LWNoaWxkXCIpLmFkZENsYXNzKFxyXG4gICAgXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCJcclxuICApO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGVcclxuICAgICAgICA/IFwic3ltYm9sXCJcclxuICAgICAgICA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gX3R5cGVvZihvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZXJEZWJvdW5jZShmdW5jLCBpbnRlcnZhbCwgY29udGV4dCkge1xyXG4gIHZhciB0aW1lb3V0ID0gZmFsc2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzLFxyXG4gICAgICBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgZnVuYy5hcHBseShjb250ZXh0IHx8IF90aGlzLCBfYXJndW1lbnRzKTtcclxuICAgIH0sIGludGVydmFsKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXJDb25zdHJ1Y3RvciA9IC8qI19fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBTbGlkZXJDb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyQ29uc3RydWN0b3IpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlQ2xhc3MoU2xpZGVyQ29uc3RydWN0b3IsIFtcclxuICAgIHtcclxuICAgICAga2V5OiBcImluaXRcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IF90aGlzMyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMucGFyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuYXV0b3BsYXkgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvcGxheS10aW1lb3V0XCIpICE9PSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmF1dG9wbGF5VGltZW91dCA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvcGxheS10aW1lb3V0XCIpIHx8IDUwMDA7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuYXJyb3dzID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbm8tYXJyb3dzXCIpID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA1NzUuOThweClcIik7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1lZGlhIHF1ZXJ5IGlzIHRydWVcclxuICAgICAgICBpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmFtcy5kb3RzID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbm8tZG90c1wiKSA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wYXJhbXMuZG90cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhcmFtcy5hZGFwdGl2ZUhlaWdodCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFkYXB0aXZlLWhlaWdodFwiKSAhPT0gbnVsbDtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jZW50ZXJNb2RlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY2VudGVyXCIpID09PSBudWxsID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmluZmluaXRlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbm8taW5maW5pdGVcIikgPT09IG51bGwgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB0aGlzLnBhcmFtcy5jb3VudCA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNvdW50LnhzID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlc1wiKSB8fCAxO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNvdW50LnNtID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNtLXNsaWRlc1wiKSB8fCB0aGlzLnBhcmFtcy5jb3VudC54cztcclxuICAgICAgICB0aGlzLnBhcmFtcy5jb3VudC5tZCA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zbGlkZXNcIikgfHwgdGhpcy5wYXJhbXMuY291bnQuc207XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY291bnQubGcgPSArdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbGctc2xpZGVzXCIpIHx8IHRoaXMucGFyYW1zLmNvdW50Lm1kO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNvdW50LnhsID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhsLXNsaWRlc1wiKSB8fCB0aGlzLnBhcmFtcy5jb3VudC5sZztcclxuICAgICAgICB0aGlzLnBhcmFtcy5yb3dzID0ge307XHJcbiAgICAgICAgKHRoaXMucGFyYW1zLnJvd3MueHMgPSArdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcm93c1wiKSB8fCAxKSxcclxuICAgICAgICAgICh0aGlzLnBhcmFtcy5yb3dzLnNtID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNtLXJvd3NcIikgfHwgdGhpcy5wYXJhbXMucm93cy54cyksXHJcbiAgICAgICAgICAodGhpcy5wYXJhbXMucm93cy5tZCA9ICt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZC1yb3dzXCIpIHx8IHRoaXMucGFyYW1zLnJvd3Muc20pLFxyXG4gICAgICAgICAgKHRoaXMucGFyYW1zLnJvd3MubGcgPSArdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbGctcm93c1wiKSB8fCB0aGlzLnBhcmFtcy5yb3dzLm1kKSxcclxuICAgICAgICAgICh0aGlzLnBhcmFtcy5yb3dzLnhsID0gK3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhsLXJvd3NcIikgfHwgdGhpcy5wYXJhbXMucm93cy5sZyk7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuc3RhdGUgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhicmVha3BvaW50cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCBpbmRleCkge1xyXG4gICAgICAgICAgbGV0IGJyZWFrcG9pbnQgPSBpbmRleCAhPT0gMCA/IFwiLVwiICsga2V5ICsgXCItXCIgOiBcIi1cIjtcclxuXHJcbiAgICAgICAgICBsZXQgYXR0ciA9IF90aGlzMy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGFcIi5jb25jYXQoYnJlYWtwb2ludCwgXCJtb3VudGVkXCIpKTtcclxuXHJcbiAgICAgICAgICBpZiAoYXR0ciA9PT0gbnVsbCAmJiBpbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcHJldktleSA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKVtpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICBfdGhpczMucGFyYW1zLnN0YXRlW2tleV0gPSBfdGhpczMucGFyYW1zLnN0YXRlW3ByZXZLZXldO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSBcInRydWVcIiB8fCAoaW5kZXggPT09IDAgJiYgYXR0ciAhPT0gXCJmYWxzZVwiKSkge1xyXG4gICAgICAgICAgICBfdGhpczMucGFyYW1zLnN0YXRlW2tleV0gPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMzLnBhcmFtcy5zdGF0ZVtrZXldID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5zTW9iaWxlSGlkZGVuU2xpZGVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgICAgIGlmICghc2xpZGUudGFnTmFtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGlmIChzbGlkZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlLW1vYmlsZS1oaWRkZW5cIikgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgX3RoaXMzLmNvbnRhaW5zTW9iaWxlSGlkZGVuU2xpZGVzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBfdGhpczMuc2xpZGVzLnB1c2goc2xpZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSWNvbnMoKTtcclxuICAgICAgICB0aGlzLmNoZWNrU2xpZGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmNoZWNrU2xpZGVyU3RhdGVEZWJvdW5jZWQgPSBzbGlkZXJEZWJvdW5jZSh0aGlzLmNoZWNrU2xpZGVyU3RhdGUsIDUwMCwgdGhpcyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5jaGVja1NsaWRlclN0YXRlRGVib3VuY2VkKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJjcmVhdGVJY29uc1wiLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlSWNvbnMoKSB7XHJcbiAgICAgICAgbGV0IGxlZnRJY29uID1cclxuICAgICAgICAgICdcXG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTEgMTlcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcbiAgICAgICAgPHBhdGggZD1cIk0xLjQgMTguMUwwIDE2LjdMNy42IDkuMTAwMDFMMCAxLjVMMS40IDBMMTAuNCA5LjEwMDAxQzEwLjQgOS4xMDAwMSAxLjMgMTguMSAxLjQgMTguMVpcIi8+XFxuICAgICAgPC9zdmc+XFxuICAgICc7XHJcbiAgICAgICAgbGV0IHJpZ2h0SWNvbiA9XHJcbiAgICAgICAgICAnXFxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDExIDE5XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXG4gICAgICAgIDxwYXRoIGQ9XCJNOS4wMDAzOSA3LjI0NzkyZS0wNUwxMC40MDA0IDEuNDAwMDdMMi44MDAzOSA5LjAwMDA5TDEwLjQwMDQgMTYuNjAwMUw5LjAwMDM5IDE4LjEwMDFMMC4wMDAzOTEwMDYgOS4wMDAwOUMwLjAwMDM5MTAwNiA5LjAwMDA5IDkuMTAwMzkgNy4yNDc5MmUtMDUgOS4wMDAzOSA3LjI0NzkyZS0wNVpcIi8+XFxuICAgICAgPC9zdmc+XFxuICAgICc7XHJcbiAgICAgICAgbGV0IGxlZnRJY29uQ2xhc3MgPSBcImN1c3RvbS1pY29uLWxlZnRcIjtcclxuICAgICAgICBsZXQgcmlnaHRJY29uQ2xhc3MgPSBcImN1c3RvbS1pY29uLXJpZ2h0XCI7XHJcbiAgICAgICAgbGV0IGN1c3RvbUljb25zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIuY29uY2F0KGxlZnRJY29uQ2xhc3MsIFwiLCAuXCIpLmNvbmNhdChyaWdodEljb25DbGFzcykpO1xyXG4gICAgICAgIGN1c3RvbUljb25zLmZvckVhY2goZnVuY3Rpb24gKGljb24pIHtcclxuICAgICAgICAgIGxldCBpc0xlZnRJY29uID0gaWNvbi5jbGFzc0xpc3QuY29udGFpbnMobGVmdEljb25DbGFzcyk7XHJcbiAgICAgICAgICBsZXQgaXNSaWdodEljb24gPSBpY29uLmNsYXNzTGlzdC5jb250YWlucyhyaWdodEljb25DbGFzcyk7XHJcblxyXG4gICAgICAgICAgaWYgKGlzTGVmdEljb24pIHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKGxlZnRJY29uQ2xhc3MpO1xyXG4gICAgICAgICAgICBsZWZ0SWNvbiA9IGljb24ub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpc1JpZ2h0SWNvbikge1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUocmlnaHRJY29uQ2xhc3MpO1xyXG4gICAgICAgICAgICByaWdodEljb24gPSBpY29uLm91dGVySFRNTDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpY29uLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcmV2QnV0dG9uID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJldi1idXR0b24taWRcIik7XHJcbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5leHQtYnV0dG9uLWlkXCIpO1xyXG4gICAgICAgIGlmIChwcmV2QnV0dG9uKSB7XHJcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmV2QnV0dG9uKTtcclxuICAgICAgICAgIHRoaXMucHJldkFycm93ID0gYnV0dG9uLm91dGVySFRNTDtcclxuICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZBcnJvdyA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b25fc3R5bGUtMSBzbGljay1wcmV2XCI+Jy5jb25jYXQoXHJcbiAgICAgICAgICAgIHJpZ2h0SWNvbixcclxuICAgICAgICAgICAgXCI8L2J1dHRvbj5cIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5leHRCdXR0b24pIHtcclxuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRCdXR0b24pO1xyXG4gICAgICAgICAgdGhpcy5uZXh0QXJyb3cgPSBidXR0b24ub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgYnV0dG9uLnJlbW92ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubmV4dEFycm93ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbl9zdHlsZS0xIHNsaWNrLW5leHRcIj4nLmNvbmNhdChcclxuICAgICAgICAgICAgbGVmdEljb24sXHJcbiAgICAgICAgICAgIFwiPC9idXR0b24+XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcImNoZWNrU2xpZGVyU3RhdGVcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrU2xpZGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCAmJiB0aGlzLnNhdmVkV2luZG93V2lkdGggPT09IHdpbmRvdy5pbm5lcldpZHRoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zYXZlZFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMudW5tb3VudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0YXRlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBicmVha3BvaW50IGluIGJyZWFrcG9pbnRzKSB7XHJcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcclxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnBhcmFtcy5zdGF0ZVticmVha3BvaW50XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zTW9iaWxlSGlkZGVuU2xpZGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTbGlkZXNWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5tb3VudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcImNoZWNrU2xpZGVzVmlzaWJpbGl0eVwiLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTbGlkZXNWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIGxldCBfdGhpczQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgICAgICAgc2xpZGUucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgICAgIGxldCBzaG91bGRCZUhpZGRlbiA9IHNsaWRlLmdldEF0dHJpYnV0ZShcImRhdGEtc2xpZGUtbW9iaWxlLWhpZGRlblwiKSAhPT0gbnVsbDtcclxuICAgICAgICAgIGxldCBicmVha3BvaW50ID0gd2luZG93LmlubmVyV2lkdGggPCBicmVha3BvaW50cy5zbTtcclxuXHJcbiAgICAgICAgICBpZiAoIShzaG91bGRCZUhpZGRlbiAmJiBicmVha3BvaW50KSkge1xyXG4gICAgICAgICAgICBfdGhpczQuZWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgc2xpZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcIm1vdW50XCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCgpIHtcclxuICAgICAgICAkKHRoaXMuZWxlbWVudCkuc2xpY2soe1xyXG4gICAgICAgICAgYXV0b3BsYXk6IHRoaXMucGFyYW1zLmF1dG9wbGF5LFxyXG4gICAgICAgICAgYXV0b3BsYXlTcGVlZDogdGhpcy5wYXJhbXMuYXV0b3BsYXlUaW1lb3V0LFxyXG4gICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMucGFyYW1zLmNvdW50LnhzLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMucGFyYW1zLmNvdW50LnhzLFxyXG4gICAgICAgICAgcm93czogdGhpcy5wYXJhbXMucm93cy54cyxcclxuICAgICAgICAgIHByZXZBcnJvdzogdGhpcy5wcmV2QXJyb3csXHJcbiAgICAgICAgICBuZXh0QXJyb3c6IHRoaXMubmV4dEFycm93LFxyXG4gICAgICAgICAgYXJyb3dzOiB0aGlzLnBhcmFtcy5hcnJvd3MsXHJcbiAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdGhpcy5wYXJhbXMuYWRhcHRpdmVIZWlnaHQsXHJcbiAgICAgICAgICBkb3RzOiB0aGlzLnBhcmFtcy5kb3RzLFxyXG4gICAgICAgICAgY2VudGVyTW9kZTogdGhpcy5wYXJhbXMuY2VudGVyTW9kZSxcclxuICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRoaXMucGFyYW1zLmluZmluaXRlLFxyXG4gICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogYnJlYWtwb2ludHMuc20gLSAxLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMucGFyYW1zLmNvdW50LnNtLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMucGFyYW1zLmNvdW50LnNtLFxyXG4gICAgICAgICAgICAgICAgcm93czogdGhpcy5wYXJhbXMucm93cy5zbSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogYnJlYWtwb2ludHMubWQgLSAxLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMucGFyYW1zLmNvdW50Lm1kLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMucGFyYW1zLmNvdW50Lm1kLFxyXG4gICAgICAgICAgICAgICAgcm93czogdGhpcy5wYXJhbXMucm93cy5tZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogYnJlYWtwb2ludHMubGcgLSAxLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMucGFyYW1zLmNvdW50LmxnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMucGFyYW1zLmNvdW50LmxnLFxyXG4gICAgICAgICAgICAgICAgcm93czogdGhpcy5wYXJhbXMucm93cy5sZyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogYnJlYWtwb2ludHMueGwgLSAxLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMucGFyYW1zLmNvdW50LnhsLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMucGFyYW1zLmNvdW50LnhsLFxyXG4gICAgICAgICAgICAgICAgcm93czogdGhpcy5wYXJhbXMucm93cy54bCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdG91Y2hzdGFydFggPSAwO1xyXG4gICAgICAgICAgbGV0IHRvdWNoZW5kWCA9IDA7XHJcblxyXG4gICAgICAgICAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19zZWN0b3JcIikub24oXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmF0dHIoXCJkYXRhLXNlY3RvclwiKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHBhcmVudC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBwYXJlbnQuZmluZChgW2RhdGEtc2VjdG9yLWltYWdlPVwiJHtpZH1cIl1gKS5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1kb3Q9XCIke2lkfVwiXWApLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fc2VjdG9yc1wiKS5vbihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRvdWNoc3RhcnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fc2VjdG9yc1wiKS5vbihcInRvdWNoZW5kXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0b3VjaGVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGltZy5hdHRyKFwiZGF0YS1zZWN0b3ItaW1hZ2VcIikpO1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZVwiKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpZiAodG91Y2hlbmRYIDwgdG91Y2hzdGFydFgpIHtcclxuICAgICAgICAgICAgICBwYXJlbnQuZmluZChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGlkID49IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZV06bnRoLWNoaWxkKDEpYCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuZmluZChgW2RhdGEtc2VjdG9yLWRvdF06bnRoLWNoaWxkKDEpYCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwYXJlbnQuZmluZChgW2RhdGEtc2VjdG9yLWltYWdlPVwiJHtpZH1cIl1gKS5uZXh0KCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19pbWFnZV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1kb3Q9XCIke2lkfVwiXWApLm5leHQoKS5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRvdWNoZW5kWCA+IHRvdWNoc3RhcnRYKSB7XHJcbiAgICAgICAgICAgICAgcGFyZW50LmZpbmQoXCIucHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgIHBhcmVudC5maW5kKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2RvdF9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgIGlmIChpZCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRcclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1zZWN0b3ItaW1hZ2VdOm50aC1jaGlsZCgke2xlbmd0aH0pYClcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItZG90XTpudGgtY2hpbGQoJHtsZW5ndGh9KWApLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcGFyZW50LmZpbmQoYFtkYXRhLXNlY3Rvci1pbWFnZT1cIiR7aWR9XCJdYCkucHJldigpLmFkZENsYXNzKFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19faW1hZ2VfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgIHBhcmVudC5maW5kKGBbZGF0YS1zZWN0b3ItZG90PVwiJHtpZH1cIl1gKS5wcmV2KCkuYWRkQ2xhc3MoXCJwcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3RfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLnByb2R1Y3QtY2FyZC1zbGlkZXNob3cgLnByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlOmZpcnN0LWNoaWxkXCIpLmFkZENsYXNzKFxyXG4gICAgICAgICAgICBcInByb2R1Y3QtY2FyZC1zbGlkZXNob3dfX2ltYWdlX2FjdGl2ZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgJChcIi5wcm9kdWN0LWNhcmQtc2xpZGVzaG93IC5wcm9kdWN0LWNhcmQtc2xpZGVzaG93X19kb3Q6Zmlyc3QtY2hpbGRcIikuYWRkQ2xhc3MoXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1jYXJkLXNsaWRlc2hvd19fZG90X2FjdGl2ZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcInVubW91bnRcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVubW91bnQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnNsaWNrKFwidW5zbGlja1wiKTtcclxuICAgICAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBTbGlkZXJDb25zdHJ1Y3RvcjtcclxufSkoKTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdGlyZUZpbHRlclRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5maWx0ZXItdG9nZ2xlIC50b2dnbGUtaW5wdXRcIlxyXG4gICk7XHJcblxyXG4gIGlmICghdGlyZUZpbHRlclRvZ2dsZSkgcmV0dXJuO1xyXG5cclxuICB0aXJlRmlsdGVyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGJsb2NrUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbWV0ZXItYmxvY2tcIik7XHJcbiAgICBsZXQgYmxvY2tBdXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRvLWJsb2NrXCIpO1xyXG4gICAgbGV0IHBvUGFyYW1ldHJhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG8tcGFyYW1ldHJhbVwiKTtcclxuICAgIGxldCBwb0F1dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvLWF1dG9cIik7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIGJsb2NrUGFyYW1ldGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgYmxvY2tBdXRvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHBvUGFyYW1ldHJhbS5jbGFzc0xpc3QuYWRkKFwiZGlzYWN0aXZlXCIpO1xyXG4gICAgICBwb0F1dG8uZm9yRWFjaChmdW5jdGlvbiAocG9BdXRvKSB7XHJcbiAgICAgICAgcG9BdXRvLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBibG9ja1BhcmFtZXRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgYmxvY2tBdXRvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHBvUGFyYW1ldHJhbS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWN0aXZlXCIpO1xyXG4gICAgcG9BdXRvLmZvckVhY2goZnVuY3Rpb24gKHBvQXV0bykge1xyXG4gICAgICBwb0F1dG8uY2xhc3NMaXN0LmFkZChcImRpc2FjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIHJlc2V0RmlsdGVycyhibG9jaykge1xyXG4gICAgbGV0IHNlbGVjdG9ycyA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYW1ldGVyLXNlbGVjdCAuc2VsZWN0b3JcIik7XHJcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBibG9jay5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZXNldFwiKTtcclxuICAgIHJlc2V0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1vcHRpb25cIik7XHJcbiAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Qtb3B0aW9uc1wiKTtcclxuICAgICAgc2VsZWN0ZWRPcHRpb24udGV4dENvbnRlbnQgPSBzZWxlY3RPcHRpb25zLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlc2V0RmlsdGVyQnV0dG9uUGFyYW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnBhcmFtZXRlci1ibG9jayAuYnV0dG9uLXJlc2V0XCJcclxuICApO1xyXG4gIGlmIChyZXNldEZpbHRlckJ1dHRvblBhcmFtZXRlcikge1xyXG4gICAgY29uc3QgcGFyYW1ldGVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFtZXRlci1ibG9ja1wiKTtcclxuICAgIHJlc2V0RmlsdGVyQnV0dG9uUGFyYW1ldGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlc2V0RmlsdGVycyhwYXJhbWV0ZXJCbG9jayk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgcmVzZXRGaWx0ZXJCdXR0b25BdXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmF1dG8tYmxvY2sgLmJ1dHRvbi1yZXNldFwiXHJcbiAgKTtcclxuICBpZiAocmVzZXRGaWx0ZXJCdXR0b25BdXRvKSB7XHJcbiAgICBjb25zdCBhdXRvQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dG8tYmxvY2tcIik7XHJcbiAgICByZXNldEZpbHRlckJ1dHRvbkF1dG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVzZXRGaWx0ZXJzKGF1dG9CbG9jayk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHNlYXJjaCBzZWxlY3RvclxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVPcHRpb25zKHNlYXJjaElucHV0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgc2VsZWN0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgc2VsZWN0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gICAgc2VhcmNoSW5wdXQuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgIHNlYXJjaElucHV0LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJibG9ja1wiIDogXCJub25lXCI7XHJcbiAgICBzZWxlY3RlZE9wdGlvbi5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgc2VsZWN0ZWRPcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcbiAgICBpZiAoc2VsZWN0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VPcHRpb25zKHNlYXJjaElucHV0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgc2VsZWN0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBzZWFyY2hJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBzZWxlY3RlZE9wdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZWFyY2hPcHRpb25zKHNlbGVjdE9wdGlvbiwgc2VhcmNoU3RyaW5nKSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gc2VsZWN0T3B0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBzZWxlY3RPcHRpb24uc3R5bGUuZGlzcGxheSA9IHRleHQuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RvclwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tTZWxlY3RvcnMoKSB7XHJcbiAgICBjb25zdCBhdExlYXN0T25lU2VsZWN0ZWRQYXJhbSA9IEFycmF5LmZyb20oc2VsZWN0b3JzKS5zb21lKGZ1bmN0aW9uIChcclxuICAgICAgc2VsZWN0b3JcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5wYXJhbWV0ZXItYmxvY2sgLnNlbGVjdGVkXCIpICE9PSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBhdExlYXN0T25lU2VsZWN0ZWRQYXJhbVxyXG4gICAgICA/IChyZXNldEZpbHRlckJ1dHRvblBhcmFtZXRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpXHJcbiAgICAgIDogKHJlc2V0RmlsdGVyQnV0dG9uUGFyYW1ldGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIik7XHJcbiAgICBjb25zdCBhdExlYXN0T25lU2VsZWN0ZWRBdXRvID0gQXJyYXkuZnJvbShzZWxlY3RvcnMpLnNvbWUoZnVuY3Rpb24gKFxyXG4gICAgICBzZWxlY3RvclxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLmF1dG8tYmxvY2sgLnNlbGVjdGVkXCIpICE9PSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBhdExlYXN0T25lU2VsZWN0ZWRBdXRvXHJcbiAgICAgID8gKHJlc2V0RmlsdGVyQnV0dG9uQXV0by5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpXHJcbiAgICAgIDogKHJlc2V0RmlsdGVyQnV0dG9uQXV0by5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY2hlY2tTZWxlY3RvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtb3B0aW9uXCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1zZWFyY2gtaW5wdXRcIik7XHJcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Qtb3B0aW9uc1wiKTtcclxuICAgIHNlbGVjdGVkT3B0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBzZWFyY2hJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBzZWxlY3RPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHNlbGVjdGVkT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvZ2dsZU9wdGlvbnMoc2VhcmNoSW5wdXQsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3Qtb3B0aW9uXCIpO1xyXG4gICAgc2VsZWN0T3B0aW9uLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdE9wdGlvbikge1xyXG4gICAgICBzZWxlY3RPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0ICE9PSBzZWxlY3Rvci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICBzZWxlY3RlZCA/IHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSA6IG51bGw7XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3RlZE9wdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICBjbG9zZU9wdGlvbnMoc2VhcmNoSW5wdXQsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG91dGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgb3V0ZXJBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCFzZWxlY3Rvci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgY2xvc2VPcHRpb25zKHNlYXJjaElucHV0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3RlZE9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgc2VhcmNoU3RyaW5nID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgc2VsZWN0T3B0aW9uLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdE9wdGlvbikge1xyXG4gICAgICAgIHNlYXJjaE9wdGlvbnMoc2VsZWN0T3B0aW9uLCBzZWFyY2hTdHJpbmcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyDRgdC70LDQudC00LXRgCDQutCw0YLQtdCz0L7RgNC40Lkg0LIg0LzQvtCx0LjQu9C60LVcclxuXHJcbiAgJChcIi50YWJzLXNsaWRlci1tb2JpbGVcIikuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAyLjUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcclxuICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWItY29udGVudFwiKTtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNzY4KSB7XHJcbiAgICB0YWJzLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xyXG4gICAgICB0YWIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi50YWJzLXNsaWRlci1tb2JpbGUgLnNsaWRlci1pdGVtXCJcclxuICApO1xyXG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCA3NjgpIHtcclxuICAgIHNsaWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SXRlbSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCB0YWJJZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIik7XHJcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiSWQpO1xyXG4gICAgICAgIGNvbnN0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYi1jb250ZW50XCIpO1xyXG4gICAgICAgIGFsbFRhYnMuZm9yRWFjaChmdW5jdGlvbiAodGFiKSB7XHJcbiAgICAgICAgICB0YWIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhYi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGNvbnN0IG1vYmlsZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFicy1zbGlkZXItbW9iaWxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1BY3RpdmUgPSBtb2JpbGVTbGlkZXIucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItaXRlbS5hY3RpdmVcIik7XHJcbiAgICAgICAgaXRlbUFjdGl2ZSA/IGl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSA6IG51bGw7XHJcbiAgICAgICAgdGFyZ2V0SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g0LLRgdC/0LvRi9Cy0LDRiNC60LBcclxuXHJcbiAgY29uc3QgYXV0b01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRvLW1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIHRpcHB5KFwiI2F1dG8tbW9kYWwtYnRuXCIsIHtcclxuICAgIGNvbnRlbnQ6IGF1dG9Nb2RhbC5pbm5lckhUTUwsXHJcbiAgICBhbGxvd0hUTUw6IHRydWUsXHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxyXG4gICAgdHJpZ2dlcjogXCJjbGlja1wiLFxyXG4gIH0pO1xyXG5cclxuICAvLyDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LIg0LzQvtCx0LjQu9C60LVcclxuXHJcbiAgY29uc3QgYXV0b09wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dG9fX21vZGFsLWJ1dHRvbi1tb2JpbGVcIik7XHJcbiAgY29uc3QgYXV0b01vZGFsTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wby1hdXRvX19tb2RhbC1tb2JpbGVcIik7XHJcbiAgY29uc3QgYXV0b0Nsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wby1hdXRvLWNsb3NlLWJ1dHRvblwiKTtcclxuXHJcbiAgYXV0b09wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGF1dG9Nb2RhbE1vYmlsZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXRvTW9kYWxNb2JpbGUpO1xyXG4gIH0pO1xyXG4gIGF1dG9DbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgYXV0b01vZGFsTW9iaWxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyLWF1dG9cIikuYXBwZW5kQ2hpbGQoYXV0b01vZGFsTW9iaWxlKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIHZhciBwbHVnaW5OYW1lID0gXCJjc2NybGJcIjtcclxuXHJcbiAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XHJcbiAgICB2YXIgJGVsID0gJChlbGVtZW50KTtcclxuICAgIHZhciAkc2Nyb2xsQ29udGVudEVsO1xyXG4gICAgdmFyICRjb250ZW50RWwgPSAkZWwuZmluZChcIi5jc2NybGItY29udGVudFwiKTtcclxuICAgIHZhciAkc2Nyb2xsYmFyRWw7XHJcbiAgICB2YXIgJGRyYWdIYW5kbGVFbDtcclxuICAgIHZhciBkcmFnT2Zmc2V0O1xyXG4gICAgdmFyIGZsYXNoVGltZW91dDtcclxuICAgIHZhciBwYWdlSnVtcE11bHRwID0gNyAvIDg7XHJcbiAgICB2YXIgc2Nyb2xsRGlyZWN0aW9uID0gXCJ2ZXJ0XCI7XHJcbiAgICB2YXIgc2Nyb2xsT2Zmc2V0QXR0ciA9IFwic2Nyb2xsVG9wXCI7XHJcbiAgICB2YXIgc2l6ZUF0dHIgPSBcImhlaWdodFwiO1xyXG4gICAgdmFyIG9mZnNldEF0dHIgPSBcInRvcFwiO1xyXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkLmZuW3BsdWdpbk5hbWVdLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAkY29udGVudEVsLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgIGlmICgkZWwuaGFzQ2xhc3MoXCJob3Jpem9udGFsXCIpKSB7XHJcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID0gXCJob3JpelwiO1xyXG4gICAgICAgIHNjcm9sbE9mZnNldEF0dHIgPSBcInNjcm9sbExlZnRcIjtcclxuICAgICAgICBzaXplQXR0ciA9IFwid2lkdGhcIjtcclxuICAgICAgICBvZmZzZXRBdHRyID0gXCJsZWZ0XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRlbC5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiY3NjcmxiLXNjcm9sbGJhclwiPjxkaXYgY2xhc3M9XCJkcmFnLWhhbmRsZVwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAkc2Nyb2xsYmFyRWwgPSAkZWwuZmluZChcIi5jc2NybGItc2Nyb2xsYmFyXCIpO1xyXG4gICAgICAkZHJhZ0hhbmRsZUVsID0gJGVsLmZpbmQoXCIuZHJhZy1oYW5kbGVcIik7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy53cmFwQ29udGVudCkge1xyXG4gICAgICAgICRjb250ZW50RWwud3JhcCgnPGRpdiBjbGFzcz1cImNzY3JsYi1zY3JvbGwtY29udGVudFwiIC8+Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzY3JvbGxDb250ZW50RWwgPSAkZWwuZmluZChcIi5jc2NybGItc2Nyb2xsLWNvbnRlbnRcIik7XHJcbiAgICAgIHJlc2l6ZVNjcm9sbENvbnRlbnQoKTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmF1dG9IaWRlKSB7XHJcbiAgICAgICAgJGVsLm9uKFwibW91c2VlbnRlclwiLCBmbGFzaFNjcm9sbGJhcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRkcmFnSGFuZGxlRWwub24oXCJtb3VzZWRvd25cIiwgc3RhcnREcmFnKTtcclxuICAgICAgJHNjcm9sbGJhckVsLm9uKFwibW91c2Vkb3duXCIsIGp1bXBTY3JvbGwpO1xyXG4gICAgICAkc2Nyb2xsQ29udGVudEVsLm9uKFwic2Nyb2xsXCIsIG9uU2Nyb2xsZWQpO1xyXG4gICAgICByZXNpemVTY3JvbGxiYXIoKTtcclxuICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZWNhbGN1bGF0ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghb3B0aW9ucy5hdXRvSGlkZSkge1xyXG4gICAgICAgIHNob3dTY3JvbGxiYXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0RHJhZyhlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyIGV2ZW50T2Zmc2V0ID0gZS5wYWdlWTtcclxuXHJcbiAgICAgIGlmIChzY3JvbGxEaXJlY3Rpb24gPT09IFwiaG9yaXpcIikge1xyXG4gICAgICAgIGV2ZW50T2Zmc2V0ID0gZS5wYWdlWDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhZ09mZnNldCA9IGV2ZW50T2Zmc2V0IC0gJGRyYWdIYW5kbGVFbC5vZmZzZXQoKVtvZmZzZXRBdHRyXTtcclxuICAgICAgJChkb2N1bWVudCkub24oXCJtb3VzZW1vdmVcIiwgZHJhZyk7XHJcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwibW91c2V1cFwiLCBlbmREcmFnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgZXZlbnRPZmZzZXQgPSBlLnBhZ2VZO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbERpcmVjdGlvbiA9PT0gXCJob3JpelwiKSB7XHJcbiAgICAgICAgZXZlbnRPZmZzZXQgPSBlLnBhZ2VYO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZHJhZ1BvcyA9IGV2ZW50T2Zmc2V0IC0gJHNjcm9sbGJhckVsLm9mZnNldCgpW29mZnNldEF0dHJdIC0gZHJhZ09mZnNldDtcclxuICAgICAgdmFyIGRyYWdQZXJjID0gZHJhZ1BvcyAvICRzY3JvbGxiYXJFbFtzaXplQXR0cl0oKTtcclxuICAgICAgdmFyIHNjcm9sbFBvcyA9IGRyYWdQZXJjICogJGNvbnRlbnRFbFtzaXplQXR0cl0oKTtcclxuICAgICAgJHNjcm9sbENvbnRlbnRFbFtzY3JvbGxPZmZzZXRBdHRyXShzY3JvbGxQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuZERyYWcoKSB7XHJcbiAgICAgICQoZG9jdW1lbnQpLm9mZihcIm1vdXNlbW92ZVwiLCBkcmFnKTtcclxuICAgICAgJChkb2N1bWVudCkub2ZmKFwibW91c2V1cFwiLCBlbmREcmFnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBqdW1wU2Nyb2xsKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSAkZHJhZ0hhbmRsZUVsWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIganVtcEFtdCA9IHBhZ2VKdW1wTXVsdHAgKiAkc2Nyb2xsQ29udGVudEVsW3NpemVBdHRyXSgpO1xyXG4gICAgICB2YXIgZXZlbnRPZmZzZXQgPSBzY3JvbGxEaXJlY3Rpb24gPT09IFwidmVydFwiID8gZS5vcmlnaW5hbEV2ZW50LmxheWVyWSA6IGUub3JpZ2luYWxFdmVudC5sYXllclg7XHJcbiAgICAgIHZhciBkcmFnSGFuZGxlT2Zmc2V0ID0gJGRyYWdIYW5kbGVFbC5wb3NpdGlvbigpW29mZnNldEF0dHJdO1xyXG4gICAgICB2YXIgc2Nyb2xsUG9zID1cclxuICAgICAgICBldmVudE9mZnNldCA8IGRyYWdIYW5kbGVPZmZzZXRcclxuICAgICAgICAgID8gJHNjcm9sbENvbnRlbnRFbFtzY3JvbGxPZmZzZXRBdHRyXSgpIC0ganVtcEFtdFxyXG4gICAgICAgICAgOiAkc2Nyb2xsQ29udGVudEVsW3Njcm9sbE9mZnNldEF0dHJdKCkgKyBqdW1wQW10O1xyXG4gICAgICAkc2Nyb2xsQ29udGVudEVsW3Njcm9sbE9mZnNldEF0dHJdKHNjcm9sbFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlZChlKSB7XHJcbiAgICAgIGZsYXNoU2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplU2Nyb2xsYmFyKCkge1xyXG4gICAgICB2YXIgY29udGVudFNpemUgPSAkY29udGVudEVsW3NpemVBdHRyXSgpO1xyXG4gICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gJHNjcm9sbENvbnRlbnRFbFtzY3JvbGxPZmZzZXRBdHRyXSgpOyAvLyBzY3JvbGxUb3AoKSDjgYsgc2Nyb2xsTGVmdCgpXHJcblxyXG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9ICRzY3JvbGxiYXJFbFtzaXplQXR0cl0oKTtcclxuICAgICAgdmFyIHNjcm9sbGJhclJhdGlvID0gc2Nyb2xsYmFyU2l6ZSAvIGNvbnRlbnRTaXplO1xyXG4gICAgICB2YXIgaGFuZGxlT2Zmc2V0ID0gTWF0aC5yb3VuZChzY3JvbGxiYXJSYXRpbyAqIHNjcm9sbE9mZnNldCk7XHJcbiAgICAgIC8qICsgMjsgKi9cclxuXHJcbiAgICAgIHZhciBoYW5kbGVTaXplID0gTWF0aC5mbG9vcihzY3JvbGxiYXJSYXRpbyAqIChzY3JvbGxiYXJTaXplICsgMikpO1xyXG4gICAgICAvKiAgLSAyKSkgLSAyOyAqL1xyXG5cclxuICAgICAgaWYgKHNjcm9sbGJhclNpemUgPCBjb250ZW50U2l6ZSkge1xyXG4gICAgICAgIGlmIChzY3JvbGxEaXJlY3Rpb24gPT09IFwidmVydFwiKSB7XHJcbiAgICAgICAgICAkZHJhZ0hhbmRsZUVsLmNzcyh7XHJcbiAgICAgICAgICAgIHRvcDogaGFuZGxlT2Zmc2V0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGRyYWdIYW5kbGVFbC5jc3Moe1xyXG4gICAgICAgICAgICBsZWZ0OiBoYW5kbGVPZmZzZXQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVTaXplLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2Nyb2xsYmFyRWwuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY3JvbGxiYXJFbC5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmbGFzaFNjcm9sbGJhcigpIHtcclxuICAgICAgcmVzaXplU2Nyb2xsYmFyKCk7XHJcbiAgICAgIHNob3dTY3JvbGxiYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U2Nyb2xsYmFyKCkge1xyXG4gICAgICAkZHJhZ0hhbmRsZUVsLmFkZENsYXNzKFwidmlzaWJsZVwiKTtcclxuXHJcbiAgICAgIGlmICghb3B0aW9ucy5hdXRvSGlkZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBmbGFzaFRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGZsYXNoVGltZW91dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZsYXNoVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBoaWRlU2Nyb2xsYmFyKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVTY3JvbGxiYXIoKSB7XHJcbiAgICAgICRkcmFnSGFuZGxlRWwucmVtb3ZlQ2xhc3MoXCJ2aXNpYmxlXCIpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBmbGFzaFRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGZsYXNoVGltZW91dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVTY3JvbGxDb250ZW50KCkge1xyXG4gICAgICBpZiAoc2Nyb2xsRGlyZWN0aW9uID09PSBcInZlcnRcIikge1xyXG4gICAgICAgICRzY3JvbGxDb250ZW50RWwud2lkdGgoJGVsLndpZHRoKCkgKyBzY3JvbGxiYXJXaWR0aCgpKTtcclxuICAgICAgICAkc2Nyb2xsQ29udGVudEVsLmhlaWdodCgkZWwuaGVpZ2h0KCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY3JvbGxDb250ZW50RWwud2lkdGgoJGVsLndpZHRoKCkpO1xyXG4gICAgICAgICRzY3JvbGxDb250ZW50RWwuaGVpZ2h0KCRlbC5oZWlnaHQoKSArIHNjcm9sbGJhcldpZHRoKCkpO1xyXG4gICAgICAgICRjb250ZW50RWwuaGVpZ2h0KCRlbC5oZWlnaHQoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxiYXJXaWR0aCgpIHtcclxuICAgICAgdmFyIHRlbXBFbCA9ICQoXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJzY3JvbGxiYXItd2lkdGgtdGVzdGVyXCIgc3R5bGU9XCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4O292ZXJmbG93LXk6c2Nyb2xsO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjAwcHg7bGVmdDotMjAwcHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48L2Rpdj4nXHJcbiAgICAgICk7XHJcbiAgICAgICQoXCJib2R5XCIpLmFwcGVuZCh0ZW1wRWwpO1xyXG4gICAgICB2YXIgd2lkdGggPSAkKHRlbXBFbCkuaW5uZXJXaWR0aCgpO1xyXG4gICAgICB2YXIgd2lkdGhNaW51c1Njcm9sbGJhcnMgPSAkKFwiZGl2XCIsIHRlbXBFbCkuaW5uZXJXaWR0aCgpO1xyXG4gICAgICB0ZW1wRWwucmVtb3ZlKCk7XHJcblxyXG4gICAgICBpZiAod2lkdGggPT09IHdpZHRoTWludXNTY3JvbGxiYXJzICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiZmlyZWZveFwiKSA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIDE3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gd2lkdGggLSB3aWR0aE1pbnVzU2Nyb2xsYmFycztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZSgpIHtcclxuICAgICAgcmVzaXplU2Nyb2xsQ29udGVudCgpO1xyXG4gICAgICByZXNpemVTY3JvbGxiYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcHRpb24oa2V5LCB2YWwpIHtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIG9wdGlvbnNba2V5XSA9IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9uc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgJGNvbnRlbnRFbC5pbnNlcnRCZWZvcmUoJHNjcm9sbGJhckVsKTtcclxuICAgICAgJHNjcm9sbGJhckVsLnJlbW92ZSgpO1xyXG4gICAgICAkc2Nyb2xsQ29udGVudEVsLnJlbW92ZSgpO1xyXG4gICAgICAkY29udGVudEVsLmNzcyh7XHJcbiAgICAgICAgaGVpZ2h0OiAkZWwuaGVpZ2h0KCkgKyBcInB4XCIsXHJcbiAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwic2Nyb2xsXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBob29rKFwib25EZXN0cm95XCIpO1xyXG4gICAgICAkZWwucmVtb3ZlRGF0YShcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhvb2soaG9va05hbWUpIHtcclxuICAgICAgaWYgKG9wdGlvbnNbaG9va05hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvcHRpb25zW2hvb2tOYW1lXS5jYWxsKGVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wdGlvbjogb3B0aW9uLFxyXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxyXG4gICAgICByZWNhbGN1bGF0ZTogcmVjYWxjdWxhdGUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgJC5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB2YXIgbWV0aG9kTmFtZSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG4gICAgICB2YXIgcmV0dXJuVmFsO1xyXG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUpICYmXHJcbiAgICAgICAgICB0eXBlb2YgJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgcGx1Z2luTmFtZSlbbWV0aG9kTmFtZV0gPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuVmFsID0gJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgcGx1Z2luTmFtZSlbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIiBcIiArIG1ldGhvZE5hbWUgKyBcIiBcIiArIHBsdWdpbk5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmV0dXJuVmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKF90eXBlb2Yob3B0aW9ucykgPT09IFwib2JqZWN0XCIgfHwgIW9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lKSkge1xyXG4gICAgICAgICAgJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgcGx1Z2luTmFtZSwgbmV3IFBsdWdpbih0aGlzLCBvcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkLmZuW3BsdWdpbk5hbWVdLmRlZmF1bHRzID0ge1xyXG4gICAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7fSxcclxuICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge30sXHJcbiAgICB3cmFwQ29udGVudDogdHJ1ZSxcclxuICAgIGF1dG9IaWRlOiBmYWxzZSxcclxuICB9O1xyXG59KShqUXVlcnkpO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5jc2NybGItc2Nyb2xsYWJsZVwiKS5jc2NybGIoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcclxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcclxuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcclxuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XHJcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xyXG4gIHJldHVybiBDb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHtcclxuICB2YXIgaXQ7XHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHtcclxuICAgIGlmIChcclxuICAgICAgQXJyYXkuaXNBcnJheShvKSB8fFxyXG4gICAgICAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8XHJcbiAgICAgIChhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIilcclxuICAgICkge1xyXG4gICAgICBpZiAoaXQpIG8gPSBpdDtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzOiBGLFxyXG4gICAgICAgIG46IGZ1bmN0aW9uIG4oKSB7XHJcbiAgICAgICAgICBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGU6IGZ1bmN0aW9uIGUoX2UpIHtcclxuICAgICAgICAgIHRocm93IF9lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZjogRixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgIFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIlxyXG4gICAgKTtcclxuICB9XHJcbiAgdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLFxyXG4gICAgZGlkRXJyID0gZmFsc2UsXHJcbiAgICBlcnI7XHJcbiAgcmV0dXJuIHtcclxuICAgIHM6IGZ1bmN0aW9uIHMoKSB7XHJcbiAgICAgIGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICB9LFxyXG4gICAgbjogZnVuY3Rpb24gbigpIHtcclxuICAgICAgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7XHJcbiAgICAgIG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7XHJcbiAgICAgIHJldHVybiBzdGVwO1xyXG4gICAgfSxcclxuICAgIGU6IGZ1bmN0aW9uIGUoX2UyKSB7XHJcbiAgICAgIGRpZEVyciA9IHRydWU7XHJcbiAgICAgIGVyciA9IF9lMjtcclxuICAgIH0sXHJcbiAgICBmOiBmdW5jdGlvbiBmKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKGRpZEVycikgdGhyb3cgZXJyO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcclxuICBpZiAoIW8pIHJldHVybjtcclxuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xyXG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcclxuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xyXG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcclxuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGFycjJbaV0gPSBhcnJbaV07XHJcbiAgfVxyXG4gIHJldHVybiBhcnIyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XHJcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XHJcbiAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgaG9tZUJhbm5lcigpO1xyXG4gIGhlYWRlcigpO1xyXG4gIGdhbGxlcnkoKTtcclxuICBsYW5kaW5nX3NsaWRlcnMoKTtcclxuICB1cCgpO1xyXG4gIGNoYXRCbG9jaygpO1xyXG4gIHRvZ2dsZSgpOyAvL2ludGVyYWN0aW9uXHJcblxyXG4gIG5ldyDQoXVzdG9tSW50ZXJhY3Rpb24oe1xyXG4gICAgdGFyZ2V0czogXCJhLCBidXR0b24sIFtkYXRhLWN1c3RvbS1pbnRlcmFjdGlvbl0sIC5pbWFnZS16b29tXCIsXHJcbiAgfSk7IC8vc2xpZGVyIGNvbnN0cnVjdG9yXHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWNvbnN0cnVjdG9yXCIpLmZvckVhY2goZnVuY3Rpb24gKCR0aGlzKSB7XHJcbiAgICBuZXcgU2xpZGVyQ29uc3RydWN0b3IoJHRoaXMpLmluaXQoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsYW5kaW5nX3NsaWRlcnMoKSB7XHJcbiAgdmFyICRzbGlkZXJzID0gJChcIi5sYW5kaW5nLXNsaWRlciAub3dsLWNhcm91c2VsXCIpO1xyXG5cclxuICBpZiAoJHNsaWRlcnMubGVuZ3RoKSB7XHJcbiAgICAkc2xpZGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgdmFyIGNvdW50MSwgY291bnQyLCBjb3VudDMsIGNvdW50NDtcclxuXHJcbiAgICAgIGlmICgkdGhpcy5pcyhcIi5sYW5kaW5nLXNsaWRlcl8xIC5vd2wtY2Fyb3VzZWxcIikpIHtcclxuICAgICAgICBjb3VudDEgPSAyO1xyXG4gICAgICAgIGNvdW50MiA9IDI7XHJcbiAgICAgICAgY291bnQzID0gMztcclxuICAgICAgICBjb3VudDQgPSA0O1xyXG4gICAgICB9IGVsc2UgaWYgKCR0aGlzLmlzKFwiLmxhbmRpbmctc2xpZGVyXzIgLm93bC1jYXJvdXNlbFwiKSkge1xyXG4gICAgICAgIGNvdW50MSA9IDE7XHJcbiAgICAgICAgY291bnQyID0gMjtcclxuICAgICAgICBjb3VudDMgPSAzO1xyXG4gICAgICAgIGNvdW50NCA9IDQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICR0aGlzLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogY291bnQxLFxyXG4gICAgICAgICAgICBtYXJnaW46IDE2LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBpdGVtczogY291bnQyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogY291bnQzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBpdGVtczogY291bnQ0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gIHZhciAkc2VjdGlvbiA9ICQoXCIudG9nZ2xlLXNlY3Rpb25cIiksXHJcbiAgICBzcGVlZCA9IDI1MDtcclxuICAkc2VjdGlvbi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICR0b2dnbGUgPSAkdGhpcy5jaGlsZHJlbihcIi50b2dnbGUtc2VjdGlvbl9fdHJpZ2dlclwiKSxcclxuICAgICAgJGNvbnRlbnQgPSAkdGhpcy5jaGlsZHJlbihcIi50b2dnbGUtc2VjdGlvbl9fY29udGVudFwiKSxcclxuICAgICAgJGNsb3NlID0gJGNvbnRlbnQuZmluZChcIi50b2dnbGUtc2VjdGlvbl9fY2xvc2VcIiksXHJcbiAgICAgIHN0YXRlID0gJHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIikgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgIGluaXRpYWxpemVkO1xyXG4gICAgJHRvZ2dsZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RhdGUgPSAhc3RhdGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIGNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgICRjbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RhdGUgPSBmYWxzZTtcclxuICAgICAgY2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgkdGhpcy5pcyhcIltkYXRhLWhvdmVyXVwiKSkge1xyXG4gICAgICB2YXIgdGltZW91dDtcclxuICAgICAgJHRvZ2dsZS5hZGQoJGNvbnRlbnQpLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIWlzVG91Y2gpIHtcclxuICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICBzdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICBjaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICR0b2dnbGUuYWRkKCRjb250ZW50KS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFpc1RvdWNoKSB7XHJcbiAgICAgICAgICB2YXIgZGVsYXk7XHJcblxyXG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJHRvZ2dsZSkpIHtcclxuICAgICAgICAgICAgZGVsYXkgPSA1MDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxheSA9IDEwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoZWNrKCk7XHJcbiAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJHRoaXMuaXMoXCJbZGF0YS1vdXQtaGlkZV1cIikgfHwgJHRoaXMuaXMoXCJbZGF0YS1ob3Zlcl1cIikpIHtcclxuICAgICAgJChkb2N1bWVudCkub24oXCJjbGljayB0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAoISR0YXJnZXQuY2xvc2VzdCgkY29udGVudCkubGVuZ3RoICYmICEkdGFyZ2V0LmNsb3Nlc3QoJHRvZ2dsZSkubGVuZ3RoICYmIHN0YXRlKSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgY2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xyXG4gICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAkdGhpcy5hZGQoJGNvbnRlbnQpLmFkZCgkdG9nZ2xlKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKCR0aGlzLmlzKFwiW2RhdGEtc2xpZGVdXCIpKSB7XHJcbiAgICAgICAgICAkY29udGVudC5zbGlkZURvd24oc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkdGhpcy5hZGQoJHRvZ2dsZSkuYWRkKCRjb250ZW50KS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKCR0aGlzLmlzKFwiW2RhdGEtc2xpZGVdXCIpKSB7XHJcbiAgICAgICAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgJGNvbnRlbnQuc3RvcCgpLnNsaWRlVXAoc3BlZWQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGNvbnRlbnQuaGlkZSgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpO1xyXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cCgpIHtcclxuICB2YXIgJGJ0biA9ICQoXCIuanMtdXBcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xyXG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID4gNTApIHtcclxuICAgICAgJGJ0bi5hZGRDbGFzcyhcInZpc2libGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkYnRuLnJlbW92ZUNsYXNzKFwidmlzaWJsZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBpc1Rocm90dGxlZCA9IGZhbHNlO1xyXG4gICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaXNUaHJvdHRsZWQpIHJldHVybjtcclxuICAgIGlzVGhyb3R0bGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjaGVjaygpO1xyXG4gICAgICBpc1Rocm90dGxlZCA9IGZhbHNlO1xyXG4gICAgfSwgMTAwKTtcclxuICB9KTtcclxuICBjaGVjaygpO1xyXG4gICRidG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICA1MDBcclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYXRCbG9jaygpIHtcclxuICB2YXIgJGJsb2NrID0gJChcIi5jaGF0LWJsb2NrXCIpLFxyXG4gICAgJG9wZW4gPSAkKFwiW2RhdGEtY2hhdC1vcGVuXVwiKSxcclxuICAgICRjbG9zZSA9ICQoXCJbZGF0YS1jaGF0LWNsb3NlXVwiKTtcclxuICAkb3Blbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICRibG9jay5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICAkY2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkYmxvY2sucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnZhciDQoXVzdG9tSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiDQoXVzdG9tSW50ZXJhY3Rpb24oKSB7XHJcbiAgdmFyIF90aGlzMiA9IHRoaXM7XHJcblxyXG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsINChdXN0b21JbnRlcmFjdGlvbik7XHJcblxyXG4gIHRoaXMudGFyZ2V0cyA9IG9wdGlvbnMudGFyZ2V0cztcclxuICB0aGlzLnRvdWNoZW5kRGVsYXkgPSBvcHRpb25zLnRvdWNoZW5kRGVsYXkgfHwgMTAwOyAvL21zXHJcblxyXG4gIHZhciBldmVudHMgPSBmdW5jdGlvbiBldmVudHMoZXZlbnQpIHtcclxuICAgIHZhciAkdGFyZ2V0cyA9IFtdO1xyXG4gICAgJHRhcmdldHNbMF0gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ID8gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoX3RoaXMyLnRhcmdldHMpIDogbnVsbDtcclxuICAgIHZhciAkZWxlbWVudCA9ICR0YXJnZXRzWzBdLFxyXG4gICAgICBpID0gMDtcclxuXHJcbiAgICB3aGlsZSAoJHRhcmdldHNbMF0pIHtcclxuICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudC5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgaWYgKCRlbGVtZW50ICE9PSBkb2N1bWVudCkge1xyXG4gICAgICAgIGlmICgkZWxlbWVudC5tYXRjaGVzKCR0YXJnZXRzLnZhbHVlKSkge1xyXG4gICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgJHRhcmdldHNbaV0gPSAkZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gLy90b3VjaHN0YXJ0XHJcblxyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJ0b3VjaHN0YXJ0XCIpIHtcclxuICAgICAgX3RoaXMyLnRvdWNoZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoX3RoaXMyLnRpbWVvdXQpIGNsZWFyVGltZW91dChfdGhpczIudGltZW91dCk7XHJcblxyXG4gICAgICBpZiAoJHRhcmdldHNbMF0pIHtcclxuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoJHRhcmdldHMpLFxyXG4gICAgICAgICAgX3N0ZXA7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOyApIHtcclxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSBfc3RlcC52YWx1ZTtcclxuICAgICAgICAgICAgJHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvdWNoXCIsIFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgX2l0ZXJhdG9yLmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vdG91Y2hlbmRcclxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gXCJ0b3VjaGVuZFwiIHx8IChldmVudC50eXBlID09IFwiY29udGV4dG1lbnVcIiAmJiBfdGhpczIudG91Y2hlZCkpIHtcclxuICAgICAgX3RoaXMyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfdGhpczIudG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgICB9LCBfdGhpczIudG91Y2hlbmREZWxheSk7XHJcblxyXG4gICAgICBpZiAoJHRhcmdldHNbMF0pIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoJHRhcmdldHMpLFxyXG4gICAgICAgICAgICBfc3RlcDI7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTsgKSB7XHJcbiAgICAgICAgICAgICAgdmFyIF8kdGFyZ2V0ID0gX3N0ZXAyLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICBfJHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRvdWNoXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XHJcbiAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBfaXRlcmF0b3IyLmYoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBfdGhpczIudG91Y2hlbmREZWxheSk7XHJcbiAgICAgIH1cclxuICAgIH0gLy9tb3VzZWVudGVyXHJcblxyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJtb3VzZWVudGVyXCIgJiYgIV90aGlzMi50b3VjaGVkICYmICR0YXJnZXRzWzBdICYmICR0YXJnZXRzWzBdID09IGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAkdGFyZ2V0c1swXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhvdmVyXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy9tb3VzZWxlYXZlXHJcbiAgICBlbHNlIGlmIChldmVudC50eXBlID09IFwibW91c2VsZWF2ZVwiICYmICFfdGhpczIudG91Y2hlZCAmJiAkdGFyZ2V0c1swXSAmJiAkdGFyZ2V0c1swXSA9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgJHRhcmdldHNbMF0ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1jbGlja1wiKTtcclxuICAgICAgJHRhcmdldHNbMF0ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1ob3ZlclwiKTtcclxuICAgIH0gLy9tb3VzZWRvd25cclxuXHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PSBcIm1vdXNlZG93blwiICYmICFfdGhpczIudG91Y2hlZCAmJiAkdGFyZ2V0c1swXSkge1xyXG4gICAgICAkdGFyZ2V0c1swXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaWNrXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgLy9tb3VzZXVwXHJcbiAgICBlbHNlIGlmIChldmVudC50eXBlID09IFwibW91c2V1cFwiICYmICFfdGhpczIudG91Y2hlZCAmJiAkdGFyZ2V0c1swXSkge1xyXG4gICAgICAkdGFyZ2V0c1swXS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWNsaWNrXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2ZW50cyk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGV2ZW50cyk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnRzLCB0cnVlKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBldmVudHMsIHRydWUpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZlbnRzKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudHMpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBldmVudHMpO1xyXG59O1xyXG4iXX0=
