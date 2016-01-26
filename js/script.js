/*
 * Problem 1
 * -------------------------------------------------------------------
 * Make a function called "calculateMoonWeight" that:
 *   - takes a single input parameter
 *   - returns the equivalent weight on the moon (17% of earth weight)
 */       var x = earthWeight 
          var y = MoonWeight
          // when x = 1, y = .17
          
function calculateMoonWeight(earthWeight,MoonWeight){
   document.getElementById(calculateMoonWeight); 
     
}




/*
 * Problem 2
 * -------------------------------------------------------------------
 * Make a function called "calculateDogHumanAge" that:
 *   - takes a single input parameter (that might be a decimal)
 *   - returns the human age
 *
 * For the first two years, a dog year is equal to 10.5 human years.
 * After that, each dog year equals 4 human years.
 * FYI: This calculation is based on studies that indicate dogs, except maybe
 *      larger breeds, develop more quickly in the first two years of life.
 */             var x =dogAge
                var y = humanAge 
             // When x = 5.25, y = 1.05
            
function calculateDogHumanAge(dogAge,humanAge){
    if('Dogyear=2*HumanAge'){
        
    }
    return humanAge;
}



/*
 * Problem 3
 * -------------------------------------------------------------------
 * Make a function called "calculate" that:
 *   - takes two numbers as input parameters and a string operator
 *   - returns the result of the calculation using the operator on the numbers
 *
 * For example:
 *   - if the operator is "+" and the numbers 2 and 5, then return 7
 *   - if the operator is "*" and the numbers 2 and 5, then return 10
 */     var x = 5
        var y = 2
function calculate(2,5,){
   if(operator = "+"){
       document.getElementById(calculate);
       
   }
    else if(operator="*"){
        
           document.getElementById(calculate);
    }
                       }




/*
 * Problem 4
 * -------------------------------------------------------------------
 * Make a function that:
 *   - takes a single input parameter of a word
 *   - returns the number of characters it contains (it's length)
 *
 * Note the reading shows how to get the length of a string.
 */     var string = 'marvelous'; 
function strLenght('marvelous'){
    document.getElementById('str.Lenght');
}

/*
 * Problem 4 setup
 * -------------------------------------------------------------------
 * Look at the examples below (in the DO NOT MODIFY)
 * Follow their example, and modify it to complete this setup code
 */
// Clear result field on input focus
document.getElementById("string").addEventListener("focus", function(){
    // Get the length form field and clear out the value

});

// Setup button click to call function and update output field
document.getElementById("submit4").addEventListener("click", function(){
    //Log a message for your function


    // Get the input value from the form & log the value


    // Call your function that you defined above and pass in the input value
    // Save the returned value as a variable


    // Use the variable to set the output form field value & log the result to the console


});


/**********************************************
 * DO NOT MODIFY THE CODE BELOW
 *
 * But do look at it to see what it is doing.
 *
 **********************************************/
assignmentName = "HW2 - Logic & Functions"
console.log( assignmentName );
console.log();

// Problem 1 setup
//-----------------------------------
// Clear result field on input focus
document.getElementById("weight").addEventListener("focus", function(){
    document.getElementById("moon-weight").value = "";
});

// Setup button click to call function and update output field
document.getElementById("submit1").addEventListener("click", function(){
    console.log( "Calculating Moon Weight" );

    // Get input value
    var earthWeight = document.getElementById("weight").value;
    console.log( "Earth Weight = " + earthWeight );

    // Write output value
    var moonWeight = calculateMoonWeight(earthWeight);
    console.log( "Moon Weight = " + moonWeight );
    document.getElementById("moon-weight").value = moonWeight;
});


// Problem 2 setup
//-----------------------------------
// Clear result field on input focus
document.getElementById("dog-age").addEventListener("focus", function(){
    document.getElementById("human-age").value = "";
});

// Setup button click to call function and update output field
document.getElementById("submit2").addEventListener("click", function(){
    console.log( "Calculating Dog's Human Age" );

    // Get input value
    var dogAge = document.getElementById("dog-age").value;
    console.log( "Dog's Age = " + dogAge );

    // Write output value
    var humanAge = calculateDogHumanAge(dogAge);
    console.log( "Human Age = " + humanAge );
    document.getElementById("human-age").value = humanAge;
});


// Problem 3 setup
//-----------------------------------
// Clear result field on input focus
document.getElementById("number1").addEventListener("focus", function(){
    document.getElementById("result").value = "";
});
document.getElementById("number2").addEventListener("focus", function(){
    document.getElementById("result").value = "";
});
document.getElementById("operator").addEventListener("focus", function(){
    document.getElementById("result").value = "";
});

// Setup button click to call function and update output field
document.getElementById("submit3").addEventListener("click", function(){
    console.log( "Mini Calculator" );

    // Get input values - Must convert string number to int numbers for math
    var number1 = parseInt(document.getElementById("number1").value, 10);
    var number2 = parseInt(document.getElementById("number2").value, 10);
    var operator = document.getElementById("operator").value;

    // Write output value
    var result = calculate(number1, number2, operator);
    console.log( "Expression: " + number1 + operator + number2 + "=" + result);
    document.getElementById("result").value = result;
});
