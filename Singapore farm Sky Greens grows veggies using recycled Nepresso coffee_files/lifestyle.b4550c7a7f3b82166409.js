webpackJsonp([48],{"+pN5":function(e,n){var t={homePage:"",searchPage:"Search"};function a(e){return(e<10?"0":"")+e}function r(e){return e.replace(/[^A-Za-z0-9\s]/g," ")}function o(e){return"string"==typeof e&&(e=parseInt(e)),n=new Date(e),t=n.getDate(),r=n.getMonth(),n.getFullYear()+a(r+1)+a(t);var n,t,r}e.exports={siteTitle:"CNA Luxury",siteLogo:"/static/img/sitelogo-cna-luxury.png",title404:"Error 404 : Page not found - CNA Luxury",defaultMCDataChannel:"sg:cnaluxury:online",favIcon:"/static/img/favicon-cna-luxury.png",googleFonts:"https://fonts.googleapis.com/css?family=EB+Garamond:400,500|Montserrat:300,500,600,800|Playfair+Display:400,700",googleSiteVerify:"ORfE0qO-lf0SdnyarhZ3v0MoUOf4jwMB-xe8bwENTGk",msValidate:"C897C7AC0C0688E10CE5A2B45767B86C",taggingStrCode:"cnaluxpageview",getTitle:function(e,n){return e||(n&&t[n]?"CNA Luxury - "+t[n]:"CNA Luxury")},adSection:function(){return"Section"===this.$route.name||"Article"===this.$route.name?this.$route.params.categoryId:"SearchPage"===this.$route.name?"search":"homepage"},getContentTitle:r,getContentDate:o,getContentName:function(e,n,t,a){var s=r(e);return s=s.replace(/\s/g,""),"sg:cnaluxury:online:"+(a.videoId?"videos":a.categoryId)+":"+o(n)+":"+t+"_"+s},getPageContentName:function(e,n,t){var a="";return"homePage"===n?a=":home":"searchPage"===n?(a=":search",a+=t&&t.q?":"+t.q.toLowerCase().replace(/[^A-Za-z0-9\s]/g," "):""):a=":"+e.categoryId+":home","sg:cnaluxury:online"+a},constants:{LIVE_HOST:"www.cnalifestyle.com",LIVE_HOST_PREVIEW:"preview.cnalifestyle.com",LIVE_HOST2:"cnalifestyle.channelnewsasia.com",LIVE_HOST_PREVIEW2:"preview.cnalifestyle.channelnewsasia.com"}}},0:function(e,n,t){t("NHnr"),e.exports=t("hvFc")},"38xt":function(e,n,t){"use strict";var a=window.getCNADomainID();n.a=a},"5SLs":function(e,n){var t={homePage:"",videosPage:"Videos",searchPage:"Search"};function a(e){return(e<10?"0":"")+e}function r(e){return e.replace(/[^A-Za-z0-9\s]/g," ")}function o(e){return"string"==typeof e&&(e=parseInt(e)),n=new Date(e),t=n.getDate(),r=n.getMonth(),n.getFullYear()+a(r+1)+a(t);var n,t,r}e.exports={siteTitle:"CNA Lifestyle",siteLogo:"/static/img/sitelogo-cna-lifestyle.png",title404:"Error 404 : Page not found - CNA Lifestyle",defaultMCDataChannel:"sg:cnalifestyle:online",googleSiteVerify:"gcqKpYH6dKkhC5wY6P-YBN9YKjoYiXuPzAGLxnPglWk",msValidate:"C897C7AC0C0688E10CE5A2B45767B86C",favIcon:"/static/img/favicon-cna-lifestyle.png",googleFonts:"https://fonts.googleapis.com/css?family=Buenard|Lato|Merriweather",taggingStrCode:"cnalpageview",getTitle:function(e,n){return e||(n&&t[n]?"CNA Lifestyle - "+t[n]:"CNA Lifestyle")},adSection:function(){return"Section"===this.$route.name||"Article"===this.$route.name?this.$route.params.categoryId:"Videos"===this.$route.name||"Video"===this.$route.name?"videos":"SearchPage"===this.$route.name?"search":"homepage"},getContentTitle:r,getContentDate:o,getContentName:function(e,n,t,a){var s=r(e);return s=s.replace(/\s/g,""),"sg:cnalifestyle:online:"+(a.videoId?"videos":a.categoryId)+":"+o(n)+":"+t+"_"+s},getPageContentName:function(e,n,t){var a="";return"homePage"===n?a=":home":"searchPage"===n?(a=":search",a+=t&&t.q?":"+t.q.toLowerCase().replace(/[^A-Za-z0-9\s]/g," "):""):a="videosPage"===n?":video:home":":"+e.categoryId+":home","sg:cnalifestyle:online"+a},constants:{LIVE_HOST:"www.cnaluxury.com",LIVE_HOST_PREVIEW:"preview.cnaluxury.com",LIVE_HOST2:"cnaluxury.channelnewsasia.com",LIVE_HOST_PREVIEW2:"preview.cnaluxury.channelnewsasia.com"}}},DM60:function(e,n){e.exports={__schema:{types:[{kind:"OBJECT",name:"Query",possibleTypes:null},{kind:"OBJECT",name:"StackRow",possibleTypes:null},{kind:"SCALAR",name:"String",possibleTypes:null},{kind:"OBJECT",name:"FrontPageItem",possibleTypes:null},{kind:"INTERFACE",name:"IFrontPageItem",possibleTypes:[{name:"FrontPageItem"},{name:"Article"},{name:"FrontFeatureItem"}]},{kind:"SCALAR",name:"Int",possibleTypes:null},{kind:"SCALAR",name:"Boolean",possibleTypes:null},{kind:"OBJECT",name:"Context",possibleTypes:null},{kind:"OBJECT",name:"Video",possibleTypes:null},{kind:"INTERFACE",name:"ITaggable",possibleTypes:[{name:"Video"},{name:"Article"},{name:"MCChannel"}]},{kind:"OBJECT",name:"PhotoDef",possibleTypes:null},{kind:"OBJECT",name:"ArticlePhoto",possibleTypes:null},{kind:"INTERFACE",name:"IFrontImage",possibleTypes:[{name:"FrontPageItem"},{name:"Article"},{name:"FrontFeatureItem"}]},{kind:"UNION",name:"DynamicStackItem",possibleTypes:[{name:"StackRow"},{name:"CMHTML"}]},{kind:"OBJECT",name:"CMHTML",possibleTypes:null},{kind:"OBJECT",name:"Article",possibleTypes:null},{kind:"OBJECT",name:"Author",possibleTypes:null},{kind:"OBJECT",name:"Section",possibleTypes:null},{kind:"UNION",name:"DynamicSectionItem",possibleTypes:[{name:"FrontPageItem"},{name:"StackRow"},{name:"CMHTML"}]},{kind:"OBJECT",name:"MCChannel",possibleTypes:null},{kind:"OBJECT",name:"__Schema",possibleTypes:null},{kind:"OBJECT",name:"__Type",possibleTypes:null},{kind:"ENUM",name:"__TypeKind",possibleTypes:null},{kind:"OBJECT",name:"__Field",possibleTypes:null},{kind:"OBJECT",name:"__InputValue",possibleTypes:null},{kind:"OBJECT",name:"__EnumValue",possibleTypes:null},{kind:"OBJECT",name:"__Directive",possibleTypes:null},{kind:"ENUM",name:"__DirectiveLocation",possibleTypes:null},{kind:"OBJECT",name:"FrontFeatureItem",possibleTypes:null}]}}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),r=t("/ocq"),o=t("fSn0"),s=t("38xt");function i(e){return function(){return t("mUJ2")("./"+e+".vue")}}a.a.use(r.a);var u,l=new r.a({mode:"history",scrollBehavior:function(e,n,t){return{x:0,y:0}},routes:function(){switch(s.a){case"luxury":return[{path:"/",name:"FrontPage",component:i("luxury/FrontPage")},{path:"/videos",component:o.default,props:{error:"404"}},{path:"/videos/:videoId",component:o.default,props:{error:"404"}},{path:"/search",name:"SearchPage",component:i("luxury/SearchPage"),props:function(e){return{q:e.query.q}}},{path:"/:categoryId/:articleId",name:"Article",component:i("luxury/ArticlePage")},{path:"/:categoryId",name:"Section",component:i("luxury/SectionPage")},{path:"*",name:"ErrorPage",component:o.default,props:{error:"404"}}];default:return[{path:"/",name:"FrontPage",component:i("FrontPage")},{path:"/videos",name:"Videos",component:i("VideosPage")},{path:"/videos/:videoId",name:"Video",component:i("VidPage")},{path:"/search",name:"SearchPage",component:i("SearchPage"),props:function(e){return{q:e.query.q}}},{path:"/:categoryId/:articleId",name:"Article",component:i("ArticlePage")},{path:"/:categoryId",name:"Section",component:i("SectionPage")},{path:"*",name:"ErrorPage",component:o.default,props:{error:"404"}}]}}()}),c=(t("IAXf"),t("u1/p")),p=t("rp1p"),m=t("uekS"),g=t("/jaC"),v=t("+dIz"),d=t("69U5"),h=t("/+6S"),y=t("iKms"),f=t("Ku+n"),C=t.n(f),T=t("ESch"),x=t("PxEr"),P=t("84LI"),S=t("wvfG"),E=t.n(S),k=t("WiKS"),A=t.n(k),w=t("uWbC"),b=t("DM60"),I=t.n(b);"{"===$("#cna_subdomain_id").attr("content").charAt(0)&&((u=document.createElement("link")).setAttribute("rel","stylesheet"),u.setAttribute("href",w.a.googleFonts),document.head.appendChild(u));a.a.component("vue-headful",A.a),a.a.component("b-modal",T.a),a.a.directive("b-modal",x.a),a.a.component("b-popover",P.a),a.a.use(C.a,{fallbackFunc:function(e,n,t){if(t){var a=$(e);new function(e,n){var t=$(window),a=function(){e.trunk8("update",n)};t.bind("resize",a),t.bind("cnaSwitchPage",function e(){t.unbind("resize",a),t.unbind("cnaSwitchPage",e)})}(a,a.text()),a.trunk8({lines:t,parseHTML:!1})}}}),a.a.use(E.a),a.a.use(y.a,{breakpoints:{xs:481,xsm:577,sm:769,md:993,lg:1201}});var _=Object({NODE_ENV:"production"}).PORT||8081,L="localhost"===window.location.hostname||"luxury.localhost"===window.location.hostname?"http://"+window.location.hostname+":"+_+"/graphql":"/graphql",O={Authorization:"Basic Y25hbGlmZXN0eWxlYWRtaW46bDFGMzV0eWxl"},B=new m.a(function(e,n){return e.setContext({headers:O}),n(e)}),F=Object(h.a)({useGETForHashedQueries:!0}).concat(new p.a({uri:L,fetchOptions:{method:"POST"}}));a.a.config.productionTip=!1;var V=!1,N=new m.a(function(e,n){return V&&(e.variables.timestamp=(new Date).getTime()+""),n(e).map(function(e){if(e&&e.errors&&e.errors.length>0&&"404"!==e.errors[0].message)throw V=!0,console.log("promoteErrorLink:: Errors detected. Listed below:"),console.log(e.errors),new Error(e.errors[0].message);return V=!1,e})}),M=new g.a({attempts:{max:3,retryIf:function(e,n){return!!e&&"404"!==e.message}}}),D=new c.a({link:m.a.from([B,M,N,F]),cache:new v.a({fragmentMatcher:new v.b({introspectionQueryResultData:I.a})}),connectToDevTools:!0});a.a.use(d.a);var W,J=new d.a({defaultClient:D,defaultOptions:{$loadingKey:"loading"},errorHandler:function(e){console.log("VueApollo errorHandler:"),console.log(e),this.apolloError=e.networkError?e.networkError.message:e.graphQLErrors&&e.graphQLErrors.length?e.graphQLErrors[0].message:e.message||"An Unknown Error has Occured."}});new a.a({el:"#app",router:l,provide:J.provide(),components:{app:(W="luxury"!==s.a?"App":"AppLuxury",function(){return t("sTBc")("./"+W+".vue")})},render:function(e){return e("app")}})},fSn0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("uWbC"),r={computed:{errorIsNum:function(){return parseInt(this.error)>0},errorIsNumMsg:function(){return"There was a problem processing this request. ("+this.error+")"},title404:function(){return a.a.title404}},props:{error:{type:String,default:"404"}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container error-display"},["404"===e.error?t("div",[t("vue-headful",{attrs:{title:e.title404}}),e._v(" "),t("h1",[e._v("The page you're looking for could not be found.")]),e._v(" "),t("p",[e._v("\n      What just happened ?\n    ")]),e._v(" "),e._m(0)],1):t("div",[t("h1",[e._v("Oops.. something went wrong.")]),e._v(" "),t("p",[e._v("\n      We are looking into it."),t("br"),e._v("Please try refreshing the page or come back in a few minutes."),t("br"),e._v("We apologise for the inconvenience"),"503"===e.error?t("span",[e._v(".")]):e._e()])]),e._v(" "),t("router-link",{attrs:{to:"/"}},[e._v("Homepage")])],1)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("ul",[n("li",[this._v("The page has been removed")]),this._v(" "),n("li",[this._v("The page no longer exists")]),this._v(" "),n("li",[this._v("You have typed the web address incorrectly")])])}]};var s=t("VU/8")(r,o,!1,function(e){t("xvQx")},"data-v-2e73297a",null);n.default=s.exports},hvFc:function(e,n){},mUJ2:function(e,n,t){var a={"./ArticlePage.vue":["4fx3",1],"./Footer.vue":["TVmP",28],"./FrontPage.vue":["nmjb",6],"./NavBar.vue":["g2+m",13],"./SearchPage.vue":["/kg+",4],"./SectionPage.vue":["fCet",7],"./VidPage.vue":["Krn0",2],"./VideosPage.vue":["U+Ia",9],"./luxury/ArticlePage.vue":["8K6T",0],"./luxury/Footer.vue":["1QWL",27],"./luxury/FrontPage.vue":["xINk",8],"./luxury/NavBar.vue":["8mKZ",16],"./luxury/SearchPage.vue":["LPKZ",3],"./luxury/SectionPage.vue":["DX82",5],"./luxury/partials/ArticleSnippet.vue":["0ZHd",32],"./luxury/partials/BackTo.vue":["6SLF",38],"./luxury/partials/CategoryArticles.vue":["uaTh",11],"./luxury/partials/ColArticles.vue":["1Ppl",23],"./luxury/partials/MobCo.vue":["LYOF",37],"./luxury/partials/MoreStories.vue":["gLVX",14],"./luxury/partials/RowExpandItem.vue":["jck9",24],"./luxury/partials/SearchPanel.vue":["r++G",26],"./luxury/partials/SectionDynChunk.vue":["PF7i",18],"./luxury/partials/SvgMagnifyingGlass.vue":["1dDR",34],"./luxury/partials/WhatsNew.vue":["iCod",19],"./partials/AdBox.vue":["txos",44],"./partials/AdSkinner.vue":["rAWX",43],"./partials/ArticleBar.vue":["xLjV",33],"./partials/ArticleSnippet.vue":["SaPO",31],"./partials/ArticlesTape.vue":["oHCW",17],"./partials/BackTo.vue":["Pxdm",39],"./partials/CategoryArticles.vue":["56L6",12],"./partials/ColArticles.vue":["ncY6",22],"./partials/DateAndShare.vue":["RCB/",30],"./partials/Dtm.vue":["3yRk",42],"./partials/ErrorDisplay.vue":["fSn0"],"./partials/Invoker.vue":["Z2p/",41],"./partials/LatestVideos.vue":["e5Jw",25],"./partials/MobCo.vue":["nd0i",35],"./partials/MoreStories.vue":["F4n/",15],"./partials/SearchPanel.vue":["kzkK",29],"./partials/SectionDynChunk.vue":["LEO7",20],"./partials/ShareList.vue":["Y9TW",36],"./partials/SvgMagnifyingGlass.vue":["huyg",40],"./partials/VideoPlayer.vue":["/Obs",10],"./partials/WhatsNew.vue":["zsOd",21]};function r(e){var n=a[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(a)},r.id="mUJ2",e.exports=r},sTBc:function(e,n,t){var a={"./App.vue":["M93x",46],"./AppLuxury.vue":["B0VJ",45],"./components/ArticlePage.vue":["4fx3",1],"./components/Footer.vue":["TVmP",28],"./components/FrontPage.vue":["nmjb",6],"./components/NavBar.vue":["g2+m",13],"./components/SearchPage.vue":["/kg+",4],"./components/SectionPage.vue":["fCet",7],"./components/VidPage.vue":["Krn0",2],"./components/VideosPage.vue":["U+Ia",9],"./components/luxury/ArticlePage.vue":["8K6T",0],"./components/luxury/Footer.vue":["1QWL",27],"./components/luxury/FrontPage.vue":["xINk",8],"./components/luxury/NavBar.vue":["8mKZ",16],"./components/luxury/SearchPage.vue":["LPKZ",3],"./components/luxury/SectionPage.vue":["DX82",5],"./components/luxury/partials/ArticleSnippet.vue":["0ZHd",32],"./components/luxury/partials/BackTo.vue":["6SLF",38],"./components/luxury/partials/CategoryArticles.vue":["uaTh",11],"./components/luxury/partials/ColArticles.vue":["1Ppl",23],"./components/luxury/partials/MobCo.vue":["LYOF",37],"./components/luxury/partials/MoreStories.vue":["gLVX",14],"./components/luxury/partials/RowExpandItem.vue":["jck9",24],"./components/luxury/partials/SearchPanel.vue":["r++G",26],"./components/luxury/partials/SectionDynChunk.vue":["PF7i",18],"./components/luxury/partials/SvgMagnifyingGlass.vue":["1dDR",34],"./components/luxury/partials/WhatsNew.vue":["iCod",19],"./components/partials/AdBox.vue":["txos",44],"./components/partials/AdSkinner.vue":["rAWX",43],"./components/partials/ArticleBar.vue":["xLjV",33],"./components/partials/ArticleSnippet.vue":["SaPO",31],"./components/partials/ArticlesTape.vue":["oHCW",17],"./components/partials/BackTo.vue":["Pxdm",39],"./components/partials/CategoryArticles.vue":["56L6",12],"./components/partials/ColArticles.vue":["ncY6",22],"./components/partials/DateAndShare.vue":["RCB/",30],"./components/partials/Dtm.vue":["3yRk",42],"./components/partials/ErrorDisplay.vue":["fSn0"],"./components/partials/Invoker.vue":["Z2p/",41],"./components/partials/LatestVideos.vue":["e5Jw",25],"./components/partials/MobCo.vue":["nd0i",35],"./components/partials/MoreStories.vue":["F4n/",15],"./components/partials/SearchPanel.vue":["kzkK",29],"./components/partials/SectionDynChunk.vue":["LEO7",20],"./components/partials/ShareList.vue":["Y9TW",36],"./components/partials/SvgMagnifyingGlass.vue":["huyg",40],"./components/partials/VideoPlayer.vue":["/Obs",10],"./components/partials/WhatsNew.vue":["zsOd",21]};function r(e){var n=a[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(a)},r.id="sTBc",e.exports=r},uWbC:function(e,n,t){"use strict";var a="luxury"===t("38xt").a?t("+pN5"):t("5SLs");n.a=a},xvQx:function(e,n){}},[0]);
//# sourceMappingURL=lifestyle.b4550c7a7f3b82166409.js.map