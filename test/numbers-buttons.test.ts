/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";

import VueAwesomePaginate from "../src/components/vue-awesome-paginate.vue";

describe("First and Last Buttons", () => {
  it("should render 5 number buttons by default when total items are more than or equal to 50", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 50,
        modelValue: currentPage,
      },
    });
    expect(wrapper.find(".number-buttons").exists()).toBeTruthy();
    expect(wrapper.findAll(".number-buttons").length).toBe(5);
  });
  it("should render 3 number buttons when maxPagesShown is set to 3", () => {
    const currentPage = ref(1);
    const wrapper = mount(VueAwesomePaginate, {
      propsData: {
        totalItems: 50,
        modelValue: currentPage,
        maxPagesShown: 3,
      },
    });
    expect(wrapper.find(".number-buttons").exists()).toBeTruthy();
    expect(wrapper.findAll(".number-buttons").length).toBe(3);
  });
});
