import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import Link from 'next/link';

function Webhooks() {

  const [webhook, setWebhook] = useState(false);
  const showWebhook = () => {
    setWebhook(true);
  };
  const handleWebhook = () => {
    setWebhook(false);
  };

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

          <div className="order-box-container margin-bottom-30px">
            <div className="order-box">
              <div className="flex">
                <div className="strong wh-name">Prueba</div>
                <div className="text wh-url">treli.co</div>
                <a onClick={showWebhook}>Editar</a>
              </div>
            </div>
          </div>

          <button className="botones boton-violeta button-full" onClick={showWebhook}>+ Agregar webhook</button>
          <Modal 
            title="Crea un webhook"
            open={webhook} 
            onCancel={handleWebhook}
            footer={[
              <Button className="boton-gris" onClick={handleWebhook} key="cancelar">Cancelar</Button>,
              <Button onClick={handleWebhook} key="guardar">Guardar ajustes</Button>,
              <Button className="eliminar-btn" onClick={handleWebhook} key="eliminar">Eliminar</Button>
            ]} closeIcon={<BsX />} 
            centered width={700}
          >
            <p className="margin-bottom-10px">
              <label className="strong">Nombre del webhook</label>
              <input type="text" className="input-required validate-required-input" id="webhook-name" name="webhook-name" placeholder="Nombre" />
            </p>
            <p className="margin-bottom-10px">
              <label className="strong">URL del webhook</label>
              <input type="text" className="input-required" id="webhook-url" name="webhook-url" placeholder="URL" />
            </p>
            <p>
              <label className="strong">Eventos a enviar</label>
              <select>
                <option>Todos los eventos</option>
                <option>Intención de pago</option>
                <option>Pago aprobado</option>
              </select>
            </p>
          </Modal>
        </div>
      </Layout>
    </>
  )
}

export default Webhooks;