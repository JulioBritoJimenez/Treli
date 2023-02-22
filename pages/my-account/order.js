import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import Treli from "../../public/t-treli.jpg";
import ImagenSuscripcion from "../../public/Treli-Product-Placeholder.jpg";
import Tarjeta from "../../public/Visa-Logo.png";

function MyAccountOrder() {
  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
      <Link href="/my-account/orders" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Pago #26065</h2>
      </div>

      <div className="order-header flex flex-center margin-bottom-30px">
        <div className="order-header_logo">
          <Image src={Treli} alt="Logo" />
        </div>
        <div className="order-header_name strong">Treli</div>
      </div>

      <div className="order-info order-row flex">
        <div className="order-info-col1">
          <div className="order-product-image">
            <Image src={ImagenSuscripcion} alt="Imagen" priority />
          </div>
          <h4>#30990</h4>
        </div>
        <div className="order-info-col2">
          <div className="estado-order-info aprobado strong">Aprobado</div>
          <div className="order-product-name strong">Suscripción Demo</div>
          <div className="order-product-price margin-bottom-10px">$150,000 / mes</div>
        </div>
      </div>

      <div className="order-totals order-row">
        <div className="order-subtotal flex margin-bottom-15px">
          <div className="totals-title">Subtotal</div>
          <div className="totals-subtotal">$150,000</div>
        </div>
        <div className="order-subtotal flex">
          <div className="totals-title strong">Total</div>
          <div className="totals-total strong">$150,000</div>
        </div>
      </div>

      <div className="order-dates order-row">
        <div className="order-start flex">
          <div className="dates-title strong">Fecha</div>
          <div className="dates-inicio">21 de febrero del 2023</div>
        </div>
      </div>

      <div className="order-payment order-row metodo-pago">
        <div className="payment-head flex margin-bottom-15px">
          <div className="payment-title strong">Método de pago</div>
        </div>
        <div className="payment-cart flex">
          <div className="payment-title strong"><Image src={Tarjeta} alt="Logo Tarjeta" /> Terminada en 0326</div>
          <div className="payment-expire">Expira 12/2025</div>
        </div>
      </div>
      <div className="order-payment order-row facturacion">
        <div className="payment-head flex margin-bottom-15px">
          <div className="payment-title strong">Facturación</div>
        </div>
        <div className="payment-cart flex">
          <div className="dir-title">Cra 1 1 1, Barranquilla, CO</div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountOrder;