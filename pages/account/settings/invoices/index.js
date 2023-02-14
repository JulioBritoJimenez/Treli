import Layout from "../../../../componentes/layout";
import GuardarCambios from "../../../../componentes/guardarCambios";
import { BsArrowLeftShort, BsX, BsExclamationCircle, BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import Image from "next/image";
import LogoSiigo from '../../../../public/logo-siigo.png';

function Facturacion() {
  return(
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Facturación</h2>
          </div>
          <GuardarCambios  />
          <p>Configura cómo te gustaría automatizar la generación de facturas mediante la integración con un proveedor de facturas de terceros.</p>

          <div className="new-product-cols payment-providers">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom invoice-settings">
                <h3>Ajustes de facturación</h3>
                <div className="settings-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Activar</span><br />
                      <span className="weight-normal">Actívelo si desea automatizar la generación de facturas y recibos con un proveedor externo.</span>
                    </span>
                    <label className="switch space-r">
                      <input type="checkbox" id="invoice_active" name="invoice_active" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="settings-box hidden">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Por generación de pago</span><br />
                      <span className="weight-normal">Actívalo si quieres decidir si generar o no facturas al crear un pago. Si no está activo, Treli generará facturas para todos los pagos.</span>
                    </span>
                    <label className="switch space-r">
                      <input type="checkbox" id="per_payment" name="per_payment" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="settings-box hidden">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Configuraciones por pago</span><br />
                      <span className="weight-normal">Actívelo si desea configurar diferentes configuraciones de facturación y recibo por pago. Si no está activo, Treli utilizará la configuración predeterminada de facturas y recibos configurada en el proveedor de facturación.</span>
                    </span>
                    <label className="switch space-r">
                      <input type="checkbox" id="settings_per_payment" name="settings_per_payment" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="settings-box hidden">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Por generación de suscripción</span><br />
                      <span className="weight-normal">Actívala si quieres decidir si generar o no facturas al crear una suscripción. Si no está activo, Treli generará facturas para todas las suscripciones.</span>
                    </span>
                    <label className="switch space-r">
                      <input type="checkbox" id="per_subscription" name="per_subscription" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="settings-box">
                  <p className="app-input input">
                    <span className="acc-label">Crear factura</span>
                    <select name="when_create" id="when_create">
                      <option value="">Seleccionar opción</option>
                      <option value="before_payment">Antes de que se apruebe el pago</option>
                      <option value="after_payment">Después de que se aprueba el pago</option>
                    </select>
                  </p>
                </div>

                <div className="settings-box hidden">
                  <p className="app-input input">
                    <span className="acc-label">Expiración de factura</span>
                    <select name="factura_expiration" id="factura_expiration">
                      <option value="">Seleccionar opción</option>
                      <option value="10">10 días</option>
                      <option value="20">20 días</option>
                      <option value="30">30 días</option>
                      <option value="40">40 días</option>
                      <option value="50">50 días</option>
                      <option value="60">60 días</option>
                      <option value="70">70 días</option>
                      <option value="80">80 días</option>
                      <option value="90">90 días</option>
                      <option value="custom">Día especifico del mes</option>
                    </select>
                  </p>
                </div>

                <div className="settings-box hidden">
                  <p className="app-input input">
                    <span className="acc-label">Día especifico del mes</span>
                    <span className="flex flex-center">
                      <input type="number" name="factura_expiration_custom" id="factura_expiration_custom" />
                      <span>día de cada mes</span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="order-box-container active-providers margin-bottom">
                <div className="order-box payment-gateways">
                  <div className="flex flex-center">
                    <div>
                      <h3 className="margin-bottom">Proveedores de facturación</h3>
                      <span>Automatiza la generación de facturas y recibos mediante la integración con un proveedor externo.</span>
                    </div>
                    <Link href="/account/settings/invoices/providers" className="botones boton-border button-full">+ Agregar proveedor</Link>
                  </div>
                </div>

                <div className="order-box">
                  <div className="flex provider-image-text">
                    <div className="provider-image">
                      <Image src={LogoSiigo} alt="Logo" />
                    </div>
                    <h3 className="semi">Siigo Nube</h3>
                    <div class="provider-status">
											<span class="status-circle active"></span>Activo
                    </div>
                    <Link href="/account/settings/invoices/siigo" className="botones boton-border button-full">Administrar</Link>
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

export default Facturacion;