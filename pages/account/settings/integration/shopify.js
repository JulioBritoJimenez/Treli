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

          <div className="order-box-container label-text-admin margin-bottom">
            <p className="app-input input">
              <span className="acc-label">Tracking ID</span>
              <input type="text" name="ga-code" id="ga-code" placeholder="UA-XXXXXXXXX-X" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Shopify;