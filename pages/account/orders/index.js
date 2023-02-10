import Layout from "../../../componentes/layout";
import Orderitem from "../../../componentes/orderItem";
import { useState } from 'react';
import { Checkbox, Table } from 'antd';
import { useRouter } from 'next/router'
import Link from 'next/link';

const columns = [
  {
    title: 'Pago',
    dataIndex: 'pago',
    key: 'pago',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
    className: 'estado status-processing',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
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
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '2',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '3',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '4',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '5',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '6',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '7',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
    total: 'COP $178,000 / mes'
  },
  {
    key: '8',
    pago: '#28135 Nombre Apellido ',
    fecha: 'Febrero 18, 2023',
    estado: 'Aprovado',
    tipo: 'Pago de suscripción',
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

function Order() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }
  
  const router = useRouter()

  return (
    <>
      <Layout>
        <div className="olist-container order-filtert pagos">
          <div className="plist-head-title">
            <div className="plist-head-titlecol1">
              <h2>Pagos</h2>
              <Link href="/account/create-payment/" className="crear-pago botones boton-violeta button-full">Crear pago</Link>
            </div>
            <div className="plist-head-titlecol1">
              <button data-action="export_payments" data-text="Pagos exportados" data-name="pagos_treli" className="botones boton-violeta button-full export-data">Exportar pagos</button>
            </div>
          </div> 

          <div className="plist-head-row1">
            <div className="olist-status status-filter">
              <div className={`filter-order olist-all ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-status="any">Todos</div>
              <div className={`filter-order olist-processing ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-status="processing">Aprobado</div>
              <div className={`filter-order olist-completed ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-status="completed">Completado</div>
              <div className={`filter-order olist-pending ${estadoFiltroState === 4 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(4)} data-status="pending">Pendiente</div>
              <div className={`filter-order olist-canceled ${estadoFiltroState === 5 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(5)} data-status="cancelled">Fallido</div>
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
                  <option value="Nombre-Prueba">Nombre Prueba</option>
                </select>
              </div>

              <div className="plist-avail">
                <select name="ordertype" id="ordertype">
                  <option value="">Filtrar por tipo</option>
                  <option value="renewal">Pago de renovación</option>
                  <option value="parent">Pago de suscripción</option>
                  <option value="regular">Pago único</option>
                </select>
              </div>

              <div className="plist-but plist-but-filter boton-border">Aplicar</div>
            </div>
          </div>

          <div className="order-list-container">
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    router.push('/account/orders/order')
                    console.log("Item Pagos")
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
        </div>
      </Layout>
    </>
  )
}

export default Order;