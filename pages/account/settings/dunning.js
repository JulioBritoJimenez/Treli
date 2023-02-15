import Layout from "../../../componentes/layout";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';
import { useState } from 'react';

function Reclamacion() {

  const [show, setShow] = useState(false);

  const showClic = () => {
    setShow(!show);
  };

  return (
    <>
      <Layout>
        <div className="account-appe-container settings-dunning settings-ganalytics">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Reclamación</h2>
          </div>

          <p>La reclamación es el proceso de reintentar los cobros de pagos fallidos cuando se rechaza una transacción. Configura cómo quieres que Treli vuelva a intentar el cobro de pagos fallidos para los clientes que pagan con tarjetas de crédito y débito. <Link href="https://treli.readme.io/docs/reclamaci%C3%B3n" target="_blank">Aprende más</Link></p>

          <div className="order-box-container margin-bottom">
            <div className="order-box">
              <p className="app-input input label-flex1">
                <span className="acc-label">Activar reclamación</span>
                <label className="switch space-r">
                  <input type="checkbox" className="change-dunning-status" value="1" onClick={showClic} />
                  <span className="slider round"></span>
                </label>
              </p>
            </div>
          </div>

          <div className={`order-box-container margin-bottom hidden ${show ? "active": ""}` .trimEnd()}>
            <div className="settings-box">
              <p className="app-input input label-flex1">
                <span className="acc-label">
                  <span>Cuando finaliza el período de reclamación, ¿Qué ocurre con las suscripciones?</span><br />
                  <span className="weight-normal">Acción final que se tomará al final del período de reclamación, si el pago aún está pendiente.</span>
                </span>
                <span>
                  <select id="dunning-last_action">
                    <option value="pending">Mantener como pausada</option>
                    <option value="cancel">Cancelar suscripción</option>
                  </select>
                </span>
              </p>
            </div>
          </div>

          <button className="botones boton-violeta button-full">Guardar</button>
        </div>
      </Layout>
    </>
  )
}

export default Reclamacion;