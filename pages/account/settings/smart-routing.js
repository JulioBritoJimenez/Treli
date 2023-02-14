import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function EnrutamientoInteligente() {
  return(
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/currencies/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Enrutamiento inteligente</h2>
          </div>
          <GuardarCambios  />
          <p>El enrutamiento inteligente te permite configurar las reglas de las pasarelas de pago, según las monedas.</p>

          <div className="new-product-cols self-serve-portal">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input">
                    <span className="routing-if">Si: COP</span>
                    <span className="routing-use">Usar:</span>
                    <select className="smart-routing-select" data-currency="COP">
						          <option value="">Seleccionar pasarela de pago</option>
											<option value="epaycodirect">ePayco</option>
											<option value="wompidirect">Wompi</option>
											<option value="payudirect">Payu Colombia</option>
											<option value="stripedirect">Stripe</option>
											<option value="placetopay">Place to Pay</option>
										</select>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input">
                    <span className="routing-if">Si: USD</span>
                    <span className="routing-use">Usar:</span>
                    <select className="smart-routing-select" data-currency="COP">
						          <option value="">Seleccionar pasarela de pago</option>
											<option value="epaycodirect">ePayco</option>
											<option value="payudirect">Payu Colombia</option>
											<option value="stripedirect">Stripe</option>
											<option value="placetopay">Place to Pay</option>
										</select>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input">
                    <span className="routing-if">Si: PEN</span>
                    <span className="routing-use">Usar:</span>
                    <select className="smart-routing-select" data-currency="COP">
						          <option value="">Seleccionar pasarela de pago</option>
											<option value="payudirect">Payu Colombia</option>
											<option value="stripedirect">Stripe</option>
										</select>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input">
                    <span className="routing-if">Si: MXN</span>
                    <span className="routing-use">Usar:</span>
                    <select className="smart-routing-select" data-currency="COP">
						          <option value="">Seleccionar pasarela de pago</option>
											<option value="payudirect">Payu Colombia</option>
											<option value="stripedirect">Stripe</option>
											<option value="placetopay">Place to Pay</option>
										</select>
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

export default EnrutamientoInteligente;