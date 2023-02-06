function NotasdePago({noteContent, noteItem}) {
  return (
    <div className="note-item">
      <p className="note-content">{noteContent}</p>
      <p className="note-time">{noteItem}</p>
    </div>
  )
}

export default NotasdePago;