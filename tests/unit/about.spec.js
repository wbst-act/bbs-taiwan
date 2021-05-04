import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import About from '@/views/About.vue'

import { createLocalVue, mount } from '@vue/test-utils'

describe('About.vue', () => {
  let localVue
  let router
  let vuetify

  let wrapper

  beforeEach(() => {
    localVue = createLocalVue()
    vuetify = new Vuetify()
    router = new VueRouter()
    wrapper = mount(About, {
      localVue,
      vuetify,
      router
    })
    wrapper.setData({ builddate: new Date(1616657141217) })
  })

  it('find button', () => {
    expect(wrapper.html()).toMatchSnapshot()

    const btn = wrapper.findAll('button')
    expect(btn.length).toBe(1)
    expect(wrapper.find('i.success--text ~ div.v-alert__content').text()).toBe(
      '編譯時間 : 2021-03-25 15:25:41'
    )
    //expect(wrapper.find('.success--text > v-alert__content').text()).toBe(' 編譯時間 )
  })
})
