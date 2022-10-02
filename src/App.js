import './App.css';
import Card from './components/Card';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import Header from './components/Header';
import { useState } from 'react'

function App() {
  const [Add, setAdd] = useState(false)
  const [tasks,setTasks] = useState([])
  const [singleTask , setSingleTask] = useState('')
  const [singleDes , setSingleDes] = useState('')

  const handleSingleTask =(e)=>{
    setSingleTask(e.target.value)
  }

  const handleSingleDes =(e)=>{
    setSingleDes(e.target.value)
  }

  const handleInput = ()=>{
    setAdd(!Add)
  }

  const addToCart = ()=>{
    const id = tasks.length===0?1:tasks.length+1
    const TasksDetails = {
      id:id,
      task:singleTask,
      des:singleDes,
      complete:false
    }
    setTasks([...tasks,TasksDetails])
  }

  const deleteTask =(id)=>{
    setTasks(
      tasks.filter((i)=>(
        i.id===id?false:true
      ))
    )
  }

  const clearInput =()=>{
    setSingleTask('')
    setSingleDes('')
  }

  const updateTask =(id)=>{
    setTasks(
      tasks.map((i)=>(
        i.id===id? {...i,complete:true}:i
      ))
    )
  }

  return (
    <div className="main">
      <div className="inputSection">
         <Header handleInput={handleInput} />
         {Add === true ? 
          <>
            <CustomInput value={singleTask} task='Task' placeholder='Enter your Task' change={handleSingleTask} />
            <CustomInput value={singleDes} task='Description' placeholder='Enter Description' change={handleSingleDes} />
            <div className='btngap'>
             <CustomButton name='Save Task' bgcolor='#00BFFF' color='white' click={addToCart} />
             <CustomButton name='Cancel' bgcolor='red' color='white' click={clearInput} />
            </div>
          </> : null
        }
      </div>
      <div className="cardSection">
        {
          tasks.map((t)=>(
            <Card title={t.task} des={t.des} id={t.id} key={t.id} delete={()=>deleteTask(t.id)} complete={t.complete} update={()=>updateTask(t.id)} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
