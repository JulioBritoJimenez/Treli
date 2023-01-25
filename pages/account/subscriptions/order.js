import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsPencilSquare, BsX, BsPause, BsTrash, BsPlus, BsPlusCircleFill, BsPencil } from "react-icons/bs";
import Image from "next/image";
import Demoimg from '../../../public/demo_suscripcion.jpg';
import VisaLogo from '../../../public/Visa-Logo.png';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function OrderSuscription() {

  const [cargo, setCargo] = useState(false);

  const agregarCargo = () => {
    setCargo(!cargo);
  };

  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const showCancel = () => {
    setIsCancelOpen(true);
  };
  const handleOk = () => {
    setIsCancelOpen(false);
  };
  const handleCancel = () => {
    setIsCancelOpen(false);
  };

  const [isPausarOpen, setIsPausarOpen] = useState(false);
  const showPausar = () => {
    setIsPausarOpen(true);
  };
  const handleOkPausar = () => {
    setIsPausarOpen(false);
  };
  const handlePausar = () => {
    setIsPausarOpen(false);
  };

  const [isEliminarOpen, setIsEliminarOpen] = useState(false);
  const showEliminar = () => {
    setIsEliminarOpen(true);
  };
  const handleOkEliminar = () => {
    setIsEliminarOpen(false);
  };
  const handleEliminar = () => {
    setIsEliminarOpen(false);
  };

  const [isAddonOpen, setIsAddonOpen] = useState(false);
  const showAddon = () => {
    setIsAddonOpen(true);
  };
  const handleOkAddon = () => {
    setIsAddonOpen(false);
  };
  const handleAddon = () => {
    setIsAddonOpen(false);
  };

  const [isCargoOpen, setIsCargoOpen] = useState(false);
  const showCargo = () => {
    setIsCargoOpen(true);
  };
  const handleOkCargo = () => {
    setIsCargoOpen(false);
  };
  const handleCargo = () => {
    setIsCargoOpen(false);
  };

  const [isEditItemOpen, setIsEditItemOpen] = useState(false);
  const showEditItem = () => {
    setIsEditItemOpen(true);
  };
  const handleOkEditItem = () => {
    setIsEditItemOpen(false);
  };
  const handleEditItem = () => {
    setIsEditItemOpen(false);
  };

  return(
    <>
      <Layout>
        <div className="order-container subscription-order">
          <div className="order-head">
            <h2 className="head-number">Suscripción #26836</h2>
            <div className="head-status status-style status-processing">Activa</div>
          </div>

          <div className="order-head-paid">
            <Link href="/account/subscriptions" className="order-back"><BsArrowLeftShort /></Link>
            <div className="paid-on">Última renovación enero 18, 2023 - 06:06 PM</div>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box order-items">
                  <div className="order-item">
                    <div className="order-item_image"><Image src={Demoimg} alt="Imagen Demo" priority /></div>
                    <a href="/account" target="_blank" className="order-item_name">
                      <span className="text-dec">Suscripción Demo</span>
                      <span className="order-vars-cont">
                        <span className="order-vars-cont"></span>
                      </span>
                    </a>
                    <div className="order-item_sub">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                      <span className="order-qty">x1</span>
                    </div>
                    <div className="order-item_total">
                      COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                    </div>
                    <div className="edit-item" data-productid="2026" data-qty="1" data-price="150000">
                      <BsPencilSquare />
                    </div>
                  </div>
                </div>

                <div className="order-box order-totals">
                  <div className="order-total-item flex">
                    <div>Subtotal</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span></div>
                  </div>
                  <div className="order-total-item flex">
                    <div className="totals-title">acuerdos comerciales</div>
                    <div className="totals-subtotal">COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>28,000</bdi></span> <span className="remove-fee" data-name="acuerdos-comerciales"><BsX /></span></div>
                  </div>
                  <div className="order-total-item order-total-total flex">
                    <div>Total</div>
                    <div>COP <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>178,000</bdi></span></div>
                  </div>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Información de suscripción</h3>
                  <p><strong>Frecuencia:</strong> Cada mes</p>
                  <p><strong>Fecha de inicio:</strong> enero 17, 2023 - 06:02 PM</p>
                  <p><strong>Próximo pago:</strong> febrero 18, 2023 - 06:06 PM</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Cliente</h3>
                  <p>Nombre Apellido</p>
                  <p>demo@treli.co</p>
                  <p>3991111111</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Direccion de facturación</h3>
                  <p><strong>Nombre Apellido</strong></p>
                  <p>Cra 1 1 1, Barranquilla, ATL, Colombia, 80001</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3>Método de pago</h3>
                  <div className="payment-cart flex">
                    <div className="payment-title"><Image src={VisaLogo} alt="Logo pago" /> Terminada en 4242 via Wompi</div>
                    <div className="payment-expire">Expira 12/2025</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box order-actions">
                  <div className="subs-action" onClick={showCancel}><BsX />Cancelar suscripción</div>
                  <Modal title="Cancelar suscripción #26836" open={isCancelOpen} onOk={handleOk} onCancel={handleCancel} footer={[<Button onClick={handleCancel}>Cancelar</Button>]} closeIcon={<BsX />} centered>
                    <p>Dependiendo de tu configuración de notificaciones, tu cliente recibirá un correo electrónico para informarle que esta suscripción ha sido cancelada.</p>
                  </Modal>

                  <div className="subs-action" onClick={showPausar}><BsPause />Pausar suscripción</div>
                  <Modal title="Pausar suscripción #26836" open={isPausarOpen} onOk={handleOkPausar} onCancel={handlePausar} footer={[<Button onClick={handlePausar}>Pausar</Button>]} closeIcon={<BsX />} centered>
                    <p>Dependiendo de tu configuración de notificaciones, tu cliente recibirá un correo electrónico para informarle que esta suscripción ha sido pausada.</p>
                  </Modal>

                  <div className="subs-action" onClick={showEliminar}><BsTrash className="icon-trash" />Eliminar suscripción</div>
                  <Modal title="Eliminar suscripción #26836" open={isEliminarOpen} onOk={handleOkEliminar} onCancel={handleEliminar} footer={[<Button onClick={handleEliminar}>Eliminar</Button>]} closeIcon={<BsX />} centered>
                    <p>Esta acción es irreversible. La suscripción cambiará automáticamente al estado cancelado y se eliminarán todas las renovaciones programadas.</p>
                  </Modal>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box order-actions">
                  <div className="subs-action" onClick={showAddon}><BsPlus />Agregar addon</div>
                  <Modal title="Agregar addon" open={isAddonOpen} onOk={handleOkAddon} onCancel={handleAddon} footer={[<Button onClick={handleAddon}>Agregar addon</Button>]} closeIcon={<BsX />} centered>
                    <p>Los addons son una forma efectiva de vender productos/servicios adicionales a tus clientes y aumentar tus ingresos. El addon seleccionado se agregará a la suscripción y se cobrará en la próxima fecha de renovación programada.</p>
                    <div className="add-select-addons">
                      <label>Seleccionar addon</label>
                      <select id="sel_addon" name="sel_addon">
                        <option>Seleccionar addon</option>
                        <option value="0" data-plan-id="0">Acuerdos comerciales - $28,000</option>
                        <option value="1" data-plan-id="0">Cotizaciones - $120,000</option>
                        <option value="2" data-plan-id="0">Tesoreria - $100,000</option>
                      </select>
                      <label>Cantidad</label>
                      <input type="number" name="sel_addon_qty" id="sel_addon_qty" placeholder="Cantidad" />
                    </div>
                  </Modal>

                  <div className="subs-action" onClick={showCargo}><BsPlus />Agregar cargo</div>
                  <Modal title="Agregar cargo" open={isCargoOpen} onOk={handleOkCargo} onCancel={handleCargo}  footer={[<Button className={`ant-btn save-charge ${cargo ? "agregarCargo": ""}` .trimEnd()} onClick={handleCargo}>Guardar y cobrar</Button>]} closeIcon={<BsX />} centered>
                    <p>A menudo, es posible que debas cobrar a tus clientes por productos o servicios que no son recurrentes. Los cargos representan estos productos o servicios y se cobran inmediatamente, una sola vez.</p>
                    <div className={`add-charge link ${cargo ? "agregarCargo": ""}` .trimEnd()} onClick={agregarCargo}><BsPlusCircleFill />Agregar cargo</div>

                    <div className={`charge-input-container ${cargo ? "agregarCargo": ""}` .trimEnd()}>
                      <p>Ingrese el nombre del cargo y el precio a continuación. Se creará un pago separado para este cargo y se le cobrará al cliente de inmediato.</p>
                      <div className="flex">
                        <input type="text" name="charge_name" id="charge_name" placeholder="Nombre del cargo" />
                        <input type="number" name="charge_price" id="charge_price" placeholder="Precio" />
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box order-actions">
                  <div className="subs-action" onClick={showEditItem}><BsPencil className="icon-pencil" />Editar items de suscripción</div>
                  <Modal title="Editar items" open={isEditItemOpen} onOk={handleOkEditItem} onCancel={handleEditItem} footer={[<Button onClick={handleEditItem}>Agregar item</Button>]} closeIcon={<BsX />} centered>
                    <input type="number" name="sel_addon_qty" id="sel_addon_qty" placeholder="Cantidad" />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default OrderSuscription;