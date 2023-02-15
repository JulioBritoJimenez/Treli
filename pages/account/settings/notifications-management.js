import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";

function Notificaciones() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-container noti-management">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Gestión de notificaciones</h2>
          </div>
          <p>Mantén a tus clientes actualizados sobre sus suscripciones y pagos.</p>

          <div className="settings-home-container payments-and-subscriptions">
            <div className="settings-home-title"></div>
            <div className="settings-items">
              <Link href="/account/settings/email-notifications" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Notificaciones por correo</div>
                  <div>Administra y personaliza las notificaciones por correo electrónico</div>
                </div>
                <span className="settings-item-go"><BsChevronRight /></span>
              </Link>

              <Link href="/account/settings/whatsapp-notifications" className="flex-no-space list-item">
                <div className="text">
                  <div className="strong">Notificaciones por WhatsApp</div>
                  <div>Activar o desactivar las notificaciones de whatsApp</div>
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

export default Notificaciones;