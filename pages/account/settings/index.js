import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsChevronRight } from "react-icons/bs";

function Settings() {
  return (
    <>
      <Layout>
        <h2 className="margin-bottom">Configura Treli</h2>
        <p>Configura cómo administras los pagos recurrentes, las suscripciones, los clientes, la facturación y más.</p>
        <div className="settings-home-container payments-and-subscriptions">
          <div className="settings-home-title">
            <h3>Esenciales de tu negocio</h3>
            <p>Configura los elementos esenciales de tu negocio. Administra reglas de suscripción, pasarelas de pago y más.</p>
          </div>
          <div className="settings-items">
            <Link className="flex-no-space list-item" href="/account/settings/business-profile">
              <div className="text">
                <div className="strong">Nombre Apellido</div>
                <div>Dirección del negocio</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/subscription-changes">
              <div className="text">
                <div className="strong">Ajuste de suscripciones</div>
                <div>Configura cómo te gustaría manejar las suscripciones de tus clientes</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Settings;