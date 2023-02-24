import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort, BsX, BsExclamationCircle } from "react-icons/bs";
import { Button, Modal } from 'antd';
import Image from "next/image";

function TransferenciaBancaria() {

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
            <h2>Transferencia bancaria</h2>
          </div>
          <GuardarCambios  />
          <div className="provider-status margin-bottom">
            <span className="status-circle inactive"></span> Inactivo
          </div>

          <div className="new-product-cols payment-provider">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom provider-settings">
                <h3 className="margin-bottom-15px">Instrucciones de transferencia</h3>
                <p className="app-input input">
                  <span className="acc-label">Número de cuenta</span>
                  <input type="text" name="account_number" id="account_number" placeholder="1238393029" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Nombre del banco</span>
                  <input type="text" name="bank_name" id="bank_name" placeholder="Bancolombia" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Titular de la cuenta</span>
                  <input type="text" name="titular" id="titular" placeholder="Treli, Inc." />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Número de identificación</span>
                  <input type="text" name="identificacion" id="identificacion" placeholder="124311432" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Tipo de cuenta</span>
                  <input type="text" name="account_type" id="account_type" placeholder="Ahorros" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Enviar comprobante a</span>
                  <input type="text" name="comprobante" id="comprobante" placeholder="soporte@treli.co" />
                </p>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container provider-instructions margin-bottom">
                <h3 className="margin-bottom">Instrucciones</h3>
                <p className="margin-bottom-15px">Las instrucciones de transferencia se mostrarán a tu cliente al seleccionar la opción de pago por transferencia en la página de pago.</p>
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

export default TransferenciaBancaria;