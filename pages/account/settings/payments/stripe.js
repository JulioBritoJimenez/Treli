import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort, BsX, BsExclamationCircle } from "react-icons/bs";
import { Button, Modal } from 'antd';

function Stripe() {

  const [show, setShow] = useState(false);

  const showClic = () => {
    setShow(!show);
  };

  const [Desactivar, setDesactivar] = useState(false);
  const showDesactivar = () => {
    setDesactivar(true);
  };
  const handleDesactivar = () => {
    setDesactivar(false);
  };

  return(
    <>
      <Layout>
        <div className="account-appe-container provider-container">
          <div className="order-head-paid">
            <Link href="/account/settings/payments/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Stripe</h2>
          </div>
          <GuardarCambios  />
          <div className="provider-status margin-bottom">
            <span className="status-circle active"></span> Activo
          </div>

          <div className="new-product-cols payment-provider">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Configuraciones</h3>
                <p className="app-input input">
                  <span className="acc-label">Publishable key</span>
                  <input type="text" name="public_key" id="public_key" placeholder="Public Key" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Secret key</span>
                  <input type="password" name="private_key" id="private_key" placeholder="Private Key" />
                </p>
                <p className={`app-input input hidden ${show ? "active": ""}` .trimEnd()}>
                  <span className="acc-label">Publishable test key</span>
                  <input type="text" name="public_test_key" id="public_test_key" placeholder="Public test key" />
                </p>
                <p className={`app-input input hidden ${show ? "active": ""}` .trimEnd()}>
                  <span className="acc-label">Secret test key</span>
                  <input type="password" name="private_test_key" id="private_test_key" placeholder="Private test key" />
                </p>
                <p className="app-input different-shipping">
                  <label className="switch space-r">
                    <input type="checkbox" id="environment" name="environment" value="1" onClick={showClic} />
                    <span className="slider round"></span>
                  </label>
                  <span className="acc-label">Activar modo pruebas</span>
                </p>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container provider-instructions margin-bottom">
                <h3 className="margin-bottom">Instrucciones</h3>
                <p>
                  Para instrucciones, sigue esta <Link href="https://treli.readme.io/docs/stripe" target="_blanck" className="texto-link">guía</Link>.
                </p>
              </div>

              <div className="gateway-buttons">
                <button className="botones boton-violeta btn100 button-full margin-bottom-20px">Guardar ajustes</button>
                <button className="botones eliminar-btn btn100 button-full" onClick={showDesactivar}>Desactivar</button>
                <Modal 
                  title={null}
                  className="desactivarPasarela"
                  open={Desactivar} 
                  onCancel={handleDesactivar}
                  footer={[
                    <Button onClick={handleDesactivar} key="desactivar">Desactivar</Button>,
                    <Button className="eliminar-btn" onClick={handleDesactivar} key="borrar">Borrar</Button>,
                    <Button className="boton-gris" onClick={handleDesactivar} key="salir">Salir</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={510}
                >
                  <div className="desactivar-pasarela">
                    <BsExclamationCircle />
                    <h3>Advertencia</h3>
                    <p>Desactivar una pasarela de pago solo la desactivará para nuevas suscripciones. Las suscripciones existentes pagadas a través de esta pasarela de pago, se seguirán renovando con esta pasarela de pago. Elimine esta pasarela de pago si desea deshabilitarla tanto para suscripciones nuevas como existentes.</p>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Stripe;