import React from 'react'
import "./Home.css"
import Card from '../card/Card';
import { Link } from "react-router-dom"
import { tasks } from '../../constants';

const Home = () => {
  
  return (
    <div className="home">
     {tasks.map((task, index) => 
  <Link
  to={`/${task.path}`}
  className="link-desktop"
>
  <Card key={index} title={task.title} />
</Link>
)}
    </div>
  )
}

export default Home