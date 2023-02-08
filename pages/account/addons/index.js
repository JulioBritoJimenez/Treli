import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { useState } from 'react';
import { Checkbox, Table } from 'antd';
import { useRouter } from 'next/router'

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Precio',
    dataIndex: 'precio',
    key: 'precio',
  },
  {
    title: 'Fecha de creación',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Última modificación',
    dataIndex: 'modificacion',
    key: 'modificacion',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
];

const data = [
  {
    key: '1',
    nombre: 'Acuerdos Comerciales',
    precio: '$28,000 / mes',
    fecha: 'diciembre 28, 2022 10:59 AM',
    modificacion: 'diciembre 28, 2022 10:59 AM',
    estado: 'Activo',
  },
  {
    key: '2',
    nombre: 'Cotizaciones',
    precio: '$120,000 / mes',
    fecha: 'diciembre 29, 2022 10:59 AM',
    modificacion: 'diciembre 28, 2022 10:59 AM',
    estado: 'Activo',
  },
  {
    key: '3',
    nombre: 'Acuerdos Comerciales',
    precio: '$28,000 / mes',
    fecha: 'diciembre 28, 2022 10:59 AM',
    modificacion: 'diciembre 28, 2022 10:59 AM',
    estado: 'Activo',
  },
  {
    key: '4',
    nombre: 'Cotizaciones',
    precio: '$120,000 / mes',
    fecha: 'diciembre 29, 2022 10:59 AM',
    modificacion: 'diciembre 28, 2022 10:59 AM',
    estado: 'Activo',
  },
]

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

function Addons() {

  const [estadoFiltroState, setEstadoFiltroState] = useState(1);
  const estadoFiltroTab = (index) => {
    setEstadoFiltroState(index);
  }

  const router = useRouter()

  return (
    <>
      <Layout>
        <div className="olist-container order-filtert addons">
          <div className="plist-head-title">
            <div className="plist-head-titlecol1">
              <h2>Addons</h2>
            </div>
            <div className="plist-head-titlecol1">
              <Link className="botones boton-violeta" href="/account/addons/create">Agregar addon</Link>
            </div>
          </div>

          <div className="plist-head-row1">
            <div className="olist-status status-filter">
              <div className={`filter-order olist-all ${estadoFiltroState === 1 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(1)} data-filter="any">Todos</div>
              <div className={`filter-order olist-processing ${estadoFiltroState === 2 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(2)} data-filter="Active">Activo</div>
              <div className={`filter-order olist-completed ${estadoFiltroState === 3 ? "plist-activestyle": ""}` .trimEnd()} onClick={() => estadoFiltroTab(3)} data-filter="Draft">Borrador</div>
            </div>
            <div className="plist-search">
              <input type="text" name="psearch" id="psearch" placeholder="Buscar addons por nombre" />
              <div className="plist-but plist-but-search boton-border">Buscar</div>
            </div>
          </div>

          <div className="plist-head-row2">
            <div className="plist-actions">
              <select name="bulkactions" id="bulkactions">
                <option value="">Acciones en grupo</option>
                <option value="active">Cambiar a activo</option>
                <option value="draft">Cambiar a borrador</option>
                <option value="archive">Eliminar</option>
              </select>
              <div className="plist-but boton-border">Aplicar</div>
            </div>
          </div>

          <div className="order-list-container">
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    router.push('/account/addons/create')
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
        </div>
      </Layout>
    </>
  )
}

export default Addons;