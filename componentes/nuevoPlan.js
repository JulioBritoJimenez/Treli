import { BsChevronDown, BsChevronUp, BsInfoCircleFill } from "react-icons/bs";
import { useState } from 'react';
import { Tooltip } from 'antd';

function NuevoPlan() {

  const [masopciones, setMasopciones] = useState(false);
  const masopcionesClic = () => {
    setMasopciones(!masopciones);
  };

  const cobro = <div><span className="strong">Cobro basado en el uso</span><br /> Actívalo si, como empresa, proporcionas acceso a tus servicios y le cobras a tu cliente en función de su uso al final del ciclo de suscripción.</div>;

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
            <td><input type="number" className="graduated_units" placeholder="& Above" /></td>
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
      <a className="mas-opciones margin-bottom" onClick={masopcionesClic}>+ Opciones adicionales 
        <BsChevronDown className={`${masopciones ? "hidden": ""}` .trimEnd()} />
        <BsChevronUp className={`hidden ${masopciones ? "flex": ""}` .trimEnd()} />
      </a>
      <div className="additional_options_cont">
        <p className="app-input">
          <span className="row1">
            <label className="check-container">Cobro basado en el uso
              <Tooltip title={cobro} placement="bottom" color="#fff">
                <BsInfoCircleFill />
              </Tooltip>
              <input type="checkbox" className="usage_billing input_tog" name="usage_billing" value="1" />
              <span className="checkmark"></span>
            </label>
          </span>
        </p>
      </div>
    </div>
  )
}

export default NuevoPlan;