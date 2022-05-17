function myFunction() {
  var count = 0;
  var text;
  var quizResult;
  var percentage;

  for (var i = 0; i < document.quizzy.born.length; i++) {
    if (document.quizzy.born[i].checked) {
      var qOne = document.quizzy.born[i].value;
      var wrongOne = document.getElementsByClassName("borough");
      wrongOne[i].style.color = "#FF6B6B";
    }
  }

  switch (qOne) {
    case "B":
      count++;
      break;
  }

  for (var i = 0; i < document.quizzy.cats.length; i++) {
    if (document.quizzy.cats[i].checked) {
      var qTwo = document.quizzy.cats[i].value;
      var wrongTwo = document.getElementsByClassName("kitties");
      wrongTwo[i].style.color = "#FF6B6B";
    }
  }

  switch (qTwo) {
    case "G":
      count++;
      break;
  }

  for (var i = 0; i < document.quizzy.country.length; i++) {
    if (document.quizzy.country[i].checked) {
      var qThree = document.quizzy.country[i].value;
      var wrongThree = document.getElementsByClassName("placename");
      wrongThree[i].style.color = "#FF6B6B";
    }
  }

  switch (qThree) {
    case "L":
      count++;
      break;
  }

  for (var i = 0; i < document.quizzy.colour.length; i++) {
    if (document.quizzy.colour[i].checked) {
      var qFour = document.quizzy.colour[i].value;
      var wrongFour = document.getElementsByClassName("blue");
      wrongFour[i].style.color = "#FF6B6B";
    }
  }

  switch (qFour) {
    case "N":
      count++;

      break;
  }

  for (var i = 0; i < document.quizzy.animal.length; i++) {
    if (document.quizzy.animal[i].checked) {
      var qFive = document.quizzy.animal[i].value;
      var wrongFive = document.getElementsByClassName("cow");
      wrongFive[i].style.color = "#FF6B6B";
    }
  }

  switch (qFive) {
    case "T":
      count++;

      break;
  }

  for (var i = 0; i < document.quizzy.middle.length; i++) {
    if (document.quizzy.middle[i].checked) {
      var qSix = document.quizzy.middle[i].value;
      var wrongSix = document.getElementsByClassName("namez");
      wrongSix[i].style.color = "#FF6B6B";
    }
  }

  switch (qSix) {
    case "U":
      count++;

      break;
  }

  if (count >= 5) {
    quizResult = "You are a Chrissie Connoisseur!";
    document.getElementById('myImage').src="https://i.imgur.com/slrHvxg.jpg";
  } else if (count >= 3) {
    quizResult = "Good try, better luck next time.";
    document.getElementById('myImage').src="https://i.imgur.com/TkGJBo0.jpg";
  } else {
    quizResult = "You should be ashamed of your Chrissie knowledge!";
    document.getElementById('myImage').src="https://i.imgur.com/FW8wfzO.jpg";
  }

  percentage = (count / 6) * 100;

  text = percentage.toFixed(2) + "% - " + quizResult;
  
  var img = document.getElementById('myImage');
    img.style.visibility = 'visible';

  document.getElementById("correct1").style.color = "green";
  document.getElementById("correct2").style.color = "green";
  document.getElementById("correct3").style.color = "green";
  document.getElementById("correct4").style.color = "green";
  document.getElementById("correct5").style.color = "green";
  document.getElementById("correct6").style.color = "green";

  document.getElementById("demo").innerHTML = text;

  document.getElementById("submitButton").disabled = true;
}
