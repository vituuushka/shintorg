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
        i = function () {};
      return {
        s: i,
        n: function () {
          return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
        },
        e: function (t) {
          throw t;
        },
        f: i,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var n,
    s = !0,
    r = !1;
  return {
    s: function () {
      o = o.call(t);
    },
    n: function () {
      var t = o.next();
      return (s = t.done), t;
    },
    e: function (t) {
      (r = !0), (n = t);
    },
    f: function () {
      try {
        s || null == o.return || o.return();
      } finally {
        if (r) throw n;
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
var breakpoints = { xs: 0, sm: 576, md: 768, lg: 1024, xl: 1280 };
function throttle(t, e, o) {
  var a,
    i = o || {},
    n = i.noTrailing,
    s = void 0 !== n && n,
    r = i.noLeading,
    c = void 0 !== r && r,
    l = i.debounceMode,
    d = void 0 === l ? void 0 : l,
    u = !1,
    h = 0;
  function m() {
    a && clearTimeout(a);
  }
  function p() {
    for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
      i[n] = arguments[n];
    var r = this,
      l = Date.now() - h;
    function p() {
      (h = Date.now()), e.apply(r, i);
    }
    function v() {
      a = void 0;
    }
    u ||
      (c || !d || a || p(),
      m(),
      void 0 === d && l > t
        ? c
          ? ((h = Date.now()), s || (a = setTimeout(d ? v : p, t)))
          : p()
        : !0 !== s && (a = setTimeout(d ? v : p, void 0 === d ? t - l : t)));
  }
  return (
    (p.cancel = function (t) {
      var e = (t || {}).upcomingOnly,
        o = void 0 !== e && e;
      m(), (u = !o);
    }),
    p
  );
}
function debounce(t, e, o) {
  var a = (o || {}).atBegin;
  return throttle(t, e, { debounceMode: !1 !== (void 0 !== a && a) });
}
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
  function i() {
    o.hasClass("header_landing") ||
      ((e = $(window).scrollTop()),
      (t = o.height()),
      e > t ? o.addClass("fixed") : o.removeClass("fixed"));
  }
  i(),
    $(window).scroll(function () {
      a ||
        ((a = !0),
        setTimeout(function () {
          i(), (a = !1);
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
    var i = arguments,
      n = this;
    a && clearTimeout(a),
      (a = setTimeout(function () {
        t.apply(o || n, i);
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
        i = "",
        n = "";
      a.length
        ? (a.each(function () {
            var e = t(this),
              o = e.attr("label");
            (i += '<li class="optgroup">' + o + "</li>"),
              e.children("option").each(function () {
                var e = t(this),
                  o = e.attr("value"),
                  a = e.html();
                "selected" === e.attr("selected")
                  ? ((n = a),
                    (i +=
                      '<li class="selected" data-value="' +
                      o +
                      '">' +
                      a +
                      "</li>"))
                  : (i += '<li data-value="' + o + '">' + a + "</li>");
              });
          }),
          e.children("option").each(function () {
            var e = t(this),
              o = e.attr("value"),
              a = e.html();
            "selected" === e.attr("selected")
              ? ((n = a),
                (i =
                  '<li class="selected" data-value="' +
                  o +
                  '">' +
                  a +
                  "</li>" +
                  i))
              : (i = '<li data-value="' + o + '">' + a + "</li>" + i);
          }))
        : e.children("option").each(function () {
            var e = t(this),
              o = e.attr("value"),
              a = e.html();
            "selected" === e.attr("selected")
              ? ((n = a),
                (i +=
                  '<li class="selected" data-value="' + o + '">' + a + "</li>"))
              : (i += '<li data-value="' + o + '">' + a + "</li>");
          }),
        t(
          '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><svg class="icon"><use xlink:href="#tab-arrow"></use></svg><span>' +
            n +
            '</span></div><ul class="dropdown-select-ul" data-role="' +
            o +
            '">' +
            i +
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
            i = e.html(),
            n = e.attr("data-value"),
            s = "#" + o.attr("data-role");
          o.parent(".dropdown-container").toggleClass("active"),
            e.siblings("li").removeClass("selected"),
            e.addClass("selected"),
            t(s).val(n),
            a.children("span").html(i);
        }
      });
  })(jQuery),
  $(document).ready(function () {
    var t = $(".range-slider");
    $(t).each(function (t, e) {
      var o = $(e).data("name"),
        a = document.getElementById("id_" + o + "_0"),
        i = document.getElementById("id_" + o + "_1"),
        n = [a, i],
        s = a ? parseInt(a.dataset.currentValue) : void 0,
        r = i ? parseInt(i.dataset.currentValue) : void 0,
        c = a ? parseInt(a.dataset.minValue) : void 0,
        l = i ? parseInt(i.dataset.maxValue) : void 0,
        d = "";
      function u(t, o) {
        var a = [null, null];
        (a[t] = o), e.noUiSlider.set(a);
      }
      "price_range" == o && (d = " ₽"),
        "undefined" != typeof noUiSlider &&
          noUiSlider.create(e, {
            start: [s, r],
            connect: !0,
            range: { min: c, max: l },
            format: wNumb({ decimals: 0, thousand: " ", postfix: d }),
            step: 1,
          }),
        null !== e &&
          e.noUiSlider &&
          e.noUiSlider.on("update", function (t, e) {
            n[e].value = t[e];
          }),
        n.forEach(function (t, o) {
          null !== t &&
            (t.addEventListener("change", function () {
              u(o, this.value);
            }),
            t.addEventListener("keydown", function (t) {
              var a,
                i = e.noUiSlider.get(),
                n = Number(i[o]),
                s = e.noUiSlider.steps()[o];
              switch (t.which) {
                case 13:
                  u(o, this.value);
                  break;
                case 38:
                  !1 === (a = s[1]) && (a = 1), null !== a && u(o, n + a);
                  break;
                case 40:
                  !1 === (a = s[0]) && (a = 1), null !== a && u(o, n - a);
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
        var i = e.find(".owl-item.active").length - 1,
          n = e.find(".owl-item.active").first().index(),
          s = e.find(".owl-item.active").last().index();
        a > s && e.data("owl.carousel").to(a, 100, !0);
        a < n && e.data("owl.carousel").to(a - i, 100, !0);
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
  $(document).ready(function () {
    var t,
      e = $(".product-haracteristic-group__collapse"),
      o = 0,
      a = _createForOfIteratorHelper2(e.children());
    try {
      for (a.s(); !(t = a.n()).done; ) {
        var i = t.value;
        o += $(i).height();
      }
    } catch (t) {
      a.e(t);
    } finally {
      a.f();
    }
    o > 85 ||
      (e.addClass("product-haracteristic-group_inactive"),
      $(".product-haracteristic-group__button").addClass("d-none"));
  }),
  $(document).ready(function () {
    var t,
      e = $(".product-description-group__collapse"),
      o = 0,
      a = _createForOfIteratorHelper2(e.children());
    try {
      for (a.s(); !(t = a.n()).done; ) {
        var i = t.value;
        o += $(i).height();
      }
    } catch (t) {
      a.e(t);
    } finally {
      a.f();
    }
    o > 85 ||
      (e.addClass("product-description-group__collapse_inactive"),
      $(".product-description-group__button").addClass("d-none"));
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
          i = a.find(".product-card-slideshow__image_active"),
          n = Number(i.attr("data-sector-image")),
          s = a.find(".product-card-slideshow__image").length;
        if (e < t) {
          if (
            (a
              .find(".product-card-slideshow__image_active")
              .removeClass("product-card-slideshow__image_active"),
            a
              .find(".product-card-slideshow__dot_active")
              .removeClass("product-card-slideshow__dot_active"),
            n >= s)
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
            .find('[data-sector-image="'.concat(n, '"]'))
            .next()
            .addClass("product-card-slideshow__image_active"),
            a
              .find('[data-sector-dot="'.concat(n, '"]'))
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
            n <= 1)
          )
            return (
              a
                .find("[data-sector-image]:nth-child(".concat(s, ")"))
                .addClass("product-card-slideshow__image_active"),
              void a
                .find("[data-sector-dot]:nth-child(".concat(s, ")"))
                .addClass("product-card-slideshow__dot_active")
            );
          a
            .find('[data-sector-image="'.concat(n, '"]'))
            .prev()
            .addClass("product-card-slideshow__image_active"),
            a
              .find('[data-sector-dot="'.concat(n, '"]'))
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
                i = t.element.getAttribute("data".concat(a, "mounted"));
              if (null === i && 0 !== o) {
                var n = Object.keys(breakpoints)[o - 1];
                t.params.state[e] = t.params.state[n];
              } else t.params.state[e] = "true" === i || (0 === o && "false" !== i);
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
            .forEach(function (i) {
              var n = i.classList.contains(o),
                s = i.classList.contains(a);
              n
                ? (i.classList.remove(o), (t = i.outerHTML))
                : s && (i.classList.remove(a), (e = i.outerHTML)),
                i.remove();
            }),
            (this.nextArrow =
              '<button type="button" class="button button_style-1 slick-next">'.concat(
                t,
                "</button>"
              )),
            (this.prevArrow =
              '<button type="button" class="button button_style-1 slick-prev">'.concat(
                e,
                "</button>"
              ));
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
                      i = a.find(".product-card-slideshow__image_active"),
                      n = Number(i.attr("data-sector-image")),
                      s = a.find(".product-card-slideshow__image").length;
                    if (e < t) {
                      if (
                        (a
                          .find(".product-card-slideshow__image_active")
                          .removeClass("product-card-slideshow__image_active"),
                        a
                          .find(".product-card-slideshow__dot_active")
                          .removeClass("product-card-slideshow__dot_active"),
                        n >= s)
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
                        .find('[data-sector-image="'.concat(n, '"]'))
                        .next()
                        .addClass("product-card-slideshow__image_active"),
                        a
                          .find('[data-sector-dot="'.concat(n, '"]'))
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
                        n <= 1)
                      )
                        return (
                          a
                            .find(
                              "[data-sector-image]:nth-child(".concat(s, ")")
                            )
                            .addClass("product-card-slideshow__image_active"),
                          void a
                            .find("[data-sector-dot]:nth-child(".concat(s, ")"))
                            .addClass("product-card-slideshow__dot_active")
                        );
                      a
                        .find('[data-sector-image="'.concat(n, '"]'))
                        .prev()
                        .addClass("product-card-slideshow__image_active"),
                        a
                          .find('[data-sector-dot="'.concat(n, '"]'))
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
        i = function () {};
      return {
        s: i,
        n: function () {
          return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
        },
        e: function (t) {
          throw t;
        },
        f: i,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var n,
    s = !0,
    r = !1;
  return {
    s: function () {
      o = t[Symbol.iterator]();
    },
    n: function () {
      var t = o.next();
      return (s = t.done), t;
    },
    e: function (t) {
      (r = !0), (n = t);
    },
    f: function () {
      try {
        s || null == o.return || o.return();
      } finally {
        if (r) throw n;
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
        i = $(this);
      i.is(".landing-slider_1 .owl-carousel")
        ? ((t = 2), (e = 2), (o = 3), (a = 4))
        : i.is(".landing-slider_2 .owl-carousel") &&
          ((t = 1), (e = 2), (o = 3), (a = 4)),
        i.owlCarousel({
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
      i = o.children(".toggle-section__content"),
      n = i.find(".toggle-section__close"),
      s = !!o.hasClass("active");
    (a.on("click", function () {
      (s = !s), r();
    }),
    n.on("click", function () {
      (s = !1), r();
    }),
    o.is("[data-hover]")) &&
      (a.add(i).on("mouseenter", function (t) {
        isTouch || (e && clearTimeout(e), (s = !0), r());
      }),
      a.add(i).on("mouseleave", function (t) {
        var o;
        isTouch ||
          ((o = $(this).is(a) ? 500 : 100),
          (e = setTimeout(function () {
            (s = !1), r();
          }, o)));
      }));
    function r() {
      s
        ? (o.add(i).add(a).addClass("active"),
          o.is("[data-slide]") && i.slideDown(250))
        : (o.add(a).add(i).removeClass("active"),
          o.is("[data-slide]") && (t ? i.stop().slideUp(250) : i.hide(0)));
    }
    (o.is("[data-out-hide]") || o.is("[data-hover]")) &&
      $(document).on("click touchstart", function (t) {
        var e = $(t.target);
        e.closest(i).length || e.closest(a).length || !s || ((s = !1), r());
      }),
      r(),
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
!(function (t) {
  var e = "cscrlb";
  function o(o, a) {
    var i,
      n,
      s,
      r,
      c,
      l = o,
      d = t(o),
      u = d.find(".cscrlb-content"),
      h = 7 / 8,
      m = "vert",
      p = "scrollTop",
      v = "height",
      f = "top";
    function g(e) {
      e.preventDefault();
      var o = e.pageY;
      "horiz" === m && (o = e.pageX),
        (r = o - s.offset()[f]),
        t(document).on("mousemove", _),
        t(document).on("mouseup", w);
    }
    function _(t) {
      t.preventDefault();
      var e = t.pageY;
      "horiz" === m && (e = t.pageX);
      var o = ((e - n.offset()[f] - r) / n[v]()) * u[v]();
      i[p](o);
    }
    function w() {
      t(document).off("mousemove", _), t(document).off("mouseup", w);
    }
    function b(t) {
      if (t.target !== s[0]) {
        var e = h * i[v](),
          o =
            ("vert" === m ? t.originalEvent.layerY : t.originalEvent.layerX) <
            s.position()[f]
              ? i[p]() - e
              : i[p]() + e;
        i[p](o);
      }
    }
    function y(t) {
      C();
    }
    function $() {
      var t = u[v](),
        e = i[p](),
        o = n[v](),
        a = o / t,
        r = Math.round(a * e),
        c = Math.floor(a * (o + 2));
      o < t
        ? ("vert" === m
            ? s.css({ top: r, height: c })
            : s.css({ left: r, width: c }),
          n.show())
        : n.hide();
    }
    function C() {
      $(), k();
    }
    function k() {
      s.addClass("visible"),
        a.autoHide &&
          ("number" == typeof c && window.clearTimeout(c),
          (c = window.setTimeout(function () {
            s.removeClass("visible"),
              "number" == typeof c && window.clearTimeout(c);
          }, 1e3)));
    }
    function T() {
      "vert" === m
        ? (i.width(d.width() + x()), i.height(d.height()))
        : (i.width(d.width()),
          i.height(d.height() + x()),
          u.height(d.height()));
    }
    function x() {
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
    function S() {
      T(), $();
    }
    return (
      (a = t.extend({}, t.fn[e].defaults, a)),
      (window.onload = function () {
        u.focus();
      }),
      d.hasClass("horizontal") &&
        ((m = "horiz"), (p = "scrollLeft"), (v = "width"), (f = "left")),
      d.prepend(
        '<div class="cscrlb-scrollbar"><div class="drag-handle"></div></div>'
      ),
      (n = d.find(".cscrlb-scrollbar")),
      (s = d.find(".drag-handle")),
      a.wrapContent && u.wrap('<div class="cscrlb-scroll-content" />'),
      (i = d.find(".cscrlb-scroll-content")),
      T(),
      a.autoHide && d.on("mouseenter", C),
      s.on("mousedown", g),
      n.on("mousedown", b),
      i.on("scroll", y),
      $(),
      t(window).on("resize", function () {
        S();
      }),
      a.autoHide || k(),
      {
        option: function (t, e) {
          if (!e) return a[t];
          a[t] = e;
        },
        destroy: function () {
          var t;
          u.insertBefore(n),
            n.remove(),
            i.remove(),
            u.css({ height: d.height() + "px", "overflow-y": "scroll" }),
            void 0 !== a[(t = "onDestroy")] && a[t].call(l),
            d.removeData("plugin_" + e);
        },
        recalculate: S,
      }
    );
  }
  (t.fn[e] = function (a) {
    if ("string" == typeof arguments[0]) {
      var i,
        n = arguments[0],
        s = Array.prototype.slice.call(arguments, 1);
      return (
        this.each(function () {
          if (
            !t.data(this, "plugin_" + e) ||
            "function" != typeof t.data(this, "plugin_" + e)[n]
          )
            throw new Error(" " + n + " " + e);
          i = t.data(this, "plugin_" + e)[n].apply(this, s);
        }),
        void 0 !== i ? i : this
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
    for (var a = o[0], i = 0; o[0] && (a = a.parentNode) !== document; )
      a.matches(o.value) && (i++, (o[i] = a));
    if ("touchstart" == t.type) {
      if (((e.touched = !0), e.timeout && clearTimeout(e.timeout), o[0])) {
        var n,
          s = _createForOfIteratorHelper(o);
        try {
          for (s.s(); !(n = s.n()).done; ) {
            n.value.setAttribute("data-touch", "");
          }
        } catch (t) {
          s.e(t);
        } finally {
          s.f();
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
