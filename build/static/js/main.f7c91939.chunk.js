(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",clicked:!1,count:0},{id:2,image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",clicked:!1,count:0},{id:3,image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",clicked:!1,count:0},{id:4,image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",clicked:!1,count:0},{id:5,image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",clicked:!1,count:0},{id:6,image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",clicked:!1,count:0},{id:7,image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",clicked:!1,count:0},{id:8,image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",clicked:!1,count:0},{id:9,image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",clicked:!1,count:0},{id:10,image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",clicked:!1,count:0},{id:11,image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",clicked:!1,count:0},{id:12,image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",clicked:!1,count:0}]},14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),o=a.n(c),s=(a(14),a(4)),r=a(5),l=a(7),m=a(6),g=a(8),u=(a(16),a(1)),d=function(e){return n.a.createElement("div",{className:"col-sm-3 ImageFormat"},n.a.createElement("img",{alt:e.id,src:e.image,clicked:e.clicked,onClick:function(){return e.arrangeImageRandom(e.id)}}))},p=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("p",null," Your Score: ",e.score)),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("p",null,"Welcome, let's Play!")),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("p",null," Highscore: ",e.highscore," "))),n.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center newBackground",styleName:"back"},n.a.createElement("h1",null," ",e.children),n.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once! ")))},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={images:u,score:0,highscore:0},a.arrangeImageRandom=function(e){a.state.images.find(function(t,i){if(t.id===e){if(0===u[i].count)return u[i].count=u[i].count+1,a.setState({score:a.state.score+1},function(){console.log(this.state.score)}),a.state.images.sort(function(){return Math.random()-.5}),!0;a.gameOver()}return console.log(t,i)})},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},function(){console.log(this.state.highscore)}),a.state.images.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(p,{score:this.state.score,highscore:this.state.highscore},"Clicky Memory Game"),n.a.createElement("div",{className:"row"},this.state.images.map(function(t){return n.a.createElement(d,{arrangeImageRandom:e.arrangeImageRandom,id:t.id,key:t.id,image:t.image,clicked:t.clicked})})))}}]),t}(i.Component);o.a.render(n.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.f7c91939.chunk.js.map