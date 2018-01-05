import Vue from 'vue'
import calculator from '@/components/calculator'

describe('calculator.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(calculator)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your calculator app')
  })
})
