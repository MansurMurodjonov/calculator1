// let userInput = document.getElementById("user-input");
let del = document.getElementById("del");
let point = document.getElementById("point");
let ac = document.getElementById("ac");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let per = document.getElementById("per");
let equ = document.getElementById("equ");
let add = document.getElementById("add");

// let left = document.getElementById("left");
// let right = document.getElementById("right");
// let percentage = document.getElementById("percentage");

let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let userInput = document.getElementById("user-input");

ac.addEventListener("click", () => {
  userInput.innerHTML = "0";
});

del.addEventListener("click", () => {
  let currentInput = userInput.innerHTML;
  userInput.innerHTML = currentInput.slice(0, -1);
});

point.addEventListener("click", () => {
  let currentInput = userInput.innerHTML;

  if (!currentInput.includes(".")) {
    userInput.innerHTML += ".";
  }
});

add.addEventListener("click", () => {
  userInput.innerHTML += "+";
});

sub.addEventListener("click", () => {
  userInput.innerHTML += "-";
});

mul.addEventListener("click", () => {
  userInput.innerHTML += "*";
});

per.addEventListener("click", () => {
  userInput.innerHTML += "/";
});

equ.addEventListener("click", () => {
  let expression = userInput.innerHTML;
  let result = eval(expression);
  userInput.innerHTML = result;
});

zero.addEventListener("click", () => {
  if (userInput.innerHTML !== "0") {
    userInput.innerHTML += "0";
  }
});

one.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "1";
  } else {
    userInput.innerHTML += "1";
  }
});

two.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "2";
  } else {
    userInput.innerHTML += "2";
  }
});
three.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "3";
  } else {
    userInput.innerHTML += "3";
  }
});
four.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "4";
  } else {
    userInput.innerHTML += "4";
  }
});
five.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "5";
  } else {
    userInput.innerHTML += "5";
  }
});
six.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "6";
  } else {
    userInput.innerHTML += "6";
  }
});
seven.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "7";
  } else {
    userInput.innerHTML += "7";
  }
});
eight.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "8";
  } else {
    userInput.innerHTML += "8";
  }
});
nine.addEventListener("click", () => {
  if (userInput.innerHTML === "0") {
    userInput.innerHTML = "9";
  } else {
    userInput.innerHTML += "9";
  }
});

// let userInput = document.getElementById("user-input");
// let del = document.getElementById("del");
// let point = document.getElementById("point");
// let ac = document.getElementById("ac");
// let sub = document.getElementById("sub");
// let mul = document.getElementById("mul");
// let per = document.getElementById("per");
// let equ = document.getElementById("equ");
// let add = document.getElementById("add");

// let zero = document.getElementById("zero");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");

// ac.addEventListener("click", () => {
//   userInput.innerHTML = 0;
// });

// point.addEventListener("click", () => {
//   userInput.innerHTML = ".";
// });

// zero.addEventListener("click", () => {
//   userInput.innerHTML = 0;
// });
// one.addEventListener("click", () => {
//   userInput.innerHTML = 1;
// });
// two.addEventListener("click", () => {
//   userInput.innerHTML = 2;
// });
// three.addEventListener("click", () => {
//   userInput.innerHTML = 3;
// });
// four.addEventListener("click", () => {
//   userInput.innerHTML = 4;
// });
// five.addEventListener("click", () => {
//   userInput.innerHTML = 5;
// });
// six.addEventListener("click", () => {
//   userInput.innerHTML = 6;
// });
// seven.addEventListener("click", () => {
//   userInput.innerHTML = 7;
// });
// eight.addEventListener("click", () => {
//   userInput.innerHTML = 8;
// });
// nine.addEventListener("click", () => {
//   userInput.innerHTML = 9;
// });
