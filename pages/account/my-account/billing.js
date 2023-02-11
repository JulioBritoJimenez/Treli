import Layout from "../../../componentes/layout";
import Link from 'next/link';

function Billing() {
  return(
    <>
      <Layout>
        <h2 className="margin-bottom">Facturación</h2>
        <div className="settings-head my-account-container status-filter">
          <Link href="/account/my-account/" className="settings-head-item">General</Link>
          <Link href="/account/my-account/billing" className="settings-head-item plist-activestyle">Facturación</Link>
        </div>
      </Layout>
    </>
  )
}

export default Billing;