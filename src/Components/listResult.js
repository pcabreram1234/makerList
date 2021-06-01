import React, {Component} from 'react';
import {Icon} from '@iconify/react';
import PropTypes from 'prop-types';
import editImage from '@iconify-icons/flat-color-icons/edit-image';
import deleteRow from '@iconify-icons/flat-color-icons/delete-database';

class ListResult extends Component {
  render () {
    const styleTable = {
      float: 'right',
    };
    return (
      <div
        style={styleTable}
        className="col-md-6 border border-blue border-2 p-2 my-2 shadow"
      >
        <table className="table table-hover">
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
            {this.props.makerList.map (item => {
              return (
                <tr key={item.id}>
                  <td>{item.item}</td>
                  <td>{item.Precio}</td>
                  <td>{item.Cantidad}</td>
                  <td>{item.Unidad}</td>
                  <td>{item.Total}</td>
                  <td>
                    <button className="boton">
                      <Icon icon={editImage} width="1.8rem" />
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
