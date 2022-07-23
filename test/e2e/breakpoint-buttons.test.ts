/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VueAwesomePaginate from "../../src/vue-awesome-paginate.vue";

describe("First and Last Buttons", () => {
  it("should render the ending breakpoint button only when pagination is at the very beggining", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 1,
      },
    });
    expect(wrapper.find(".starting-breakpoint-button").exists()).toBeFalsy();
    expect(wrapper.find(".ending-breakpoint-button").exists()).toBeTruthy();
  });

  it("should render the starting breakpoint button only when pagination is at the very end", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 10,
      },
    });
    expect(wrapper.find(".starting-breakpoint-button").exists()).toBeTruthy();
    expect(wrapper.find(".ending-breakpoint-button").exists()).toBeFalsy();
  });

  it("should render both ending buttons when pagination is at the middle", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 5,
      },
    });
    expect(wrapper.find(".starting-breakpoint-button").exists()).toBeTruthy();
    expect(wrapper.find(".ending-breakpoint-button").exists()).toBeTruthy();
  });
});
