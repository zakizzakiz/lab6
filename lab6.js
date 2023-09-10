// function hello(name,age){
//   console.log( " snuu minii neriig " + name)
//   onsole.log( "minii nas " + age);
// }
// hello("monkhkhishig ",12);

var too = (32,14);
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['red','black','aqua','blue','white','yallow',]
var i=-1;
var btn= document.getElementsByTagName('button')[0];
console.log(btn);
function color(){
    random = Math.floor(Math.random()*(colors.length-1));
    
    i++
    body.style.backgroundColor=colors[random];
    btn.innerText = colors[random];
    if(i>=colors.length-1){
        i=-1;
       
    }

    
}
