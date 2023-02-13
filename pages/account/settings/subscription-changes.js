import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import GuardarCambios from "../../../componentes/guardarCambios";
import { Button, Modal } from 'antd';
import { useState } from 'react';

function AjustesSuscripcion() {

  const [Pausar, setPausar] = useState(false);
  const showPausar = () => {
    setPausar(true);
  };
  const handlePausar = () => {
    setPausar(false);
  };

  return(
    <>
      <Layout>
        <div className="account-appe-container settings-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Ajustes de suscripciones</h2>
          </div>
          <GuardarCambios />
          <p>Configura ajustes avanzados o activa funcionalidades extra para tus suscripciones.</p>

          <div className="order-box-container margin-bottom">
            <div className="order-box">
              <h3>Herramientas de suscripción para tus clientes</h3>
            </div>
            <div className="order-box">
              <div className="flex">
                <span>Permitir que tus clientes cancelen o pausen una suscripción activa</span>
                <a onClick={showPausar}>Administrar</a>
                <Modal 
                  title="Activar o desactivar pausar y cancelar"
                  open={Pausar} 
                  onCancel={handlePausar} 
                  footer={[
                    <Button className="boton-gris" onClick={handlePausar} key="cancelar">Cancelar</Button>,
                    <Button onClick={handlePausar} key="guardar">Guardar ajustes</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={700}>
                  <p>
                    <label className="check-container">Permitir que tus clientes pausen una suscripción activa
                      <input type="checkbox" id="pausesubs" name="pausesubs" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                  <p>
                    <label className="check-container">Permitir que tus clientes cancelen una suscripción activa
                      <input type="checkbox" id="cancelsubs" name="cancelsubs" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                </Modal>
              </div>
            </div>

            <div className="order-box">
              <div className="flex">
                <span>Configurar el limite de tiempo de los cambios de suscripción de tus clientes</span>
                <a>Administrar</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AjustesSuscripcion;