import GuardarCambios from "../../../../componentes/guardarCambios";
import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsExclamationCircle } from "react-icons/bs";

function ZonaEnvio() {
  return (
    <>
      <Layout>
        <div className="account-appe-container shipping-zone-container">
          <h2 className="margin-bottom">New shipping zone</h2>
          <GuardarCambios />

          <div className="settings-head status-filter flex">
            <Link href="/account/settings/" className="settings-head-item">General</Link>
            <Link href="/account/settings/payments" className="settings-head-item">Pagos</Link>
            <Link href="/account/settings/shipping" className="settings-head-item plist-activestyle">Envíos</Link>
            <Link href="/account/settings/notifications" className="settings-head-item">Notificaciones</Link>
            <Link href="/account/settings/features" className="settings-head-item">Herramientas</Link>
            <Link href="/account/settings/integration" className="settings-head-item">Integraciones</Link>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <p className="app-input input">
                  <span className="acc-label">Nombre</span>
                  <span className="globito-cont">
                    <span className="globito"><BsExclamationCircle /></span>
                    <span className="globito-text">Tus clientes verán esto al finalizar la compra.</span>
                  </span>
                  <input type="text" name="zone_name" id="zone_name" placeholder="Tarifa fija" />
                </p>

                <p className="app-input input">
                  <span className="acc-label">Country</span>
                  <select name="zone_country" id="zone_country">
                    <option value="0">Seleccionar país</option>
                    <option value="CO">Colombia</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Estado/departamento</span>
                  <select className="selectmultiple" name="zone_state" id="zone_state">
                    <option value="all_states">Todos los estados/departamentos</option>
                    <option value="ATL">Atlántico</option>
                  </select>
                </p>
              </div>

              <div className="order-box-container shipping-rate">
                <div className="order-box">
                  <h3>Tarifa de envío</h3>
                </div>
                <div className="order-box">
                  <div className="app-input zone_method">
                    <span className="acc-label">Método</span>
                    <span className="radio-buttons-container">
                      <label className="check-container strong">Costo fijo
                        <input type="radio" className="zone-method" id="fixed" name="zone_method" value="fixed" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="check-container strong">Envío gratis
                        <input type="radio" className="zone-method" id="free" name="zone_method" value="free" />
                        <span className="checkmark"></span>
                      </label>
                    </span>
                  </div>
                </div>
                <div className="order-box">
                  <p className="app-input input">
                    <span className="acc-label">Costo</span>
                    <input type="text" name="zone_cost" id="zone_cost" placeholder="$0.00" />
                  </p>
                </div>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container">
                <h3 className="margin-bottom">Estado</h3>
                <p className="app-input zone-active-status input">
                  <span className="acc-label">Estado</span>
                  <select name="zone_active" id="zone_active">
                    <option value="active">Activo</option>
                    <option value="inactive">Inactivo</option>
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

export default ZonaEnvio;