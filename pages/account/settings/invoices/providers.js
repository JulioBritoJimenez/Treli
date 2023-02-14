import Layout from "../../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import LogoSiigo from '../../../../public/logo-siigo.png';

function Provedores() {
  return(
    <>
      <Layout>
        <div className="account-appe-container settings-dunning settings-ganalytics">
          <div className="order-head-paid">
            <Link href="/account/settings/invoices/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Proveedores de facturación</h2>
          </div>
          <p>Automatiza la generación de facturas y recibos mediante la integración con un proveedor externo. <Link href="https://treli.readme.io/docs/proveedores-de-facturacion" target="_blank">Aprende más</Link></p>

          <div className="order-box-container payment-gateways margin-bottom">
            <div className="order-box">
              <div className="flex flex-center flex-no-space list-item">
                <div className="strong">Siigo Nube</div>
                <div><Image src={LogoSiigo} alt="Logo" /></div>
                <Link href="https://www.siigo.com/precios-siigo/" target="_blank" className="g-rates">Tarifas</Link>
                <div className="provider-status">
                  <span className="status-circle active"></span> Activo
                </div>
                <Link href="/account/settings/invoices/siigo" className="gmanage">Administrar</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Provedores;