$(function() {      
    $("#test").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
          $('h3').text(localStorage.getItem("nombre"));
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test2").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test3").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test4").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test5").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#menu").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });

  function menu(){
   
      var menu=document.getElementById("menu");
      menu.style.marginLeft="280px";
      $('h3').text(localStorage.getItem("nombre"));
  }