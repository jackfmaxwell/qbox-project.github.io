(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{1043:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/core/events/client",function(){return r(3811)}])},967:function(e,n,r){"use strict";var s=r(1527);r(959);var o=r(6125),t=r(2349);let i={logo:(0,s.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url(/qbox-duck.png) no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Qbox"}),project:{link:"https://github.com/Qbox-project"},chat:{link:"https://discord.gg/qbox"},docsRepositoryBase:"https://github.com/Qbox-project/qbox-project.github.io",footer:{text:"Qbox Project"},primaryHue:{dark:200,light:200},head:function(){let{asPath:e}=(0,t.useRouter)(),{frontMatter:n,title:r}=(0,o.ZR)(),i=n.description||"Documentation for the Qbox Project";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/qbox-duck.ico"}),(0,s.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,s.jsx)("meta",{name:"description",content:i}),(0,s.jsx)("meta",{name:"og:title",content:r}),(0,s.jsx)("meta",{name:"og:description",content:i}),(0,s.jsx)("meta",{name:"og:url",content:"https://qbox-project.github.io".concat(e)})]})},useNextSeoProps:function(){let{asPath:e}=(0,t.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),r="#"!==n[1][0]&&n[1]||"Qbox",s=n[n.length-1],o=/[a-z]/.test(s)&&/[A-Z]/.test(s)?s:"%s";return{titleTemplate:"".concat(o," - ").concat(s===r?"Documentation":r.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};n.Z=i},3811:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return c}});var s=r(1527),o=r(3630),t=r(6125),i=r(967);r(4552);var a=r(6119),l=r(8891);let c=[{depth:2,value:"Non-Networked Events",id:"non-networked-events"},{depth:3,value:"QBCore:Client:OnPlayerLoaded",id:"qbcoreclientonplayerloaded"},{depth:2,value:"Networked Events",id:"networked-events"},{depth:3,value:"QBCore:Client:SetDuty",id:"qbcoreclientsetduty"},{depth:3,value:"QBCore:Client:OnPermissionUpdate",id:"qbcoreclientonpermissionupdate"},{depth:3,value:"qbx_core:client:playerLoggedOut",id:"qbx_coreclientplayerloggedout"},{depth:3,value:"QBCore:Client:OnJobUpdate",id:"qbcoreclientonjobupdate"},{depth:3,value:"QBCore:Client:OnGangUpdate",id:"qbcoreclientongangupdate"},{depth:3,value:"QBCore:Client:OnMoneyChange",id:"qbcoreclientonmoneychange"}];function d(e){let n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Client"}),"\n",(0,s.jsx)(l.UW,{type:"warning",children:(0,s.jsxs)(n.p,{children:["These events ",(0,s.jsx)(n.strong,{children:"MUST NOT"})," be triggered by any other scripts."]})}),"\n",(0,s.jsx)(n.h2,{id:"non-networked-events",children:"Non-Networked Events"}),"\n",(0,s.jsx)(n.h3,{id:"qbcoreclientonplayerloaded",children:"QBCore:Client:OnPlayerLoaded"}),"\n",(0,s.jsx)(n.p,{children:"Player finishes spawning"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Client:OnPlayerLoaded'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsx)(n.h2,{id:"networked-events",children:"Networked Events"}),"\n",(0,s.jsx)(n.h3,{id:"qbcoreclientsetduty",children:"QBCore:Client:SetDuty"}),"\n",(0,s.jsx)(n.p,{children:"Player's duty changes"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" boolean "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"onDuty"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Client:SetDuty'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"onDuty"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,s.jsx)(n.h3,{id:"qbcoreclientonpermissionupdate",children:"QBCore:Client:OnPermissionUpdate"}),"\n",(0,s.jsx)(n.p,{children:"Player's permissions are updated. Only works for permissions set by qbx"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Client:OnPermissionUpdate'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsx)(n.h3,{id:"qbx_coreclientplayerloggedout",children:"qbx_core:client:playerLoggedOut"}),"\n",(0,s.jsx)(n.p,{children:"Player logs out and no longer exists in core memory"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qbx_core:client:playerLoggedOut'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsx)(n.h3,{id:"qbcoreclientonjobupdate",children:"QBCore:Client:OnJobUpdate"}),"\n",(0,s.jsx)(n.p,{children:"Player's job is changed"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" job "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Job"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Client:OnJobUpdate'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"job"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,s.jsx)(n.h3,{id:"qbcoreclientongangupdate",children:"QBCore:Client:OnGangUpdate"}),"\n",(0,s.jsx)(n.p,{children:"Player's gang is changed"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" gang "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Gang"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Client:OnGangUpdate'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"gang"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,s.jsx)(n.h3,{id:"qbcoreclientonmoneychange",children:"QBCore:Client:OnMoneyChange"}),"\n",(0,s.jsx)(n.p,{children:"Player's cash/bank balance is updated"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" moneyType "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cash' "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bank' "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'crypto'"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" amount "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" operation "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'add' "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'remove' "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"| "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'set'"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"---"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" reason "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'QBCore:Client:OnMoneyChange'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"moneytype"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"amount"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"operation"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"reason"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/resources/core/events/client.mdx",route:"/resources/core/events/client",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",resources:"Resources",converting:"Converting from QB",contributors:"Contributing",developers:"Developer's Guide",release:"Release Readiness",faq:"FAQ"}},{kind:"MdxPage",name:"contributors",route:"/contributors"},{kind:"MdxPage",name:"converting",route:"/converting"},{kind:"MdxPage",name:"developers",route:"/developers"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"MdxPage",name:"release",route:"/release"},{kind:"Folder",name:"resources",route:"/resources",children:[{kind:"Meta",data:{core:"Core"}},{kind:"Folder",name:"core",route:"/resources/core",children:[{kind:"Meta",data:{functions:"Functions",events:"Events",import:"Import",player:"Player"}},{kind:"Folder",name:"events",route:"/resources/core/events",children:[{kind:"Meta",data:{client:"Client",server:"Server"}},{kind:"MdxPage",name:"client",route:"/resources/core/events/client"},{kind:"MdxPage",name:"server",route:"/resources/core/events/server"}]},{kind:"Folder",name:"functions",route:"/resources/core/functions",children:[{kind:"Meta",data:{client:"Client",server:"Server",shared:"Shared"}},{kind:"MdxPage",name:"client",route:"/resources/core/functions/client"},{kind:"MdxPage",name:"server",route:"/resources/core/functions/server"},{kind:"MdxPage",name:"shared",route:"/resources/core/functions/shared"}]},{kind:"MdxPage",name:"import",route:"/resources/core/import"},{kind:"MdxPage",name:"player",route:"/resources/core/player"}]},{kind:"MdxPage",name:"core",route:"/resources/core"},{kind:"Folder",name:"qbx_diving",route:"/resources/qbx_diving",children:[{kind:"Folder",name:"Events",route:"/resources/qbx_diving/Events",children:[{kind:"MdxPage",name:"server",route:"/resources/qbx_diving/Events/server"},{kind:"Meta",data:{server:"Server"}}]}]}]},{kind:"MdxPage",name:"resources",route:"/resources"}],flexsearch:{codeblocks:!0},title:"Client",headings:c},pageNextRoute:"/resources/core/events/client",nextraLayout:t.ZP,themeConfig:i.Z};n.default=(0,o.j)(h)}},function(e){e.O(0,[791,774,888,179],function(){return e(e.s=1043)}),_N_E=e.O()}]);