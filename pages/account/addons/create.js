import Layout from "../../../componentes/layout";
import NuevoAddon from "../../../componentes/nuevoAddon";

function CreateAddon() {
  return (
    <>
      <Layout>
        <div className="agregar-nuevo nuevo-addon">
          <div className="order-head">
            <h2>Nuevo Addon</h2>
          </div>

          <div className="new-product-cols">
            <div className="new-product-col1">
              <div className="order-box-container margin-bottom">
                <p className="app-input input">
                  <span className="acc-label">Nombre</span>
                  <input type="text" name="name" id="name" placeholder="Nombre de addon" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">Descripción</span>
                  <textarea id="description" name="description" placeholder="Ingresa una descripción para el addon" rows="4" />
                </p>
                <p className="app-input input">
                  <span className="acc-label">ID/SKU</span>
                  <input type="text" name="sku" id="sku" placeholder="Addon id/sku" />
                </p>
              </div>

              <div className="order-box-container margin-bottom">
                <h3 className="margin-bottom">Planes de addon</h3>
                <div className="plan-container-all">
                  <NuevoAddon />
                </div>
                <div className="order-box flex order-actions"><a>Agregar plan</a></div>
              </div>

              <div className="order-box-container">
                <h3 className="h3-borde margin-bottom">Restricciones de uso</h3>
                <p className="app-input radio-buttons">
                  <span className="acc-label">Aplica a</span>
                  <span className="radio-buttons-container">
                    <label className="check-container">Todos los productos
                      <input className="takeval checkapplies" type="radio" id="allp" name="applies_to" value="allp" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="check-container">Productos específicos
                      <input className="takeval checkapplies" type="radio" id="productsp" name="applies_to" value="productsp" />
                      <span className="checkmark"></span>
                    </label>
                  </span>
                </p>
              </div>
            </div>

            <div className="new-product-col2"></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CreateAddon;