import './App.css';

import React, { Component } from 'react';

import Saludo from './containers/saludo/Saludo';
import Resultado from './Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      valor2: '',
      operacion: '',
      resultado: ' ',
    };
  }

  render() {
    return (
      <div>
        <h1 className="titulo">KANDO</h1>
        <h4 className="sectit">REACT CALCULATOR fx-82ES</h4>
        <p className="tertit"> CALCULANDO ..</p>
        <Resultado resultado={this.state.resultado} />
        <td colspan="4">
          <input class="text" type="text" id="text1" name="text1" />
        </td>
        <div class="visualizador">
          <p>
            {this.state.valor} {this.state.operacion} {this.state.valor2}
            {this.state.resultado}
          </p>
        </div>

        <input type="text" onChange={this.cambio} id="n1" />
        <input type="text" onChange={this.cambio2} id="n2" />
        <br />
        <input
          className="acbuttom"
          type="button"
          value="AC"
          onClick={this.reset}
        />
        <button onClick={this.mostrar} className="buttom-show">
          =
        </button>
        <button onClick={this.suma} className="buttom-show">
          {' '}
          +{' '}
        </button>
        <button onClick={this.resta} className="buttom-show">
          {' '}
          -{' '}
        </button>
        <button onClick={this.multiplicacion} className="buttom-show">
          {' '}
          x{' '}
        </button>
        <button onClick={this.division} className="buttom-show">
          {' '}
          ÷{' '}
        </button>
        <Saludo nombre="desde el saludo" />
      </div>
    );
  }

  cambio = (event) => {
    const newValue = event.target.value;
    this.setState({
      valor: newValue,
    });
  };
  cambio2 = (event) => {
    const newValue2 = event.target.value;
    this.setState({
      valor2: newValue2,
    });
  };
  num1 = (event) => {
    const n1 = document.getElementById('n1');
    n1.value = n1.value + 'n1';
    this.state({
      valor: n1,
    });
  };
  num2 = (event) => {
    const n2 = document.getElementById('n2');
    n2.value = n2.value + 'n2';
    this.state({
      valor2: n2,
    });
  };
  reset = () => {
    this.setState({
      valor: '',
      valor2: '',
      operacion: '',
      resultado: '',
    });
  };
  mostrar = () => {
    let resul = eval(
      this.state.valor + this.state.operacion + this.state.valor2
    );
    this.setState({
      resultado: ' = ' + resul,
    });
  };

  suma = (event) => {
    const suma = (event.target.value += '+');
    this.setState({
      operacion: suma,
    });
  };
  resta = (event) => {
    const resta = (event.target.value += '-');
    this.setState({
      operacion: resta,
    });
  };
  multiplicacion = (event) => {
    const multiplicacion = (event.target.value += '*');
    this.setState({
      operacion: multiplicacion,
    });
  };
  division = (event) => {
    const division = (event.target.value += '/');
    this.setState({
      operacion: division,
    });
  };
}

export default App;
