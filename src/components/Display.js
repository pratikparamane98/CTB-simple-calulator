import React,{useState} from 'react'
import '../components/Display.css'

const Display = () => {
    const [input, setinput] = useState("")
    var invert = true;
    var evaluate

    const handleClick = (event) =>{
        if(invert == true){
            var evaluate = input.concat(event.target.name)
            // evaluate = -Math.abs(evaluate)
            console.log(typeof(evaluate))
            console.log(evaluate)
            setinput(evaluate)
            if(event.target.name !== "+") {
                if(event.target.name !== "-"){
                    if(event.target.name != "*"){
                        if(event.target.name != "/"){
                             if(evaluate.length > evaluate.length - 1){
                                setinput(eval(evaluate).toString())
                             }
           
                        }
                    }          }
             }
        // }else 
        // if(invert == false){
        //     const str = "-"
        //     var temp = str.concat(input.concat(event.target.name))
        //     var num = parseInt(temp)
        //     // num = num * Math.sign(num)
        //     num = -num
        //     console.log(typeof(parseInt(temp)))
        //     console.log(parseInt(temp))
        //     evaluate = num;
            // evaluate = temp.concat(str)
            // setinput(evaluate)
            // if(event.target.value!=="-"){
                
            //     //  evaluate =(input.concat(event.target.name)).concat(str)
            //     evaluate = temp
                
              
            //     setinput(evaluate)
            // }
        }
        









       
    
    }

    const clear=(e)=>{
        setinput('');
    }

    const backspace = (e) =>{
        setinput(input.slice(0,input.length - 1))
    }

    const calculate = (e) =>{
        setinput(eval(input).toString())
    }

    const squareRoot = (e) =>{
        setinput(Math.sqrt(input))
        
    }

    const square  = (e) =>{
        setinput(input*input)
    }

    const makeInvert = (e) =>{
        invert = false;
    }
    return (
        <div className="container">
            <h1>Calculator</h1>
            <form>
                <div className="form-group">
                    <input value={input} autoComplete="off" placeholder="0" className="form-control"></input>
                    {/* <input name="title" autoComplete="off" placeholder="do the calculation" className="form-control"></input> */}
                </div>
            </form> 
            <div>
                <div>
                <button onClick={handleClick} name = "1">1</button>
                <button onClick={handleClick} name = "2">2</button>
                <button onClick={handleClick} name = "3">3</button>
                <button onClick={handleClick} name = "+">Addition</button>
                </div>   
                <div> 
                <button onClick={handleClick} name = "4">4</button>
                <button onClick={handleClick} name = "5">5</button>
                <button onClick={handleClick} name = "6">6</button>
                <button onClick={handleClick} name = "-">subtract</button>
                </div><div>
                <button onClick={handleClick} name = "7">7</button>
                <button onClick={handleClick} name = "8">8</button>
                <button onClick={handleClick} name = "9">9</button>
                <button onClick={handleClick} name = "*">Multiply</button>
                </div><div>
                <button onClick={handleClick} name = "0">0</button>
                <button onClick={calculate} >=</button>
                <button onClick={backspace} >C</button>
                <button onClick={handleClick} name = "/">Divide</button>


                </div>
                <div>
                <button onClick={clear} >clear</button>
                
                <button onClick={square} >sqr</button>
                <button onClick={squareRoot}>Sqrt</button>
                <button onClick={makeInvert}>invert</button>
                </div>

            </div>  

            
        </div>
    )
}


export default Display;