import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = useSelector((state: any) => state.app);
  return (
    <Card title="Média dos números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card >
  )
}