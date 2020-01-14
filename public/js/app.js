!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./..",o(o.s=0)}([function(t,e,o){t.exports=o(3)},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";function i(t){localStorage.setItem("link",0),localStorage.setItem("canvas",canvas.toDataURL()),localStorage.setItem(`${t}`,canvas.toDataURL())}function n(t){return{x:t.offsetX,y:t.offsetY}}function l(t,e){return{x:10*Math.ceil(t/10),y:10*Math.ceil(e/10)}}function a(t,e,o,i){o.fillStyle=`${i}`,o.fillRect(t,e,10,10)}o.r(e);const s=new class{get primaryColor(){return document.querySelector("#сurrent").value}get secondaryColor(){return document.querySelector("#previous").value}},c=new class{getPixelColor(t,e,o){const i=4*(o*t.width+e),n={};return n.r=t.data[i],n.g=t.data[i+1],n.b=t.data[i+2],n.a=t.data[i+3],n}convertHexToRgba(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}};let r=document.getElementById("canvas"),d=document.getElementById("paint_bucket"),u=document.getElementById("choose_color"),m=document.getElementById("pencil"),h=document.getElementById("pencil2"),g=document.getElementById("pencil3"),f=document.getElementById("line"),v=document.getElementById("eraser"),p=document.getElementById("clear"),y=document.getElementById("сurrent_color"),b=document.querySelectorAll(".section-main-sidebar-tools-list__item"),_=document.querySelectorAll(".section-main-switch__button"),E=document.getElementById("btn_to-project"),x=document.getElementById("add"),C=document.getElementById("mainFrame"),I=r.getContext("2d");(new Image).src="assets/images/image.png";let w=new class{constructor(){this.canvas=document.getElementById("canvas"),this.ctx=r.getContext("2d"),this.img=new Image,this.tool="pencil",this.previous_color=document.getElementById("previous_color"),this.сurrent_color=document.getElementById("сurrent_color"),this.clear=document.getElementById("clear")}activeTool(t){this.tool=t}activeButton(t){switch(this.button=t,this.button){case"btn_4x4":this.canvasChange(1024);break;case"btn_32x32":this.canvasChange(256);break;case"btn_128x128":this.canvasChange(128)}}activeColor(t){this.color=t}init(){this.canvas.onmousedown=t=>this.mouseDown(t)}clearEvent(){this.clear.addEventListener("click",()=>{this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,512,512),S()})}colorChangeEvent(){let t=this.сurrent_color.firstElementChild.value;this.сurrent_color.addEventListener("change",e=>{this.previous_color.firstElementChild.value=t,t=y.firstElementChild.value})}mouseDown(t){switch(this.savedData=this.ctx.getImageData(0,0,this.canvas.clientWidth,this.canvas.clientHeight),this.canvas.onmousemove=t=>this.mouseMove(t),document.onmouseup=t=>this.mouseUp(t),this.startPoint=n(t),this.tool){case"choose_color":this.chooseColor();break;case"paint_bucket":this.bucketTool(t)}}mouseMove(t){switch(this.currentPoint=n(t),this.tool){case"pencil":case"pencil2":case"pencil3":case"line":this.draw(this.сurrent_color.firstElementChild.value);break;case"eraser":this.draw("#ffffff")}console.log(t.offsetX,t.offsetY)}mouseUp(t){this.canvas.onmousemove=null,document.onmouseup=null,this.oldX=this.oldY=null,this.endPoint=n(t)}draw(t){if("line"===this.tool){this.ctx.putImageData(this.savedData,0,0);const e=l(this.startPoint.x-10,this.startPoint.y-10),o=l(this.currentPoint.x-10,this.currentPoint.y-10);!function(t,e,o,i,n,l){let s,c,r,d,u,m,h,g,f,v,p;if(r=o-t,d=i-e,u=Math.abs(r),m=Math.abs(d),h=2*m-u,g=2*u-m,m<=u)for(r>=0?(s=t,c=e,f=o):(s=o,c=i,f=t),a(s,c,n,l),p=0;s<f;p++)s+=10,h<0?h+=2*m:(r<0&&d<0||r>0&&d>0?c+=10:c-=10,h+=2*(m-u)),a(s,c,n,l);else for(d>=0?(s=t,c=e,v=i):(s=o,c=i,v=e),a(s,c,n,l),p=0;c<v;p++)c+=10,g<=0?g+=2*u:(r<0&&d<0||r>0&&d>0?s+=10:s-=10,g+=2*(u-m)),a(s,c,n,l)}(e.x,e.y,o.x,o.y,this.ctx,t),S()}else if("pencil"===this.tool||"pencil2"===this.tool||"pencil3"===this.tool||"eraser"===this.tool){if("pencil"===this.tool?this.size=12:"pencil2"===this.tool?this.size=19:"pencil3"!==this.tool&&"eraser"!==this.tool||(this.size=36),this.currentPoint,this.x=this.currentPoint.x,this.y=this.currentPoint.y,null!==this.oldX&&null!=this.oldX){(function(t,e){let{x:o,y:i}=t,n=Math.abs(o-e.x),l=Math.abs(i-e.y),a=o<e.x?1:-1,s=i<e.y?1:-1,c=n-l,r=[];for(;r.push({x:o,y:i}),o!==e.x||i!==e.y;){const t=2*c;t>-l&&(c-=l,o+=a),t<n&&(c+=n,i+=s)}return console.log(r),r})(this.currentPoint,{x:this.oldX,y:this.oldY}).forEach(({x:t,y:e})=>{I.fillRect(Math.floor(t/this.size)*this.size,Math.floor(e/this.size)*this.size,this.size,this.size)})}this.oldX=this.x,this.oldY=this.y}I.lineWidth=3,this.ctx.fillStyle=""+t,S()}chooseColor(){let t,e=this,o=localStorage.getItem("canvas");this.img.src=o,this.img.onload=function(){var o,i,n;e.ctx.drawImage(this,0,0),t=e.ctx.getImageData(e.startPoint.x,e.startPoint.y,1,1).data,e.previous_color.firstElementChild.value=e.сurrent_color.firstElementChild.value,e.сurrent_color.firstElementChild.value=(o=t[0],i=t[1],n=t[2],"#"+((1<<24)+(o<<16)+(i<<8)+n).toString(16).slice(1))}}bucketTool(t){const e=this.canvas,o=this.ctx;let i=o.getImageData(0,0,e.width,e.height),n=null;2===t.button?(n=c.convertHexToRgba(s.secondaryColor),o.fillStyle=s.secondaryColor):(o.fillStyle=s.primaryColor,n=c.convertHexToRgba(s.primaryColor)),function(t){i=o.getImageData(0,0,e.width,e.height);let l=t.offsetX,a=t.offsetY;l=Math.floor(l),a=Math.floor(a);const s=c.getPixelColor(i,l,a),r=[[l,a]],d=o.getImageData(0,0,e.width,e.height),u=s.r,m=s.g,h=s.b;if(u!=n.r||m!=n.g||h!=n.b){for(;r.length;){let t=[],o=null,i=null,n=null,l=null,a=null;for(t=r.pop(),[l,a]=[t[0],t[1]],o=4*(a*e.width+l);a>=0&&g(o);)a-=1,o-=4*e.width;for(o+=4*e.width,i=!1,n=!1;a<e.height-1&&g(o);)a+=1,f(o),l>0&&(g(o-4)?i||(r.push([l-1,a]),i=!0):i&&(i=!1)),l<e.width-1&&(g(o+4)?n||(r.push([l+1,a]),n=!0):n&&(n=!1)),o+=4*e.width}o.putImageData(d,0,0),S()}function g(t){const e=d.data[t],o=d.data[t+1],i=d.data[t+2];return e==u&&o==m&&i==h}function f(t){d.data[t]=n.r,d.data[t+1]=n.g,d.data[t+2]=n.b,d.data[t+3]=255}}(t)}canvasChange(t){let e=localStorage.getItem("canvas");I.fillStyle="#ffffff",I.fillRect(0,0,512,512);let o=new Image;o.src=e,o.onload=function(){I.drawImage(o,256-t/2,256-t/2,t,t),i()}}};function S(){let t=document.querySelector(".section-main-frame-canvas.act").id,e=document.getElementById(`${t}`).getContext("2d");i(t);let o=localStorage.getItem(`${t}`),n=new Image;n.src=o,n.onload=function(){e.drawImage(n,0,0,100,100)}}w.init(),w.clearEvent(),w.colorChangeEvent(),(new class{constructor(){this.tools=document.querySelector(".section-main-sidebar-tools-list")}showmessage(){this.tools.addEventListener("mouseover",t=>{let e=t.target,o=e.getAttribute("data-tooltip");if(o){let t=document.createElement("div");t.className="tooltip",t.innerHTML=o||tooltipchild,document.body.appendChild(t);let i=e.getBoundingClientRect(),n=i.left+(e.offsetWidth-t.offsetWidth)/2;n<0&&(n=0);let l=i.top-t.offsetHeight-5;l<0&&(l=i.top+e.offsetHeight+5),t.style.left=n+"px",t.style.top=l+"px",this.showingTooltip=t}}),this.tools.addEventListener("mouseout",t=>{this.showingTooltip&&(document.body.removeChild(this.showingTooltip),this.showingTooltip=null)})}}).showmessage(),function(){let t=localStorage.getItem("canvas"),e=localStorage.getItem("link");if(t&&"0"===e){let e=new Image;e.src=t,e.onload=function(){I.drawImage(e,0,0)}}else 0!==e?function(t){I.fillStyle="#ffffff",I.fillRect(0,0,512,512);let e=new Image;e.src=t,e.onload=function(){I.drawImage(e,256-e.width/2,256-e.height/2)}}(e):(I.fillStyle="#ffffff",I.fillRect(0,0,512,512));S()}(),x.addEventListener("click",t=>{document.querySelector(".section-main-frame-canvas.act").classList.remove("act");let e=C.children.length,o=`canvas_${+C.children[e-1].children[0].id.split("_")[1]+1}`,i=document.createElement("canvas"),n=document.createElement("div"),l=document.createElement("button"),a=document.createElement("button");l.className="button",l.innerText="X",a.className="copy",a.innerText="C",i.className="section-main-frame-canvas act",i.id=o,i.width=100,i.height=100,C.appendChild(n),n.appendChild(i),n.appendChild(a),n.appendChild(l)}),C.addEventListener("click",t=>{if("button"==t.target.classList[0]){t.target.parentNode.remove();let e=C.children.length;C.children[e-1].children[0].className="section-main-frame-canvas act"}else if("copy"==t.target.classList[0]){let e=document.createElement("canvas"),o=document.createElement("div"),i=document.createElement("button"),n=document.createElement("button");i.className="button",i.innerText="X",n.className="copy",n.innerText="C",e.className="section-main-frame-canvas act",e.width=100,e.height=100,t.target,t.target.parentNode.insertBefore(o,t.target.parentNode.nextSibling),o.appendChild(e),o.appendChild(n),o.appendChild(i)}}),_.forEach(t=>{t.addEventListener("click",e=>{let o=t.id;w.activeButton(o),document.querySelector(".section-main-switch__button.active").classList.remove("active"),e.target.classList.toggle("active")})}),b.forEach(t=>{t.addEventListener("click",e=>{document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active");let o=t.firstElementChild.id;w.activeTool(o),"section-main-sidebar-tools-list__item"===e.target.className?e.target.firstChild.classList.toggle("active"):e.target.classList.toggle("active")})}),document.addEventListener("keydown",t=>{66===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),d.classList.toggle("active"),w.activeTool("paint_bucket")):80===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),m.classList.toggle("active"),w.activeTool("pencil")):67===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),u.classList.toggle("active"),w.activeTool("choose_color")):79===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),h.classList.toggle("active"),w.activeTool("pencil2")):73===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),g.classList.toggle("active"),w.activeTool("pencil3")):76===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),f.classList.toggle("active"),w.activeTool("line")):69===t.keyCode?(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),v.classList.toggle("active"),w.activeTool("eraser")):88===t.keyCode&&(document.querySelector(".section-main-sidebar-tools-list__item-img.active").classList.remove("active"),p.children[0].classList.toggle("active"),I.fillStyle="#ffffff",I.fillRect(0,0,512,512),S())}),E.addEventListener("click",t=>{document.getElementById("wrapper-loading-page").style.display="none",document.getElementById("wrapper-main-page").style.display="block"}),o(1),o(2)}]);