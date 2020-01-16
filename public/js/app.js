!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./..",i(i.s=0)}([function(e,t,i){e.exports=i(3)},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";function n(e,t){t?localStorage.setItem(`${e}`,t):localStorage.setItem(`${e}`,canvas.toDataURL()),localStorage.setItem("link",0),localStorage.setItem("canvas",canvas.toDataURL())}function o(e){return{x:e.offsetX,y:e.offsetY}}function a(e,t){return{x:10*Math.ceil(e/10),y:10*Math.ceil(t/10)}}function l(e,t,i,n){i.fillStyle=`${n}`,i.fillRect(e,t,10,10)}i.r(t);const s=new class{get primaryColor(){return document.querySelector("#сurrent").value}get secondaryColor(){return document.querySelector("#previous").value}},c=new class{getPixelColor(e,t,i){const n=4*(i*e.width+t),o={};return o.r=e.data[n],o.g=e.data[n+1],o.b=e.data[n+2],o.a=e.data[n+3],o}convertHexToRgba(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}};class r{constructor(e){this.ctx=e.ctx,this.array=e.array,this.image=e.image,this.frameIndex=0,this.tickCount=0,this.ticksPerFrame=e.ticksPerFrame||0,this.numberOfFrames=e.numberOfFrames||1,this.width=e.width,this.height=e.height,this.start()}update(){this.tickCount++,this.tickCount>this.ticksPerFrame&&(this.tickCount=0,this.frameIndex<this.numberOfFrames-1?this.frameIndex++:this.frameIndex=0)}render(){this.image.src=this.array[this.frameIndex-1],this.ctx.clearRect(0,0,200,200),this.ctx.drawImage(this.image,0,0,200,200)}start(){let e=()=>{this.update(),this.render(),window.requestAnimationFrame(e)};window.requestAnimationFrame(e)}}let m=document.getElementById("canvas"),d=document.getElementById("paint_bucket"),u=document.getElementById("choose_color"),h=document.getElementById("pencil"),g=document.getElementById("pencil2"),f=document.getElementById("pencil3"),v=document.getElementById("line"),p=document.getElementById("eraser"),y=document.getElementById("clear"),b=document.getElementById("сurrent_color"),E=document.querySelectorAll(".section-main-sidebar-tools-list__item"),x=document.querySelectorAll(".section-main-switch__button"),I=document.getElementById("btn_to-project"),S=document.getElementById("add"),w=document.getElementById("mainFrame"),_=m.getContext("2d"),C=document.getElementById("range"),L=+C.value,k=new Image,B=document.querySelectorAll(".section-main-frame-canvas");k.src="assets/images/image.png";let q=new class{constructor(){this.canvas=document.getElementById("canvas"),this.ctx=m.getContext("2d"),this.img=new Image,this.tool="pencil",this.previous_color=document.getElementById("previous_color"),this.сurrent_color=document.getElementById("сurrent_color"),this.clear=document.getElementById("clear")}activeTool(e){this.tool=e}activeButton(e){switch(this.button=e,this.button){case"btn_4x4":this.canvasChange(1024);break;case"btn_32x32":this.canvasChange(256);break;case"btn_128x128":this.canvasChange(128)}}activeColor(e){this.color=e}init(){this.canvas.onmousedown=e=>this.mouseDown(e)}clearEvent(){this.clear.addEventListener("click",()=>{this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,512,512),T()})}colorChangeEvent(){let e=this.сurrent_color.firstElementChild.value;this.сurrent_color.addEventListener("change",t=>{this.previous_color.firstElementChild.value=e,e=b.firstElementChild.value})}mouseDown(e){switch(this.savedData=this.ctx.getImageData(0,0,this.canvas.clientWidth,this.canvas.clientHeight),this.canvas.onmousemove=e=>this.mouseMove(e),document.onmouseup=e=>this.mouseUp(e),this.startPoint=o(e),this.tool){case"choose_color":this.chooseColor();break;case"paint_bucket":this.bucketTool(e)}}mouseMove(e){switch(this.currentPoint=o(e),this.tool){case"pencil":case"pencil2":case"pencil3":case"line":this.draw(this.сurrent_color.firstElementChild.value);break;case"eraser":this.draw("#ffffff")}console.log(e.offsetX,e.offsetY)}mouseUp(e){this.canvas.onmousemove=null,document.onmouseup=null,this.oldX=this.oldY=null,this.endPoint=o(e)}draw(e){if("line"===this.tool){this.ctx.putImageData(this.savedData,0,0);const t=a(this.startPoint.x-10,this.startPoint.y-10),i=a(this.currentPoint.x-10,this.currentPoint.y-10);!function(e,t,i,n,o,a){let s,c,r,m,d,u,h,g,f,v,p;if(r=i-e,m=n-t,d=Math.abs(r),u=Math.abs(m),h=2*u-d,g=2*d-u,u<=d)for(r>=0?(s=e,c=t,f=i):(s=i,c=n,f=e),l(s,c,o,a),p=0;s<f;p++)s+=10,h<0?h+=2*u:(r<0&&m<0||r>0&&m>0?c+=10:c-=10,h+=2*(u-d)),l(s,c,o,a);else for(m>=0?(s=e,c=t,v=n):(s=i,c=n,v=t),l(s,c,o,a),p=0;c<v;p++)c+=10,g<=0?g+=2*d:(r<0&&m<0||r>0&&m>0?s+=10:s-=10,g+=2*(d-u)),l(s,c,o,a)}(t.x,t.y,i.x,i.y,this.ctx,e),T()}else if("pencil"===this.tool||"pencil2"===this.tool||"pencil3"===this.tool||"eraser"===this.tool){if("pencil"===this.tool?this.size=12:"pencil2"===this.tool?this.size=19:"pencil3"!==this.tool&&"eraser"!==this.tool||(this.size=36),this.currentPoint,this.x=this.currentPoint.x,this.y=this.currentPoint.y,null!==this.oldX&&null!=this.oldX){(function(e,t){let{x:i,y:n}=e,o=Math.abs(i-t.x),a=Math.abs(n-t.y),l=i<t.x?1:-1,s=n<t.y?1:-1,c=o-a,r=[];for(;r.push({x:i,y:n}),i!==t.x||n!==t.y;){const e=2*c;e>-a&&(c-=a,i+=l),e<o&&(c+=o,n+=s)}return console.log(r),r})(this.currentPoint,{x:this.oldX,y:this.oldY}).forEach(({x:e,y:t})=>{_.fillRect(Math.floor(e/this.size)*this.size,Math.floor(t/this.size)*this.size,this.size,this.size)})}this.oldX=this.x,this.oldY=this.y}_.lineWidth=3,this.ctx.fillStyle=""+e,T()}chooseColor(){let e,t=this,i=localStorage.getItem("canvas");this.img.src=i,this.img.onload=function(){var i,n,o;t.ctx.drawImage(this,0,0),e=t.ctx.getImageData(t.startPoint.x,t.startPoint.y,1,1).data,t.previous_color.firstElementChild.value=t.сurrent_color.firstElementChild.value,t.сurrent_color.firstElementChild.value=(i=e[0],n=e[1],o=e[2],"#"+((1<<24)+(i<<16)+(n<<8)+o).toString(16).slice(1))}}bucketTool(e){const t=this.canvas,i=this.ctx;let n=i.getImageData(0,0,t.width,t.height),o=null;2===e.button?(o=c.convertHexToRgba(s.secondaryColor),i.fillStyle=s.secondaryColor):(i.fillStyle=s.primaryColor,o=c.convertHexToRgba(s.primaryColor)),function(e){n=i.getImageData(0,0,t.width,t.height);let a=e.offsetX,l=e.offsetY;a=Math.floor(a),l=Math.floor(l);const s=c.getPixelColor(n,a,l),r=[[a,l]],m=i.getImageData(0,0,t.width,t.height),d=s.r,u=s.g,h=s.b;if(d!=o.r||u!=o.g||h!=o.b){for(;r.length;){let e=[],i=null,n=null,o=null,a=null,l=null;for(e=r.pop(),[a,l]=[e[0],e[1]],i=4*(l*t.width+a);l>=0&&g(i);)l-=1,i-=4*t.width;for(i+=4*t.width,n=!1,o=!1;l<t.height-1&&g(i);)l+=1,f(i),a>0&&(g(i-4)?n||(r.push([a-1,l]),n=!0):n&&(n=!1)),a<t.width-1&&(g(i+4)?o||(r.push([a+1,l]),o=!0):o&&(o=!1)),i+=4*t.width}i.putImageData(m,0,0),T()}function g(e){const t=m.data[e],i=m.data[e+1],n=m.data[e+2];return t==d&&i==u&&n==h}function f(e){m.data[e]=o.r,m.data[e+1]=o.g,m.data[e+2]=o.b,m.data[e+3]=255}}(e)}canvasChange(e){let t=localStorage.getItem("canvas");_.fillStyle="#ffffff",_.fillRect(0,0,512,512);let i=new Image;i.src=t,i.onload=function(){_.drawImage(i,256-e/2,256-e/2,e,e),n()}}};function T(){let e=document.querySelector(".section-main-frame-canvas.act").id,t=document.getElementById(`${e}`).getContext("2d");n(e);let i=localStorage.getItem(`${e}`),o=new Image;o.src=i,o.onload=function(){t.drawImage(o,0,0,100,100)},B=document.querySelectorAll(".section-main-frame-canvas"),P()}function P(){let e=document.getElementById("animation"),t=[];B=document.querySelectorAll(".section-main-frame-canvas"),B.forEach(e=>{let i=localStorage.getItem(`${e.id}`);t.push(i)});let i=new Image;new r({ctx:e.getContext("2d"),image:i,array:t,width:400,height:80,numberOfFrames:t.length,ticksPerFrame:L})}q.init(),q.clearEvent(),q.colorChangeEvent(),(new class{constructor(){this.tools=document.querySelector(".section-main-sidebar-tools-list")}showmessage(){this.tools.addEventListener("mouseover",e=>{let t=e.target,i=t.getAttribute("data-tooltip");if(i){let e=document.createElement("div");e.className="tooltip",e.innerHTML=i||tooltipchild,document.body.appendChild(e);let n=t.getBoundingClientRect(),o=n.left+(t.offsetWidth-e.offsetWidth)/2;o<0&&(o=0);let a=n.top-e.offsetHeight-5;a<0&&(a=n.top+t.offsetHeight+5),e.style.left=o+"px",e.style.top=a+"px",this.showingTooltip=e}}),this.tools.addEventListener("mouseout",e=>{this.showingTooltip&&(document.body.removeChild(this.showingTooltip),this.showingTooltip=null)})}}).showmessage(),function(){let e=localStorage.getItem("canvas"),t=localStorage.getItem("link");if(e&&"0"===t){let t=new Image;t.src=e,t.onload=function(){_.drawImage(t,0,0)}}else 0!==t?function(e){_.fillStyle="#ffffff",_.fillRect(0,0,512,512);let t=new Image;t.src=e,t.onload=function(){_.drawImage(t,256-t.width/2,256-t.height/2)}}(t):(_.fillStyle="#ffffff",_.fillRect(0,0,512,512));T()}(),S.addEventListener("click",e=>{document.querySelector(".section-main-frame-canvas.act").classList.remove("act");let t=w.children.length,i=`canvas_${+w.children[t-1].children[0].id.split("_")[1]+1}`,n=document.createElement("canvas"),o=document.createElement("div"),a=document.createElement("button"),l=document.createElement("button");a.className="button",a.innerText="X",l.className="copy",l.innerText="C",n.className="section-main-frame-canvas act",n.id=i,n.width=100,n.height=100,w.appendChild(o),o.appendChild(n),o.appendChild(l),o.appendChild(a),B=document.querySelectorAll(".section-main-frame-canvas"),P()}),C.addEventListener("change",e=>{L=+e.target.value,P()}),w.addEventListener("click",e=>{if("button"==e.target.classList[0]){e.target.parentNode.remove();let t=w.children.length;w.children[t-1].children[0].className="section-main-frame-canvas act",B=document.querySelectorAll(".section-main-frame-canvas"),P()}else if("copy"==e.target.classList[0]){let t=document.createElement("canvas"),i=document.createElement("div"),o=document.createElement("button"),a=document.createElement("button"),l=e.target.previousElementSibling.id,s=`${l}copy_${function(e,t){let i=e-.5+Math.random()*(t-e+1);return Math.round(i)}(1,100)}`;o.className="button",o.innerText="X",a.className="copy",a.innerText="C",t.className="section-main-frame-canvas act",t.width=100,t.height=100,t.id=s,e.target,e.target.parentElement.previousElementSibling&&e.target.parentElement.nextElementSibling?w.insertBefore(i,e.target.parentElement.nextElementSibling):!e.target.parentElement.previousElementSibling&&e.target.parentElement.nextElementSibling?w.insertBefore(i,e.target.parentElement.nextElementSibling):!e.target.parentElement.previousElementSibling&&e.target.parentElement.nextElementSibling?w.insertBefore(i,e.target.parentElement.nextElementSibling):e.target.parentElement.nextElementSibling||w.appendChild(i),i.appendChild(t),i.appendChild(a),i.appendChild(o),document.querySelector(".section-main-frame-canvas.act").classList.remove("act");let c=w.children.length;w.children[c-1].children[0].className="section-main-frame-canvas act",function(e,t){let i=document.getElementById(`${e}`).getContext("2d"),o=localStorage.getItem(`${t}`),a=new Image;a.src=o,a.onload=function(){i.drawImage(a,0,0,100,100),n(e,o)}}(s,l),B=document.querySelectorAll(".section-main-frame-canvas"),P()}}),x.forEach(e=>{e.addEventListener("click",t=>{let i=e.id;q.activeButton(i),document.querySelector(".section-main-switch__button.active").classList.remove("active"),t.target.classList.toggle("active")})}),E.forEach(e=>{e.addEventListener("click",t=>{document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active");let i=e.firstElementChild.id;q.activeTool(i),"section-main-sidebar-tools-list__item"===t.target.className?t.target.firstChild.classList.toggle("active"):t.target.classList.toggle("active")})}),document.addEventListener("keydown",e=>{66===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),d.classList.toggle("active"),q.activeTool("paint_bucket")):80===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),h.classList.toggle("active"),q.activeTool("pencil")):67===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),u.classList.toggle("active"),q.activeTool("choose_color")):79===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),g.classList.toggle("active"),q.activeTool("pencil2")):73===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),f.classList.toggle("active"),q.activeTool("pencil3")):76===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),v.classList.toggle("active"),q.activeTool("line")):69===e.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),p.classList.toggle("active"),q.activeTool("eraser")):88===e.keyCode&&(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),y.children[0].classList.toggle("active"),_.fillStyle="#ffffff",_.fillRect(0,0,512,512),T())}),I.addEventListener("click",e=>{document.getElementById("wrapper-loading-page").style.display="none",document.getElementById("wrapper-main-page").style.display="block"}),i(1),i(2)}]);