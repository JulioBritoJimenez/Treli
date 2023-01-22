import Link from 'next/link';
import Image from "next/image";
import andresDonado from '../public/andres-donado.jpg';
import quoteVioleta from '../public/quote-violeta-2.svg';
import mockupReg from '../public/mockup-reg-1.png';
import LogoTreli from '../public/treli.svg';
import { useState } from 'react';

function Register() {

  const [afiliado, setAfiliado] = useState(false);

  const afiliadoClic = () => {
    setAfiliado(!afiliado);
  };

  return(
    <div className="register-container ">
      <div className="register-col register-col-1">
        <div className="register-row-1">
          <div className="reg-quote">
            <Image className="img-quote-p" src={andresDonado} alt="Andrés Donado" />
            <Image className="img-quote" src={quoteVioleta} alt="Icono Quote" />
            <h3>Andrés Donado</h3>
            <small>CSO de EWO</small>
            <p>Con Treli hemos logrado diversificar las fuentes de ingresos, creando la recurrencia en las donaciones, ayudando a la transformación de niñas de escasos recursos a través de la educación.</p>
          </div>
        </div>

        <div className="register-row-2">
          <Image className="reg-cel" src={mockupReg} alt="Mockup cel" priority />
        </div>
      </div>

      <div className="register-col register-col-2">
        <Link className="logo-registro" href="/account"><Image src={LogoTreli} alt="Logo Treli" /></Link>
        <h2 className="c-ac-ti">Crea una cuenta gratis</h2>
        <p className="reg-sub">Automatiza tus cobros, mejora tus ingresos.</p>
        <form className="form-register" method="post">
          <p className="app-input user-register">
            <span className="treli-place"> treli.co/ </span>
            <input className="input-text" placeholder="Usuario" type="text" name="username" id="reg_username" autoComplete="username" />
          </p>
          <p className="app-input">
            <input className="input-text" placeholder="Email" type="email" name="email" id="reg_email" autoComplete="email" />
          </p>
          <p className="app-input phone-input">
            <input className="input-text" placeholder="Teléfono" type="text" name="reg_phone" id="reg_phone" />
          </p>
          <p className="app-input">
            <input className="input-text" placeholder="Contraseña" type="password" name="password" id="reg_password" autoComplete="new-password" />
          </p>
          <p className="aff-code-register" onClick={afiliadoClic}>Tengo un código de afiliado</p>
          <p className={`app-input affiliate-input ${afiliado ? "codigo-afiliado": ""}` .trimEnd()}>
            <input className="input-text" placeholder="Código de afiliado" type="text" name="affcode" id="affcode" />
          </p>
          <p className="reg-priv">
            Al crear una cuenta, acepta nuestros <a target="”_blank" href="https://treli.co/terminos-y-condiciones/">Terminos y condiciones</a> y nuestra <a target="”_blank" href="https://treli.co/politicas-privacidad/">Política de privacidad</a>
          </p>

          <button type="submit" className="boton-violeta botones form-register-submit btn-login-registro" name="register" value="Registrarse">Crear cuenta</button>

          <p className="dont tiene-cuenta">
            ¿Ya tienes cuenta? <Link href="/">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register;