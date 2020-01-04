import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'

import VuetifyLogo from '~/components/VuetifyLogo'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('VuetifyLogo', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders to match snapshot', () => {
    const wrapper = shallowMount(VuetifyLogo, {
      localVue,
      vuetify,
      stubs: {
        'nuxt-link': RouterLinkStub,
        'nuxt-child': 'nuxt-child'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
