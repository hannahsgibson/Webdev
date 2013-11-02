	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 
	var firstName = prompt("What is your first name?");
	var surname = prompt("What is your surname?");

	//Create a new variable called full name and store the users full name.
	var fullName = firstName + " " + surname;

	
	//Print the full name to the console.
	console.log(fullName);	

	//Prompt the user for their age.
	var age = prompt("What is your age?");

	//Add 10 to the age and print the output to the console.
	var newAge = parseInt(age) + 10;
	console.log(newAge);
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.
	if(parseInt(age) >= 18)
	{
		console.log("adult");
	} 
	else
	{
		console.log("minor");
	}


	//Verify if the first name is "General" and the last name is NOT "Assembly"
	if(firstName === "General" && surname != "Assembly")
	{
		console.log("The conditions are met");
	}
	else
	{
		console.log("The conditions are not met");
	}
