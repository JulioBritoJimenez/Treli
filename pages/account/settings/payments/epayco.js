import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort, BsX, BsExclamationCircle } from "react-icons/bs";
import { Button, Modal } from 'antd';
import Image from "next/image";
import LogoePse from '../../../../public/pse.png';

function Epayco() {

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
            <h2>ePayco</h2>
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
                  <span className="acc-label">Public Key</span>
                  <input type="text" name="public_key" id="public_key" placeholder="Public Key" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Private Key</span>
                  <input type="password" name="private_key" id="private_key" placeholder="Private Key" />
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
                    <span>Los clientes deben pagar manualmente las renovaciones de suscripción. Treli envía un recordatorio automático por correo electrónico en la fecha de renovación con un enlace de pago.</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container provider-instructions margin-bottom">
                <h3 className="margin-bottom">Instrucciones</h3>
                <p className="margin-bottom-15px">
                  <span className="strong">1.</span> <Link href="https://dashboard.epayco.com/login?utm_campaign=epayco&utm_medium=button-header&utm_source=web#registro" target="_blanck" className="texto-link">Crea una cuenta de ePayco</Link>
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">2.</span> <Link href="https://dashboard.epayco.com/login" target="_blanck" className="texto-link">Inicia sesión en tu cuenta de ePayco</Link>
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">3.</span> Haz click en la pestaña &quot;Integraciones&quot;, luego en &quot;Llaves API&quot; y abre la pestaña &quot;Llaves secretas&quot;.
                </p>
                <p className="margin-bottom-15px">
                  <span className="strong">4.</span> Copia y pega los valores de &quot;Public Key&quot; y &quot;Private Key&quot;.
                </p>
                <p>
                  Para obtener instrucciones más detalladas, sigue esta <Link href="https://treli.readme.io/docs/epayco" target="_blanck" className="texto-link">guía</Link>.
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

export default Epayco;