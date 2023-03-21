import { useState } from "react";

const Home = () => {
    // let name = 'sujan';
   const[name, setName] = useState('Suja');
   const[age, setAge] = useState(18);

    const handleClick = () => {
       setName('Suju bhai')
       setAge(20);
    }

    const handleDClick = () => {
        setName('Suja');
        setAge(81);
     }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <h3>{name} is {age} years old</h3>
            <button onClick={handleClick} onDoubleClick = {handleDClick}>Click Me</button>
        </div>
     );
}
 
export default Home;