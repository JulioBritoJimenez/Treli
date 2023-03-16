import Layout from "../../../componentes/layout";
import Orderitem from "../../../componentes/orderItem";
import { useState } from 'react';
import { Checkbox, Table } from 'antd';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { BsFilter, BsX, BsPlus } from "react-icons/bs";

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

  const [filtro, setFiltro] = useState(false);
  const filtroClic = () => {
    setFiltro(true);
  };
  const cerrarFiltroClic = () => {
    setFiltro(false);
  };

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
              <div className={`filter-order olist-past-due ${estadoFiltroState === 5 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(5)} data-status="past-due">Vencido</div>
              <div className={`filter-order olist-canceled ${estadoFiltroState === 6 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(6)} data-status="cancelled">Fallido</div>
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

            <div className="filter-toggle hide-desktop pointer" onClick={filtroClic}>
              <BsFilter /> <span>Filtrar pedidos</span>
            </div>

            <div className={`plist-filter-container ${filtro ? "filter-show": ""}` .trimEnd()}>
              <h3 className="hide-desktop">Filtrar pedidos</h3>
              <div className="cerrar close-filter hide-desktop pointer" onClick={cerrarFiltroClic}>
                <BsX />
              </div>
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

          <div className="plist-head-row3">
            <div className="extra-filter_container flex no-justify">
              <div className="s_p_container extra-filter">
                <div className="s_p_value extra-filter_label">
                  <span className="extra-filter-action" data-filter="payment_method"><BsPlus /><BsX className="hidden" /></span> Método de pago
                  <span className="selected-ex-filter"></span>
                </div>

                <div className="s_p_edit hidden">
                  <span className="semi-text">Filtrar por método de pago</span>
                  <div className="input-container app-input input margin-bottom-10px">
                    <select name="payment_method_select" id="payment_method_select">
                      <option value="">Seleccionar método de pago</option>
                      <option value="ePayco">ePayco card</option>
                      <option value="ePayco PSE">ePayco PSE</option>
                      <option value="Wompi">Wompi card</option>
                      <option value="Wompi PSE">Wompi PSE</option>
                      <option value="Wompi Nequi">Wompi Nequi</option>
                      <option value="Wompi Debito">Wompi Debito</option>
                      <option value="Payu">Payu card</option>
                      <option value="PayU PSE">PayU PSE</option>
                      <option value="Stripe">Stripe card</option>
                      <option value="Place to Pay">Place to Pay card</option>
                      <option value="Payments Way">Payments Way card</option>
                      <option value="Payments Way PSE">Payments Way PSE</option>
                    </select>
                  </div>
                  <button className="botones boton-violeta btn100 button-full apply-extra-filter apply-payment_method-filter">Aplicar</button>
                </div>
              </div>

              <div className="s_p_container extra-filter">
                <div className="s_p_value extra-filter_label">
                  <span className="extra-filter-action" data-filter="payment_method"><BsPlus /><BsX className="hidden" /></span> Item
                  <span className="selected-ex-filter"></span>
                </div>

                <div className="s_p_edit hidden">
                  <span className="semi-text">Filtrar por item</span>
                  <div className="input-container app-input input margin-bottom-10px">
                    <select name="payment_method_select" id="payment_method_select">
                      <option value="">Seleccionar un item</option>
                      <option value="35105">Prueba 1</option>
                      <option value="35103">Prueba 2</option>
                    </select>
                  </div>
                  <button className="botones boton-violeta btn100 button-full apply-extra-filter apply-payment_method-filter">Aplicar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-list-container">
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    router.push('/account/order')
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