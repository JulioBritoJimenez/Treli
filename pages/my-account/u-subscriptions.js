import Link from "next/link";
import { BsArrowLeftShort, BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import ImagenSuscripcion from "../../public/Treli-Product-Placeholder.jpg";
import CodigoQR from "../../public/codigoQR.png";

function Usubscriptions() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }

  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
      <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Suscripciones</h2>
      </div>

      <div className="olist-status status-filter">
        <div className={`filter-order ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-filter="activas">Activas</div>
        <div className={`filter-order ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-filter="pausadas">Pausadas</div>
        <div className={`filter-order ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-filter="canceladas">Canceladas</div>
        <div className={`filter-order ${estadoFiltroState === 4 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(4)} data-filter="otras">Otras</div>
      </div>

      <div className={`subs-container allsubs active-subs hidden ${estadoFiltroState === 1 ? "active": ""}` .trimEnd()}>
        <div className="subs-item">
          <div className="subs-list-image"><Image src={ImagenSuscripcion} alt="Imagen" priority /></div>
          <div className="subs-list-info">
            <div className="subs-list-pname strong">#30990 - Suscripción Demo</div>
            <div className="subs-list-mname">Treli</div>
            <div className="subs-list-renewal">Renueva el: 03/21/2023</div>
          </div>
          <Link className="qr-link" href="/my-account/qrcode">
            <Image src={CodigoQR} alt="Código QR" />
          </Link>
          <Link className="subs-link" href="/my-account/subscription"><BsBoxArrowUpRight /></Link>
        </div>
      </div>

      <div className={`subs-container allsubs paused-subs hidden ${estadoFiltroState === 2 ? "active": ""}` .trimEnd()}>
        <div className="subs-item">
          <div className="subs-list-image"><Image src={ImagenSuscripcion} alt="Imagen" priority /></div>
          <div className="subs-list-info">
            <div className="subs-list-pname strong">#30990 - Suscripción Demo</div>
            <div className="subs-list-mname">Treli</div>
            <div className="subs-list-renewal">Estado: Pausada</div>
          </div>
          <Link className="subs-link" href="/my-account/subscription"><BsBoxArrowUpRight /></Link>
        </div>
      </div>

      <div className={`subs-container allsubs cancel-subs hidden ${estadoFiltroState === 3 ? "active": ""}` .trimEnd()}>
        <div className="subs-item">
          <div className="subs-list-image"><Image src={ImagenSuscripcion} alt="Imagen" priority /></div>
          <div className="subs-list-info">
            <div className="subs-list-pname strong">#30990 - Suscripción Demo</div>
            <div className="subs-list-mname">Treli</div>
            <div className="subs-list-renewal">Estado: Cancelada</div>
          </div>
          <Link className="subs-link" href="/my-account/subscription"><BsBoxArrowUpRight /></Link>
        </div>
      </div>

      <div className={`subs-container allsubs otras-subs hidden ${estadoFiltroState === 4 ? "active": ""}` .trimEnd()}>
        <div className="subs-item">
          <div className="subs-list-image"><Image src={ImagenSuscripcion} alt="Imagen" priority /></div>
          <div className="subs-list-info">
            <div className="subs-list-pname strong">#30990 - Suscripción Demo</div>
            <div className="subs-list-mname">Treli</div>
            <div className="subs-list-renewal">Estado: Pendiente</div>
          </div>
          <Link className="subs-link" href="/my-account/subscription"><BsBoxArrowUpRight /></Link>
        </div>
        <div className="subs-item">
          <div className="subs-list-image"><Image src={ImagenSuscripcion} alt="Imagen" priority /></div>
          <div className="subs-list-info">
            <div className="subs-list-pname strong">#30990 - Suscripción Demo</div>
            <div className="subs-list-mname">Treli</div>
            <div className="subs-list-renewal">Estado: Rechazada</div>
          </div>
          <Link className="subs-link" href="/my-account/subscription"><BsBoxArrowUpRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default Usubscriptions;