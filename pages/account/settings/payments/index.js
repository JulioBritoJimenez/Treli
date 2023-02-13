import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import IconePayco from '../../../../public/icon-epayco.jpg';
import IconWompi from '../../../../public/icon-wompi.png';
import IconPayu from '../../../../public/icon-payu.png';
import IconStripe from '../../../../public/icon-stripe.png';
import IconPlacetopay from '../../../../public/icon-placetopay.svg';

function Payments() {
  return(
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Pagos</h2>
          </div>
          <h3 className="margin-bottom-15px">Métodos de pago</h3>
          <p>Configura cómo quieres recibir pagos, integrándote con pasarelas de pago y configurando métodos de pago manuales.</p>

          <div className="new-product-cols payment-providers">
            <div className="new-product-col1">
              <div className="order-box-container active-providers margin-bottom">
                <div className="order-box payment-gateways">
                  <div className="flex flex-center">
                    <div>
                      <h3 className="margin-bottom-15px">Pasarelas de pago</h3>
                      <p>Acepta y automatiza pagos recurrentes mediante la integración con una pasarela de pago.</p>
                    </div>
                    <Link href="/account/settings/payments/gateways" className="botones boton-border">+ Agregar pasarela</Link>
                  </div>
                </div>

                <div className="order-box">
                  <div className="flex provider-image-text">
                    <div className="provider-image flex">
                      <Image src={IconePayco} alt="Logo pasarela" />
                    </div>
                    <h3 className="semi">ePayco</h3>
                    <div className="provider-status">
                      <span className="status-circle active"></span> Activo
                    </div>
                    <Link href="/account/settings/payments/epayco" className="botones boton-border">Administrar</Link>
                  </div>
                </div>

                <div className="order-box">
                  <div className="flex provider-image-text">
                    <div className="provider-image flex">
                      <Image src={IconWompi} alt="Logo pasarela" />
                    </div>
                    <h3 className="semi">Wompi</h3>
                    <div className="provider-status">
                      <span className="status-circle active"></span> Activo
                    </div>
                    <Link href="/account/settings/payments/wompi" className="botones boton-border">Administrar</Link>
                  </div>
                </div>

                <div className="order-box">
                  <div className="flex provider-image-text">
                    <div className="provider-image flex">
                      <Image src={IconPayu} alt="Logo pasarela" />
                    </div>
                    <h3 className="semi">Payu Colombia</h3>
                    <div className="provider-status">
                      <span className="status-circle active"></span> Activo
                    </div>
                    <Link href="/account/settings/payments/payu-co" className="botones boton-border">Administrar</Link>
                  </div>
                </div>

                <div className="order-box">
                  <div className="flex provider-image-text">
                    <div className="provider-image flex">
                      <Image src={IconStripe} alt="Logo pasarela" />
                    </div>
                    <h3 className="semi">Stripe</h3>
                    <div className="provider-status">
                      <span className="status-circle active"></span> Activo
                    </div>
                    <Link href="/account/settings/payments/stripe" className="botones boton-border">Administrar</Link>
                  </div>
                </div>

                <div className="order-box">
                  <div className="flex provider-image-text">
                    <div className="provider-image flex">
                      <Image src={IconPlacetopay} alt="Logo pasarela" />
                    </div>
                    <h3 className="semi">Place to Pay</h3>
                    <div className="provider-status">
                      <span className="status-circle inactive"></span> Inactivo
                    </div>
                    <Link href="/account/settings/payments/place-to-pay" className="botones boton-border">Administrar</Link>
                  </div>
                </div>
              </div>

              <div className="order-box-container manual-providers">
                <div className="order-box payment-gateways">
                  <div className="flex flex-center">
                    <div>
                      <h3 className="margin-bottom-15px">Métodos de pago offline</h3>
                      <p>Los pagos generalmente se realizan offline y se concilian manualmente, como efectivo y entrega y transferencias bancarias.</p>
                    </div>
                    <Link href="/account/settings/payments/manual" className="botones boton-border">Administrar</Link>
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

export default Payments;