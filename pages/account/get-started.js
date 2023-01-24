import Layout from "../../componentes/layout";
import Step from "../../componentes/step";
import Image from "next/image";
import DanielEmpezar from '../../public/daniel-empezar.png';
import { useState } from 'react';

function GetStarted() {

  const [step1Activo, setStep1Activo] = useState(false);

  const step1Clic = () => {
    setStep1Activo(!step1Activo);
  };

  const [step2Activo, setStep2Activo] = useState(false);

  const step2Clic = () => {
    setStep2Activo(!step2Activo);
  };

  const [step3Activo, setStep3Activo] = useState(false);

  const step3Clic = () => {
    setStep3Activo(!step3Activo);
  };

  const [step4Activo, setStep4Activo] = useState(false);

  const step4Clic = () => {
    setStep4Activo(!step4Activo);
  };

  return (
    <>
      <Layout>
        <div className="account-appe-container get-started">
          <div className="get-started-img-cont">
            <Image src={DanielEmpezar} alt="Empezar imagen" priority />
            <div className="get-started-img-text">
              ¡Hola Nombre! Soy Daniel de Treli. Estoy aquí para ayudarte a configurar Treli y empieces a automatizar tus cobros recurrentes y gestionar tus suscripciones. ¡Empecemos!    
            </div>
          </div>

          <div className="get-started_header">
            <h3>Configura y comienza con Treli</h3>
            <span>Esta lista te puede ayudar a administrar la configuraciones esenciales y comenzar a usar Treli.</span>
            <div className="started-tasks">
              <span className="tasks-number-completed">7</span>/10 Tareas
              <span className="tasks-bar-container">
                <span className="tasks-bar-full"></span>
              </span>
            </div>
          </div>

          <div className="get-started_steps">

            <div className="get-started_step-container get-started_step-1">
              <div className={`get-started_step-title ${step1Activo ? "step-active": ""}` .trimEnd()} onClick={step1Clic}>
                <div className="step-title_col1">
                  <span className="step-toggle">+</span> <h4 className="step-title_name">Configura tus productos y monedas</h4>
                </div>

                <div className="step-title_col2">
                  <span className="step-status step-notstarted">Por empezar</span>
                  <span className="step-status step-started">
                    <span className="steps-completed">1</span>
                    de
                    <span className="steps-remaining">2</span>
                    completado
                  </span>
                </div>
              </div>

              <div className={`get-started_step-content hidden ${step1Activo ? "step-active": ""}` .trimEnd()} onClick={step1Clic}>
                <Step 
                  titulo="Monedas"
                  texto="Configura la moneda base de su sitio. Si vendes en varias monedas, habilita las opción de multi-moneda y agrega las monedas en las que deseas procesar pagos."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
                <Step 
                  titulo="Crear un producto"
                  texto="Crea múltiples productos con planes, precios, regalos y más."
                  btnUrl="/account/settings"
                  btnTexto="Crear producto" />
              </div>
            </div>

            <div className="get-started_step-container get-started_step-2">
              <div className={`get-started_step-title ${step2Activo ? "step-active": ""}` .trimEnd()} onClick={step2Clic}>
                <div className="step-title_col1">
                  <span className="step-toggle">+</span> <h4 className="step-title_name">Intégrate con Treli</h4>
                </div>

                <div className="step-title_col2">
                  <span className="step-status step-notstarted">Por empezar</span>
                  <span className="step-status step-started">
                    <span className="steps-completed">1</span>
                    de
                    <span className="steps-remaining">3</span>
                    completado
                  </span>
                </div>
              </div>

              <div className={`get-started_step-content hidden ${step2Activo ? "step-active": ""}` .trimEnd()} onClick={step2Clic}>
                <Step 
                  titulo="Estilo de marca"
                  texto="Agrega un toque de tu marca a tu página de pago, correos electrónicos y más. Haz que tus clientes se familiaricen con tu marca."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
                <Step 
                  titulo="Integración de página de pago"
                  texto="Intégrate con la página de pago Treli de dos formas flexibles: los enlaces de pago o la integración vía API."
                  aprendeMas="Aprende más."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
                <Step 
                  titulo="Portal de autoservicio"
                  texto="Permite que tus clientes administren su cuenta, suscripciones y pagos."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
              </div>
            </div>

            <div className="get-started_step-container get-started_step-3">
              <div className={`get-started_step-title ${step3Activo ? "step-active": ""}` .trimEnd()} onClick={step3Clic}>
                <div className="step-title_col1">
                  <span className="step-toggle">+</span> <h4 className="step-title_name">Empieza a cobrar a tus clientes</h4>
                </div>

                <div className="step-title_col2">
                  <span className="step-status step-notstarted">Por empezar</span>
                  <span className="step-status step-started">
                    <span className="steps-completed">1</span>
                    de
                    <span className="steps-remaining">1</span>
                    completado
                  </span>
                </div>
              </div>

              <div className={`get-started_step-content hidden ${step3Activo ? "step-active": ""}` .trimEnd()} onClick={step3Clic}>
                <Step 
                  titulo="Pasarelas de pago"
                  texto="Conecta una o más pasarelas de pago para comenzar a procesar pagos y cobrar a tus clientes."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
              </div>
            </div>

            <div className="get-started_step-container get-started_step-4">
              <div className={`get-started_step-title ${step4Activo ? "step-active": ""}` .trimEnd()} onClick={step4Clic}>
                <div className="step-title_col1">
                  <span className="step-toggle">+</span> <h4 className="step-title_name">Gestión de suscripciones (Opcional)</h4>
                </div>

                <div className="step-title_col2">
                  <span className="step-status step-notstarted">Por empezar</span>
                  <span className="step-status step-started">
                    <span className="steps-completed">1</span>
                    de
                    <span className="steps-remaining">1</span>
                    completado
                  </span>
                </div>
              </div>

              <div className={`get-started_step-content hidden ${step4Activo ? "step-active": ""}` .trimEnd()} onClick={step4Clic}>
                <Step 
                  titulo="Ajustes de suscripciones"
                  texto="Configura ajustes avanzados o activa funcionalidades extra para tus suscripciones."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
                <Step 
                  titulo="Notificaciones por correo"
                  texto="Mantén a tus clientes informados en cada paso. Agrega contenido adicional a los correos electrónicos de notificación enviados a tus clientes."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
                <Step 
                  titulo="Configuración de reclamación"
                  texto="Configura cómo quieres que Treli vuelva a intentar el cobro de pagos fallidos para los clientes que pagan con tarjetas de crédito, débito y pagos manuales."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
                <Step 
                  titulo="Generación de facturas"
                  texto="Configura cómo te gustaría automatizar la generación de facturas mediante la integración con un proveedor de facturas de terceros."
                  btnUrl="/account/settings"
                  btnTexto="Configurar" />
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}

export default GetStarted;