import { Table } from 'antd';

const columns = [
  {
    title: 'Destinatario',
    dataIndex: 'destinatario',
    key: 'destinatario',
  },
  {
    title: 'Enviada en',
    dataIndex: 'enviada',
    key: 'enviada',
  },
  {
    title: 'Notificación',
    dataIndex: 'notificacion',
    key: 'notificacion',
  },
];

const data = [
  {
    key: '1',
    destinatario: 'demo@treli.co',
    enviada: 'enero 18, 2023 06:06 PM',
    notificacion: 'Renovación de suscripción',
  },
  {
    key: '2',
    destinatario: 'demo@treli.co',
    enviada: '	enero 17, 2023 06:02 PM',
    notificacion: 'Pago aprobado',
  },
  {
    key: '3',
    destinatario: 'demo@treli.co',
    enviada: '	enero 16, 2023 07:02 PM',
    notificacion: 'Activación de suscripción',
  },
];

function HistorialCorreos() {
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

export default HistorialCorreos;