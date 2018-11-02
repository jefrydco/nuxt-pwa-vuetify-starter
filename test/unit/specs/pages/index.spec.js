import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";

import Index from "~/pages/index";

describe("Index", () => {
  let wrapper;

  beforeAll(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = shallowMount(Index, {
      localVue,
      stubs: ["nuxt-logo", "vuetify-logo"]
    });
  });

  it("renders to a snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
