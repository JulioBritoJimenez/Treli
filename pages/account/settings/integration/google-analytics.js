import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function GoogleAnalytics() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-features">
        <div className="order-head-paid">
            <Link href="/account/settings/integration/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Google Analytics</h2>
          </div>
          <p>Google Analytics te permite hacer seguimiento de los visitantes y compras en tu tienda y generar informes que te ayudarán con tus esfuerzos de marketing. Debes habilitar &quot;enhanced ecommerce reporting&quot; de Google Analytics. De forma predeterminada, Google crea propiedades de Google Analytics 4, que no son compatibles con Treli. Asegúrate de crear una propiedad de Universal Analytics.</p>

          <div className="order-box-container label-text-admin margin-bottom">
            <p className="app-input input">
              <span className="acc-label">Tracking ID</span>
              <input type="text" name="ga-code" id="ga-code" placeholder="UA-XXXXXXXXX-X" />
            </p>
          </div>
          <button className="botones boton-violeta button-full">Guardar</button>

          <div className="usefull-links">
            <h4 className="margin-bottom-15px">Ayuda</h4>
            <div><Link href="https://support.google.com/analytics/answer/10269537" target="_blank">¿Cómo crear una propiedad universal de Google Analytics?</Link></div>
            <div><Link href="https://www.semrush.com/blog/google-analytics-tracking-id/" target="_blank">¿Cómo encontrar mi &quot;tracking ID&quot; de Google Analytics?</Link></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default GoogleAnalytics;