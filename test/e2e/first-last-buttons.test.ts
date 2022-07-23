/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VueAwesomePaginate from "../../src/vue-awesome-paginate.vue";

describe("First and Last Buttons", () => {
  it("should render the last button only when pagination is at the very beggining", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 1,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeFalsy();
    expect(wrapper.find(".last-button").exists()).toBeTruthy();
  });

  it("should render the first button only when pagination is at the very end", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 10,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeTruthy();
    expect(wrapper.find(".last-button").exists()).toBeFalsy();
  });

  it("should render both ending buttons only when pagination is at the middle", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 5,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeTruthy();
    expect(wrapper.find(".last-button").exists()).toBeTruthy();
  });

  it("should render both ending buttons only when pagination is at the middle", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 5,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeTruthy();
    expect(wrapper.find(".last-button").exists()).toBeTruthy();
  });
});
