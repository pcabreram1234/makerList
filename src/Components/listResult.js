import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import deleteRow from '@iconify-icons/flat-color-icons/delete-database';

class ListResult extends Component {

  constructor(props) {
    super(props)
    this.toggleTipoUnidad = this.toggleTipoUnidad.bind(this)
  }

  toggleTipoUnidad = first => {
    let second = '';
    first = 'libra' ? (second = 'Paquete') : (second = 'libra');
    return second;
  };

  componentDidUpdate() {
    console.log(this.props.makerList)
  }
  render() {
    const styleTable = {
      float: 'right',
      width: '100%',
    };

    const styleInputText = {
      width: '90%',
      textAlign: 'center',
    };
    return (
      <div
        style={styleTable}
        className="border border-blue border-2 p-2 my-2 shadow"
      >
        <table className="table table-hover text-center ">
          <thead>
            <tr>
              <th>item</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Total</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.makerList.map(item => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      className={`inputEdit-${item.id}`}
                      name={`item-${item.id}`}
                      type="text"
                      defaultValue={item.item}
                      pattern="[A-Z]"
                      disabled={true}
                      style={styleInputText}
                      ref={this.props.textInput}
                      onChange={this.props.handleChange}
                    />
                  </td>
                  <td>
                    <input
                      className={`inputEdit-${item.id}`}
                      name={`precio-${item.id}`}
                      type="number"
                      pattern="[0-9]"
                      defaultValue={item.Precio}
                      disabled
                      style={styleInputText}
                    />
                  </td>
                  <td>
                    <input
                      className={`inputEdit-${item.id}`}
                      name={`cantidad-${item.id}`}
                      type="number"
                      pattern="[0-9]"
                      defaultValue={item.Cantidad}
                      disabled
                      style={styleInputText}
                    />
                  </td>
                  <td>
                    <select
                      className="form-select inputEdit"
                      name={`btnEdit-${item.id}`}
                      disabled
                    >
                      <option value={item.Unidad} defaultValue>
                        {item.Unidad}
                      </option>
                      <option value={this.toggleTipoUnidad(item.Unidad)}>
                        {this.toggleTipoUnidad(item.Unidad)}
                      </option>
                    </select>
                  </td>
                  <td>{item.Total}</td>
                  <td>
                    <button
                      className="boton"
                      onClick={this.props.enabledEditItem}
                      id={`inputEdit-${item.id}`}
                    >
                      <span
                        className="iconify"
                        data-icon="flat-color-icons:edit-image"
                        data-inline="false"
                        data-width="1.8rem"
                        data-height="1.8rem"
                      />
                    </button>
                  </td>
                  <td>
                    <button className="boton">
                      <Icon icon={deleteRow} width="1.8rem" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ListResult.propTypes = {
  makerList: PropTypes.array.isRequired,
};

export default ListResult;
