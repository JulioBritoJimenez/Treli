import Link from "next/link";
import { BsArrowLeftShort, BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import Imagen from "../../public/Treli-Product-Placeholder.jpg";

function MyAccountOrders() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }

  return (
    <div className="account-container pagos">
      <div className="account-header flex no-justify flex-center">
        <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Pagos</h2>
      </div>

      <div className="olist-status status-filter">
        <div className={`filter-order ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-filter="aprobados">Aprobados</div>
        <div className={`filter-order ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-filter="pendientes">Pendientes</div>
        <div className={`filter-order ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-filter="rechazados">Rechazados</div>
      </div>

      <div className={`subs-container allsubs order-processing hidden ${estadoFiltroState === 1 ? "active": ""}` .trimEnd()}>
        <div className="subs-item item-pagos">
          <div className="image-name flex flex-center no-justify">
            <Image src={Imagen} alt="Imagen" priority />
            <div className="pagos-nombre">
              <div className="strong">Suscripción Demo</div>
              <div>Treli</div>
            </div>
          </div>
          <div className="estado-pago">
            <div className="estado-order-info aprobado strong">Aprobado</div>
          </div>
          <div className="valor-total strong">$150,000</div>
          <Link className="subs-link" href="/my-account/order"><BsBoxArrowUpRight /></Link>
        </div>
      </div>

      <div className={`subs-container allsubs order-pending hidden ${estadoFiltroState === 2 ? "active": ""}` .trimEnd()}>
        <div className="subs-item item-pagos">
          <div className="image-name flex flex-center no-justify">
            <Image src={Imagen} alt="Imagen" priority />
            <div className="pagos-nombre">
              <div className="strong">Suscripción Demo</div>
              <div>Treli</div>
            </div>
          </div>
          <div className="estado-pago">
            <div className="estado-order-info pendiente strong">Pendiente</div>
          </div>
          <div className="valor-total strong">$150,000</div>
          <Link className="subs-link" href="/my-account/order"><BsBoxArrowUpRight /></Link>
        </div>
      </div>

      <div className={`subs-container allsubs order-cancelled hidden ${estadoFiltroState === 3 ? "active": ""}` .trimEnd()}>
        <div className="subs-item item-pagos">
          <div className="image-name flex flex-center no-justify">
            <Image src={Imagen} alt="Imagen" priority />
            <div className="pagos-nombre">
              <div className="strong">Suscripción Demo</div>
              <div>Treli</div>
            </div>
          </div>
          <div className="estado-pago">
            <div className="estado-order-info rechazado strong">Rechazado</div>
          </div>
          <div className="valor-total strong">$150,000</div>
          <Link className="subs-link" href="/my-account/order"><BsBoxArrowUpRight /></Link>
        </div>
      </div>

    </div>
  )
}

export default MyAccountOrders;