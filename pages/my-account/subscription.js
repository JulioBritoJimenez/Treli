import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import Treli from "../../public/t-treli.jpg";
import CodigoQR from "../../public/codigoQR.png";

function MyAccountSubs() {
  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
      <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Mi suscripción</h2>
      </div>

      <div className="order-header flex flex-center">
        <div className="order-header_logo">
          <Image src={Treli} alt="Logo" />
        </div>
        <div className="order-header_name strong">Treli</div>
        <div className="qr-subs-container">
          <Link href="/my-account/qrcode" className="qr-link-subs">
            <Image src={CodigoQR} alt="Código QR" />
            <span className="strong">Abrir QR</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyAccountSubs;