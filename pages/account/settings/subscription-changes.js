import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import GuardarCambios from "../../../componentes/guardarCambios";
import { Button, Modal } from 'antd';
import { useState } from 'react';

function AjustesSuscripcion() {

  const [CambioSuscripciones, setCambioSuscripciones] = useState(false);

  const CambioSuscripcionesClic = () => {
    setCambioSuscripciones(!CambioSuscripciones);
  };

  const [Pausar, setPausar] = useState(false);
  const showPausar = () => {
    setPausar(true);
  };
  const handlePausar = () => {
    setPausar(false);
  };

  const [Limite, setLimite] = useState(false);
  const showLimite = () => {
    setLimite(true);
  };
  const handleLimite = () => {
    setLimite(false);
  };

  const [Cambiar, setCambiar] = useState(false);
  const showCambiar = () => {
    setCambiar(true);
  };
  const handleCambiar = () => {
    setCambiar(false);
  };

  const [Seguimiento, setSeguimiento] = useState(false);
  const showSeguimiento = () => {
    setSeguimiento(true);
  };
  const handleSeguimiento = () => {
    setSeguimiento(false);
  };

  const [Variacion, setVariacion] = useState(false);
  const showVariacion = () => {
    setVariacion(true);
  };
  const handleVariacion = () => {
    setVariacion(false);
  };

  const [Cobro, setCobro] = useState(false);
  const showCobro = () => {
    setCobro(true);
  };
  const handleCobro = () => {
    setCobro(false);
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

          <div className="order-box-container subs-tools margin-bottom">
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
                  centered width={700}
                >
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
                <a onClick={showLimite}>Administrar</a>
                <Modal 
                  title="Límite de tiempo para cambios en suscripciones de tus clientes"
                  open={Limite} 
                  onCancel={handleLimite} 
                  footer={[
                    <Button className="boton-gris" onClick={handleLimite} key="cancelar">Cancelar</Button>,
                    <Button onClick={handleLimite} key="guardar">Guardar ajustes</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={700}
                >
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Días antes de la renovación para permitir cambios de suscripción</span>
                    <input type="number" name="substimeframe" id="substimeframe" placeholder="0" />
                  </p>
                </Modal>
              </div>
            </div>

            <div className="order-box">
              <div className="flex">
                <span>Permitir que tus clientes cambien, editen y modifiquen sus suscripciones</span>
                <a onClick={showCambiar}>Administrar</a>
                <Modal 
                  title="Cambio en suscripciones de tus clientes"
                  open={Cambiar} 
                  onCancel={handleCambiar} 
                  footer={[
                    <Button className="boton-gris" onClick={handleCambiar} key="cancelar">Cancelar</Button>,
                    <Button onClick={handleCambiar} key="guardar">Guardar ajustes</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={700}
                >
                  <p className="app-input different-shipping label-flex1">
                    <label className="switch space-r">
                      <input type="checkbox" id="switch_subs" name="switch_subs" value="1" />
                      <span className="slider round" onClick={CambioSuscripcionesClic}></span>
                    </label>
                    <span className="acc-label">Permitir que tus clientes cambien, editen y modifiquen sus suscripciones</span>
                  </p>
                  <p className={`hidden ${CambioSuscripciones ? "active": ""}` .trimEnd()}>
                    <label className="check-container">Prorratear pago recurrente
                      <input type="checkbox" id="prorate" name="prorate" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </p>
                </Modal>
              </div>
            </div>

            <div className="order-box">
              <div className="flex">
                <span>Seguimiento del uso de suscripciones</span>
                <a onClick={showSeguimiento}>Administrar</a>
                <Modal 
                  title="Seguimiento del uso de suscripciones"
                  open={Seguimiento} 
                  onCancel={handleSeguimiento} 
                  footer={[
                    <Button className="boton-gris" onClick={handleSeguimiento} key="cancelar">Cancelar</Button>,
                    <Button onClick={handleSeguimiento} key="guardar">Guardar ajustes</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={700}
                >
                  <p>Actívalo si tus planes pueden tener cierta cantidad de límite de uso. Puedes configurar los límites en cada plan y descontar unidades a través de API o en una suscripción activa en el portal de administrador.</p>
                  <p className="app-input">
                    <label className="switch space-r">
                      <input type="checkbox" id="usage_limit" name="usage_limit" value="1" />
                      <span className="slider round"></span>
                    </label>
                    <span className="acc-label">Activar / Desactivar</span>
                  </p>
                </Modal>
              </div>
            </div>

            <div className="order-box">
              <div className="flex">
                <span>Variaciones de productos de suscripción</span>
                <a onClick={showVariacion}>Administrar</a>
                <Modal 
                  title="Variaciones de productos de suscripción"
                  open={Variacion} 
                  onCancel={handleVariacion} 
                  footer={[
                    <Button className="boton-gris" onClick={handleVariacion} key="cancelar">Cancelar</Button>,
                    <Button onClick={handleVariacion} key="guardar">Guardar ajustes</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={700}
                >
                  <p>Actívalo si vendes productos de suscripción y tienen variaciones. Puedes configurar las variaciones en cada producto de suscripción.</p>
                  <p className="app-input">
                    <label className="switch space-r">
                      <input type="checkbox" id="product_variations" name="product_variations" value="1" />
                      <span className="slider round"></span>
                    </label>
                    <span className="acc-label">Activar / Desactivar</span>
                  </p>
                </Modal>
              </div>
            </div>

            <div className="order-box">
              <div className="flex">
                <span>Configurar el cobro basado en el uso</span>
                <a onClick={showCobro}>Administrar</a>
                <Modal 
                  title="Cobro basado en el uso"
                  open={Cobro} 
                  onCancel={handleCobro} 
                  footer={[
                    <Button className="boton-gris" onClick={handleCobro} key="cancelar">Cancelar</Button>,
                    <Button onClick={handleCobro} key="guardar">Guardar ajustes</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={700}
                >
                  <p>Como empresa, proporcionas acceso a tus servicios y le cobras a tu cliente en función de su uso al final del ciclo de suscripción.</p>
                  <p className="app-input">
                    <label className="switch space-r">
                      <input type="checkbox" id="usage_active" name="usage_active" value="1" />
                      <span className="slider round"></span>
                    </label>
                    <span className="acc-label">Activar / Desactivar</span>
                  </p>
                  <div className="input">
                    <span className="acc-label">Selecciona cómo quieres procesar los pagos de renovación</span>
                    <p>Automáticamente: procesa los pagos automáticamente según el uso informado a lo largo del ciclo de facturación. Manualmente: mantiene las renovaciones de pago en espera y espera el informe de uso al final del ciclo de facturación.</p>
                    <select name="renewal_payment" id="renewal_payment">
                      <option value="">Seleccionar opción</option>
                      <option value="automatic">Automáticamente</option>
                      <option value="manual">Manualmente</option>
                    </select>
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

export default AjustesSuscripcion;