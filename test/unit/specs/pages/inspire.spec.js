import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Inspire from '~/pages/inspire'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('Inspire', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders to match snapshot', () => {
    const wrapper = shallowMount(Inspire, {
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
