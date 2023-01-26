function HistorialCorreos() {
  return(
    <>
      <table className="payment-history">
        <tbody>
          <tr>
            <th>Destinatario</th>
            <th>Enviada en</th>
            <th className="t_table_right">Notificación</th>
          </tr>
          <tr>
            <td>demo@treli.co</td>
            <td>enero 18, 2023 06:06 PM</td>
            <td className="t_table_right">Renovación de suscripción</td>
          </tr>
          <tr>
            <td>demo@treli.co</td>
            <td>enero 17, 2023 06:02 PM</td>
            <td className="t_table_right">Pago aprobado</td>
          </tr>
          <tr>
            <td>demo@treli.co</td>
            <td>enero 17, 2023 06:02 PM</td>
            <td className="t_table_right">Activación de suscripción</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default HistorialCorreos;