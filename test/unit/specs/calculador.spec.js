import Vue from 'vue'
import calculator from '@/components/calculator'

describe('calculator.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(calculator)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your calculator app')
  });
  it('should run press button ',function (press){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run clear button',function (clear){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run backSpace button',function (backSpace){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run multiply button',function (multiply){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run divide button',function (divide){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run plus button',function (plus){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run minus button',function (minus){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run sin button',function (sin){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run cos',function (cos){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run',function (tan){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run log button',function (log){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run squareRoot button',function (squareRoot){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
    it('should run square',function (square){
    const button = calculatorCopenent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    calculatorCopenent._watcher.run();
  });
})