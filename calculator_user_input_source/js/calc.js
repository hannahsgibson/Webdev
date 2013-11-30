/* Write the JS neccesary to calculate values after a number is changed inside the form field.

Hints:
1.) Learn about change event methods: http://api.jquery.com/change/
2.) Learn about retrieving values from form inputs: http://api.jquery.com/val/
3.) Learn how to select specific inputs using eq selectors: http://api.jquery.com/eq-selector/

*/

var additiontotal = 0


// $('#addition input').change (funtion() {
// 	console.log('something changed');
// });

// $document.change(function(event){
// 	$("#addition" "input:eq(2)").val();
// 	console.log()

// });



$('#addition input').change (funtion() {
	$document.change(function(event){
		$("#addition" "input:eq(1)").val();
	});
};