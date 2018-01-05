<template>
  <div class="container">
    <div id="app">
      <div class="results div-class "> 
        <input class="input" v-model="current">
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>9</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>8</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>7</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>6</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>5</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>4</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>3</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>2</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>1</button>
        <button style=" height: 50px; width: 50px;" class="button equal-sing" v-on:click=press>=</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>C</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>*</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>/</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>√</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>x ²</button>
        <button style=" height: 50px; width: 50px;" class="button" v-on:click=press>+</button>
      </div>
    </div>    
   </div>
</template>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      current: '',
      changeMode: true
    },
    methods: {
      press: function (event) {
        let key = event.target.innerText
        if (
          key !== '=' &&
          key !== 'C' &&
          key !== '*' &&
          key !== '/' &&
          key !== '√' &&
          key !== 'x ²'
        ) {
          app.current += key
        } else if (key === '=') {
          equals()
        } else if (key === 'C') {
          clear()
        } else if (key === '*') {
          multiply()
        } else if (key === '/') {
          divide()
        } else if (key === '√') {
          squareRoot()
        } else if (key === 'x ²') {
          square()
        }
      }
    }

  })
  function equals () {
    if ((app.current).indexOf('^') > -1) {
      app.current = ("Math.pow(' + base + ' , ' + exponent +' )")
    } else {
      app.current = (app.current)
    }
  };

  function clear () {
    app.current = ''
  };

  function multiply () {
    app.current += '*'
  };

  function divide () {
    app.current += '/'
  };

  function squareRoot () {
    app.current = Math.sqrt(app.current)
  };
  function square () {
    app.current = Math.floor(app.current * app.current)
  };
  function Vue () {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.button{
  height: 50px;
   width: 50px;
}

</style>
