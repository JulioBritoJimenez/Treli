import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort, BsX, BsExclamationCircle } from "react-icons/bs";
import { Button, Modal } from 'antd';
import Image from "next/image";
import LogoePse from '../../../../public/pse.png';

function PaymentsWay() {

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
            <h2>Payments Way</h2>
          </div>
          <GuardarCambios  />
          <div className="provider-status margin-bottom">
            <span className="status-circle inactive"></span> Inactivo
          </div>

          <div className="new-product-cols payment-provider">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Configuraciones</h3>
                <p className="app-input input">
                  <span className="acc-label">Api key</span>
                  <input type="password" name="api_key" id="api_key" placeholder="Api key" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Merchant id</span>
                  <input type="password" name="api_key" id="api_key" placeholder="Api key" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Form id</span>
                  <input type="text" name="form_id" id="form_id" placeholder="Form id" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Terminal id</span>
                  <input type="text" name="terminal_id" id="terminal_id" placeholder="Terminal id" />
                </p>
              </div>

              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Otros ajustes</h3>
                <p className="app-input different-shipping">
                  <label className="switch space-r">
                    <input type="checkbox" id="pse" name="pse" value="1" />
                    <span className="slider round"></span>
                  </label>
                  <Image className="img-small" src={LogoePse} alt="Logo pse" />
                  <span className="flex flex-column">
                    <span className="strong">Activar pagos manuales vía PSE</span>
                    <span>Activar pagos manuales vía PSE.</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container provider-instructions margin-bottom">
                <h3 className="margin-bottom">Instrucciones</h3>
                <p className="margin-bottom-15px">Solicita a tu administrador de cuenta de Payments Way tu &quot;Api key&quot;, &quot;Merchant id&quot;, &quot;Form id&quot;, y &quot;Terminal id&quot;.</p>
              </div>

              <div className="gateway-buttons">
                <button className="botones boton-violeta btn100 button-full margin-bottom-20px">Activar</button>
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

export default PaymentsWay;