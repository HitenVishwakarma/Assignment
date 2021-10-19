function start() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }


function stop(){
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    
      function start() {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    
    