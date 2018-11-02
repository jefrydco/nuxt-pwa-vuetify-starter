import { mount } from "@vue/test-utils";
import NuxtLogo from "~/components/NuxtLogo";

describe("Nuxt logo", () => {
  it("renders to a snapshot", () => {
    const wrapper = mount(NuxtLogo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
