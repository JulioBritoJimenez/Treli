import Link from 'next/link';

function PaymentHistory() {
  return(
    <>
      <table className="payment-history">
        <tbody><tr>
          <th>ID</th>
          <th>Estado</th>
          <th>Fecha</th>
          <th className="t_table_right">Total</th>
        </tr>
          <tr>
          <td><Link href="/account/subscriptions/order">27135</Link></td>
          <td><span className="status-style status-processing">Aprobado</span></td>
          <td>enero 18, 2023</td>
          <td className="t_table_right">COP <span className="price-amount amount"><bdi><span className="rice-currencySymbol">$</span>178,000</bdi></span></td>
        </tr>
            <tr>
          <td><Link href="/account/subscriptions/order">26834</Link></td>
          <td><span className="status-style status-processing">Aprobado</span></td>
          <td>enero 17, 2023</td>
          <td className="t_table_right">COP <span className="price-amount amount"><bdi><span className="rice-currencySymbol">$</span>0</bdi></span></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default PaymentHistory;