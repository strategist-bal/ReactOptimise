import React from 'react';
import './styles.css';

const Title = () => {
    return (<div>
        <h2 className="title-heading">something</h2>
        <h3>this is h3</h3>
    </div>)
}
const App = () => {
    return ((<div>
        <Title/>
            {Title()}
            <Title></Title>
    </div>))
}
export default App;
