// ROOT ELEMENT
var app = new Vue({
  el: '#app',
  data: {
    appTitle: '装修费计算器',
    a: '',
    b: '',
    tot: 0,
    display: 0,
    operator: null
  },
  
  methods: {
    setNumber(num){
      if(this.operator === null){
        this.a += num;
        this.display = this.a;
      }
      else{
        this.b += num;
        this.display = this.b;
      }
    },
    
    calculate(){
      switch(this.operator){
        case '+':
          this.tot = parseFloat(this.a) + parseFloat(this.b);
          break;
        case '-':
          this.tot = parseFloat(this.a) - parseFloat(this.b);
          break;
        case '*':
          this.tot = parseFloat(this.a) * parseFloat(this.b);
          break;
        case '/':
          this.tot = parseFloat(this.a) / parseFloat(this.b);
          break;
      }
      this.display = this.tot;
      this.a = '' + this.tot + ''; 
      this.b = '';
      this.operator = null;
    },
    
    clear(){
      this.a = '';
      this.b = '';
      this.tot = 0;
      this.display = 0;
      this.operator = null;
    }
  }
});