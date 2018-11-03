import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";

import Index from "~/pages/index";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VeeValidate);

describe("Index", () => {
  it("renders to match snapshot", () => {
    const wrapper = shallowMount(Index, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
