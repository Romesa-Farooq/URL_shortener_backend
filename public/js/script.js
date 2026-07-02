function copyURL(){

const input=document.getElementById("shortUrl");

input.select();

navigator.clipboard.writeText(input.value);

alert("Copied!");

}