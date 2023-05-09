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

  return (
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
          footer={[<Button onClick={handleMiembro} key="eliminar" className="eliminar-btn">Eliminar</Button>, <Button onClick={handleMiembro} key="agregar">Agregar</Button>]} closeIcon={<BsX />}
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
              <label className="acc-label">Identificación</label>
              <input type="text" className="v-required" name="identification" id="identification" placeholder="1132212532" />
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
              <label className="acc-label">Estado</label>
              <select name="status" id="status">
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
              </select>
            </p>
            <p className="app-input">
              <label className="acc-label">Rol</label>
              <select className="v-required" name="create_member_role" id="create_member_role">
                <option value="">Selecciona el rol</option>
                <option value="team_admin">Administrador</option>
                <option value="analista">Analista</option>
                <option value="corredor">Corredor</option>
                <option value="team_manager">Manager</option>
                <option value="team_custom">Personalizado</option>
                <option value="team_viewonly">Solo vista</option>
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
            <p className="app-input hidden">
              <label className="acc-label">Vehículo</label>
              <input type="text" name="corredor_vehiculo" id="corredor_vehiculo" placeholder="11262993" />
            </p>
            <div className="app-input perm-supercontainer">
              <label className="acc-label">Permisos</label>
              <div className="perm-container">
                <div className="perm-section">
                  <p className="perm-tit">Dashboard</p>
                  <div className="perm-inside">
                    <label className="check-container">Ver dashboard
                      <input type="checkbox" className="permisions_tog input_tog" section="dashboard" id="view_dashboard" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="perm-section">
                  <p className="perm-tit">Pagos</p>
                  <div className="perm-inside">
                    <label className="check-container">Ver pagos
                      <input type="checkbox" className="permisions_tog input_tog" section="pagos" id="view_payments" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Exportar pagos
                      <input type="checkbox" className="permisions_tog input_tog" section="pagos" id="export_payments" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Actualizar valores
                      <input type="checkbox" className="permisions_tog input_tog" section="pagos" id="update_value_payments" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Actualizar estados
                      <input type="checkbox" className="permisions_tog input_tog" section="pagos" id="update_status_payments" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Crear pagos
                      <input type="checkbox" className="permisions_tog input_tog" section="pagos" id="create_payments" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="perm-section">
                  <p className="perm-tit">Suscripciones</p>
                  <div className="perm-inside">
                    <label className="check-container">Ver suscripciones
                      <input type="checkbox" className="permisions_tog input_tog" section="suscripciones" id="view_subscriptions" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Exportar suscripciones
                      <input type="checkbox" className="permisions_tog input_tog" section="suscripciones" id="export_subscriptions" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Actualizar valores
                      <input type="checkbox" className="permisions_tog input_tog" section="suscripciones" id="update_value_subscriptions" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Actualizar estados
                      <input type="checkbox" className="permisions_tog input_tog" section="suscripciones" id="update_status_subscriptions" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Crear suscripciones
                      <input type="checkbox" className="permisions_tog input_tog" section="suscripciones" id="create_subscriptions" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="perm-section">
                  <p className="perm-tit">Catálogo</p>
                  <div className="perm-inside">
                    <label className="check-container">Ver catálago
                      <input type="checkbox" className="permisions_tog input_tog" section="catalogo" id="view_catalog" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Crear planes
                      <input type="checkbox" className="permisions_tog input_tog" section="catalogo" id="create_plans_catalog" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Crear addons
                      <input type="checkbox" className="permisions_tog input_tog" section="catalogo" id="create_addons_catalog" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Crear productos
                      <input type="checkbox" className="permisions_tog input_tog" section="catalogo" id="create_products_catalog" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Crear cupones
                      <input type="checkbox" className="permisions_tog input_tog" section="catalogo" id="create_coupons_catalog" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="perm-section">
                  <p className="perm-tit">Configuraciones</p>
                  <div className="perm-inside">
                    <label className="check-container">Perfil del negocio
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="profile_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Ajuste de suscripciones
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="subscription_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Pagos
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="payment_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Facturación
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="invoice_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Monedas
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="currencies_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Envíos
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="shipping_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Integraciones
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="integrations_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Estilos de marca
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="styles_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Notificaciones
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="notifications_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Página de pago
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="checkout_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Portal de autoservicio
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="portal_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Treli tienda
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="store_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Reclamación
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="dunning_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">API Keys
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="api_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Webhooks
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="webhooks_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Políticas
                      <input type="checkbox" className="permisions_tog input_tog" section="configuraciones" id="politicas_settings" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="perm-section">
                  <p className="perm-tit">Cuenta</p>
                  <div className="perm-inside">
                    <label className="check-container">General
                      <input type="checkbox" className="permisions_tog input_tog" section="cuenta" id="general_account" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Facturación
                      <input type="checkbox" className="permisions_tog input_tog" section="cuenta" id="billing_account" value="1" />
                      <span className="checkmark"></span>
                    </label>

                    <label className="check-container">Equipo
                      <input type="checkbox" className="permisions_tog input_tog" section="cuenta" id="team_account" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
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