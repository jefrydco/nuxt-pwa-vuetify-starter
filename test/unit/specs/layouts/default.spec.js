import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Default from '~/layouts/default'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('Default layout', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders to match snapshot', () => {
    const wrapper = mount(Default, {
      localVue,
      vuetify,
      stubs: {
        nuxt: 'nuxt',
        'router-link': RouterLinkStub,
        'nuxt-link': RouterLinkStub,
        'nuxt-child': 'nuxt-child'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
