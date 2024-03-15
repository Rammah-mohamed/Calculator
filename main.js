let inputs = document.querySelectorAll(".btn");
let display = document.querySelector("[name = 'display']");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");

//Display the entered value in screen
inputs.forEach((el) => {
	el.addEventListener("click", (e) => {
		display.value += e.target.value;
	});
});

//Clear the display
ac.onclick = () => {
	display.value = "";
};

//Delete the entered value
del.onclick = () => {
	display.value = display.value.toString().slice(0, -1);
};

//Evaluate the value of operetion & show it on screen
equal.onclick = () => {
	display.value = eval(display.value);
};

//Show the Scientific operations
let modeBtn = document.querySelector(".mode");
let scientificOperation = document.querySelectorAll(".scientific");
let square = document.querySelector(".square");
let squareRoot = document.querySelector(".root");
let absoluteValue = document.querySelector(".absolute");
let e = document.querySelector(".e");
let pi = document.querySelector(".pi");
let sin = document.querySelector(".sin");
let cos = document.querySelector(".cos");
let tan = document.querySelector(".tan");
let log = document.querySelector(".log");
let ln = document.querySelector(".ln");

modeBtn.onclick = () => {
	display.value = "";
	scientificOperation.forEach((btn) => {
		btn.classList.toggle("scientific");
	});
	if (modeBtn.textContent == "Scientific Mode") {
		modeBtn.textContent = "Basic Mode";
	} else {
		modeBtn.textContent = "Scientific Mode";
	}
};

//Scientific Operation
function getNum(string) {
	let num;
	if (display.value === string) {
		num = 1;
		return num;
	} else {
		num = display.value.slice(0, display.value.indexOf(string));
		let str = num.toString();
		let regExp = /[0-9]/gi;
		let filteredNum = str.match(regExp).join("");
		return filteredNum;
	}
}

//square
square.addEventListener("click", () => {
	display.value = Math.pow(getNum("x²"), 2);
});

//Square Root
squareRoot.addEventListener("click", () => {
	display.value = Math.pow(getNum("√"), 0.5);
});

//Absolute Value
absoluteValue.addEventListener("click", () => {
	display.value = Math.abs(getNum("|x|"));
});

//e
e.addEventListener("click", () => {
	display.value = getNum("e") * Math.E;
});

//Pi
pi.addEventListener("click", () => {
	display.value = getNum("𝛑") * Math.PI;
});

//sin
sin.addEventListener("click", () => {
	display.value = Math.sin(getNum("sin") * (Math.PI / 180));
});

//cos
cos.addEventListener("click", () => {
	display.value = Math.cos(getNum("cos") * (Math.PI / 180));
});

//tan
tan.addEventListener("click", () => {
	display.value = Math.tan(getNum("tan") * (Math.PI / 180));
});

//log Function
log.addEventListener("click", () => {
	display.value = Math.log10(getNum("log"));
});

//ln
ln.addEventListener("click", () => {
	display.value = Math.LN10;
});
