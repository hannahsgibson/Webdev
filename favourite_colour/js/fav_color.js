$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 

var color = prompt("What is your favourite colour?");
console.log(color)

if(color === 'blue' || color === 'yellow' || color === 'red' || color === 'green')
{
	$('body').css('background-color', color);
	$('h2').text("Great choice of color!");
}
else
{
	$('h2').text("We don't have that color. Please choose again");
	$('h2').css('color', 'red');
	$('h2').css('font-size', '22px');
}
}
);