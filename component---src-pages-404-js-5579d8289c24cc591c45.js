(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(151);a(149);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(e,"a",function(){return c.a});a(146);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,a){var n;t.exports=(n=a(148))&&n.default||n},147:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},148:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},149:function(t,e,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(155),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},150:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(t,e,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(145),l=a(153),u=a.n(l),d=(a(154),{link:{fontFamily:"'PT Mono', monospace",color:"white",textDecoration:"none",margin:"10px 0"}}),p=function(){return i.a.createElement("div",{style:{backgroundColor:"#2A2A2A",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",top:"0",left:"0",height:"99%",width:"200px",borderRadius:"7px",margin:"3px",position:"fixed",flexDirection:"column"}},i.a.createElement("div",{style:{marginTop:"100px",display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement(c.a,{to:"/#home",style:d.link},"Home"),i.a.createElement(c.a,{to:"/#projects",style:d.link},"Projects")))},m=function(t){var e=t.children,a=t.windowWidth;return i.a.createElement(c.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{}},i.a.createElement("div",{style:{width:"200px",float:"left",height:"100vh",display:a>600?"inherit":"none"}},i.a.createElement(p,null)),i.a.createElement("main",{style:{width:"auto"}},e),i.a.createElement("footer",null)))},data:n})};m.propTypes={children:s.a.node.isRequired};e.a=u()(m)}}]);
//# sourceMappingURL=component---src-pages-404-js-5579d8289c24cc591c45.js.map