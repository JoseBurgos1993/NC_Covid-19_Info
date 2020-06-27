$("document").ready(function () {
  // Global Variables
  const queryURL2 = "https://covidtracking.com/api/v1/states/nc/current.json";

  // Run AJAX
  $.ajax({
    url: queryURL2,
    method: "GET",
  }).then(function (response) {
    data2 = response;
    console.log(data2);

    //Proof-of-concept to retreive state totals and differences - updated daily between 4-5PM EST
    let negative = data2.negativeIncrease;
    console.log(negative);
  });
});
