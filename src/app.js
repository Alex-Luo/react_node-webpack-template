import React from 'react';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "Hello World "
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray});
    }

    render() {
        var myStyle = {
            fontsize: 100,
            color: '#F0F0F0'
        }
            return (
            <div>
                <button onClick = {this.setStateHandler}>Push Me!</button>
                <h1 style={myStyle}>Welcome</h1>
                <h4>Hey: {this.state.data}</h4>         
            </div>
            );
    }
}
export default App;
