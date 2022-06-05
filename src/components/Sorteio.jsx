import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = useSelector((state: any) => state.app);
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