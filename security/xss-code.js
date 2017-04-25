var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
for (var i=0; i<10000; i++){
	$.post("https://dry-journey-64231.herokuapp.com/submit", 
	{
		username: i,
		lat: i,
		lng: i
	});
}