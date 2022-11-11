/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

import VueAwesomePaginate from "../src/components/vue-awesome-paginate.vue";

describe("Jump Buttons", () => {
  it("should render the forward jump button only when page is 1", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".backward-jump-button").exists()).toBeFalsy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeTruthy();
  });
  it("should render the backward jump button only when page is the last one", () => {
    const currentPage = ref(10);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".backward-jump-button").exists()).toBeTruthy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeFalsy();
  });
  it("should render the both jump buttons", () => {
    const currentPage = ref(5);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".backward-jump-button").exists()).toBeTruthy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeTruthy();
  });
  it("should not render the jump buttons when disabled", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: false,
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".backward-jump-button").exists()).toBeFalsy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeFalsy();
  });
  it("should not render the jump buttons when total-items / items-per-page is smaller than max-pages-shown", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 50,
        maxPagesShown: 5,
        itemsPerPage: 10,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".backward-jump-button").exists()).toBeFalsy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeFalsy();
  });
});
