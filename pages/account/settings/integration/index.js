import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function Integraciones() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-features">
        <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Integraciones</h2>
          </div>
          <p>Administra tus integraciones de Treli.</p>

          <div className="order-box-container label-text-admin margin-bottom">
            <div className="order-box">
              <div className="flex">
                <div className="strong">Google Analytics</div>
                <div className="text">Google Analytics te permite hacer seguimiento de los visitantes y compras en tu tienda.</div>
                <Link href="/account/settings/integration/google-analytics/">Administrar</Link>
              </div>
            </div>
            <div className="order-box">
              <div className="flex">
                <div className="strong">Shopify</div>
                <div className="text">Conecta Treli con tu tienda de Shopify para sincronizar pedidos. Treli creará un pedido en Shopify cada vez que se apruebe un pago.</div>
                <Link href="/account/settings/integration/shopify/">Administrar</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Integraciones;