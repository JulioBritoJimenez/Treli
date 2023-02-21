import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from 'react';

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
        <div className={`filter-order olist-all ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-filter="activas">Activas</div>
        <div className={`filter-order olist-processing ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-filter="pausadas">Pausadas</div>
        <div className={`filter-order olist-completed ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-filter="canceladas">Canceladas</div>
      </div>
    </div>
  )
}

export default Usubscriptions;