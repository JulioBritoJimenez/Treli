import Link from "next/link";
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import Image from "next/image";
import Treli from "../../public/t-treli.jpg";
import CodigoQR from "../../public/codigoQR.png";
import ImagenSuscripcion from "../../public/Treli-Product-Placeholder.jpg";
import Tarjeta from "../../public/Visa-Logo.png";
import FormDirFacturacion from "../../componentes/formDireccionFacturacion";

function MyAccountSubs() {

  const [isCambiarOpen, setIsCambiarOpen] = useState(false);
  const showCambiar = () => {
    setIsCambiarOpen(true);
  };
  const handleCambiar = () => {
    setIsCambiarOpen(false);
  };

  const [isEditarDireccionOpen, setIsEditarDireccionOpen] = useState(false);
  const showEditarDireccion = () => {
    setIsEditarDireccionOpen(true);
  };
  const handleEditarDireccion = () => {
    setIsEditarDireccionOpen(false);
  };

  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
      <Link href="/my-account/u-subscriptions" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Mi suscripción</h2>
      </div>

      <div className="order-header flex flex-center margin-bottom-30px">
        <div className="order-header_logo">
          <Image src={Treli} alt="Logo" />
        </div>
        <div className="order-header_name strong">Treli</div>
        <div className="qr-subs-container">
          <Link href="/my-account/qrcode" className="qr-link-subs">
            <Image src={CodigoQR} alt="Código QR" />
            <span className="strong">Abrir QR</span>
          </Link>
        </div>
      </div>

      <div className="order-info order-row flex">
        <div className="order-info-col1">
          <div className="order-product-image">
            <Image src={ImagenSuscripcion} alt="Imagen" priority />
          </div>
          <h4>#30990</h4>
        </div>
        <div className="order-info-col2">
          <div className="estado-order-info activo strong">Activa</div>
          <div className="order-product-name strong">Suscripción Demo</div>
          <div className="order-product-price margin-bottom-10px">$150,000 / mes</div>
          <Link className="editar-subs" href="/my-account/u-subscriptions">Editar</Link>
        </div>
      </div>

      <div className="order-totals order-row">
        <div className="order-subtotal flex margin-bottom-15px">
          <div className="totals-title">Subtotal</div>
          <div className="totals-subtotal">$150,000</div>
        </div>
        <div className="order-subtotal flex">
          <div className="totals-title strong">Total recurrente</div>
          <div className="totals-total strong">$170,000 / mes</div>
        </div>
      </div>

      <div className="order-dates order-row">
        <div className="order-start flex margin-bottom-15px">
          <div className="dates-title strong">Fecha inicio</div>
          <div className="dates-inicio">21 de febrero del 2023</div>
        </div>
        <div className="order-last flex margin-bottom-15px">
          <div className="dates-title strong">Último pago</div>
          <div className="dates-last">21 de febrero del 2023</div>
        </div>
        <div className="order-next flex">
          <div className="dates-title strong">Siguiente pago</div>
          <div className="dates-last">21 de marzo del 2023</div>
        </div>
      </div>

      <div className="order-payment order-row metodo-pago">
        <div className="payment-head flex margin-bottom-15px">
          <div className="payment-title strong">Método de pago</div>
          <div className="payment-change texto-link pointer" onClick={showCambiar}>Cambiar</div>
          <Modal 
            title={null}
            open={isCambiarOpen}
            onCancel={handleCambiar} 
            footer={null} closeIcon={<BsX />} 
            centered width={700}
          >
            <p>Form Tarjeta de crédito y Dirección de facturación</p>
          </Modal>
        </div>
        <div className="payment-cart flex">
          <div className="payment-title strong"><Image src={Tarjeta} alt="Logo Tarjeta" /> Terminada en 0326</div>
          <div className="payment-expire">Expira 12/2025</div>
        </div>
      </div>
      <div className="order-payment order-row facturacion">
        <div className="payment-head flex margin-bottom-15px">
          <div className="payment-title strong">Facturación</div>
          <div className="facturacion-change texto-link pointer" onClick={showEditarDireccion}>Cambiar</div>
          <Modal 
            title="Dirección de facturación" 
            open={isEditarDireccionOpen}
            onCancel={handleEditarDireccion} 
            footer={null} closeIcon={<BsX />} 
            centered width={700}
          >
            <FormDirFacturacion />
          </Modal>
        </div>
        <div className="payment-cart flex">
          <div className="dir-title">Cra 1 1 1, Barranquilla, CO</div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountSubs;