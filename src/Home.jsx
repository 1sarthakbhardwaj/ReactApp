const Home = () => {

    const handleClick = () => {
        console.log('clicked');
    }

    const handleDClick = (name, e) => {
        console.log('I am '+ name, e.target);
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onDoubleClick= {(e) => handleDClick('sujju', e)}>Double Click Me</button>
        </div>
     );
}
 
export default Home;