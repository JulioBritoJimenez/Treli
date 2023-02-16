import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";

function NotificacionesCorreo() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-container">
          <div className="order-head-paid">
            <Link href="/account/settings/notifications-management/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Notificaciones por correo</h2>
          </div>
          <p>Notifica a tus clientes por correo electrónico a lo largo del ciclo de vida, los pagos y la recuperación de ingresos de tus clientes.</p>

          <div className="settings-home-container payments-and-subscriptions">
            <div className="settings-home-title">
              <h3>Gestión de suscripciones</h3>
              <p>Envía correos electrónicos atractivos a lo largo del ciclo de vida de sus clientes.</p>
            </div>
            <div className="settings-items">
              <Link href="/account/settings/notifications/subs-renewal" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Renovación de suscripción</div>
                  <div>Notifica a tus clientes cuando se renueva una suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/subs-renewal-reminder" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Recordatorio de renovación de suscripción</div>
                  <div>Recordar a los clientes dos días antes de la renovación de una suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Suscripción cancelada</div>
                  <div>Notifica a tus clientes cuando se cancela una suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Suscripción pausada</div>
                  <div>Notifica a tus clientes cuando una suscripción está en pausa</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Suscripción reactivada</div>
                  <div>Notifica a tus clientes cuando se reactiva una suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Pedido de suscripción completado</div>
                  <div>Notifica a tus clientes si vende productos físicos y su pedido de suscripción está completo</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>
            </div>
          </div>

          <div className="settings-home-container payments-and-subscriptions">
            <div className="settings-home-title">
              <h3>Pagos</h3>
              <p>Mantén a tus clientes informados sobre iniciaciones de pago, pagos exitosos y fallidos.</p>
            </div>
            <div className="settings-items">
              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Pago pendiente</div>
                  <div>Notifica a tus clientes cuando un pago está pendiente de confirmación del banco</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Pago aprobado</div>
                  <div>Notifica a tus clientes cuando se aprueba un pago</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Pago rechazado</div>
                  <div>Notifica a tus clientes clientes cuando falla un pago</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/payment-request" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Solicitud de pago</div>
                  <div>Notificar a los clientes para solicitar pagos únicos</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>
            </div>
          </div>

          <div className="settings-home-container payments-and-subscriptions">
            <div className="settings-home-title">
              <h3>Recuperación de ingresos</h3>
              <p>Reduce la rotación y recupera los pagos fallidos. Configura recordatorios de pago para tus clientes.</p>
            </div>
            <div className="settings-items">
              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Renovación de suscripción fallida</div>
                  <div>otifica a tus clientes cuando falle la renovación de una suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Solicitud de pago</div>
                  <div>Notifica a tus clientes para solicitar pagos de renovaciones de suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/notificacion" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Activación de suscripción</div>
                  <div>Notifica a tus clientes para solicitar que completen un pago para activar las suscripciones creadas manualmente</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotificacionesCorreo;