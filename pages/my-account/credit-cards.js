import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import Tarjeta from "../../public/Visa-Logo.png";

function MyAccountCreditCards() {
  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
        <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Métodos de pago</h2>
      </div>

      <div className="payment-methods-container">
        <p>Métodos de pago guardados en Treli con Wompi.</p>

        <div className="payment-methods-item order-payment order-row">
          <div className="methods-item-head flex flex-center margin-bottom-15px">
            <div className="item-ending payment-title strong"><Image src={Tarjeta} alt="Logo Tarjeta" /> Terminada en 0326</div>
            <div className="payment-expire">Expira 12/2025</div>
          </div>
          <div className="methods-item-info flex">
            <div className="item-default">Pricipal</div>
            <div className="item-delete texto-link pointer">Eliminar</div>
          </div>
        </div>
      </div>

      <div className="payment-methods-container">
        <p>Métodos de pago guardados en Treli con epaycodirect.</p>
        
        <div className="payment-methods-item order-payment order-row">
          <div className="methods-item-head flex flex-center margin-bottom-15px">
            <div className="item-ending payment-title strong"><Image src={Tarjeta} alt="Logo Tarjeta" /> Terminada en 0326</div>
            <div className="payment-expire">Expira 12/2025</div>
          </div>
          <div className="methods-item-info flex">
            <div className="item-default">Pricipal</div>
            <div className="item-delete texto-link pointer">Eliminar</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountCreditCards;