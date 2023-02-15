import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function Shopify() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-features">
        <div className="order-head-paid">
            <Link href="/account/settings/integration/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Shopify</h2>
          </div>
          <p>Conecta Treli con tu tienda de Shopify para sincronizar pedidos. Treli creará un pedido en Shopify cada vez que se apruebe un pago.</p>

          <div className="new-product-cols payment-providers">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Conexión con Shopify</h3>
                <p className="app-input">
                  <span className="acc-label">Activar / Desactivar</span>
                  <label className="switch space-r">
                    <input type="checkbox" id="shopify_active" name="shopify_active" value="1" />
                    <span className="slider round"></span>
                  </label>
                </p>
                <p className="app-input">
                  <span className="acc-label">Estado</span>
                  <span className="provider-status">
										<span className="status-circle inactive"></span> Inactivo
                  </span>
                </p>
                <p className="app-input">
                  <span className="acc-label">Tienda</span>
                  <span className="input">treli-dev.myshopify.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Shopify;