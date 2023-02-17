import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import Link from 'next/link';
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import { Button, Modal } from 'antd';
import { useState } from 'react';

function Monedas() {

  const [Monedas, setMonedas] = useState(false);
  const showMonedas = () => {
    setMonedas(true);
  };
  const handleMonedas = () => {
    setMonedas(false);
  };

  return(
    <>
      <Layout>
        <div className="account-appe-container settings-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Monedas</h2>
          </div>
          <GuardarCambios />

          <div className="new-product-cols payment-provider">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Moneda base</h3>
                <p className="app-input">
                  <span>COP</span>
                  <span className="space-l">No puedes cambiar tu moneda base porque ya tienes suscripciones activas con esta moneda.</span>
                </p>
              </div>

              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Monedas adicionales</h3>

                <div className="user-currencies">
                  <div className="order-box">
                    <div className="flex">
                      <div className="text">
                        <span className="strong">USD</span> - Dólar de los Estados Unidos
                      </div>
                      <a className="delete-currency">Eliminar</a>
                    </div>
                  </div>
                  <div className="order-box">
                    <div className="flex">
                      <div className="text">
                        <span className="strong">MXN</span> - Peso mexicano
                      </div>
                      <a className="delete-currency">Eliminar</a>
                    </div>
                  </div>
                </div>

                <div className="no-multi">
                  <h3 className="margin-bottom-15px">Agregar más monedas</h3>
                  <p>Además de la moneda base, puedes procesar transacciones en monedas extranjeras al habilitar multi-monedas.</p>
                  <a className="botones boton-violeta button-full" onClick={showMonedas}>+ Agregar monedas</a>
                  <Modal 
                    title="Elige tus monedas"
                    open={Monedas} 
                    onCancel={handleMonedas}
                    footer={[
                      <Button className="boton-gris" onClick={handleMonedas} key="cancelar">Cancelar</Button>,
                      <Button onClick={handleMonedas} key="guardar">Guardar ajustes</Button>
                    ]} closeIcon={<BsX />} 
                    centered width={700}
                  >
                    <p>
                      <label className="strong">¿Qué monedas te gustaría agregar?</label>
                      <select>
                        <option>Seleccionar monedas</option>
                        <option>USD - Dólar de los Estados Unidos</option>
                        <option>BRL - Real brasileño</option>
                      </select>
                    </p>
                  </Modal>
                </div>
              </div>

              <a className="botones boton-violeta button-full" onClick={showMonedas}>+ Agregar monedas</a>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Enrutamiento inteligente</h3>
                <p>El enrutamiento inteligente te permite configurar las reglas de las pasarelas de pago, según las monedas.</p>
                <Link href="/account/settings/smart-routing" className="botones boton-violeta button-full">Configurar</Link>
              </div>

              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Ajustes adicionales</h3>
                <p className="app-input trm-pricing">
                  <label className="switch space-r">
                    <input type="checkbox" id="t_multicurrency" name="t_multicurrency" value="1" />
                    <span className="slider round"></span>
                  </label>
                  <span className="flex flex-column">
                    <span className="strong margin-bottom-15px">Treli multi-currency</span>
                    <span>When enabled, Treli will show your customers prices in each currency but charge in your base currency based on a daily conversion rate. This option has to be enabled per plan.</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Monedas;