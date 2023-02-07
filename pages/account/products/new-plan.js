import Layout from "../../../componentes/layout";
import NuevoPlan from "../../../componentes/nuevoPlan";

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
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NewPlan;