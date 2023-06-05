const App=()=>{
    const clickHandle=()=>{
        console.log("Hello world");
    };
    return (<main className="container">
        <button className="button" onClick={clickHandle}>click me</button>
    </main>);

};
export default App;