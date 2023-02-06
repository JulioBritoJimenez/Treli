import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import Image from "next/image";
import Demoimg from '../../../public/demo_suscripcion.jpg';
import NotasdePago from "../../../componentes/notasdePago";
import { Modal } from 'antd';
import { useState } from 'react';
import FormDirFacturacion from "../../../componentes/formDireccionFacturacion";


function OrderPagos() {

  const [isEditarDireccionOpen, setIsEditarDireccionOpen] = useState(false);
  const showEditarDireccion = () => {
    setIsEditarDireccionOpen(true);
  };
  const handleEditarDireccion = () => {
    setIsEditarDireccionOpen(false);
  };

  return(
    <>
      <Layout>
        <div className="order-container">
          <div className="order-head">
            <h2 className="head-number">Pago #28781</h2>
            <div className="head-status status-style status-processing">Aprobado</div>
            <div className="head-status status-subs status-style">Pago de suscripción</div>
          </div>

          <div className="order-head-paid">
            <Link href="/account/orders" className="order-back"><BsArrowLeftShort /></Link>
            <div className="paid-on">Pagado en 31 de enero del 2023 - 18:05</div>
            <button className="order-action primary-action botones">Recuperación de pago</button>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box order-items">
                  <div className="order-item">
                    <div className="order-item_image"><Image src={Demoimg} alt="Imagen Demo" priority /></div>
                    <a href="/account" target="_blank" className="order-item_name">
                      <span className="text-dec">Suscripción Demo</span>
                    </a>
                    <div className="order-item_sub">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                      <span className="order-qty">x1</span>
                    </div>
                    <div className="order-item_total">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                    </div>
                  </div>
                </div>

                <div className="order-box order-totals">
                  <div className="order-total-item flex">
                    <div>Subtotal</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span></div>
                  </div>
                  <div className="order-total-item flex">
                    <div className="totals-title">Nombre addon</div>
                    <div className="totals-subtotal">COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>10,000</bdi></span></div>
                  </div>
                  <div className="order-total-item order-total-total flex">
                    <div>Total</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>160,000</bdi></span></div>
                  </div>
                </div>

                <div className="order-box flex">
                  <div>Pagado</div>
                  <div>Tarjeta de crédito vía Wompi</div>
                </div>

                <div className="order-box flex order-actions">
                  <button className="order-action action-canceled botones boton-border">Pago rechazado</button>
                  <button className="order-action action-processing primary-action botones boton-border">Pago aprobado</button>
                </div>
              </div>

              <div className="order-box-container order-notes">
                <h3>Notas de pago</h3>
                <NotasdePago
                  noteContent="El estado del pedido cambió de Cancelado a Procesando."
                  noteItem="febrero 03, 2023 at 05:10"
                />
                <NotasdePago
                  noteContent="No se encontro el SKU del producto en shopify."
                  noteItem="febrero 03, 2023 at 05:10"
                />
                <NotasdePago
                  noteContent="El estado del pedido cambió de Procesando a Cancelado."
                  noteItem="febrero 03, 2023 at 11:40"
                />
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container order-details margin-bottom">
                <div className="order-box">
                  <div className="details-head"><h3>Cliente</h3></div>
                  <a className="order-link texto-link">Nombre</a>
                  <a className="order-link texto-link">demo@treli.co</a>
                  <p>Teléfono: 3991111111</p>
                  <p>Documento: 123456789</p>
                </div>

                <div className="order-box">
                  <div className="details-head flex">
                    <h3>Dirección de facturación</h3>
                    <p className="texto-link pointer" onClick={showEditarDireccion}>Editar</p>
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
                  <p>Nombre Apellido</p>
                  <p>Cra 1 1 1</p>
                  <p>4</p>
                  <p>80001 Barranquilla, ATL</p>
                  <p>Colombia</p>
                </div>
              </div>

              <div className="order-box-container subs-timeline">
                <div className="order-box">
                  <h3>Línea de tiempo de la suscripción</h3>
                </div>
                <div className="order-box">
                  <div className="flex">
                    <Link href="/account/subscriptions/order" className="subs-number1 texto-link">Suscripción #28859</Link>
                    <div className="status-style pending-cancel-status status-auto">Cancelación Pendiente</div>
                  </div>
                  <p className="date-created">01 de febrero del 2023 - 10:58</p>
                  <p className="related-total">$120,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default OrderPagos;