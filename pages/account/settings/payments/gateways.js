import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import LogoePayco from '../../../../public/epayco.png';
import LogoWompi from '../../../../public/Wompi.png';
import LogoPayu from '../../../../public/payu-logo.svg';
import LogoStripe from '../../../../public/stripe.png';
import LogoPlacetopay from '../../../../public/placetopay.svg';

function Gateways() {
  return(
    <>
      <Layout>
        <div className="account-appe-container settings-dunning settings-ganalytics">
          <div className="order-head-paid">
            <Link href="/account/settings/payments/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Pasarelas de pago</h2>
          </div>
          <p>Acepta y automatiza pagos recurrentes mediante la integración con una pasarela de pago. <Link href="https://treli.readme.io/docs/pasarelas-de-pago" target="_blank">Aprende más</Link></p>

          <div className="order-box-container payment-gateways margin-bottom">
            <div className="order-box">
              <div className="flex flex-center flex-no-space list-item">
                <div className="strong">ePayco</div>
                <div><Image src={LogoePayco} alt="Logo pasarela" /></div>
                <Link href="https://epayco.com/tarifas/" target="_blank" className="g-rates">Tarifas</Link>
                <div className="provider-status">
                  <span className="status-circle active"></span> Activo
                </div>
                <Link href="/account/settings/payments/epayco" className="gmanage">Administrar</Link>
              </div>
            </div>

            <div className="order-box">
              <div className="flex flex-center flex-no-space list-item">
                <div className="strong">Wompi</div>
                <div><Image src={LogoWompi} alt="Logo pasarela" /></div>
                <Link href="https://wompi.co/tarifas/" target="_blank" className="g-rates">Tarifas</Link>
                <div className="provider-status">
                  <span className="status-circle active"></span> Activo
                </div>
                <Link href="/account/settings/payments/wompi" className="gmanage">Administrar</Link>
              </div>
            </div>

            <div className="order-box">
              <div className="flex flex-center flex-no-space list-item">
                <div className="strong">Payu Colombia</div>
                <div><Image src={LogoPayu} alt="Logo pasarela" /></div>
                <Link href="https://colombia.payu.com/tarifas/" target="_blank" className="g-rates">Tarifas</Link>
                <div className="provider-status">
                  <span className="status-circle active"></span> Activo
                </div>
                <Link href="/account/settings/payments/payu-co" className="gmanage">Administrar</Link>
              </div>
            </div>

            <div className="order-box">
              <div className="flex flex-center flex-no-space list-item">
                <div className="strong">Stripe</div>
                <div><Image src={LogoStripe} alt="Logo pasarela" /></div>
                <Link href="https://stripe.com/pricing" target="_blank" className="g-rates">Tarifas</Link>
                <div className="provider-status">
                  <span className="status-circle active"></span> Activo
                </div>
                <Link href="/account/settings/payments/stripe" className="gmanage">Administrar</Link>
              </div>
            </div>

            <div className="order-box">
              <div className="flex flex-center flex-no-space list-item">
                <div className="strong">Place to Pay</div>
                <div><Image src={LogoPlacetopay} alt="Logo pasarela" /></div>
                <Link href="https://www.evertecinc.com/pasarela-de-pagos-e-commerce" target="_blank" className="g-rates">Tarifas</Link>
                <div className="provider-status">
                  <span className="status-circle inactive"></span> Inactivo
                </div>
                <Link href="/account/settings/payments/place-to-pay" className="gmanage">Administrar</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Gateways;