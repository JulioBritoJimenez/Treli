import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

function MyAccountDetails() {
  return (
    <div className="account-container">
      <div className="account-header flex no-justify flex-center">
        <Link href="/my-account/" className="order-back"><BsArrowLeftShort /></Link>
        <h2>Detalles de cuenta</h2>
      </div>

      <div className="detalles-de-cuenta flex">
        <div className="profile-information col1">
          <h3>Información del perfil</h3>
          <div className="input flex">
            <input type="text" name="first_name" id="first_name" placeholder="Primer Nombre" />
            <input type="text" name="last_name" id="last_name" placeholder="Apellido" />
          </div>
          <div className="input">
            <input type="email" name="user_email" id="user_email" placeholder="Email" />
          </div>
          <button className="botones boton-violeta button-full btn100">Actualizar</button>
        </div>

        <div className="contrasena-eliminar col2">
          <h3>Restablecer contraseña</h3>
          <p className="margin-bottom-15px">Te llegará un correo electrónico para cambiar tu contraseña.</p>
          <button className="botones boton-gris button-full">Envíar correo</button>

          <h3 className="eliminar-cuenta">Eliminar tu cuenta</h3>
          <button className="botones eliminar-btn button-full">Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default MyAccountDetails;