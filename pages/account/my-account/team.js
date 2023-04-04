import Layout from "../../../componentes/layout";
import Link from 'next/link';
import { BsPencilSquare, BsX } from "react-icons/bs";
import { Button, Modal } from 'antd';
import { useState } from 'react';

function Team() {

  const [miembro, setMiembro] = useState(false);
  const showMiembro = () => {
    setMiembro(true);
  };
  const handleMiembro = () => {
    setMiembro(false);
  };

  return(
    <>
      <Layout>
        <h2 className="margin-bottom">Equipo</h2>
        <div className="settings-head my-account-container status-filter tabs-account">
          <Link href="/account/my-account/" className="settings-head-item">General</Link>
          <Link href="/account/my-account/billing" className="settings-head-item">Facturación</Link>
          <Link href="/account/my-account/team" className="settings-head-item plist-activestyle">Equipo</Link>
        </div>

        <div className="team_filter input input-blanco flex margin-bottom">
          <div className="team-filter_name hidden">
            <div id="subs-search-customer" className="subs-search-customer">
              <input type="text" placeholder="Search member" issubs="yes" id="customer-search" name="customer-search" />
            </div>
          </div>

          <div className="team-filter_active hidden">
            <select name="member_status" id="member_status">
              <option value="">Filtrar por estado</option>
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
          </div>

          <div className="add_team_member">
            <button className="botones boton-violeta button-full" onClick={showMiembro}>Agregar miembro</button>
          </div>
        </div>

        <Modal 
          title="Nuevo miembro"
          open={miembro} 
          onCancel={handleMiembro} 
          footer={[<Button onClick={handleMiembro} key="agregar">Agregar</Button>]} closeIcon={<BsX />} 
          centered width={700}
        >
          <div className="miembro-equipo">
            <p className="app-input">
              <label className="acc-label">Nombre</label>
              <input type="text" className="v-required" name="name" id="name" placeholder="Nombre" />
            </p>
            <p className="app-input">
              <label className="acc-label">Apellido</label>
              <input type="text" className="v-required" name="last_name" id="last_name" placeholder="Apellido" />
            </p>
            <p className="app-input">
              <label className="acc-label">Correo electrónico</label>
              <input type="text" className="v-required" name="email" id="email" placeholder="Email" />
            </p>
            <p className="app-input">
              <label className="acc-label">Teléfono</label>
              <input type="number" className="v-required" name="buphone" id="buphone" placeholder="Teléfono" />
            </p>
            <p className="app-input">
              <label className="acc-label">Referencia interna</label>
              <input type="text" className="v-required" name="internal_reference" id="internal_reference" placeholder="11223344" />
            </p>
            <p className="app-input">
              <label className="acc-label">Rol</label>
              <select className="v-required" name="create_member_role" id="create_member_role">
                <option value="">Selecciona el rol</option>
                <option value="corredor">Corredor</option>
                <option value="analista">Analista</option>
              </select>
            </p>
            <p className="app-input siigo_vendor_cont hidden">
              <label className="acc-label">Vendedor Siigo</label>
              <select name="siigo_vendor" id="siigo_vendor">
                <option value="">Selecciona Vendedor</option>
                <option value="vendedor1">Vendedor #1</option>
                <option value="vendedor2">Vendedor #2</option>
              </select>
            </p>
            <p className="app-input">
              <label className="acc-label">Preferencia de login</label>
              <select name="login_type" id="login_type">
                <option value="otp">OTP</option>
                <option value="contrasena">Contraseña</option>
              </select>
            </p>
            <p className="app-input">
              <label className="acc-label">Estado</label>
              <select name="status" id="status">
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </p>
          </div>
        </Modal>

        <div className="team_table order-box-container">
          <table className="payment-history">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Correo electrónico</th>
                <th>Rol</th>
                <th>Última vez visto</th>
                <th>Estado</th>
                <th className="t_table_right"></th>
              </tr>
              <tr>
                <td className="td-long">Pedro Perez - 12312312</td>
                <td>demo@treli.co</td>
                <td className="capitalize">Corredor</td>
                <td>22 de marzo de 2023 07:53 PM</td>
                <td className="capitalize">Activo</td>
                <td className="t_table_right"><BsPencilSquare className="editar-miembro" onClick={showMiembro} /></td>
              </tr>
              <tr>
                <td className="td-long">Prueba Prueba - 23145667</td>
                <td>demo@treli.co</td>
                <td className="capitalize">Corredor</td>
                <td>22 de marzo de 2023 07:53 PM</td>
                <td className="capitalize">Activo</td>
                <td className="t_table_right"><BsPencilSquare className="editar-miembro" onClick={showMiembro} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  )
}

export default Team;