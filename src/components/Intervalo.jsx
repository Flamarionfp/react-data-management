import './Intervalo.css'
import React from 'react'
import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max, handleChangeMin, handleChangeMax } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input onChange={handleChangeMin} type="number" value={min} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input onChange={handleChangeMax} type="number" value={max} />
        </span>
      </div>
    </Card >
  )
}