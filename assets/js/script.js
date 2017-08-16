$("ul").on("click", "li", function(){
  $(this).toggleClass("strike");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var newToDo = $(this).val();
    $(this).val("");
    $("ul").append("<li>" + newToDo + " <span><i class='fa fa-trash-o' aria-hidden='true'></i></span></li>");
  }
});

$("h1").on("click", "i", function(){
  $("input[type='text']").fadeToggle("fast");
  $(this).toggleClass("fa-pencil").toggleClass("fa-list-ul");
});
