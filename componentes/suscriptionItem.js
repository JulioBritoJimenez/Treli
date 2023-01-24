import Link from 'next/link';

function Suscriptionitem() {
    return (
      <>
        <Link href="/account/subscriptions/order" className="order-list-item">
          <div className="order-item-bulk"><input type="checkbox" className="bulkorder" name="order27135" id="order27135" value="27135" /></div>
          <div className="order-item-order">#27135 Nombre Apellido </div>
          <div className="order-item-date">Suscripción Demo</div>
          <div className="order-item-status status-processing"><span>Activa</span></div>
          <div className="order-item-type">Febrero 18, 2023</div>
          <div className="order-item-total">COP <span className="amount"><bdi><span className="price-currencySymbol">$</span>178,000</bdi></span> / mes</div>
        </Link>
      </>
    )
  }
  
  export default Suscriptionitem;