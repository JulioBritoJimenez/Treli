import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";

function NotificacionesClientes() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-emails">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Notificaciones de clientes</h2>
          </div>
          <GuardarCambios />
          <h3 className="margin-bottom">Notificaciones por correo</h3>
          <p>Agrega contenido adicional a las notificaciones por correo enviadas a los usuarios.</p>

          <div className="order-box-container">
            <p className="app-input input">
              <span className="acc-label">Pago pendientes
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando el pago esta pendiente por confirmar por el banco</span>
              <a className="send-sample texto-link" data-function="send_pending_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailpending" id="emailpending" placeholder="Ingresa contenido adicional para los correos de pagos pendientes" />
            </p>

            <p className="app-input input">
              <span className="acc-label">Procesar pedido
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando el pago es confirmado y la orden cambia a procesando</span>
              <a className="send-sample texto-link" data-function="send_processing_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailprocessing" id="emailprocessing" placeholder="Ingresa contenido adicional para los correos de ordenes en proceso" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotificacionesClientes;