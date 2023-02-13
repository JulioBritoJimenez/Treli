import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";

function ConfiguracionPago() {
  return(
    <>
      <Layout>
        <div className="account-appe-container settings-container noti-management">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Configuración de pago</h2>
          </div>
          <p>Administra los métodos, pasarelas de pago y configuraciones de pago.</p>

          <div className="settings-home-container payments-and-subscriptions">
            <div className="settings-home-title"></div>
            <div className="settings-items">
              <div className="settings-items">
                <Link href="/account/settings/payments/" className="flex-no-space list-item">
                  <div className="text">
                    <div className="strong">Métodos de pago</div>
                    <div>Administrar métodos de pago y pasarelas.</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </Link>

                <Link href="/account/settings/programmed-payments/" className="flex-no-space list-item">
                  <div className="text">
                    <div className="strong">Plantillas de pago</div>
                    <div>Crear y administrar plantillas de pago.</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </Link>

                <Link href="/account/settings/smart-routing/" className="flex-no-space list-item">
                  <div className="text">
                    <div className="strong">Enrutamiento inteligente</div>
                    <div>El enrutamiento inteligente te permite configurar las reglas de las pasarelas de pago, según la moneda de pago.</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ConfiguracionPago;