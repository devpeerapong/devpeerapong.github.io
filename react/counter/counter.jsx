import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}


	increment() {
		this.setState({ counter: this.state.counter + 1 });
	}

	decrement() {
		this.setState({ counter: this.state.counter - 1 });
	}

	render() {
		return (
			<div className="container text-center">
				<CounterNumber count={this.state.counter} />
				<IncrementButton onClick={this.increment}/>
				<DecrementButton onClick={this.decrement}/>
			</div>
		);
	}

}

class CounterNumber extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Counter App</h1>
				<h3>Counter: {this.props.count}</h3>
				<hr/>
			</div>
		);
	}
}

class IncrementButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var btnStyle = {
				width: '300px',
				marginRight: '5px'
			};

		return (
			<button className="btn btn-primary" style={btnStyle} onClick={this.props.onClick}>+</button>
		)
	}
}

class DecrementButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var btnStyle = {
				width: '300px',
				marginLeft: '5px'
			};
		return (
			<button className="btn btn-danger" style={btnStyle} onClick={this.props.onClick}>-</button>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));