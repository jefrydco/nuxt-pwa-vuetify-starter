import { mount } from "@vue/test-utils";
import VuetifyLogo from "~/components/VuetifyLogo";

describe("Vuetify logo", () => {
  it("renders to a snapshot", () => {
    const wrapper = mount(VuetifyLogo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
