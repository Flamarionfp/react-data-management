import React from 'react'
import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = props
  const randomNumber = parseInt(Math.random() * (max - min) + min)
  return (
    <Card title="Sorteio de um número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{randomNumber}</strong>
        </span>
      </div>
    </Card >
  )
}