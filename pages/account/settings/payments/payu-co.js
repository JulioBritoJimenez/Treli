import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import Link from 'next/link';
import { BsArrowLeftShort, BsX, BsExclamationCircle } from "react-icons/bs";
import { Button, Modal } from 'antd';
import Image from "next/image";
import LogoPse from '../../../../public/pse.png';
import { useState } from 'react';

function PayuCo() {

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
            <h2>PayU Colombia</h2>
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
                  <span className="acc-label">Api key</span>
                  <input type="text" name="apiKey" id="apiKey" placeholder="Api key" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Api login</span>
                  <input type="password" name="apiLogin" id="apiLogin" placeholder="Api login" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Merchant ID</span>
                  <input type="text" name="merchantId" id="merchantId" placeholder="Merchant ID" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Account ID</span>
                  <input type="password" name="accountId" id="accountId" placeholder="Account ID" />
                </p>
                <p className="app-input different-shipping">
                  <label className="switch space-r">
                    <input type="checkbox" id="environment" name="environment" value="1" />
                    <span className="slider round"></span>
                  </label>
                  <span className="acc-label">Activar modo pruebas</span>
                </p>
              </div>

              <div className="order-box-container margin-bottom provider-other-settings">
                <h3 className="margin-bottom-15px">Otros ajustes</h3>
                <p className="app-input different-shipping">
                  <label className="switch space-r">
                    <input type="checkbox" id="pse" name="pse" value="1" />
                    <span className="slider round"></span>
                  </label>
                  <Image className="img-small" src={LogoPse} alt="Logo pse" />
                  <span className="flex flex-column">
                    <span className="strong">Activar pagos manuales vía PSE</span>
                    <span>Los clientes deben pagar manualmente las renovaciones de suscripción. Treli envía un recordatorio automático por correo electrónico en la fecha de renovación con un enlace de pago.</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container provider-instructions margin-bottom">
                <h3 className="margin-bottom">Instrucciones</h3>
                <p className="margin-bottom-15px">
                  <span className="strong">1.</span> <Link href="https://creatucuenta.payu.com/" target="_blanck" className="texto-link">Crear una cuenta en PayU</Link>
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">2.</span> <Link href="https://merchants.payulatam.com/login/auth" target="_blanck" className="texto-link">Inicia sesión en tu cuenta de PayU</Link>
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">3.</span> Haz clic en &quot;configuración&quot; en la esquina superior derecha y haz clic en &quot;Configuración técnica&quot;.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">4.</span> Copia y pega el &quot;API key&quot; y &quot;API login&quot; ubicados en la barra lateral derecha.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">5.</span> Copia y pega el &quot;Merchant ID&quot; y &quot;Cuenta ID&quot; ubicados en la barra lateral izquierda.
                </p>
                <p>
                  Para obtener instrucciones más detalladas, sigue esta <Link href="https://treli.readme.io/docs/pay-u" target="_blanck" className="texto-link">guía</Link>.
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

export default PayuCo;