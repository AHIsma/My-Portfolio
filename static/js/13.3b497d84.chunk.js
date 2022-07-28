(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[13],{132:function(e,t,n){"use strict";var a=n(0),c=n(385),o=n(393),i=n(41),r=n(456),s=n(2),l=function(e){var t=e.onClose,n=Object(a.useContext)(i.a),l=n.isDarkMode,u=n.setIsDarkMode,j=Object(r.a)().t;return Object(s.jsx)(c.a,{control:Object(s.jsx)(o.a,{checked:l,name:"checkedDarkMode",color:"primary",onChange:function(){t&&t(),u(!l)}}),label:j("dark_mode")})};t.a=l},446:function(e,t,n){"use strict";n.r(t);var a=n(18),c=n(0),o=n.n(c),i=n(90),r=n(78),s=n(439),l=n(440),u=n(453),j=n(418),b=n(458),d=n(443),m=n(31),O=n(4),p=n(135),f=n(41),x=n(2),h=function(e){return console.log(f.a),Object(x.jsx)("img",{style:{maxWidth:"14%",margin:"auto"},src:f.a._currentValue.isDarkMode?"logo-full-dark.png":"logo-full-light.png",alt:"My Logo"})},g=["setHomeIsActive"],v=Object(j.a)((function(e){return{root:{cursor:"pointer"}}})),y=function(e){var t=e.setHomeIsActive,n=Object(O.a)(e,g),a=v();return Object(x.jsx)(p.Link,{spy:!0,smooth:!0,duration:500,offset:-70,to:"home",onSetActive:function(){return t(!0)},onSetInactive:function(){return t(!1)},className:a.root,children:Object(x.jsx)(h,Object(m.a)({},n))})},C=n(421),k=n(424),w=n(38),I=n(425),N=n(447),_=n(392),S=n(437),A=n(436),E=n(34),M=n(456),L=(n(384),[{code:"fr",name:"FR",country_code:"fr"},{code:"en",name:"EN",country_code:"gb"}]),D=Object(j.a)((function(e){return{profileMenu:{"& .MuiPaper-root":{backgroundColor:e.palette.primary.main,marginTop:"2px",boxShadow:e.shadows[4]}},menuItem:{"&:hover":{backgroundColor:e.backgroundSecondary}},flagIcon:{marginRight:e.spacing(1)}}})),R=function(e){var t=D(),n=Object(M.a)().t,o=Object(c.useState)(null),i=Object(a.a)(o,2),r=i[0],s=i[1],l=function(t){E.a.changeLanguage(t),s(null),e.onClose&&e.onClose()},u=L.find((function(e){return e.code===n("language")}));return Object(x.jsxs)("div",Object(m.a)(Object(m.a)({},e),{},{children:[Object(x.jsxs)(C.a,{variant:"contained",color:"primary",onClick:function(e){return s(e.currentTarget)},children:[u&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"flag-icon flag-icon-".concat(u.country_code," ").concat(t.flagIcon)}),u.name]}),Object(x.jsx)(A.a,{style:{color:"white"}})]}),Object(x.jsxs)(_.a,{id:"profile-menu",anchorEl:r,open:Boolean(r),onClose:function(){return s(null)},keepMounted:!0,elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},className:t.profileMenu,disableScrollLock:!0,children:[Object(x.jsxs)(S.a,{className:t.menuItem,onClick:function(){return l("en")},children:[Object(x.jsx)("span",{className:"flag-icon flag-icon-gb ".concat(t.flagIcon)}),"EN"]}),Object(x.jsxs)(S.a,{className:t.menuItem,onClick:function(){return l("fr")},children:[Object(x.jsx)("span",{className:"flag-icon flag-icon-fr ".concat(t.flagIcon)}),"FR"]})]})]}))},T=n(40),H={spy:!0,smooth:!0,offset:-70,duration:500},F=o.a.forwardRef((function(e,t){return Object(x.jsx)(d.a.div,{ref:t,custom:e.custom,animate:e.animate,children:Object(x.jsx)(p.Link,Object(m.a)(Object(m.a)({},H),e))})})),P=Object(j.a)((function(e){return{wrapper:{display:"flex",alignItems:"center"},tabs:{marginRight:e.spacing(4)},navMenuItem:{marginRight:e.spacing(1)}}})),U=Object(w.a)((function(e){return{root:{transition:".2s",minWidth:120,"&:hover":{color:e.palette.text.primary}}}}))((function(e){return Object(x.jsx)(I.a,Object(m.a)({disableRipple:!0},e))})),W=Object(w.a)({indicator:{"& > span":{maxWidth:20}}})((function(e){return Object(x.jsx)(N.a,Object(m.a)(Object(m.a)({},e),{},{variant:"fullWidth",TabIndicatorProps:{children:Object(x.jsx)("span",{})}}))})),B=function(e){var t=e.homeIsActive,n=P(),o=Object(c.useState)(!1),i=Object(a.a)(o,2),r=i[0],s=i[1],l=Object(c.useState)(!1),u=Object(a.a)(l,2),j=u[0],m=u[1],O=Object(c.useContext)(T.a).isLoading,f=Object(b.a)(),h=Object(M.a)().t;Object(c.useEffect)((function(){p.Events.scrollEvent.register("begin",(function(e,t){m(!0)})),p.Events.scrollEvent.register("end",(function(e,t){m(!1)}))})),Object(c.useEffect)((function(){O?f.start({opacity:0,y:-5}):f.start((function(e){return{y:0,opacity:1,transition:{delay:.1*e+.3}}}))}),[O,f]);var g=function(e){j||s(e)};return Object(c.useEffect)((function(){t&&s(!1)}),[t]),Object(x.jsxs)("div",{className:n.wrapper,children:[Object(x.jsxs)(W,{className:n.tabs,value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){s(t)},"aria-label":"disabled tabs example",children:[Object(x.jsx)(U,{component:F,custom:0,animate:f,to:"about",label:h("menu_about"),onSetActive:function(){return g(0)},onSetInactive:function(){return g(!1)}}),Object(x.jsx)(U,{component:F,animate:f,custom:1,to:"experience",label:h("menu_experience"),onSetActive:function(){return g(1)}}),Object(x.jsx)(U,{component:F,animate:f,custom:2,to:"projects",label:h("menu_projects"),onSetActive:function(){return g(2)}}),Object(x.jsx)(U,{component:F,animate:f,custom:3,to:"contact",label:h("menu_contact"),onSetActive:function(){return g(3)}})]}),Object(x.jsx)(d.a.div,{custom:4,animate:f,children:Object(x.jsx)(C.a,{component:k.a,href:"/My-Portfolio/CV_Ismail_AIT_HADDOU_FR.pdf",variant:"outlined",color:"primary",underline:"none",children:h("menu_resume")})}),Object(x.jsx)(d.a.div,{custom:5,animate:f,children:Object(x.jsx)(R,{style:{marginLeft:"32px"}})})]})},V=n(452),z=n(435),J=n(438),K=n(386),Y=n(132),q=Object(j.a)((function(e){return{drawer:{backgroundColor:e.palette.background.default},list:{width:250},fullList:{width:"auto",marginTop:e.spacing(4)},listItem:{display:"flex",justifyContent:"center",padding:e.spacing(2,0),"&:hover":{backgroundColor:"rgb(80,80,80)"}},btnContainer:{display:"flex",justifyContent:"center",marginTop:e.spacing(1)},active:{backgroundColor:e.palette.primary.main}}})),G=function(e){var t=e.open,n=e.onClose,a=(e.onOpen,q()),c=Object(M.a)().t,o={button:!0,component:p.Link,onClick:n,onKeyDown:n,spy:!0,smooth:!0,offset:0,duration:500,className:a.listItem,activeClass:a.active};return Object(x.jsx)(V.a,{anchor:"left",open:t,onClose:n,classes:{paper:a.drawer},children:Object(x.jsx)("div",{className:a.list,role:"presentation",children:Object(x.jsxs)(z.a,{className:a.fullList,children:[Object(x.jsx)(J.a,Object(m.a)(Object(m.a)({},o),{},{to:"about",children:c("menu_about")})),Object(x.jsx)(J.a,Object(m.a)(Object(m.a)({},o),{},{to:"experience",children:c("menu_experience")})),Object(x.jsx)(J.a,Object(m.a)(Object(m.a)({},o),{},{to:"projects",children:c("menu_projects")})),Object(x.jsx)(J.a,Object(m.a)(Object(m.a)({},o),{},{to:"contact",children:c("menu_contact")})),Object(x.jsx)(J.a,{className:a.btnContainer,children:Object(x.jsx)(C.a,{component:k.a,href:"/My-Portfolio/CV_Ismail_AIT_HADDOU_FR.pdf",variant:"outlined",color:"primary",underline:"none",children:c("menu_resume")})}),Object(x.jsx)(J.a,{className:a.btnContainer,children:Object(x.jsx)(R,{onClose:n})}),Object(x.jsx)(J.a,{className:a.btnContainer,children:Object(x.jsx)(Y.a,{onClose:n})}),Object(x.jsx)(K.a,{})]})})})},Q=["isOpen"],X=Object(j.a)((function(e){return{container:{overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"flex-end",cursor:"pointer",padding:"2px"},line:{height:"3px",backgroundColor:e.palette.text.secondary},line1:{width:"35px",marginBottom:"7px"},line2:{width:"25px",marginBottom:"7px"},line3:{width:"35px"}}})),Z=function(e){var t=e.isOpen,n=Object(O.a)(e,Q),a=Object(b.a)(),o=X();return Object(c.useEffect)((function(){t?a.start("animate"):a.start("initial")}),[t,a]),Object(x.jsxs)(d.a.div,Object(m.a)(Object(m.a)({className:o.container},n),{},{children:[Object(x.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line1),variants:{initial:{rotate:0,y:0},animate:{rotate:45,y:9}},animate:a}),Object(x.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line2),variants:{initial:{x:0,opacity:1},animate:{x:250,opacity:0}},animate:a}),Object(x.jsx)(d.a.div,{className:"".concat(o.line," ").concat(o.line3),variants:{initial:{rotate:0,y:0},animate:{rotate:-45,y:-9}},animate:a})]}))},$=Object(j.a)((function(e){return{logo:{width:"150px"},navbar:{backgroundColor:e.palette.background.default},toolbar:{justifyContent:"space-between",alignItems:"center",padding:function(t){return t.isMobile?e.spacing(0,2):e.spacing(0,6)}}}})),ee=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1],j=Object(i.a)("(max-width:700px)"),m=Object(c.useContext)(T.a).isLoading,O=Object(b.a)(),p=Object(r.a)(),f=Object(c.useState)(!1),h=Object(a.a)(f,2),g=h[0],v=h[1],C=Object(c.useState)(!1),k=Object(a.a)(C,2),w=k[0],I=k[1],N=$({scroll:g,isMobile:j});window.addEventListener("scroll",(function(){return v(window.scrollY>30)}));var _={initial:{height:j?"18%":"20%",boxShadow:p.shadows[0]},scrolled:{height:p.navbarHeight,boxShadow:p.shadows[10]}};return Object(c.useEffect)((function(){m?O.start({y:-100}):O.start({y:0,transition:{delay:.05,type:"spring",stiffness:260,damping:20}})}),[m,O]),Object(x.jsxs)(d.a.div,{animate:O,children:[Object(x.jsx)(s.a,{position:"fixed",elevation:0,className:N.navbar,component:"nav",children:Object(x.jsxs)(l.a,{className:N.toolbar,component:d.a.div,variants:_,animate:g?"scrolled":"initial",transition:{type:"spring",stiffness:260,damping:20},children:[Object(x.jsx)(y,{className:N.logo,setHomeIsActive:o}),Object(x.jsx)(u.a,{smDown:!0,children:Object(x.jsx)(B,{homeIsActive:n})}),Object(x.jsx)(u.a,{mdUp:!0,children:Object(x.jsx)(Z,{isOpen:w,onClick:function(){return I(!w)}})})]})}),Object(x.jsx)(u.a,{mdUp:!0,children:Object(x.jsx)(G,{open:w,onClose:function(){return I(!1)},onOpen:function(){return I(!0)}})})]})};t.default=ee}}]);
//# sourceMappingURL=13.3b497d84.chunk.js.map