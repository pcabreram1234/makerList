import React, {Component} from 'react';

export default class FormList extends Component {
  preventDefault = e => {
    e.preventDefault ();
  };

  addItem = () => {
    this.props.addItem ();
  };

  render () {
    return (
      <div className="col-md-3 border border-blue border-2 p-2 my-2 shadow float-start">
        <div className="input-group">
          <form action="?" onSubmit={this.preventDefault.bind (this)}>
            <div className="input-group my-2 col-8">
              <span className="input-group-text">Item</span>
              <input
                type="text"
                id="item"
                placeholder="Articulo"
                className="form-control"
                required
              />
            </div>

            <div className="input-group my-2 col-8">
              <span className="input-group-text">Precio</span>
              <input
                type="number"
                id="precio"
                placeholder="Precio"
                className="form-control"
                required
              />
            </div>

            <div className="input-group my-2 col-8">
              <span className="input-group-text">Cantidad</span>
              <input
                type="number"
                id="cantidad"
                placeholder="Cantidad"
                className="form-control"
                required
              />
            </div>

            <div className="input-group my-2 col-8">
              <span className="input-group-text">Unidad</span>
              <select className="form-select" id="unidad">
                <option value="Libra" defaultValue>Libra</option>
                <option value="Paquete">Paquete</option>
              </select>
            </div>

            <div className="input-group my-2 col-8 text-center d-flex justify-content-center align-content-center">
              <span className="badge bg-success">Total RD$: </span>
              <span id="total" className="badge bg bg-info">13,000</span>
            </div>

            <div className="input-group aling-content-center justify-content-center text-center">
              <button
                className="btn  btn-outline-success"
                onClick={this.addItem}
                type="submit"
              >
                Aceptar
              </button>

              <button
                className="btn  btn-outline-secondary "
                type="button"
                id="btnCancelar"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
