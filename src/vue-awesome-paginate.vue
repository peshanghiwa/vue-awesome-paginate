<script setup lang="ts">
import { computed, ref, toRef } from "vue";

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
  // !-- Not published yet
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
  // !-- Not published yet
  href: {
    type: String,
    default: "#",
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
  disablePagination: {
    type: Boolean,
    default: false,
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
  // !-- Not published yet
  linkUrl: {
    type: String,
    default: "#",
    validator: (value: number) => {
      const message = "currentPage attribute must be greater than 0.";
      if (value <= 0) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  backwardJumpButtonContent: {
    type: String,
    default: "<<",
  },
  forwardJumpButtonContent: {
    type: String,
    default: ">>",
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
});

// -------------- //
// ---> Refs <--- //
// -------------- //
const currentPageRef = ref(props.currentPage);
// -------------- //
// ---> To Refs <--- //
// -------------- //
const isDisablePagination = toRef(props, 'disablePagination');

// ----------------- //
// ---> Methods <--- //
// ----------------- //
const onClickHandler = (number: number) => {
  // if number is equal to the current page, do nothing
  if (number === currentPageRef.value) return;

  // if number is greater than the total pages, do nothing
  if (number > totalPages) return;

  // if number is less than 1, do nothing
  if (number < 1) return;

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
  return props.linkUrl.replace("[page]", page.toString());
};

// ----------------------------- //
// ---> Computed properties <--- //
// ----------------------------- //
//calculating total pages
const { value: totalPages } = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);
// Pagination logic
const paginate = computed(() => {
  let startPage: number, endPage: number;
  // if total pages are less than maximum pages to be displayed (maxPagesShown), then show all pages
  if (totalPages <= props.maxPagesShown) {
    startPage = 1;
    endPage = totalPages;
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
      totalPages
    ) {
      // current page is at the end of the pagination
      startPage = totalPages - props.maxPagesShown + 1;
      endPage = totalPages;
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
    return !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages;

  return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;
});
const nextButtonIfCondition = computed(() => {
  if (isRtl.value)
    return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;

  return !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages;
});
const startingBreakPointButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[0] < totalPages - 1;
  }

  return paginate.value.pages[0] >= 3;
});
const endingBreakPointButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[paginate.value.pages.length - 1] >= 3;
  }

  return paginate.value.pages[paginate.value.pages.length - 1] < totalPages - 1;
});
const firstButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[0] < totalPages - 1;
  }

  return paginate.value.pages[0] >= 3;
});
const lastButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[paginate.value.pages.length - 1] >= 3;
  }

  return paginate.value.pages[paginate.value.pages.length - 1] < totalPages - 1;
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
// if (props.type === "link" && props.linkUrl === "#") {
//   console.error(`linkUrl attribute is required if type attribute is 'link'`);
//   throw new TypeError(
//     `linkUrl attribute is required if type attribute is 'link'`
//   );
// }

// if type attribute is link, then linkUrl string must contain "[page]"
// if (props.type === "link" && !props.linkUrl.includes("[page]")) {
//   console.error(`linkUrl attribute must contain '[page]' substring`);
//   throw new TypeError(`linkUrl attribute must contain '[page]' substring`);
// }
</script>

<template>
  <!-- If the type prop is 'button' following template will render -->
  <ul v-if="type === 'button'" :class="paginationContainerClass">
    <!-- Backward Jump Button -->
    <li v-if="showJumpButtons && startingBreakPointButtonIfCondition">
      <button
        @click="
          onClickHandler(
            isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[backwardJumpButtonClass, paginateButtonsClass]"
        :disabled="isDisablePagination"
      >
        <slot name="backward-jump-button">
          {{ backwardJumpButtonContent }}
        </slot>
      </button>
    </li>

    <!-- Back Button -->
    <li v-if="!hidePrevNext && backButtonIfCondition">
      <button
        @click="onClickHandler(isRtl ? currentPageRef + 1 : currentPageRef - 1)"
        :class="[backButtonClass, paginateButtonsClass]"
        :disabled="isDisablePagination"
      >
        <slot name="prev-button">
          {{ prevButtonContent }}
        </slot>
      </button>
    </li>

    <!-- First Button before Starting Breakpoint Button -->
    <li v-if="showBreakpointButtons && firstButtonIfCondition">
      <button
        @click="onClickHandler(isRtl ? totalPages : 1)"
        :class="[firstButtonClass, paginateButtonsClass]"
        :disabled="isDisablePagination"
      >
        {{ isRtl ? NumbersLocale(totalPages) : NumbersLocale(1) }}
      </button>
    </li>

    <!-- Starting Breakpoint Button -->
    <li v-if="showBreakpointButtons && startingBreakPointButtonIfCondition">
      <button
        @click="
          onClickHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[
          startingBreakpointButtonClass,
          paginateButtonsClass,
          disableBreakpointButtons ? disabledBreakPointButtonClass : '',
        ]"
        :disabled="disableBreakpointButtons || disablePagination"
      >
        <slot name="starting-breakpoint-button">
          {{ startingBreakpointContent }}
        </slot>
      </button>
    </li>

    <!-- Numbers Buttons -->
    <li v-for="(page, index) in paginate.pages" :key="index">
      <button
        @click="() => onClickHandler(page)"
        :class="[
          paginateButtonsClass,
          numberButtonsClass,
          page === currentPageRef ? activePageClass : '',
        ]"

        :disabled="isDisablePagination"
      >
        {{ NumbersLocale(page) }}
      </button>
    </li>

    <!-- Ending Breakpoint Button -->
    <li v-if="showBreakpointButtons && endingBreakPointButtonIfCondition">
      <button
        @click="
          onClickHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[
          endingBreakPointButtonClass,
          paginateButtonsClass,
          disableBreakpointButtons ? disabledBreakPointButtonClass : '',
        ]"
        :disabled="disableBreakpointButtons || isDisablePagination"
      >
        <slot name="ending-breakpoint-button">
          {{ endingBreakpointButtonContent }}
        </slot>
      </button>
    </li>

    <!-- Last Button after Ending Breakingpoint Button-->
    <li v-if="showBreakpointButtons && lastButtonIfCondition">
      <button
        @click="onClickHandler(isRtl ? 1 : totalPages)"
        :class="[lastButtonClass, paginateButtonsClass]"
        :disabled="isDisablePagination"
      >
        {{ isRtl ? NumbersLocale(1) : NumbersLocale(totalPages) }}
      </button>
    </li>

    <!-- Next Button -->
    <li v-if="!hidePrevNext && nextButtonIfCondition">
      <button
        @click="onClickHandler(isRtl ? currentPageRef - 1 : currentPageRef + 1)"
        :class="[paginateButtonsClass, nextButtonClass]"
        :disabled="isDisablePagination"
      >
        <slot name="next-button">
          {{ nextButtonContent }}
        </slot>
      </button>
    </li>

    <!-- Forward Jump Button -->
    <li v-if="showJumpButtons && endingBreakPointButtonIfCondition">
      <button
        @click="
          onClickHandler(
            isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[forwardJumpButtonClass, paginateButtonsClass]"
        :disabled="isDisablePagination"
      >
        <slot name="forward-jump-button">
          {{ forwardJumpButtonContent }}
        </slot>
      </button>
    </li>
  </ul>

  <!-- If the type prop is 'link' following template will render -->
  <ul v-if="type === 'link'" :class="paginationContainerClass">
    link paginate is not available yet
  </ul>
</template>

<style scoped>
ul {
  /* resetting default stylings for ul tag */
  padding-inline-start: 0;
  list-style-type: none;
  display: flex;
}

a {
  /* resetting default stylings for a tag */
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
