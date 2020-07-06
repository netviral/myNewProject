var checkBox=document.querySelectorAll(".checkbox");
var item=document.querySelectorAll("li");

for(var i=0;i< item.length;i++){
  if(checkBox[i].checked===true){
    item[i].classList.add("line-through");
  }
}
