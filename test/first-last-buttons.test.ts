/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

import VueAwesomePaginate from "../src/components/vue-awesome-paginate.vue";

describe("First and Last Buttons", () => {
  it("should render the last button only when pagination is at the very beggining", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeFalsy();
    expect(wrapper.find(".last-button").exists()).toBeTruthy();
  });
  it("should render the first button only when pagination is at the very end", () => {
    const currentPage = ref(10);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeTruthy();
    expect(wrapper.find(".last-button").exists()).toBeFalsy();
  });
  it("should render both ending buttons only when pagination is at the middle", () => {
    const currentPage = ref(5);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeTruthy();
    expect(wrapper.find(".last-button").exists()).toBeTruthy();
  });
  it("should render both ending buttons only when pagination is at the middle", () => {
    const currentPage = ref(5);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".first-button").exists()).toBeTruthy();
    expect(wrapper.find(".last-button").exists()).toBeTruthy();
  });
});
