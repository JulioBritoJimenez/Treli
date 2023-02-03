import { Table } from 'antd';

const columns = [
  {
    title: 'Evento',
    dataIndex: 'evento',
    key: 'evento',
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },
];

const data = [
  {
    key: '1',
    evento: 'Estado cambió de En espera a Activa.',
    fecha: 'enero 18, 2023 at 06:06 PM',
  },
  {
    key: '2',
    evento: 'Estado cambió de En espera a Activa.',
    fecha: 'enero 18, 2023 at 06:06 PM',
  },
  {
    key: '3',
    evento: 'Estado cambió de En espera a Activa.',
    fecha: 'enero 18, 2023 at 06:06 PM',
  },
];

function EventosSuscripcion() {
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
  
  export default EventosSuscripcion;