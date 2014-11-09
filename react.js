var DOM = React.DOM;

function sum(values) {
	return _.reduce(values, function(sum, n) { return sum + n; }, 0);
}

var App = React.createClass({
	
	displayName: "App",
	
	getInitialState: function() {
		return { values: [] };
	},

	generate: function(evt) {
		var values = this.state.values.concat(_.random(0, 100));
		this.setState({ values: values });
	},

	explode: function () {
		var values = _.range(0, 25).map(function (i) { return _.random(0, 100); })
		this.setState({values: values});
	},

	sum: function () { 
		return (_.isEmpty(this.state.values)) ? 0 : sum(this.state.values); 
	},

	average: function () { 
		return (_.isEmpty(this.state.values)) ? 0 : sum(this.state.values) / this.state.values.length; 
	},

	render: function() {
		return DOM.div({},
			DOM.button({ onClick: this.generate }, "Generate"),
			DOM.button({ onClick: this.explode }, "Boom"),
			this.renderLabel("sum", this.sum),
			this.renderLabel("avg", this.average),
			this.renderList()
			);
	},

	renderLabel: function(label, getValue) {
		return DOM.h3({}, label + " ", DOM.span({}, getValue()));
	},

	renderList: function() {
		var values = this.state.values;
		return DOM.ul({}, _.map(values, 
			function(value, index) { 
				return DOM.li({ key: index }, value);
		}));
	}
});

var el = React.createElement(App, null);

React.render(
 	el,
 	document.getElementById('content')
);
