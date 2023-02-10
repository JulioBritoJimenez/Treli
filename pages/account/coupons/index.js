import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { useState } from 'react';
import { Checkbox, Table } from 'antd';
import { useRouter } from 'next/router';

function Coupons() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }

  return (
    <>
      <Layout>
        <div className="olist-container order-filtert cupones">
          <div className="plist-head-title">
            <div className="plist-head-titlecol1">
              <h2>Cupones</h2>
            </div>
            <div className="plist-head-titlecol1">
              <Link className="botones boton-violeta" href="/account/coupons/coupon">Agregar cupón</Link>
            </div>
          </div>

          <div className="plist-head-row1">
            <div className="olist-status status-filter">
              <div className={`filter-order olist-all ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-filter="any">Todos</div>
              <div className={`filter-order olist-processing ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-filter="Active">Activo</div>
              <div className={`filter-order olist-completed ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-filter="Draft">Borrador</div>
              <div className={`filter-order olist-completed ${estadoFiltroState === 4 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(4)} data-filter="Draft">Archivar</div>
            </div>
            <div className="plist-search">
              <input type="text" name="psearch" id="psearch" placeholder="Buscar planes" />
              <div className="plist-but plist-but-search boton-border">Buscar</div>
            </div>
          </div>

          <div className="plist-head-row2">
            <div className="plist-actions">
              <select name="bulkactions" id="bulkactions">
                <option value="">Acciones en grupo</option>
                <option value="active">Cambiar a activo</option>
                <option value="draft">Cambiar a borrador</option>
                <option value="archive">Archivar</option>
                <option value="active">Desarchivar</option>
              </select>
              <div className="plist-but boton-border">Aplicar</div>
            </div>
            <div className="plist-filter-container">
              <div className="plist-avail">
                <select name="filteravail" id="filteravail">
                  <option value="">Filtrar por tipo</option>
                  <option value="percent">Descuento en porcentaje</option>
                  <option value="fixed_cart">Descuento fijo</option>
                  <option value="recurring_percent">Descuento en porcentaje % recurrente</option>
                  <option value="recurring_fee">Descuento fijo recurrente</option>
                </select>
              </div>
              <div className="plist-but plist-but-filter boton-border">Filtrar</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Coupons;