import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import Image from "next/image";
import Demoimg from '../../../public/demo_suscripcion.jpg';
import VisaLogo from '../../../public/Visa-Logo.png';

function OrderSuscription() {
  return(
    <>
      <Layout>
        <div className="order-container subscription-order">
          <div className="order-head">
            <h2 className="head-number">Suscripción #26836</h2>
            <div className="head-status status-style status-processing">Activa</div>
          </div>

          <div className="order-head-paid">
            <Link href="/account/subscriptions" className="order-back"><BsArrowLeftShort /></Link>
            <div className="paid-on">Última renovación enero 18, 2023 - 06:06 PM</div>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box order-items">
                  <div className="order-item">
                    <div className="order-item_image"><Image src={Demoimg} alt="Imagen Demo" priority /></div>
                    <a href="/account" target="_blank" className="order-item_name">
                      <span className="text-dec">Suscripción Demo</span>
                      <span className="order-vars-cont">
                        <span className="order-vars-cont"></span>
                      </span>
                    </a>
                    <div className="order-item_sub">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                      <span className="order-qty">x1</span>
                    </div>
                    <div className="order-item_total">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                    </div>
                    <div className="edit-item" data-productid="2026" data-qty="1" data-price="150000">
                      <BsPencilSquare />
                    </div>
                  </div>
                </div>

                <div className="order-box order-totals">
                  <div className="order-total-item flex">
                    <div>Subtotal</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span></div>
                  </div>
                  <div className="order-total-item flex">
                    <div className="totals-title">acuerdos comerciales</div>
                    <div className="totals-subtotal">COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>28,000</bdi></span> <span className="remove-fee" data-name="acuerdos-comerciales"><BsX /></span></div>
                  </div>
                  <div className="order-total-item order-total-total flex">
                    <div>Total</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>178,000</bdi></span></div>
                  </div>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Información de suscripción</h3>
                  <p><strong>Frecuencia:</strong> Cada mes</p>
                  <p><strong>Fecha de inicio:</strong> enero 17, 2023 - 06:02 PM</p>
                  <p><strong>Próximo pago:</strong> febrero 18, 2023 - 06:06 PM</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Cliente</h3>
                  <p>Nombre Apellido</p>
                  <p>demo@treli.co</p>
                  <p>3991111111</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Direccion de facturación</h3>
                  <p><strong>Nombre Apellido</strong></p>
                  <p>Cra 1 1 1, Barranquilla, ATL, Colombia, 80001</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Método de pago</h3>
                  <div className="payment-cart flex">
                    <div className="payment-title"><Image src={VisaLogo} alt="Logo pago" /> Terminada en 4242 via Wompi</div>
                    <div className="payment-expire">Expira 12/2025</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container order-details subs-inf-box margin-bottom">Pausar suscripción</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default OrderSuscription;