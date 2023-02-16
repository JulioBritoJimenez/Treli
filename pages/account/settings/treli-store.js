import Layout from "../../../componentes/layout";
import GuardarCambios from "../../../componentes/guardarCambios";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image'
import Banner from '../../../public/banner-treli.jpg';
import LogoTreli from '../../../public/Logo-Treli-300x300.png';
import DemoImg from '../../../public/Treli-Product-Placeholder.jpg';

function Tienda() {
  return (
    <>
      <Layout>
        <div className="account-appe-container store-appearance">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Treli tienda</h2>
          </div>
          <GuardarCambios  />
          <p className="margin-bottom-50px">Configura tu tienda impulsada por Treli para exhibir y vender tus productos.</p>

          <div className="account-appe-container-inner flex">
            <div className="account-appe-col1">
              <div className="order-box-container margin-bottom">
                <div className="order-box">
                  <h3>Configuraciones</h3>
                </div>
                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Activar / Desactivar</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="activate_store" name="activate_store" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Mostrar banner</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="display_banner" name="display_banner" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>

                <div className="order-box">
                  <p className="app-input input label-flex1">
                    <span className="acc-label weight-normal">Mostrara descripción de la tienda</span>
                    <label className="switch space-r">
                      <input type="checkbox" id="display_description" name="display_description" value="1" />
                      <span className="slider round"></span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="order-box-container profile-info margin-bottom">
                <h3 className="margin-bottom-20px">Apariencia</h3>
                <p className="app-input input">
                  <span className="acc-label">Descripción</span>
                  <textarea id="businesdesc" name="businesdesc" placeholder="Ingresa una descripción para el negocio"  rows="1" />
                </p>
                <div className="business-cover-container">
                  <div className="app-image-style flex flex-center">
                    <input type="file" accept="image/gif, image/jpeg, image/png" name="business-cover" id="business-cover" hidden />
                    <span className="acc-label">Imagen/banner de portada
                      <span className="label-desc">Tamaño recomendado 1920px x 600px</span>
                    </span>
                    <div className="business-cover-show">
                      <label htmlFor="business-cover" className="cover-empty">
                        <Image src={Banner} alt="banner" priority />
                      </label>
                    </div>
                  </div>
                  <p className="image-choose">
						        <label className="choose-image pointer botones boton-border" htmlFor="business-cover">Elegir imagen</label>
									</p>
                </div>
              </div>

              <div className="order-box-container social-media margin-bottom">
                <h3 className="margin-bottom-20px">Redes sociales</h3>
                <p className="app-input input">
                  <span className="acc-label">Instagram</span>
                  <span className="treli-place">https://instagram.com/</span>
                  <input type="text" name="buinsta" id="buinsta" placeholder="somostreli" className="radius-left0" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Facebook</span>
                  <span className="treli-place">https://www.facebook.com/</span>
                  <input type="text" name="buface" id="buface" placeholder="treli" className="radius-left0" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Twitter</span>
                  <span className="treli-place">https://twitter.com/</span>
                  <input type="text" name="butwitter" id="butwitter" placeholder="trelico" className="radius-left0" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Tiktok</span>
                  <span className="treli-place">https://www.tiktok.com/</span>
                  <input type="text" name="butik" id="butik" placeholder="@treli" className="radius-left0" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">YouTube</span>
                  <span className="treli-place">https://www.youtube.com/channel/</span>
                  <input type="text" name="buyoutube" id="buyoutube" placeholder="treli" className="radius-left0" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Linkedin</span>
                  <span className="treli-place">https://www.linkedin.com/company/</span>
                  <input type="text" name="bulinkedin" id="bulinkedin" placeholder="trelico" className="radius-left0" />
                </p>
              </div>
            </div>

            <div className="account-appe-col2">
              <div className="prev-container">
                <div className="prev-row2 ">
                  <div className="prev-cover">
                    <label htmlFor="business-cover" className="cover-empty">
                      <Image src={Banner} alt="banner" priority />
                    </label>
                  </div>
                </div>

                <div className="prev-row3 margin-bottom-30px">
                  <div className="prev-logo ">
                    <Image src={LogoTreli} alt="Logo" priority />
                  </div>
                  <div className="prev-busname strong">Treli</div>
                  <div className="prev-description">Acá va la descripción</div>
                </div>

                <div className="prev-row4 flex margin-bottom-30px">
                  <div className="prev-subs strong">Suscripciones</div>
                  <div className="prev-onetime">Productos</div>
                </div>

                <div className="prev-row5">
                  <div className="prev-row5-item flex margin-bottom-15px">
                    <div className="row5-img">
                      <Image src={DemoImg} alt="Imagen" priority />
                    </div>
                    <div className="row5-info">
                      <div className="row5-title strong">Treli VIP club</div>
                      <div className="row5-desc">¡Únete ahora y disfruta!</div>
                      <div className="row5-price">$36.00 / mes</div>
                      <div className="row5-but botones boton-violeta button-full btn100">Suscribirme</div>
                    </div>
                  </div>

                  <div className="prev-row5-item flex">
                    <div className="row5-img">
                      <Image src={DemoImg} alt="Imagen" priority />
                    </div>
                    <div className="row5-info">
                      <div className="row5-title strong">Treli VIP club</div>
                      <div className="row5-desc">¡Únete ahora y disfruta!</div>
                      <div className="row5-price">$36.00 / mes</div>
                      <div className="row5-but botones boton-violeta button-full btn100">Suscribirme</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Tienda;