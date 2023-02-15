import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function Checkout() {
  return (
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Página de pago</h2>
          </div>
          <GuardarCambios  />
          <p>La página de pago de Treli te permite cobrar a tus clientes y automatizar los pagos.</p>

          <div className="new-product-cols self-serve-portal">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                    <h3>Configuraciones</h3>
                </div>
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Permitir a tus clientes agregar / quitar cupones</span>
                    <label className="switch space-r">
                        <input type="checkbox" id="coupons" name="coupons" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Solicitar información de la empresa</span>
                    <label className="switch space-r">
                        <input type="checkbox" id="company" name="company" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Mostrar la descripción de los productos</span>
                    <label className="switch space-r">
                        <input type="checkbox" id="display_description" name="display_description" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="order-box-container provide-callback margin-bottom">
                <h3 className="margin-bottom-15px">URL de redirección</h3>
                <div className="order-box">
                  <div className="input">
                    <div className="margin-bottom-10px">Ingresa la URL a la que deseas redirigir a tus clientes al finalizar un pago</div>
                    <div>
                      <input type="text" id="call_back" name="call_back" placeholder="https://example.com" />
                    </div>
                  </div>
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

export default Checkout;