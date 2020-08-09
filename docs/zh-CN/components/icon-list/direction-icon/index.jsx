import React from 'react'
import Icon from '../../../../../components/icon'
import { outlined } from './config'

const Direction = () => {
  return (
    <div className='hi-icon-list'>
      <h3>方向</h3>
      <ul className='hi-icon-list'>
        {outlined.map((icon, idx) => (
          <li key={idx}>
            <Icon name={icon.name} />
            <span className='hi-icon-name'>{icon.name}</span>
            <span className='hi-icon-cname'>{icon.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Direction