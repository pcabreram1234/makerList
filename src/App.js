import React, {Component} from 'react';
import Header from './Components/Header';
import FormList from './Components/FormList';
import makerList from '../src/Components/Asset/makerList.json';
import './bootstrap.min.css';
import ListResult from './Components/listResult';
import './App.css';
export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      makerList: makerList,
      tipoUnidad: 'Libra',
      enabledEditItem: false,
    };
    this.textInput = React.createRef ();
  }

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

  enabledEditItem = () => {
    let btnEditToggle = document.activeElement.classList.toggle ('save');
    let enabledInput = document.getElementsByClassName (
      document.activeElement.getAttribute ('id')
    );
    switch (btnEditToggle) {
      case true:
        for (let i = 0; i < enabledInput.length; i++) {
          enabledInput[i].removeAttribute ('disabled');
        }
        document.activeElement.removeChild (document.activeElement.children[0]);
        document.activeElement.innerHTML = `<span class="iconify" data-icon="bi:check-lg"
         data-inline="false" style="color:green">
        </span>`;
        break;

      default:
        let question = window.confirm ('Desea editar este item?');
        if (question) {
          this.startEditItem ();
        }
        for (let i = 0; i < enabledInput.length; i++) {
          enabledInput[i].setAttribute ('disabled', true);
        }
        document.activeElement.removeChild (document.activeElement.children[0]);
        document.activeElement.innerHTML = `<span class="iconify" data-icon="flat-color-icons:edit-image" 
          data-inline="false" data-width="1.8rem" data-height="1.8rem"></span>`;
        break;
    }
  };

  startEditItem = () => {
    console.log (this.textInput.current);
    const editItem = document.activeElement;
    const keyItem = editItem.getAttribute ('class').substr (10);
    const oldMakerList = this.state.makerList;
    let newItem = [];
    for (const i of oldMakerList) {
      if (i.id === keyItem) {
        newItem = {
          ...newItem,
          item: document.querySelector (`input[name=item-${keyItem}]`).value,
          precio: document.querySelector (`input[name=precio-${keyItem}]`)
            .value,
        };
      } else {
        newItem = {
          ...newItem,
          i,
        };
      }
    }
    console.log (newItem);
  };
  render () {
    return (
      <div className="container">
        <Header />
        <FormList addItem={this.addItem} />
        <ListResult
          makerList={this.state.makerList}
          toggleTipoUnidad={this.toggleTipoUnidad}
          enabledEditItem={this.enabledEditItem.bind (this)}
          textInput={this.textInput}
        />
      </div>
    );
  }
}
