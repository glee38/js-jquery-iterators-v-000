$(document).ready(function(){

listIterate();
  
});

var names = ["Carleton", "Avi", "Azat", "Ann" ]

$.each(names, function(index, name){
  console.log("hey " + name);
});

$('div').each(function(index, div){
  $(this).append("this is div number " + (index + 1));
});

$.map(names, function(name, index){
   return name + " loves JavaScript"; 
});

function listIterate(){
  return $('li').map(function(item, index){
      return item.innerHTML;
  });
}