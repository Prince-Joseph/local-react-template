const {useState} = React;

function App(){
    const [prince, setPrince] = useState(0)

    const lal = () =>{ setPrince(prince+1)}
    return (<div>
        <button onClick={()=>lal()}>{prince}</button>
        <h1>From React</h1>
        <Temp/>
    </div>);
}