import { BsChevronDown, BsChevronUp, BsInfoCircleFill } from "react-icons/bs";
import { useState } from 'react';
import { Tooltip } from 'antd';

function NuevoPlan() {

  const [masopciones, setMasopciones] = useState(false);
  const masopcionesClic = () => {
    setMasopciones(!masopciones);
  };

  const [numerofijo, setNumerofijo] = useState(false);
  const numerofijoClic = () => {
    setNumerofijo(!numerofijo);
  };

  const [permanencia, setPermanencia] = useState(false);
  const permanenciaClic = () => {
    setPermanencia(!permanencia);
  };

  const [inscripcion, setInscripcion] = useState(false);
  const inscripcionClic = () => {
    setInscripcion(!inscripcion);
  };

  const [prueba, setPrueba] = useState(false);
  const pruebaClic = () => {
    setPrueba(!prueba);
  };

  const [diaEspecifico, setDiaEspecifico] = useState(true);
  const diaEspecificoClic = () => {
    setDiaEspecifico(!diaEspecifico);
  };

  const [duracion, setDuracion] = useState(false);
  const duracionClic = () => {
    setDuracion(!duracion);
  };

  const cobro = <div><span>Cobro basado en el uso</span> Actívalo si, como empresa, proporcionas acceso a tus servicios y le cobras a tu cliente en función de su uso al final del ciclo de suscripción.</div>;

  const numerofijoinfo = <div><span>Número fijo de pagos</span> Actívalo si este plan tiene un número fijo de pagos totales, incluyendo el primer pago y y pagos de renovacion.</div>;

  const permanenciainfo = <div><span>Períodos de permanencia</span> Configura el número mínimo de renovaciones antes de permitir que tu cliente cancele o pause su suscripción.</div>;

  const inscripcioninfo = <div><span>Cuota de inscripción</span> Configura una tarifa única para este plan de suscripción.</div>;

  const pruebainfo = <div><span>Prueba gratis</span> Con la prueba gratuita, puedes establecer la duración que un cliente puede estar en modo de prueba. Una vez que terminan los días de prueba, Treli automáticamente intenta procesar el primer pago.</div>;

  return (
    <div className="plan-container">
      <p className="app-input input">
        <label className="acc-label strong">Modelo de precio</label>
        <select className="pricing_model" name="pricing_model[]">
          <option value="standard">Precio estándar</option>
          <option value="graduated">Precio escalonado</option>
          <option value="volume">Precio por volumen</option>
        </select>
      </p>
      <p className="app-input input">
        <label className="acc-label strong">Precio COP</label>
        <input className="subsprice" type="number" name="subsprice[]" placeholder="Precio" />
      </p>
      <table className="tabla-codigo input hidden">
        <tbody>
          <tr>
            <th>Desde (unidades)</th>
            <th>Hasta</th>
            <th>Precio por unided COP</th>
          </tr>
          <tr>
            <td><span className="unit_first">1</span></td>
            <td><input type="number" className="graduated_units" placeholder="hasta" /></td>
            <td><input type="number" className="graduated_price" placeholder="$0.00" /></td>
          </tr>
        </tbody>
      </table>
      <p className="app-input input">
        <label className="acc-label strong">Frecuencia</label>
        <span className="flex">
          <select className="space-r interval" name="interval[]">
						<option value="1">Cada 1</option>
						<option value="2">Cada 2</option>
						<option value="3">Cada 3</option>
						<option value="4">Cada 4</option>
						<option value="5">Cada 5</option>
						<option value="6">Cada 6</option>
					</select>
          <select className="period" name="period[]">
						<option value="day">Día</option>
						<option value="week">Semana</option>
						<option value="month">Mes</option>
						<option value="year">Año</option>
					</select>
        </span>
      </p>
      <a className="mas-opciones" onClick={masopcionesClic}>+ Opciones adicionales 
        <BsChevronDown className={`${masopciones ? "hidden": ""}` .trimEnd()} />
        <BsChevronUp className={`hidden ${masopciones ? "flex": ""}` .trimEnd()} />
      </a>
      <div className={`additional_options_cont hidden ${masopciones ? "active": ""}` .trimEnd()}>
        <p className="app-input">
          <span className="row1">
            <label className="check-container">Cobro basado en el uso
              <input type="checkbox" className="usage_billing input_tog" name="usage_billing" value="1" />
              <span className="checkmark"></span>
            </label>
            <Tooltip title={cobro} trigger="click" placement="bottom" color="#fff">
              <BsInfoCircleFill />
            </Tooltip>
          </span>
        </p>
        <p className="app-input">
          <span className="row1">
            <label className="check-container">Este plan tiene un número fijo de pagos
              <input type="checkbox" className="subscription_length input_tog" name="subscription_length" value="1" onClick={numerofijoClic} />
              <span className="checkmark"></span>
            </label>
            <Tooltip title={numerofijoinfo} trigger="click" placement="bottom" color="#fff">
              <BsInfoCircleFill />
            </Tooltip>
          </span>
          <span className={`row2 input hidden ${numerofijo ? "active": ""}` .trimEnd()}>
            <select>
              <option value="">Selecciona el número de pagos totales</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </span>
        </p>
        <p className="app-input">
          <span className="row1">
            <label className="check-container">Este plan tiene períodos de permanencia
              <input type="checkbox" className="commitment_periods_i input_tog" name="commitment_periods_i" value="1" onClick={permanenciaClic} />
              <span className="checkmark"></span>
            </label>
            <Tooltip title={permanenciainfo} trigger="click" placement="bottom" color="#fff">
              <BsInfoCircleFill />
            </Tooltip>
          </span>
          <span className={`row2 input hidden ${permanencia ? "active": ""}` .trimEnd()}>
            <input type="number" name="commitment_periods[]" className="commitment_periods" placeholder="Ninguno" />
          </span>
        </p>
        <p className="app-input">
          <span className="row1">
            <label className="check-container">Este plan tiene cuota de inscripción
              <input type="checkbox" className="has_signup_fee" id="has_signup_fee" name="has_signup_fee" value="1" onClick={inscripcionClic} />
              <span className="checkmark"></span>
            </label>
            <Tooltip title={inscripcioninfo} trigger="click" placement="bottom" color="#fff">
              <BsInfoCircleFill />
            </Tooltip>
          </span>
          <span className={`row2 input hidden ${inscripcion ? "active": ""}` .trimEnd()}>
            <input className="signup_fee" type="number" name="signup_fee[]" placeholder="Cuota de inscripción COP" />
          </span>
        </p>
        <p className="app-input">
          <span className="row1">
            <label className="check-container">Este plan tiene prueba gratis
              <input type="checkbox" className="hast_trial" id="hast_trial" name="hast_trial" value="1" onClick={pruebaClic} />
              <span className="checkmark"></span>
            </label>
            <Tooltip title={pruebainfo} trigger="click" placement="bottom" color="#fff">
              <BsInfoCircleFill />
            </Tooltip>
          </span>
          <span className={`row2 input hidden ${prueba ? "flex": ""}` .trimEnd()}>
            <input className={`space-r trial_length ${diaEspecifico ? "": "hidden"}` .trimEnd()} type="number" name="trial_length[]" placeholder="Duración de prueba gratuita" />
            <select className={`trial_period ${diaEspecifico ? "": "hidden"}` .trimEnd()} name="trial_period[]">
							<option value="day">Día</option>
							<option value="week">Semana</option>
							<option value="month">Mes</option>
							<option value="year">Año</option>
						</select>
            <select className={`trial_day hidden ${diaEspecifico ? "": "active"}` .trimEnd()} name="trial_day[]">
							<option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span className={`trial_day_txt hidden ${diaEspecifico ? "": "active"}` .trimEnd()}>De cada mes</span>
          </span>
          <span className={`trial_day_togg-cont hidden ${prueba ? "active": ""}` .trimEnd()}>
            <a className={`${diaEspecifico ? "": "hidden"} ${duracion ? "active": ""}` .trimEnd()} onClick={diaEspecificoClic}>O comienza el pago en un día específico del mes</a>
            <a className={`${diaEspecifico ? "hidden": ""} ${duracion ? "hidden": ""}` .trimEnd()} onClick={duracionClic}>O define la duración de la prueba</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default NuevoPlan;