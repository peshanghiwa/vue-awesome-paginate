/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

import VueAwesomePaginate from "../src/components/vue-awesome-paginate.vue";

describe("Jump Buttons", () => {
  it("should render navigation buttons under no configs", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeTruthy();
    expect(wrapper.find(".next-button").exists()).toBeTruthy();
  });
  it("should not render navigation buttons when hidePrevNext is set to true", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        hidePrevNext: true,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeFalsy();
    expect(wrapper.find(".next-button").exists()).toBeFalsy();
  });
  it("should render the next navigation button only when hidePrevNextWhenEnds is set to true and current page is 1", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        hidePrevNextWhenEnds: true,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeFalsy();
    expect(wrapper.find(".next-button").exists()).toBeTruthy();
  });
  it("should render the back navigation button only when hidePrevNextWhenEnds is set to true and current page is last one", () => {
    const currentPage = ref(10);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        hidePrevNextWhenEnds: true,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeTruthy();
    expect(wrapper.find(".next-button").exists()).toBeFalsy();
  });
  it("should render both navigation buttons only when hidePrevNextWhenEnds is set to true and current page is in the middle", () => {
    const currentPage = ref(5);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        hidePrevNextWhenEnds: true,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeTruthy();
    expect(wrapper.find(".next-button").exists()).toBeTruthy();
  });
});
