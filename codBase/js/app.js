var operandoa;
var operandob;
var operacion;


    function init(){
      //variables
      var display = document.getElementById('display');
      var reset = document.getElementById('on');
      var suma = document.getElementById('mas');
      var resta = document.getElementById('menos');
      var multiplicacion = document.getElementById('por');
      var division = document.getElementById('dividido');
      var punto = document.getElementById('punto');
      var masmenos = document.getElementById('sign');
      var raiz = document.getElementById('raiz');
      var igual = document.getElementById('igual');
      var uno = document.getElementById('1');
      var dos = document.getElementById('2');
      var tres = document.getElementById('3');
      var cuatro = document.getElementById('4');
      var cinco = document.getElementById('5');
      var seis = document.getElementById('6');
      var siete = document.getElementById('7');
      var ocho = document.getElementById('8');
      var nueve = document.getElementById('9');
      var cero = document.getElementById('0');

        uno.onclick = function(e){
      display.textContent = display.textContent  + "1";
  }
  dos.onclick = function(e){
      display.textContent = display.textContent  + "2";
  }
  tres.onclick = function(e){
      display.textContent = display.textContent  + "3";
  }
  cuatro.onclick = function(e){
      display.textContent = display.textContent  + "4";
  }
  cinco.onclick = function(e){
      display.textContent = display.textContent  + "5";
  }
  seis.onclick = function(e){
      display.textContent = display.textContent  + "6";
  }
  siete.onclick = function(e){
      display.textContent = display.textContent  + "7";
  }
  ocho.onclick = function(e){
      display.textContent = display.textContent  + "8";
  }
  nueve.onclick = function(e){
      display.textContent = display.textContent  + "9";
  }
  cero.onclick = function(e){
      display.textContent = display.textContent  + "0";
  }
  punto.onclick = function(e){
      display.textContent = display.textContent  + ".";

  }


  reset.onclick = function(e){
      resetear();
  }


  suma.onclick = function(e){
      operandoa = display.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = display.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = display.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = display.textContent;
      operacion = "/";
      limpiar();
  }
  raiz.onclick = function(e){
      operandoa = display.textContent;
      operacion = "√";
      limpiar();
  }
  masmenos.onclick = function(e){
      operandoa = display.textContent;
      operacion = "+/-";

  }


  igual.onclick = function(e){
      operandob = display.textContent;
      resolver();
  }
    

        function limpiar(){
      display.textContent = "";
    }
    function resetear(){
      display.textContent = "";
      operandoa = 0;
      operandob = 0;
      operacion = "";
    }

        function resolver(){
      var res = 0;
      switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "/":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;


      }
      resetear();
      display.textContent = res;
    }

  }
