var list_item=document.getElementById("list")


function additem(){
    var text_item =document.getElementById("to-item");
    //create Li  tag 
    var li=document.createElement("li")
    var li_text=document.createTextNode(text_item.value)
    li.appendChild(li_text)
    //craete delete button
    var dltbtn=document.createElement("button")
    var btntext=document.createTextNode("DELETE")
    dltbtn.setAttribute("class","btn")
    dltbtn.setAttribute("onclick","deleteitem(this)")
    dltbtn.appendChild(btntext)
    li.appendChild(dltbtn)
  //create edit button
 var editbtn=document.createElement("button")
 var edittext=document.createTextNode("Edit")
 editbtn.appendChild(edittext)
 
 editbtn.setAttribute("onclick","edititem(this)")
    li.appendChild(editbtn)
   list.appendChild(li)
text_item.value="";
// console.log(li)
}
function deleteitem(e){
   e.parentNode.remove()
}
function deleteall(){
   list.innerHTML="";
}
function edititem(e){
var val=prompt("enter the value for update",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue=val;
}


