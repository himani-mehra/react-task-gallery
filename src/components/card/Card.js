import React, { useContext } from 'react'
import "./Card.css";
import { TaskContext } from '../../utils/TaskContext';

const Card = ({title}) => {
  const { setSelectedTask } = useContext(TaskContext)

  const handleTaskClick = () => {
    setSelectedTask(title)
  }
  return (
    <div onClick={handleTaskClick} className='card'>{title}</div>
  )
}

export default Card