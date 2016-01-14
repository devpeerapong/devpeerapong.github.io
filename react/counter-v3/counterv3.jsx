import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);	

		this.state = {
			counter: [{
				id: 0,
				count: 0
			}]
		};

		this.addCounter = this.addCounter.bind(this);
		this.removeCounter = this.removeCounter.bind(this);
		this.removeCounterByIndex = this.removeCounterByIndex.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	addCounter() {
		var newState = this.state;
		newState.counter.push({ id: this.state.counter.length, count: 0 });
		this.setState(newState);
	}

	removeCounter() {
		var newState = this.state;
		newState.counter.splice(newState.counter.length - 1, 1);
		this.setState(newState);
	}

	removeCounterByIndex(index) {
		var newState = this.state;
		newState.counter.splice(index, 1);
		this.setState(newState);
	}

	increment(index) {
		var newState = this.state;
		for(var i = 0; i < newState.counter.length; i++) {
			if(newState.counter[i].id === index) {
				newState.counter[i].count = newState.counter[i].count + 1;
				break;
			}
		}
		this.setState(newState);
	}

	decrement(index) {
		var newState = this.state;
		for(var i = 0; i < newState.counter.length; i++) {
			if(newState.counter[i].id === index) {
				newState.counter[i].count = newState.counter[i].count - 1;
				break;
			}
		}
		this.setState(newState);
	}

	render() {
		return (
			<div className="container text-center">
				<AddCounterButton onClick={this.addCounter} />
				<RemoveCounterButton onClick={this.removeCounter} />
				{ this.state.counter.map( (count) => {
					return <Counter 
					key={count.id}
					index={count.id}
					count={count.count} 
					increment={this.increment} 
					decrement={this.decrement}
					remove={this.removeCounterByIndex} />
				}) }
			</div>
		);
	}

}

class AddCounterButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var btnStyle = {
				width: '300px',
				marginRight: '5px'
			};

		return (
			<button className="btn btn-info" style={btnStyle} onClick={this.props.onClick}>+ Counter</button>
		)
	}
}

class RemoveCounterButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var btnStyle = {
				width: '300px',
				marginLeft: '5px'
			};

		return (
			<button className="btn btn-warning" style={btnStyle} onClick={this.props.onClick}>- Counter</button>
		)
	}
}

class Counter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<CounterNumber index={this.props.index} onClick={this.props.remove} count={this.props.count} />
				<IncrementButton index={this.props.index} onClick={this.props.increment}/>
				<DecrementButton index={this.props.index} onClick={this.props.decrement}/>
			</div>
		)
	}
}

class CounterNumber extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Counter v3 App <button className="btn btn-danger pull-right" onClick={this.props.onClick.bind(this, this.props.index)}>X</button></h1>
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
			<button className="btn btn-primary" style={btnStyle} onClick={this.props.onClick.bind(this, this.props.index)}>+</button>
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
			<button className="btn btn-danger" style={btnStyle} onClick={this.props.onClick.bind(this, this.props.index)}>-</button>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));