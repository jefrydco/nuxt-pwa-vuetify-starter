import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/default";

describe("Default layout", () => {
  let wrapper;

  beforeAll(() => {
    const localVue = createLocalVue();

    localVue.use(Vuetify);

    wrapper = shallowMount(DefaultLayout, {
      localVue,
      stubs: ["nuxt"]
    });
  });

  it("renders to a snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
