import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import iconoTreli from '../public/icono-treli.png';
import iconoHome from '../public/home.png';
import iconoTienda from '../public/icon-tienda.png';

export default function Header() {

  const router = useRouter();

  return (
    <div className="macc-header">
      <a href="https://treli.co/feedback/" target="_blank" className="feedback">Feedback</a>
      <div className="macc-header-col1">
        <Link href="/account">
          <Image src={iconoTreli} alt="Icono Logo Treli" />
          <span>Treli</span>
        </Link>
      </div>
      <div className="macc-header-col2">
        <div className='app-input test_mode'>
          <span>Modo Test</span>
          <label className='switch'>
            <input type="checkbox" id="super_test_mode" name="super_test_mode" value="1" />
            <span className='slider round'></span>
          </label>
        </div>
        <div className='macc-head_home macc-head_item'>
          <a className='new_head' href='https://treli.co/new' target='_blank'>NEW</a>
        </div>
        <div className='macc-head_home macc-head_item'>
          <Link className='hide_mobile' href='/account'>
            <Image src={iconoHome} title="Home" alt="Icono Home Treli" />
          </Link>
        </div>
        <div className='macc-head_analytics macc-head_item'>
          <Link className='hide_mobile' href='/'>
            <Image src={iconoTienda} title="Tienda" alt="Icono Tienda Treli" />
          </Link>
        </div>
        <div className="macc-head_create">
          <Link href="/account/products/add-product/" className="create-butt">Crear +</Link>
        </div>
      </div>
    </div>
  )
}