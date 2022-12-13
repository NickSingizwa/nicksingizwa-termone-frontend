import { useState } from 'react'
import '../styles/calc.scss'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Calc() {
    const [firstop,setFirst] = useState("")
    const [secondop,setSecond] = useState("")
    const [operation,setOperation] = useState("+")
    const [result,setResult] = useState("")
  
    const handleFirstOp= (e) => {
      setFirst(e.target.value)
      console.log(firstop,"first")
    }
    const handleSecondOp= (e) => {
      setSecond(e.target.value)
      console.log(secondop,"second")
    }
    const handleOperation= (e) => {
      setOperation(e.target.value)
      console.log(operation,"opp")
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log("reached")
        if(firstop != "" && secondop != "" && operation != ""){
          axios.post('localhost:5000/api/math',{
            operand1: firstop,
            operand2: secondop,
            operation: operation,
          }).then((res)=>{
            console.log(res.data.data, "my result")
            setResult(res.data.data)
          }).catch(err=>console.log(err,"error"))
    
        }else{
          toast("Some fields are empty",{
            position: "top-right",
            hideProgressBar : true,
            // theme: "dark",
            type: "error",
            closeOnClick: true,
          });
        }
      }

  return (
    <div className="calc">
        <ToastContainer />
      <h1>Nick's Calc</h1>
      <div className='maths'>
        <h3>Do Some Maths</h3>
        <form>
          <input type="number" className='firstop' name='firstop' placeholder='First Operand' onChange={handleFirstOp}/>
          <select defaultValue={operation} className='operation' name='operation' placeholder='operation' onChange={handleOperation}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="**">**</option>
            <option value="log">log</option>
            <option value="ln">ln</option>
          </select>
          <input type="number" className='secondop' name='secondop' placeholder='Second Operand' onChange={handleSecondOp}/>
          <button type="submit" onClick={(e) => submitForm(e)} disabled={firstop == '' || secondop == '' || operation == ''}>See Results</button>
        </form>
      </div>
        {/* <div className="results">8</div> */}
        <div className="results">{result}</div>
    </div>
  )
}

export default Calc
