(function(e){function i(i){for(var a,o,c=i[0],r=i[1],n=i[2],p=0,v=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&v.push(t[o][0]),t[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(i);while(v.length)v.shift()();return l.push.apply(l,n||[]),s()}function s(){for(var e,i=0;i<l.length;i++){for(var s=l[i],a=!0,c=1;c<s.length;c++){var r=s[c];0!==t[r]&&(a=!1)}a&&(l.splice(i--,1),e=o(o.s=s[0]))}return e}var a={},t={app:0},l=[];function o(i){if(a[i])return a[i].exports;var s=a[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,i,s){o.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,i){if(1&i&&(e=o(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)o.d(s,a,function(i){return e[i]}.bind(null,a));return s},o.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(i,"a",i),i},o.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=i,c=c.slice();for(var n=0;n<c.length;n++)i(c[n]);var d=r;l.push([0,"chunk-vendors"]),s()})({0:function(e,i,s){e.exports=s("56d7")},"1f5b":function(e,i,s){"use strict";s("6fc1")},"56d7":function(e,i,s){"use strict";s.r(i);var a=s("7a23");function t(e,i,s,t,l,o){const c=Object(a["i"])("NavBar"),r=Object(a["i"])("HeaderSection"),n=Object(a["i"])("AboutSection"),d=Object(a["i"])("ServiceSection"),p=Object(a["i"])("ProcessSection"),v=Object(a["i"])("RealisationsSection"),u=Object(a["i"])("TestimonialsSection"),m=Object(a["i"])("ClientsSection"),g=Object(a["i"])("ContactSection");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["g"])(c),Object(a["g"])(r),Object(a["g"])(n),Object(a["g"])(d),Object(a["g"])(p),Object(a["g"])(v),Object(a["g"])(u),Object(a["g"])(m),Object(a["g"])(g)],64)}const l={class:"navbar fixed-top navbar-expand-lg navbar-light"},o=Object(a["e"])('<div class="container containernav"><a class="navbar-brand" href="#"><img class="logoimg" src="https://www.oblivius.ma/images/logo.png"></a><button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault"><ul class="navbar-nav ms-auto mt-1 navbar-nav-scroll"><li class="nav-item"><a class="nav-link ms-2 active" aria-current="page" href="#header"><p style="font-weight:bold;">Accueil</p></a></li><li class="nav-item"><a class="nav-link ms-2" href="#services"><p style="font-weight:bold;">à propos</p></a></li><li class="nav-item"><a class="nav-link ms-2" href="#details"><p style="font-weight:bold;">Services</p></a></li><li class="nav-item"><a class="nav-link ms-2" href="#features"><p style="font-weight:bold;">Process</p></a></li><li class="nav-item"><a class="nav-link ms-2" href="#features"><p style="font-weight:bold;">Réalisations</p></a></li><li class="nav-item"><a class="nav-link ms-2 me-4" href="#features"><p style="font-weight:bold;">contact</p></a></li></ul><span class="nav-item"><a class="nav-link devis text-white btn-navbar" href="#contact">demander un devis</a></span></div></div>',1),c=[o];function r(e,i,s,t,o,r){return Object(a["h"])(),Object(a["c"])("nav",l,c)}var n=s("1157"),d=s.n(n),p={name:"NavBar"};d()((function(){d()(document).scroll((function(){var e=d()(".navbar"),i=d()(".nav-item a p"),s=d()(".btn-navbar");e.toggleClass("bg-navbar",d()(this).scrollTop()>50),i.toggleClass("text-dark",d()(this).scrollTop()>50),s.removeClass("text-white",d()(this).scrollTop()>50),s.toggleClass("text-white",0==d()(this).scrollTop()),s.toggleClass("devisnewclass",d()(this).scrollTop()>50)}))}));var v=s("6b0d"),u=s.n(v);const m=u()(p,[["render",r]]);var g=m,f=s("974b"),b=s.n(f);const h=Object(a["d"])("div",{class:"overlay"},null,-1),w=Object(a["d"])("video",{playsinline:"",autoplay:"",muted:"",loop:""},[Object(a["d"])("source",{src:b.a,type:"video/mp4"})],-1),A=Object(a["e"])('<div class="container h-100"><div class="d-flex h-100 text-center align-items-center herosection"><div class="w-100"><h1 class="text-white herotitle">Leader en motion design au maroc</h1><p class="text-white herop"> Agence spécialisée du brand content : animation 2D, motion design, film Web et publicitaire, des supports et contenus créatifs. </p><button class="btn herobtn">je veux une vidéo</button></div></div></div>',1),j=[h,w,A];function O(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("header",null,j)}var x={name:"HeaderSection"};const y=u()(x,[["render",O]]);var S=y;const C={id:"about",class:"about"},B=Object(a["d"])("div",{class:"container","data-aos":"fade-up"},[Object(a["d"])("div",{class:"row gx-0"},[Object(a["d"])("div",{class:"col-lg-1"}),Object(a["d"])("div",{class:"col-lg-5 d-flex flex-column justify-content-center","data-aos":"fade-up","data-aos-delay":"200"},[Object(a["d"])("div",{class:"content"},[Object(a["d"])("div",{class:"abouttitle"},[Object(a["d"])("div",{class:"trait"}),Object(a["d"])("h3",{class:"texttitleabout text-dark fw-light"},"à propos")]),Object(a["d"])("h2",{style:{color:"black"}},[Object(a["f"])("AGENCE DE "),Object(a["d"])("br"),Object(a["f"])("COMMUNICATION DIGITALE")]),Object(a["d"])("p",{class:"text-dark"},[Object(a["f"])(" Notre mission est d’imaginer un univers graphique en mouvement qui raconte une histoire unique : celle de votre projet."),Object(a["d"])("br"),Object(a["d"])("br"),Object(a["f"])("Nous vous accompagnons dans l’écriture de votre film pour raconter votre histoire de la meilleure façon possible. Nous assurons également la direction artistique, la voix off, l’animation, et le bruitage. ")]),Object(a["d"])("div",{class:"text-lg-start"},[Object(a["d"])("a",{href:"#",class:""},[Object(a["d"])("button",{class:"btn aboutbtn"},"Je veux une vidéo")])])])]),Object(a["d"])("div",{class:"about-video col-lg-6 d-flex flex-column justify-content-center"},[Object(a["d"])("iframe",{src:"https://player.vimeo.com/video/225766667?h=122a93d690",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""})])])],-1),N=Object(a["d"])("div",{class:"traitvertical"},null,-1),q=[B,N];function D(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("section",C,q)}var E={name:"AboutSection"};const I=u()(E,[["render",D]]);var L=I;const M={id:"services",class:"services"},R=Object(a["e"])('<div class="container"><div class="section-title" data-aos="fade-in" data-aos-delay="100"><div class="traitvertical"></div><p>Services</p></div></div><div class="container"><div class="row justify-content-center text-center mb-5"><div class="col-md-6" data-aos="fade-up"><h2 class="section-heading">QUE PROPOSONS NOUS ?</h2><p class="section-p"> Notre mission est d&#39;accompagner nos clients de la définition d’un besoin jusqu’au développement ou la création de solutions digitales. </p></div></div><div class="row"><div class="col-md-4" data-aos="fade-up" data-aos-delay=""><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-file-video"></i></div><h3 class="mb-3">MOTION DESIGN</h3><p> Nous réalisons vos vidéos explicatives et vos publicités pour présenter vos services de la meilleure façon possible. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="100"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-laptop" aria-hidden="true"></i></div><h3 class="mb-3">SITE WEB / APPLICATIONS</h3><p> Nous développons des sites web / applications sur mesure qui correspondent à tous vos besoins. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="200"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-bullhorn" aria-hidden="true"></i></div><h3 class="mb-3">CORPORATE BRANDING</h3><p> Logo, charte graphique, flyers... Nous accompagnons les entreprises dans la définition de leur identité. </p></div></div></div></div><div class="traitvertical2"></div>',3),F=[R];function U(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("section",M,F)}var V={name:"ServiceSection"};const H=u()(V,[["render",U]]);var P=H;const k={id:"process",class:"process"},T=Object(a["e"])('<div class="container"><div class="section-title" data-aos="fade-in" data-aos-delay="100"><div class="traitvertical2"></div><p>LE PROCESS</p></div></div><div class="container"><div class="row justify-content-center text-center mb-5"><div class="col-md-6" data-aos="fade-up"><h2 class="section-heading">UN OEIL SUR LES ÉTAPES</h2><p class="section-p"> Nous avons élaboré un simple processus en 6 étapes où vous pourrez faire des suggestions et demander des changements. </p></div></div><div class="row"><div class="col-md-4" data-aos="fade-up" data-aos-delay=""><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-file-video"></i></div><h3 class="mb-3">LE BRIEF</h3><p> Au début parlez-nous du détails à propos de votre projet, votre cible et le problème que vous voulez résoudre à travers la vidéo explicative. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="100"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-laptop" aria-hidden="true"></i></div><h3 class="mb-3">LE SCRIPT</h3><p> Nous vous accompagnons dans l&#39;écriture de votre vidéo, pour raconter votre historie de la meilleure façon possible. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="200"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-bullhorn" aria-hidden="true"></i></div><h3 class="mb-3">STORY BOARD</h3><p> Une fois le script accepté par vous, nos experts vont construire l&#39;histoire scène après scène sur un tableau spécial. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="200"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-bullhorn" aria-hidden="true"></i></div><h3 class="mb-3">VOIX OFF</h3><p> Selon votre choix de langue, nos acteurs talentueux, enregistrent la voix off de la vidéo, pour donner de la vie à votre histoire. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="200"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-bullhorn" aria-hidden="true"></i></div><h3 class="mb-3">ILLUSTRATION</h3><p> Votre vidéo commence à prendre forme en dessinant les charactères, les arrières plans et en ajoutant de la couleur à votre histoire. </p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="200"><div class="feature-1 text-center"><div class="wrap-icon icon-1"><i class="fa fa-bullhorn" aria-hidden="true"></i></div><h3 class="mb-3">ANIMATION</h3><p> Dans cette dernière étape, nos experts de l’animation regroupent toutes les scenes, et ajoutent des effets visuelles et sonores. </p></div></div></div></div><div class="traitvertical3"></div>',3),J=[T];function G(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("section",k,J)}var Q={name:"ProcessSection"};const Y=u()(Q,[["render",G]]);var K=Y;const W={id:"realisations",class:"realisations"},X=Object(a["e"])('<div class="container"><div class="section-title" data-aos="fade-in" data-aos-delay="100"><div class="traitvertical"></div><p>NOS RÉALISATIONS</p></div></div><div class="container"><div class="row justify-content-center text-center mb-5"><div class="col-md-8" data-aos="fade-up"><h2 class="section-heading">Quelques projets et réalisations</h2><p class="section-p2 justify-content-center text-center"> Parce qu&#39;une image vaut mille mots, retrouvez un échantillon de nos plus belles créations et le meilleur de notre savoir-faire </p></div></div><div class="row portfolio-container realisationscontainer"><div class="col-xl-4 col-md-6 portfolio-item filter-app"><div class="portfolio-wrap"><a href="https://www.oblivius.ma/uploads/realisations/miniature%20showreel.png" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20showreel.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-product"><div class="portfolio-wrap"><a href="assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20itech.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-branding"><div class="portfolio-wrap"><a href="assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20BAM%20Reseau.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-books"><div class="portfolio-wrap"><a href="assets/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20salaf%20depanini.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-app"><div class="portfolio-wrap"><a href="assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20bp%20bladi%20prestige.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-product"><div class="portfolio-wrap"><a href="assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20bp%20conciergerie%201.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-branding"><div class="portfolio-wrap"><a href="assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20startup.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-books"><div class="portfolio-wrap"><a href="assets/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20FCE.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-app"><div class="portfolio-wrap"><a href="assets/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20avon%20on.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-product"><div class="portfolio-wrap"><a href="assets/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20avon%20C01.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-branding"><div class="portfolio-wrap"><a href="assets/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20axa%20assurance.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div><div class="col-xl-4 col-md-6 portfolio-item filter-books"><div class="portfolio-wrap"><a href="assets/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="https://www.oblivius.ma/uploads/realisations/miniature%20Startup.png" class="img-fluid rounded" alt=""></a><div class="portfolio-info"><p class="realisationtitle"><a href="portfolio-details.html" title="More Details">Showreel 2022 - Oblivius</a></p><p class="realisationp">Vidéo explicative animée</p></div></div></div></div></div>',2),z=[X];function Z(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("section",W,z)}var _={name:"RealisationsSection"};const $=u()(_,[["render",Z]]);var ee=$,ie=s("8684"),se=s.n(ie),ae=s("c102"),te=s.n(ae);const le={id:"myCarousel",class:"carousel slide","data-ride":"carousel"},oe=Object(a["e"])('<div class="container"><div class="section-title" data-aos="fade-in" data-aos-delay="100"><div class="gaptitletestimonial"></div><p class="text-white">TÉMOIGNAGES</p></div></div><div class="justify-content-center text-center titlecarousel"><div class="col-md-6" data-aos="fade-up"><h2 class="section-heading text-white">ILS NOUS FONT CONFIANCE</h2><p class="section-p text-white"> Satisfaire nos clients, c&#39;est notre plus grande passion. </p></div></div><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li></ol><div class="carousel-inner containercarousel"><div class="carousel-item active"><div class="container"><div class="carousel-caption text-center"><div class="quote"><img class="responsive img-responsive quoteimg" src="'+se.a+'"> <p class="text-white textquote">Une équipe ultra professionnelle, créative et réactive. Un réel plaisir de travailler avec des personnes aussi talentueuses. Je recommande a 100% !</p><img class="responsive img-responsive quoteimg" src="'+te.a+'"></div><p class="personne">Khadija Benmkaddem</p><p class="societe">Listy.ma</p></div></div></div><div class="carousel-item"><div class="container"><div class="carousel-caption"><div class="quote"><img class="responsive img-responsive quoteimg" src="'+se.a+'"> <p class="text-white textquote">Tout simplement La meilleure agence de motion design au Maroc ! </p><img class="responsive img-responsive quoteimg" src="'+te.a+'"></div><p class="personne">Julien Santenac</p><p class="societe">BoostPlus</p></div></div></div><div class="carousel-item"><div class="container"><div class="carousel-caption text-center"><div class="quote"><img class="responsive img-responsive quoteimg" src="'+se.a+'"> <p class="text-white textquote">Une équipe ultra professionnelle, créative et réactive. Un réel plaisir de travailler avec des personnes aussi talentueuses.</p><img class="responsive img-responsive quoteimg" src="'+te.a+'"></div><p class="personne">Khadija Benmkaddem</p><p class="societe">Listy.ma</p></div></div></div></div>',4),ce=Object(a["d"])("a",{class:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},[Object(a["d"])("span",{class:"sr-only"},"Previous")],-1),re=Object(a["d"])("a",{class:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},[Object(a["d"])("span",{class:"sr-only"},"Next")],-1),ne=[oe,ce,re];function de(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("div",le,ne)}var pe={name:"TestimonialsSection"};s("5c4d");const ve=u()(pe,[["render",de]]);var ue=ve;const me={id:"clients",class:"clients section-bg"},ge=Object(a["e"])('<div class="container"><div class="row"><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/nestle%CC%81.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/publicis.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/happy%20smala.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/boost%20plus.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/Jestimo%20expert.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/listy.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/Sobrus.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/Ciwa%20logo%201.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/paradis%20events.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/anssar.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/Abattoirs.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/glass.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/dar%20el%20farouj%20min%202.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/sarouty%20min.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/heetch%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/siligom%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/logo%20marentree.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/cluster%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/giz%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/banque%20populaire%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/takado%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/denos%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/vinci%20logo.png" class="img-fluid" alt=""></div><div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"><img src="https://www.oblivius.ma/uploads/partners/seebeyond%20logo.png" class="img-fluid" alt=""></div></div></div><div class="traitvertical3"></div>',2),fe=[ge];function be(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("section",me,fe)}var he={name:"ClientsSection"};const we=u()(he,[["render",be]]);var Ae=we;const je={id:"services",class:"services contactsection"},Oe=Object(a["d"])("div",{class:"container"},[Object(a["d"])("div",{class:"section-title2","data-aos":"fade-in","data-aos-delay":"100"},[Object(a["d"])("div",{class:"traitvertical"}),Object(a["d"])("p",{class:"text-white"},"CONTACTEZ-NOUS")])],-1),xe=Object(a["d"])("div",{class:"container"},[Object(a["d"])("div",{class:"row justify-content-center text-center mb-5"},[Object(a["d"])("div",{class:"col-md-6","data-aos":"fade-up"},[Object(a["d"])("h1",{class:"section-heading text-white"},"NOUS AIMERIONS RECEVOIR DE VOS NOUVELLES"),Object(a["d"])("p",{class:"section-p text-white"}," Avez-vous une question à nous poser ? Ou souhaitez-vous créer votre propre vidéo explicative ? Notre équipe est prête à répondre à toutes vos questions. ")])]),Object(a["d"])("div",{class:"contact"},[Object(a["d"])("form",{action:"forms/contact.php",method:"post",role:"form",class:"php-email-form p-3 p-md-4"},[Object(a["d"])("div",{class:"row m-6"},[Object(a["d"])("div",{class:"col-xl-6 form-group"},[Object(a["d"])("input",{type:"text",name:"name",class:"form-control",id:"name",placeholder:"Nom complet *",required:""})]),Object(a["d"])("div",{class:"col-xl-6 form-group"},[Object(a["d"])("input",{type:"text",class:"form-control",name:"societe",id:"email",placeholder:"Société",required:""})])]),Object(a["d"])("div",{class:"row"},[Object(a["d"])("div",{class:"col-xl-6 form-group"},[Object(a["d"])("input",{type:"text",name:"telephone",class:"form-control",id:"name",placeholder:"Téléphone",required:""})]),Object(a["d"])("div",{class:"col-xl-6 form-group"},[Object(a["d"])("input",{type:"email",class:"form-control",name:"email",id:"email",placeholder:"Email",required:""})])]),Object(a["d"])("div",{class:"form-group"},[Object(a["d"])("textarea",{class:"form-control",name:"message",rows:"5",placeholder:"Comment pouvons-nous vous aider ? *",required:""})]),Object(a["d"])("div",{class:"text-center"},[Object(a["d"])("button",{class:"submitbtn",type:"submit"},"Envoyer")]),Object(a["d"])("div",{class:"text-center coordonnees"},[Object(a["d"])("p",{class:"contactemail text-white"},"contact@oblivius.ma"),Object(a["d"])("p",{class:"contactnumber text-white"},"(+212) 05 37 77 83 48 / 06 10 15 85 99")])])])],-1),ye=Object(a["e"])('<div class="footer"><hr><p class="realiseavec text-white">Réalisé avec <i class="bi bi-suit-heart-fill"></i> au Maroc. © Oblivius.ma 2022</p><div class="socialmedia"><a href=""><i class="bi bi-facebook"></i></a><a href=""><i class="bi bi-instagram"></i></a><a href=""><i class="bi bi-google"></i></a><a href=""><i class="bi bi-linkedin"></i></a><a href=""><i class="bi bi-vimeo"></i></a><a href=""><i class="bi bi-youtube"></i></a></div></div>',1),Se=[Oe,xe,ye];function Ce(e,i,s,t,l,o){return Object(a["h"])(),Object(a["c"])("section",je,Se)}var Be={name:"Contact"};const Ne=u()(Be,[["render",Ce]]);var qe=Ne,De={name:"App",components:{NavBar:g,HeaderSection:S,AboutSection:L,ServiceSection:P,ProcessSection:K,RealisationsSection:ee,TestimonialsSection:ue,ClientsSection:Ae,ContactSection:qe}};s("1f5b");const Ee=u()(De,[["render",t]]);var Ie=Ee;Object(a["b"])(Ie).mount("#app")},"5c4d":function(e,i,s){"use strict";s("802d")},"6fc1":function(e,i,s){},"802d":function(e,i,s){},8684:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB3QAAAd0B1+bDhAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQcSURBVHic7ZtPiFVVHMc/vzvOGDpNBlZGlKZJlsJMwmwCa5X9WURLF60K2gRB5VALCwoso4KijSHRItDMhRBpixaR1EIYUhH7R0ENaFlglGNq88Zfi3OfvLnd++ac8869P2HeFw7MY8453+/v+3jnnHt+vyuqykJGZi3AGn0DrAVYY1HKyURkCTCUfzyrqrMp5w/QMQAMAwLMqOq5ys6qGtyAxcBDwE7gC+AH4G9AO9opYFvM/IFabgO2Ap8AXwO/Aq0OHbPAx8D60vGBZHcDHwFnC8F2a/fUEPQI8AJwIkDHwWgDgHXA/gCyzrYzYeBDwFPAHxE6LgHXFufsugbkv6VXgWeAgW59u+CqyHFFLePAh8Dq2ClwP905qDRARK4B9gL3RxImg4g8CuwikZmdKN0GRWQVcJgrI/gdwAfUEDyUGCAiI8AB4PY6CEMgIk8Dz9XJMccAEcmAPcCdCTlOxgwSkc3A6wl1TOO26rkorLLbiVvpq1oLuCVitV8J/JlYyztlXJcXQRFZDUz04PAM8D3QPnV9B7ytqlMRc20HlvWg5Tfgl/zvC8Bu3Dryf3S4vptwV78EHgc2AosT7fWjuD07RMc08DLwILAiiC8nvSuQ9DzwLJDVcMr7NDD4Q8CaaL6cdFcA4TfAHakDz3WsCQx+otcvAdxOcNqT8CKwoY7gczFbA4J/LxEnmwJIn68r+FzMV546poCRVAa84Ul6GBioMfjrcY+uPlruS8Wb4X/i26P1XnCsxe+G6rSqfpaKNANWePY9koq0AiY6MuBGz75HUxKXwFdHcgNu8Og3pap/pSQugY8OgOMpSTP8LkbPpyStwKBnv6RafK/Fb85vh64ErEo5ma8BS4AHUhL3gEdSThaSGHlXRDakJI/EvSLyUn530TNCEiM3AZMish/4Fvh3nv5ngGPAcVX9J1JfFV4EHhaRz4Hf5+nbwuUtjmrFo3nIw0dMm8UlUIbnOQnuaEDLj8Cm4lG4btJ2+wnYaGxA+wt5zcIABX4GrjY2oN2eaD8LNImVwFsNc1bhTRG51SI9/piILDfgLWIYeNKqPmDUiLeIUSsDxox4ixizMuA6I94ili/4Epm+AdYCrNE3wFqANfoGWAuwRt8AawHW6BtgLcAafQOsBVgjw5XGNI2yLLNFaf2lDHdT2jTKOE10ZNSf9S1DGaeJjgxXZdUkzuDq/Is4kf+vSRwClx2apLnr6C1dcgNbGtQxCSxqE6/HVVTWTbrPo1ZoXwM6LpC/QtNJPIbL5dVB2AJeAYY8DBjK+7Zq0nIMGLvMVyAfxBUfHsS99NQL0UVcOcv7wHhE1dh4PvZIPlcvWk7lMU0Ag5080s6PlUFEhol/te6cqs5Eji3qGASWRg5vqep05dzdDFgI6B+FrQVYY8Eb8B+9UrZeawVzfwAAAABJRU5ErkJggg=="},"974b":function(e,i,s){e.exports=s.p+"media/video.fbbffbcb.mp4"},c102:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB3QAAAd0B1+bDhAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQrSURBVHic7ZtPaBVXGMV/d2ISNTaBLlQQ4kJpTVOJKbgRjKsK1lW7qRZcldKF0BZqIIuUYsG22oVuhKCom5KFWQht7R9dtehOagUr2JaU/iGpqNQ/qabNyzsuZhLee515787kztxA3oG7eHfu3HO+M/OGb757x0hiKSPwLcA3mgb4FuAby+odNMasajSmDv6RNJPx3FodrUBHxtNLkqYSj0qab0ArMAh8CUwAWkD7F7gKnAG2VvLYNGBrdO7VaK6FaJmIYhoEWqt4Kgi3ANcWSJTUSsCHQJtF4G3R2FJOWq4BW6oMAHqB6ZwIK9uYhQFjBeiYBnrnUoBlwJUCSOfanjrB7ylQx5UodvYXSCrgLjF/BcJb/27BWvYHwADF4mnCv1wteqNjRWIgIHz4FY04Ti86AmCjB+I4Ti86Avxkgy2WfXkjWPKpcNMA3wJ8o2mAbwG+0TTAtwDfaBrgW4BvNA3wLcA3mgb4FuAbAXDHt4gIt32QBoRV0sUALzoC4AcPvIrp86GDADgOJK+c5ANT2yHpDnC6YB0Ekn4F3i2aOAHvAL8VSRgASDoBHAHKRZLXQtJD4BVgvEjSytr8duAX8q/Hf9RgdWgVMALM5q3FxO0QMcZ0E5apn6Hx6vBqYAfwQoNxlTgsaajRIGPMSmAz0EfjNYM2oAd4GWi3VpJ21TbhigXA+9g7/7EL3gQtzwN/2mpxkglKKks6CFx0Md8CtVwH3rQd7zoV/tzxfFnxNfDIZqBrA/5wPF8mSJrFUotrA1ZYjnOydaYBbLSUXBuw2XLcLce8VTDGdAHdNjpcG9BvOW7SMW8tbFeaJ30Z8Jdj3lpY63BmgDHmRWCNxdAy8LMr3hgdLcBey+E3XSUfncDv2CUfl/NKgiItQ5Y6BGx3RXoqBemBnLNA2z2Ft4DARQo8mCJ4ARtyCr4HuJFCx0lJ2d8FgA3AdymD/yqHwAPCesbjFDrKQH9qA4C1wC7gA8IqUprgy0Cfo6DbCd8+XwcupdQhYHRurthXXWPMCmAf8BqwPOpeHxmQFaOSUhc+jTH9wNvApqirA3iWcF9zFswAw/O/Ehw+RnpX67W/gfUZrnQ37vcMH6riiCFtA+45JCwBOzPe6occB3+esA46zxGXCK0EumL6s2JQ0oWM565zqOMGsFdSVd0z76Wxw5KO5sxhg5vAbkkPag9k/RqkEaaBNyR9mtP8afAN8Kqk+3EH87gDxoGBRRD8LPAJ4ZWPDR6IfQh2kK0cfRt4C4uvQlI8BEcy6BBwDthkxZFA/FkKsh+B94BOV4FX6BhIoeMhcBbYloojgfi5yITKO6FEWMj4HvgCOABsdB10jJZh/v8B1wPgJ+Db6C55CWjPMn/swsgcjDEdhBmXgCmFxcbCEb3jPxX9/E+SVcXXau56BiwFNLfI+BbgG0vegCekTOaMm6KgsgAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.a19b1aa4.js.map