(this["webpackJsonpay-music-app"]=this["webpackJsonpay-music-app"]||[]).push([[0],{15:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),i=s.n(c),r=s(9),a=s.n(r),u=(s(15),s(3)),g=s(5),o=s(4);var j=function(e){return Object(n.jsxs)("div",{className:"c-player--controls",children:[Object(n.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(n.jsx)(g.a,{icon:o.a})}),Object(n.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(n.jsx)(g.a,{icon:e.isPlaying?o.c:o.d})}),Object(n.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong()},children:Object(n.jsx)(g.a,{icon:o.b})})]})};var l=function(e){return Object(n.jsxs)("div",{className:"c-player--details",children:[Object(n.jsx)("div",{className:"details-img",children:Object(n.jsx)("img",{src:e.song.img_src,alt:""})}),Object(n.jsx)("h3",{className:"details-title",children:e.song.title}),Object(n.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var m=function(e){var t=Object(c.useRef)(null),s=Object(c.useState)(!1),i=Object(u.a)(s,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){r?t.current.play():t.current.pause()})),Object(n.jsxs)("div",{className:"c-player",children:[Object(n.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:t}),Object(n.jsx)("h4",{children:"Now Playing"}),Object(n.jsx)(l,{song:e.songs[e.currentSongIndex]}),Object(n.jsx)(j,{isPlaying:r,setIsPlaying:a,SkipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),Object(n.jsxs)("p",{children:["Next up:"," ",Object(n.jsxs)("span",{children:[e.songs[e.nextSongIndex].title," by"," ",e.songs[e.nextSongIndex].artist]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://github.com/regedit-msc",children:Object(n.jsx)("p",{children:"Regedit"})})]})};var b=function(){var e=Object(c.useState)([{title:"Forget me too ft. Halsey",artist:"Machine Gun Kelly",img_src:"./images/music.jpg",src:"./music/on-n-on.mp3"},{title:"Away",artist:"Oxlade",img_src:"./images/music.jpg",src:"./music/away.mp3"},{title:"African-Giant",artist:"Burna Boy",img_src:"./images/music.jpg",src:"./music/african-giant.mp3"},{title:"Best Life",artist:"Cardi B ft Chance the Rapper",img_src:"./images/music.jpg",src:"./music/bestlife.m4a"},{title:"But A Dream",artist:"G-Easy",img_src:"./images/music.jpg",src:"./music/butadream.m4a"},{title:"Find My Way",artist:"Dababy",img_src:"./images/music.jpg",src:"./music/findmyway.m4a"},{title:"God's Plan",artist:"Drake",img_src:"./images/music.jpg",src:"./music/godsplan.m4a"},{title:"Pressure",artist:"Jackboy",img_src:"./images/music.jpg",src:"./music/pressure.m4a"},{title:"Gbona",artist:"Burna Boy",img_src:"./images/music.jpg",src:"./music/gbona.mp3"}]),t=Object(u.a)(e,1)[0],s=Object(c.useState)(0),i=Object(u.a)(s,2),r=i[0],a=i[1],g=Object(c.useState)(0),o=Object(u.a)(g,2),j=o[0],l=o[1];return Object(c.useEffect)((function(){l((function(){return r+1>t.length-1?0:r+1}))}),[r]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m,{currentSongIndex:r,setCurrentSongIndex:a,nextSongIndex:j,songs:t})})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7eb2389a.chunk.js.map