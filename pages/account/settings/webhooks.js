import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function Webhooks() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Webhooks</h2>
          </div>
          <GuardarCambios  />
          <p>Los webhooks notifican a tu aplicación sobre eventos que ocurren en Treli, como pagos y renovaciones de suscripciones. Treli espera una respuesta HTTP 2XX al POST</p>

          <button className="botones boton-violeta button-full">+ Agregar webhook</button>
        </div>
      </Layout>
    </>
  )
}

export default Webhooks;