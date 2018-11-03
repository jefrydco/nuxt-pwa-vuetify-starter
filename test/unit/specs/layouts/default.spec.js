import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";

import Default from "~/layouts/default";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VeeValidate);

describe("Default layout", () => {
  it("renders to match snapshot", () => {
    const wrapper = mount(Default, {
      localVue,
      stubs: {
        nuxt: "nuxt",
        "router-link": RouterLinkStub
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
