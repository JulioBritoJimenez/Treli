import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import GuardarCambios from "../../../componentes/guardarCambios";

function PerfildelNegocio() {
  return(
    <>
      <Layout>
        <div className="account-appe-container settings-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Perfil del negocio</h2>
          </div>
          <GuardarCambios />
          
          <div className="order-box-container margin-bottom">
            <h3 className="margin-bottom-15px">Dirección del negocio</h3>
            <p className="app-input input">
              <span className="acc-label">Dirección 1</span>
              <input className="takeval" type="text" name="busaddress1" id="busaddress1" placeholder="Dirección" />
            </p>
            <p className="app-input input">
              <span className="acc-label">Dirección 2</span>
              <input className="takeval" type="text" name="busaddress2" id="busaddress2" placeholder="Apartamento, casa, etc. (opcional)" />
            </p>
            <p className="app-input input">
              <span className="acc-label">País</span>
              <select className="takeval" name="buscountry" id="buscountry">
                <option value="0">Seleccionar país</option>
                <option value="CO">Colombia</option>
              </select>
            </p>
            <p className="app-input b_state input">
              <span className="acc-label">Estado/departamento</span>
              <select className="takeval" name="busstate" id="busstate">
                <option value="0">Seleccionar estado/departamento</option>
                <option value="ATL">Atlántico</option>
              </select>
            </p>
            <p className="app-input b_city input">
              <span className="acc-label">Ciudad</span>
              <select className="takeval" name="buscity" id="buscity">
                <option value="0">Seleccionar ciudad</option>
              </select>
            </p>
            <p className="app-input input">
              <span className="acc-label">Zip code</span>
              <input className="takeval" type="text" name="buszip" id="buszip" placeholder="Código postal" />
            </p>
          </div>

          <div className="order-box-container">
            <h3 className="margin-bottom-15px">Pin de seguridad</h3>
            <p>Escribe un pin de seguridad de 4 dígitos para descontar el límite de uso de las membresías a través del código QR.</p>
            <p className="app-input input">
              <span className="acc-label">Pin de seguridad</span>
              <input className="takeval" type="password" name="securitypin" id="securitypin" placeholder="1234" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PerfildelNegocio;