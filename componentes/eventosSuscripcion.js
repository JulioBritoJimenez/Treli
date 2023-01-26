function EventosSuscripcion() {
    return(
      <>
        <table className="payment-history">
          <tbody>
            <tr>
              <th>Evento</th>
              <th className="t_table_right">Fecha</th>
            </tr>
            <tr>
              <td>Estado cambió de En espera a Activa.</td>
              <td className="t_table_right">enero 18, 2023 at 06:06 PM</td>
            </tr>
            <tr>
              <td>Estado del pago marcado como completo.</td>
              <td className="t_table_right">enero 18, 2023 at 06:06 PM</td>
            </tr>
            <tr>
              <td>Creado el pedido #27135 para registrar la renovación.</td>
              <td className="t_table_right">enero 18, 2023 at 06:02 PM</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
  
  export default EventosSuscripcion;