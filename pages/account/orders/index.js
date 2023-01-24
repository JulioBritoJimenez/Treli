import Layout from "../../../componentes/layout";
import Orderitem from "../../../componentes/orderItem";

function Order() {
  return (
    <>
      <Layout>
        <div className="olist-container order-filtert">
          <div className="plist-head-title">
            <div className="plist-head-titlecol1">
              <h2>Pagos</h2>
            </div>
            <div className="plist-head-titlecol1">
              <button data-action="export_payments" data-text="Pagos exportados" data-name="pagos_treli" className="botones boton-violeta button-full export-data">Exportar pagos</button>
            </div>
          </div>

          <div className="plist-head-row1">
            <div className="olist-status status-filter">
              <div className="filter-order olist-all plist-activestyle" data-status="">Todos</div>
              <div className="filter-order olist-processing" data-status="processing">Aprobado</div>
              <div className="filter-order olist-completed" data-status="completed">Completado</div>
              <div className="filter-order olist-pending" data-status="pending">Pendiente</div>
              <div className="filter-order olist-canceled" data-status="cancelled">Rechazado</div>
            </div>
            <div className="plist-search">
              <input type="text" name="psearch" id="psearch" placeholder="Buscar pago #" />
              <div className="plist-but plist-but-search boton-border">Buscar</div>
            </div>
          </div>

          <div className="plist-head-row2">
            <div className="plist-actions">
              <select name="bulkactions" id="bulkactions">
                <option value="">Acciones en grupo</option>
                <option value="trash">Mover a la papelera</option>
                <option value="completed">Cambiar a completado</option>
                <option value="processing">Cambiar a procesando</option>
                <option value="canceled">Cambiar a cancelado</option>
              </select>
              <div className="plist-but olist-but-apply boton-border">Aplicar</div>
            </div>

            <div className="plist-filter-container">
              <div className="plist-type">
                <input name="filterdate" id="filterdate" type="text" placeholder="Filtrar por fecha" />
              </div>

              <div className="plist-avail">
                <select name="filteravail" id="filteravail">
                  <option value="">Filtrar por cliente</option>
                  <option value="Nombre-Apellido">Nombre Apellido</option>
                  <option value="Prueba-Prueba">Prueba Prueba</option>
                  <option value="Gabriel-Prueba">Gabriel Prueba</option>
                </select>
              </div>

              <div className="plist-avail">
                <select name="ordertype" id="ordertype">
                  <option value="">Filtrar por tipo</option>
                  <option value="renewal">Pago de renovación</option>
                  <option value="parent">Pago de suscripción </option>
                  <option value="regular">Pago único</option>
                </select>
              </div>

              <div className="plist-but plist-but-filter boton-border">Aplicar</div>
            </div>
          </div>

          <div className="order-list-container">
            <div className="order-list-head">
              <div className="order-head-bulk"><input type="checkbox" className="selectall" /></div>
              <div className="order-head-order">Pago</div>
              <div className="order-head-date">Fecha</div>
              <div className="order-head-status">Estado</div>
              <div className="order-head-type">Tipo</div>
              <div className="order-head-total">Total</div>
            </div>

            <div className="order-list-items">
              <Orderitem />
              <Orderitem />
              <Orderitem />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Order;