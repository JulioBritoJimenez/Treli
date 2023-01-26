import Layout from "../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function CreateSubscription() {
  return(
    <>
      <Layout>
        <div className="account-appe-container create-subscription">
          <div className="order-head-paid">
            <Link href="/account/subscriptions" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Crear suscripción</h2>
          </div>

          <div className="settings-home-container pick-customer">
            <input type="hidden" name="username" id="username" value="demo" />
            <div className="settings-home-title">
              <h3>Seleccionar o crear cliente</h3>
              <p>Selecciona el cliente para el cual estas creando la suscripción</p>
            </div>
            <div className="settings-items customer-list">
              <div className="customer-list-customers">
                <a className="flex-no-space list-item hover-white">
                  <div className="input flex-grow">
                    <input type="text" id="customer-search" name="customer-search" placeholder="Buscar por nombre/email" />
                  </div>
                </a>
                <div className="customer-list-results"></div>
              </div>
            </div>
          </div>

          <div className="settings-home-container select-product"></div>

          <div className="settings-home-container select-payment"></div>

          <div className="settings-home-container select-product"></div>
        </div>
      </Layout>
    </>
  )
}

export default CreateSubscription;