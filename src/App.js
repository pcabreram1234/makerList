import React, {Component} from 'react';
import Header from './Components/Header';
import FormList from './Components/FormList';
import makerList from '../src/Components/Asset/makerList.json';
import './bootstrap.min.css';
import ListResult from './Components/listResult';
import './App.css';
export default class App extends Component {
  state = {
    makerList: makerList,
  };

  addItem = () => {
    let total;
    let itemSave = {
      id: this.state.makerList.length + 1,
      item: document.getElementById ('item').value,
      Precio: document.getElementById ('precio').value,
      Cantidad: document.getElementById ('cantidad').value,
      Unidad: document.getElementById ('unidad').value,
      Total: 0,
    };
    total = itemSave.Precio * itemSave.Cantidad;
    itemSave.Total = total;
    this.setState ({
      makerList: [...this.state.makerList, itemSave],
    });
  };

  render () {
    return (
      <div className="container">
        <Header />
        <FormList addItem={this.addItem} />
        <ListResult makerList={this.state.makerList} />
      </div>
    );
  }
}
