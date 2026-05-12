import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState(null);
  const [bmiStatus, setBMIStatus] = useState("");
  const[errormsg, setErrorMsg] = useState("")

  function calculateBMI(){
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
     if(isValidHeight && isValidWeight){
         const heightInMeter = height/100;
         const bmiValue = weight / (heightInMeter * heightInMeter); 
         setBMI(bmiValue.toFixed(2));
         if(bmiValue<18.5){
          setBMIStatus("Under Weight");
         }
         else if(bmiValue>=18.5 && bmiValue<24.9){
          setBMIStatus("Healthy Weight");
         }
         else if(bmiValue>=25 && bmiValue<29.9){
          setBMIStatus("Overweight");
         }
         else{
          setBMIStatus("Obese")
         }
         setErrorMsg("")
     }else{
      setBMI(null);
      setBMIStatus("");
      setErrorMsg("Please enter valid numeric values for height and weight!")
     }
  }

  function clearAll(){
    setHeight("");
    setWeight("");
    setBMI(null);
    setBMIStatus("");
  }

  return (
    <div className='bmi-container'>
      <div className='box'></div>
      <div className='data'>
        <h2>BMI Calculator</h2>
        { errormsg && (<p className='error'>{errormsg}</p>)}
        <div className='input-container'>
          <label htmlFor="height">Height(cm) : </label>
          <input type="text" id="heght" value={height} onChange={
            (e) => setHeight(e.target.value)
          } />
        </div>
        <div className='input-container'>
          <label htmlFor="weight">Weight(Kg) : </label>
          <input type="text" id="weight" value={weight} onChange={
            (e) => setWeight(e.target.value)}/>
        </div>
        <div className='btn-container'>
          <button onClick={calculateBMI}>Calculate</button>
          <button onClick={clearAll}>Clear</button>
        </div>

        {BMI!= null &&(
        <div className='result'>
          <p>Your BMI is : {BMI}</p>
          <p>Status : {bmiStatus}</p>
        </div>)}
      </div>
    </div>
  )
}

export default App
