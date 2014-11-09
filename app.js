function make_li(n) {
	return "<li>" + n + "</li>";
}

$("#btn").on("click", function() {
	var n = _.random(0, 100);
	$("#list").prepend(make_li(n));
});


