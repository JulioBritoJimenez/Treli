import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function WhatsAppSolicitudPago() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/whatsapp-notifications/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Solicitud de pago</h2>
          </div>
          <GuardarCambios  />
          <p>Notificar a los clientes para solicitar un pago.</p>

          <div className="new-product-cols settings-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Activar / Desactivar</span>
                    <label className="switch space-r">
                        <input type="checkbox" notification_id="payment_request" id="activate" name="activate" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>
              </div>
            </div>

            <div className="new-product-col2 email-preview"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default WhatsAppSolicitudPago;