Circles.create({
	id: 'task-complete',
	radius: 75,
	value: 80,
	maxValue: 100,
	width: 8,
	text: function (value) { return value + '%'; },
	colors: ['#eee', '#1D62F0'],
	duration: 400,
	wrpClass: 'circles-wrp',
	textClass: 'circles-text',
	styleWrapper: true,
	styleText: true
})

// Draggable resixable close

window.onload = function () {
	initDragElement();
	initResizeElement();
};

function initDragElement() {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	var popups = document.getElementsByClassName("popup");
	var elmnt = null;
	var currentZIndex = 100; //TODO reset z index when a threshold is passed

	for (var i = 0; i < popups.length; i++) {
		var popup = popups[i];
		var header = getHeader(popup);

		popup.onmousedown = function () {
			this.style.zIndex = "" + ++currentZIndex;
		};

		if (header) {
			header.parentPopup = popup;
			header.onmousedown = dragMouseDown;
		}
	}

	function dragMouseDown(e) {
		elmnt = this.parentPopup;
		elmnt.style.zIndex = "" + ++currentZIndex;

		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		if (!elmnt) {
			return;
		}

		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}

	function getHeader(element) {
		var headerItems = element.getElementsByClassName("popup-header");

		if (headerItems.length === 1) {
			return headerItems[0];
		}

		return null;
	}
}

function initResizeElement() {
	var popups = document.getElementsByClassName("popup");
	var element = null;
	var startX, startY, startWidth, startHeight;

	for (var i = 0; i < popups.length; i++) {
		var p = popups[i];

		var right = document.createElement("div");
		right.className = "resizer-right";
		p.appendChild(right);
		right.addEventListener("mousedown", initDrag, false);
		right.parentPopup = p;

		var bottom = document.createElement("div");
		bottom.className = "resizer-bottom";
		p.appendChild(bottom);
		bottom.addEventListener("mousedown", initDrag, false);
		bottom.parentPopup = p;

		var both = document.createElement("div");
		both.className = "resizer-both";
		p.appendChild(both);
		both.addEventListener("mousedown", initDrag, false);
		both.parentPopup = p;
	}

	function initDrag(e) {
		element = this.parentPopup;

		startX = e.clientX;
		startY = e.clientY;
		startWidth = parseInt(
			document.defaultView.getComputedStyle(element).width,
			10
		);
		startHeight = parseInt(
			document.defaultView.getComputedStyle(element).height,
			10
		);
		document.documentElement.addEventListener("mousemove", doDrag, false);
		document.documentElement.addEventListener("mouseup", stopDrag, false);
	}

	function doDrag(e) {
		element.style.width = startWidth + e.clientX - startX + "px";
		element.style.height = startHeight + e.clientY - startY + "px";
	}

	function stopDrag() {
		document.documentElement.removeEventListener("mousemove", doDrag, false);
		document.documentElement.removeEventListener("mouseup", stopDrag, false);
	}
}

// <================== Show & Hide ======================>

// <==================Popup & icon Show and Hide===================>

function myFunction1() {
	var modal = document.getElementById("myModal1"); 
	modal.style.display = "none"; 
	var backdrop = document.getElementsByClassName("modal-backdrop"); 
	if (backdrop[0]) { 
		backdrop[0].parentNode.removeChild(backdrop[0]); 
	}

	var x = document.getElementById("myDIV1");
	x.style.display = '';

	var y = document.getElementById("icSHOW1");
	y.style.display = '';

	var z = document.getElementById("bgshhi1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg1")
	w.id = "bgshhi1"
}

function myFunction2() {
	var modal = document.getElementById("myModal2"); 
	modal.style.display = "none"; 
	var backdrop = document.getElementsByClassName("modal-backdrop"); 
	if (backdrop[0]) { 
		backdrop[0].parentNode.removeChild(backdrop[0]); 
	}

	var x = document.getElementById("myDIV2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction3() {
	var modal = document.getElementById("myModal3"); 
	modal.style.display = "none"; 
	var backdrop = document.getElementsByClassName("modal-backdrop"); 
	if (backdrop[0]) { 
		backdrop[0].parentNode.removeChild(backdrop[0]); 
	}

	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW3");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction4() {
	var modal = document.getElementById("myModal4"); 
	modal.style.display = "none"; 
	var backdrop = document.getElementsByClassName("modal-backdrop"); 
	if (backdrop[0]) { 
		backdrop[0].parentNode.removeChild(backdrop[0]); 
	}

	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

// <===========================Icon Stay===================================>

function hideeye() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi1")
	z.id = "cbg1"
}

function hidecart() {
	var x = document.getElementById("myDIV2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi2")
	z.id = "cbg2"
}

function hidechat() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi3")
	z.id = "cbg3"
}

function hideerror() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi4")
	z.id = "cbg4"
}

// <==============================Close Function====================================>

function closeKARO1() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW1");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg1")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}


function closeKARO2() {
	var x = document.getElementById("myDIV2");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg2")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO3() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW3");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO4() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}


// <========================icon click show===========================>

function iconCLICKSH1() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg1")
	z.id = "bgshhi1"
}

function iconCLICKSH2() {
	var x = document.getElementById("myDIV2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg2")
	z.id = "bgshhi2"
}

function iconCLICKSH3() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg3")
	z.id = "bgshhi3"
}

function iconCLICKSH4() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg4")
	z.id = "bgshhi4"
}

// <======================Maximize=========================>

let isMaximized1 = false;
function max1() {

	if (isMaximized1) {

		myDIV1.style.width = "";
		myDIV1.style.height = "";
		myDIV1.style.top = "";
		myDIV1.style.left = "";
		myDIV1.classList.remove("mystyle");
		isMaximized1 = false;
	}
	else {
		myDIV1.style.width = "100%";
		myDIV1.style.height = "100%";
		myDIV1.style.top = "0";
		myDIV1.style.left = "0";
		myDIV1.classList.add("mystyle");
		isMaximized1 = true;
	}

}
let isMaximized2 = false;
function max2() {
	if (isMaximized2) {
		myDIV2.style.width = "";
		myDIV2.style.height = "";
		myDIV2.style.top = "";
		myDIV2.style.left = "";
		myDIV2.classList.remove("mystyle");
		isMaximized2 = false;
	} else {
		myDIV2.style.width = "100%";
		myDIV2.style.height = "100%";
		myDIV2.style.top = "0";
		myDIV2.style.left = "0";
		myDIV2.classList.add("mystyle");
		isMaximized2 = true;
	}
}
let isMaximized3 = false;
function max3() {
	if (isMaximized3) {
		myDIV3.style.width = "";
		myDIV3.style.height = "";
		myDIV3.style.top = "";
		myDIV3.style.left = "";
		myDIV3.classList.remove("mystyle");
		isMaximized3 = false;
	} else {
		myDIV3.style.width = "100%";
		myDIV3.style.height = "100%";
		myDIV3.style.top = "0";
		myDIV3.style.left = "0";
		myDIV3.classList.add("mystyle");
		isMaximized3 = true;
	}
}
let isMaximized4 = false;
function max4() {
	if (isMaximized4) {
		myDIV4.style.width = "";
		myDIV4.style.height = "";
		myDIV4.style.top = "";
		myDIV4.style.left = "";
		myDIV4.classList.remove("mystyle");
		isMaximized4 = false;
	} else {
		myDIV4.style.width = "100%";
		myDIV4.style.height = "100%";
		myDIV4.style.top = "0";
		myDIV4.style.left = "0";
		myDIV4.classList.add("mystyle");
		isMaximized4 = true;
	}
}

//<===============================Maximize icon togle ==============================>

function changeIcon1() {
	var icon1 = document.getElementById("icon1");
	if (icon1.classList.contains("fa-square")) {
		icon1.classList.remove("fa-square");
		icon1.classList.add("fa-window-restore");
	} else {
		icon1.classList.remove("fa-window-restore");
		icon1.classList.add("fa-square");
	}
}

function changeIcon2() {
	var icon2 = document.getElementById("icon2");
	if (icon2.classList.contains("fa-square")) {
		icon2.classList.remove("fa-square");
		icon2.classList.add("fa-window-restore");
	} else {
		icon2.classList.remove("fa-window-restore");
		icon2.classList.add("fa-square");
	}
}

function changeIcon3() {
	var icon3 = document.getElementById("icon3");
	if (icon3.classList.contains("fa-square")) {
		icon3.classList.remove("fa-square");
		icon3.classList.add("fa-window-restore");
	} else {
		icon3.classList.remove("fa-window-restore");
		icon3.classList.add("fa-square");
	}
}

function changeIcon4() {
	var icon4 = document.getElementById("icon4");
	if (icon4.classList.contains("fa-square")) {
		icon4.classList.remove("fa-square");
		icon4.classList.add("fa-window-restore");
	} else {
		icon4.classList.remove("fa-window-restore");
		icon4.classList.add("fa-square");
	}
}

// $(document).ready(function () {
// 	$(".action").on("click", function () {
// 		$(".menu").toggleClass("active");
// 	});
// });


// function dropdownbtn() {
// 	var x = document.getElementById("myDropdown");
// 	if (x.style.display === "none") {
// 		x.style.display = "block";
// 	} else {
// 		x.style.display = "none";
// 	}
// }

// =======================user account dropdown===================================================

// ======================= responsive side bar ===================================================
$(function () { $('[data-toggle="tooltip"]').tooltip() }), jQuery(document).ready(function () { jQuery(".scrollbar-inner").scrollbar() }), $(document).ready(function () {
	var t = !1, o = !1, e = 0, a = 0
	t || ($toggle = $(".sidenav-toggler"), $toggle.click(function () { 1 == e ? ($("html").removeClass("nav_open"), $toggle.removeClass("toggled"), e = 0) : ($("html").addClass("nav_open"), $toggle.addClass("toggled"), e = 1) }), t = !0), o || ($topbar = $(".topbar-toggler"), $topbar.click(function () { 1 == a ? ($("html").removeClass("topbar_open"), $topbar.removeClass("toggled"), a = 0) : ($("html").addClass("topbar_open"), $topbar.addClass("toggled"), a = 1) }), o = !0), $('[data-select="checkbox"]').change(function () { $target = $(this).attr("data-target"), $($target).prop("checked", $(this).prop("checked")) })
})

// ======================================= hex code in popup ==========================
// ==================first popup DA========================
const circle = document.getElementById("circle");


setInterval(function () {
	const text = circle.textContent;
	const hex = getHexCode(text);
	circle.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ==================2nd popup ST========================
const circle2 = document.getElementById("circle2");


setInterval(function () {
	const text = circle2.textContent;
	const hex = getHexCode(text);
	circle2.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ==================3rd popup ZK========================
const circle3 = document.getElementById("circle3");


setInterval(function () {
	const text = circle3.textContent;
	const hex = getHexCode(text);
	circle3.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}
// ==================4th popup FH========================
const circle4 = document.getElementById("circle4");


setInterval(function () {
	const text = circle4.textContent;
	const hex = getHexCode(text);
	circle4.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


// =======================================hex code for sidebar=============================
const circle11 = document.getElementById("circle11");

setInterval(function () {
	const text = circle11.textContent;
	const hex = getHexCode(text);
	circle11.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ==========================side bar icon 2==============================

const circle12 = document.getElementById("circle12");

setInterval(function () {
	const text = circle12.textContent;
	const hex = getHexCode(text);
	circle12.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ============================side bar icon 3=========================

const circle13 = document.getElementById("circle13");

setInterval(function () {
	const text = circle13.textContent;
	const hex = getHexCode(text);
	circle13.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


// ============================side bar icon 4=========================

const circle14 = document.getElementById("circle14");

setInterval(function () {
	const text = circle14.textContent;
	const hex = getHexCode(text);
	circle14.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}
