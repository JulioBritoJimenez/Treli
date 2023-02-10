import Layout from "../../../componentes/layout";
import { useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

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
            <div className="head-status status-style status-processing">Activo</div>
          </div>
          <div className="order-head-paid">
            <Link href="/account/coupons" className="order-back"><BsArrowLeftShort /></Link>
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

                <div className="order-box">
                  <p className="app-input input">
                    <span className="acc-label">Requerimientos de compra</span>
                    <input className="takeval" type="number" name="usagelimit" id="usagelimit" placeholder="Uso ilimitado" />
                  </p>
                  <p className="app-input input">
                    <span className="acc-label">Requerimientos de compra</span>
                    <input className="takeval" type="number" name="usagelimituser" id="usagelimituser" placeholder="Uso ilimitado" />
                  </p>
                </div>

                <div className="order-box style-check">
                  <p className="app-input">
                    <span className="acc-label">Excluir productos en descuento</span>
                    <label className="check-container">Este cupón no debe aplicarse a productos en descuento
                      <input className="takeval" type="checkbox" id="nosale" name="nosale" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                  <p className="app-input">
                    <span className="acc-label">Envío gratis</span>
                    <label className="check-container">Este cupón permite envío gratis
                      <input className="takeval" type="checkbox" id="freeship" name="freeship" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                </div>
              </div>
            </div>

            <div className="new-product-col2 coupon-summary">
              <div className="order-box-container margin-bottom">
                <h3 className="h3-borde margin-bottom">Resumen</h3>
                <p className="app-input input">
                  <span className="acc-label">Estado</span>
                  <select className="takeval" name="status" id="status">
                    <option value="active">Activo</option>
                    <option value="draft">Borrador</option>
                  </select>
                </p>
                <p className="app-input">
                  <span className="acc-label">Uso / límite</span>
                  <span className="usagelimit">0 / 10</span>
                </p>
              </div>

              <div className="order-box-container">
                <h3 className="h3-borde margin-bottom">Fechas del cupón</h3>
                <div className="order-box">
                  <p className="app-input input">
                    <span className="acc-label">Fecha de inicio</span>
                    <input className="takeval" type="date" name="startdate" id="startdate" placeholder="Fecha de inicio" />
                  </p>
                  <p className="app-input input">
                    <span className="acc-label">Fecha final</span>
                    <input className="takeval" type="date" name="enddate" id="enddate" placeholder="Fecha final" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NuevoCupon;