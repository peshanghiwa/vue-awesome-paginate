/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VueAwesomePaginate from "../src/vue-awesome-paginate.vue";

describe("First and Last Buttons", () => {
  it("should render 5 number buttons by default when total items are more than or equal to 50", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 50,
        currentPage: 1,
      },
    });
    expect(wrapper.find(".number-buttons").exists()).toBeTruthy();
    expect(wrapper.findAll(".number-buttons").length).toBe(5);
  });

  it("should render 3 number buttons when maxPagesShown is set to 3", () => {
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 50,
        currentPage: 1,
        maxPagesShown: 3,
      },
    });
    expect(wrapper.find(".number-buttons").exists()).toBeTruthy();
    expect(wrapper.findAll(".number-buttons").length).toBe(3);
  });
});
