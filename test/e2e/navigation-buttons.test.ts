/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VueAwesomePaginate from "../../src/vue-awesome-paginate.vue";

describe("Jump Buttons", () => {
  it("should render navigation buttons under no configs", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeTruthy();
    expect(wrapper.find(".next-button").exists()).toBeTruthy();
  });

  it("should not render navigation buttons when hidePrevNext is set to true", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        hidePrevNext: true,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeFalsy();
    expect(wrapper.find(".next-button").exists()).toBeFalsy();
  });

  it("should render the next navigation button only when hidePrevNextWhenEnds is set to true and current page is 1", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 1,
        hidePrevNextWhenEnds: true,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeFalsy();
    expect(wrapper.find(".next-button").exists()).toBeTruthy();
  });

  it("should render the back navigation button only when hidePrevNextWhenEnds is set to true and current page is last one", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 10,
        hidePrevNextWhenEnds: true,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeTruthy();
    expect(wrapper.find(".next-button").exists()).toBeFalsy();
  });

  it("should render both navigation buttons only when hidePrevNextWhenEnds is set to true and current page is in the middle", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 100,
        currentPage: 5,
        hidePrevNextWhenEnds: true,
      },
    });
    expect(wrapper.find(".back-button").exists()).toBeTruthy();
    expect(wrapper.find(".next-button").exists()).toBeTruthy();
  });
});
