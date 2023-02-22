import Link from "next/link";
import { BsArrowLeftShort, BsInfoCircle } from "react-icons/bs";
import { Tooltip } from 'antd';
import { useState } from 'react';

function MyAccountAddress() {

  const [porDefecto, setPorDefecto] = useState(false);
  const porDefectoClic = () => {
    setPorDefecto(!porDefecto);
  };

  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
        <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Direcciones</h2>
      </div>

      <div className="dir-defecto flex no-justify">
        <h3 className="margin-bottom-20px">Dirección por defecto</h3>
        <Tooltip title="Dirección por defecto sera preseleccionada en el checkout. Para modifcar la dirección de envío de una suscripción se debe realizar en cada una." placement="top" color="#fff">
          <BsInfoCircle className="pointer" />
        </Tooltip>
      </div>

      <div className="address-default order-payment order-row">
        <div className="payment-head flex margin-bottom-15px">
          <div className="payment-title strong">Dirección de envío</div>
          <div className="facturacion-change texto-link pointer" onClick={porDefectoClic}>Cambiar</div>
        </div>
        <div className="payment-cart flex">
          <div className="dir-title">Cra 1 1 1, Barranquilla, CO</div>
        </div>
      </div>

      <div className={`editar_direccion_wrap hidden ${porDefecto ? "active": ""}` .trimEnd()}>
        <h3 className="margin-bottom-15px">Editar dirección</h3>
        <div className="flex input">
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
          <input type="text" id="apellido" name="apellido" placeholder="Apellido" />
        </div>
        <div className="input">
          <input type="text" id="direccionuno" name="direccionuno" placeholder="Dirección" />
        </div>
        <div className="input">
          <input type="text" id="direcciondos" name="direcciondos" placeholder="Apartamento, casa, etc. (opcional)" />
        </div>
        <div className="flex input">
          <select name="lpais" id="lpais">
            <option value="0">Seleccionar un país</option>
            <option value="CO">Colombia</option>
          </select>
          <select name="lstate" id="lstate">
            <option value="0">Seleccionar departamento</option>
            <option value="ATL">Atlántico</option>
          </select>
        </div>
        <div className="flex input">
          <input type="text" id="lcity" name="lcity" placeholder="Ciudad" />
          <input type="text" id="lzip" name="lzip" placeholder="Código postal" />
        </div>
        <button className="botones boton-violeta button-full btn100">Guardar</button>
      </div>

      <h3 className="mis-direcciones">Mis direcciones</h3>
      <p>Puedes agregar una nueva dirección en el checkout.</p>

      <div className="my-address order-payment order-row">
        <div className="payment-head flex margin-bottom-15px">
          <div className="payment-title strong">Dirección de envío</div>
          <div className="facturacion-change texto-link pointer">Cambiar</div>
        </div>
        <div className="payment-cart flex">
          <div className="dir-title">Cra 1 1 1, Barranquilla, CO</div>
        </div>
      </div>

    </div>
  )
}

export default MyAccountAddress;