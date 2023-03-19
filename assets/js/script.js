window.addEventListener("load", function () {
    var wrapper = document.querySelector(".wrapper");
  
    for (var i = 1; i < 500; i++) {
      wrapper.innerHTML += '<span class="box">box1</span>';
    }
  
    var box = document.querySelectorAll(".box");
  
    box.forEach(function (element) {
      element.addEventListener("mouseover", function () {
        var randomText = Math.random().toString(16).slice(2, 8);
        var randomColor = '#' + randomText;

        setTimeout(function () {
          element.style.backgroundColor = randomColor;
          element.style.boxShadow = "0 0 5px" + randomColor + "," + "0 0 10px" + randomColor;
          setTimeout(function () {
            element.style.backgroundColor = "#1e1c1e";
            element.style.boxShadow = "none";
          }, 500);
        }, 50);
      });
    });
  });  