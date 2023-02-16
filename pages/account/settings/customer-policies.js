import Layout from "../../../componentes/layout";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from 'next/link';

function Politicas() {

  return (
    <>
      <Layout>
        <div className="account-appe-container settings-dunning settings-ganalytics">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>Políticas de clientes</h2>
          </div>

          <div className="order-box-container margin-bottom">
            <h3 className="margin-bottom-20px">Términos y condiciones</h3>
            <p>Debes consultar asesoramiento legal independiente antes de publicar estos acuerdos. Treli se exime de toda responsabilidad con respecto a las acciones tomadas o no tomadas en base a alguno o todos los contenidos de este sitio web y no es responsable ni respalda necesariamente ningún contenido de terceros.</p>
            <p className="app-input input">
              <textarea className="takeval" rows="7" name="termsconditions" id="termsconditions" placeholder="Agrega los términos y condiciones de tu negocio. Esto generalmente incluye políticas de envío y devolución" />
            </p>
          </div>

          <div className="order-box-container margin-bottom">
            <h3 className="margin-bottom-20px">Política de privacidad</h3>
            <p>Treli ya muestra a sus usuarios una Política de privacidad sobre cómo manejamos los datos en tu nombre. Utiliza este espacio para agregar cualquier política adicional.</p>
            <p className="app-input input">
              <textarea className="takeval" rows="7" name="privacypolicy" id="privacypolicy" placeholder="Ingresa cualquier política de privacidad adicional para tu negocio"></textarea>
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Politicas;