(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[4],{162:function(a,t,e){a.exports={graph:"UserStatsGraphs_graph__vEvXo",graphItem:"UserStatsGraphs_graphItem__3hrzd",total:"UserStatsGraphs_total__fIKwM"}},288:function(a,t,e){"use strict";e.r(t);var r=e(3),s=e(0),n=e.n(s),c=e(162),l=e.n(c),o=e(292),i=e(290),m=e(293);t.default=function(a){var t=a.data,e=n.a.useState([]),s=Object(r.a)(e,2),c=s[0],p=s[1],u=n.a.useState(0),f=Object(r.a)(u,2),h=f[0],d=f[1];return n.a.useEffect((function(){var a=t.map((function(a){return{x:a.title,y:Number(a.acessos)}}));d(t.map((function(a){var t=a.acessos;return Number(t)})).reduce((function(a,t){return a+t}),0)),p(a)}),[t]),n.a.createElement("section",{className:"".concat(l.a.graph," animeLeft")},n.a.createElement("div",{className:"".concat(l.a.total," ").concat(l.a.graphItem)},n.a.createElement("p",null,"Acessos: ",h)),n.a.createElement("div",{className:l.a.graphItem},n.a.createElement(o.a,{data:c,innerRadius:50,padding:{top:20,bottom:20,left:80,right:80},style:{data:{fillOpacity:.9,stroke:"#fff",strokeWidth:2},labels:{fontSize:14,fill:"#333"}}})),n.a.createElement("div",{className:l.a.graphItem},n.a.createElement(i.a,null,n.a.createElement(m.a,{alignment:"start",data:c}))))}}}]);
//# sourceMappingURL=4.8cbb337a.chunk.js.map