import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function Siigo() {
  return(
    <>
      <Layout>
        <div className="account-appe-container provider-container">
          <div className="order-head-paid">
            <Link href="/account/settings/invoices/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Siigo Nube</h2>
          </div>
          <div className="provider-status margin-bottom">
            <span className="status-circle active"></span> Activo
          </div>

          <div className="new-product-cols payment-provider">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Autenticación</h3>
                <p className="app-input input">
                  <span className="acc-label">Usuario API</span>
                  <input type="text" name="api_user" id="api_user" placeholder="Usuario API" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Access Key</span>
                  <input type="password" name="access_key" id="access_key" placeholder="Access Key" />
                </p>
                <p className="app-input">
                  <span className="acc-label">Activar / Desactivar</span>
                  <label className="switch space-r">
                    <input type="checkbox" id="environment" name="environment" value="1" />
                    <span className="slider round"></span>
                  </label>
                </p>
              </div>

              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Ajustes de facturación</h3>
                <p className="app-input input">
                  <span className="acc-label">Tipo de comprobante</span>
                  <select name="comprobante_factura" id="comprobante_factura">
                    <option value="">Seleccionar comprobante</option>
                    <option value="24446">Factura Electrónica</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Vendedor</span>
                  <select name="vendedor_factura" id="vendedor_factura">
                    <option value="">Seleccionar vendedor</option>
                    <option value="24446">test@test.com</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Forma de pago</span>
                  <select name="pago_factura" id="pago_factura">
                    <option value="">Seleccionar forma de pago</option>
                    <option value="24446">test@test.com</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Impuesto</span>
                  <select name="taxes_factura" id="taxes_factura">
                    <option value="">Seleccionar impuesto</option>
                    <option value="24446">IVA - 19.0 %</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Impuesto exportación</span>
                  <select name="taxes_factura_exp" id="taxes_factura_exp">
                    <option value="">Seleccionar impuesto</option>
                    <option value="24446">IVA - 19.0 %</option>
                  </select>
                </p>
              </div>

              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Ajustes de recibos</h3>
                <p className="app-input input">
                  <span className="acc-label">Generar recibos</span>
                  <select name="send_receipts" id="send_receipts">
                    <option value="">Seleccionar opción</option>
                    <option value="yes">Si</option>
                    <option value="no">No</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Tipo de comprobante</span>
                  <select name="comprobante_recibo" id="comprobante_recibo">
                    <option value="">Seleccionar comprobante</option>
                    <option value="24446">Recibo API</option>
                  </select>
                </p>

                <p className="app-input input">
                  <span className="acc-label">Forma de pago</span>
                  <select name="pago_recibo" id="pago_recibo">
                    <option value="">Seleccionar forma de pago</option>
                    <option value="24446">CLIENTES AC</option>
                  </select>
                </p>
              </div>

              <div className="order-box-container margin-bottom provider-other-settings">
                <h3 className="margin-bottom-15px">Ajustes adicionales</h3>
                <p className="app-input different-shipping">
                  <label className="switch space-r">
                    <input type="checkbox" id="pse" name="pse" value="1" />
                    <span className="slider round"></span>
                  </label>
                  <span className="flex flex-column">
                    <span className="strong">Configuraciones por plan</span>
                    <span>Configura diferentes ajustes de facturación y recibo por plan.</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container provider-instructions margin-bottom">
                <h3 className="margin-bottom">Instrucciones</h3>
                <p className="margin-bottom-15px">
                  <span className="strong">1.</span> <Link href="https://siigonube.siigo.com/ISIIGO2/Login.aspx?ReturnUrl=%2fISIIGO2%2fDefault.aspx" target="_blanck" className="texto-link">Ingresa a tu cuenta de Siigo Nube</Link>
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">2.</span> Haz clic en el icono de ajustes en la esquina superior derecha.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">3.</span> Coloque el mouse sobre el menú de &quot;Más configuraciones&quot;.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">4.</span> Haz clic en la opción &quot;API / Integraciones&quot;.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">5.</span> Haz clic en &quot;Credenciales Siigo API&quot; debajo de &quot;Autenticación&quot;.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">6.</span> Haz clic en el botón &quot;Guardar ajustes&quot; para cargar tus configuraciones de Siigo.
                </p>
              </div>

              <div className="gateway-buttons">
                <button className="siigow-save botones boton-violeta btn100 button-full margin-bottom-20px">Guardar ajustes</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Siigo;