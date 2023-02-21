import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function MyAccountOrders() {
  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
      <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Pagos</h2>
      </div>
    </div>
  )
}

export default MyAccountOrders;