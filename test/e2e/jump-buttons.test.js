/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VueAwesomePaginate from "../../src/vue-awesome-paginate.vue";

describe("Jump Buttons", () => {
  it("should render the forward jump button only when page is 1", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 100,
        currentPage: 1,
      },
    });
    expect(wrapper.find(".backward-jump-button").exists()).toBeFalsy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeTruthy();
  });

  it("should render the backward jump button only when page is the last one", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 100,
        currentPage: 10,
      },
    });
    // when current page is 10, only backward jump button should be rendered
    expect(wrapper.find(".backward-jump-button").exists()).toBeTruthy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeFalsy();
  });

  it("should render the both jump buttons", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: true,
        totalItems: 100,
        currentPage: 5,
      },
    });
    // when current page is 5, both jump buttons should be rendered
    expect(wrapper.find(".backward-jump-button").exists()).toBeTruthy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeTruthy();
  });

  it("should not render the jump buttons when disabled", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        showJumpButtons: false,
        totalItems: 100,
      },
    });
    // when showJumpButtons is false, no jump buttons should be rendered
    expect(wrapper.find(".backward-jump-button").exists()).toBeFalsy();
    expect(wrapper.find(".forward-jump-button").exists()).toBeFalsy();
  });
});

it("should not render the jump buttons when total-items / items-per-page is smaller than max-pages-shown", () => {
  const wrapper = mount(VueAwesomePaginate, {
    propsData: {
      showJumpButtons: true,
      totalItems: 50,
      maxPagesShown: 5,
      currentPage: 1,
    },
  });
  // when total-items / items-per-page is smaller than max-pages-shown, no jump buttons should be rendered
  expect(wrapper.find(".backward-jump-button").exists()).toBeFalsy();
  expect(wrapper.find(".forward-jump-button").exists()).toBeFalsy();
});
