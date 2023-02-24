import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort, BsTrash } from "react-icons/bs";
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

            <div className="new-product-col2">
              <div className="order-box-container">
                <div className="settings-box">
                  <h3 className="margin-bottom-15px">Campos personalizados</h3>
                  <p className="margin-bottom-10px">Los campos personalizados te permiten solicitar información adicional a tu usuario al en la página de pago.</p>
                  <button id="toggle-add-fields" className="botones boton-violeta button-full margin-bottom-10px">Agregar campos personalizados</button>
                </div>

                <div id="custom-fields-created" className="settings-box">
                  <h3 className="margin-bottom-15px">Mis campos personalizados</h3>
                  <div id="custom-fields">
                    <input type="hidden" id="custom_fields" />
                    <div id="nombre-de-beneficiario_cf" className="custon-field flex flex-center">
                      <span className="text-name">
                        <span className="strong">Nombre del campo:</span> Nombre de beneficiario
                      </span>
                      <span className="text-name">
                        <span className="strong">Tipo del campo:</span> Text
                      </span>
                      <a className="remove-field-btn flex"><BsTrash /></a>
                    </div>
                  </div>
                </div>

                <div className="settings-box custom-fields-container">
                  <p className="app-input input">
                    <span className="acc-label">Título del campo</span>
                    <input type="text" id="field-title-input" placeholder="Título del campo" />
                  </p>
                  <p className="app-input input">
                    <span className="acc-label">Tipo de campo</span>
                    <select id="field-type-select">
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                    </select>
                  </p>
                  <p className="app-input input">
                    <span className="acc-label">¿Este campo es obligatorio?</span>
                    <select id="field-required-select">
                      <option value="yes">Si</option>
                      <option value="no">No</option>
                    </select>
                  </p>
                  <p>No olvides hacer clic en guardar campos cuando hayas terminado de agregar o eliminar tus campos personalizados.</p>
                  <div className="actions-left">
                    <a className="botones boton-violeta button-full space-r">Agregar campo</a>
                    <a className="botones boton-violeta button-full">Guardar campo</a>
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

export default Checkout;