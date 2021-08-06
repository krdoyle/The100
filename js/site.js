//get values from the page (controller)
function getValues() {
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers (validate the input)
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter Integers");
    }
}

//generate numbers from start value to the end value (logic)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //get all numbers from start to end
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }
    return numbers;

}

//display numbers and mark the even numbers bold (display/view)
function displayNumbers(numbers) {

    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {

        let className = "even";
        let number = numbers[i];
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;
}