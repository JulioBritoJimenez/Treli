import Layout from "../../../componentes/layout";
import Link from 'next/link';
import Suscriptionitem from "../../../componentes/suscriptionItem";
import Paginacion from "../../../componentes/paginacion";
import { useState } from 'react';

function Subscription() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }

  return (
    <>
      <Layout>
        <div className="olist-container subs-container">
          <div className="plist-head-title">
            <div className="plist-head-titlecol1">
              <h2>Suscripciones</h2>
              <Link href="/account/create-subscription/" className="crear-suscripcion botones boton-violeta button-full">Crear suscripción</Link>
            </div>
            <div className="plist-head-titlecol1">
              <button data-action="export_payments" data-text="Pagos exportados" data-name="pagos_treli" className="botones boton-violeta button-full export-data">Exportar suscripciones</button>
            </div>
          </div>

          <div className="plist-head-row1">
            <div className="olist-status status-filter estados-suscripciones">
              <div className={`filter-order olist-all ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-status="any">Todos</div>
              <div className={`filter-order olist-active ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-status="active">Activo</div>
              <div className={`filter-order olist-cancelled ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-status="cancelled">Cancelado</div>
              <div className={`filter-order olist-paused ${estadoFiltroState === 4 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(4)} data-status="on-hold">Pausado</div>
              <div className={`filter-order olist-archived ${estadoFiltroState === 5 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(5)} data-status="dunning">Reclamación</div>
              <div className={`filter-order olist-archived ${estadoFiltroState === 6 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(6)} data-status="failed">Fallido</div>
              <div className={`filter-order olist-archived ${estadoFiltroState === 7 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(7)} data-status="in_validation">En validación</div>
              <div className={`filter-order olist-archived ${estadoFiltroState === 8 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(8)} data-status="on_hold">En espera</div>
            </div>
          </div>

          <div className="plist-head-row2">
            <div className="plist-actions">
              <select name="bulkactions" id="bulkactions">
                <option value="">Acciones en grupo</option>
                <option value="trash">Archivar</option>
                <option value="active">Cambiar a activo</option>
                <option value="canceled">Cambiar a cancelado</option>
                <option value="paused">Cambiar a pausado</option>
              </select>
              <div className="plist-but slist-but-apply boton-border">Aplicar</div>
            </div>

            <div className="plist-filter-container">
              <div className="plist-type filter-search">
                <input name="filterdate" id="filterdate" type="text" placeholder="Filtrar por fecha" />
                <div className="plist-but plist-but-filter boton-border">Filtrar</div>
              </div>

              <div className="plist-avail search-customer-c">
                <div id="subs-search-customer" className="subs-search-customer">
                  <input type="text" placeholder="Buscar cliente" issubs="yes" id="customer-search" name="customer-search" />
                  <div className="customer-list-results"></div>
                </div>
              </div>

              <div className="plist-search search-subs-number">
                <input type="text" name="psearch" id="psearch" placeholder="Buscar # de suscripción"/>
                <div className="plist-but plist-but-search boton-border">Buscar</div>
              </div>
            </div>
          </div>

          <div className="order-list-container">
            <div className="order-list-head">
              <div className="order-head-bulk"><input type="checkbox" className="selectall" /></div>
              <div className="order-head-order">Suscripción</div>
              <div className="order-head-date">Producto</div>
              <div className="order-head-status">Estado</div>
              <div className="order-head-type">Próximo pago</div>
              <div className="order-head-total">Total</div>
            </div>

            <div className="order-list-items">
              <Suscriptionitem />
              <Suscriptionitem />
              <Suscriptionitem />
              <Suscriptionitem />
              <Suscriptionitem />
              <Suscriptionitem />
            </div>
          </div>

          <Paginacion />
        </div>
      </Layout>
    </>
  )
}

export default Subscription;