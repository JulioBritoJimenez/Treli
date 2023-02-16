import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort, BsX, BsExclamationCircle, BsChevronDown, BsFillExclamationCircleFill } from "react-icons/bs";
import Link from 'next/link';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function PlantillasPago() {

  const [show, setShow] = useState(false);

  const showClic = () => {
    setShow(!show);
  };

  const [showRecordatorios, setShowRecordatorios] = useState(false);

  const showRecordatoriosClic = () => {
    setShowRecordatorios(!showRecordatorios);
  };

  const [showTasas, setShowTasas] = useState(false);

  const showTasasClic = () => {
    setShowTasas(!showTasas);
  };

  const [Eliminar, setEliminar] = useState(false);
  const showEliminar = () => {
    setEliminar(true);
  };
  const handleEliminar = () => {
    setEliminar(false);
  };

  return(
    <>
      <Layout>
        <div className="account-appe-container payments-container">
          <div className="order-head-paid">
            <Link href="/account/settings/payment-settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Plantillas de pago</h2>
          </div>
          <GuardarCambios  />
          <p>Las plantillas de pago te permiten crear configuraciones de pago predeterminadas. Puedes usar tus plantillas de pago al crear un pago.</p>

          <div className="new-product-cols settings-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Activar plantillas de pago</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="active" name="active" value="1" onClick={showClic} />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>
              </div>

              <div className={`order-box-container margin-bottom hidden ${show ? "active": ""}` .trimEnd()}>
                <div className="settings-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Nombre de la plantilla</span><br />
                      <span className="weight-normal">Introduce el nombre de la plantilla. Este nombre es interno y te ayuda a reconocer esta plantilla al crear un pago.</span>
                    </span>
                    <span>
                      <input type="text" className="n-required" name="template_name" id="template_name" placeholder="Nombre plantilla" />
                    </span>
                  </p>
                </div>

                <div className="settings-box">
                  <div className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Fecha de vencimiento del pago</span><br />
                      <span className="weight-normal">Define la fecha de vencimiento del pago que deseas que utilice Treli al crear un pago. Por ejemplo, si defines la fecha de vencimiento del pago en 1 mes, Treli establecerá la fecha de vencimiento del pago en 1 mes después de que se cree el pago.</span>
                    </span>
                    <div className="s_p_container">
                      <div className="s_p_value pointer" what="interval">
                        <span className="interval">30</span>
                        <span className="period">días</span>
                        <BsChevronDown />
                      </div>

                      <div className="s_p_edit hidden">
                        <span className="semi-text">Ingresa la fecha de vencimiento</span>
                        <div className="input-container input-container_two">
                          <input type="number" className="takeval edit_text n-required" id="interval" placeholder="30" />
                          <select className="takeval edit_text" id="period">
                            <option value="day">Día</option>
                            <option value="week">Semana</option>
                            <option value="month">Mes</option>
                            <option value="year">Año</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`order-box-container margin-bottom hidden ${show ? "active": ""}` .trimEnd()}>
                <div className="settings-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Activar recordatorios de pago</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="active" name="active" value="1" onClick={showRecordatoriosClic} />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className={`settings-box hidden ${showRecordatorios ? "active": ""}` .trimEnd()}>
                  <div className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Recordar antes de la fecha de vencimiento del pago</span><br />
                      <span className="weight-normal">Define los intervalos después de los cuales deseas recordar a tu cliente antes de la fecha de vencimiento del pago. Por ejemplo, si especificas 5, 2, Treli enviará recordatorios a tu cliente 5 y 2 días antes de la fecha de vencimiento del pago.</span>
                    </span>
                    <div className="s_p_container">
                      <div className="s_p_value remind_before pointer">
                        <span>5,2</span>
                        <BsChevronDown />
                      </div>

                      <div className="s_p_edit hidden">
                        <span className="semi-text">Frecuencia en días</span>
                        <div className="input-container">
                          <input type="text" className="takeval n-required ch-valid edit_text" data-ch="c_n" id="remind_before" placeholder="5,2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`settings-box hidden ${showRecordatorios ? "active": ""}` .trimEnd()}>
                  <div className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Recordar después de la fecha de vencimiento del pago</span><br />
                      <span className="weight-normal">Define los intervalos después de los cuales deseas recordar a tu cliente después de la fecha de vencimiento del pago. Por ejemplo, si defines 1, 3, 5, 7, 9, Treli enviará recordatorios a tu cliente 1, 3, 5, 7 y 9 días después de la fecha de vencimiento del pago.</span>
                    </span>
                    <div className="s_p_container">
                      <div className="s_p_value remind_before pointer">
                        <span>1,3,5,7,9</span>
                        <BsChevronDown />
                      </div>

                      <div className="s_p_edit hidden">
                        <span className="semi-text">Frecuencia en días</span>
                        <div className="input-container">
                          <input type="text" className="takeval n-required ch-valid edit_text" data-ch="c_n" id="remind_after" placeholder="1,3,5,7,9" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`order-box-container margin-bottom hidden ${show ? "active": ""}` .trimEnd()}>
                <div className="settings-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label">Activar tasas de interés</span>
                    <label className="switch space-r">
                      <input type="checkbox" className="takeval show_next" id="interest" name="interest" value="0" onClick={showTasasClic} />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className={`settings-box hidden ${showTasas ? "active": ""}` .trimEnd()}>
                  <div className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Tasa de interés diaria</span><br />
                      <span className="weight-normal">Define la tasa de interés diaria para préstamos con un plazo de menos de un mes.</span>
                    </span>
                    <div className="s_p_container">
                      <div className="s_p_value remind_before pointer">
                        <span>Editar</span>
                        <BsChevronDown />
                      </div>

                      <div className="s_p_edit hidden">
                        <span className="semi-text">Tasa de interés</span>
                        <div className="input-container">
                          <input type="text" className="takeval edit_text ch-valid n-required" data-ch="p" id="daily_rate" placeholder="0.00%" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`settings-box hidden ${showTasas ? "active": ""}` .trimEnd()}>
                  <div className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Tasa de interés mensual</span><br />
                      <span className="weight-normal">Define la tasa de interés mensual para préstamos con plazo mayor a un mes.</span>
                    </span>
                    <div className="s_p_container">
                      <div className="s_p_value remind_before pointer">
                        <span>Editar</span>
                        <BsChevronDown />
                      </div>

                      <div className="s_p_edit hidden">
                        <span className="semi-text">Tasa de interés</span>
                        <div className="input-container">
                          <input type="text" className="takeval edit_text ch-valid n-required wrongg" data-ch="p" id="monthly_rate" placeholder="0.00%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="missing_field"><BsFillExclamationCircleFill />Este campo es requerido</div>
                </div>

                <div className={`settings-box hidden ${showTasas ? "active": ""}` .trimEnd()}>
                  <div className="app-input input label-flex1">
                    <span className="acc-label">
                      <span>Tasa de interés de mora diaria</span><br />
                      <span className="weight-normal">Define la tasa de interés diaria de mora para los préstamos que tienen una fecha de pago vencida.</span>
                    </span>
                    <div className="s_p_container">
                      <div className="s_p_value remind_before pointer">
                        <span>Editar</span>
                        <BsChevronDown />
                      </div>

                      <div className="s_p_edit hidden">
                        <span className="semi-text">Tasa de interés</span>
                        <div className="input-container">
                          <input type="text" className="takeval edit_text ch-valid n-required wrongg" data-ch="p" id="late_rate" placeholder="0.00%" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`new-product-col2 tog_text_parent hidden ${show ? "active": ""}` .trimEnd()}>
              <div className="order-box-container user-currencies margin-bottom">
                <h3 className="margin-bottom">Plantillas de pago</h3>
                <div className="order-box">
                  <div className="flex list-item">
                    <div className="text"><span className="strong">Prueba Plantilla</span> - 1 mes</div>
                    <div>
                      <a className="link edit-schedule-template">Editar</a>
                      <a className="link delete-schedule-template" onClick={showEliminar}>Eliminar</a>
                    </div>
                  </div>
                </div>
                <div className="order-box">
                  <div className="flex list-item">
                    <div className="text"><span className="strong">Prueba 2</span> - 30 días</div>
                    <div>
                      <a className="link edit-schedule-template">Editar</a>
                      <a className="link delete-schedule-template" onClick={showEliminar}>Eliminar</a>
                    </div>
                  </div>
                </div>

                <Modal 
                  title={null}
                  className="desactivarPlantilla"
                  open={Eliminar} 
                  onCancel={handleEliminar}
                  footer={[
                    <Button onClick={handleEliminar} key="si">Si</Button>,
                    <Button className="eliminar-btn" onClick={handleEliminar} key="cancelar">Cancelar</Button>
                  ]} closeIcon={<BsX />} 
                  centered width={510}
                >
                  <div className="desactivar-pasarela">
                    <BsExclamationCircle />
                    <h3>¿Estás seguro?</h3>
                    <p>¿Estás seguro que quieres eliminar plantilla? Esta acción no se puede deshacer.</p>
                  </div>
                </Modal>
              </div>

              <button className="botones boton-violeta button-full">+ Agregar plantilla</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PlantillasPago;