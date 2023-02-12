import Layout from "../../componentes/layout";
import { Tooltip } from 'antd';
import { BsInfoCircleFill, BsChevronDown } from "react-icons/bs";
import { useState } from 'react';

function Account() {

  const [masDatos, setMasDatos] = useState(false);
  const masDatosClic = () => {
    setMasDatos(!masDatos);
  };

  const mrr = <div><span>Ingresos recurrentes mensuales totales obtenidos de las suscripciones.</span> MRR total de todas las suscripciones activas a la fecha.</div>;

  const arr = <div><span>Ingresos recurrentes anuales totales obtenidos de las suscripciones.</span> ARR total de todas las suscripciones activas en la fecha.</div>;

  const ingresosTotales = <div><span>Ingresos totales obtenidos de suscripciones y renovaciones.</span> Ingresos totales de todas las suscripciones, renovaciones y pagos hasta la fecha.</div>;

  const suscripcionesActivas = <div><span>Número total de suscripciones activas.</span> Número total de suscripciones activas en la fecha.</div>;

  const clientesActivos = <div><span>Número total de clientes activos.</span> Número total de clientes con suscripciones activas en la fecha.</div>;

  const suscripcionesFallidas = <div><span>Número total de suscripciones fallidas.</span> Una suscripción fallida indica que el último pago de renovación falló y no se pudo recuperar a través de la reclamación.</div>;

  const suscripcionesReclamacion = <div><span>Número total de suscripciones en reclamación.</span> Número total de suscripciones para las que Treli intenta recuperar la última renovación de pago.</div>;

  const suscripcionesPausadas = <div><span>Número total de suscripciones pausadas.</span> Número total de suscripciones que se han pausado y que actualmente no se están renovando.</div>;

  const suscripcionesCanceladas = <div><span>Número total de suscripciones canceladas.</span> Número total de suscripciones que han sido canceladas.</div>;

  const pagosTotales = <div><span>Pagos totales</span> Valor total de los pagos recibidos durante el período.</div>;

  return (
    <>
      <Layout>
        <div className="dashboard-summary">
          <div className="dashboard-summary-col dashboard-summary-col1 flex">
            <div className="dashboard-summary-item flex">
              <div className="summary-item_title flex">
                <span>MRR Total</span>
                <div className="summary-help">
                  <Tooltip title={mrr} trigger="click" placement="bottom" color="#fff">
                    <BsInfoCircleFill className="pointer" />
                  </Tooltip>
                </div>
              </div>
              <div className="summary-item_number">USD $231</div>
            </div>

            <div className="dashboard-summary-item flex">
              <div className="summary-item_title flex">
                <span>ARR Total</span>
                <div className="summary-help">
                  <Tooltip title={arr} trigger="click" placement="bottom" color="#fff">
                    <BsInfoCircleFill className="pointer" />
                  </Tooltip>
                </div>
              </div>
              <div className="summary-item_number">USD $2,809</div>
            </div>

            <div className="dashboard-summary-item flex">
              <div className="summary-item_title flex">
                <span>Ingresos totales</span>
                <div className="summary-help">
                  <Tooltip title={ingresosTotales} trigger="click" placement="bottom" color="#fff">
                    <BsInfoCircleFill className="pointer" />
                  </Tooltip>
                </div>
              </div>
              <div className="summary-item_number">USD $819</div>
            </div>

            <div className="dashboard-summary-item flex">
              <div className="summary-item_title flex">
                <span>Total suscripciones activas</span>
                <div className="summary-help">
                  <Tooltip title={suscripcionesActivas} trigger="click" placement="bottom" color="#fff">
                    <BsInfoCircleFill className="pointer" />
                  </Tooltip>
                </div>
              </div>
              <div className="summary-item_number">8</div>
            </div>

            <div className="dashboard-summary-item flex">
              <div className="summary-item_title flex">
                <span>Total clientes activos</span>
                <div className="summary-help">
                  <Tooltip title={clientesActivos} trigger="click" placement="bottom" color="#fff">
                    <BsInfoCircleFill className="pointer" />
                  </Tooltip>
                </div>
              </div>
              <div className="summary-item_number">1</div>
            </div>
          </div>

          <div className={`hidden_dashboard_row hidden ${masDatos ? "active": ""}` .trimEnd()}>
            <div className="dashboard-summary-col dashboard-summary-col2 flex">
              <div className="dashboard-summary-item flex">
                <div className="summary-item_title flex">
                  <span>Suscripciones fallidas</span>
                  <div className="summary-help">
                    <Tooltip title={suscripcionesFallidas} trigger="click" placement="bottom" color="#fff">
                      <BsInfoCircleFill className="pointer" />
                    </Tooltip>
                  </div>
                </div>
                <div className="summary-item_number">1</div>
              </div>

              <div className="dashboard-summary-item flex">
                <div className="summary-item_title flex">
                  <span>Suscripciones en reclamación</span>
                  <div className="summary-help">
                    <Tooltip title={suscripcionesReclamacion} trigger="click" placement="bottom" color="#fff">
                      <BsInfoCircleFill className="pointer" />
                    </Tooltip>
                  </div>
                </div>
                <div className="summary-item_number">0</div>
              </div>

              <div className="dashboard-summary-item flex">
                <div className="summary-item_title flex">
                  <span>Suscripciones pausadas</span>
                  <div className="summary-help">
                    <Tooltip title={suscripcionesPausadas} trigger="click" placement="bottom" color="#fff">
                      <BsInfoCircleFill className="pointer" />
                    </Tooltip>
                  </div>
                </div>
                <div className="summary-item_number">5</div>
              </div>

              <div className="dashboard-summary-item flex">
                <div className="summary-item_title flex">
                  <span>Suscripciones canceladas</span>
                  <div className="summary-help">
                    <Tooltip title={suscripcionesCanceladas} trigger="click" placement="bottom" color="#fff">
                      <BsInfoCircleFill className="pointer" />
                    </Tooltip>
                  </div>
                </div>
                <div className="summary-item_number">3</div>
              </div>
            </div>
          </div>

          <div className="toggle-data pointer" onClick={masDatosClic}>
            <BsChevronDown className={`${masDatos ? "up": ""}` .trimEnd()} />
          </div>
        </div>

        <div className="dashboard-first-row">
          <div className="dashboard-box dashboard-data dashboard-left">
            <div className="flex no-justify">
              <span className="data-title strong">Pagos totales (USD)</span>
              <div className="summary-help">
                <Tooltip title={pagosTotales} trigger="click" placement="bottom" color="#fff">
                  <BsInfoCircleFill className="pointer" />
                </Tooltip>
              </div>
            </div>
            <div className="flex no-justify">
              <span className="all_payments_data-totals data-totals strong">$182</span>
              <span className="data-dates">Ene 12 - Feb 12</span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Account;