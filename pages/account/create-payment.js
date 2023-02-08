import Layout from "../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";
import { useState } from 'react';
import CrearCliente from "../../componentes/crearCliente";

function CreatePayment() {

  const [crearcliente, setCrearcliente] = useState(false);
  const crearclienteClic = () => {
    setCrearcliente(!crearcliente);
  };

  const [cliente, setCliente] = useState(false);
  const clienteClic = () => {
    setCliente(!cliente);
  };

  const [listaResultados, setListaResultados] = useState(false);
  const listaResultadosClic = () => {
    setListaResultados(!listaResultados);
  };

  const [agregarItem, setAgregarItem] = useState(false);
  const agregarItemClic = () => {
    setAgregarItem(!agregarItem);
  };

  const [selectedInput, setSelectedInput] = useState({checked: null})
  const cobroPago = e => {
    setSelectedInput({checked: e.target.value});
  }

  return (
    <Layout>
      <div className="account-appe-container create-subscription">
        <div className="order-head-paid">
          <Link href="/account/orders" className="order-back"><BsArrowLeftShort /></Link>
          <h2>Crear Pago</h2>
        </div>

        <div className="settings-home-container pick-customer">
          <input type="hidden" name="username" id="username" value="demo" />
          <div className="settings-home-title">
            <h3>Seleccionar o crear cliente</h3>
            <p>Selecciona el cliente para el que está creando el pago</p>
          </div>
          <div className="settings-items customer-list">
            <div className={`customer-list-customers ${crearcliente ? "hidden": ""} ${cliente ? "hidden": ""}` .trimEnd()}>
              <a className="flex-no-space list-item hover-white">
                <div className="input flex-grow">
                  <input type="text" id="customer-search" name="customer-search" placeholder="Buscar por nombre/email" />
                </div>
              </a>

              <div className="customer-list-results">
                <a className="flex-no-space list-item customer-item" onClick={clienteClic}>
                  <div className="text">
                    <div className="strong">Nombre Apellido</div>
                    <div>demo@treli.co</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </a>
                <a className="flex-no-space list-item customer-item" onClick={clienteClic}>
                  <div className="text">
                    <div className="strong">Nombre Apellido</div>
                    <div>test@treli.co</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </a>
              </div>

              <a className="flex-no-space list-item hover-white new-cus">
                <div className="input flex-grow">
                  <button className="create-customer-tog botones boton-violeta btn100" onClick={crearclienteClic}>Crear nuevo cliente</button>
                </div>
              </a>
            </div>

            <div className={`create-new-customer hidden ${crearcliente ? "active": ""} ${cliente ? "active": ""}` .trimEnd()}>
              <CrearCliente />
            </div>
          </div>
        </div>

        <div className="settings-home-container select-product">
          <div className="settings-home-title">
            <h3>Información de items</h3>
            <p>Busca o agregue un artículo personalizado para este pago</p>
          </div>
          <div className="settings-items payment-info create-new-customer">
            <span className="acc-label item-c-title">Items</span>
            <div className="input flex-grow items-search">
              <input type="text" placeholder="Buscar o agregar un item" id="item-search" name="item-search" onClick={listaResultadosClic} />
              <div className={`item-list-results hidden ${listaResultados ? "active": ""}` .trimEnd()}>
                <a className="strong" onClick={agregarItemClic}>+ Agregar item personalizado</a>
                <a className="strong" href="/account/products/new-product">+ Crear nuevo item</a>
                <a className="strong">Full time hot desk - $517,000 <span className="settings-item-go"><BsChevronRight /></span></a>
                <a className="strong">GRAVEL SPECIALIZED SEQOIA SRAM - $50,000 <span className="settings-item-go"><BsChevronRight /></span></a>
                <a className="strong">Prueba - $20,000 <span className="settings-item-go"><BsChevronRight /></span></a>
              </div>
            </div>

            <div className="item-details">
              <div className="flex item_resume hidden">
                <div className="strong"> Detalles de items</div>
                <div className="price-item-detail">$480,000</div>
              </div>
              <table className="payment-history item-details_detail hidden">
                <tbody>
                  <tr>
                    <th className="long_th">Item</th>
                    <th>Qty</th>
                    <th>Precio</th>
                  </tr>
                  <tr>
                    <td className="input long_th">
                      Espejo Doble arco
                    </td>
                    <td className="input">
                      <input placeholder="1" className="v-required" type="number" id="item_qty" />
                    </td>
                    <td className="input">
                      <input placeholder="$0.00" className="v-required" type="text" id="item_price" />
                      <input type="hidden" id="item_id" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className={`custom_item hidden ${agregarItem ? "active": ""}` .trimEnd()}>
                <p className="app-input input">
                  <span className="acc-label">Nombre del item</span>
                  <input type="text" name="name" className="c-required" id="name" placeholder="Nombre" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Cantidad del item</span>
                  <input type="number" name="quantity" className="c-required" id="quantity" placeholder="1" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Precio del item</span>
                  <input type="number" name="amount" className="c-required" id="amount" placeholder="$0.00" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Precio del item</span>
                  <input type="text" name="internal_id" className="c-required" id="internal_id" placeholder="12345" />
                </p>
              </div>

              <div className={`actions hidden ${agregarItem ? "active": ""}` .trimEnd()}>
                <a className="cancel-add-item strong">Cancelar</a>
                <button className="botones boton-border">Guardar y agregar otro</button>
                <button className="botones boton-violeta button-full">Guardar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-home-container payment-settings">
          <div className="settings-home-title">
            <h3>Cobro del pago</h3>
            <p>Define cuándo le quieres cobrar a tu cliente</p>
          </div>
          <div className="settings-items payment-settings-r create-new-customer">
            <div className="payment-collection_schedule">
              <p className="app-input">
                <span className="radio-buttons-container">
                  <label className="check-container strong">Plantilla de pago
                    <input type="radio" value="schedule" className="product-to-add" data-plan="" name="" data-pid="" checked={selectedInput.checked === "schedule"} onChange={cobroPago} />
                    <span className="checkmark"></span>
                  </label>
                </span>
              </p>
              <div className="collection_schedule-toggle">
                <p>Selecciona una plantilla para solicitar un pago en una fecha específica</p>
                <p className="app-input input">
                  <span className="acc-label">Plantilla de pago</span>
                  <select name="schedule_template" id="schedule_template">
                    <option value="0">My first template</option>
                    <option value="1">30 dias</option>
                    <option value="2">My new template</option>
                  </select>
                </p>
              </div>
            </div>

            <div className="payment-collection_request-now">
              <p className="app-input">
                <span className="radio-buttons-container">
                  <label className="check-container strong">Solicitar pago ahora
                    <input type="radio" value="request" className="product-to-add" data-plan="" name="" data-pid="" checked={selectedInput.checked === "request"} onChange={cobroPago} />
                    <span className="checkmark"></span>
                  </label>
                </span>
              </p>
              <div className="collection_schedule-toggle hidden">
                <p>Crear un pago con fecha de vencimiento hoy</p>
                <p className="app-input input">
                  <span className="acc-label">Entrega</span>
                  <select name="payment_delivery" id="payment_delivery">
                    <option value="notify">Notificar al cliente</option>
                    <option value="nonotify">No notificar al cliente</option>
                  </select>
                </p>
              </div>
            </div>

            <div className="payment-collection_request-now">
              <p className="app-input">
                <span className="radio-buttons-container">
                  <label className="check-container strong">Cobrar automáticamente
                    <input type="radio" value="autocharge" className="product-to-add" data-plan="" name="" data-pid="" checked={selectedInput.checked === "autocharge"} onChange={cobroPago} />
                    <span className="checkmark"></span>
                  </label>
                </span>
              </p>
              <div className="collection_schedule-toggle hidden">
                <p>Cobrar automáticamente un método de pago registrado</p>
                <p className="app-input input">
                  <input type="text" placeholder="Seleccionar método de pago" id="payment-search" name="payment-search" token="0" gateway="wompidirect" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-home-container select-product">
          <div className="settings-home-title"></div>
          <div className="settings-items submit-create-subs">
            <button className="submit-create-subs-tog botones boton-violeta btn100">Crear pago</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePayment;