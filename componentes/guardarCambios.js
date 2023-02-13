import Link from 'next/link';

function GuardarCambios() {
  return(
    <div className="save-footer">
      <div className="unsaved strong">Cambios no guardados</div>
      <div className="discard">
        <Link className="botones button-full" href="/account/settings">Descargar</Link>
      </div>
      <div className="save-changes">
        <a className="botones boton-violeta button-full">Guardar</a>
      </div>
    </div>
  )
}

export default GuardarCambios;