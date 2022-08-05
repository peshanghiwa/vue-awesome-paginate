<script setup lang="ts">
import { computed, ref } from "vue";

// -------------------- //
// ---> Properties <--- //
// -------------------- //
const props = defineProps({
  // Configuration props
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
    validator: (value: number) => {
      if (value <= 0) {
        const message = "itemsPerPage attribute must be greater than 0.";
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  currentPage: {
    type: Number,
    default: 1,
    validator: (value: number) => {
      const message = "currentPage attribute must be greater than 0.";
      if (value <= 0) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  maxPagesShown: {
    type: Number,
    default: 5,
    validator: (value: number) => {
      const message = "maxPagesShown attribute must be greater than 0.";
      if (value <= 0) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  dir: {
    type: String,
    default: "ltr",
    validator: (value: string) => {
      const message = 'dir attribute must be either "ltr" or "rtl".';
      if (value !== "ltr" && value !== "rtl") {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  type: {
    type: String,
    default: "button",
    validator: (value: string) => {
      const validTypess = ["link", "button"];
      const message =
        "type attribute must be one of the following: " +
        validTypess.join(", ");
      if (validTypess.indexOf(value) === -1) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  locale: {
    type: String,
    default: "en",
    validator: (value: string) => {
      const validLocales = ["en", "ar", "ir"];
      const message =
        "locale attribute must be one of the following: " +
        validLocales.join(", ");
      if (validLocales.indexOf(value) === -1) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  prevButtonContent: {
    type: String,
    default: "<",
  },
  nextButtonContent: {
    type: String,
    default: ">",
  },
  hidePrevNext: {
    type: Boolean,
    default: false,
  },
  hidePrevNextWhenEnds: {
    type: Boolean,
    default: false,
  },
  showBreakpointButtons: {
    type: Boolean,
    default: true,
  },
  disableBreakpointButtons: {
    type: Boolean,
    default: false,
  },
  startingBreakpointContent: {
    type: String,
    default: "...",
  },
  endingBreakpointButtonContent: {
    type: String,
    default: "...",
  },
  showJumpButtons: {
    type: Boolean,
    default: false,
  },
  linkUrl: {
    type: String,
    default: "#",
  },
  backwardJumpButtonContent: {
    type: String,
    default: "<<",
  },
  forwardJumpButtonContent: {
    type: String,
    default: ">>",
  },
  disablePagination: {
    type: Boolean,
    default: false,
  },

  // Class props
  backButtonClass: {
    type: String,
    default: "back-button",
  },
  nextButtonClass: {
    type: String,
    default: "next-button",
  },
  // not included in the documentation yet
  firstButtonClass: {
    type: String,
    default: "first-button",
  },
  // not included in the documentation yet
  lastButtonClass: {
    type: String,
    default: "last-button",
  },
  numberButtonsClass: {
    type: String,
    default: "number-buttons",
  },
  startingBreakpointButtonClass: {
    type: String,
    default: "starting-breakpoint-button",
  },
  endingBreakPointButtonClass: {
    type: String,
    default: "ending-breakpoint-button",
  },

  // use this selector above all the other selectors because of css specificity
  paginateButtonsClass: {
    type: String,
    default: "paginate-buttons",
  },
  disabledPaginateButtonsClass: {
    type: String,
    default: "disabled-paginate-buttons",
  },
  activePageClass: {
    type: String,
    default: "active-page",
  },
  paginationContainerClass: {
    type: String,
    default: "pagination-container",
  },
  disabledBreakPointButtonClass: {
    type: String,
    default: "disabled-breakpoint-button",
  },
  backwardJumpButtonClass: {
    type: String,
    default: "backward-jump-button",
  },
  forwardJumpButtonClass: {
    type: String,
    default: "forward-jump-button",
  },
  disabledBackwardJumpButtonClass: {
    type: String,
    default: "disabled-backward-jump-button",
  },
  disabledBackButtonClass: {
    type: String,
    default: "disabled-back-button",
  },
  // not included in the documentation yet
  disabledFirstButtonClass: {
    type: String,
    default: "disabled-first-button",
  },
  // not included in the documentation yet
  disabledLastButtonClass: {
    type: String,
    default: "disabled-last-button",
  },
  disabledNextButtonClass: {
    type: String,
    default: "disabled-next-button",
  },
  disabledForwardJumpButtonClass: {
    type: String,
    default: "disabled-forward-jump-button",
  },
});

// -------------- //
// ---> Refs <--- //
// -------------- //
const currentPageRef = ref(props.currentPage);

// ----------------- //
// ---> Methods <--- //
// ----------------- //
const onClickHandler = (number: number) => {
  // if number is equal to the current page, do nothing
  if (number === currentPageRef.value) return;

  // if number is greater than the total pages, do nothing
  if (number > totalPages.value) return;

  // if number is less than 1, do nothing
  if (number < 1) return;

  // if pagination is disabled, do nothing
  if (props.disablePagination) return;

  currentPageRef.value = number;
  props.onClick(number);
};
const NumbersLocale = (number: number) => {
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
const navigationHandler = (page: number) => {
  if (props.type !== "link") return "";
  return props.linkUrl.replace("[page]", page.toString());
};

// ----------------------------- //
// ---> Computed properties <--- //
// ----------------------------- //
//calculating total pages
const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);
// Pagination logic
const paginate = computed(() => {
  let startPage: number, endPage: number;
  // if total pages are less than maximum pages to be displayed (maxPagesShown), then show all pages
  if (totalPages.value <= props.maxPagesShown) {
    startPage = 1;
    endPage = totalPages.value;
  } else {
    // total pages is more than maxPagesShown...
    // calculating start and end pages
    let maxPagesShownBeforeCurrentPage = Math.floor(props.maxPagesShown / 2);
    let maxPagesShownAfterCurrentPage = Math.ceil(props.maxPagesShown / 2) - 1;
    if (currentPageRef.value <= maxPagesShownBeforeCurrentPage) {
      // current page is at the start of the pagination
      startPage = 1;
      endPage = props.maxPagesShown;
    } else if (
      currentPageRef.value + maxPagesShownAfterCurrentPage >=
      totalPages.value
    ) {
      // current page is at the end of the pagination
      startPage = totalPages.value - props.maxPagesShown + 1;
      endPage = totalPages.value;
    } else {
      // current page is somewhere in the middle of the pagination
      startPage = currentPageRef.value - maxPagesShownBeforeCurrentPage;
      endPage = currentPageRef.value + maxPagesShownAfterCurrentPage;
    }
  }
  // create an array of pages to be displayed
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  if (props.dir === "rtl") {
    pages = pages.reverse();
  }

  return {
    totalItems: props.totalItems,
    currentPage: currentPageRef.value,
    itemsPerPage: props.itemsPerPage,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    pages: pages,
  };
});
// rtl check
const isRtl = computed(() => props.dir === "rtl");

// ---------------------------------- //
// ---> Components If Conditions <--- //
// ---------------------------------- //
const backButtonIfCondition = computed(() => {
  if (isRtl.value)
    return (
      !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages.value
    );

  return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;
});
const nextButtonIfCondition = computed(() => {
  if (isRtl.value)
    return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;

  return (
    !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages.value
  );
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

  return (
    paginate.value.pages[paginate.value.pages.length - 1] < totalPages.value - 1
  );
});
const firstButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[0] < totalPages.value - 1;
  }

  return paginate.value.pages[0] >= 3;
});
const lastButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[paginate.value.pages.length - 1] >= 3;
  }

  return (
    paginate.value.pages[paginate.value.pages.length - 1] < totalPages.value - 1
  );
});

// --------------------------- //
// ---> Validations Check <--- //
// --------------------------- //
// current page can't be greater than total pages
// if (currentPageRef.value > totalPages) {
//   console.log("currentPage must be less than or equal to totalPages.");
//   throw new TypeError(`currentPage must be less than or equal to totalPages.`);
// }

// if type attribute is link, then linkUrl attribute is required
if (props.type === "link" && props.linkUrl === "#") {
  console.error(`linkUrl attribute is required if type attribute is 'link'`);
  throw new TypeError(
    `linkUrl attribute is required if type attribute is 'link'`
  );
}

// if type attribute is link, then linkUrl string must contain "[page]"
if (props.type === "link" && !props.linkUrl.includes("[page]")) {
  console.error(`linkUrl attribute must contain '[page]' substring`);
  throw new TypeError(`linkUrl attribute must contain '[page]' substring`);
}
</script>

<template>
  <!-- If the type prop is 'button' following template will render -->
  <ul id="componentContainer" :class="paginationContainerClass">
    <!-- Backward Jump Button -->
    <li v-if="showJumpButtons && startingBreakPointButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[
          backwardJumpButtonClass,
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledBackwardJumpButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="backward-jump-button">
          {{ backwardJumpButtonContent }}
        </slot>
      </component>
    </li>

    <!-- Back Button -->
    <li v-if="!hidePrevNext && backButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(isRtl ? currentPageRef + 1 : currentPageRef - 1)
        "
        @click.prevent="
          onClickHandler(isRtl ? currentPageRef + 1 : currentPageRef - 1)
        "
        :class="[
          backButtonClass,
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledBackButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="prev-button">
          {{ prevButtonContent }}
        </slot>
      </component>
    </li>

    <!-- First Button before Starting Breakpoint Button -->
    <li v-if="showBreakpointButtons && firstButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(isRtl ? totalPages : 1)"
        @click.prevent="onClickHandler(isRtl ? totalPages : 1)"
        :class="[
          firstButtonClass,
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledFirstButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        {{ isRtl ? NumbersLocale(totalPages) : NumbersLocale(1) }}
      </component>
    </li>

    <!-- Starting Breakpoint Button -->
    <li v-if="showBreakpointButtons && startingBreakPointButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        :disabled="disableBreakpointButtons || disablePagination"
        :class="[
          startingBreakpointButtonClass,
          paginateButtonsClass,
          disableBreakpointButtons || disablePagination
            ? `${disabledPaginateButtonsClass} ${disabledBreakPointButtonClass}`
            : '',
        ]"
      >
        <slot name="starting-breakpoint-button">
          {{ startingBreakpointContent }}
        </slot>
      </component>
    </li>

    <!-- Numbers Buttons -->
    <li v-for="(page, index) in paginate.pages" :key="index">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(page)"
        @click.prevent="() => onClickHandler(page)"
        :class="[
          paginateButtonsClass,
          numberButtonsClass,
          page === currentPageRef ? activePageClass : '',
          disablePagination ? disabledPaginateButtonsClass : '',
        ]"
        :disabled="disablePagination"
      >
        {{ NumbersLocale(page) }}
      </component>
    </li>

    <!-- Ending Breakpoint Button -->
    <li v-if="showBreakpointButtons && endingBreakPointButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        :disabled="disableBreakpointButtons || disablePagination"
        :class="[
          endingBreakPointButtonClass,
          paginateButtonsClass,
          disableBreakpointButtons || disablePagination
            ? `${disabledPaginateButtonsClass} ${disabledBreakPointButtonClass}`
            : '',
        ]"
      >
        <slot name="ending-breakpoint-button">
          {{ endingBreakpointButtonContent }}
        </slot>
      </component>
    </li>

    <!-- Last Button after Ending Breakingpoint Button-->
    <li v-if="showBreakpointButtons && lastButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(isRtl ? 1 : totalPages)"
        @click.prevent="onClickHandler(isRtl ? 1 : totalPages)"
        :class="[
          lastButtonClass,
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledLastButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        {{ isRtl ? NumbersLocale(1) : NumbersLocale(totalPages) }}
      </component>
    </li>

    <!-- Next Button -->
    <li v-if="!hidePrevNext && nextButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(isRtl ? currentPageRef - 1 : currentPageRef + 1)
        "
        @click.prevent="
          onClickHandler(isRtl ? currentPageRef - 1 : currentPageRef + 1)
        "
        :class="[
          paginateButtonsClass,
          nextButtonClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledNextButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="next-button">
          {{ nextButtonContent }}
        </slot>
      </component>
    </li>

    <!-- Forward Jump Button -->
    <li v-if="showJumpButtons && endingBreakPointButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[
          forwardJumpButtonClass,
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledForwardJumpButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="forward-jump-button">
          {{ forwardJumpButtonContent }}
        </slot>
      </component>
    </li>
  </ul>
</template>

<style scoped>
ul {
  /* resetting default stylings for ul tag */
  padding-inline-start: 0;
  list-style-type: none;
  display: inline-flex;
}

a {
  /* resetting default stylings for a tag */
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
