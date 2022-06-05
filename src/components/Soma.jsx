import React, { useContext } from 'react'
import Card from './Card'
import { AppContext } from '../contexts/AppContext'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = useContext(AppContext)
  return (
    <Card title="Soma dos números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card >
  )
}