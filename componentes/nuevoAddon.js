function NuevoAddon() {
  return (
    <div className="plan-container">
      <p className="app-input input">
        <span className="acc-label">Frecuencia</span>
        <select className="space-r interval" name="interval[]">
          <option value="1">Cada 1</option>
          <option value="2">Cada 2</option>
          <option value="3">Cada 3</option>
          <option value="4">Cada 4</option>
          <option value="5">Cada 5</option>
          <option value="6">Cada 6</option>
        </select>
        <select className="period" name="period[]">
          <option value="day">Día</option>
          <option value="week">Semana</option>
          <option value="month">Mes</option>
          <option value="year">Año</option>
        </select>
      </p>
      <p className="app-input input">
        <span className="acc-label">Precio COP</span>
        <input type="number" name="subsprice[]" placeholder="Precio" />
      </p>
    </div>
  )
}

export default NuevoAddon;