import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";
import Logo from '../../../../public/icono-treli.png';

function SuscripcionPausada() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/email-notifications/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Suscripción pausada</h2>
          </div>
          <GuardarCambios  />
          <p>Notifica a tus clientes cuando una suscripción esté en pausa, ya sea por ellos a través del portal de autoservicio o por ti a través del panel de administración.</p>

          <div className="new-product-cols settings-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Activar / Desactivar</span>
                    <label className="switch space-r">
                      <input type="checkbox" notification_id="subs_paused" id="activate" name="activate" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom-20px">Contenido de correo electrónico adicional</h3>
                <div className="order-box">
                  <p className="app-input settings-emails input">
                    <textarea rows="7" name="email_content" id="email_content" placeholder="Ingrese contenido de correo electrónico adicional" />
                  </p>
                </div>
              </div>
            </div>

            <div className="new-product-col2 email-preview">
              <div className="order-box-container">
                <h3 className="margin-bottom">Vista previa de correo</h3>
                <div className="order-box">
                  <div className="t_email-logo">
                    <Image src={Logo} alt="Logo" />
                    <span className="t_email-logo_text">Treli</span>
                  </div>

                  <div className="t_email-cont">
                    <div className="t_email-small margin-bottom-15px">Hola Cliente,</div>
                    <div>Tu suscripción #5710 se ha pausado. Puedes ingresar a tu cuenta para reactivarla.</div>
                    <div className="t_email-border pago"></div>
                    <div className="t_email-lbutton botones boton-violeta btn100">Gestionar suscripción</div>
                  </div>

                  <div className="t_email-cont">
                    <span className="soporte">¿Tienes alguna duda? Contáctanos a través de <a className="texto-link">soporte@treli.co</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SuscripcionPausada;