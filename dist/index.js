import { defineComponent, toRef, computed, openBlock, createElementBlock, normalizeClass, unref, createBlock, resolveDynamicComponent, withModifiers, withCtx, renderSlot, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList } from "vue";
var vueAwesomePaginate_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
const _hoisted_4 = { key: 3 };
const _hoisted_5 = { key: 4 };
const _hoisted_6 = { key: 5 };
const _hoisted_7 = { key: 6 };
const _hoisted_8 = { key: 7 };
const _hoisted_9 = { key: 8 };
const _hoisted_10 = { key: 9 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vue-awesome-paginate",
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10,
      validator: (value) => {
        if (value <= 0) {
          const message = "itemsPerPage attribute must be greater than 0.";
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    currentPage: {
      type: Number,
      default: 1,
      validator: (value) => {
        const message = "currentPage attribute must be greater than 0.";
        if (value <= 0) {
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    modelValue: {
      type: Number,
      required: true,
      validator: (value) => {
        const message = "v-model is required and must be greater than 0.";
        if (value <= 0) {
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    maxPagesShown: {
      type: Number,
      default: 5,
      validator: (value) => {
        const message = "maxPagesShown attribute must be greater than 0.";
        if (value <= 0) {
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    dir: {
      type: String,
      default: "ltr",
      validator: (value) => {
        const message = 'dir attribute must be either "ltr" or "rtl".';
        if (value !== "ltr" && value !== "rtl") {
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        const validTypess = ["link", "button"];
        const message = "type attribute must be one of the following: " + validTypess.join(", ");
        if (validTypess.indexOf(value) === -1) {
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    onClick: {
      type: Function,
      default: () => {
      }
    },
    locale: {
      type: String,
      default: "en",
      validator: (value) => {
        const validLocales = ["en", "ar", "ir"];
        const message = "locale attribute must be one of the following: " + validLocales.join(", ");
        if (validLocales.indexOf(value) === -1) {
          console.error(message);
          throw new TypeError(message);
        }
        return true;
      }
    },
    prevButtonContent: {
      type: String,
      default: "<"
    },
    nextButtonContent: {
      type: String,
      default: ">"
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    },
    hidePrevNextWhenEnds: {
      type: Boolean,
      default: false
    },
    showBreakpointButtons: {
      type: Boolean,
      default: true
    },
    disableBreakpointButtons: {
      type: Boolean,
      default: false
    },
    startingBreakpointContent: {
      type: String,
      default: "..."
    },
    endingBreakpointButtonContent: {
      type: String,
      default: "..."
    },
    showJumpButtons: {
      type: Boolean,
      default: false
    },
    linkUrl: {
      type: String,
      default: "#"
    },
    pureLinkUrl: {
      type: String,
      default: "#"
    },
    backwardJumpButtonContent: {
      type: String,
      default: "<<"
    },
    forwardJumpButtonContent: {
      type: String,
      default: ">>"
    },
    disablePagination: {
      type: Boolean,
      default: false
    },
    showEndingButtons: {
      type: Boolean,
      default: false
    },
    firstPageContent: {
      type: String,
      default: "First"
    },
    lastPageContent: {
      type: String,
      default: "Last"
    },
    backButtonClass: {
      type: String,
      default: "back-button"
    },
    nextButtonClass: {
      type: String,
      default: "next-button"
    },
    firstButtonClass: {
      type: String,
      default: "first-button"
    },
    lastButtonClass: {
      type: String,
      default: "last-button"
    },
    numberButtonsClass: {
      type: String,
      default: "number-buttons"
    },
    startingBreakpointButtonClass: {
      type: String,
      default: "starting-breakpoint-button"
    },
    endingBreakPointButtonClass: {
      type: String,
      default: "ending-breakpoint-button"
    },
    firstPageButtonClass: {
      type: String,
      default: "first-page-button"
    },
    lastPageButtonClass: {
      type: String,
      default: "last-page-button"
    },
    paginateButtonsClass: {
      type: String,
      default: "paginate-buttons"
    },
    disabledPaginateButtonsClass: {
      type: String,
      default: "disabled-paginate-buttons"
    },
    activePageClass: {
      type: String,
      default: "active-page"
    },
    paginationContainerClass: {
      type: String,
      default: "pagination-container"
    },
    disabledBreakPointButtonClass: {
      type: String,
      default: "disabled-breakpoint-button"
    },
    backwardJumpButtonClass: {
      type: String,
      default: "backward-jump-button"
    },
    forwardJumpButtonClass: {
      type: String,
      default: "forward-jump-button"
    },
    disabledBackwardJumpButtonClass: {
      type: String,
      default: "disabled-backward-jump-button"
    },
    disabledBackButtonClass: {
      type: String,
      default: "disabled-back-button"
    },
    disabledFirstButtonClass: {
      type: String,
      default: "disabled-first-button"
    },
    disabledLastButtonClass: {
      type: String,
      default: "disabled-last-button"
    },
    disabledNextButtonClass: {
      type: String,
      default: "disabled-next-button"
    },
    disabledForwardJumpButtonClass: {
      type: String,
      default: "disabled-forward-jump-button"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    if (props.currentPage && !props.modelValue) {
      throw new Error("currentPage/current-page is now deprecated, use v-model instead to set the current page.");
    }
    if (!props.modelValue) {
      throw new TypeError(`v-model is required for the paginate component.`);
    }
    const currentPageRef = toRef(props, "modelValue");
    const onClickHandler = (number) => {
      if (number === currentPageRef.value)
        return;
      if (number > totalPages.value)
        return;
      if (number < 1)
        return;
      if (props.disablePagination)
        return;
      emit("update:modelValue", number);
      props.onClick(number);
    };
    const NumbersLocale = (number) => {
      switch (props.locale) {
        case "en":
          return number;
        case "ar":
          return number.toLocaleString("ar-SA");
        case "ir":
          return number.toLocaleString("fa-IR");
        default:
          return number;
      }
    };
    const navigationHandler = (page) => {
      if (props.type !== "link")
        return "";
      if (props.pureLinkUrl != "#" && page == 1) {
        return props.pureLinkUrl;
      }
      return props.linkUrl.replace("[page]", page.toString());
    };
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
    const paginate = computed(() => {
      let startPage, endPage;
      if (totalPages.value <= props.maxPagesShown) {
        startPage = 1;
        endPage = totalPages.value;
      } else {
        let maxPagesShownBeforeCurrentPage = Math.floor(props.maxPagesShown / 2);
        let maxPagesShownAfterCurrentPage = Math.ceil(props.maxPagesShown / 2) - 1;
        if (currentPageRef.value <= maxPagesShownBeforeCurrentPage) {
          startPage = 1;
          endPage = props.maxPagesShown;
        } else if (currentPageRef.value + maxPagesShownAfterCurrentPage >= totalPages.value) {
          startPage = totalPages.value - props.maxPagesShown + 1;
          endPage = totalPages.value;
        } else {
          startPage = currentPageRef.value - maxPagesShownBeforeCurrentPage;
          endPage = currentPageRef.value + maxPagesShownAfterCurrentPage;
        }
      }
      let pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
      if (props.dir === "rtl") {
        pages = pages.reverse();
      }
      return {
        totalItems: props.totalItems,
        currentPage: currentPageRef.value,
        itemsPerPage: props.itemsPerPage,
        totalPages,
        startPage,
        endPage,
        pages
      };
    });
    const isRtl = computed(() => props.dir === "rtl");
    const backButtonIfCondition = computed(() => {
      if (isRtl.value)
        return !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages.value;
      return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;
    });
    const nextButtonIfCondition = computed(() => {
      if (isRtl.value)
        return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;
      return !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages.value;
    });
    const startingBreakPointButtonIfCondition = computed(() => {
      if (isRtl.value) {
        return paginate.value.pages[0] < totalPages.value - 1;
      }
      return paginate.value.pages[0] >= 3;
    });
    const endingBreakPointButtonIfCondition = computed(() => {
      if (isRtl.value) {
        return paginate.value.pages[paginate.value.pages.length - 1] >= 3;
      }
      return paginate.value.pages[paginate.value.pages.length - 1] < totalPages.value - 1;
    });
    const firstButtonIfCondition = computed(() => {
      if (isRtl.value) {
        return paginate.value.pages[0] < totalPages.value;
      }
      return paginate.value.pages[0] >= 2;
    });
    const lastButtonIfCondition = computed(() => {
      if (isRtl.value) {
        return paginate.value.pages[paginate.value.pages.length - 1] >= 2;
      }
      return paginate.value.pages[paginate.value.pages.length - 1] < totalPages.value;
    });
    const firstPageButtonIfCondition = computed(() => {
      if (currentPageRef.value === 1)
        return false;
      return true;
    });
    const lastPageButtonIfCondition = computed(() => {
      if (currentPageRef.value === totalPages.value)
        return false;
      return true;
    });
    if (props.type === "link" && props.linkUrl === "#") {
      console.error(`linkUrl attribute is required if type attribute is 'link'`);
      throw new TypeError(`linkUrl attribute is required if type attribute is 'link'`);
    }
    if (props.type === "link" && !props.linkUrl.includes("[page]")) {
      console.error(`linkUrl attribute must contain '[page]' substring`);
      throw new TypeError(`linkUrl attribute must contain '[page]' substring`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        id: "componentContainer",
        class: normalizeClass(__props.paginationContainerClass)
      }, [
        __props.showEndingButtons && unref(firstPageButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_1, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? unref(totalPages) : 1),
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onClickHandler(unref(isRtl) ? unref(totalPages) : 1), ["prevent"])),
            class: normalizeClass([
              __props.firstPageButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "first-page-button", {}, () => [
                createTextVNode(toDisplayString(__props.firstPageContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        __props.showJumpButtons && unref(startingBreakPointButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_2, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2)),
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => onClickHandler(unref(isRtl) ? unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2)), ["prevent"])),
            class: normalizeClass([
              __props.backwardJumpButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : "",
              __props.disablePagination ? __props.disabledBackwardJumpButtonClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "backward-jump-button", {}, () => [
                createTextVNode(toDisplayString(__props.backwardJumpButtonContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        !__props.hidePrevNext && unref(backButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_3, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? unref(currentPageRef) + 1 : unref(currentPageRef) - 1),
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => onClickHandler(unref(isRtl) ? unref(currentPageRef) + 1 : unref(currentPageRef) - 1), ["prevent"])),
            class: normalizeClass([
              __props.backButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : "",
              __props.disablePagination ? __props.disabledBackButtonClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "prev-button", {}, () => [
                createTextVNode(toDisplayString(__props.prevButtonContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        __props.showBreakpointButtons && unref(firstButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_4, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? unref(totalPages) : 1),
            onClick: _cache[3] || (_cache[3] = withModifiers(($event) => onClickHandler(unref(isRtl) ? unref(totalPages) : 1), ["prevent"])),
            class: normalizeClass([
              __props.firstButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : "",
              __props.disablePagination ? __props.disabledFirstButtonClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(isRtl) ? NumbersLocale(unref(totalPages)) : NumbersLocale(1)), 1)
            ]),
            _: 1
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        __props.showBreakpointButtons && unref(startingBreakPointButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_5, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(__props.disableBreakpointButtons ? unref(currentPageRef) : unref(isRtl) ? unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2)),
            onClick: _cache[4] || (_cache[4] = withModifiers(($event) => onClickHandler(__props.disableBreakpointButtons ? unref(currentPageRef) : unref(isRtl) ? unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2)), ["prevent"])),
            disabled: __props.disableBreakpointButtons || __props.disablePagination,
            class: normalizeClass([
              __props.startingBreakpointButtonClass,
              __props.paginateButtonsClass,
              __props.disableBreakpointButtons || __props.disablePagination ? `${__props.disabledPaginateButtonsClass} ${__props.disabledBreakPointButtonClass}` : ""
            ])
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "starting-breakpoint-button", {}, () => [
                createTextVNode(toDisplayString(__props.startingBreakpointContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "disabled", "class"]))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginate).pages, (page, index) => {
          return openBlock(), createElementBlock("li", { key: index }, [
            (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
              href: navigationHandler(page),
              onClick: withModifiers(() => onClickHandler(page), ["prevent"]),
              class: normalizeClass([
                __props.paginateButtonsClass,
                __props.numberButtonsClass,
                page === unref(currentPageRef) ? __props.activePageClass : "",
                __props.disablePagination ? __props.disabledPaginateButtonsClass : ""
              ]),
              disabled: __props.disablePagination
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(NumbersLocale(page)), 1)
              ]),
              _: 2
            }, 1032, ["href", "onClick", "class", "disabled"]))
          ]);
        }), 128)),
        __props.showBreakpointButtons && unref(endingBreakPointButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_6, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(__props.disableBreakpointButtons ? unref(currentPageRef) : unref(isRtl) ? unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2)),
            onClick: _cache[5] || (_cache[5] = withModifiers(($event) => onClickHandler(__props.disableBreakpointButtons ? unref(currentPageRef) : unref(isRtl) ? unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2)), ["prevent"])),
            disabled: __props.disableBreakpointButtons || __props.disablePagination,
            class: normalizeClass([
              __props.endingBreakPointButtonClass,
              __props.paginateButtonsClass,
              __props.disableBreakpointButtons || __props.disablePagination ? `${__props.disabledPaginateButtonsClass} ${__props.disabledBreakPointButtonClass}` : ""
            ])
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "ending-breakpoint-button", {}, () => [
                createTextVNode(toDisplayString(__props.endingBreakpointButtonContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "disabled", "class"]))
        ])) : createCommentVNode("", true),
        __props.showBreakpointButtons && unref(lastButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_7, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? 1 : unref(totalPages)),
            onClick: _cache[6] || (_cache[6] = withModifiers(($event) => onClickHandler(unref(isRtl) ? 1 : unref(totalPages)), ["prevent"])),
            class: normalizeClass([
              __props.lastButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : "",
              __props.disablePagination ? __props.disabledLastButtonClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(isRtl) ? NumbersLocale(1) : NumbersLocale(unref(totalPages))), 1)
            ]),
            _: 1
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        !__props.hidePrevNext && unref(nextButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_8, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? unref(currentPageRef) - 1 : unref(currentPageRef) + 1),
            onClick: _cache[7] || (_cache[7] = withModifiers(($event) => onClickHandler(unref(isRtl) ? unref(currentPageRef) - 1 : unref(currentPageRef) + 1), ["prevent"])),
            class: normalizeClass([
              __props.paginateButtonsClass,
              __props.nextButtonClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : "",
              __props.disablePagination ? __props.disabledNextButtonClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "next-button", {}, () => [
                createTextVNode(toDisplayString(__props.nextButtonContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        __props.showJumpButtons && unref(endingBreakPointButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_9, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2)),
            onClick: _cache[8] || (_cache[8] = withModifiers(($event) => onClickHandler(unref(isRtl) ? unref(currentPageRef) - Math.ceil(__props.maxPagesShown / 2) : unref(currentPageRef) + Math.ceil(__props.maxPagesShown / 2)), ["prevent"])),
            class: normalizeClass([
              __props.forwardJumpButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : "",
              __props.disablePagination ? __props.disabledForwardJumpButtonClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "forward-jump-button", {}, () => [
                createTextVNode(toDisplayString(__props.forwardJumpButtonContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true),
        __props.showEndingButtons && unref(lastPageButtonIfCondition) ? (openBlock(), createElementBlock("li", _hoisted_10, [
          (openBlock(), createBlock(resolveDynamicComponent(__props.type === "button" ? "button" : "a"), {
            href: navigationHandler(unref(isRtl) ? 1 : unref(totalPages)),
            onClick: _cache[9] || (_cache[9] = withModifiers(($event) => onClickHandler(unref(isRtl) ? 1 : unref(totalPages)), ["prevent"])),
            class: normalizeClass([
              __props.lastPageButtonClass,
              __props.paginateButtonsClass,
              __props.disablePagination ? __props.disabledPaginateButtonsClass : ""
            ]),
            disabled: __props.disablePagination
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "last-page-button", {}, () => [
                createTextVNode(toDisplayString(__props.lastPageContent), 1)
              ])
            ]),
            _: 3
          }, 8, ["href", "class", "disabled"]))
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var VueAwesomePaginatePlugin = {
  install: (app) => {
    app.component("VueAwesomePaginate", _sfc_main);
  }
};
export { _sfc_main as VueAwesomePaginate, VueAwesomePaginatePlugin as default };
