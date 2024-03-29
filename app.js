function sum(values) {
	return _.reduce(values, function(sum, n) { return sum + n; }, 0);
}

var count = 0;
var values = [];
var avgs = [];

$("#sum").text("0");
$("#avg").text("0");

$("#btn").on("click", function() {
	var n = _.random(0, 100);
	values.push(n);
	count++;

	$("#list").prepend("<li>" + n + "</li>");

	var sum1 = parseInt($("#sum").text()) + n;
	$("#sum").text(sum1);

	var avg = sum1 / count;
	$("#avg").text(avg);
	avgs.push(avg);

	var sum2 = sum(values);

	console.log(
		"Sum", sum2, 
		"Length", values.length, 
		"Avg", sum2 / values.length);

	if (_.isEmpty(avgs) === false) {
		$("#line").empty();
		sparky.sparkline("line", avgs, {width: 1000, height: 50});
	}
});


