import Header from "./header";
import Image from "next/image";
import iconoEmpezarHover from '../public/icon-empezar-hover.svg';
import iconPagos from '../public/icon-pagos.svg';
import iconSuscripciones from '../public/icon-suscripciones.svg';
import iconCatalogo from '../public/icon-catalogo.svg';
import iconConfiguraciones from '../public/icon-configuraciones.svg';
import iconDocs from '../public/icon-docs.svg';
import iconoTreli from '../public/icono-treli.png';
import iconoHome from '../public/home.png';
import iconoMenu from '../public/menu.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsX } from "react-icons/bs";


function Layout({ children }) {

  const router = useRouter();

  const [catalogo, setCatalogo] = useState(false);
  const catalogoClic = () => {
    setCatalogo(!catalogo);
  };

  const [active, setActive] = useState(false);
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  const [menuMobile, setMenuMobile] = useState(false);
  const menuMobileClic = () => {
    setMenuMobile(true);
  };
  const closeMenuClic = () => {
    setMenuMobile(false);
  };

  return (
    <div className="maccount-container">
      <div className="macc-header">
        <a href="https://treli.co/feedback/" target="_blank" className="feedback">Feedback</a>
        <div className="macc-header-col1">
          <Link href="/account">
            <Image src={iconoTreli} alt="Icono Logo Treli" />
            <span>Treli</span>
          </Link>
        </div>
        <div className="macc-header-col2">
          <div className='app-input test_mode'>
            <span>Modo Test</span>
            <label className='switch'>
              <input type="checkbox" id="super_test_mode" name="super_test_mode" value="1" />
              <span className='slider round'></span>
            </label>
          </div>
          <div className='macc-head_home macc-head_item'>
            <a className='new_head' href='https://treli.co/new' target='_blank'>NEW</a>
          </div>
          <div className='macc-head_home macc-head_item hide-mobile'>
            <Link href='/account'>
              <Image src={iconoHome} title="Home" alt="Icono Home Treli" />
            </Link>
          </div>
          <div className='macc-head-menumobile macc-head_item hide-desktop pointer' onClick={menuMobileClic}>
            <Image src={iconoMenu} alt="Menú móvil Treli" />
          </div>
          <div className="macc-head_create hide-mobile">
            <Link href="/account/products/add-product/" className="create-butt">Crear +</Link>
          </div>
        </div>
      </div>

      <div className="macc-body">
        
        <div className={`macc-sidebar ${active ? "mobile-side-hover": ""} ${menuMobile ? "show-sidebar": ""}` .trimEnd()} onMouseOver={handleMouseOver} onMouseOut ={handleMouseOut}>
          <div className="cerrar close-sidebar hide-desktop pointer" onClick={closeMenuClic}>
            <BsX />
          </div>
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
            <div className="sidebar_top-row_prods sidebar_top-row_items toggle-submenu">
              <a onClick={catalogoClic}><Image src={iconCatalogo} alt="Icono" /><span>Catálogo 
                <BsChevronDown className={`${catalogo ? "hidden": ""}` .trimEnd()} />
                <BsChevronUp className={`hidden ${catalogo ? "active": ""}` .trimEnd()} /></span>
              </a>
            </div>
            <div className={`sub-menu hidden ${catalogo ? "active": ""}` .trimEnd()}>
              <div className="sidebar_top-row_prods sidebar_top-row_items">
                <Link className={router.pathname == "/account/products" ? "active-head" : ""} href="/account/products">Planes</Link>
              </div>
              <div className="sidebar_top-row_prods sidebar_top-row_items">
                <Link className={router.pathname == "/account/addons" ? "active-head" : ""} href="/account/addons">Addons</Link>
              </div>
              <div className="sidebar_top-row_prods sidebar_top-row_items">
                <Link className={router.pathname == "/account/one-time-products" ? "active-head" : ""} href="/account/one-time-products">Productos</Link>
              </div>
              <div className="sidebar_top-row_prods sidebar_top-row_items">
                <Link className={router.pathname == "/account/coupons" ? "active-head" : ""} href="/account/coupons/">Cupones</Link>
              </div>
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

        <div className={`macc-content ${active ? "mobile-side-hover": ""}` .trimEnd()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;