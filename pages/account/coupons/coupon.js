import Layout from "../../../componentes/layout";
import { useState } from 'react';

function NuevoCupon() {

  const [productos, setProductos] = useState(false);
  const productosClic = () => {
    setProductos(!productos);
  };

  const [minima, setMinima] = useState(false);
  const minimaClic = () => {
    setMinima(!minima);
  };

  return(
    <>
      <Layout>
        <div className="agregar-nuevo nuevo-cupon">
          <div className="order-head">
            <h2>Nuevo cupón</h2>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <p className="app-input input">
                  <span className="acc-label">Código</span>
                  <input type="text" name="name" id="name" placeholder="Código del cupón" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Tipo</span>
                  <select className="takeval" name="coupontype" id="coupontype">
                    <option value="percent">Descuento en porcentaje</option>
                    <option value="fixed_cart">Descuento fijo</option>
                    <option value="recurring_percent">Descuento en porcentaje % recurrente</option>
                    <option value="recurring_fee">Descuento fijo recurrente</option>
                  </select>
                </p>
                <p className="app-input input">
                  <span className="acc-label">Valor</span>
                  <input className="takeval" type="number" name="value" id="value" placeholder="Coupon value" />
                </p>
              </div>

              <div className="order-box-container">
                <h3 className="h3-borde margin-bottom">Restricciones de uso</h3>
                <div className="order-box">
                  <p className="app-input radio-buttons input">
                    <span className="acc-label">Aplica a</span>
                    <span className="radio-buttons-container">
                      <label className="check-container">Todos los productos
                        <input className="takeval checkapplies" type="radio" id="allp" name="applies_to" value="allp" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="check-container">Productos específicos
                        <input className="takeval checkapplies" type="radio" id="productsp" name="applies_to" value="productsp" onClick={productosClic} />
                        <span className="checkmark"></span>
                      </label>
                      <span className={`select-products hidden ${productos ? "active": ""}` .trimEnd()}>
                        <select name="product_apply" id="product_apply">
                          <option value="0">Seleccionar productos</option>
                          <option value="1">30 dias</option>
                          <option value="2">Nuevo template</option>
                        </select>
                      </span>
                    </span>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input radio-buttons input">
                    <span className="acc-label">Requerimientos de compra</span>
                    <span className="radio-buttons-container">
                      <label className="check-container">Ninguno
                        <input className="takeval checkreq" type="radio" id="none" name="purchase_req" value="none" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="check-container">Compra mínima ($)
                        <input className="takeval checkreq" type="radio" id="minimumpur" name="purchase_req" value="minimumpur" onClick={minimaClic} />
                        <span className="checkmark"></span>
                      </label>
                      <span className={`select-products hidden ${minima ? "active": ""}` .trimEnd()}>
                        <input className="takeval" type="number" name="minpurchase" id="minpurchase" placeholder="$0.00" />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container">
                <h3 className="h3-borde margin-bottom">Resumen</h3>
                <p className="app-input input">
                  <span className="acc-label">Estado</span>
                  <select className="takeval" name="status" id="status">
                    <option value="active">Activo</option>
                    <option value="draft">Borrador</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NuevoCupon;