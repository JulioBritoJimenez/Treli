import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsArrowLeftShort, BsPencilSquare, BsX, BsPause, BsTrash, BsPlus, BsPlusCircleFill, BsPencil, BsCalendar4Event, BsPersonBadge } from "react-icons/bs";
import Image from "next/image";
import Demoimg from '../../../public/demo_suscripcion.jpg';
import VisaLogo from '../../../public/Visa-Logo.png';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import HistorialPagos from "../../../componentes/historialPagos";
import HistorialCorreos from "../../../componentes/historialCorreos";
import EventosSuscripcion from "../../../componentes/eventosSuscripcion";

function OrderSuscription() {

  const [historialState, setHistorialState] = useState(1);
  const historialTab = (index) => {
    setHistorialState(index);
  }

  const [eventosState, setEventosState] = useState(1);
  const eventosTab = (index) => {
    setEventosState(index);
  }

  const [cargo, setCargo] = useState(false);
  const agregarCargo = () => {
    setCargo(!cargo);
  };

  const [agregarItem, setagregarItem] = useState(false);
  const agregarItemClic = () => {
    setagregarItem(!agregarItem);
  };

  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const showCancel = () => {
    setIsCancelOpen(true);
  };
  const handleCancel = () => {
    setIsCancelOpen(false);
  };

  const [isPausarOpen, setIsPausarOpen] = useState(false);
  const showPausar = () => {
    setIsPausarOpen(true);
  };
  const handlePausar = () => {
    setIsPausarOpen(false);
  };

  const [isEliminarOpen, setIsEliminarOpen] = useState(false);
  const showEliminar = () => {
    setIsEliminarOpen(true);
  };
  const handleEliminar = () => {
    setIsEliminarOpen(false);
  };

  const [isAddonOpen, setIsAddonOpen] = useState(false);
  const showAddon = () => {
    setIsAddonOpen(true);
  };
  const handleAddon = () => {
    setIsAddonOpen(false);
  };

  const [isCargoOpen, setIsCargoOpen] = useState(false);
  const showCargo = () => {
    setIsCargoOpen(true);
  };
  const handleCargo = () => {
    setIsCargoOpen(false);
  };

  const [isEditItemOpen, setIsEditItemOpen] = useState(false);
  const showEditItem = () => {
    setIsEditItemOpen(true);
  };
  const handleEditItem = () => {
    setIsEditItemOpen(false);
  };

  const [isEditarFechaOpen, setIsEditarFechaOpen] = useState(false);
  const showEditarFecha = () => {
    setIsEditarFechaOpen(true);
  };
  const handleEditarFecha = () => {
    setIsEditarFechaOpen(false);
  };

  const [isEditarFrecuenciaOpen, setIsEditarFrecuenciaOpen] = useState(false);
  const showEditarFrecuencia = () => {
    setIsEditarFrecuenciaOpen(true);
  };
  const handleEditarFrecuencia = () => {
    setIsEditarFrecuenciaOpen(false);
  };

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
                    <div className="edit-item hidden pointer" data-productid="2026" data-qty="1" data-price="150000">
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
                  <h3 className="h3-borde">Información de suscripción</h3>
                  <p><strong>Frecuencia:</strong> Cada mes</p>
                  <p><strong>Fecha de inicio:</strong> enero 17, 2023 - 06:02 PM</p>
                  <p><strong>Próximo pago:</strong> febrero 18, 2023 - 06:06 PM</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3 className="h3-borde">Cliente</h3>
                  <p>Nombre Apellido</p>
                  <p>demo@treli.co</p>
                  <p>3991111111</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3 className="h3-borde">Direccion de facturación</h3>
                  <p><strong>Nombre Apellido</strong></p>
                  <p>Cra 1 1 1, Barranquilla, ATL, Colombia, 80001</p>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box">
                  <h3 className="h3-borde">Método de pago</h3>
                  <div className="payment-cart flex">
                    <div className="payment-title"><Image src={VisaLogo} alt="Logo pago" /> Terminada en 4242 vía Wompi</div>
                    <div className="payment-expire">Expira 12/2025</div>
                  </div>
                </div>
              </div>

              <div className="order-box-container payment-history subs-inf-box margin-bottom">
                <h3 className="h3-borde">Historial</h3>
                <div className="history-filter-titles">
                  <span id="sh_payments" className={historialState === 1 ? "sh_active_filter" : "history-tab"} onClick={() => historialTab(1)}>Pagos</span>
                  <span id="sh_emails" className={historialState === 2 ? "sh_active_filter" : "history-tab"} onClick={() => historialTab(2)}>Historial de correos</span>
                  <span id="sh_whatsapp" className={historialState === 3 ? "sh_active_filter" : "history-tab"} onClick={() => historialTab(3)}>Historial de WhatsApp</span>
                  <span id="sh_dunning" className={historialState === 4 ? "sh_active_filter" : "history-tab"} onClick={() => historialTab(4)}>Historial de reclamación</span>
                </div>
                <div className="history-filter-content tabla-simple">
                  <div className={`sh_content hidden ${historialState === 1 ? "active": ""}` .trimEnd()}>
                    <HistorialPagos />
                  </div>
                  <div className={`sh_content hidden ${historialState === 2 ? "active": ""}` .trimEnd()}>
                    <HistorialCorreos />
                  </div>
                  <div className={`sh_content hidden ${historialState === 3 ? "active": ""}` .trimEnd()}>
                    <div className="ch-empty">Aún no hay historia de WhatsApp</div>
                  </div>
                  <div className={`sh_content hidden ${historialState === 4 ? "active": ""}` .trimEnd()}>
                    <div className="ch-empty">Aún no hay historial de reclamación</div>
                  </div>
                </div>
              </div>

              <div className="order-box-container t-order-notes subs-inf-box margin-bottom tabla-simple">
                <h3 className="h3-borde">Eventos</h3>
                <div className="history-filter-titles">
                  <span id="e_subscription" className={eventosState === 1 ? "sh_active_filter" : "history-tab"} onClick={() => eventosTab(1)}>Suscripción</span>
                  <span id="payment_27135" className={eventosState === 2 ? "sh_active_filter" : "history-tab"} onClick={() => eventosTab(2)}>Pago #27135</span>
                  <span id="payment_26834" className={eventosState === 3 ? "sh_active_filter" : "history-tab"} onClick={() => eventosTab(3)}>Pago #26834</span>
                </div>
                <div className="history-filter-content">
                  <div className={`sh_content hidden ${eventosState === 1 ? "active": ""}` .trimEnd()}>
                    <EventosSuscripcion />
                  </div>
                  <div className={`sh_content hidden ${eventosState === 2 ? "active": ""}` .trimEnd()}>
                    <EventosSuscripcion />
                    <div className="ch-empty">Pago #27135</div>
                  </div>
                  <div className={`sh_content hidden ${eventosState === 3 ? "active": ""}` .trimEnd()}>
                    <EventosSuscripcion />
                    <div className="ch-empty">Pago #26834</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box order-actions">
                  <div className="subs-action" onClick={showCancel}><BsX />Cancelar suscripción</div>
                  <Modal 
                    title="Cancelar suscripción #26836"
                    open={isCancelOpen} 
                    onCancel={handleCancel} 
                    footer={[<Button onClick={handleCancel} key="cancelar">Cancelar</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
                    <p>Dependiendo de tu configuración de notificaciones, tu cliente recibirá un correo electrónico para informarle que esta suscripción ha sido cancelada.</p>
                  </Modal>

                  <div className="subs-action" onClick={showPausar}><BsPause />Pausar suscripción</div>
                  <Modal 
                    title="Pausar suscripción #26836" 
                    open={isPausarOpen} 
                    onCancel={handlePausar} 
                    footer={[<Button onClick={handlePausar} key="pausar">Pausar</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
                    <p>Dependiendo de tu configuración de notificaciones, tu cliente recibirá un correo electrónico para informarle que esta suscripción ha sido pausada.</p>
                  </Modal>

                  <div className="subs-action" onClick={showEliminar}><BsTrash className="icon-trash" />Eliminar suscripción</div>
                  <Modal 
                    title="Eliminar suscripción #26836" 
                    open={isEliminarOpen}
                    onCancel={handleEliminar} 
                    footer={[<Button onClick={handleEliminar} key="eliminar">Eliminar</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
                    <p>Esta acción es irreversible. La suscripción cambiará automáticamente al estado cancelado y se eliminarán todas las renovaciones programadas.</p>
                  </Modal>
                </div>
              </div>

              <div className="order-box-container order-details subs-inf-box margin-bottom">
                <div className="order-box order-actions">
                  <div className="subs-action" onClick={showAddon}><BsPlus />Agregar addon</div>
                  <Modal 
                    title="Agregar addon" 
                    open={isAddonOpen}
                    onCancel={handleAddon} 
                    footer={[<Button onClick={handleAddon} key="agregar">Agregar addon</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
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
                  <Modal 
                    title="Agregar cargo" 
                    open={isCargoOpen}
                    onCancel={handleCargo}  
                    footer={[<Button className={`ant-btn hidden ${cargo ? "active": ""}` .trimEnd()} onClick={handleCargo} key="guardar-y-cobrar">Guardar y cobrar</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
                    <p>A menudo, es posible que debas cobrar a tus clientes por productos o servicios que no son recurrentes. Los cargos representan estos productos o servicios y se cobran inmediatamente, una sola vez.</p>
                    <div className={`add-charge link ${cargo ? "hidden": ""}` .trimEnd()} onClick={agregarCargo}><BsPlusCircleFill />Agregar cargo</div>

                    <div className={`charge-input-container hidden ${cargo ? "active": ""}` .trimEnd()}>
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
                  <Modal 
                    title="Editar items"
                    open={isEditItemOpen}
                    onCancel={handleEditItem}
                    footer={[
                      <Button onClick={agregarItemClic} key="agregar-item">Agregar item</Button>,
                      <Button onClick={handleEditItem} key="actualizar-item">Actualizar items</Button>
                    ]} closeIcon={<BsX />} centered width={900}>
                    <div className="edit_items-list">
                      <div className="order-item">
                        <div className="order-item_name">Item</div>
                        <div className="order-item_unit-price">Precio unitario</div>
                        <div className="order-item_qty">Cantidad</div>
                        <div className="order-item_total">Total</div>
                        <div className="edit_items-list_delete"></div>
                      </div>
                      <div className="order-item" data-id="2026" data-total="150000" data-qty="1">
                        <div className="order-item_name">
                          <span className="text-dec">Suscripción Demo</span>
                        </div>
                        <div className="order-item_unit-price">
                          <input type="number" name="item-unit-price" id="item-unit-price" placeholder="Unit price" />
                        </div>
                        <div className="order-item_qty">
                          <input type="number" name="item-unit-qty" id="item-unit-qty" placeholder="Quantity" />
                        </div>
                        <div className="order-item_total">
                          <span className="price-amount amount"><bdi><span className="price-currencySymbol">$</span>150,000</bdi></span>
                        </div>
                        <div className="edit_items-list_delete">
                         <BsX /> 
                        </div>
                      </div>
                    </div>

                    <div className={`edit-select-products hidden ${agregarItem ? "active": ""}` .trimEnd()}>
                      <select>
                        <option>Seleccionar un item</option>
                        <option value="28778" data-name="Lugar de trabajo 1" data-price="200000">Lugar de trabajo 1 - $200,000</option>
                        <option value="28778" data-name="Plan Estandar" data-price="20000">Plan estandar - $20,000</option>
                      </select>
                    </div>
                  </Modal>

                  <div className="subs-action" onClick={showEditarFecha}><BsCalendar4Event className="icon-calendar" />Editar próxima fecha de renovación</div>
                  <Modal 
                    title="Editar próxima fecha de renovación" 
                    open={isEditarFechaOpen} 
                    onCancel={handleEditarFecha} 
                    footer={[<Button onClick={handleEditarFecha} key="editar-fecha">Guardar</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
                    <p className="app-input">
                      <span className="acc-label">Fecha de renovación</span>
                      <input type="datetime-local" id="next-payment" name="next-payment" />
                    </p>
                  </Modal>

                  <div className="subs-action" onClick={showEditarFrecuencia}><BsPencil className="icon-pencil" />Editar frecuencia</div>
                  <Modal 
                    title="Editar frecuencia" 
                    open={isEditarFrecuenciaOpen} 
                    onCancel={handleEditarFrecuencia} 
                    footer={[<Button onClick={handleEditarFrecuencia} key="editar-frecuencia">Editar</Button>]} closeIcon={<BsX />} 
                    centered width={700}>
                    <p><span className="strong">Frecuencia actual:</span> Cada 2 semanas</p>
                    <p className="app-input popup-frecuencia">
                      <span className="acc-label">Frecuencia</span>
                      <select className="space-r interval" name="interval">
                        <option value="1">Cada 1</option>
                        <option value="2">Cada 2</option>
                        <option value="3">Cada 3</option>
                        <option value="4">Cada 4</option>
                        <option value="5">Cada 5</option>
                        <option value="6">Cada 6</option>
                      </select>
                      <select className="period" name="period">
                        <option value="day">Día</option>
                        <option value="week">Semana</option>
                        <option value="month">Mes</option>
                        <option value="year">Año</option>
                      </select>
                    </p>
                  </Modal>

                  <div className="subs-action" onClick={showEditarDireccion}><BsPersonBadge className="icon-personbook" />Editar dirección de facturación</div>
                  <Modal 
                    title="Dirección de facturación" 
                    open={isEditarDireccionOpen}
                    onCancel={handleEditarDireccion} 
                    footer={null} closeIcon={<BsX />} 
                    centered width={700}>
                    <div className="editar_direccion_wrap">
                      <div className="flex">
                        <input type="text" id="lnombre" name="lnombre" placeholder="Nombre" />
                        <input type="text" id="lapellido" name="lapellido" placeholder="Apellido" />
                      </div>
                      <div className="flex">
                        <input type="number" id="cedula" name="cedula" placeholder="Identificación" />
                        <input type="text" id="telefono" name="telefono" placeholder="Teléfono" />
                      </div>
                      <input type="text" id="ldireccionuno" name="ldireccionuno" placeholder="Dirección" />
                      <input type="text" id="ldirecciondos" name="ldirecciondos" placeholder="Apartamento, casa, etc. (opcional)" />
                      <select name="lpais" id="lpais">
			                  <option value="0">Seleccionar país</option>
                        <option value="CO">Colombia</option>
                      </select>
                      <select name="lstate" id="lstate">
			                  <option value="0">Seleccionar estado/departamento</option>
                        <option value="ATL">Atlántico</option>
                      </select>
                      <select name="lcity" id="lcity">
                        <option value="barranquilla">Barranquilla</option>
                      </select>
                      <input type="text" id="lzip" name="lzip" placeholder="Código postal" />
                      <button type="submit" className="guardar_dir_edit_subs_bill boton-violeta botones">Guardar</button>
                    </div>
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