(this["webpackJsonpreact-online-portfolio"]=this["webpackJsonpreact-online-portfolio"]||[]).push([[0],{24:function(a,e,t){},30:function(a,e,t){},31:function(a,e,t){"use strict";t.r(e);var i=t(0),r=t(1),s=t.n(r),o=t(10),n=t.n(o),l=(t(24),t(5)),c=t(2),d=function(a){return Object(i.jsxs)("div",{className:"div-thumbnail",children:[Object(i.jsx)("h1",{className:"thumbnail-title",children:a.title}),Object(i.jsx)("img",{className:"thumbnail-img",src:a.img,alt:a.name})]})},p=function(a){var e=a.work.map((function(a){return"graphic design"===a.category?Object(i.jsx)(l.b,{to:"/work/".concat(a.id),children:Object(i.jsx)(d,{title:a.title,img:a.thumbnail})},a.id):"web development"===a.category?Object(i.jsx)("a",{href:a.url,target:"_return",children:Object(i.jsx)(d,{title:a.title,img:a.thumbnail})},a.id):void 0}));return Object(i.jsx)("div",{className:"div-thumbnail-grid",children:e})},g=function(a){var e=a.project.img.map((function(e,t){return Object(i.jsx)("img",{className:"project-img",src:e,alt:"".concat(a.project.title,", ").concat(t+1)},t)}));return Object(i.jsxs)("div",{className:"div-project-page",children:[Object(i.jsx)("div",{className:"div-project-header",style:{backgroundImage:"url(".concat(a.project.heroImg,")")}}),Object(i.jsxs)("div",{className:"div-project-main",children:[Object(i.jsxs)("div",{className:"div-project-info",children:[Object(i.jsx)("h1",{className:"project-title",children:a.project.title}),Object(i.jsxs)("p",{className:"text-body",children:[Object(i.jsx)("strong",{children:"What You're Seeing:"})," ",a.project.description]})]}),Object(i.jsx)("div",{className:"div-project-img",children:e}),Object(i.jsxs)("div",{className:"div-project-nav",children:[Object(i.jsx)(l.b,{className:"capsizedText",to:"/work/".concat(a.prevId),children:"Previous"}),Object(i.jsx)(l.b,{className:"capsizedText",to:"/work/".concat(a.nextId),children:"Next"})]})]})]})},u=t.p+"static/media/Alan_Avery_Resume.62b85c61.pdf",m=function(){return Object(i.jsxs)("div",{className:"div-about-page",children:[Object(i.jsx)("img",{src:"https://res.cloudinary.com/alanavery/image/upload/v1609287001/about/IMG_0896_kfb4mw.jpg",alt:"Alan Avery"}),Object(i.jsxs)("div",{className:"div-about-text text-body",children:[Object(i.jsx)("h2",{children:"Enthusiastic developer with a background in graphic design and more than ten years of leadership experience. Now excited to merge a well-honed sense of design with a passion for systematic problem-solving, and produce inspired web applications that perfectly balance form and function."}),Object(i.jsx)("p",{className:"resume",children:Object(i.jsx)("a",{href:u,target:"_return",children:"Click here for my resume."})})]})]})},h=t(15),v=t(33),y=function(a){return Object(i.jsxs)("nav",{ref:a.nodeRef,className:"nav-mobile",children:[Object(i.jsx)(l.b,{className:"title capsizedText",to:"/",onClick:a.hideNavMobile,children:"Alan Avery"}),Object(i.jsx)("img",{className:"icon-nav-hide",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAfklEQVRIx8WVQQ6AIAwE56k8jL/WixqNErvQjQcSAnQK7dICBNAigqoBtJ17TkocXHmPhSpwRDDcWAXf4CsORnbpgyr4Fa44+Do3b5i4wFwssy+T5SXkRFVDl5ItyO0A97TNrze3xdymFpvObT/UVltsVdFWz22dyNpDnd1/A5vo+NBBEmVWAAAAAElFTkSuQmCC",alt:"Hide navigation",onClick:a.handleClickHideNav}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",onClick:a.hideNavMobile,children:"Work"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/about",onClick:a.hideNavMobile,children:"About"})})]})]})},b=function(){var a=Object(r.useState)(!1),e=Object(h.a)(a,2),t=e[0],o=e[1],n=Object(r.useState)(!1),c=Object(h.a)(n,2),d=c[0],p=c[1],g=s.a.useRef(null),u=function(){o(!1),document.body.style.overflow=null};return window.addEventListener("resize",(function(){window.innerWidth>640&&u()})),Object(i.jsxs)("header",{children:[Object(i.jsx)(l.b,{className:"title capsizedText",to:"/",children:"Alan Avery"}),Object(i.jsx)("img",{className:"icon-nav-show",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAXCAYAAAAcP/9qAAAACXBIWXMAAAsSAAALEgHS3X78AAAAOElEQVRIx+3UsQ0AIBDDQMP+Q/4mYQYaIiFbSn1dAAbI481KQqNdUYWFhb+AwcsUFhYWvmgoXOYBXt1fDblizT4AAAAASUVORK5CYII=",alt:"Show navigation",onClick:function(){p(!1),o(!0),document.body.style.overflow="hidden"}}),Object(i.jsx)("nav",{className:"nav-desktop",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",children:"Work"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/about",children:"About"})})]})}),Object(i.jsx)(v.a,{in:t,timeout:300,classNames:"fade",unmountOnExit:!0,exit:!!d,nodeRef:g,children:Object(i.jsx)(y,{hideNavMobile:u,handleClickHideNav:function(){p(!0),u()},nodeRef:g})})]})},j=function(){var a=Object(c.e)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[a]),null},f=(t(30),function(){var a=[{id:1,category:"web development",title:"Kaleidoscope",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1610487579/thumbnails/Custom_Size_1_qrjuwy.jpg",url:"https://kaleidoscope-budget.herokuapp.com/",heroImg:"",img:[],description:""},{id:2,category:"web development",title:"Trip Planner",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1610487579/thumbnails/Custom_Size_2_fyc0xu.jpg",url:"https://trip-planner-aa.herokuapp.com/",heroImg:"",img:[],description:""},{id:3,category:"web development",title:"Guess Who?",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1610487579/thumbnails/Custom_Size_3_qnidsl.jpg",url:"https://alanravery.com/guess-who/",heroImg:"",img:[],description:""},{id:4,category:"graphic design",title:"LGBT Pride",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008188/thumbnails/thumbnails-v02_ckh97h.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1608613500/lgbt-pride/lgbt-pride-v02_f5k89o.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1608613420/lgbt-pride/lgbt-pride-v022_jgdfrs.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608613420/lgbt-pride/lgbt-pride-v023_n86jda.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608613420/lgbt-pride/lgbt-pride-v024_bpjsky.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608613420/lgbt-pride/lgbt-pride-v025_jwaodb.jpg"],description:"A Miller Lite campaign targeted exclusively towards the LGBT community in Chicago. I chose to forgo rainbows and typical symbols of LGBT life, in favor of something unexpected and unique to the city: the names of gay neighborhoods and the streets that make them up."},{id:5,category:"graphic design",title:"Jack's Pizza",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v022_agvelx.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1608614508/jacks-pizza/jacks-pizza-v02_ieklmq.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1608614507/jacks-pizza/jacks-pizza-v022_kkk2dw.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608614508/jacks-pizza/jacks-pizza-v023_zl44rz.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608614508/jacks-pizza/jacks-pizza-v024_i6ljdg.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608614508/jacks-pizza/jacks-pizza-v025_rydxyt.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608614508/jacks-pizza/jacks-pizza-v026_gnfnng.jpg"],description:"A complete visual rebranding of Jack's Pizza, including style guide. The weathered wood background is a nod to Jack's history as a Midwestern company, and it makes for a flexible design element when creating creative extensions."},{id:6,category:"graphic design",title:"Brunchfast",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v028_ehzaox.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1608615189/brunchfast/brunchfast-v02_btmhq2.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1608615189/brunchfast/brunchfast-v022_evzceg.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608615189/brunchfast/brunchfast-v023_zca4yc.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608615189/brunchfast/brunchfast-v024_cdv4ab.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608615189/brunchfast/brunchfast-v025_lqethi.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608615189/brunchfast/brunchfast-v026_t8tmj6.jpg"],description:"A variety of in-restaurant marketing materials featuring the sub-brand, Brunchfast. The trick in developing this brand-within-a-brand was creating a visual identity that felt elevated and reminiscent of brunch, but that still felt believable as a QSR (quick service restaurant) promotion."},{id:7,category:"graphic design",title:"Logos",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v024_xeli0q.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/EPN_c3tlb7.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/A_Break_For_Lunch_a4kq3y.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/WODer_taaoti.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/Bucs_In_Britain_npqkec.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/Sandwich_Nation_gg1lyh.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/Clutch_ph6kly.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/Grandwich_mxlruf.jpg","https://res.cloudinary.com/alanavery/image/upload/v1608993499/logos/Mardi_Gras_qhzec0.jpg"],description:"A random collection of logos created for various clients over the years. While each is a little different in style, I aim to create logos that are as concise as possible, yet full of character."},{id:8,category:"graphic design",title:"Climate Action Plan",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008188/thumbnails/thumbnails-v025_fiigbj.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609001279/climate-action-plan/climate-action-plan-v02_mp58nl.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609001279/climate-action-plan/climate-action-plan-v022_aklxcz.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001280/climate-action-plan/climate-action-plan-v023_kedlbi.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001279/climate-action-plan/climate-action-plan-v024_bknzdw.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001280/climate-action-plan/climate-action-plan-v025_lzx3ll.jpg"],description:"A book outlining the County of San Diego's climate action plan in 2012. The book, which is loaded with tables and infographics, was intended to be read by the general public, so I focused on creating a document that would be visually compelling and easy to digest."},{id:9,category:"graphic design",title:"Packaging Refresh",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v026_rrnzxp.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609001877/packaging-refresh/Sandwich_Wraps_dmsg9u.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609001883/packaging-refresh/Fountain_Drink_Cups2_itk7oz.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001877/packaging-refresh/Burger_Boxes_qvbxky.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001877/packaging-refresh/CarryOut_Bags_cigpdq.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001878/packaging-refresh/Various_Bags_yvm886.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001877/packaging-refresh/Munchie_Meal_v2h9za.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609001877/packaging-refresh/Fountain_Drink_Cups_ovhkfk.jpg"],description:"A creative overhaul of Jack in the Box's packaging suite. The previous packaging had been predominantly red, but I chose to go a more neutral route, with the intent of creating packaging that would allow its contents to be the star of the show \u2014 especially when being photographed for social media."},{id:10,category:"graphic design",title:"Little Saigon",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v027_l9ijbr.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609004114/little-saigon/little-saigon-v02_ai7cvk.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609004115/little-saigon/little-saigon-v022_liunlc.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609004114/little-saigon/little-saigon-v023_kbwztk.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609004114/little-saigon/little-saigon-v024_w2h3nd.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609004115/little-saigon/little-saigon-v025_oh757z.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609004114/little-saigon/little-saigon-v026_kprazr.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609004115/little-saigon/little-saigon-v027_u96w5n.jpg"],description:"A book outlining the future redevelopment of the Little Saigon neighborhood in San Diego. My goal in designing the document was to clearly communicate the facts of the redevelopment, while conveying the spirit and energy of the neighborhood."},{id:11,category:"graphic design",title:"St. Patrick's Day",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v023_upgvgr.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609008728/st-patricks-day/st-patricks-day-v02_gdww7j.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609008728/st-patricks-day/st-patricks-day-v022_aqgqxy.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609008728/st-patricks-day/st-patricks-day-v023_wtgug7.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609008728/st-patricks-day/st-patricks-day-v024_icgabn.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609008728/st-patricks-day/st-patricks-day-v025_lnow2j.jpg"],description:"A St. Patrick's Day themed Miller Lite campaign, designed specifically for Chicago. The Chi-rish shield was the symbol for the entire campaign, and it was so well-received by Chicagoans that MillerCoors ran the same campaign several years in a row."},{id:12,category:"graphic design",title:"Burgers & Bevs",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v029_qbatxu.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609165948/burgers-bevs/burgers-bevs-v02_jrtzzx.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609165947/burgers-bevs/burgers-bevs-v022_vpb68l.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609165947/burgers-bevs/burgers-bevs-v023_o3sprm.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609165947/burgers-bevs/burgers-bevs-v024_iyuuav.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609165947/burgers-bevs/burgers-bevs-v025_nu2j4s.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609165947/burgers-bevs/burgers-bevs-v026_j4dprn.jpg"],description:"A collection of window clings promoting various burgers and beverages. In the QSR (quick service restaurant) world, the windows of a restaurant are prime real estate, and the creative on those windows needs to tell a product's story quickly and effectively."},{id:13,category:"graphic design",title:"Athenos Feta",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v0210_ygntzd.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609166702/athenos-feta/athenos-feta-v02_qfa8k8.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609166702/athenos-feta/athenos-feta-v022_ssu8ua.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609166702/athenos-feta/athenos-feta-v023_hlkyro.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609166702/athenos-feta/athenos-feta-v024_mwolkj.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609166702/athenos-feta/athenos-feta-v025_o6t2cs.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609166702/athenos-feta/athenos-feta-v026_aq9luj.jpg"],description:"One of the first marketing campaigns for Athenos Feta. The salad fork image was central to the campaign, because it helped tell the story of a healthier cheese option while also providing the perfect stage to feature the product. The colors, typefaces and other design elements were inspired by the recently-refreshed packaging."},{id:14,category:"graphic design",title:"Summer Recipes",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v0211_xyfkqq.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609167303/summer-recipes/summer-recipes-v02_tv9vpx.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609167303/summer-recipes/summer-recipes-v022_dkqhz1.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609167303/summer-recipes/summer-recipes-v023_vgqmvg.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609167303/summer-recipes/summer-recipes-v024_nlf3ms.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609167303/summer-recipes/summer-recipes-v025_aydbae.jpg"],description:"A seasonal recipe book featuring Kraft products. It was distributed at Target stores nation-wide, and as a result, had to abide by both companies' brand guidelines. Fortunately, the two brands paired well together."},{id:15,category:"graphic design",title:"Crosstown Classic",thumbnail:"https://res.cloudinary.com/alanavery/image/upload/v1609008189/thumbnails/thumbnails-v0212_udzpmz.jpg",heroImg:"https://res.cloudinary.com/alanavery/image/upload/v1609167755/crosstown-classic/crosstown-classic-v02_heemmu.jpg",img:["https://res.cloudinary.com/alanavery/image/upload/v1609167754/crosstown-classic/crosstown-classic-v022_dd07s3.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609167754/crosstown-classic/crosstown-classic-v023_xyzdrz.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609167754/crosstown-classic/crosstown-classic-v024_o2uxmx.jpg","https://res.cloudinary.com/alanavery/image/upload/v1609167754/crosstown-classic/crosstown-classic-v025_eoethd.jpg"],description:"Promotional materials for the annual game between the Chicago White Sox and the Chicago Cubs. The client lacked the rights to use either team's logo, so copy, color and simple graphic elements were used to illustrate the rivalry between the two teams and their respective fan bases."}];return Object(i.jsxs)(l.a,{children:[Object(i.jsx)(j,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(c.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(p,{work:a})}}),Object(i.jsx)(c.a,{path:"/work/:id",render:function(e){var t,r,s=a.find((function(a){return a.id===Number(e.match.params.id)})),o=Number(s.id);return t=o<a.length?o+1:1,r=o>1?o-1:a.length,Object(i.jsx)(g,{project:s,nextId:t,prevId:r})}}),Object(i.jsx)(c.a,{path:"/about",component:m})]})]})]})}),k=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;t(a),i(a),r(a),s(a),o(a)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),k()}},[[31,1,2]]]);
//# sourceMappingURL=main.6507f664.chunk.js.map