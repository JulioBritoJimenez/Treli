import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import GuardarCambios from "../../../../componentes/guardarCambios";

function Manual() {
  return (
    <>
      <Layout>
        <div className="account-appe-container settings-features">
          <div className="order-head-paid">
            <Link href="/account/settings/payments/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Métodos de pago offline</h2>
          </div>
          <GuardarCambios />
          <p>Permitir pagos offline, no procesados por ningún proveedor de pagos a través de Treli.</p>

          <div className="order-box-container label-text-admin margin-bottom">
            <div className="order-box">
              <div className="flex flex-center">
                <div className="strong">Pago contra entrega</div>
                <div className="text">Permite que tus clientes paguen en efectivo (u otros métodos) en el momento de la entrega.</div>
                <a className="changecod" action="activate">Activar</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Manual;