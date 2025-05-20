import React, {useContext, useEffect} from 'react';
import "./Header.css";
import { TaskContext } from '../../utils/TaskContext';
import { useLocation } from "react-router-dom"

const Header = () => {
  const { selectedTask, setSelectedTask } = useContext(TaskContext)
  const location = useLocation()

  //Use useEffect when something should happen because the component rendered or updated, not because the user did something directly.
  useEffect(() => {
    if(location.pathname == '/')
      setSelectedTask(null)
  }, [location, setSelectedTask]) //This is the dependency array, which tells React: "Run this useEffect only when either location changes (i.e., the route changes), or setSelectedTask updates."
  return (
    <div className="header">
      {selectedTask ? selectedTask : "React Task Gallery"}
    </div>
  );
};

export default Header;
