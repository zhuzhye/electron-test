import{_ as w}from"./_plugin-vue_export-helper-CtXoblKC.js";import{_ as y}from"./logo-C4A_ETkD.js";import{h}from"./index-BVlh-Z3s.js";import{u as k,i as d,q as T,l as I,d as v,a7 as S,a8 as p,a9 as x,a0 as L,c as _,f as D,w as E,k as m,o as f,e as t,A as M,B as b,g as R,aa as $}from"./index-8OAU0V6z.js";const q="/assets/ytx-DgKbqHLE.png",B=e=>h.request({url:"/dingDingLogin",method:"GET",params:e},{successMessageText:"登录成功",errorMessageText:"登录失败"}),C=()=>h.request({url:"/userInfo",method:"GET"},{errorMessageText:"获取用户信息失败"}),N=(e,o)=>{const s=k();let n=d(!1);return T(()=>{window.DTFrameLogin({id:"login_container",width:300,height:300},{redirect_uri:encodeURIComponent(e.value),client_id:o.value,scope:"openid",response_type:"code",state:"STATE",prompt:"consent"},async i=>{n.value=!0;const{authCode:l,callback:a}=i;console.log(a,"callback");const u=I(),r=await B({authCode:l});r.code===200&&r.data.token?(sessionStorage.setItem("token",r.data.token),u.setToken(r.data.token),s.push("/monitor/tsServices"),window.removeEventListener("message",a)):(s.push("/login"),window.location.reload());const g=await C();g.data&&u.setUserInfo(g.data),n.value=!1},i=>{console.log(`Login Error: ${i}`)})}),{spinning:n}},U=v({name:"Motion",props:{delay:{type:Number,default:50}},render(){const{delay:e}=this,o=S("motion");if(!o)return console.error("v-motion directive is not defined. Make sure it is registered correctly."),p("div",{},this.$slots.default?this.$slots.default():[]);const s=this.$slots.default?this.$slots.default():[];return x(p("div",{},{default:()=>s}),[[o,{initial:{opacity:0,y:150},enter:{opacity:1,y:0,transition:{delay:e}}}]])}}),c=e=>(M("data-v-9d957d67"),e=e(),b(),e),V={class:"login-body"},A=c(()=>t("div",{class:"login-header"},[t("img",{src:y,alt:""}),R(" 服务监控平台 ")],-1)),G={class:"QRdingding"},F=c(()=>t("div",{class:"dingText"},[t("img",{class:"ytxImg",src:q,alt:""}),t("span",null,"使用钉钉扫码")],-1)),H=c(()=>t("div",{id:"login_container"},null,-1)),K=[H],Q=v({__name:"index",setup(e){const o=d("dingnxsxidanep0b3uwx"),s=d(window.location.origin+"/#/login");let n=d(!1);return L(async()=>{let{spinning:i}=N(s,o);n.value=i.value}),(i,l)=>{const a=$;return f(),_("div",V,[A,D(m(U),{delay:150},{default:E(()=>[t("div",G,[F,x((f(),_("div",null,K)),[[a,m(n)]])])]),_:1})])}}}),P=w(Q,[["__scopeId","data-v-9d957d67"]]);export{P as default};