import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";

import Component from "~/components/Component";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VeeValidate);

describe("Component", () => {
  it("renders to match snapshot", () => {
    const wrapper = shallowMount(Component, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
