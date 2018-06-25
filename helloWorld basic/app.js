
var h1 = React.createElement('h1', null, 'Hello World');
var p = React.createElement('p', null,'A quixk brown foc jumps over the lazy dog');

var content = document.getElementById('content');
ReactDOM.render(
	React.createElement('div', null, h1, p)
	,
	content
);
