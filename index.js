let express = require("express");
let app = express();
let port = 8000;

// Question 1: Body Mass Index (BMI) Calculator Calculate the BMI given weight (kilograms) and height(meters)
app.get("/bmi", (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);

  let bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

// Question 2: Calculate grocery checkout price
app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let price = parseFloat(req.query.price);
  let units = parseInt(req.query.units);

  let totalPrice = (price * units);
  res.send("Your total for " + units + " " + product + " is " +totalPrice);
});

// Calculate grade percentage
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);

  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  res.send("Your grade in Percentage is " + gradeInPercentage + "%");
});

// Question 4: Return bill amount after applying discount
app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);

  let discountedPrice = cartTotal - cartTotal * (discount / 100);
  res.send("Result: Your bill amount bis " + discountedPrice.toString());
});

// Question 5: Split bill among friends
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);

  let splitAmount = billAmount / numberOfFriends;
  res.send("Result: Each friend owes Rs. " + splitAmount + " Against the bill");
});

// Question 6: Convert Celsius to Fahrenheit
app.get("/celsius-to-fahrenheit", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let fahrenheit = (temperature * 9) / 5 + 32;
  res.send("Result: " + fahrenheit + " fahrenheit");
});

// Question 7: Calculate monthly salary
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);

  let monthlySalary = hourlyWage * totalHours;
  res.send("Result: Your monthly salary is ₹" + monthlySalary);
});

// server start here
app.listen(port, () => {
  console.log("server is running on the port number " + port);
});
