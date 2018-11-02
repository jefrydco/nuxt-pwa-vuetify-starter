import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";

import Inspire from "~/pages/inspire";

describe("Inspire", () => {
  let wrapper;

  beforeAll(() => {
    const localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = shallowMount(Inspire, {
      localVue,
      stubs: ["nuxt-logo", "vuetify-logo"]
    });
  });

  it("renders to a snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
