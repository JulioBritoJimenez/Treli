import Image from "next/image";
import iconoEmpezarHover from '../public/icon-empezar-hover.svg';
import iconPagos from '../public/icon-pagos.svg';
import iconSuscripciones from '../public/icon-suscripciones.svg';
import iconCatalogo from '../public/icon-catalogo.svg';
import iconConfiguraciones from '../public/icon-configuraciones.svg';
import iconDocs from '../public/icon-docs.svg';
import iconoTreli from '../public/icono-treli.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Sidebar() {

  const router = useRouter();

  return (
    <div className="macc-sidebar">
      <div className="macc-sidebar_top-row">
        <div className="sidebar_top-row_get-started sidebar_top-row_items">
          <Link className={router.pathname == "/account/get-started" ? "active-head" : ""} href="/account/get-started">
            <Image src={iconoEmpezarHover} alt="Icono" /><span>Empezar</span>
          </Link>
        </div>
        <div className="sidebar_top-row_orders sidebar_top-row_items">
          <Link className={router.pathname == "/account/orders" ? "active-head" : ""} href="/account/orders">
					  <Image src={iconPagos} alt="Icono" /><span>Pagos</span>
          </Link>
				</div>
        <div className="sidebar_top-row_subs sidebar_top-row_items">
          <Link className={router.pathname == "/account/subscriptions" ? "active-head" : ""} href="/account/subscriptions">
					  <Image src={iconSuscripciones} alt="Icono" /><span>Suscripciones</span>
          </Link>
				</div>
        <div className="sidebar_top-row_prods sidebar_top-row_items toggle-submenu ">
					<a><Image src={iconCatalogo} alt="Icono" /><span>Catálogo</span></a>
				</div>
      </div>

      <div className="macc-sidebar_bottom-row">
        <div className=" sidebar_top-row_sett sidebar_top-row_items">
          <Link className={router.pathname == "/account/settings" ? "active-head" : ""} href="/account/settings">
					  <Image src={iconConfiguraciones} alt="Icono" /><span>Configuraciones</span>
          </Link>
				</div>
        <div className="sidebar_top-row_help sidebar_top-row_items">
					<a target="_blank" href="https://treli.readme.io/"><Image src={iconDocs} alt="Icono" /><span>Treli Docs</span></a>
				</div>
        <div className="sidebar_top-row_account sidebar_top-row_items">
          <Link className={router.pathname == "/account/my-account" ? "active-head" : ""} href="/account/my-account/">
					  <Image src={iconoTreli} alt="Icono" /><span>Nombre Cliente<br /><span className="small">Account</span></span>
          </Link>
				</div>
      </div>
    </div>
  )
}

export default Sidebar;