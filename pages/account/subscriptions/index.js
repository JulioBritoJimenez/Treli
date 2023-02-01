import Layout from "../../../componentes/layout";
import Link from 'next/link';
import Suscriptionitem from "../../../componentes/suscriptionItem";
import Paginacion from "../../../componentes/paginacion";
import { useState } from 'react';
import { Checkbox,Table } from 'antd';
import { useRouter } from 'next/router'

const columns = [
  {
    title: 'Suscripción',
    dataIndex: 'suscripcion',
    key: 'suscripcion',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Producto',
    dataIndex: 'producto',
    key: 'producto',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
    className: 'estado status-processing',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Próximo pago',
    dataIndex: 'proximoPago',
    key: 'proximo-pago',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
];

const data = [
  {
    key: '1',
    suscripcion: '#26836 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '2',
    suscripcion: '#27135 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '3',
    suscripcion: '#27135 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '4',
    suscripcion: '#25135 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '5',
    suscripcion: '#27435 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '6',
    suscripcion: '#27125 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '7',
    suscripcion: '#27735 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
  {
    key: '8',
    suscripcion: '#28135 Nombre Apellido ',
    producto: 'Suscripción Demo',
    estado: 'Activa',
    proximoPago: 'Febrero 18, 2023',
    total: 'COP $178,000 / mes'
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

function Subscription() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }
  
  const router = useRouter()

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
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    router.push('/account/subscriptions/order')
                    console.log("Fila")
                  }, // click row
                };
              }}
              rowSelection={{
                type: Checkbox,
              }}
              columns={columns}
              dataSource={data}
              pagination={{
                pageSize: 5,
              }}
            />
          </div>

          <Paginacion />
        </div>
      </Layout>
    </>
  )
}

export default Subscription;