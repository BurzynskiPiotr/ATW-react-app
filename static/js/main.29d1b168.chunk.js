(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),i=(a(20),a(21),a(2)),s=a(3),c=a(5),u=a(4),m=a(6),d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.isNavOpen;return r.a.createElement("nav",{className:e?"navOpen":""},r.a.createElement("div",{className:"nav-section"},r.a.createElement("p",null,"Info"),r.a.createElement("p",{className:"nav-hover-area"},"This app will help you with your provisions by taking you AROUND THE WORLD stoping by the best places earth have to offer!")),r.a.createElement("div",{className:"nav-section"},r.a.createElement("p",null,"Restart"),r.a.createElement("p",{className:"nav-hover-area"},"Not available at the moment.")),r.a.createElement("div",{className:"nav-section"},r.a.createElement("p",null,"Future updates"),r.a.createElement("p",{className:"nav-hover-area"},"This app is in development. Next version will soon be updated.")),r.a.createElement("div",{className:"nav-section"},r.a.createElement("p",null,"Author"),r.a.createElement("p",{className:"nav-hover-area"},"Piotr Burzy\u0144ski")))}}]),t}(n.Component),h=a(8),y=a(9),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isNavOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isNavOpen;return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("p",{className:"title-long"},"Around The World"),r.a.createElement("p",{className:"title-short"},"ATW")),r.a.createElement("div",{className:"navigation"},r.a.createElement("button",{onClick:function(){return e.setState({isNavOpen:!t})}},r.a.createElement("p",{className:t?"":"navBtnRotate"},r.a.createElement(h.a,{icon:y.b})))),r.a.createElement(d,{isNavOpen:this.state.isNavOpen}))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.dayNumber;return r.a.createElement("div",{className:"adventures"},r.a.createElement("p",null,"Your Progress: ",e,"/7"))}}]),t}(n.Component),b=a(14),f=a(7),g=Object(n.createContext)(),E=(g.Consumer,function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),o=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(g.Provider,{value:[o,l]},e.children))}),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).deleteTarget=function(e){var t=Object(f.a)(a.context,2),n=t[0];(0,t[1])(n.filter((function(t){return t.name!==e})))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Object(f.a)(this.context,2),a=t[0];t[1];return a.map((function(t){return r.a.createElement("div",{className:"target-item",key:t.name},r.a.createElement("p",null,t.name),r.a.createElement("button",{onClick:e.deleteTarget.bind(e,t.name)},r.a.createElement(h.a,{icon:y.c})))}))}}]),t}(n.Component);O.contextType=g;var k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(f.a)(this.context,2),t=e[0];e[1];return t.map((function(e){return r.a.createElement("p",{key:e.name},e.name)}))}}]),t}(n.Component);k.contextType=g;var N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newTargetName:"",maxTargetsAlert:!1,noTargetsAlert:!1,walkBtnClicked:!1,emptyTarget:!1,sameTargetsAlert:!1,congratulation:!1,targetNames:[]},a.addTarget=function(e){e.preventDefault();var t=Object(f.a)(a.context,2),n=t[0],r=t[1];if(a.setState({targetNames:a.state.targetNames.concat(a.state.newTargetName)}),console.log(a.state.targetNames),""===a.state.newTargetName)a.setState({emptyTarget:!0});else if(-1!==a.state.targetNames.indexOf(a.state.newTargetName)){var o=a.state.targetNames.filter((function(e){return e!==a.state.newTargetName}));a.setState({targetNames:o.concat(a.state.newTargetName)}),a.setState({sameTargetsAlert:!0})}else n.length>2?a.setState({maxTargetsAlert:!0}):r((function(e){return[].concat(Object(b.a)(e),[{name:a.state.newTargetName}])}));a.setState({newTargetName:""})},a.handleChange=function(e){a.setState({newTargetName:e.target.value})},a.handleAlertClosing=function(e){a.setState({maxTargetsAlert:!1}),a.setState({noTargetsAlert:!1}),a.setState({emptyTarget:!1}),a.setState({sameTargetsAlert:!1}),a.setState({congratulation:!1})},a.handleWalkBtnClicked=function(e){var t=Object(f.a)(a.context,2),n=t[0];t[1];n.length<1?a.setState({noTargetsAlert:!0}):a.setState({walkBtnClicked:!0})},a.handleWalkBtnClosed=function(e){a.setState({walkBtnClicked:!1})},a.handleAlertWalking=function(e){a.setState({walkBtnClicked:!1}),a.props.dayNumber>=7?a.setState({congratulation:!0}):a.props.increment()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"targets"},r.a.createElement("div",{className:"container-targets"},r.a.createElement("div",{className:"box-target"},r.a.createElement("p",{className:"title-targets"},"Current Targets"),r.a.createElement("div",{className:"target-list"},r.a.createElement(O,null))),r.a.createElement("div",{className:"box-small-target"},r.a.createElement("p",{className:"title-targets"},"Add New Target"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.newTargetName,maxLength:"20"}),r.a.createElement("button",{type:"submit",onClick:this.addTarget},"Add"))),r.a.createElement("div",{className:"walk-btn"},r.a.createElement("button",{onClick:this.handleWalkBtnClicked},"Walk",r.a.createElement("p",null,r.a.createElement(h.a,{icon:y.d})))),r.a.createElement("div",{className:this.state.walkBtnClicked?"target-alert":"no-alert"},r.a.createElement("div",{className:"walk-check"},r.a.createElement("p",null,"Did you accomplished your targets?"),r.a.createElement("div",{className:"target-check-box"},r.a.createElement(k,null)),r.a.createElement("button",{onClick:this.handleWalkBtnClosed},"Not yet"),r.a.createElement("button",{onClick:this.handleAlertWalking},"Yes!"))),r.a.createElement("div",{className:this.state.emptyTarget?"target-alert":"no-alert"},r.a.createElement("div",null,r.a.createElement("p",null,"You have to write your target first!"),r.a.createElement("button",{onClick:this.handleAlertClosing},"Got it!"))),r.a.createElement("div",{className:this.state.maxTargetsAlert?"target-alert":"no-alert"},r.a.createElement("div",null,r.a.createElement("p",null,"You have max number of targets! Delete or finish one to add another."),r.a.createElement("button",{onClick:this.handleAlertClosing},"Got it!"))),r.a.createElement("div",{className:this.state.noTargetsAlert?"target-alert":"no-alert"},r.a.createElement("div",null,r.a.createElement("p",null,"You don't have any target yet! You need to have at least one target to move your journey."),r.a.createElement("button",{onClick:this.handleAlertClosing},"Got it!"))),r.a.createElement("div",{className:this.state.sameTargetsAlert?"target-alert":"no-alert"},r.a.createElement("div",null,r.a.createElement("p",null,"You already have this target!"),r.a.createElement("button",{onClick:this.handleAlertClosing},"Got it!"))),r.a.createElement("div",{className:this.state.congratulation?"target-alert":"no-alert"},r.a.createElement("div",null,r.a.createElement("p",null,"You finished the tour. Congratulation!"),r.a.createElement("button",{onClick:this.handleAlertClosing},"Got it!")))))}}]),t}(n.Component);N.contextType=g;var w=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.days,t=this.props.dayNumber;return e.map((function(e){return r.a.createElement(j,{key:e.day,day:e,dayNumber:t})}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dayIsOpen:!1,dayisLocked:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.dayIsOpen,a=this.props.dayNumber,n=this.props.day;return a>=n.day&&(this.state.dayisLocked=!1),r.a.createElement("div",{className:"single-day"},r.a.createElement("button",{className:this.state.dayisLocked?"day-icon":"day-unlocked",onClick:function(){return e.setState({dayIsOpen:!t})},disabled:this.state.dayisLocked},r.a.createElement("p",{className:"day-title"},n.country),this.state.dayisLocked?r.a.createElement("p",null,r.a.createElement(h.a,{icon:y.a})):""),r.a.createElement("div",{className:t?"openen-diary":"diary"},r.a.createElement("div",{className:"diary-content"},r.a.createElement("div",{className:"title-diary"},r.a.createElement("p",null,n.city),r.a.createElement("p",{className:"country"},n.country)),r.a.createElement("div",{className:"box-diary"},r.a.createElement("p",null,n.story)),r.a.createElement("button",{onClick:function(){return e.setState({dayIsOpen:!t})}},"go back"))))}}]),t}(n.Component),C=Object(n.createContext)(),T=(C.Consumer,function(e){return r.a.createElement("div",null,r.a.createElement(C.Provider,{value:[{day:1,country:"Portugal",city:"Lisbona",story:" There is no actual data about when the first peoples started to settle in the city but archaeological works done at Castelo S\xe3o Jorge revealed the existence of Phoenicians in the city 1200 BC. Later, the Moors lived in the city and established a Caliphate. Thanks to this type of data and several studies, it was discovered that Lisbon is the oldest city of Western Europe. It existed long before Paris, London and even Rome."},{day:2,country:"Germany",city:"Berlin",story:"Berlin has more bridges than Venice \u2013 around 1,700 of them. It is also said that Berlin has more waterways than Amsterdam, Stockholm and Venice COMBINED. The most famous and instagrammed bridge is the Oberbaumbr\xfccke between Kreuzberg and Friedrichshain. Berlin is home to 3 world class and active Opera Houses, which can accommodate over 4,400 opera attendees. No other city in the world comes close to that. On top of that, Berlin has over 150 theaters and halls for every type of event."},{day:3,country:"Russia",city:"Moscow",story:"Moscow is the capital and most heavily populated city in Russia, as well as being the largest city on the European continent. It is an iconic and global city and is the key political, economic, cultural and scientific centre of not only Russia but of Eastern Europe as well. It is a city renowned for the Red Square, the Kremlin and St. Basil\u2019s cathedral and furthermore, should be on your travel bucket list."},{day:4,country:"Japan",city:"Tokyo",story:"Tokyo is often referred to as a city, but is officially known and governed as a \u201cmetropolitan prefecture,\u201d which is different from a city and combines elements of a city and a prefecture. The Tokyo metropolitan government administers the 23 Special Wards of Tokyo. These Special Wards contain the districts that have become world famous for their different characteristics. To make things even more confusing, Japanese people will refer to each district as a city. Good luck finding your way around the city\u2026I mean district\u2026I mean ward?"},{day:5,country:"Australia",city:"Sydney",story:" It is the 12th most expensive city with property prices averaging USD8,717 per square metre. English, Arabic, Cantonese, Mandarin, Greek and Vietnamese are the main languages spoken in Sydney.The Sydney region has been inhabited by indigenous Australians for at least 30,000 years based on radio carbon dating.Operating since 1875, the Sydney Ferries carries over 14 million passengers each year in and around Sydney."},{day:6,country:"Brasil",city:"Rio de Janeiro",story:"Rio was capital of Brazil from 1763 until 1960, when that role was transferred to Brasilia. But from 1808 to 1822, Rio also served as the center for the exiled royal court of Portugal, then fleeing Napoleon\u2019s invasion. Prince Regent Dom Jo\xe3o VI arrived with the rest of the royal family in 1808\u2014the first time a European monarch set foot in the Americas\u2014and began transforming the city, establishing a medical school, national museum, national library and botanical gardens. In December 1815, Dom Jo\xe3o made Rio the official capital of the Portuguese empire, a role it served until Brazil declared independence from Portugal in September 1822."},{day:7,country:"Canada",city:"Vancouver",story:"The city is named after British Naval Captain George Vancouver who was the first European to venture on Canadian's Pacific Coast in 1792.  Vancouver is the warmest city in Canada with only 11 days of snow per year. The winters are kept mild by being close to the Pacific Ocean. For those who love skiing, Vancouver should be your next holiday destination. It boasts 3 mountains where you can ski. They include; Grouse Mountain, Mount Seymour, and Cypress Mountain."}]},e.children))}),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},a.handleIncrement=function(){a.state.count<a.context.length&&a.setState({count:a.state.count+1})},a.handleReset=function(){a.setState({count:0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.context,t=this.state.count;return console.log(this.state.count),r.a.createElement("div",{className:"container"},r.a.createElement(v,{days:e,dayNumber:t}),r.a.createElement("div",{className:"diary-container"},r.a.createElement(w,{days:e,dayNumber:t})),r.a.createElement(N,{increment:this.handleIncrement,reset:this.handleReset,dayNumber:t}))}}]),t}(n.Component);A.contextType=C;var S=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={intro:!0},a.closeIntro=function(){a.setState({intro:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.intro?"instructions":"instructions-hide"},r.a.createElement("p",null,"Hello there!",r.a.createElement("br",null),r.a.createElement("br",null),"This app is still in development and it's not a final product.",r.a.createElement("br",null),r.a.createElement("br",null),"To progress you have to set yourself targets and when you feel like you done them, push the WALK button. Every time you done that, new country will be unlocked and available for you to find out fun facts about one of the city in it."),r.a.createElement("button",{onClick:this.closeIntro},"Got it!"))}}]),t}(n.Component);var B=function(){return r.a.createElement(T,null,r.a.createElement(E,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(p,null),r.a.createElement(A,null),r.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.29d1b168.chunk.js.map