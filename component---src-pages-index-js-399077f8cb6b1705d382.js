/*! For license information please see component---src-pages-index-js-399077f8cb6b1705d382.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2W6z":function(e,t,n){"use strict";var o=function(){};e.exports=o},"2rMq":function(e,t,n){var o;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o)}()},"2zs7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,a=n("2rMq");var r=((o=a)&&o.__esModule?o:{default:o}).default,l=r.canUseDOM?window.HTMLElement:{};t.canUseDOM=r.canUseDOM;t.default=l},"9rZX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n("qFS3"),r=(o=a)&&o.__esModule?o:{default:o};t.default=r.default,e.exports=t.default},Is02:function(e,t,n){},QEso:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("q1tI"),i=y(l),s=y(n("17x9")),u=h(n("VKEO")),c=y(n("S1to")),d=h(n("Ye7m")),f=h(n("fbhf")),p=y(n("2zs7")),m=y(n("UIKY"));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function y(e){return e&&e.__esModule?e:{default:e}}n("WkvU");var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,a=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&f.remove(document.body,r),a&&f.remove(document.getElementsByTagName("html")[0],a),o&&b>0&&0===(b-=1)&&d.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(u.returnFocus(),u.teardownScopedFocus()):u.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(u.setupScopedFocus(n.node),u.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":a(t))?t:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},r=o.base;return n.state.afterOpen&&(r=r+" "+o.afterOpen),n.state.beforeClose&&(r=r+" "+o.beforeClose),"string"==typeof t&&t?r+" "+t:r},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&f.add(document.body,a),o&&f.add(document.getElementsByTagName("html")[0],o),n&&(b+=1,d.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,a=e.overlayClassName,r=e.defaultStyles,l=n?{}:r.content,s=a?{}:r.overlay;return this.shouldBeClosed()?null:i.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",a),style:o({},s,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},i.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(l.Component);g.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},g.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.instanceOf(p.default),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,testId:s.default.string},t.default=g,e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("Wbzz"),l=n("9eSz"),i=n.n(l),s=n("Bl7J"),u=n("vrFN"),c={display:"flex",justifyContent:"space-between",flexDirection:"column",maxWidth:"600px",marginLeft:"auto",marginRight:"auto"},d={color:"#d76229",textAlign:"center",fontFamily:"Nunito",textDecoration:"none"},f={color:"#3D405B",textAlign:"center",padding:"20px",fontFamily:"Nunito",fontWeight:"bolder"},p={color:"#3D405B",textAlign:"center",padding:"auto",fontFamily:"Nunito"},m={margin:"auto",maxWidth:"15%"},h={color:"#3D405B",textAlign:"center",padding:"20px",fontFamily:"Nunito",fontSize:"fit-width"},y=function(){var e=Object(r.useStaticQuery)("599351841");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:c},a.a.createElement("p",{style:f},"Nice to meet you! I'm Dan. "),a.a.createElement("p",{style:p},"I'm an Irish Backend Engineer working in the Games Industry and living in Annecy, France. If you'd like to work together, ",a.a.createElement(r.Link,{style:d,to:"/#contact"},"let's talk!")),a.a.createElement("div",null,a.a.createElement(i.a,{style:m,fluid:e.GB.childImageSharp.fluid}),a.a.createElement("p",{style:h}))))};var v={display:"flex",justifyContent:"space-between",flexDirection:"column",maxWidth:"600px",marginLeft:"auto",marginRight:"auto"},b={background:"#FCE181",color:"#3D405B",textAlign:"center",padding:"10px",fontFamily:"california-dealership",fontSize:"2rem"},g={color:"#3D405B",textAlign:"center",padding:"5px",fontFamily:"Nunito",textDecoration:"none"},C=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:b},"Bio"),a.a.createElement("div",{style:v},a.a.createElement("p",{style:g},"Hi! I'm Dan, an Irish Software Engineer living in France. I love learning, tinkering and creating."),a.a.createElement("p",{style:g},"I've worked professionally on a number of AAA titles, and develop my own games as a hobby. My goal is to create compelling games and robust services.")))},O=n("9rZX"),E=n.n(O);E.a.setAppElement("#___gatsby");var w={width:"75%",margin:"auto"},x={overlay:{backgroundColor:"rgba(0, 0, 0, 0.58)"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",maxWidth:"550px",margin:"32px auto",padding:0,border:0,color:"#81B29A",backgroundColor:"#3D405B",textAlign:"center",textDecoration:"none"}},k={display:"block",color:"#3D405B",textAlign:"center",textDecoration:"none",fontFamily:"california-dealership"},S={width:"100%"},j=function(e){var t=Object(o.useState)(!1),n=t[0],r=t[1],l=function(){r(!1)};return a.a.createElement("div",{className:"project",style:w},a.a.createElement("div",{style:k},a.a.createElement("div",{className:"project-image",style:S},a.a.createElement(i.a,{fluid:e.image.childImageSharp.fluid}))),a.a.createElement(E.a,{isOpen:n,onRequestClose:l,style:x,contentLabel:"Modal"},a.a.createElement("div",{css:{display:"flex",alignItems:"center",justifyItems:"center",margin:"auto",width:"50%"}},a.a.createElement("h2",null,e.title),a.a.createElement("button",{onClick:l},"Close Modal"))))},M=n("uhP2"),A=n.n(M),D={display:"flex",justifyContent:"space-between",flexDirection:"column",maxWidth:"600px",marginLeft:"auto",marginRight:"auto"},_={background:"#FCE181",color:"#3D405B",textAlign:"center",padding:"10px",fontFamily:"california-dealership",fontSize:"2rem"},N={color:"#3D405B",textAlign:"center",padding:"5px",fontFamily:"Nunito",textDecoration:"none"},F={display:"grid",gridTemplateColumns:"repeat(auto-fit, 200px)",gridGap:"40px",gridAutoRows:"minMax(100px, auto)",justifyContent:"center",justifyItems:"center",margin:"40px"},R={color:"#d76229",textAlign:"center",fontFamily:"Nunito",textDecoration:"none"},P=function(e){var t=Object(r.useStaticQuery)("2915209858");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{id:"experience",style:_},"Experience"),a.a.createElement("div",{style:D},a.a.createElement("p",{style:N},"I've been fortunate to work in some fantastic workplaces in my career."),a.a.createElement("p",{style:N}," ",a.a.createElement("a",{href:A.a,style:R},"Click here for my CV")," ")),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"ExperienceTiles",style:F},a.a.createElement(j,{image:t.demonware,title:"Demonware",category:"April 2017 – May 2020"}),a.a.createElement(j,{image:t.ubiAnnecy,title:"Ubisoft Annecy",category:"September 2015 – February 2017"}),a.a.createElement(j,{image:t.ubiReflections,title:"Ubisoft Reflections",category:"July 2014 – September 2015"}))))};var T={width:"75%",margin:"auto"},I={display:"block",color:"#3D405B",textAlign:"center",textDecoration:"none",fontFamily:"california-dealership"},L={padding:"0.2rem 0.2rem",width:"100%"},U={fontSize:"1.75rem"},B={fontSize:"1rem"},W=function(e){return a.a.createElement("div",{className:"project",style:T},a.a.createElement(r.Link,{to:e.link,style:I},a.a.createElement("div",{className:"project-image",style:L},a.a.createElement(i.a,{fluid:e.image.childImageSharp.fluid})),a.a.createElement("div",{style:{padding:"5px 0px"}},a.a.createElement("div",{className:"project-title",style:U},e.title),a.a.createElement("div",{className:"project-category",style:B},e.category))))},q=(n("Is02"),{background:"#FCE181",color:"#3D405B",textAlign:"center",padding:"10px",fontFamily:"california-dealership",fontSize:"2rem"}),H={display:"grid",gridTemplateColumns:"repeat(auto-fit, 200px)",gridGap:"40px",gridAutoRows:"minMax(100px, auto)",justifyContent:"center",justifyItems:"center",margin:"40px"},z=function(e){var t=Object(r.useStaticQuery)("751203460");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{id:"portfolio",style:q},"Personal Portfolio"),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"PortfolioTiles",style:H},a.a.createElement(W,{link:"/codename-rabbit",image:t.codenameRabbit,title:"Codename-Rabbit",category:"Unity Game"}),a.a.createElement(W,{link:"/sqg",image:t.sqg,title:"Super Quantum Gravity",category:"Unity Game"}),a.a.createElement(W,{link:"/fishtank",image:t.fishtank,title:"Fish Tank",category:"Unity Mobile Game"}),a.a.createElement(W,{link:"/lifecycle",image:t.lifecycle,title:"Lifecycle",category:"Unity Mobile Game"}))))},K={display:"flex",justifyContent:"space-between",flexDirection:"column",maxWidth:"600px",marginLeft:"auto",marginRight:"auto"},G={background:"#FCE181",color:"#3D405B",textAlign:"center",padding:"10px",fontFamily:"california-dealership",fontSize:"2rem"},Q={color:"#3D405B",textAlign:"center",padding:"0px",fontFamily:"Nunito",textDecoration:"none"},V={display:"grid",gridTemplateColumns:"repeat(auto-fit, 200px)",gridAutoRows:"minMax(30px, auto)",justifyContent:"center",justifyItems:"center",margin:"30px"},Y={width:"40%"},Z=function(){var e=Object(r.useStaticQuery)("810200485");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{id:"contact",style:G},"Let's talk!"),a.a.createElement("div",{style:K},a.a.createElement("p",{style:Q},"Would you like to work on something together? I'd love to hear from you!"),a.a.createElement("div",{className:"navigation",style:V},a.a.createElement("a",{style:Y,alt:"email:keohane.dan@gmail.com",href:"mailto:keohane.dan@gmail.com"},a.a.createElement(i.a,{fluid:e.email.childImageSharp.fluid})),a.a.createElement("a",{style:Y,href:"https://www.linkedin.com/in/dkeohane/"},a.a.createElement(i.a,{fluid:e.linkedin.childImageSharp.fluid})))))},J={background:"#F4F1DE"},X={margin:"auto",maxWidth:"5rem",maxHeight:"5rem"};t.default=function(e){var t=Object(r.useStaticQuery)("1067251331");return a.a.createElement(s.a,null,a.a.createElement(u.a,{title:"Home"}),a.a.createElement("div",{style:J},a.a.createElement(y,null),a.a.createElement(C,null),a.a.createElement(P,null),a.a.createElement(z,null),a.a.createElement(Z,null),a.a.createElement(r.Link,{to:"/#top"},a.a.createElement(i.a,{style:X,fluid:t.chevron.childImageSharp.fluid}))))}},S1to:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,r.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,a=t.shiftKey,l=n[0],i=n[n.length-1];if(e===document.activeElement){if(!a)return;o=i}i!==document.activeElement||a||(o=l);l===document.activeElement&&a&&(o=i);if(o)return t.preventDefault(),void o.focus();var s=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==s||"Chrome"==s[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=n.indexOf(document.activeElement);u>-1&&(u+=a?-1:1);if(void 0===(o=n[u]))return t.preventDefault(),void(o=a?i:l).focus();t.preventDefault(),o.focus()};var o,a=n("ZDLa"),r=(o=a)&&o.__esModule?o:{default:o};e.exports=t.default},UIKY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},VKEO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==l.length&&(e=l.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){i=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){i=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var o,a=n("ZDLa"),r=(o=a)&&o.__esModule?o:{default:o};var l=[],i=null,s=!1;function u(){s=!0}function c(){if(s){if(s=!1,!i)return;setTimeout((function(){i.contains(document.activeElement)||((0,r.default)(i)[0]||i).focus()}),0)}}},WkvU:function(e,t,n){"use strict";var o,a=n("UIKY"),r=(o=a)&&o.__esModule?o:{default:o};var l=void 0,i=void 0,s=[];function u(){0!==s.length&&s[s.length-1].focusContent()}r.default.subscribe((function(e,t){l&&i||((l=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),l.style.position="absolute",l.style.opacity="0",l.setAttribute("tabindex","0"),l.addEventListener("focus",u),(i=l.cloneNode()).addEventListener("focus",u)),(s=t).length>0?(document.body.firstChild!==l&&document.body.insertBefore(l,document.body.firstChild),document.body.lastChild!==i&&document.body.appendChild(i)):(l.parentElement&&l.parentElement.removeChild(l),i.parentElement&&i.parentElement.removeChild(i))}))},Ye7m:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=s,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var n=document.querySelectorAll(t);s(n,t),t="length"in n?n[0]:n}return i=t||i},t.validateElement=u,t.hide=function(e){u(e)&&(e||i).setAttribute("aria-hidden","true")},t.show=function(e){u(e)&&(e||i).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){i=null},t.resetForTesting=function(){i=null};var o,a=n("2W6z"),r=(o=a)&&o.__esModule?o:{default:o},l=n("2zs7");var i=null;function s(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){return!(!e&&!i)||((0,r.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var o=/input|select|textarea|button|object/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function r(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(a(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&r(e,!n)}e.exports=t.default},fbhf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},a={};t.add=function(e,t){return n=e.classList,r="html"==e.nodeName.toLowerCase()?o:a,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(r,e),n.add(e)}));var n,r},t.remove=function(e,t){return n=e.classList,r="html"==e.nodeName.toLowerCase()?o:a,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(r,e),0===r[e]&&n.remove(e)}));var n,r}},qFS3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),l=m(r),i=m(n("i8i4")),s=m(n("17x9")),u=m(n("QEso")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Ye7m")),d=n("2zs7"),f=m(d),p=n("94VI");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",g=void 0!==i.default.createPortal,C=function(){return g?i.default.createPortal:i.default.unstable_renderSubtreeIntoContainer};function O(e){return e()}var E=function(e){function t(){var e,n,a;h(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=a=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.removePortal=function(){!g&&i.default.unmountComponentAtNode(a.node);var e=O(a.props.parentSelector);e?e.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var n=C()(a,l.default.createElement(u.default,o({defaultStyles:t.defaultStyles},e)),a.node);a.portalRef(n)},y(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(g||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,O(this.props.parentSelector).appendChild(this.node),!g&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:O(e.parentSelector),nextParent:O(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,a=o.isOpen,r=o.portalClassName;e.portalClassName!==r&&(this.node.className=r);var l=n.prevParent,i=n.nextParent;i!==l&&(l.removeChild(this.node),i.appendChild(this.node)),(e.isOpen||a)&&!g&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&g?(!this.node&&g&&(this.node=document.createElement("div")),C()(l.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(r.Component);E.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.instanceOf(f.default),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func},E.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},E.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(E),t.default=E},uhP2:function(e,t,n){e.exports=n.p+"static/DKeohaneCV-fae468e5729d03ab03d88d3f1c207749.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-399077f8cb6b1705d382.js.map