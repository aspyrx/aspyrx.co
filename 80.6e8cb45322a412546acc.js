(self.webpackChunkaspyrx_co=self.webpackChunkaspyrx_co||[]).push([[80],{80:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createRoot:()=>i.C,render:()=>X});var r=n(72),o=n(504),i=n(352),a=n(268),c=n(284),s=n(768);function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>null,n=null;class r extends o.Component{constructor(){super(),this.state={Component:n}}componentDidMount(){this.state.Component||e((e=>{let{default:t}=e;n=t,this.setState({Component:t})}))}render(){const{Component:e}=this.state;return e?o.createElement(e,this.props):o.createElement(t,this.props)}}return r}const p="spinner-mN5pe";function m(){return o.createElement("div",{className:p})}var u=n(764),h=n(84),d=n.n(h);const f={transitionReplace:"transitionReplace-PXUNL",appear:"appear-fBZzk",appearActive:"appearActive-XWkVo",enter:"enter-Vma7Z",enterActive:"enterActive-qkX_Q",leave:"leave-_7R9O",leaveActive:"leaveActive-Q422f",fromRight:"fromRight-PS4vN"};function g(e){const{children:t,className:n,fromRight:i,fromRightName:a,...c}=e,s=d()(n,{[a]:i});return o.createElement(u.c,(0,r.c)({className:s},c),t)}g.defaultProps={overflowHidden:!1,transitionAppear:!0,transitionAppearTimeout:750,transitionEnterTimeout:300,transitionLeaveTimeout:300,transitionName:["appear","appearActive","enter","enterActive","leave","leaveActive"].reduce(((e,t)=>(e[t]=f[t],e)),{}),className:f.transitionReplace,fromRightName:f.fromRight},g.propTypes={children:a.element,className:a.string,fromRight:a.bool,fromRightName:a.string};var v=n(228),E=n.n(v);const R=n(144),N=n(992),x={children:Object.create(null)},k=R.keys().map((function(e){const t=R(e),n=e.match(/.(\/|\/.*\/)route.json$/)[1];let r;try{r=N(`.${n}index.js`)}catch(e){r=N(`.${n}index.md`)}const o=n.split("/").slice(1,-1).reduce(((e,t)=>(t in e.children||(e.children[t]={children:Object.create(null)}),e.children[t])),x);return Object.assign(o,t),o.path=n,o.getComponent=r,o})).sort(((e,t)=>t.path.length-e.path.length)),y={header:"header-_Y6bK",navigationFadeInDown:"navigationFadeInDown-ucqMZ",active:"active-Rid2w",logo:"logo-YdSS8",logoText:"logoText-ZoXdp",icon:"icon-OFaZa",logoTextShow:"logoTextShow-E19uO",right:"right-VjbQ4",logoRight:"logoRight-qHmnJ",left:"left-OBHJX",logoLeft:"logoLeft-efhjs",middle:"middle-eLzrn",logoMiddle:"logoMiddle-x146I"};function j(){return o.createElement("div",{className:y.logo},o.createElement("div",{className:y.icon},o.createElement("div",{className:y.right},o.createElement("div",{className:y.left},o.createElement("div",{className:y.middle})))),o.createElement("div",{className:y.logoText},o.createElement("span",null,"SPYRX"),".co"))}function O(e){const{config:{path:t,title:n},...i}=e;return o.createElement(s.Af,(0,r.c)({key:t,to:t,className:e=>{let{isActive:t}=e;return t?y.active:""}},i),n)}function b(e){const t=e.locations.map((e=>o.createElement(O,{key:e.path,config:e})));return o.createElement("header",{className:y.header},o.createElement(s.cH,{to:"/"},o.createElement(j,null)),o.createElement("nav",{className:y.navigation},t))}O.propTypes={config:(0,a.shape)({path:a.string.isRequired,title:a.string.isRequired}).isRequired},b.propTypes={locations:(0,a.arrayOf)((0,a.shape)({path:a.string.isRequired,title:a.string.isRequired})).isRequired};const T=Object.create(null),C=function(e,t){const{path:n,title:r,children:o}=e,i={path:n,title:r};t[""]=0;const a=Object.keys(o).sort(((e,t)=>e.length-t.length)).map(((e,n)=>(t[e]=n+1,o[e])));return[i].concat(a)}(x,T);class A extends o.Component{static get propTypes(){return{loc:a.string}}constructor(){super(),this.state={fromRight:!1}}componentDidUpdate(e){const{loc:t=""}=e,{loc:n=""}=this.props;if(n===t)return;const r=T[n]>T[t],{fromRight:o}=this.state;r!==o&&this.setState({fromRight:r})}render(){const{loc:e}=this.props,{fromRight:t}=this.state;return o.createElement(g,{component:"main",fromRight:t},o.createElement("div",{key:e},o.createElement(c.yY,null)))}}function w(){const{pathname:e}=(0,c.IT)(),t=e.split("/")[1];return o.createElement("div",{className:"containers-t1v89"},o.createElement(b,{locations:C}),o.createElement(A,{loc:t}))}const q=(0,c._y)(o.createElement(c.kX,{element:o.createElement(w,null)},k.map((function(e){const{childRoutes:t,path:n,getComponent:i}=e,a="/"===n?{index:!0}:{path:n.substring(1)+(t?"*":"")};return o.createElement(c.kX,(0,r.c)({key:n,Component:l(i,m)},a))})),o.createElement(c.kX,{path:"/*",Component:l(E(),m)}))),_=(0,s.Wq)(q);function X(e){e.render(o.createElement(s.eT,{router:_}))}},228:(e,t,n)=>{e.exports=function(e){n.e(244).then(function(t){e(n(244))}.bind(null,n)).catch(n.oe)}},456:(e,t,n)=>{e.exports=function(e){n.e(64).then(function(t){e(n(64))}.bind(null,n)).catch(n.oe)}},748:(e,t,n)=>{e.exports=function(e){n.e(44).then(function(t){e(n(44))}.bind(null,n)).catch(n.oe)}},144:(e,t,n)=>{var r={"./projects/route.json":798,"./route.json":624};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=144},992:(e,t,n)=>{var r={"./index.js":456,"./projects/index.js":748};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=992},798:e=>{"use strict";e.exports={title:"projects"}},624:e=>{"use strict";e.exports={title:"home"}}}]);