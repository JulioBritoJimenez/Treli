import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import LogoTreli from '../public/treli.svg';
import { useState } from 'react';

export default function Home() {

  const [olvido, setOlvido] = useState(false);

  const contrasenaClic = () => {
    setOlvido(!olvido);
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
            <h2>Inicie sesión en su cuenta Treli</h2>
            <form className="form-login" method="post">
              <p className="app-input">
                <input className="input-text" placeholder="Usuario" type="text" name="username" id="username" autoComplete="username" />
              </p>
              <p className="app-input">
                <input className="input-text" placeholder="Contraseña" type="password" name="password" id="password" autoComplete="current-password" />
              </p>
              <p className="app-input">
                <button type="submit" className="boton-violeta botones btn-login-registro" name="login" value="Acceder">Iniciar sesión</button>
              </p>
              <p className="user-forgot-password" onClick={contrasenaClic}>¿Olvidaste tu contraseña?</p>
              <div className={`forgot-email hidden ${olvido ? "active": ""}` .trimEnd()}>
                <p>Te enviaremos un email para recuperar tu contraseña.</p>
                <p className="app-input">
                  <input placeholder="Email" type="email" name="user_email" id="user_email" autoComplete="email" />
                </p>
                <button className="forgot-send boton-violeta botones btn-login-registro">Enviar</button>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}