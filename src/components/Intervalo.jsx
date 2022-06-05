import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const dispatch = useDispatch(useDispatch)
  const { min, max } = useSelector((state: any) => state.app);

  function handleChangeMin(event) {
    dispatch({
      type: 'app/updateMin',
      payload: +event.target.value,
    });
  }

  function handleChangeMax(event) {
    dispatch({
      type: 'app/updateMax',
      payload: +event.target.value,
    });
  }

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