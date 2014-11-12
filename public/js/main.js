
function hideElements(){
	elements = document.querySelectorAll("#container div");
	nodes = elements.childNodes;

	for (var i = 0; i < nodes.length; i++) {
		Console.log(i);
	};
}