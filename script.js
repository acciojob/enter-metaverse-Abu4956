//your JS code here. If required.
const status = document.getElementById("Status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function() {
	status.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});
