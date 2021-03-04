function enableScrolling() {
  // Removing Image's default behavior
  let images = document.getElementsByClassName("scrollable-image");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("draggable", false);
  }

  // Scroll Using Wheel
  document.getElementById("scrollable-list").addEventListener(
    "wheel",
    (e) => {
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.getElementById("scrollable-list").scrollLeft -= delta * 40;
      e.preventDefault();
    },
    false
  );

  // Scroll using Drag
  const ele = document.getElementById("scrollable-list");
  ele.style.cursor = "grab";
  ele.style.width = "100%";

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    ele.style.userSelect = "none";

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    ele.addEventListener("mousemove", mouseMoveHandler);
    ele.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");

    ele.removeEventListener("mousemove", mouseMoveHandler);
    ele.removeEventListener("mouseup", mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener("mousedown", mouseDownHandler);
}

function myFunc() {
  if (document.getElementById("scrollable-list")) {
    enableScrolling();
  } else {
    setTimeout(myFunc, 5);
  }
}

myFunc();
