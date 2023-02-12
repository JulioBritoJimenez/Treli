import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import { Table } from 'antd';
import { useRouter } from 'next/router';

const columns = [
  {
    title: 'Pedido',
    dataIndex: 'pedido',
    key: 'pedido',
    render: (text) => <Link href="/account/order/" target="_blank">{text}</Link>,
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Total USD',
    dataIndex: 'totalusd',
    key: 'totalusd',
  },
  {
    title: 'Tarifa',
    dataIndex: 'tarifa',
    key: 'tarifa',
  },
];

const data = [
  {
    key: '1',
    pedido: '26836',
    fecha: 'febrero 3, 2023',
    total: 'COP $178,000',
    totalusd: 'USD $22',
    tarifa: 'USD $0.00'
  },
  {
    key: '2',
    pedido: '26736',
    fecha: 'febrero 3, 2023',
    total: 'COP $178,000',
    totalusd: 'USD $22',
    tarifa: 'USD $0.00'
  },
  {
    key: '3',
    pedido: '26936',
    fecha: 'febrero 3, 2023',
    total: 'COP $178,000',
    totalusd: 'USD $22',
    tarifa: 'USD $0.00'
  },
];

function Cycle() {

  const router = useRouter();

  return(
    <>
      <Layout>
        <div className="settings-head my-account-container status-filter">
          <Link href="/account/my-account/" className="settings-head-item">General</Link>
          <Link href="/account/my-account/billing" className="settings-head-item plist-activestyle">Facturación</Link>
        </div>
        <div className="order-head-paid">
          <Link href="/account/my-account/billing/" className="order-back"><BsArrowLeftShort /></Link>
          <h2>Ciclo de facturación: Enero 12, 2023 - Febrero 12, 2023</h2>
        </div>

        <div className="new-product-cols">
          <div className="new-product-col1">
            <Table
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    router.push('/account/order')
                  }, // click row
                };
              }}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>

          <div className="new-product-col2">
            <div className="order-box-container cycle-summary">
              <div className="order-box flex">
                <h3>Cuota fija</h3>
                <h2>USD $0.000</h2>
              </div>
              <div className="order-box flex">
                <h3>Cuota de transacciones</h3>
                <h2>USD $0.000</h2>
              </div>
              <div className="order-box flex">
                <h3>Total</h3>
                <h2>USD $0.000</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Cycle;