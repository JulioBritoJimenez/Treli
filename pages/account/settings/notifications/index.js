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

            <p className="app-input input">
              <span className="acc-label">Orden cancelada
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando una orden es cancelada</span>
              <a className="send-sample texto-link" data-function="send_cancelled_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailcancelled" id="emailcancelled" placeholder="Ingresa contenido adicional para los correos de ordenes canceladas" />
            </p>

            <p className="app-input input">
              <span className="acc-label">Orden completada
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando una orden es completada</span>
              <a className="send-sample texto-link" data-function="send_completed_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailcompleted" id="emailcompleted" placeholder="Ingresa contenido adicional para los correos de ordenes completadas" />
            </p>

            <p className="app-input input">
              <span className="acc-label">Renovación de suscripción
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando una suscripción es renovada</span>
              <a className="send-sample texto-link" data-function="send_renewal_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailrenewed" id="emailrenewed" placeholder="Ingresa contenido adicional para los correos de renovación de suscripción" />
            </p>

            <p className="app-input input">
              <span className="acc-label">Suscripción cancelada
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando una suscripción es cancelada</span>
              <a className="send-sample texto-link" data-function="send_subscancelled_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailsubscancelled" id="emailsubscancelled" placeholder="Ingresa contenido adicional para los correos de cancelación de suscripción" />
            </p>

            <p className="app-input input">
              <span className="acc-label">Renovación de suscripción fallida
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando una renovación de suscripción falla</span>
              <a className="send-sample texto-link" data-function="send_subsfailed_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailrenewedfail" id="emailrenewedfail" placeholder="Ingresa contenido adicional para los correos de renovación de suscripción fallida" />
            </p>

            <p className="app-input input">
              <span className="acc-label">Suscripción pausada
              <span className="acc-label-sub weight-normal margin-bottom-15px">Correo enviado cuando una suscripción es pausada</span>
              <a className="send-sample texto-link" data-function="send_subspaused_email">Enviar correo de prueba</a>
              </span>
              <textarea className="takeval" rows="7" name="emailpaused" id="emailpaused" placeholder="Ingresa contenido adicional para los correos de suscripciones pausadas" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotificacionesClientes;