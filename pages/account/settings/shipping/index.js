import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

function Envios() {
  return(
    <>
      <Layout>
        <div className="account-appe-container settings-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Configuración de envíos</h2>
          </div>

          <div className="shipping-head margin-bottom">
            <h3>Zonas de envío</h3>
            <Link href="/account/settings/shipping/shipping-zone/" className="botones boton-border button-full">Agregar zona de envío</Link>
          </div>

          <p>Nota: las membresías y los servicios recurrentes tienen envío gratuito de forma predeterminada.</p>

          <div className="shipping-zones-table">
            <div className="zone-table-head hide-mobile">
              <div className="zone-head-item table-zone-name">Nombre</div>
              <div className="zone-head-item table-zone-region">Región</div>
              <div className="zone-head-item table-zone-method">Método</div>
              <div className="zone-head-item table-zone-price">Precio</div>
              <div className="zone-head-item table-zone-active">Activo</div>
            </div>
            <div className="zone-table-row">
              <Link href="/account/settings/shipping/shipping-zone/" className="zone-head-item table-zone-name texto-link">Express 1 día</Link>
              <div className="zone-head-item table-zone-region">Colombia, Todos los estados/departamentos, Todas las ciudades</div>
              <div className="zone-head-item table-zone-method">Costo fijo</div>
              <div className="zone-head-item table-zone-price">$20,000</div>
              <div className="zone-head-item table-zone-active">
                <label className="switch">
                  <input type="checkbox" id="t_multicurrency" name="t_multicurrency" value="1" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="zone-table-row">
              <Link href="/account/settings/shipping/shipping-zone/" className="zone-head-item table-zone-name texto-link">Estándar 2 - 5 días</Link>
              <div className="zone-head-item table-zone-region">Colombia, Todos los estados/departamentos, Todas las ciudades</div>
              <div className="zone-head-item table-zone-method">Costo fijo</div>
              <div className="zone-head-item table-zone-price">$10,000</div>
              <div className="zone-head-item table-zone-active">
                <label className="switch">
                  <input type="checkbox" id="t_multicurrency" name="t_multicurrency" value="1" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Envios;