/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

import VueAwesomePaginate from "../src/components/vue-awesome-paginate.vue";

describe("First and Last Buttons", () => {
  it("should render the ending breakpoint button only when pagination is at the very beggining", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });

    expect(wrapper.find(".starting-breakpoint-button").exists()).toBeFalsy();
    expect(wrapper.find(".ending-breakpoint-button").exists()).toBeTruthy();
  });
  it("should render the starting breakpoint button only when pagination is at the very end", () => {
    const currentPage = ref(10);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".starting-breakpoint-button").exists()).toBeTruthy();
    expect(wrapper.find(".ending-breakpoint-button").exists()).toBeFalsy();
  });
  it("should render both ending buttons when pagination is at the middle", () => {
    const currentPage = ref(5);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".starting-breakpoint-button").exists()).toBeTruthy();
    expect(wrapper.find(".ending-breakpoint-button").exists()).toBeTruthy();
  });
});
