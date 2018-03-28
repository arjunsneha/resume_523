function loadjson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
 {
if(xhr.readyState ===4 && xhr.status=="200")
  {
  callback(xhr.responseText);
  }
 }
xhr.send();
}
//function call
loadjson("data.json",function (text) {
  let data=JSON.parse(text);
  console.log(data);
basics(data.left);
})
var main=document.querySelector('.main');
//var main=document.getElementById("main");
var left=document.createElement("div");
left.classList.add("left");
left.textContent="Profile Details"
left.appendChild(document.createElement("HR"));
main.appendChild(left);
function basics(leftside)
{
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.Email;
name.appendChild(email);
var phn=document.createElement("p");
phn.textContent=leftside.phone;
email.appendChild(phn);
}
