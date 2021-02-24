import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('add two number together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1')
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract two numbers', () => {
    const wrapper =shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 5
    wrapper.vm.multiply('3')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('Check that multiple thing are clicked', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('5')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick('1')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(6)
  })

  it('Check to clear button', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('5')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('5')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('5')
    wrapper.vm.clearClick()
    wrapper.vm.numberClick('7')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(17)

  })

})
