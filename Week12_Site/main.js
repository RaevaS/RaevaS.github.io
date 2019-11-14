$(function() {

    $("#story").hide();

  $("#btn-click").click(function(e) {

    $(".object").empty().append($("input.object").val());
    $(".verb").empty().append($("input.verb").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".name").empty().append($("input.name").val());
    $(".verb2").empty().append($("input.verb2").val());

    $("#story").show();

    $(':input').val('');
    
    $("#questions").hide();

    });
  
  });