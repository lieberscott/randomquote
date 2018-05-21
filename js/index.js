$(document).ready(function(){

 $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
        
        var quote = json.quote + '<br><div class="author">&#8212; ' + json.author + '</div><br>';
        
$(".message").html(quote).fadeIn(2000);
   
   $(".btn").on("click", function() {
     
     var colors = ["#E690FF", "#6B8CA9", "#AA886B", "#AAA86B", "#AA6B8D", "#6BAA88", "#8DAA6B", "#AA6B6D", "#6B6DAA", "#6BAAA8"];
     
     var x = Math.floor(Math.random() * 6)
  $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
        
        var quote = json.quote + '<br><div class="author">&#8212; ' + json.author + '</div><br>';
        
$(".message").html(quote).fadeIn(2000);
    $("body").animate({"background-color": colors[x]}, 2000);
     
     $(".message").animate({"color": colors[x]}, 2000);
     
     $("button").animate({"background-color": colors[x]}, 2000);
    
    $("i").animate({"background-color": colors[x]}, 2000);

      });
    });
});
});