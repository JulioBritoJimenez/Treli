import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function Consentimiento() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Gestión de consentimiento</h2>
          </div>
          <GuardarCambios  />
          <p>Obtén el consentimiento de tus clientes antes de procesar su información personal.</p>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Mostrar términos y condiciones en la página de pago y portal de autoservicio</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="show_terms" name="show_terms" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Mostrar política de privacidad en la página de pago y portal de autoservicio</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="show_privacy" name="show_privacy" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>
              </div>
            </div>

            <div className="new-product-col2"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Consentimiento;