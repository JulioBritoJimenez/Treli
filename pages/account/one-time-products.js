import Layout from "../../componentes/layout";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Checkbox, Table } from 'antd';
import Image from "next/image";
import ImgPlan from '../../public/demo_suscripcion.jpg';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
    className: 'img-tabla',
    render: (text) => <><Image src={ImgPlan} alt="Imagen plan" /><a>{text}</a></>,
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
    className: 'estado status-processing',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Disponibilidad',
    dataIndex: 'disponibilidad',
    key: 'disponibilidad',
    className: 'disponibilidad disponible',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
  },
  {
    title: 'Precio',
    dataIndex: 'precio',
    key: 'precio',
  },
];

const data = [
  {
    key: '1',
    nombre: 'Felico 5 comidas',
    estado: 'Activo',
    disponibilidad: 'Disponible',
    tipo: 'Producto',
    precio: '$80,000'
  },
  {
    key: '2',
    nombre: 'Software call center',
    estado: 'Activo',
    disponibilidad: 'Disponible',
    tipo: 'Producto',
    precio: '$125,000'
  },
  {
    key: '3',
    nombre: 'Plan Oro',
    estado: 'Activo',
    disponibilidad: 'Disponible',
    tipo: 'Producto',
    precio: '$2,500,000'
  },
  {
    key: '4',
    nombre: 'Felico 5 comidas',
    estado: 'Activo',
    disponibilidad: 'Disponible',
    tipo: 'Producto',
    precio: '$80,000'
  },
  {
    key: '5',
    nombre: 'Software call center',
    estado: 'Activo',
    disponibilidad: 'Disponible',
    tipo: 'Producto',
    precio: '$125,000'
  },
  {
    key: '6',
    nombre: 'Plan Oro',
    estado: 'Activo',
    disponibilidad: 'Disponible',
    tipo: 'Producto',
    precio: '$25,000'
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

function OneTimeProducts() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }

  const router = useRouter()

  return (
    <>
      <Layout>
        <div className="olist-container order-filtert productos">
          <div className="plist-head-title">
            <div className="plist-head-titlecol1">
              <h2>Productos</h2>
            </div>
            <div className="plist-head-titlecol1">
              <Link href="/account/products/new-product" className="botones boton-violeta button-full">Agregar producto</Link>
            </div>
          </div>

          <div className="plist-head-row1">
            <div className="olist-status status-filter">
              <div className={`filter-all olist-all ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-filter="any">Todos</div>
              <div className={`filter-active ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-filter="Active">Activo</div>
              <div className={`filter-draft ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-filter="Draft">Borrador</div>
            </div>
            <div className="plist-search">
              <input type="text" name="psearch" id="psearch" placeholder="Buscar productos" />
              <div className="plist-but plist-but-search boton-border">Buscar</div>
            </div>
          </div>

          <div className="plist-head-row2">
            <div className="plist-actions">
              <select name="bulkactions" id="bulkactions">
                <option value="">Acciones en grupo</option>
                <option value="trash">Mover a la papelera</option>
                <option value="activate">Activar</option>
                <option value="draft">Borrador</option>
              </select>
              <div className="plist-but olist-but-apply boton-border">Aplicar</div>
            </div>

            <div className="plist-filter-container">
              <div className="plist-avail">
                <select name="filteravail" id="filteravail">
                  <option value="">Filtrar por disponibilidad</option>
                  <option value="instock">Disponible</option>
                  <option value="outofstock">Agotado</option>
                </select>
              </div>
              <div className="plist-tag">
                <input type="text" name="filtertag" id="filtertag" placeholder="Filtrar por etiqueta" />
              </div>
              <div className="plist-but plist-but-filter boton-border">Filtrar</div>
            </div>
          </div>

          <div className="order-list-container">
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    router.push('/account/products/new-product')
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

export default OneTimeProducts;