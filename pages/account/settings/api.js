import Layout from "../../../componentes/layout";
import { BsArrowLeftShort, BsEye, BsEyeSlash } from "react-icons/bs";
import Link from 'next/link';
import { useState } from "react";

function Api() {

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const [passwordShow2, setPasswordShow2] = useState(false);
  const togglePassword2 = () => {
    setPasswordShow2(!passwordShow2);
  };

  return (
    <>
      <Layout>
        <div className="account-appe-container settings-dunning settings-ganalytics">
          <div className="order-head-paid">
            <Link href="/account/settings/" className="order-back"><BsArrowLeftShort /></Link>
            <h2>API keys</h2>
          </div>

          <p>Los API Keys se utilizan para la autenticación en la API de Treli cada vez que se realiza una solicitud de API. Tu &quot;secret password&quot; debe permanecer en secreto.</p>

          <div className="order-box-container margin-bottom">
            <div className="order-box api-keys flex">
              <div>
                <h3 className="margin-bottom-15px">Username</h3>
                <p className="app-input input margin-bottom-10px">
                  <input type="text" placeholder="demo" />
                </p>
              </div>
              <div>
                <h3 className="margin-bottom-15px">Production secret password</h3>
                <p className="app-input input">
                  <input type={passwordShow ? "text" : "password"} id="p_api_key" />
                  <span className="toggle-password" onClick={togglePassword}>
                    {passwordShow ? <BsEyeSlash className="pointer" /> : <BsEye className="pointer" />}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="order-box-container margin-bottom">
            <div className="order-box api-keys flex">
              <div>
                <h3 className="margin-bottom-15px">Username</h3>
                <p className="app-input input">
                  <input type="text" placeholder="demo" />
                </p>
              </div>
              <div>
                <h3 className="margin-bottom-15px">Test secret password</h3>
                <p className="app-input input margin-bottom-10px">
                  <input type={passwordShow2 ? "text" : "password"} id="t_api_key" />
                  <span className="toggle-password" onClick={togglePassword2}>
                    {passwordShow2 ? <BsEyeSlash className="pointer" /> : <BsEye className="pointer" />}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Api;