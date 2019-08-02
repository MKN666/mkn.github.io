/* let h = document.querySelector("h1");
h.textContent = "Hello world!"; */

/* document.querySelector("img").onclick = function() {
	alert("你好啊！");
} */

/* let myImge = document.querySelector("img");
myImge.onclick = function() {
	let mySrc = myImge.getAttribute("src");
	if(mySrc === "images/firefox-icon.png") {
		myImge.setAttribute("src", "images/firefox2.png");
	} else {
		myImge.setAttribute("src", "images/firefox-icon.png");
	}
} */

function setHead(name) {
	let myHead = document.querySelector("h1");
	myHead.textContent="google,酷毙了" + name + "!";
}

function setName() {
	let myName = prompt("请输入你的名字：");
	localStorage.setItem("name",myName);
	setHead(myName);
}

let storageName = localStorage.getItem("name");
if(!storageName) {
	setHead();
}else {
	setHead(storageName);
}

let myButton = document.querySelector("button");
myButton.onclick = setName;