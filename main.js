$(document).ready(function () {
  $("#home").click(function () {

          $('#wrapper').hide();
        $('.aboutMe').show("slide",{direction:"left" },"linear",2000);
        //  $('#aboutMe').toggle("slide");


          $('#home').hide();
        });
      });
