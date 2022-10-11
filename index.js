function settings() {
  window.location.href = "https://kirmizi.xyz/";
}

function outOfMemory() {
  window.location.href = "https://github.com/kirmiziben10/";
}

var normalSize = { width: 35, height: 35 };

var onElementHover = false;

var circle = document.getElementById("circle");

var currentSize = { width: normalSize.width, height: normalSize.height };
console.log({ width: 0, height: parseInt(circle.style.height) });

document.addEventListener("mousemove", function (e) {
  if (!onElementHover) {
    let left = e.clientX;
    let top = e.clientY;
    circlePositionSetter(circle, left, top);
  }
});

document.querySelectorAll(".clickable").forEach(function (element) {
  element.addEventListener("mouseover", function (e) {
    onElementHover = true;
    let rect = element.getBoundingClientRect();
    let dWidth = rect.width - parseInt(circle.style.width);
    let dHeight = rect.height - parseInt(circle.style.height);
    circlePositionSetter(circle, rect.x + rect.width / 2, rect.y + rect.height / 2);
    circleSizeSetter(circle, rect.width, rect.height);
    console.log(currentSize);
  });

  element.addEventListener("mouseout", function (e) {
    onElementHover = false;
    circleSizeSetter(circle, normalSize.width, normalSize.height);
  });
});

function circlePositionSetter(circleElement, x, y) {
  circleElement.style.left = x + "px";
  circleElement.style.top = y + "px";
}

function circleSizeSetter(circleElement, w, h) {
  circleElement.style.width = w + "px";
  circleElement.style.height = h + "px";
}
