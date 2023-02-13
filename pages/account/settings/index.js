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
                <div className="strong">Perfil del negocio</div>
                <div>Dirección del negocio.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/subscription-changes">
              <div className="text">
                <div className="strong">Ajuste de suscripciones</div>
                <div>Configura cómo te gustaría manejar las suscripciones de tus clientes.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/payment-settings">
              <div className="text">
                <div className="strong">Pagos</div>
                <div>Configura reglas y pasarelas de pago.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/invoices">
              <div className="text">
                <div className="strong">Facturación</div>
                <div>Automatiza la generación de facturas y recibos mediante la integración con un proveedor externo.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/currencies">
              <div className="text">
                <div className="strong">Monedas</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/shipping/">
              <div className="text">
                <div className="strong">Envíos</div>
                <div>Configura las reglas de envío si vendes productos físicos</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/integration">
              <div className="text">
                <div className="strong">Integraciones</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
          </div>
        </div>

        <div className="settings-home-container customer-facing-essentials">
          <div className="settings-home-title">
            <h3>Esenciales de cara al cliente</h3>
            <p>Configura los estilos de su marca, envía correos electrónicos personalizados y administra la experiencia pago y del portal de autoservicio de tus clientes.</p>
          </div>
          <div className="settings-items">
            <Link className="flex-no-space list-item" href="/account/appearance/">
              <div className="text">
                <div className="strong">Estilos de marca</div>
                <div>Agrega un toque de tu marca a tu página de pago, correos electrónicos y más. Haz que tus clientes se familiaricen con tu marca.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/notifications-management/">
              <div className="text">
                <div className="strong">Notificaciones</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/checkout">
              <div className="text">
                <div className="strong">Página de pago</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/self-serve-portal">
              <div className="text">
                <div className="strong">Portal de autoservicio</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>

            <Link className="flex-no-space list-item" href="/account/settings/treli-store">
              <div className="text">
                <div className="strong">Treli tienda</div>
                <div>Configure si deseas que tus clientes accedan a tus productos a través de una tienda potenciada por Treli.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
          </div>
        </div>

        <div className="settings-home-container revenue-recovery">
          <div className="settings-home-title">
            <h3>Recuperación de ingresos</h3>
            <p>Recupera los pagos fallidos y reduce las cancelaciones involuntaria.</p>
          </div>
          <div className="settings-items">
            <Link className="flex-no-space list-item" href="/account/settings/dunning">
              <div className="text">
                <div className="strong">Reclamación</div>
                <div>Configura cómo quieres que Treli vuelva a intentar el cobro de pagos fallidos para los clientes que pagan con tarjetas de crédito y débito.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
          </div>
        </div>

        <div className="settings-home-container customer-data-privacy">
          <div className="settings-home-title">
            <h3>API Keys y Webhooks</h3>
            <p>Administra tus claves de API y la configuración de webhooks.</p>
          </div>
          <div className="settings-items">
            <Link className="flex-no-space list-item" href="/account/settings/api">
              <div className="text">
                <div className="strong">API Keys</div>
                <div>Las API keys se utilizan para autenticar tu aplicación y controlar tu acceso a la API de Treli.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
            <Link className="flex-no-space list-item" href="/account/settings/webhooks">
              <div className="text">
                <div className="strong">Webhooks</div>
                <div>Los webhooks notifican a tu aplicación sobre los eventos que ocurren en Treli, como el estado de pago y las renovaciones de suscripción.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
          </div>
        </div>

        <div className="settings-home-container customer-data-privacy">
          <div className="settings-home-title">
            <h3>Privacidad de datos del cliente</h3>
            <p>Configura cómo manejas la privacidad de los datos de tus clientes y configura tus políticas.</p>
          </div>
          <div className="settings-items">
            <Link className="flex-no-space list-item" href="/account/settings/customer-policies">
              <div className="text">
                <div className="strong">Política</div>
                <div>Configura la política de privacidad y los términos y condiciones.</div>
              </div>
              <span className="settings-item-go"><BsChevronRight /></span>
            </Link>
            <Link className="flex-no-space list-item" href="/account/settings/consent-management">
              <div className="text">
                <div className="strong">Gestión de consentimiento</div>
                <div>Configura las opciones de consentimiento y obtén el consentimiento de tus clientes antes de procesar datos personales.</div>
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