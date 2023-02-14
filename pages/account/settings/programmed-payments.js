import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort, BsX, BsExclamationCircle, BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function PlantillasPago() {

  const [show, setShow] = useState(false);

  const showClic = () => {
    setShow(!show);
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
                          <input type="number" className="takeval edit_text n-required" id="interval" />
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
                    <p>¿Estas seguro que quieres eliminar plantilla? Esta acción no se puede deshacer.</p>
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