import Layout from "../../../componentes/layout";
import NuevoPlan from "../../../componentes/nuevoPlan";
import Image from "next/image";
import CamaraIcon from '../../../public/camara-boton.png';

function NewPlan() {
  return (
    <>
      <Layout>
        <div className="agregar-nuevo">
          <div className="order-head">
            <h2>Agregar nueva membresía</h2>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <p className="app-input input">
                  <span className="acc-label">Nombre</span>
                  <input type="text" name="name" id="name" placeholder="Membresía name" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Descripción</span>
                  <textarea id="description" name="description" placeholder="Ingrese una descripción para tu Membresía" rows="4" />
                </p>
              </div>

              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Plan de la suscripción</h3>
                <div className="plan-container-all">
                  <NuevoPlan />
                </div>
                <div className="order-box flex order-actions"><a>Agregar plan</a></div>
              </div>

              <div className="order-box-container">
                <h3 className="margin-bottom">Disponibilidad</h3>
                <p className="app-input input">
                  <span className="acc-label">ID/SKU</span>
                  <input type="text" name="sku" id="sku" placeholder="ID/SKU" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Cantidad</span>
                  <input type="number" name="inventory" id="inventory" placeholder="Inventario" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Disponibilidad</span>
                  <select name="stockstatus" id="stockstatus">
                    <option value="instock">Disponible</option>
                    <option value="outofstock">Agotado</option>
                  </select>
                </p>
                <label className="check-container">
                  Activa la gestión de inventario
                  <input type="checkbox" id="trackqty" name="trackqty" value="1" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="new-product-col2">
              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Configuraciones</h3>
                <p className="app-input input">
                  <span className="acc-label">Estado</span>
                  <select name="productstatus" id="productstatus">
                    <option value="active">Activo</option>
                    <option value="draft">Borrador</option>
                    <option value="private">Privado</option>
                  </select>
                </p>
                <p className="app-input input">
                  <span className="acc-label">Etiquetas</span>
                  <input type="text" name="tags" id="tags" placeholder="Etiqueta1, Etiqueta2, Etiqueta3" />
                </p>
              </div>

              <div className="order-box-container">
                <h3 className="margin-bottom">Galería de imágenes</h3>
                <div className="product-image-show">
                  <label htmlFor="product-image" className="front-image-place pointer">
                    <Image src={CamaraIcon} alt="Imagen de producto" />
                  </label>
                </div>
                <div className="product-gallery-show">
                  <label htmlFor="product-gallery" className="gallery-image-place pointer">
                    <Image src={CamaraIcon} alt="Imagen de producto" />
                  </label>
                </div>
                <div className="images-upload">
                  <button className="front-image-upload botones boton-border btn100" htmlFor="product-image">Agregar imagen principal</button>
                  <button className="front-image-upload botones boton-border btn100" htmlFor="product-gallery">Agregar galería</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NewPlan;