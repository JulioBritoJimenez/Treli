import Link from 'next/link';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <Link href="/account/subscriptions/">{text}</Link>,
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
    className: 'estado status-processing',
    render: (text) => <span>{text}</span>,
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
];

const data = [
  {
    key: '1',
    id: '26836',
    estado: 'Activa',
    fecha: 'febrero 3, 2023',
    total: 'COP $178,000',
  },
  {
    key: '2',
    id: '26852',
    estado: 'Activa',
    fecha: 'enero 18, 2023',
    total: 'COP $78,000',
  },
];

function HistorialPagos() {
  return(
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  )
}

export default HistorialPagos;