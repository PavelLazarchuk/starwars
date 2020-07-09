(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=a(16),s=(a(97),a(151)),o=a(35),m=a(13),u=a(159),d=a(21),f=a(162),p=a(157),h=a(156),E=Object(s.a)((function(){return{head:{fontSize:20,fontWeight:600},details:{fontSize:16,paddingBottom:5}}})),v=function(e){var t,a=e.data,l=e.classes,c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=i[0],o=i[1];return r.a.createElement(f.a,{expanded:s===a.name,onChange:(t=a.name,function(e,a){o(!!a&&t)})},r.a.createElement(h.a,null,r.a.createElement("div",{className:l.bold},"Planet name: ",a.name)),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:l.details},"Climate: ",a.climate),r.a.createElement("div",{className:l.details},"Gravity: ",a.gravity),r.a.createElement("div",{className:l.details},"Terrain: ",a.terrain),r.a.createElement("div",{className:l.details},"Diameter: ",a.diameter),r.a.createElement("div",{className:l.details},"Population: ",a.population),r.a.createElement("div",{className:l.details},"Orbital period: ",a.orbital_period),r.a.createElement("div",{className:l.details},"Rotation period: ",a.rotation_period))))},b=Object(s.a)((function(){return{root:{padding:10,borderRadius:20},title:{margin:0,fontSize:16,color:"red",paddingBottom:5},bold:{fontWeight:600},details:{fontSize:14,marginBottom:5}}})),O=function(e){var t=e.list,a=e.filmId,n=e.title,l=e.Component,c=b();return r.a.createElement("div",{className:c.root},r.a.createElement("p",{className:c.title},"The ",n," of this episode:"),t&&t[a]&&t[a].map((function(e){return r.a.createElement(l,{key:e.name,data:e,classes:c})})))},g=a(75),j=a(76),_=a(77),N=a.n(_),y=new(function(){function e(){Object(g.a)(this,e)}return Object(j.a)(e,[{key:"get",value:function(e){return this.makeRequest(e,"get")}},{key:"makeRequest",value:function(e,t){var a={method:t,headers:{"Content-Type":"application/json"}};return this.sendRequest(e,a)}},{key:"sendRequest",value:function(e,t){return new Promise((function(a,n){N()("".concat("http://swapi.dev/api/"+e),t).then((function(e){a(e)})).catch((function(e){n(e)}))}))}}]),e}()),S=function(e){return e.split("http://swapi.dev/api/")[1]},I=function(e){return function(t){return{type:e,payload:t}}},C=I("ERROR"),T=I("GET_PLANETS"),w={getPlanetsByFilm:function(e,t){return function(a){var n=t.map((function(e){return y.get(S(e)).then((function(e){return e.data}))}));Promise.all(n).then((function(t){a(T({filmId:e,planets:t}))})).catch((function(e){return a(C(e))}))}}},F=Object(i.b)((function(e){return{planets:e.planets.planets}}),w)((function(e){var t=e.isOpen,a=e.planetsUrl,l=e.getPlanetsByFilm,c=e.planets,i=e.filmId;return Object(n.useEffect)((function(){t&&l(i,a)}),[t,l,a,i]),r.a.createElement(O,{list:c,filmId:i,title:"planets",Component:v})})),R=function(e){var t,a=e.data,l=e.classes,c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=i[0],o=i[1];return r.a.createElement(f.a,{expanded:s===a.name,onChange:(t=a.name,function(e,a){o(!!a&&t)})},r.a.createElement(h.a,null,r.a.createElement("div",{className:l.bold},"Vehicles name: ",a.name)),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:l.details},"Model: ",a.model),r.a.createElement("div",{className:l.details},"Max atmosphering speed: ",a.max_atmosphering_speed),r.a.createElement("div",{className:l.details},"Manufacturer: ",a.manufacturer),r.a.createElement("div",{className:l.details},"Length: ",a.length),r.a.createElement("div",{className:l.details},"Passengers: ",a.passengers),r.a.createElement("div",{className:l.details},"Vehicle class: ",a.vehicle_class),r.a.createElement("div",{className:l.details},"Cost in credits: ",a.cost_in_credits))))},x=I("GET_VEHICLES"),k=I("GET_STARSHIPS"),P={getVehiclesByFilm:function(e,t){return function(a){var n=t.map((function(e){return y.get(S(e)).then((function(e){return e.data}))}));Promise.all(n).then((function(t){a(x({filmId:e,vehicles:t}))})).catch((function(e){return a(C(e))}))}}},L=Object(i.b)((function(e){return{vehicles:e.starships.vehicles}}),P)((function(e){var t=e.isOpen,a=e.vehiclesUrl,l=e.getVehiclesByFilm,c=e.vehicles,i=e.filmId;return Object(n.useEffect)((function(){t&&l(i,a)}),[t,l,a,i]),r.a.createElement(O,{list:c,filmId:i,title:"vehicles",Component:R})})),G=function(e){var t,a=e.data,l=e.classes,c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=i[0],o=i[1];return r.a.createElement(f.a,{expanded:s===a.name,onChange:(t=a.name,function(e,a){o(!!a&&t)})},r.a.createElement(h.a,null,r.a.createElement("div",{className:l.bold},"Starship name: ",a.name)),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:l.details},"Model: ",a.model),r.a.createElement("div",{className:l.details},"Max atmosphering speed: ",a.max_atmosphering_speed),r.a.createElement("div",{className:l.details},"Manufacturer: ",a.manufacturer),r.a.createElement("div",{className:l.details},"Length: ",a.length),r.a.createElement("div",{className:l.details},"Passengers: ",a.passengers),r.a.createElement("div",{className:l.details},"Starship class: ",a.starship_class),r.a.createElement("div",{className:l.details},"Cost in credits: ",a.cost_in_credits))))},B={getStarshipsByFilm:function(e,t){return function(a){var n=t.map((function(e){return y.get(S(e)).then((function(e){return e.data}))}));Promise.all(n).then((function(t){a(k({filmId:e,starships:t}))})).catch((function(e){return a(C(e))}))}}},M=Object(i.b)((function(e){return{starships:e.starships.starships}}),B)((function(e){var t=e.isOpen,a=e.starshipsUrl,l=e.getStarshipsByFilm,c=e.starships,i=e.filmId;return Object(n.useEffect)((function(){t&&l(i,a)}),[t,l,a,i]),r.a.createElement(O,{list:c,filmId:i,title:"starships",Component:G})})),A=function(e){var t=e.data,a=e.classes,l=Object(n.useState)(""),c=Object(d.a)(l,2),i=c[0],s=c[1],o=Object(n.useState)(!1),m=Object(d.a)(o,2),u=m[0],E=m[1];Object(n.useEffect)((function(){y.get(S(t.homeworld)).then((function(e){return s(e.data.name)}))}),[t.homeworld]);var v;return r.a.createElement(f.a,{expanded:u===t.name,onChange:(v=t.name,function(e,t){E(!!t&&v)})},r.a.createElement(h.a,null,r.a.createElement("div",{className:a.bold},"Character name: ",t.name)),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:a.details},"Mass: ",t.mass),r.a.createElement("div",{className:a.details},"Height: ",t.height),r.a.createElement("div",{className:a.details},"Hair color: ",t.hair_color),r.a.createElement("div",{className:a.details},"Skin color: ",t.skin_color),r.a.createElement("div",{className:a.details},"Eye color: ",t.eye_color),r.a.createElement("div",{className:a.details},"Gender: ",t.gender),r.a.createElement("div",{className:a.details},"Birth year: ",t.birth_year),r.a.createElement("div",{className:a.details},"Homeworld: ",i))))},H=I("GET_CHARACTERS"),U={getCharactersByFilm:function(e,t){return function(a){var n=t.map((function(e){return y.get(S(e)).then((function(e){return e.data}))}));Promise.all(n).then((function(t){a(H({filmId:e,characters:t}))})).catch((function(e){return a(C(e))}))}}},V=Object(i.b)((function(e){return{characters:e.characters.characters}}),U)((function(e){var t=e.isOpen,a=e.filmId,l=e.charactersUrl,c=e.getCharactersByFilm,i=e.characters;return Object(n.useEffect)((function(){t&&c(a,l)}),[t,c,l,a]),r.a.createElement(O,{list:i,filmId:a,title:"characters",Component:A})})),z=function(e){var t,a=e.data,l=E(),c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=i[0],o=i[1];return r.a.createElement(f.a,{expanded:s===a.episode_id,onChange:(t=a.episode_id,function(e,a){o(!!a&&t)})},r.a.createElement(h.a,null,r.a.createElement("div",{className:l.head},"Star Wars: Episode ","".concat(a.episode_id," - ").concat(a.title))),r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:l.details},"Director: ",a.director),r.a.createElement("div",{className:l.details},"Producer: ",a.producer),r.a.createElement("div",{className:l.details},"Release date: ",a.release_date),r.a.createElement("div",{className:l.details},"Opening crawl: ",a.opening_crawl),r.a.createElement(F,{planetsUrl:a.planets,filmId:a.episode_id,isOpen:s}),r.a.createElement(L,{vehiclesUrl:a.vehicles,filmId:a.episode_id,isOpen:s}),r.a.createElement(M,{starshipsUrl:a.starships,filmId:a.episode_id,isOpen:s}),r.a.createElement(V,{charactersUrl:a.characters,filmId:a.episode_id,isOpen:s}))))},D=function(e){var t=e.list,a=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a&&a),t.sort((function(e,t){return e.episode_id-t.episode_id})).map((function(e){return r.a.createElement(z,{key:e.episode_id,data:e})})))},W=a(57),q=a.n(W),J=function(){return r.a.createElement("div",{className:q.a.small},r.a.createElement("div",{className:q.a.loader}))},X=I("GET_FILMS"),K=I("GET_ONE_FILM"),Q={getFilms:function(){return function(e){y.get("films/").then((function(t){var a=t.data;e(X(a.results))})).catch((function(t){return e(C(t))}))}}},Y=Object(i.b)((function(e){var t=e.films;return{filmList:t.films,error:t.error}}),Q)((function(e){var t=e.getFilms,a=e.filmList,l=e.error;return Object(n.useEffect)((function(){t()}),[t]),a?r.a.createElement(D,{list:a,error:l}):r.a.createElement(J,null)})),Z=a(160),$=a(161),ee=Object(s.a)((function(){return{input:{border:0,outline:0,width:300,color:"#ffffff",borderRadius:12,padding:"5px 10px",margin:"0 auto 50px auto",backgroundColor:"#8D8A8A"},linkSearch:{width:"100%"}}})),te=Object(i.b)((function(e){return{filmList:e.films.films}}))((function(e){var t=e.filmList,a=ee();return r.a.createElement($.a,{autoComplete:!0,options:t||[],noOptionsText:"No Films",className:a.input,getOptionLabel:function(e){return e.title},renderOption:function(e){return r.a.createElement(o.b,{to:"/film/".concat((t=e.url,t.split("http://swapi.dev/api/films/")[1])),className:a.linkSearch},"Star Wars: Episode ","".concat(e.episode_id," - ").concat(e.title));var t},renderInput:function(e){return r.a.createElement(Z.a,Object.assign({},e,{size:"small",placeholder:"search film by name...",fullWidth:!0}))}})})),ae=function(){return r.a.createElement(u.a,null,r.a.createElement(te,null),r.a.createElement(Y,null))},ne=Object(s.a)((function(){return{root:{padding:"20px 0"},link:{fontSize:20,color:"#fff",textDecoration:"none"}}})),re={getOneFilm:function(e){return function(t){y.get("films/".concat(e)).then((function(e){var a=e.data;t(K(a))})).catch((function(e){return t(C(e))}))}}},le=Object(i.b)((function(e){return{film:e.films.oneFilm}}),re)((function(e){var t=e.film,a=e.getOneFilm,l=Object(m.f)().id,c=ne();return Object(n.useEffect)((function(){a(l)}),[a,l]),r.a.createElement(u.a,null,t?r.a.createElement("div",{className:c.root},r.a.createElement(o.b,{to:"/",className:c.link},"Go back"),r.a.createElement(z,{data:t})):r.a.createElement(J,null))})),ce=Object(s.a)((function(){return{root:{minHeight:"100vh",backgroundColor:"#424242",fontFamily:'"Open Sans", sans-serif'}}})),ie=function(){var e=ce();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ae}),r.a.createElement(m.a,{path:"/film/:id",component:le}))))},se=a(79),oe=a(32),me=a(9),ue={films:null,oneFilm:null,error:null},de=a(25),fe={planets:null},pe={vehicles:null,starships:null},he={characters:null},Ee=Object(oe.c)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FILMS":return Object(me.a)(Object(me.a)({},e),{},{films:t.payload});case"GET_ONE_FILM":return Object(me.a)(Object(me.a)({},e),{},{oneFilm:t.payload});case"ERROR":return Object(me.a)(Object(me.a)({},e),{},{error:t.payload});default:return e}},planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PLANETS":return Object(me.a)(Object(me.a)({},e),{},{planets:Object(me.a)(Object(me.a)({},e.planets),{},Object(de.a)({},t.payload.filmId,t.payload.planets))});default:return e}},starships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STARSHIPS":return Object(me.a)(Object(me.a)({},e),{},{starships:Object(me.a)(Object(me.a)({},e.starships),{},Object(de.a)({},t.payload.filmId,t.payload.starships))});case"GET_VEHICLES":return Object(me.a)(Object(me.a)({},e),{},{vehicles:Object(me.a)(Object(me.a)({},e.vehicles),{},Object(de.a)({},t.payload.filmId,t.payload.vehicles))});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHARACTERS":return Object(me.a)(Object(me.a)({},e),{},{characters:Object(me.a)(Object(me.a)({},e.characters),{},Object(de.a)({},t.payload.filmId,t.payload.characters))});default:return e}}}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,be=Object(oe.e)(Ee,void 0,ve(Object(oe.a)(se.a)));c.a.render(r.a.createElement(i.a,{store:be},r.a.createElement(ie,null)),document.getElementById("root"))},57:function(e,t,a){e.exports={small:"style_small__22dmr",loader:"style_loader__23M9-",spin:"style_spin__37cox"}},88:function(e,t,a){e.exports=a(116)},97:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.8451a6db.chunk.js.map