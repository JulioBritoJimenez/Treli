import Layout from "../../../componentes/layout";
import Link from 'next/link';

function MyAccount() {
  return (
    <>
      <Layout>
        <h2 className="margin-bottom">Cuenta</h2>
        <div className="settings-head my-account-container status-filter">
          <Link href="/account/my-account/" className="settings-head-item plist-activestyle">General</Link>
          <Link href="/account/my-account/billing" className="settings-head-item">Facturación</Link>
          <Link href="/account/my-account/team" className="settings-head-item">Equipo</Link>
        </div>

        <div className="new-product-cols">
          <div className="new-product-col1">
            <div className="order-box-container margin-bottom">
              <h3 className="margin-bottom">Información del perfil</h3>
              <p className="app-input input">
                <span className="acc-label">Nombre completo</span>
                <input type="text" name="fullname" id="fullname" placeholder="Nombre completo" />
              </p>
              <p className="app-input input">
                <span className="acc-label">Email</span>
                <input type="email" name="user_email" id="user_email" placeholder="Correo electrónico" />
              </p>
            </div>

            <div className="order-box-container margin-bottom">
              <h3 className="margin-bottom">Idioma</h3>
              <p className="app-input input">
                <span className="acc-label">Idioma</span>
                <select name="language" id="language">
                  <option value="english">Inglés</option>
                  <option value="spanish">Español</option>
                </select>
              </p>
            </div>

            <div className="order-box-container margin-bottom">
              <h3 className="margin-bottom">Tema</h3>
              <p className="app-input input">
                <span className="acc-label">Tema</span>
                <select name="theme" id="theme">
                  <option value="light">Claro</option>
                  <option value="dark">Oscuro</option>
                </select>
              </p>
            </div>
          </div>

          <div className="new-product-col2">
            <div className="order-box-container margin-bottom">
              <h3 className="margin-bottom">Restablecer la contraseña</h3>
              <p>Se enviará un correo electrónico de restablecimiento a la dirección de correo electrónico de tu cuenta.</p>
              <button className="reset-send botones boton-border inline-flex">Reestablecer</button>
            </div>

            <div className="order-box-container margin-bottom">
              <h3 className="margin-bottom">Cerrar sesión</h3>
              <button className="botones boton-border inline-flex" href="/account/my-account/">Cerrar sesión</button>
            </div>

            <div className="order-box-container margin-bottom">
              <h3 className="margin-bottom">Eliminar cuenta</h3>
              <button className="delete-account eliminar-btn botones inline-flex" href="/account/my-account/">Eliminar cuenta</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MyAccount;