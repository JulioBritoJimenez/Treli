import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";
import Logo from '../../../../public/icono-treli.png';
import Visa from '../../../../public/Visa-Logo.png';

function RenovacionSuscripcion() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/email-notifications/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Renovación de suscripción</h2>
          </div>
          <GuardarCambios  />
          <p>Recuerde a los clientes dos días antes de la renovación de la suscripción.</p>

          <div className="new-product-cols settings-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Activar / Desactivar</span>
                    <label className="switch space-r">
                      <input type="checkbox" notification_id="subs_renewal_reminder" id="activate" name="activate" value="1" />
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
                    <div className="">Tu suscripción se ha renovado exitosamente.</div>
                    <div className="t_email-border"></div>
                    <div className="t_email-med">Pago #5710</div>
                    <div className="flex">
                      <div className="t_email-semi">Suscripción Demo</div>
                      <div className="t_email-semi">$10,000</div>
                    </div>
                    <div className="t_email-small">Cantidad: 1</div>
                  </div>

                  <div className="t_email-cont metodo-pago">
                    <div className="t_email-small margin-bottom-20px">Método de pago</div>
                    <div className="flex">
                      <div className="t_email-semi flex">
                        <div><Image src={Visa} alt="Tarjeta" /></div>
                        <div>Termina en 0326</div>
                      </div>
                      <div>Expira 12/2025</div>
                    </div>
                    <div className="t_email-border"></div>
                    <div className="flex">
                      <div className="t_email-semi">Pasarela de pago:	</div>
                      <div>Wompi</div>
                    </div>
                    <div className="t_email-border"></div>
                    <div className="flex">
                      <div className="t_email-semi">ID de transacción:</div>
                      <div>#82412136</div>
                    </div>
                    <div className="t_email-border"></div>
                    <div className="flex">
                      <div className="t_email-semi">Estado:</div>
                      <div className="t_email-semi color-green">Aprobado</div>
                    </div>
                  </div>

                  <div className="t_email-cont">
                    <div className="flex">
                      <div className="t_email-semi">Método de pago:	</div>
                      <div className="t_email-semi">Tarjeta de crédito</div>
                    </div>
                    <div className="t_email-border"></div>
                    <div className="flex">
                      <div className="t_email-semi">Total:</div>
                      <div className="t_email-semi">$10,000</div>
                    </div>
                  </div>

                  <div className="t_email-cont">
                    <div className="t_email-small margin-bottom-10px">Dirección de facturación</div>
                    <div className="direccion">
                      Cliente Demo<br></br>
                      Calle 1236<br></br>
                      1<br></br>
                      Barranquilla<br></br>
                      Atlántico<br></br>
                      080002<br></br>
                      <a className="texto-link">31111111111</a><br></br>
                      gabriel+demo@treli.co</div>
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

export default RenovacionSuscripcion;