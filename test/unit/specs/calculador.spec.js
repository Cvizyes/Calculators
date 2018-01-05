import Vue from 'vue'
import calculator from '@/components/calculator'

describe('calculator.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(calculator)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your calculator app')
  });
  it('should run equals button ',function (equals){
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
    
  })
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
  })
}
