import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  somaCompras(comprasCliente){
    const comprasTotal = comprasCliente.reduce((acc, {preco}) =>  acc + Number(preco), 0);
    return comprasTotal
  }

  renderColorValue(somaCompras){
    if(somaCompras > 10000){
      return <span style={{color: "red"}}>Você consumiu acima de R$10.000</span>
    }else{
      return <span style={{color: "green"}}>Você consumiu abaixo de R$10.000</span>
    }
  }

  render() {
    const styleTitle = {
      color: 'blue',
      fontSize: '20px',
      fontFamily: 'Fantasy'
    };

    const clienteJoao = {
      nome: 'João',
      idade: 37,
      compras: [
        { nome: 'Notebook', preco: '2500' },
        { nome: 'Motocicleta"', preco: '10000' },
        { nome: 'Smartphone', preco: '1500' },
        { nome: "Conjunto de panelas", preco: '2000' },
      ],
      cidade: "Belém",
    };

    const clienteMaria = {
      nome: 'Maria',
      idade: 18,
      compras: [
        { nome: 'Computador', preco: '2500' },
        { nome: 'Coletânia de livros', preco: '1000' },
        { nome: 'Smartphone', preco: '1500' },
      ],
      cidade: "Rio de Janeiro",
    };

    const {nome: joao, idade: idadeJoao, compras: comprasJoao} = clienteJoao;
    const {nome: maria, idade: idadeMaria, compras: comprasMaria} = clienteMaria;

    const somaComprasJoao = this.somaCompras(comprasJoao);
    const somaComprasMaria = this.somaCompras(comprasMaria);

      return (
        <div>
          <h1 style={styleTitle}>Clientes Magazine Giuliza</h1>
          <div>
            <p>A cliente {maria}:</p>
            <ul>
              <li>Tem {idadeMaria} anos;</li>
              <li>E consumiu o total de R${somaComprasMaria}</li>
              {this.renderColorValue(somaComprasMaria)}
              
            </ul>
    
            <p>O cliente {joao}:</p>
            <ul>
              <li>Tem {idadeJoao} anos;</li>
              <li>E consumiu o total de R${somaComprasJoao}.</li>
              {this.renderColorValue(somaComprasJoao)}
            </ul>
            < Footer />
          </div>
        </div>
        );
    }
  }    

export default App;
