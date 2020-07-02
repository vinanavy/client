import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {apiResponse:""};
	}

	callAPI() {
    fetch("http://localhost:8080/index")
		  .then(res => res.text())
		  .then(res => this.setState({apiResponse: res}));
	}

	componentWillMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="App">
        <BrowserRouter>
          <div>
            <div className="header">
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
              <NavLink exact activeClassName="active" to="/login">Home</NavLink>
            </div>
          </div>
        </BrowserRouter>
			</div>
		);
	};
}

export default App;
