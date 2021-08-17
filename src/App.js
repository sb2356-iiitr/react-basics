import './App.css';
// Import useState from react
import { useState } from 'react';
// Import a component
import Primarybtn from './Primarybtn.js'
import Maininput from "./Maininput.js";

// Old Convention
// function App() {
//   let a = 3, b = 4;
//   //Keep notes #5
//   return (
//     <div className="App">
//       {a+b}  
//     </div>
//   );
// }

// New Convention (ES6 onwards)
const App = () => {
    const [name, setName] = useState("")
    // a is a variable, seta is the way we will change the variable
    // inside the useState braces, we give an initial value
    return(
      <div>
        <Maininput setName={setName}/>
        {
          //Conditional rendering
          name === 'go'? 
          (<Primarybtn fullname="go"/>) :
          (<Primarybtn fullname="submit"/>)
        }
        
        {/* {name} */}
        
      </div>
    )
}


export default App;
