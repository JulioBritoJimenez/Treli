import Layout from "../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";
import { useState } from 'react';

function CreateSubscription() {

  const [crearcliente, setCrearcliente] = useState(false);

  const crearclienteClic = () => {
    setCrearcliente(!crearcliente);
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
              <div className={`customer-list-customers ${crearcliente ? "hidden": ""}` .trimEnd()}>
                <a className="flex-no-space list-item hover-white">
                  <div className="input flex-grow">
                    <input type="text" id="customer-search" name="customer-search" placeholder="Buscar por nombre/email" />
                  </div>
                </a>

                <div className="customer-list-results">
                  <a className="flex-no-space list-item customer-item" onClick={crearclienteClic}>
                    <div className="text">
                      <div className="strong">Nombre Apellido</div>
                      <div>demo@treli.co</div>
                    </div>
                    <span className="settings-item-go"><BsChevronRight /></span>
                  </a>
                  <a className="flex-no-space list-item customer-item" onClick={crearclienteClic}>
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

              <div className={`create-new-customer ${crearcliente ? "active": ""}` .trimEnd()}>
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

          <div className="settings-home-container select-product"></div>

          <div className="settings-home-container select-payment"></div>

          <div className="settings-home-container select-product"></div>
        </div>
      </Layout>
    </>
  )
}

export default CreateSubscription;