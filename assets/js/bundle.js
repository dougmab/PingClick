(()=>{"use strict";class e{constructor(e=0,t=0,s=0){this.red=e,this.green=t,this.blue=s}rgbArray(){return[this.red,this.green,this.blue]}htmlRgbColor(){return`rgb(${this.rgbArray().join(", ")})`}}class t{constructor(e,l){this.vector=s.defaultLocation(),this.currentBallIndex=t.ballIndex,this.name=e,this.color=l}generateBall(){const e=document.createElement("div");e.classList.add("ball"),e.dataset.number=t.ballIndex.toString(),t.ballIndex++;const s=document.createElement("h2");s.innerText=this.name,e.appendChild(s);const l=document.createElement("div");return l.classList.add("ball-style"),l.style.backgroundColor=this.color.htmlRgbColor(),e.appendChild(l),e}insertBallIntoBrowser(){this.htmlBall=this.generateBall(),t.ballMap.appendChild(this.htmlBall),console.log(`${this.name} was generated!`)}move(e,t){this.vector.updateLocation(e,t),this.htmlBall.style.left=this.vector.x+"px",this.htmlBall.style.top=this.vector.y+"px"}}t.ballIndex=0,t.ballMap=document.getElementById("root");class s{constructor(e,t){this.x=e,this.y=t}static defaultLocation(){return new s(0,0)}updateLocation(e,t){this.x+=e,this.y+=t}}const l=new class{constructor(){this.speed=3,this.ballsInGame=[],this.keysPressed={}}init(){document.addEventListener("keydown",(e=>{this.keysPressed[e.code]=!0,this.walkInterval||(this.walkInterval=setInterval((()=>{this.keysPressed.ArrowLeft&&this.checkKeyPressX(-this.speed),this.keysPressed.ArrowRight&&this.checkKeyPressX(this.speed),this.keysPressed.ArrowUp&&this.checkKeyPressY(-this.speed),this.keysPressed.ArrowDown&&this.checkKeyPressY(this.speed)}),20))})),document.addEventListener("keyup",(e=>{delete this.keysPressed[e.code]}))}checkKeyPressX(e){this.currentBall&&this.currentBall.move(e,0)}checkKeyPressY(e){this.currentBall&&this.currentBall.move(0,e)}updateCurrentBall(e){this.currentBall=e}createNewBall(e){var t;this.updateCurrentBall(e),this.ballsInGame.push(e),null===(t=this.currentBall)||void 0===t||t.insertBallIntoBrowser()}},r=new class{constructor(t){this.controlsPanel=document.querySelector("#controls"),this.creationForm=this.controlsPanel.querySelector("form"),this.colorPanel=document.querySelector(".rgb-selector"),this.closePanelButton=this.controlsPanel.querySelector("#close"),this.openPanelButton=document.querySelector("#add-button"),this.randomColorButton=this.controlsPanel.querySelector("#random-color"),this.createButton=this.creationForm.querySelector("#create-ball"),this.newBallInfo={name:"",color:new e(0,0,0)},this.gameInstance=t}init(){this.openPanelButton.addEventListener("click",(e=>{e.preventDefault(),this.openPanel()})),this.closePanelButton.addEventListener("click",(e=>{e.preventDefault(),this.closePanel()})),this.randomColorButton.addEventListener("click",(e=>{e.preventDefault(),this.getRandomColor()})),this.createButton.addEventListener("click",(e=>{e.preventDefault(),this.createBall()})),this.initColorDisplayUpdateChecker()}openPanel(){this.controlsPanel.classList.remove("controls-closed")}closePanel(){this.controlsPanel.classList.add("controls-closed"),this.creationForm.querySelectorAll("input").forEach((e=>{e.value=""}))}getRgb(){const t=this.colorPanel.querySelectorAll("input"),s=[];return t.forEach((e=>{const t=Number(e.value);if(t>255)return s.push(255);s.push(t)})),new e(s[0],s[1],s[2])}getRandomColor(){this.colorPanel.querySelectorAll("input").forEach((e=>{e.value=Math.floor(255*Math.random()+1).toString()}))}initColorDisplayUpdateChecker(){const e=this.colorPanel.querySelector("#color-display");setInterval((()=>{e.style.backgroundColor=this.getRgb().htmlRgbColor()}),600)}registerInfo(){const e=this.creationForm.querySelector("#ball-name");this.newBallInfo={name:e.value,color:this.getRgb()}}createBall(){this.registerInfo(),this.closePanel();const e=new t(this.newBallInfo.name,this.newBallInfo.color);return this.gameInstance.createNewBall(e),e}}(l);l.init(),r.init()})();