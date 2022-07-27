(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[9,11],{126:function(t,a,e){"use strict";var i=e(31),o=e(4),n=(e(0),e(390)),c=e(424),s=e(418),r=e(443),l=e(2),d=["icon","href","fontSize"],m=Object(s.a)((function(t){return{icon:{color:t.palette.text.secondary,transition:"0.1s",cursor:"pointer",fontSize:function(t){return t.fontSize?"".concat(t.fontSize,"px"):"32px"},"&:hover":{color:t.palette.text.primary}}}}));a.a=function(t){var a=t.icon,e=t.href,s=t.fontSize,b=Object(o.a)(t,d),u=m({fontSize:s});return Object(l.jsx)(n.a,Object(i.a)(Object(i.a)({display:"inline"},b),{},{component:r.a.div,whileHover:{scale:1.1},children:Object(l.jsx)(c.a,{href:e,children:Object(l.jsx)(a,{className:u.icon})})}))}},132:function(t,a,e){"use strict";var i=e(0),o=e(385),n=e(393),c=e(41),s=e(456),r=e(2),l=function(t){var a=t.onClose,e=Object(i.useContext)(c.a),l=e.isDarkMode,d=e.setIsDarkMode,m=Object(s.a)().t;return Object(r.jsx)(o.a,{control:Object(r.jsx)(n.a,{checked:l,name:"checkedDarkMode",color:"primary",onChange:function(){a&&a(),d(!l)}}),label:m("dark_mode")})};a.a=l},244:function(t,a,e){"use strict";e.r(a);var i=e(0),o=e(418),n=e(458),c=e(443),s=e(441),r=e(277),l=e(276),d=e(442),m=e(126),b=e(132),u=e(40),p=e(2),h=Object(o.a)((function(t){return{socialIcon:{marginBottom:"5px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"flex-end",position:"fixed",bottom:0,right:0,padding:t.spacing(2),zIndex:100},mobileWrapper:{display:"flex"}}})),j=function(t){var a=t.mobile,e=h(),o=Object(i.useContext)(u.a).isLoading,j=Object(n.a)();return Object(i.useEffect)((function(){o?j.start({opacity:0,y:0}):j.start((function(t){return{opacity:1,y:0,transition:{delay:1.8+.1*t}}}))}),[o,j]),a?Object(p.jsxs)("div",{className:e.mobileWrapper,children:[Object(p.jsx)(m.a,{icon:s.a,m:1,href:"https://github.com/AHIsma"}),Object(p.jsx)(m.a,{icon:r.a,m:1,href:"https://www.instagram.com/ismaaa_ah"}),Object(p.jsx)(m.a,{icon:l.a,m:1,href:"https://www.linkedin.com/in/ismail-ait-haddou-664324194/"}),Object(p.jsx)(m.a,{icon:d.a,m:1,href:"mailto:ismail.aithaddou@viacesi.Fr"})]}):Object(p.jsxs)(c.a.div,{className:e.wrapper,children:[Object(p.jsx)(c.a.div,{animate:j,custom:0,className:e.socialIcon,children:Object(p.jsx)(m.a,{icon:s.a,m:1,href:"https://github.com/AHIsma"})}),Object(p.jsx)(c.a.div,{animate:j,custom:1,className:e.socialIcon,children:Object(p.jsx)(m.a,{icon:r.a,m:1,href:"https://www.instagram.com/ismaaa_ah"})}),Object(p.jsx)(c.a.div,{animate:j,custom:2,className:e.socialIcon,children:Object(p.jsx)(m.a,{icon:l.a,m:1,href:"https://www.linkedin.com/in/ismail-ait-haddou-664324194/"})}),Object(p.jsx)(c.a.div,{animate:j,custom:3,className:e.socialIcon,children:Object(p.jsx)(m.a,{icon:d.a,m:1,href:"mailto:ismail.aithaddou@viacesi.fr"})}),Object(p.jsx)(c.a.div,{animate:j,custom:4,className:e.socialIcon,children:Object(p.jsx)(b.a,{})})]})};a.default=j},259:function(t,a,e){"use strict";var i=e(1),o=e(4),n=e(15),c=e(0),s=(e(13),e(96)),r=e(38),l=e(98),d=c.forwardRef((function(t,a){var e=t.classes,n=t.className,r=t.component,d=void 0===r?"div":r,m=t.disableGutters,b=void 0!==m&&m,u=t.fixed,p=void 0!==u&&u,h=t.maxWidth,j=void 0===h?"lg":h,f=Object(o.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(d,Object(i.a)({className:Object(s.a)(e.root,n,p&&e.fixed,b&&e.disableGutters,!1!==j&&e["maxWidth".concat(Object(l.a)(String(j)))]),ref:a},f))}));a.a=Object(r.a)((function(t){return{root:Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(a,e){var i=t.breakpoints.values[e];return 0!==i&&(a[t.breakpoints.up(e)]={maxWidth:i}),a}),{}),maxWidthXs:Object(n.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(n.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},386:function(t,a,e){"use strict";var i=e(1),o=e(4),n=e(0),c=(e(13),e(96)),s=e(38),r=e(23),l=n.forwardRef((function(t,a){var e=t.absolute,s=void 0!==e&&e,r=t.classes,l=t.className,d=t.component,m=void 0===d?"hr":d,b=t.flexItem,u=void 0!==b&&b,p=t.light,h=void 0!==p&&p,j=t.orientation,f=void 0===j?"horizontal":j,x=t.role,O=void 0===x?"hr"!==m?"separator":void 0:x,g=t.variant,v=void 0===g?"fullWidth":g,k=Object(o.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(m,Object(i.a)({className:Object(c.a)(r.root,l,"fullWidth"!==v&&r[v],s&&r.absolute,u&&r.flexItem,h&&r.light,"vertical"===f&&r.vertical),role:O,ref:a},k))}));a.a=Object(s.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(r.a)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},457:function(t,a,e){"use strict";e.r(a);e(0);var i=e(78),o=e(90),n=e(259),c=e(386),s=e(390),r=e(420),l=e(418),d=e(244),m=e(2),b=Object(l.a)((function(t){return{footer:{paddingTop:t.spacing(4),paddingBottom:t.spacing(6)}}})),u=function(){var t=b(),a=Object(i.a)(),e=Object(o.a)(a.breakpoints.down("sm"));return Object(m.jsxs)(n.a,{children:[Object(m.jsx)(c.a,{style:{backgroundColor:a.palette.primary.main}}),Object(m.jsxs)(s.a,{className:t.footer,children:[e&&Object(m.jsx)(d.default,{mobile:!0}),Object(m.jsx)(r.a,{variant:"body2",color:"initial",children:"\xa9 2022 Ismail A. H., Inc"})]})]})};a.default=u}}]);
//# sourceMappingURL=9.9f2287fb.chunk.js.map