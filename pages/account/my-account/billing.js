import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsCreditCard2Back, BsX, BsCheck } from "react-icons/bs";
import Image from "next/image";
import VisaLogo from '../../../public/Visa-Logo.png';
import { Modal } from 'antd';
import { useState } from 'react';

function Billing() {

  const [isCambiarOpen, setIsCambiarOpen] = useState(false);
  const showCambiar = () => {
    setIsCambiarOpen(true);
  };
  const handleCambiar = () => {
    setIsCambiarOpen(false);
  };

  const [isCambiarPlanOpen, setIsCambiarPlanOpen] = useState(false);
  const showCambiarPlan = () => {
    setIsCambiarPlanOpen(true);
  };
  const handleCambiarPlan = () => {
    setIsCambiarPlanOpen(false);
  };

  return(
    <>
      <Layout>
        <h2 className="margin-bottom">Facturación</h2>
        <div className="settings-head my-account-container status-filter">
          <Link href="/account/my-account/" className="settings-head-item">General</Link>
          <Link href="/account/my-account/billing" className="settings-head-item plist-activestyle">Facturación</Link>
        </div>

        <div className="new-product-cols">
          <div className="new-product-col1">
            <div className="order-box-container billing-balance margin-bottom">
              <div className="flex margin-bottom">
                <div>
                  <h3>Ciclo de facturación actual</h3>
                  <p className="current-period">Febrero 11, 2023 - Marzo 11, 2023</p>
                </div>
                <div className="your-balance">USD $0.00</div>
              </div>

              <div className="flex flex-center">
                <div>
                  <p><BsCreditCard2Back /> Próximo pago: Marzo 11, 2023</p>
                </div>
                <div className="period-action-buttons">
                  <Link className="botones boton-violeta button-full" href="/account/my-account/billing/cycle">Ver detalles</Link>
                </div>
              </div>
            </div>

            <div className="order-box-container">
              <h3 className="margin-bottom">Historial de facturación</h3>
              <div className="order-box">
                <div className="flex flex-center history-item">
                  <Link className="history-date texto-link" href="http://localhost:3000/account/my-account/billing/cycle">Febrero 11, 2023 - Marzo 11, 2023</Link>
                  <div className="history-total">USD $0.00</div>
                </div>
                <div className="flex flex-center history-item">
                  <Link className="history-date texto-link" href="http://localhost:3000/account/my-account/billing/cycle">Febrero 11, 2023 - Marzo 11, 2023</Link>
                  <div className="history-total">USD $0.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="new-product-col2">
            <div className="order-box-container margin-bottom merchant-payment-methods">
              <div className="order-box">
                <h3>Método de pago</h3>
                <p>Se cobrará mensualmente al método de pago.</p>
              </div>
              <div className="order-box billing-billing-card">
                <div className="payment-cart flex">
                  <div className="payment-title"><Image src={VisaLogo} alt="Logo tarjeta" />Terminada en 7430</div>
                  <div className="payment-expire">Expira 8/2024</div>
                </div>
              </div>
              <div className="order-box">
                <a className="merchant-add-payment history-date texto-link" onClick={showCambiar}>Cambiar método de pago</a>
                <Modal 
                  title={null}
                  open={isCambiarOpen}
                  onCancel={handleCambiar} 
                  footer={null} closeIcon={<BsX />} 
                  centered width={700}
                >
                  <p>Form Tarjeta de crédito y Dirección de facturación</p>
                </Modal>
              </div>
            </div>

            <div className="order-box-container margin-bottom current-rate">
              <div className="order-box flex">
                <h3>Plan activo: scale</h3>
                <a className="change-plan history-date texto-link" onClick={showCambiarPlan}>Cambiar plan</a>
                <Modal 
                  title="Elige un plan"
                  open={isCambiarPlanOpen}
                  onCancel={handleCambiarPlan} 
                  footer={null} closeIcon={<BsX />} 
                  centered width={1710}
                >
                  <p>Actualmente estas en el plan scale</p>
                  <div className="plans-container flex">
                    <div className="plans-item">
                      <h4>Launch</h4>
                      <p>Todo lo básico para iniciar un nuevo negocio de ingresos recurrentes</p>
                      <div className="plan-pricing-price">
                        <span className="plan-pricing_currency">USD</span>
                        <span className="plan-pricing_amount">$0</span>
                        <span className="plan-pricing_period">/ mes</span>
                      </div>
                      <div className="plan-pricing-transaction">+ 3% por transacción</div>
                      <div className="plan-details">
                        <div className="plan-details-item">
                          <BsCheck /> <span>Tienda en línea</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Página de pagos</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Suscripciones y pagos ilimitados</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Plataforma de gestión de suscripciones</span>
                        </div>
                      </div>
                      <button className="plan-select botones boton-violeta" id="launch">Elegir plan</button>
                    </div>

                    <div className="plans-item">
                      <h4>Starter</h4>
                      <p>Comience a explorar un negocio de ingresos recurrentes más avanzado</p>
                      <div className="plan-pricing-price">
                        <span className="plan-pricing_currency">USD</span>
                        <span className="plan-pricing_amount">$79</span>
                        <span className="plan-pricing_period">/ mes</span>
                      </div>
                      <div className="plan-pricing-transaction">hasta $8k/mes en transacciones<br /> + 1% en transacciones adicionales</div>
                      <div className="plan-details">
                        <div className="plan-details-item">
                          <BsCheck /> <span>Todo lo del plan Launch incluido</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>APIs y Webhooks</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Validador de suscripciones QR</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Integración con software de facturación</span>
                        </div>
                      </div>
                      <button className="plan-select botones boton-violeta" id="starter">Elegir plan</button>
                    </div>

                    <div className="plans-item">
                      <h4>Rise</h4>
                      <p>Todo lo que necesita para un negocio de ingresos recurrentes en crecimiento</p>
                      <div className="plan-pricing-price">
                        <span className="plan-pricing_currency">USD</span>
                        <span className="plan-pricing_amount">$199</span>
                        <span className="plan-pricing_period">/ mes</span>
                      </div>
                      <div className="plan-pricing-transaction">hasta $25k/mes en transacciones<br /> + 0.8% en transacciones adicionales</div>
                      <div className="plan-details">
                        <div className="plan-details-item">
                          <BsCheck /> <span>Todo lo del plan Starter incluido</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Múltiples pasarelas de pago</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Reclamación inteligente</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Reclamación de pagos</span>
                        </div>
                      </div>
                      <button className="plan-select botones boton-violeta" id="rise">Elegir plan</button>
                    </div>

                    <div className="plans-item">
                      <h4>Scale</h4>
                      <p>Funciones avanzadas para escalar tu negocio de ingresos recurrentes</p>
                      <div className="plan-pricing-price">
                        <span className="plan-pricing_currency">USD</span>
                        <span className="plan-pricing_amount">$399</span>
                        <span className="plan-pricing_period">/ mes</span>
                      </div>
                      <div className="plan-pricing-transaction">hasta $70k/mes en transacciones<br />+ 0.6% en transacciones adicionales</div>
                      <div className="plan-details">
                        <div className="plan-details-item">
                          <BsCheck /> <span>Todo lo del plan Rise incluido</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Ejecutivo de cuenta dedicado</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Soporte técnico dedicado</span>
                        </div>
                        <div className="plan-details-item">
                          <BsCheck /> <span>Almacenamiento de tarjetas tokenizadas para migraciones</span>
                        </div>
                      </div>
                      <button className="plan-select botones boton-violeta" id="scale">Elegir actual</button>
                    </div>
                  </div>
                </Modal>
              </div>
              <div className="order-box flex">
                <span className="strong">Tasa actual</span>
                <span>1% / transacción</span>
              </div>
              <div className="order-box flex">
                <span className="strong">Tarifa actual</span>
                <span>USD $0 / mes</span>
              </div>
            </div>

            <div className="order-box-container input">
              <div className="billing-billing-address billing-billing-shown formularios">
                <div className="editar_direccion_wrap">

                  <div className="tcfields tcfieldssubs margin-bottom-15px hidden">
                    <h3 className="margin-bottom">Tarjeta de crédito</h3>
                    <input type="text" placeholder="Número de tarjeta de crédito" name="cardNumber" id="cardNumber" data-epayco="card[number]" />
                    <div className="flex">
                      <div className="exp-wrapper flex">
                        <input autoComplete="off" className="exp" name="month" id="month" maxLength="2" pattern="[0-9]*" inputMode="numerical" placeholder="MM" type="text" data-pattern-validate="" />
                        <input autoComplete="off" className="exp" name="year" id="year" maxLength="2" pattern="[0-9]*" inputMode="numerical" placeholder="YY" type="text" data-pattern-validate="" />
                      </div>
                      <input type="text" placeholder="CVV" id="cardCvc" name="cardCvc" size="4" data-epayco="card[cvc]" />
                    </div>
                  </div>

                  <h3 className="margin-bottom">Dirección de facturación</h3>
                  <p className="margin-bottom-15px">La dirección de facturación debe coincidir con tu extracto bancario</p>
                  <input type="text" id="companyname" name="companyname" placeholder="Nombre de la empresa" />
                  <div className="flex">
                    <input type="text" id="lnombre" name="lnombre" placeholder="Nombre" />
                    <input type="text" id="lapellido" name="lapellido" placeholder="Apellido" />
                  </div>
                  <div className="flex">
                    <input type="number" id="cedula" name="cedula" placeholder="NIT o número de identificación" />
                    <input type="text" id="telefono" name="telefono" placeholder="Teléfono" />
                  </div>
                  <input type="text" id="ldireccionuno" name="ldireccionuno" placeholder="Dirección" />
                  <input type="text" id="ldirecciondos" name="ldirecciondos" placeholder="Apartamento, casa, etc. (opcional)" />
                  <select name="lpais" id="lpais">
                    <option value="0">Seleccionar país</option>
                    <option value="CO">Colombia</option>
                  </select>
                  <select name="lstate" id="lstate">
                    <option value="0">Seleccionar estado/departamento</option>
                    <option value="ATL">Atlántico</option>
                  </select>
                  <select name="lcity" id="lcity">
                    <option value="barranquilla">Barranquilla</option>
                  </select>
                  <input type="text" id="lzip" name="lzip" placeholder="Código postal" />
                  <button type="submit" className="save_billing_ccard boton-violeta botones btn100">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Billing;