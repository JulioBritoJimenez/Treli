function FormDirFacturacion() {
  return (
    <div className="editar_direccion_wrap">
      <div className="flex">
        <input type="text" id="lnombre" name="lnombre" placeholder="Nombre" />
        <input type="text" id="lapellido" name="lapellido" placeholder="Apellido" />
      </div>
      <div className="flex">
        <input type="number" id="cedula" name="cedula" placeholder="Identificación" />
        <input type="text" id="telefono" name="telefono" placeholder="Teléfono" />
      </div>
      <input type="text" id="ldireccionuno" name="ldireccionuno" placeholder="Dirección" />
      <input type="text" id="ldirecciondos" name="ldirecciondos" placeholder="Apartamento, casa, etc. (opcional)" />
      <select name="lpais" id="lpais">
			  <option value="0">Seleccionar país</option>
        <option value="CO">Colombia</option>
      </select>
        <select name="lstate" id="lstate">
			    <option value="0">Seleccionar estado/departamento</option>
          <option value="ATL">Atlántico</option>
        </select>
        <select name="lcity" id="lcity">
          <option value="barranquilla">Barranquilla</option>
        </select>
        <input type="text" id="lzip" name="lzip" placeholder="Código postal" />
        <button type="submit" className="guardar_dir_edit_subs_bill boton-violeta botones">Guardar</button>
    </div>
  )
}

export default FormDirFacturacion;