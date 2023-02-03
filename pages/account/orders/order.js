import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import Demoimg from '../../../public/demo_suscripcion.jpg';


function OrderPagos() {
  return(
    <>
      <Layout>
        <div className="order-container">
          <div className="order-head">
            <h2 className="head-number">Pago #28781</h2>
            <div className="head-status status-style status-processing">Aprobado</div>
            <div className="head-status status-subs status-style">Pago de suscripción</div>
          </div>

          <div className="order-head-paid">
            <Link href="/account/orders" className="order-back"><BsArrowLeftShort /></Link>
            <div className="paid-on">Pagado en 31 de enero del 2023 - 18:05</div>
            <button className="order-action primary-action botones">Recuperación de pago</button>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box order-items">
                  <div className="order-item">
                    <div className="order-item_image"><Image src={Demoimg} alt="Imagen Demo" priority /></div>
                    <a href="/account" target="_blank" className="order-item_name">
                      <span className="text-dec">Suscripción Demo</span>
                    </a>
                    <div className="order-item_sub">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                      <span className="order-qty">x1</span>
                    </div>
                    <div className="order-item_total">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                    </div>
                  </div>
                </div>

                <div className="order-box order-totals">
                  <div className="order-total-item flex">
                    <div>Subtotal</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span></div>
                  </div>
                  <div className="order-total-item flex">
                    <div className="totals-title">Nombre addon</div>
                    <div className="totals-subtotal">COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>10,000</bdi></span></div>
                  </div>
                  <div className="order-total-item order-total-total flex">
                    <div>Total</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>160,000</bdi></span></div>
                  </div>
                </div>

                <div className="order-box flex">
                  <div>Pagado</div>
                  <div>Tarjeta de crédito vía Wompi</div>
                </div>

                <div className="order-box flex order-actions">
                  <button className="order-action action-canceled botones boton-border">Pago rechazado</button>
                  <button className="order-action action-processing primary-action botones boton-border">Pago aprobado</button>
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

export default OrderPagos;