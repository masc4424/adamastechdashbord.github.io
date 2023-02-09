// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// =============== drag n drop ================ 
$(function() {

  $('.nubeT').sortable({
      items: '.sortable'
  });

});

// <===============Sortable save=================>
// <================ 1 =====================>
// $(document).ready(function() {
//   $("#sortable-left").kendoSortable({
//       connectWith: "#sortable-right",
//       hint: function(element) {
//           return element.clone().addClass("hint");
//       },
//       placeholder: function(element) {
//           return element.clone().addClass("placeholder");
//       },
//       start: onStart,
//       move: onMove,
//       end: onEnd,
//       change: onChange,
//       cancel: onCancel
//   });


// });

// function onStart(e) {
//   var id = e.sender.element.attr("id");
//   kendoConsole.log(id + " start: " + e.item.text());
// }

// function onMove(e) {
//   var id = e.sender.element.attr("id"),
//       placeholder = e.list.placeholder;

//   kendoConsole.log(id + " move to index: " + this.indexOf(placeholder));
// }

// function onEnd(e) {
//   var id = e.sender.element.attr("id"),
//       text = e.item.text(),
//       oldIndex = e.oldIndex,
//       newIndex = e.newIndex;

//   kendoConsole.log(id + " end: " + text + " oldIndex: " + oldIndex + " newIndex: " + newIndex + " action: " + e.action);
// }

// function onChange(e) {
//   var id = e.sender.element.attr("id"),
//       text = e.item.text(),
//       newIndex = e.newIndex,
//       oldIndex = e.oldIndex;

//   kendoConsole.log(id + " change: " + text + " newIndex: " + newIndex + " oldIndex: " + oldIndex + " action: " + e.action);
// }

// function onCancel(e) {
//   kendoConsole.log("cancel");
// }

// <====================== 2 ========================>

// var halua = document.getElementById('halua');

// // create sortable and save instance
// var sortable = Sortable.create(halua, {animation: 150});

// // save initial order
// var initialOrder = sortable.toArray();

// document.getElementById('saveCurrOrder').addEventListener('click', function(e) { 
//     // print current order
//     var order = sortable.toArray();
//     console.log(order);
// });

// document.getElementById('resetOrder').addEventListener('click', function(e) {
//     // reset to initial order
//     sortable.sort(initialOrder);
// })


// ==============3===================

$(function () {
  $("#sortable").sortable({
      sort: function( event, ui ) {
          alert("Sort Event Triggered!")
      }
  });
});


// <========= Draggable resixable close ========>

window.onload = function() {
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

    popup.onmousedown = function() {
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
//                        1

// <==================Popup & icon Show and Hide===================>

function myFunction1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("icSHOW1");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function myFunction2() {
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
  
}

function myFunction3() {
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
}

function myFunction4() {
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
}

// <===========================Icon Stay===================================>

function hideeye() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hidecart() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hidechat() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideerror() {
  var x = document.getElementById("myDIV4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
}


// <========================icon click show===========================>

function iconCLICKSH1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function iconCLICKSH2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function iconCLICKSH3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function iconCLICKSH4() {
  var x = document.getElementById("myDIV4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//<========================maximize function()===========================>
let isMaximized = false;

function max1() {
  if (isMaximized) {
    myDIV1.style.width = "";
    myDIV1.style.height = "";
    myDIV1.style.top = "";
    myDIV1.style.left = "";
    myDIV1.classList.remove("mystyle");
    isMaximized = false;
} else{
  myDIV1.style.width = "100%";
  myDIV1.style.height = "100%";
  myDIV1.style.top = "0";
  myDIV1.style.left = "0";
  myDIV1.classList.add("mystyle");
  isMaximized = true;
  console.log(myDIV1);
}
}

function max2() {
  if (isMaximized) {
    myDIV2.style.width = "";
    myDIV2.style.height = "";
    myDIV2.style.top = "";
    myDIV2.style.left = "";
    myDIV2.classList.remove("mystyle");
    isMaximized = false;
} else{
  myDIV2.style.width = "100%";
  myDIV2.style.height = "100%";
  myDIV2.style.top = "0";
  myDIV2.style.left = "0";
  myDIV2.classList.add("mystyle");
  isMaximized = true;
}
}

function max3() {
  if (isMaximized) {
    myDIV3.style.width = "";
    myDIV3.style.height = "";
    myDIV3.style.top = "";
    myDIV3.style.left = "";
    myDIV3.classList.remove("mystyle");
    isMaximized = false;
  
} else{
  myDIV3.style.width = "100%";
  myDIV3.style.height = "100%";
  myDIV3.style.top = "0";
  myDIV3.style.left = "0";
  myDIV3.classList.add("mystyle");
  isMaximized = true;
}
}

function max4() {
  if (isMaximized) {
    myDIV4.style.width = "";
    myDIV4.style.height = "";
    myDIV4.style.top = "";
    myDIV4.style.left = "";
    myDIV4.classList.remove("mystyle");
    isMaximized = false;
} else{
  myDIV4.style.width = "100%";
  myDIV4.style.height = "100%";
  myDIV4.style.top = "0";
  myDIV4.style.left = "0";
  myDIV4.classList.add("mystyle");
  isMaximized = true;
}
}
