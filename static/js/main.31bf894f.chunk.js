(window["webpackJsonpweather-prediction"]=window["webpackJsonpweather-prediction"]||[]).push([[0],{15:function(e,t,r){e.exports={App:"App_App__15LM-",night:"App_night__t-6Yt",wraper:"App_wraper__2RCIr",open:"App_open__2tvxQ",blurAnimat:"App_blurAnimat__2bHRP",close:"App_close__2HOmr",blurAnimat2:"App_blurAnimat2__39IiI"}},24:function(e,t,r){e.exports={"search-container":"SearchBar_search-container__120Ba","search-input":"SearchBar_search-input__3nzP3",drop:"SearchBar_drop__3UsUl",open:"SearchBar_open__1dTjC",openul:"SearchBar_openul__1xYs5"}},25:function(e,t,r){e.exports={"header-container":"Header_header-container__16_5v","nav-container":"Header_nav-container__2LWK-","hamburger-btn":"Header_hamburger-btn__2X8yw",open:"Header_open__2be9H"}},30:function(e,t,r){e.exports={"main-container":"Main_main-container__2mNXd","main-layout":"Main_main-layout__a53GJ","content-container":"Main_content-container__ZUg5D"}},31:function(e,t,r){e.exports={"preview-container":"FavoritePreview_preview-container__-wOnR","icon-img":"FavoritePreview_icon-img__2e2GT",date:"FavoritePreview_date__1Pj_p"}},32:function(e,t,r){e.exports={"favorite-container":"Favorites_favorite-container__c3rMk","content-container":"Favorites_content-container__jyYji",title:"Favorites_title__3_Vn5"}},35:function(e,t,r){e.exports={"day-container":"DayForecast_day-container__2LmZS","icon-img":"DayForecast_icon-img__38ldX"}},51:function(e,t,r){e.exports={"days-container":"DaysForecasting_days-container__2Y2Oz"}},52:function(e,t,r){e.exports={"list-container":"FavoritesList_list-container__3L9Yy"}},54:function(e,t,r){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},55:function(e,t,r){e.exports={"toast-container":"Toast_toast-container__yHbXo",toastTran:"Toast_toastTran__3S2QA"}},57:function(e,t,r){e.exports=r(88)},66:function(e,t,r){},67:function(e,t,r){},88:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(27),o=r.n(c),i=r(16),s=r(11),u=r(49),l=(r(66),r(21)),p=r(14),f=(r(67),r(1)),v=r.n(f),m=r(3),d=r(17),y=r(18),h=r(22),_=r(19),b=r(23),g=r(50),O=r.n(g).a.create({baseURL:"https://dataservice.accuweather.com/"});O.interceptors.response.use((function(e){return e}),(function(e){throw console.log("error : ",e),new Error(e)}));var E="P0Ti5KaCm1Y4sANgkLRGCkaerZHAdSZr",w={getLocKey:function(){var e=Object(m.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("locations/v1/cities/autocomplete?apikey=".concat(E,"&q=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),get5DaysForecast:function(){var e=Object(m.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(E,"&metric=true"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCurrentForecast:function(){var e=Object(m.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("currentconditions/v1/".concat(t,"?apikey=").concat(E));case 2:return r=e.sent,e.abrupt("return",r.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCityObj:function(e){return e.map((function(e){return{key:e.Key,city:e.LocalizedName,country:e.Country.LocalizedName}}))}};var F={saveToStorage:function(e,t){var r=JSON.stringify(t);localStorage.setItem(e,r)},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}},L=function(e){return{type:"SET_FORECAST",forecast:e}},j=function(e){return{type:"SET_5DAYSFORECASTY",daysForecast:e}},C=function(e){return{type:"SET_LOCKEY",locKey:e}},S=function(e){return{type:"SET_IS_DROPDOWN",val:e}},x=function(e){return{type:"SET_ERROR_HANDLE",err:e}},k=r(13),T=r(56);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach((function(t){Object(k.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){e.currLoc.length&&(e.currLoc=e.currLoc[0]);var t=F.loadFromStorage("favorites")?F.loadFromStorage("favorites"):{},r=!t[e.currLoc.Key]&&{id:e.currLoc.Key,name:e.currLoc.LocalizedName,currForecast:e.cityObj};return t=N({},t,Object(k.a)({},e.currLoc.Key,r)),F.saveToStorage("favorites",t),t},I=function(){var e=Object(m.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=F.loadFromStorage("favorites")){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,Promise.all(Object.keys(t).map(function(){var e=Object(m.a)(v.a.mark((function e(r){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCurrentForecast(t[r].id);case 2:return n=e.sent,e.abrupt("return",Object(k.a)({},r,N({},t[r],{currForecast:n})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return t=e.sent,t=Object.assign.apply(Object,[{}].concat(Object(T.a)(t.map((function(e){var t=Object.keys(e).join();return Object(k.a)({},e[t].id,e[t])}))))),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(v.a.mark((function e(){var t,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,w.getCurrentForecast("215854");case 3:return t.cityObj=e.sent,e.next=6,w.getLocKey("tel aviv");case 6:return t.currLoc=e.sent,r=P(t),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K={saveFavorite:P,getFavorites:I,getDefultLoc:A};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(k.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){return{type:"SET_FAVORITE_CITIES",citiesObj:e}},Y=function(e){return{type:"SET_ERROR_HANDLE",err:e}},z=function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.getFavorites();case 3:r=e.sent,F.saveToStorage("favorites",R({},r)),t(B(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(Y(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.getDefultLoc();case 3:r=e.sent,t(B(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(Y(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},V=r(35),W=r.n(V),U=r(20),X=r.n(U),J=function(e){var t=e.isDay?"Day":"Night",r=e.day[t],n=r.Icon<10?"0"+r.Icon:r.Icon,c=e.day.Temperature.Maximum.Value,o=e.day.Temperature.Minimum.Value,i={backgroundImage:"url(https://developer.accuweather.com/sites/default/files/".concat(n,"-s.png)")};return a.a.createElement("div",{className:W.a["day-container"]},a.a.createElement("div",{style:i,className:W.a["icon-img"]}),a.a.createElement("h1",null,X()(e.day.Date).format("ddd").toUpperCase(),"."),a.a.createElement("p",null,Math.round(o),"\xb0/",Math.round(c),"\xb0"))},Z=r(51),Q=r.n(Z),G=function(e){var t=e.daysToForecast.map((function(t){return a.a.createElement("li",{key:t.Date},a.a.createElement(J,{day:t,isDay:e.currForecast&&e.currForecast.IsDayTime}))}));return a.a.createElement("div",{className:Q.a["days-container"]},a.a.createElement("ul",null,t))},q=r(9),$=r.n(q),ee=function(e){var t=e.currLoc&&e.currLoc.length?e.currLoc[0]:e.currLoc,r=e.currForecast,n=t&&e.favoriteList&&e.favoriteList[t.Key]?"".concat($.a["btn-span"]," ").concat($.a.saved):"".concat($.a["btn-span"]);return a.a.createElement("div",{className:$.a["current-container"]},a.a.createElement("p",{className:$.a.degree},r&&Math.round(r.Temperature.Metric.Value),"\xb0"),a.a.createElement("div",{className:$.a["btn-content"],onClick:e.toggleFavorite},a.a.createElement("div",{className:n},a.a.createElement("button",{className:$.a.favBtn},"save"),a.a.createElement("span",{className:"fas fa-heart"})),a.a.createElement("div",{className:$.a["buttom-content"]},a.a.createElement("p",{className:$.a.weather},r&&r.WeatherText),a.a.createElement("div",{className:$.a.location},a.a.createElement("h2",null,t&&t.LocalizedName&&t.LocalizedName)," ,",a.a.createElement("h3",null,t&&t.Country&&t.Country.LocalizedName)),a.a.createElement("h3",{className:$.a.date},r&&X()(r.LocalObservationDateTime).format("MMM Do")))))},te=r(24),re=r.n(te),ne=function(e){var t=e.isDropdown?"".concat(re.a.drop," ").concat(re.a.open):"".concat(re.a.drop),r=e.isDropdown&&e.currCityList&&e.currCityList.map((function(t){return a.a.createElement("li",{key:t.Key,onClick:function(){return e.listClicked(t)}},t.LocalizedName&&t.LocalizedName,", ",t.Country&&t.Country.LocalizedName)}));return a.a.createElement("div",{className:re.a["search-container"]},a.a.createElement("form",{onSubmit:e.search},a.a.createElement("input",{className:re.a["search-input"],type:"text",placeholder:"Find out the weather prediction in your desired location",onChange:e.inputChange,value:e.inputText})),a.a.createElement("ul",{className:t},r))},ae=r(30),ce=r.n(ae),oe=function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(h.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={defultLoc:{key:"215854",name:"tel aviv"},inputText:""},r.intLoad=Object(m.a)(v.a.mark((function e(){var t,n,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F.loadFromStorage("currLoc"),e.next=3,r.props.onSetCurrLoc(t);case 3:return n=F.loadFromStorage("favorites"),e.next=6,r.props.onSetFavoriteCity(n);case 6:return a=F.loadFromStorage("currForecast"),e.next=9,r.props.onSetCurrforecast(a);case 9:return c=F.loadFromStorage("daysForecast"),e.next=12,r.props.onSetDaysforecast(c);case 12:case"end":return e.stop()}}),e)}))),r.handleChange=function(e){var t=e.target.value;t=t.replace(/[^A-Za-z\s]/gi,""),r.setState({inputText:t})},r.handleSearch=function(){var e=Object(m.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r.props.isDropdown||r.state.inputText){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,r.props.onForecastLoad({key:null,name:r.state.inputText});case 5:r.setState({inputText:""}),setTimeout((function(){r.setState({isDropdown:!0})}),100);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleListClicked=function(e){var t={Key:e.Key,name:e.LocalizedName};r.props.onDropdownChange(!1),r.props.onLocationByKey(t)},r.handleSaveToFavorite=function(){var e={};e.cityObj=r.props.currForecast,e.currLoc=r.props.curLocation,r.props.onFavoriteCity(e)},r}return Object(b.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(v.a.mark((function e(){var t,r,n,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.intLoad();case 2:if(t=this.props.favoriteCities,r=this.props.curLocation,n="yair-vanunu-08-09-2019"===(n=this.props.match.params.key)?null:n,t){e.next=9;break}return e.next=9,this.props.onFavoritesDefultLoad();case 9:if(a=n&&t&&t[n],c=a&&{Key:a.id,name:a.name},r){e.next=16;break}return e.next=14,this.props.onForecastLoad(this.state.defultLoc);case 14:e.next=17;break;case 16:n&&this.props.onLocationByKey(c);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.curr5daysforecast?this.props.curr5daysforecast.DailyForecasts:[];return a.a.createElement("div",{className:ce.a["main-container"]},a.a.createElement("div",{className:ce.a["main-layout"]},a.a.createElement(ne,{inputChange:this.handleChange,inputText:this.state.inputText,search:this.handleSearch,isDropdown:this.props.isDropdown,currCityList:this.props.curLocation,listClicked:this.handleListClicked}),a.a.createElement("div",{className:ce.a["content-container"]},a.a.createElement(ee,{currForecast:this.props.currForecast,currLoc:this.props.curLocation,toggleFavorite:this.handleSaveToFavorite,favoriteList:this.props.favoriteCities}),a.a.createElement(G,{daysToForecast:e,currForecast:this.props.currForecast}))))}}]),t}(n.Component),ie=Object(s.b)((function(e){return{curLocation:e.forecast.currLocationKey,curr5daysforecast:e.forecast.curr5daysforecast,currForecast:e.forecast.currForecast,isDropdown:e.forecast.isDropdown,currCityList:e.forecast.currCityList,favoriteCities:e.favorite.favoriteCities}}),(function(e){return{onLocationByKey:function(t){return e(function(e){return function(){var t=Object(m.a)(v.a.mark((function t(r){var n,a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.get5DaysForecast(e.Key);case 3:return n=t.sent,r(j(n)),F.saveToStorage("daysForecast",n),t.next=8,w.getCurrentForecast(e.Key);case 8:return a=t.sent,r(L(a)),F.saveToStorage("currForecast",a),t.next=13,w.getLocKey(e.name);case 13:c=t.sent,r(C(c)),F.saveToStorage("currLoc",c),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),r(x(t.t0));case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}()}(t))},onForecastLoad:function(t){return e(function(e){return function(){var t=Object(m.a)(v.a.mark((function t(r){var n,a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.getLocKey(e.name);case 3:if(0!==(n=t.sent).length){t.next=6;break}throw"             Unvalid Location";case 6:if(r(C(n)),F.saveToStorage("currLoc",n),!(n.length>1)||e.key){t.next=12;break}r(S(!0)),t.next=23;break;case 12:return e.key=n[0].Key,t.next=15,w.get5DaysForecast(e.key);case 15:return a=t.sent,r(j(a)),F.saveToStorage("daysForecast",a),t.next=20,w.getCurrentForecast(e.key);case 20:c=t.sent,r(L(c)),F.saveToStorage("currForecast",c);case 23:t.next=28;break;case 25:t.prev=25,t.t0=t.catch(0),r(x(t.t0));case 28:case"end":return t.stop()}}),t,null,[[0,25]])})));return function(e){return t.apply(this,arguments)}}()}(t))},onDropdownChange:function(t){return e(S(t))},onCityListChange:function(t){return e({type:"SET_CITY_LIST",cityList:t})},onSetCurrLoc:function(t){return e(C(t))},onSetCurrforecast:function(t){return e(L(t))},onSetDaysforecast:function(t){return e(j(t))},onFavoriteCity:function(t){return e((r=t,{type:"SET_FAVORITE_CITIES",citiesObj:K.saveFavorite(r)}));var r},onSetFavoriteCity:function(t){return e(B(t))},onFavoritesLoad:function(){return e(z())},onFavoritesDefultLoad:function(){return e(H())}}}))(oe),se=r(29),ue=r(52),le=r.n(ue),pe=r(31),fe=r.n(pe),ve=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.fav,r=t.currForecast.WeatherIcon,n={backgroundImage:"url(https://developer.accuweather.com/sites/default/files/".concat(r=r<10?"0"+r:r,"-s.png)")};return a.a.createElement("div",{className:fe.a["preview-container"],onClick:function(){return e.props.history.push("/".concat(t.id))}},a.a.createElement("h1",null,t.name),a.a.createElement("p",{className:fe.a.date},X()(t.currForecast.LocalObservationDateTime).format("MMM Do, h:mm a")),a.a.createElement("div",{style:n,className:fe.a["icon-img"]}),a.a.createElement("p",null,Math.round(t.currForecast.Temperature.Metric.Value),"\xb0"),a.a.createElement("h2",null,t.currForecast.WeatherText))}}]),t}(n.Component),me=Object(p.f)(ve),de=function(e){var t=Object(n.useState)(1),r=Object(se.a)(t,2),c=r[0],o=r[1],i=e.favoriteList&&Object.values(e.favoriteList).filter((function(e,t){return t<3*c&&t>=3*c-3})).map((function(e){return e&&a.a.createElement("li",{key:e.id},a.a.createElement(me,{fav:e}))})),s=!!(i&&i.length<3);return a.a.createElement("div",{className:le.a["list-container"]},a.a.createElement("button",{disabled:c<=1,className:"fas fa-chevron-left",onClick:function(){return o(c-1)}}),a.a.createElement("ul",null,i),a.a.createElement("button",{disabled:s,className:"fas fa-chevron-right",onClick:function(){return o(c+1)}}))},ye=r(32),he=r.n(ye),_e=function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(h.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={favoriteCities:null},r}return Object(b.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.onFavoritesLoad();case 2:this.props.favoriteCities||this.props.onFavoritesLoadDefult();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:he.a["favorite-container"]},a.a.createElement("div",{className:he.a.title},a.a.createElement("h1",null,"My Favorites Places")),a.a.createElement("div",{className:he.a["content-container"]},a.a.createElement(de,{favoriteList:this.props.favoriteCities})))}}]),t}(n.Component),be=Object(s.b)((function(e){return{favoriteCities:e.favorite.favoriteCities}}),(function(e){return{onFavoritesLoad:function(){return e(z())},onFavoritesLoadDefult:function(){return e(H())}}}))(_e),ge=r(25),Oe=r.n(ge),Ee=r(54),we=r.n(Ee),Fe=function(e){return e.show?a.a.createElement("div",{className:we.a.Backdrop,onClick:e.clicked}):null},Le=function(e){var t=Object(n.useState)(!1),r=Object(se.a)(t,2),c=r[0],o=r[1],i=c?"".concat(Oe.a["nav-container"]," ").concat(Oe.a.open):"".concat(Oe.a["nav-container"]);return a.a.createElement("div",{className:Oe.a["header-container"]},a.a.createElement("h1",null,"W.Prediction"),a.a.createElement("div",{className:i},a.a.createElement(l.b,{exact:!0,to:"/"},"MAIN"),a.a.createElement(l.b,{exact:!0,to:"/favorites"},"MY-FAVORITES")),a.a.createElement("button",{className:"fas fa-bars ".concat(Oe.a["hamburger-btn"]),onClick:function(){return o(!c)}}),a.a.createElement(Fe,{show:c,clicked:function(){return o(!c)}}))},je=r(55),Ce=r.n(je),Se=Object(s.b)(null,(function(e){return{onCloseToast:function(t){return e(x(t))}}}))((function(e){var t=e.err.toString().substring(12,e.length);return setTimeout((function(){e.onCloseToast(!1)}),4e3),a.a.createElement("div",{className:Ce.a["toast-container"]},a.a.createElement("h1",null,"somting went worng, ",t))})),xe=r(15),ke=r.n(xe),Te=Object(s.b)((function(e){return{isError:e.forecast.isError,currForecast:e.forecast.currForecast}}),null)((function(e){var t=e.isError?a.a.createElement(Se,{err:e.isError}):"",r=e.currForecast&&e.currForecast.IsDayTime?"".concat(ke.a.App):"".concat(ke.a.App," ").concat(ke.a.night),n=e.currForecast&&e.currForecast.IsDayTime?"".concat(ke.a.wraper," ").concat(ke.a.close):"".concat(ke.a.wraper," ").concat(ke.a.open);return a.a.createElement("div",{className:r},a.a.createElement("div",{className:n},a.a.createElement(l.a,{basename:"/yair-vanunu-08-09-2019/"},a.a.createElement(Le,null),t,a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/",component:ie}),a.a.createElement(p.a,{exact:!0,path:"/favorites",component:be}),a.a.createElement(p.a,{path:"/:key?",component:ie})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Ne=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(r,!0).forEach((function(t){Object(k.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},t)},Pe={currLocationKey:null,curr5daysforecast:null,currForecast:null,currCityList:null,isDropdown:!1,isError:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCKEY":var r=t.locKey;return Ne(e,{currLocationKey:r});case"SET_5DAYSFORECASTY":var n=t.daysForecast;return Ne(e,{curr5daysforecast:n});case"SET_FORECAST":var a=t.forecast;return Ne(e,{currForecast:a});case"SET_CITY_LIST":var c=t.cityList;return Ne(e,{currCityList:c});case"SET_IS_DROPDOWN":var o=t.val;return Ne(e,{isDropdown:o});case"SET_ERROR_HANDLE":var i=t.err;return Ne(e,{isError:i})}return e},Ae={favoriteCities:null},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITE_CITIES":var r=t.citiesObj;return Ne(e,{favoriteCities:r})}return e},Me=Object(i.c)({forecast:Ie,favorite:Ke}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Be=Object(i.e)(Me,Re(Object(i.a)(u.a)));o.a.render(a.a.createElement(s.a,{store:Be},a.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){e.exports={"current-container":"CurrentForecasting_current-container__2KDlI",degree:"CurrentForecasting_degree__oBnv6",location:"CurrentForecasting_location__WiOZU",date:"CurrentForecasting_date__2M3QO",weather:"CurrentForecasting_weather__jnISa",favBtn:"CurrentForecasting_favBtn__3GPUQ","buttom-content":"CurrentForecasting_buttom-content__2Q0i9","btn-content":"CurrentForecasting_btn-content__2NIOi","btn-span":"CurrentForecasting_btn-span__1uBeN","icon-img":"CurrentForecasting_icon-img__3Xo_K",saved:"CurrentForecasting_saved__3cdJK"}}},[[57,1,2]]]);
//# sourceMappingURL=main.31bf894f.chunk.js.map