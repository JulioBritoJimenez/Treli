import Layout from "../../componentes/layout";
import GuardarCambios from "../../componentes/guardarCambios";
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import iconoTreli from '../../public/Logo-Treli-300x300.png';

function EstilosMarca() {
  return (
    <>
      <Layout>
        <div className="account-appe-container">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Estilos de marca</h2>
          </div>
          <GuardarCambios />

          <div className="new-product-cols">
            <div className="new-product-col1">
              <h3 className="margin-bottom-20px">Estilos</h3>
              <div className="order-box-container profile-info margin-bottom-30px">
                <div className="business-logo-container app-image-style flex flex-center margin-bottom">
                  <input type="file" accept="image/gif, image/jpeg, image/png" name="business-logo" id="business-logo" className="hidden" />
                  <span className="acc-label">
                    Logo
                    <span className="label-desc">Tamaño recomendado 800px x 800px</span>
                  </span>
                  <div className="business-logo-show">
                    <Image src={iconoTreli} alt="Logo de la empresa" priority />
                  </div>
                  <p className="image-choose flex no-justify">
                    <label className="choose-image botones boton-border" htmlFor="business-logo" >Elegir imagen</label>
                    <label className="remove-image remove-logo pointer botones boton-gris button-full">Eliminar</label>
                  </p>
                  <input type="hidden" className="changeinputr" name="business-logo-id" id="business-logo-id" />
                </div>

                <p className="app-input input">
                  <span className="acc-label">Nombre del negocio</span>
                  <input type="text" name="businessname" id="businessname" placeholder="Ingresa el nombre del negocio" />
                </p>

                <p className="app-input input">
                  <span className="acc-label">Color</span>
                  <input type="color" id="colorpicker" name="colorpicker" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" />
                  <input type="text" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" id="hexcolor" />
                  <input type="hidden" name="textcolor" id="textcolor" />
                </p>
              </div>

              <h3 className="margin-bottom-15px">Información de contacto</h3>
              <div className="order-box-container margin-bottom info-contacto">
                <p className="app-input input margin-bottom">
                  <span className="acc-label">Teléfono</span>
                  <select name="phonecountry" id="phonecountry">
                    <option>AD (+376)</option>
                    <option>AE (+971)</option>
                  </select>
                  <input type="text" name="buphone" id="buphone" placeholder="3111111111" />
                </p>

                <p className="app-input input">
                  <span className="acc-label">WhatsApp</span>
                  <select name="wacountry" id="wacountry">
                    <option>AD (+376)</option>
                    <option>AE (+971)</option>
                  </select>
                  <input type="text" name="buwha" id="buwha" placeholder="3111111111" />
                </p>

                <p className="app-input input">
                  <span className="acc-label">Correo electrónico</span>
                  <input type="email" name="buemail" id="buemail" placeholder="email@example.com" />
                </p>

                <p className="app-input input">
                  <span className="acc-label">Dirección</span>
                  <input type="text" name="buaddress" id="buaddress" placeholder="Cra 1a #22 - 34" />
                </p>

                <p className="align-right">Esta información se mostrará a tus usuarios.</p>
              </div>
            </div>

            <div className="new-product-col2"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EstilosMarca;