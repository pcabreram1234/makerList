import React, { Component } from 'react';
import Header from './Components/Header';
import FormList from './Components/FormList';
import makerList from '../src/Components/Asset/makerList.json';
import './bootstrap.min.css';
import ListResult from './Components/listResult';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makerList: makerList,
      tipoUnidad: 'Libra',
      enabledEditItem: false,
      oldItem: [],
      itemUpate: [],
    };
  }

  componentDidMount() {
    console.log(typeof this.state.makerList)
  }



  handleChange = e => {
    this.setState({ itemNew: e.target.value });
  };

  addItem = () => {
    let total;
    let idNewItem = this.state.makerList.length;
    idNewItem === 1 ? (idNewItem = 1) : (idNewItem = idNewItem++);
    let itemSave = {
      id: idNewItem,
      item: document.getElementById('item').value,
      Precio: document.getElementById('precio').value,
      Cantidad: document.getElementById('cantidad').value,
      Unidad: document.getElementById('unidad').value,
      Total: 0,
    };
    total = itemSave.Precio * itemSave.Cantidad;
    itemSave.Total = total;
    this.setState({
      makerList: [...this.state.makerList, itemSave],
    });
    document.getElementById('formAddItem').reset();
  };

  enabledEditItem = () => {
    let btnEditToggle = document.activeElement.classList.toggle('save');
    let enabledInput = document.getElementsByClassName(
      document.activeElement.getAttribute('id')
    );
    switch (btnEditToggle) {
      case true:
        for (let i = 0; i < enabledInput.length; i++) {
          enabledInput[i].removeAttribute('disabled');
        }
        document.activeElement.removeChild(document.activeElement.children[0]);
        document.activeElement.innerHTML = `<span class="iconify" data-icon="bi:check-lg"
         data-inline="false" style="color:green">
        </span>`;
        break;

      default:
        let question = window.confirm('Desea editar este item?');
        if (question) {
          this.startEditItem();
        }
        for (let i = 0; i < enabledInput.length; i++) {
          enabledInput[i].setAttribute('disabled', true);
        }
        document.activeElement.removeChild(document.activeElement.children[0]);
        document.activeElement.innerHTML = `<span class="iconify" data-icon="flat-color-icons:edit-image" 
          data-inline="false" data-width="1.8rem" data-height="1.8rem"></span>`;
        break;
    }
  };
  startEditItem = () => {
    const editItem = document.activeElement;
    const keyItem = parseInt(editItem.getAttribute('id').substr(10));
    console.log(keyItem);
    const newItem = this.state.makerList.filter(item => item.id === keyItem);
    const oldItem = this.state.makerList.filter(item => item.id !== keyItem)
    /*     console.log(newItem.flat(2))
        console.log(oldItem) */
    /*        for (const key in newItem) {
             newItem[key].item = document.querySelector(`input[name=item-${newItem[key].id}]`).value;
           } */
    this.setState({ makerList: [...newItem.flat(2), ...oldItem] })
  };

  render() {
    return (
      <div className="container">
        <Header />
        <FormList addItem={this.addItem} />
        <ListResult
          makerList={this.state.makerList}
          toggleTipoUnidad={this.toggleTipoUnidad}
          enabledEditItem={this.enabledEditItem.bind(this)}
          textInput={this.textInput}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
