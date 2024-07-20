import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";


  
    

export default function Home() {
  const tasks = [
      {id: 1,title:"Read a book",isDone:true},
      {id: 2,title:"Take a shower",isDone:false},
      {id: 3 ,title:"Sleep",isDone:false},
    ];

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      
      <Header/>



      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        {/* task */}
        <Task id= {tasks[0].id} title={tasks[0].title} isDone={tasks[0].isDone}/>
        <Task id= {tasks[1].id} title={tasks[1].title} isDone={tasks[1].isDone}/>
        <Task id= {tasks[2].id} title={tasks[2].title} isDone={tasks[2].isDone}/>
        
        {/* task */}
        
        {/* task */}
        
      </div>

      {/* //footer section */}
      <Footer year="2024" name="Punnatat Ngirnngam" studentId= "660610775"/>
      
    </div>
  );
}

