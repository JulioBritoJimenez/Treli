function Step({ titulo, texto, btnUrl, btnTexto, aprendeMas }) {

  return (
    <div className="get-started_step">
      <label className="check-container">
        <span className="check-container-text">
          <span className="check-container-text_title">{titulo}</span>
          <span className="check-container-text_text">{texto} <a href="/account" target="_blank" className="aprendemas">{aprendeMas}</a></span>
          <a href={`${btnUrl}`} className="but-purp-style boton-border" target="_blank">{btnTexto}</a>
        </span>
        <input type="checkbox" className="stepsinput" id="settings" name="settings" value="1"></input>
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default Step;