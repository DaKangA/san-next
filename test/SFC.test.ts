import { mount } from '@vue/test-utils'
import SCF from '@/components/SFC.vue'

describe('SFC', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SCF)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
