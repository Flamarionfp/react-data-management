import React, { useContext } from 'react'
import Card from './Card'
import { AppContext } from '../contexts/AppContext'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = useContext(AppContext)
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