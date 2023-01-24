function Orderitem() {
  return (
    <>
      <a href="/" className="order-list-item">
        <div className="order-item-bulk"><input type="checkbox" className="bulkorder" name="order27135" id="order27135" value="27135" /></div>
        <div className="order-item-order">#27135 Nombre Apellido </div>
        <div className="order-item-date">January 18, 2023</div>
        <div className="order-item-status status-processing"><span>aprobado</span></div>
        <div className="order-item-type">Pago de renovación</div>
        <div className="order-item-total">COP <span className="amount"><bdi><span className="price-currencySymbol">$</span>178,000</bdi></span></div>
      </a>
    </>
  )
}

export default Orderitem;