import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsCodeSlash } from "react-icons/bs";

function AddProduct() {
  return (
    <>
      <Layout>
        <div className="choose-type-container type-subscriptions">
          <h2>¿Qué tipo de producto quieres crear?</h2>
          <div className="choose-type">
            <Link href="/account/products/new-plan" className="choose-type_subs choose-type_subs_member">
              <BsCodeSlash />
              <h3>Membresía</h3>
              <p>Ofrece a tus miembros acceso a beneficios exclusivos</p>
            </Link>
            <Link href="/account/products/new-product" className="choose-type_subs choose-type_subs_member">
              <BsCodeSlash />
              <h3>Producto recurrente</h3>
              <p>Ofrece productos o cajas para recibirlos en una frecuencia</p>
            </Link>
            <Link href="/account/products/new-plan" className="choose-type_subs choose-type_subs_member">
              <BsCodeSlash />
              <h3>Servicio recurrente</h3>
              <p>Permite a los clientes suscribirse a tu servicio</p>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AddProduct;