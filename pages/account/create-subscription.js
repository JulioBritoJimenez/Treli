import Layout from "../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";
import { useState } from 'react';
import Image from "next/image";
import Demoimg from '../../public/demo_suscripcion.jpg';

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

              <div className={`create-new-customer ${crearcliente ? "active": ""} ${cliente ? "active": ""}` .trimEnd()}>
                <h4>Dirección de facturación</h4>
                <input type="hidden" name="customer-id" id="customer-id"></input>
                <div className="input">
                  <input type="text" id="email" name="email" placeholder="Email" />
                </div>
                <div className="flex input">
                  <input type="text" id="lnombre" name="lnombre" placeholder="Nombre" />
                  <input type="text" id="lapellido" name="lapellido" placeholder="Apellido" />
                </div>
                <div className="flex input">
                  <input type="number" id="cedula" name="cedula" placeholder="Cédula" />
                  <input type="number" id="telefono" name="telefono" placeholder="Teléfono" />
                </div>
                <div className="input">
                  <input type="text" id="ldireccionuno" name="ldireccionuno" placeholder="Dirección" />
                </div>
                <div className="input">
                  <input type="text" id="ldirecciondos" name="ldirecciondos" placeholder="Apartamento, casa, etc. (opcional)" />
                </div>
                <div className="flex input">
                  <select name="lpais" id="lpais">
                    <option value="0">Seleccionar un país</option>
                    <option value="CO">Colombia</option>
                  </select>
                  <select name="lstate" id="lstate">
                    <option value="0">Seleccionar departamento</option>
                    <option value="ATL">Atlántico</option>
                  </select>
                </div>
                <div className="flex input">
                  <input type="text" id="lcity" name="lcity" placeholder="Ciudad" />
                  <input type="text" id="lzip" name="lzip" placeholder="Código postal" />
                </div>
                <div className="input">
                  <input type="text" id="lcompany" name="lcompany" placeholder="Compañía (opcional)" />
                </div>
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
                <a product-id="28137" className={`flex-no-space list-item list-item-product ${seleccionarProducto ? "active": ""}` .trimEnd()} onClick={seleccionarProductoClic}>
                  <div className="product-img">
                    <Image src={Demoimg} alt="Imagen Demo" priority />
                  </div>
                  <div className="text">
                    <div className="strong">Beunlimited</div>
                  </div>
                  <span className="settings-item-go"><BsChevronRight /></span>
                </a>
                <div className={`product-plan ${seleccionarProducto ? "active": ""}` .trimEnd()}>
                  <a product-id="28137" plan-id="28137" className="flex-no-space list-item list-item-plan">
                    <div className="product-chk">
                      <input type="checkbox" className="product-to-add" data-plan="" name="" data-pid="" />
                    </div>
                    <div className="text">
                      <div className="strong">COP <span className="price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>192,900</bdi></span> / 1 month</div>
                    </div>
                  </a>
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

          <div className={`settings-home-container select-payment ${cliente ? "active": ""}` .trimEnd()}>
            <div className="settings-home-title">
              <h3>Seleccionar pago</h3>
              <p>Selecciona un pago para la suscripción</p>
            </div>
            <div className="settings-items product-list">
              <div className="product-list-items">
                <a className="flex-no-space list-item credi-card-item">
                  <div className="product-chk">
                    <input type="checkbox" className="card-to-add" card-gateway="wompi" card-key="0" />
                  </div>
                  <div className="text">
                    <div className="strong">VISA terminada en 4242 vía wompi</div>
                    <div>Expira 12/2025</div>
                  </div>
                </a>
                <a className="flex-no-space list-item credi-card-item">
                  <div className="product-chk">
                    <input type="checkbox" className="card-to-add" card-gateway="wompi" card-key="0" />
                  </div>
                  <div className="text">
                    <div className="strong">VISA terminada en 4940 vía payu</div>
                    <div>Expira 10/2026</div>
                  </div>
                </a>
                <a className="flex-no-space list-item credi-card-item">
                  <div className="product-chk">
                    <input type="checkbox" className="card-to-add" card-gateway="wompi" card-key="0" />
                  </div>
                  <div className="text">
                    <div className="strong">VISA terminada en 1984 vía payu</div>
                    <div>Expira 12/2025</div>
                  </div>
                </a>
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