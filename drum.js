
//console.log('hello');
window.addEventListener("keydown",function(e){
// console.log(e);
//console.log(e.keyCode);
const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`); //backtick for string elements
//console.log(audio);
if(!audio) return;
audio.currentTime=0; //when ever we press the audio it will play from starting
audio.play();
//for adding class inside class
const key=document.querySelector(`div[data-key="${e.keyCode}"]`)
key.classList.add('playing');//for adding class inside class
//console.log(key);
});
const keys=document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(function(key){
key.addEventListener('transitionend',function(e){
//console.log(e);
if(e.propertyName!="transform") return;
//console.log(this);
this.classList.remove('playing');
 });
});
