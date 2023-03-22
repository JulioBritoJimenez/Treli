import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LogoTreli from "../public/treli.svg";
import { useState } from "react";

export default function Home() {

  const [olvido, setOlvido] = useState(false);

  const contrasenaClic = () => {
    setOlvido(!olvido);
  };

  const [enviarCodigo, setEnviarCodigo] = useState(false);
  const enviarCodigoClic = () => {
    setEnviarCodigo(!enviarCodigo);
  };

  const [ingresoContrasena, setIngresoContrasena] = useState(false);
  const ingresoContrasenaClic = () => {
    setIngresoContrasena(true);
  };
  const ingresoCodigoClic = () => {
    setIngresoContrasena(false);
  };

  return (
    <>
      <Head>
        <title>Treli</title>
        <meta name="description" content="Treli" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="login-container">
          <div className="login-content">
            <Link href="/account"><Image src={LogoTreli} alt="Logo Treli" /></Link>
            <h2>Ingresa a tu cuenta de Treli</h2>
            <p className={`otp-inst ${ingresoContrasena ? "hidden": ""}` .trimEnd()}>Ingresa tu correo electrónico y recibirás un código de seguridad para continuar</p>
            <p className={`upw-inst hidden ${ingresoContrasena ? "active": ""} ${olvido ? "olvido": ""}` .trimEnd()}>Ingresa tu correo electrónico y contraseña para continuar</p>

            <div className={`login-step-one ${olvido ? "hidden": ""}` .trimEnd()}>
              <p>
                <label className="strong" htmlFor="username">Correo electrónico</label>
                <input className="input-text" type="text" placeholder="ejemplo@dominio.com" name="username" id="username" autoComplete="usernema" />
              </p>
            </div>

            <div className={`login-step-two hidden ${ingresoContrasena ? "active": ""} ${olvido ? "olvido": ""}` .trimEnd()}>
              <p>
                <label className="strong flex" htmlFor="password">
                  Contraseña
                  <a className="user-forgot-password" onClick={contrasenaClic}>¿Olvidaste la contraseña?</a>
                </label>
                <input className="input-text" type="password" placeholder="Ingresa tu contraseña" name="password" id="password" autoComplete="current-password" />
              </p>
              <p>
                <label className="login-rememberme">
                  <input name="rememberme" type="hidden" id="rememberme" value="forever" />
                </label>
                <input type="hidden" name="http-referer" />
                <button type="submit" className="boton-violeta botones btn-login-registro" name="login" value="Acceder">Acceder</button>
              </p>
              <p className="lost-password">
                <a className="sign-in-otp strong" onClick={ingresoCodigoClic}>Ingresa con código de un solo uso</a>
              </p>
            </div>

            <div className={`login-step-otp-input hidden ${enviarCodigo ? "active": ""}` .trimEnd()}>
              <p>
                <label className="strong" htmlFor="username">Código de un solo uso</label>
                <span className="texto-otp margin-bottom-10px">Ingresa el código de un solo uso enviado a tu correo electrónico</span>
                <input className="input-text" type="text" placeholder="Ingresa el código de un solo uso" name="otp" id="otp" />
              </p>
            </div>

            <div className={`login-step-otp-login hidden ${enviarCodigo ? "active": ""}` .trimEnd()}>
              <button type="submit" className="login-login-otp boton-violeta botones btn-login-registro">Ingresar</button>
            </div>

            <div className={`login-step-otp ${enviarCodigo ? "hidden": ""} ${ingresoContrasena ? "hidden": ""}` .trimEnd()}>
              <button className="login-send-otp boton-violeta botones btn-login-registro  margin-bottom" onClick={enviarCodigoClic}>Envíar código</button>
              <p className={`lost-password ${enviarCodigo ? "hidden": ""}` .trimEnd()}>
                <a className="sign-in-pw strong" onClick={ingresoContrasenaClic}>Ingresa con contraseña</a>
              </p>
            </div>

            <div className={`forgot-email hidden ${olvido ? "active": ""}` .trimEnd()}>
              <p>Ingresa tu email y te enviaremos un correo electrónico para cambiar tu contraseña.</p>
              <p className="app-input">
                <input placeholder="Email" type="email" name="user_email" id="user_email" autoComplete="email" />
              </p>
              <button className="forgot-send boton-violeta botones btn-login-registro">Enviar</button>
            </div>

            {/*<form className="form-login" method="post">
              <p className="app-input">
                <input className="input-text" placeholder="Usuario" type="text" name="username2" id="username2" autoComplete="username2" />
              </p>
              <p className="app-input">
                <input className="input-text" placeholder="Contraseña" type="password2" name="password2" id="password2" autoComplete="current-password2" />
              </p>
              <p className="app-input">
                <button type="submit" className="boton-violeta botones btn-login-registro" name="login" value="Acceder">Iniciar sesión</button>
              </p>
              <p className="user-forgot-password" onClick={contrasenaClic}>¿Olvidaste tu contraseña?</p>
              <div className={`forgot-email hidden ${olvido ? "active": ""}` .trimEnd()}>
                <p>Te enviaremos un email para recuperar tu contraseña.</p>
                <p className="app-input">
                  <input placeholder="Email" type="email" name="user_email2" id="user_email2" autoComplete="email2S" />
                </p>
                <button className="forgot-send boton-violeta botones btn-login-registro">Enviar</button>
              </div>
            </form>*/}
          </div>
      </div>
    </>
  )
}