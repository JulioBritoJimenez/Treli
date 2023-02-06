import Layout from "../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";
import { useState } from 'react';
import Image from "next/image";
import Demoimg from '../../public/demo_suscripcion.jpg';
import CrearCliente from "../../componentes/crearCliente";

function CreateSubscription() {

  const [crearcliente, setCrearcliente] = useState(false);

  const crearclienteClic = () => {
    setCrearcliente(!crearcliente);
  };

  const [seleccionarProducto, setSeleccionarProducto] = useState(false);

  const seleccionarProductoClic = () => {
    setSeleccionarProducto(!seleccionarProducto);
  };

  const [cliente, setCliente] = useState(false);

  const clienteClic = () => {
    setCliente(!cliente);
  };

  const [selectedInput, setSelectedInput] = useState({checked: null})
  const handleChange = e => {
    setSelectedInput({checked: e.target.value});
  }

  const [selectedPago, setSelectedPago] = useState({checked: null})
  const handleSeleaccionarPago = e => {
    setSelectedPago({checked: e.target.value});
  }

  return(
    <>
      <Layout>
        <div className="account-appe-container create-subscription">
          <div className="order-head-paid">
            <Link href="/account/subscriptions" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Crear suscripción</h2>
          </div>

          <div className="settings-home-container pick-customer">
            <input type="hidden" name="username" id="username" value="demo" />
            <div className="settings-home-title">
              <h3>Seleccionar o crear cliente</h3>
              <p>Selecciona el cliente para el cual estas creando la suscripción</p>
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
              <h3>Seleccionar productos</h3>
              <p>Selecciona los productos que deseas agregar a la suscripción</p>
            </div>
            <div className="settings-items product-list">
              <div className="selected-products"></div>
              <div className="product-list-items">
                <a product-id="28137" className="flex-no-space list-item list-item-product" onClick={seleccionarProductoClic}>
                  <div className="product-img">
                    <Image src={Demoimg} alt="Imagen Demo" priority />
                  </div>
                  <div className="text">
                    <div className="strong">Beunlimited</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </a>
                <div className={`product-plan hidden ${seleccionarProducto ? "active": ""}` .trimEnd()}>
                  <label className="input-radio pointer" product-id="28137" plan-id="28137">
                    <input type="radio" value="uno" className="product-to-add" data-plan="" name="" data-pid="" checked={selectedInput.checked === "uno"} onChange={handleChange} />
                    <div className="text">
                      <div className="strong">COP $192,900 / 1 mes</div>
                    </div>
                  </label>
                  <label className="input-radio pointer" product-id="28137" plan-id="28137">
                    <input type="radio" value="dos" className="product-to-add" data-plan="" name="" data-pid="" checked={selectedInput.checked === "dos"} onChange={handleChange} />
                    <div className="text">
                      <div className="strong">COP $145,900 / 3 mes</div>
                    </div>
                  </label>
                </div>

                <a product-id="28137" className="flex-no-space list-item list-item-product">
                  <div className="product-img">
                    <Image src={Demoimg} alt="Imagen Demo" priority />
                  </div>
                  <div className="text">
                    <div className="strong">Plan digital anual</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </a>
                <a product-id="28137" className="flex-no-space list-item list-item-product">
                  <div className="product-img">
                    <Image src={Demoimg} alt="Imagen Demo" priority />
                  </div>
                  <div className="text">
                    <div className="strong">Suscripción Demo - Limite de uso</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </a>
              </div>
            </div>
          </div>

          <div className={`settings-home-container select-payment hidden ${cliente ? "active": ""}` .trimEnd()}>
            <div className="settings-home-title">
              <h3>Seleccionar pago</h3>
              <p>Selecciona un pago para la suscripción</p>
            </div>
            <div className="settings-items product-list">
              <div className="product-list-items">
                <label className="input-radio pointer" product-id="28137" plan-id="28137">
                  <input type="radio" value="wompi" className="card-to-add" card-gateway="wompi" card-key="0" checked={selectedPago.checked === "wompi"} onChange={handleSeleaccionarPago} />
                  <div className="text">
                    <div className="strong">VISA terminada en 4242 vía wompi</div>
                    <div>Expira 12/2025</div>
                  </div>
                </label>
                <label className="input-radio pointer" product-id="28137" plan-id="28137">
                  <input type="radio" value="payu" className="card-to-add" card-gateway="payu" card-key="0" checked={selectedPago.checked === "payu"} onChange={handleSeleaccionarPago} />
                  <div className="text">
                    <div className="strong">VISA terminada en 4940 vía payu</div>
                    <div>Expira 10/2026</div>
                  </div>
                </label>
                <label className="input-radio pointer" product-id="28137" plan-id="28137">
                  <input type="radio" value="epayco" className="card-to-add" card-gateway="epayco" card-key="0" checked={selectedPago.checked === "epayco"} onChange={handleSeleaccionarPago} />
                  <div className="text">
                    <div className="strong">VISA terminada en 1984 vía ePayco</div>
                    <div>Expira 10/2024</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="settings-home-container select-product">
            <div className="settings-home-title"></div>
            <div className="settings-items submit-create-subs">
              <button className="submit-create-subs-tog botones boton-violeta btn100">Crear suscripción</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CreateSubscription;