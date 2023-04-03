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

        <div className="team_filter input input-blanco flex">
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
      </Layout>
    </>
  )
}

export default Team;