import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";

function NotificacionesWhatsapp() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-container">
          <div className="order-head-paid">
            <Link href="/account/settings/notifications-management/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Notificaciones por WhatsApp</h2>
          </div>
          <p>Envía notificaciones de recuperación de ingresos a través de WhatsApp para reducir la rotación y recuperar pagos.</p>

          <div className="settings-home-container payments-and-subscriptions">
            <div className="settings-home-title">
              <h3>Recuperación de ingresos</h3>
              <p>Reduce la rotación y recupera los pagos fallidos. Configura recordatorios de pago para tus clientes.</p>
            </div>
            <div className="settings-items">
              <Link href="/account/settings/notifications/whatsapp" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Renovación de suscripción fallida</div>
                  <div>Notifica a tus clientes cuando falle la renovación de una suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/whatsapp" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Solicitud de pago</div>
                  <div>Notificar a los clientes para solicitar un pago</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/whatsapp" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Renovación manual de suscripción</div>
                  <div>Notificar a los clientes para solicitar pagos por renovaciones manuales de suscripción</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/notifications/whatsapp" className="flex-no-space list-item">
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

export default NotificacionesWhatsapp;