import Layout from "../../../componentes/layout";
import { useState } from 'react';
import Image from "next/image";
import CamaraIcon from '../../../public/camara-boton.png';

function NuevoProducto() {

  const [masmonedas, setMasmonedas] = useState(false);
  const masmonedasClic = () => {
    setMasmonedas(!masmonedas);
  };

  return (
    <>
      <Layout>
        <div className="agregar-nuevo">
          <div className="order-head">
            <h2>Agregar nuevo producto</h2>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <p className="app-input input">
                  <span className="acc-label">Nombre</span>
                  <input type="text" name="name" id="name" placeholder="Producto nombre" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Descripción</span>
                  <textarea id="description" name="description" placeholder="Ingrese una descripción para tu Producto" rows="4" />
                </p>
              </div>

              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Precios</h3>
                <div className="plan-container-all">
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
                    <input className="subsprice" type="number" id="price" name="price" placeholder="Precio" />
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
                        <td><input type="number" className="graduated_units" placeholder="hasta" /></td>
                        <td><input type="number" className="graduated_price" placeholder="$0.00" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="app-input currency-USD input hidden">
                    <label className="acc-label strong">Precio USD</label>
                    <input className="subsprice-currencies" data-currency="USD" type="number" name="subsprice[]" placeholder="Precio" />
                  </p>
                  <a className={`mas-opciones ${masmonedas ? "hidden": ""}` .trimEnd()} onClick={masmonedasClic}>+ Agregar más monedas</a>
                  <p className={`app-input currency-USD input hidden ${masmonedas ? "active": ""}` .trimEnd()}>
                    <select id="add_currencies_sel">
									    <option value="">Seleccionar moneda</option>
											<option value="USD">USD - Dólar de los Estados Unidos</option>
										</select>
                  </p>
                </div>
              </div>

              <div className="order-box-container">
                <h3 className="margin-bottom">Inventario</h3>
                <p className="app-input input">
                  <span className="acc-label">ID/SKU</span>
                  <input type="text" name="sku" id="sku" placeholder="ID/SKU" />
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

export default NuevoProducto;