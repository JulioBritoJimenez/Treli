import Layout from "../../../componentes/layout";
import Link from 'next/link';

function Team() {
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
            <button className="botones boton-violeta button-full">Agregar miembro</button>
          </div>
        </div>

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
                <td className="t_table_right"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  )
}

export default Team;