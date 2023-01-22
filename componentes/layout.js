import Header from "./header";
import Sidebar from "./sidebar";


function Layout({ children }) {
  return (
    <div className="maccount-container">
      <Header />
      <div className="macc-body">
        <Sidebar />
        <div className="macc-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;