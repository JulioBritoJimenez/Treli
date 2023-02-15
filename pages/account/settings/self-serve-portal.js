import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function PortalAutoservicio() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Portal de autoservicio</h2>
          </div>
          <GuardarCambios  />
          <p>El Portal de autoservicio le permite a tus clientes administrar su cuenta, suscripciones y pagos.</p>

          <div className="new-product-cols self-serve-portal">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Los clientes pueden acceder al portal de autoservicio</span>
                    <select className="width50" name="access_portal" id="access_portal">
                      <option value="hosted_page">vía página alojada en Treli</option>
                      <option value="drop_in_script">vía Plug &amp; Play script</option>
                    </select>
                  </p>
                </div>
              </div>

              <div className="order-box-container margin-bottom provide-callback">
                <h3 className="margin-bottom">URL de retorno</h3>
                <div className="order-box">
                  <div className="input">
                    <div className="margin-bottom-10px">Ingresa la URL en la que vas a integrar el portal de autoservicio. Esto es útil para los botones `&quot;`ver mi cuenta`&quot;` en los correos electrónicos y página de pago para que sus clientes regresen a tu sitio web.</div>
                    <div className="flex">
                      <span className="treli-place">https://</span> 
                      <input className="radius-left0" type="text" id="call_back" name="call_back" placeholder="URL de retorno" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container hosted-page margin-bottom">
                <h3 className="margin-bottom-20px">Intégrate con Treli</h3>
                <div className="order-box">
                  <p className="strong margin-bottom-10px">URL del portal de autoservicio</p>
                  <div>Tus clientes pueden gestionar sus suscripciones a través de la siguiente URL</div>
                  <div className="url-code-box-container">
                    <div className="url-code-box">https://treli.co/my-account/?id=demo</div>
                    <div className="copy-code botones boton-violeta button-full pointer">Copiar</div>
                  </div>
                </div>
              </div>

              <div className="order-box-container js-script margin-bottom">
                <h3 className="margin-bottom-20px">Intégrate con Treli</h3>
                <div className="order-box">
                  <p className="strong margin-bottom-10px">Código del encabezado</p>
                  <div>Copia y pega el código en el encabezado HTML de tu sitio web/aplicación. Necesitas hacer esto solo una vez.</div>
                  <div className="url-code-box-container">
                    <div className="url-code-box">
                      <span className="t_blue">&lt;script <span><span className="t_red">src</span><span className="t_blue">=</span><span className="t_blue">`&quot;`https://treli.co/js/v1/treli.js`&quot;`</span></span><span> <span className="t_red">data-treli-user</span><span className="t_blue">=</span><span className="t_blue">`&quot;`demo`&quot;`</span></span>&gt;&lt;/script&gt;</span>
                    </div>
                    <div className="copy-code botones boton-violeta button-full pointer">Copiar</div>
                  </div>
                </div>

                <div className="order-box">
                  <p className="strong margin-bottom-10px">Código del botón del portal</p>
                  <div>Utiliza este código para que tus clientes accedan al portal de autoservicio de Treli desde tu sitio web/aplicación.</div>
                  <div className="url-code-box-container">
                    <div className="url-code-box">
                      <span className="t_blue">&lt;a <span><span className="t_red">href</span><span className="t_blue">=</span><span className="t_blue">`&quot;`javascript:void(0)`&quot;`</span></span><span> <span className="t_red">data-t-type</span><span className="t_blue">=</span><span className="t_blue">`&quot;`account`&quot;`</span></span>&gt;Gestionar cuenta&lt;/a&gt;</span>
                    </div>
                    <div className="copy-code botones boton-violeta button-full pointer">Copiar</div>
                  </div>
                </div>

                <div className="order-box">
                  <Link href="/account/settings/self-serve-portal/" className="botones boton-violeta button-full btn100" data-t-type="account">Ver demo</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PortalAutoservicio;