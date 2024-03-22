
import './App.css';
import { useState } from 'react'
const initialState = {
  name : '',
  city: ''
}

function App() {
  const [toggleText, setToggleText] = useState(initialState);
  console.log(toggleText);

  function handleToggleText(){
    setToggleText(!toggleText);
  }

    const [formData, setFormData] = useState(initialState);

  function handleNameChange(event){
     setFormData({
      ...formData, 
      name: event.target.value,
     
     })
  }
  function handleCityChange(event){
    setFormData({
      ...formData, 
      city: event.target.value,
     
     })
  }

  console.log(formData);


  return (
   <>
    <div className='App'>
    <h1>Usestate Hook</h1>
    <div>
    {toggleText? <p>Hello World</p> : null}

      <p>Hello World</p>
      <button onClick={handleToggleText}>Toggle Text</button>
    </div>

    <div>
      <input onChange= {(event)=>{
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }} type="text" name='name' placeholder='Enter Name'/>

      <select onChange= {(event)=>{
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }} name="city">
        <option value={""} id="">
          Select City
        </option>
        <option value={"bangaluru"} id="bengaluru">
          Bengaluru
        </option>
        <option value={"Mumbai"} id="Mumbai">
          Mumbai
        </option>
      </select>
        <div>
          <p> Name is {formData.name}</p>
          <p>   city is {formData.city}</p>
        
        </div>
    </div>
    </div>
   </>
      
  );
}

export default App;
