import  { useState } from 'react';
import Create from './components/create/create.jsx';
import View from './components/view/view.jsx';
import "./App.css";


function App() {
  const [page, setPage] = useState("home");
  const [thoughts,setThoughts]=useState([]);


  // const addThought =(newThoght)=>{
  //   setThoghts(newThoght);
  //   setThoghts([...thoughts,newThoght]);
  // }
  // const addThought = (newThought) => {
  //   setThoughts(prevThoughts => [...prevThoughts, newThought]);
  // };
  const addThought = (newThought) => {
    setThoughts(prevThoughts => {
      const updatedThoughts = [...prevThoughts, newThought];
      console.log(updatedThoughts);  // Check if the array is updated
      return updatedThoughts;
    });
  };

  const editThought = (index) => {
    const newThought = prompt("Edit your thought", thoughts[index]);
    if (newThought) {
      let updatedThoughts = [...thoughts];
      updatedThoughts[index] = newThought;
      setThoughts(updatedThoughts);
    }
  };

  const deleteThought = (index) => {
    let updatedThoughts = thoughts.filter((_, i) => i !== index);
    setThoughts(updatedThoughts);
  };
  
  

  return (
    <div className='container'>
      <h1>welcome to the thought app</h1>
          {page== 'home' && (
            <div className="home">
              <h1> this is the home page</h1>
              <button className='btn' onClick={()=>setPage('create')}> create</button>
              <button className='btn' onClick={()=>setPage('view')}> view</button>
            </div>
          )}
          {page=='create' && (
            <Create addThought={addThought} goHome={()=>setPage('home')} />
          )}
          {page == 'view' && (
            <View thoughts={thoughts} goHome={()=>setPage('home')} editThought={editThought} deleteThought={deleteThought}  />
          )}
    </div>
  )
}

export default App;
