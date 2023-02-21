import { BsBoxArrowRight, BsArrowRepeat, BsListUl, BsPinMap, BsPerson, BsCreditCard2Front } from "react-icons/bs";
import Link from 'next/link';

function MyAccount() {
  return (
    <>
      <div className="account-container">
        <div className="account-header flex flex-center">
          <h2>Hola, Cliente</h2>
          <button className="botones"><BsBoxArrowRight /> Cerrar sesión</button>
        </div>

        <div className="account-menu">
          <Link href="my-account/u-subscriptions" className="account-menu_item"><span><BsArrowRepeat /></span> Suscripciones</Link>
          <Link href="/my-account/orders" className="account-menu_item"><span><BsListUl /></span> Pagos</Link>
          <Link href="/my-account/account-address/" className="account-menu_item"><span><BsPinMap /></span> Direcciones</Link>
          <Link href="/my-account/account-details/" className="account-menu_item"><span><BsPerson /></span> Detalles de cuenta</Link>
          <Link href="/my-account/credit-cards/" className="account-menu_item"><span><BsCreditCard2Front /></span> Métodos de pago</Link>
        </div>
      </div>
    </>
  )
}

export default MyAccount;