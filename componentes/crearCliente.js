function CrearCliente() {
  return (
    <>
      <h4>Dirección de facturación</h4>
      <input type="hidden" name="customer-id" id="customer-id"></input>
      <div className="input">
        <input type="text" id="email" name="email" placeholder="Email" />
      </div>
      <div className="flex input">
        <input type="text" id="lnombre" name="lnombre" placeholder="Nombre" />
        <input type="text" id="lapellido" name="lapellido" placeholder="Apellido" />
      </div>
      <div className="flex input">
        <input type="number" id="cedula" name="cedula" placeholder="Cédula" />
        <input type="number" id="telefono" name="telefono" placeholder="Teléfono" />
      </div>
      <div className="input">
        <input type="text" id="ldireccionuno" name="ldireccionuno" placeholder="Dirección" />
      </div>
      <div className="input">
        <input type="text" id="ldirecciondos" name="ldirecciondos" placeholder="Apartamento, casa, etc. (opcional)" />
      </div>
      <div className="flex input">
        <select name="lpais" id="lpais">
          <option value="0">Seleccionar un país</option>
          <option value="CO">Colombia</option>
        </select>
          <select name="lstate" id="lstate">
            <option value="0">Seleccionar departamento</option>
            <option value="ATL">Atlántico</option>
          </select>
      </div>
      <div className="flex input">
        <input type="text" id="lcity" name="lcity" placeholder="Ciudad" />
        <input type="text" id="lzip" name="lzip" placeholder="Código postal" />
      </div>
      <div className="input">
        <input type="text" id="lcompany" name="lcompany" placeholder="Compañía (opcional)" />
      </div>
    </>
  )
}

export default CrearCliente;