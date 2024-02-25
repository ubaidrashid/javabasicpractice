// Prompt user for age
var age = parseInt(prompt("Please enter your age:"));

// Prompt user for student status
var isStudent = prompt("Are you a student? (yes/no)");

// Initialize ticket price variable
var ticketPrice;

// Check age and student status to determine ticket price
if (age < 12) {
    ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
    if (isStudent === "yes") {
        ticketPrice = 8;
    } else {
        ticketPrice = 10;
    }
} else {
    ticketPrice = 12;
}

// Display ticket price using an alert box
alert("The ticket price is $" + ticketPrice);
