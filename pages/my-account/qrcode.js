import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import QrCodigo from "../../public/codigo-qr2.png";
import Treli from "../../public/t-treli.jpg";
import ImagenSuscripcion from "../../public/Treli-Product-Placeholder.jpg";

function QrCode() {
  return (
    <div className="account-container qrcode">
      <div className="account-header flex no-justify flex-center">
        <Link href="/my-account/subscription/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Suscripción #30990</h2>
      </div>

      <div className="qr-qr">
        <div id="qrcode">
          <Image src={QrCodigo} alt="Código QR" />
        </div>
        <p>Muestra el código QR para que sea escaneado en el punto físico del negocio.</p>
      </div>

      <div className="order-header flex flex-center margin-bottom-30px">
        <div className="order-header_logo">
          <Image src={Treli} alt="Logo" />
        </div>
        <div className="order-header_name strong">Treli</div>
        <div className="estado">
          <div className="estado-order-info activo strong">Activa</div>
        </div>
      </div>

      <div className="order-info order-row flex">
        <div className="order-info-col1">
          <div className="order-product-image">
            <Image src={ImagenSuscripcion} alt="Imagen" priority />
          </div>
        </div>
        <div className="order-info-col2">
          <div className="order-product-name strong">Suscripción Demo</div>
        </div>
      </div>
    </div>
  )
}

export default QrCode;