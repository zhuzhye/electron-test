import{_ as X}from"./_plugin-vue_export-helper-CtXoblKC.js";import{T as $e}from"./index-CgGDAPGe.js";/* empty css                     */import{I as Ie,j as I,d as Z,s as W,i as F,J as j,c as H,f as l,w as o,k as t,K as B,L as re,o as b,e as N,g as _,F as Oe,a as Le,b as M,n as T,M as ee,N as me,O as fe,P as Fe,Q as ve,S as Ue,l as Ye,T as ke,U as Ve,V as Ce,W as Re,X as De,t as G,Y as xe,Z as Ae,_ as Be,$ as Ge,a0 as He,a1 as je,a2 as ae,a3 as Qe,p as ze,q as Je,A as Ke,B as We}from"./index-CBdA0cQS.js";import{h as $,C as se,t as qe}from"./index-7wIT0JMu.js";/* empty css                       */const le=Ie("tsServices",{state:()=>({commandModal:!1,historyModal:!1,historySplitModal:!1,addServerModal:!1,modifyConditionModal:!1,testFlowModal:!1}),actions:{}}),Xe=a=>I(()=>a===0?"添加服务器":a===1?"修改服务":a===2?"添加服务器":"修改服务器"),Ze=a=>(console.log(a,"type"),a===0?[{value:"web",label:"web"},{value:"pgsql",label:"pgsql"},{value:"mysql",label:"mysql"},{value:"redis",label:"redis"},{value:"nginx",label:"nginx"},{value:"fastfds",label:"fastfds"},{value:"mq",label:"mq"},{value:"tomcat",label:"tomcat"},{value:"其他类型",label:"其他类型"}]:[{value:"server",label:"server"},{value:"windows",label:"windows"}]);var ce=(a=>(a[a.AddLow=0]="AddLow",a[a.EditLow=1]="EditLow",a[a.AddNew=2]="AddNew",a[a.Edit=3]="Edit",a))(ce||{});const el=()=>$.request({url:"/service/getTree",method:"GET"},{isShowSuccessMessage:!1}),ll=a=>$.request({url:"/service/getCommond",method:"GET",params:a},{isShowSuccessMessage:!1}),tl=a=>$.request({url:"/service/arrangement",method:"POST",headers:{"Content-type":se.FORM_DATA},params:qe(a)},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),ol=a=>$.request({url:"/servicesStatus/selectLike",method:"GET",params:a},{isShowSuccessMessage:!1,isShowErrorMessage:!0}),al=a=>$.request({url:"/service",method:"POST",params:qe(a),headers:{"Content-type":se.FORM_DATA}},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),rl=a=>$.request({url:"/service/getServiceById",method:"GET",params:a},{isShowSuccessMessage:!0,isShowErrorMessage:!0,isReturnNativeResponse:!0}),sl=a=>$.request({url:"/service/delete",method:"GET",params:a},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),nl=a=>$.request({url:"/service/rebootService",method:"POST",headers:{"Content-type":se.FORM_DATA},params:a},{isShowErrorMessage:!0,isReturnNativeResponse:!0}),dl=a=>$.request({url:"/service/refresh",method:"GET",params:a},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),ul=a=>$.request({url:"/service/updateIsSchedule",method:"POST",headers:{"Content-type":se.FORM_DATA},params:a},{isReturnNativeResponse:!0}),il=a=>$.request({url:"/service/updateBindState",method:"GET",params:a},{isReturnNativeResponse:!0}),pl=a=>$.request({url:"/service/getServiceConditionsById",method:"GET",params:a},{isReturnNativeResponse:!0}),cl=a=>$.request({url:"/service/saveConditionsById",method:"POST",headers:{"Content-type":se.FORM_DATA},params:a},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),ml=a=>$.request({url:"/service/testNetStatus",method:"POST",headers:{"Content-type":se.FORM_DATA},params:a},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),fl=a=>$.request({url:"/service/testFlow",method:"GET",params:a},{isShowSuccessMessage:!0,isShowErrorMessage:!0}),vl=a=>$.request({url:"/service/lookLog",method:"GET",params:a},{isReturnNativeResponse:!0}),gl={class:"addserver-dialog"},_l={class:"dialog-footer"},wl=Z({__name:"index",props:{currentRow:{type:Object,delfalut:()=>{}},addType:{type:Number,default:0}},emits:["getTableData"],setup(a,{expose:S,emit:p}){let{addServerModal:c}=W(le());const d=F(),e=a;let f=I(()=>Xe(e.addType)),y=I(()=>Ze(e.addType));const D=p,k=j({name:[{required:!0,message:"该选项必填",trigger:"blur"}],serverAddress:[{required:!0,message:"该选项必填",trigger:"blur"}],databaseName:[{required:!0,message:"数据库名称不能为空",trigger:"blur"}],scriptPath:[{required:!0,message:"jar包路径不能为空",trigger:"blur"}],username:[{required:!0,message:"该选项必填",trigger:"blur"}],passward:[{required:!0,message:"该选项必填",trigger:"blur"}]});let n=j({id:"",name:"",serviceType:"",scriptPath:"",oomPath:"",databaseName:"",serverAddress:"",username:"",passward:"",logsLocation:"",telePhone:"",heartPath:"",remark:"",cusCommand:"",pid:""});const g=async()=>{e.currentRow&&(e.addType===ce.AddLow?(n.pid=e.currentRow.id,n.id="",n._method=""):e.addType===ce.EditLow?(n.pid=e.currentRow.pid,n.id=e.currentRow.id,n._method="PUT"):e.addType===ce.Edit?(n._method="PUT",n.id=e.currentRow.id,n.pid=""):e.addType===ce.AddNew&&(n.id="",n.pid="")),d.value&&d.value.validate(async h=>{h&&(await al(n)).code===200&&(D("getTableData"),V())})},C=h=>{for(let i in n)n[i]=h[i]},V=()=>{console.log(y,"serverSelectList"),d.value&&(d.value.resetFields(),c.value=!1)};return S({setFormData:C}),(h,i)=>{const U=ee,m=me,v=fe,O=Ue,A=Fe,Y=ve,te=re;return b(),H("div",gl,[l(te,{modelValue:t(c),"onUpdate:modelValue":i[13]||(i[13]=w=>B(c)?c.value=w:c=w),title:t(f).value,width:"700",top:"10vh",draggable:"",onClose:V},{footer:o(()=>[N("div",_l,[l(U,{onClick:V},{default:o(()=>[_("取消")]),_:1}),l(U,{color:"#009688",onClick:g},{default:o(()=>[_(" 保存 ")]),_:1})])]),default:o(()=>[l(Y,{model:t(n),"label-width":"auto",class:"form-dialog",rules:k,ref_key:"formRef",ref:d},{default:o(()=>[l(v,{label:"服务名",prop:"name"},{default:o(()=>[l(m,{modelValue:t(n).name,"onUpdate:modelValue":i[0]||(i[0]=w=>t(n).name=w),placeholder:"请输入服务名",size:"large"},null,8,["modelValue"])]),_:1}),l(v,{label:"服务类型",prop:"serviceType"},{default:o(()=>[l(A,{modelValue:t(n).serviceType,"onUpdate:modelValue":i[1]||(i[1]=w=>t(n).serviceType=w),placeholder:"--请输入服务类型--",size:"large",style:{width:"200px"}},{default:o(()=>[(b(!0),H(Oe,null,Le(t(y),w=>(b(),M(O,{key:w.value,label:w.label,value:w.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(n).serviceType==="web"?(b(),M(v,{key:0,label:"jar路径",prop:"scriptPath"},{default:o(()=>[l(m,{modelValue:t(n).scriptPath,"onUpdate:modelValue":i[2]||(i[2]=w=>t(n).scriptPath=w),placeholder:"请输入路径",size:"large"},null,8,["modelValue"])]),_:1})):T("",!0),t(n).serviceType==="web"?(b(),M(v,{key:1,label:"内存溢出路径",prop:"oomPath"},{default:o(()=>[l(m,{modelValue:t(n).oomPath,"onUpdate:modelValue":i[3]||(i[3]=w=>t(n).oomPath=w),placeholder:"请输入内存溢出路径",size:"large"},null,8,["modelValue"])]),_:1})):T("",!0),t(n).serviceType==="mysql"?(b(),M(v,{key:2,label:"名称",prop:"databaseName"},{default:o(()=>[l(m,{modelValue:t(n).databaseName,"onUpdate:modelValue":i[4]||(i[4]=w=>t(n).databaseName=w),placeholder:"请输入数据库名称",size:"large"},null,8,["modelValue"])]),_:1})):T("",!0),l(v,{label:"地址及端口",prop:"serverAddress"},{default:o(()=>[l(m,{modelValue:t(n).serverAddress,"onUpdate:modelValue":i[5]||(i[5]=w=>t(n).serverAddress=w),placeholder:"形如188.188.1.1:22",size:"large"},null,8,["modelValue"])]),_:1}),l(v,{label:"账号",prop:"username"},{default:o(()=>[l(m,{modelValue:t(n).username,"onUpdate:modelValue":i[6]||(i[6]=w=>t(n).username=w),placeholder:"请输入账号",size:"large"},null,8,["modelValue"])]),_:1}),l(v,{label:"密码",prop:"passward"},{default:o(()=>[l(m,{modelValue:t(n).passward,"onUpdate:modelValue":i[7]||(i[7]=w=>t(n).passward=w),placeholder:"请输入密码",size:"large",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(n).serviceType==="web"?(b(),M(v,{key:3,label:"日志路径",prop:"logsLocation"},{default:o(()=>[l(m,{modelValue:t(n).logsLocation,"onUpdate:modelValue":i[8]||(i[8]=w=>t(n).logsLocation=w),placeholder:"形如 /usr/local/application/xxx/logs",size:"large"},null,8,["modelValue"])]),_:1})):T("",!0),t(n).serviceType==="web"?(b(),M(v,{key:4,label:"心跳存取路径",prop:"heartPath"},{default:o(()=>[l(m,{modelValue:t(n).heartPath,"onUpdate:modelValue":i[9]||(i[9]=w=>t(n).heartPath=w),placeholder:"形如 /usr/local/application/xxx/logs/xxx.log",size:"large"},null,8,["modelValue"])]),_:1})):T("",!0),l(v,{label:"联系电话",prop:"telePhone"},{default:o(()=>[l(m,{modelValue:t(n).telePhone,"onUpdate:modelValue":i[10]||(i[10]=w=>t(n).telePhone=w),placeholder:"请输入联系电话",size:"large"},null,8,["modelValue"])]),_:1}),l(v,{label:"服务备注",prop:"remark"},{default:o(()=>[l(m,{modelValue:t(n).remark,"onUpdate:modelValue":i[11]||(i[11]=w=>t(n).remark=w),placeholder:"请输入服务备注",size:"large"},null,8,["modelValue"])]),_:1}),t(n).serviceType==="其他类型"?(b(),M(v,{key:5,label:"自定义命令",prop:"cusCommand"},{default:o(()=>[l(m,{modelValue:t(n).cusCommand,"onUpdate:modelValue":i[12]||(i[12]=w=>t(n).cusCommand=w),placeholder:"请输入自定义命令",size:"large"},null,8,["modelValue"])]),_:1})):T("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}}),bl=X(wl,[["__scopeId","data-v-2ae69451"]]),yl={class:"addserver-dialog"},Sl={class:"dialog-footer"},hl=Z({__name:"index",setup(a,{expose:S}){const p=le(),{modifyConditionModal:c}=W(p);let d=F();const e=j({cpu:"",hard:"",memory:"",part:"",boxSurvival:"",logsSize:"",ipsFlow:"",connectNum:""}),f=j({cpu:[{required:!0,message:"该选项必填",trigger:"blur"}],hard:[{required:!0,message:"该选项必填",trigger:"blur"}],memory:[{required:!0,message:"该选项必填",trigger:"blur"}],part:[{required:!0,message:"该选项必填",trigger:"blur"}],boxSurvival:[{required:!0,message:"该选项必填",trigger:"blur"}],logsSize:[{required:!0,message:"该选项必填",trigger:"blur"}],ipsFlow:[{required:!0,message:"该选项必填",trigger:"blur"}],connectNum:[{required:!0,message:"该选项必填",trigger:"blur"}]}),y=async()=>{d.value&&d.value.validate(async n=>{n&&(await cl(e),c.value=!1,d.value&&d.value.resetFields())})},D=(n,g)=>{for(let C in n)e[C]=n[C];e.serviceId=g},k=()=>{c.value=!1,d.value&&d.value.resetFields()};return S({setFrom:D}),(n,g)=>{const C=ee,V=me,h=fe,i=ve,U=re;return b(),H("div",yl,[l(U,{onClose:k,modelValue:t(c),"onUpdate:modelValue":g[8]||(g[8]=m=>B(c)?c.value=m:null),title:"修改条件",width:"500",top:"10vh",draggable:""},{footer:o(()=>[N("div",Sl,[l(C,{onClick:k},{default:o(()=>[_("取消")]),_:1}),l(C,{color:"#009688",onClick:y},{default:o(()=>[_(" 保存 ")]),_:1})])]),default:o(()=>[l(i,{model:e,"label-width":"auto",class:"form-dialog",ref_key:"formRef",ref:d,rules:f},{default:o(()=>[l(h,{label:"CPU(%)",prop:"cpu"},{default:o(()=>[l(V,{modelValue:e.cpu,"onUpdate:modelValue":g[0]||(g[0]=m=>e.cpu=m),placeholder:"请输入CPU占用比",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"硬盘(G)",prop:"hard"},{default:o(()=>[l(V,{modelValue:e.hard,"onUpdate:modelValue":g[1]||(g[1]=m=>e.hard=m),placeholder:"请输入硬盘不足值(G)",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"内存(N)",prop:"memory"},{default:o(()=>[l(V,{modelValue:e.memory,"onUpdate:modelValue":g[2]||(g[2]=m=>e.memory=m),placeholder:"请输入内存不足值(M)",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"分盘(%)",prop:"part"},{default:o(()=>[l(V,{modelValue:e.part,"onUpdate:modelValue":g[3]||(g[3]=m=>e.part=m),placeholder:"请输入分盘超出值(%)",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"存活率(%)",prop:"boxSurvival"},{default:o(()=>[l(V,{modelValue:e.boxSurvival,"onUpdate:modelValue":g[4]||(g[4]=m=>e.boxSurvival=m),placeholder:"请输入盒子存活率(%)",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"日志(G)",prop:"logsSize"},{default:o(()=>[l(V,{modelValue:e.logsSize,"onUpdate:modelValue":g[5]||(g[5]=m=>e.logsSize=m),placeholder:"请输入日志超出值(G)",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"异常扣费(分次数)",prop:"ipsFlow"},{default:o(()=>[l(V,{modelValue:e.ipsFlow,"onUpdate:modelValue":g[6]||(g[6]=m=>e.ipsFlow=m),placeholder:"请输入(分钟,次数)",size:"large"},null,8,["modelValue"])]),_:1}),l(h,{label:"连接个数",prop:"connectNum"},{default:o(()=>[l(V,{modelValue:e.connectNum,"onUpdate:modelValue":g[7]||(g[7]=m=>e.connectNum=m),placeholder:"请输入超出连接数(个)",size:"large"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}}),Cl=X(hl,[["__scopeId","data-v-67482ccc"]]),kl={class:"addserver-dialog"},Vl={class:"dialog-footer"},Tl=Z({__name:"index",setup(a,{expose:S}){const p=le(),c=Ye(),d=W(c),{commandModal:e}=W(p),f=F();let y=j({id:"",offCommond:"",rebootCommond:"",turnCommond:""});const D=j({offCommond:[{required:!0,message:"该选项必填",trigger:"blur"}],rebootCommond:[{required:!0,message:"该选项必填",trigger:"blur"}],turnCommond:[{required:!0,message:"该选项必填",trigger:"blur"}]}),k=async()=>{f.value&&await f.value.validate(async g=>{g&&(y.user=d.userInfo.value.username,await tl(y),f.value&&f.value.resetFields(),e.value=!1)})};return S({getCommondInfo:async g=>{y.id=g;const C=await ll({id:g});C.data&&(y=Object.assign(y,C.data))}}),(g,C)=>{const V=ee,h=me,i=fe,U=ve,m=re;return b(),H("div",kl,[l(m,{modelValue:t(e),"onUpdate:modelValue":C[4]||(C[4]=v=>B(e)?e.value=v:null),title:"命令列表",width:"700",top:"10vh",draggable:""},{footer:o(()=>[N("div",Vl,[l(V,{onClick:C[0]||(C[0]=()=>{var v;e.value=!1,(v=f.value)==null||v.resetFields()})},{default:o(()=>[_("取消")]),_:1}),l(V,{color:"#009688",onClick:k},{default:o(()=>[_(" 保存 ")]),_:1})])]),default:o(()=>[l(U,{model:t(y),rules:D,ref_key:"formRef",ref:f,"label-width":"auto",class:"form-dialog"},{default:o(()=>[l(i,{label:"开启",prop:"offCommond"},{default:o(()=>[l(h,{modelValue:t(y).offCommond,"onUpdate:modelValue":C[1]||(C[1]=v=>t(y).offCommond=v),size:"large"},null,8,["modelValue"])]),_:1}),l(i,{label:"关闭",prop:"rebootCommond"},{default:o(()=>[l(h,{modelValue:t(y).rebootCommond,"onUpdate:modelValue":C[2]||(C[2]=v=>t(y).rebootCommond=v),size:"large"},null,8,["modelValue"])]),_:1}),l(i,{label:"重启",prop:"turnCommond"},{default:o(()=>[l(h,{modelValue:t(y).turnCommond,"onUpdate:modelValue":C[3]||(C[3]=v=>t(y).turnCommond=v),size:"large"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}}),Ml=X(Tl,[["__scopeId","data-v-58f3dd23"]]),xl={class:"addserver-dialog"},zl={class:"dialog-footer"},Rl=Z({__name:"SplitInformation",setup(a,{expose:S}){const p=le(),{historySplitModal:c}=W(p);let d=F();const e=y=>{d.value=y},f=()=>{d.value=[],c.value=!1};return S({setTableData:e}),(y,D)=>{const k=ee,n=ke,g=Ve,C=re;return b(),H("div",xl,[l(C,{modelValue:t(c),"onUpdate:modelValue":D[0]||(D[0]=V=>B(c)?c.value=V:null),title:"分盘详情",width:"100%",top:"11vh",onClose:f},{footer:o(()=>[N("div",zl,[l(k,{color:"#009688",onClick:f},{default:o(()=>[_(" 关闭 ")]),_:1})])]),default:o(()=>[l(g,{style:{width:"100%"},"row-key":"id","tree-props":{children:"children"},"default-sort":{prop:"sort",order:""},"default-expand-all":"",border:"",data:t(d)},{default:o(()=>[l(n,{label:"分盘大小",prop:"fileSystem"}),l(n,{label:"总容量",prop:"total"}),l(n,{label:"已使用容量",prop:"used"})]),_:1},8,["data"])]),_:1},8,["modelValue"])])}}}),Fl=X(Rl,[["__scopeId","data-v-44d0dc7d"]]),Ul=a=>a==="web"||a==="mq"||a==="redis"||a==="fastfds"||a==="nginx"||a==="mysql"?["cpuOccupancy","memoryOccupancy","hardOccupancy","netStatus","runTime","maxCpuPID","dateStr"]:[],Dl=()=>{const a=I(()=>function(e,f){return console.log(e.netStatus,f.serviceType,"rowDatarowData"),f.serviceType==="server"?f.isSchedule==="1"?String(e.netStatus)==="1"?{color:"red",label:"停止"}:String(e.netStatus)==="0"?String(e.avgTime)==="undefined"?{color:"#00FF00",label:"正常"}:{color:"#00FF00",label:"正常/"+e.avgTime+"ms"}:{color:"#0000FF",label:"未检测"}:{color:"#0000FF",label:""}:{color:"#0000FF",label:""}}),S=I(()=>function(e){return e==="1"?{color:"red",label:"停止"}:e==="0"?{color:"#00FF00",label:"正常"}:{color:"",label:""}}),p=I(()=>function(e){return e.split(",")[0]}),c=I(()=>function(e,f){return f&&f.serviceType==="web"?String(e.logsSize)==="undefined"?{color:"#00FF00",label:""}:{color:"#00FF00",label:e.logsSize}:{color:"#00FF00",label:""}}),d=I(()=>function(e){return e?Ce(e).format("YYYY-MM-DD HH:mm:ss"):""});return{transNetStatus:a,transRunStatus:S,transServerAddress:p,transLogsSize:c,transCreateTime:d}},ql={class:"addserver-dialog"},El={class:"dialog-footer"},Pl=Z({__name:"index",setup(a,{expose:S}){const p=le(),{historyModal:c,historySplitModal:d}=W(p);let e=j({page:1,limit:10,total:0}),f=j({page:I(()=>e.page),limit:I(()=>e.limit)}),y=F({}),D=F();const k=Ul(y.value.serviceType),{transNetStatus:n,transRunStatus:g,transServerAddress:C,transLogsSize:V,transCreateTime:h}=Dl(),i=q=>{e.limit=q,m()},U=q=>{e.page=q,m()},m=async()=>{let q={};for(let Q in f)Q!=="time"&&(q[Q]=f[Q]);f.time&&f.time.length>0&&(q.startTime=Ce(f.time[0]).format("YYYY-MM-DD HH:mm:ss"),q.endTime=Ce(f.time[1]).format("YYYY-MM-DD HH:mm:ss"));const x=await ol(q);D.value=x.data.list,e.total=x.data.count},v=q=>{f.id=q.id,y.value=q,m()},O=()=>{e.page=1,m()},A=F(),Y=()=>{e.page=1,console.log(A,"formRef"),A.value&&A.value.resetFields(),m()};let te=F();const w=q=>{var x;d.value=!0,(x=te.value)==null||x.setTableData(q)},ne=()=>{c.value=!1,A.value&&A.value.resetFields(),D.value=[]};return S({getHistoryRecordRow:v}),(q,x)=>{const Q=ee,de=Ue,Te=Fe,ue=fe,ge=Ae,_e=ve,E=ke,we=Be,Me=Ve,be=Ge,K=re;return b(),H("div",ql,[l(K,{modelValue:t(c),"onUpdate:modelValue":x[4]||(x[4]=L=>B(c)?c.value=L:null),title:"历史记录",width:"100%",top:"5vh",onClose:ne,draggable:""},{footer:o(()=>[N("div",El,[l(Q,{color:"#009688",onClick:ne},{default:o(()=>[_(" 关闭 ")]),_:1})])]),default:o(()=>[l(_e,{inline:!0,model:t(f),ref_key:"formRef",ref:A},{default:o(()=>[l(ue,{label:"运行状态",prop:"runStatus"},{default:o(()=>[l(Te,{modelValue:t(f).runStatus,"onUpdate:modelValue":x[0]||(x[0]=L=>t(f).runStatus=L),placeholder:"——运行状态——",style:{width:"200px"},clearable:""},{default:o(()=>[l(de,{key:"1",label:"停止",value:"1"}),l(de,{key:"0",label:"正常",value:"0"})]),_:1},8,["modelValue"])]),_:1}),l(ue,{label:"时间",prop:"time"},{default:o(()=>[l(ge,{clearable:"",type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"YYYY-MM-DD HH:mm:ss","date-format":"YYYY/MM/DD ddd","time-format":"A hh:mm:ss",modelValue:t(f).time,"onUpdate:modelValue":x[1]||(x[1]=L=>t(f).time=L)},null,8,["modelValue"])]),_:1}),l(ue,null,{default:o(()=>[l(Q,{type:"primary",onClick:O,icon:t(Re)},{default:o(()=>[_("查询")]),_:1},8,["icon"]),l(Q,{onClick:Y,icon:t(De)},{default:o(()=>[_("重置")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),l(Me,{style:{width:"100%"},"row-key":"id","tree-props":{children:"children"},"default-sort":{prop:"sort",order:""},"default-expand-all":"",border:"",data:t(D),"table-layout":"auto"},{default:o(()=>{var L,ye,Se,oe,ie,he,u;return[l(E,{type:"selection",width:"55"}),l(E,{type:"index",label:"",width:"50",index:1}),l(E,{prop:"serverAddress",label:"服务地址"},{default:o(s=>[_(G(t(C)(s.row.serverAddress)),1)]),_:1}),l(E,{prop:"runStatus",label:"运行状态"},{default:o(s=>[N("span",{style:xe(`color:${t(g)(s.row.runStatus).color}`)},G(t(g)(s.row.runStatus).label),5)]),_:1}),(L=t(k))!=null&&L.includes("cpuOccupancy")?T("",!0):(b(),M(E,{key:0,prop:"cpuOccupancy",label:"CPU占用率"})),(ye=t(k))!=null&&ye.includes("memoryOccupancy")?T("",!0):(b(),M(E,{key:1,prop:"memoryOccupancy",label:"内存占用率"})),(Se=t(k))!=null&&Se.includes("hardOccupancy")?T("",!0):(b(),M(E,{key:2,prop:"hardOccupancy",label:"硬盘占用"})),(oe=t(k))!=null&&oe.includes("netStatus")?T("",!0):(b(),M(E,{key:3,prop:"netStatus",label:"网络状态"},{default:o(s=>[N("span",{style:xe(`color:${t(n)(s.row,t(y)).color}`)},G(t(n)(s.row,t(y)).label),5)]),_:1})),t(y).serviceType==="web"?(b(),M(E,{key:4,prop:"logsSize",label:"日志大小"},{default:o(s=>[N("span",{style:xe(`color:${t(V)(s.row,t(y)).color}`)},G(t(V)(s.row,t(y)).label),5)]),_:1})):T("",!0),l(E,{prop:"createTime",label:"更新时间"},{default:o(s=>[_(G(t(h)(s.row.createTime)),1)]),_:1}),(ie=t(k))!=null&&ie.includes("runTime")?T("",!0):(b(),M(E,{key:5,prop:"runTime",label:"运行时间"})),(he=t(k))!=null&&he.includes("maxCpuPID")?T("",!0):(b(),M(E,{key:6,prop:"maxCpuPID",label:"CPU占用最高的PID"})),(u=t(k))!=null&&u.includes("dateStr")?T("",!0):(b(),M(E,{key:7,prop:"dateStr",label:"服务器和系统时间",width:"150"})),l(E,{prop:"cusContent",label:"自定义命令内容"}),l(E,{prop:"action",label:"操作"},{default:o(s=>[l(we,{color:"#FC764B",style:{color:"#fff"},onClick:z=>w(s.row.disks)},{default:o(()=>[_(" 分盘详细信息 ")]),_:2},1032,["onClick"])]),_:1})]}),_:1},8,["data"]),l(be,{class:"bt-page","current-page":t(e).page,"onUpdate:currentPage":x[2]||(x[2]=L=>t(e).page=L),"page-size":t(e).limit,"onUpdate:pageSize":x[3]||(x[3]=L=>t(e).limit=L),"page-sizes":[10,20,30,40],layout:" prev, pager, sizes,total, next, jumper",total:t(e).total,onSizeChange:i,onCurrentChange:U},null,8,["current-page","page-size","total"])]),_:1},8,["modelValue"]),l(Fl,{ref_key:"SplitInformationRef",ref:te},null,512)])}}}),Nl=X(Pl,[["__scopeId","data-v-93dd232d"]]),$l={class:"addserver-dialog"},Il={class:"dialog-footer"},Ol={class:"search-box"},Ll=Z({__name:"index",emits:["testFlow"],setup(a,{expose:S,emit:p}){let d=F([]);const e=le(),{testFlowModal:f}=W(e),y=p;let D=F(""),k=F("");const n=(h,i)=>{D.value=i,d.value=[],d.value=Object.assign(d.value,h)},g=()=>{f.value=!1,D.value="",d.value=[]},C=()=>{let h=Number(k.value);h&&h>0?y("testFlow",D.value,h):y("testFlow",D.value)},V=I(()=>function(h){return h==="PM"?"下午":"上午"});return S({setTableData:n}),(h,i)=>{const U=ee,m=me,v=ke,O=Ve,A=re;return b(),H("div",$l,[l(A,{modelValue:t(f),"onUpdate:modelValue":i[1]||(i[1]=Y=>B(f)?f.value=Y:null),title:"测试流量",width:"100%",top:"5vh",draggable:"",onClose:g},{footer:o(()=>[N("div",Il,[l(U,{color:"#009688",onClick:g},{default:o(()=>[_(" 关闭 ")]),_:1})])]),default:o(()=>[N("div",Ol,[l(m,{modelValue:t(k),"onUpdate:modelValue":i[0]||(i[0]=Y=>B(k)?k.value=Y:k=Y),class:"search-input",placeholder:"流量条数",size:"large"},null,8,["modelValue"]),l(U,{type:"primary",size:"large",icon:t(Re),onClick:C},{default:o(()=>[_("查询")]),_:1},8,["icon"])]),l(O,{data:t(d),border:"","table-layout":"auto",style:{width:"100%"}},{default:o(()=>[l(v,{prop:"b",label:""},{default:o(Y=>[_(G(V.value(Y.row.b)),1)]),_:1}),l(v,{prop:"a",label:"时间"}),l(v,{prop:"c",label:"网卡"}),l(v,{prop:"d",label:"接收的数据包"}),l(v,{prop:"e",label:"发送的数据包"}),l(v,{prop:"f",label:"接收的字节数"}),l(v,{prop:"g",label:"发送的字节数"}),l(v,{prop:"h",label:"接收的压缩数据包"}),l(v,{prop:"i",label:"发送的压缩数据包"}),l(v,{prop:"j",label:"接收的多播数据包"})]),_:1},8,["data"])]),_:1},8,["modelValue"])])}}}),Yl=X(Ll,[["__scopeId","data-v-d0d3245b"]]);function Al(a){const S={},p=[];return a.forEach(c=>{S[c.id]={...c}}),console.log(S,"map"),a.forEach(c=>{if(c.pid==="-1"||!c.pid||c.pid==="undefined")p.push(S[c.id]);else{let d=S[c.pid];d&&d.children?d.children.push(S[c.id]):d&&!d.children&&(S[c.pid].children=[S[c.id]])}}),p}const Ee=(a,S)=>a.filter(p=>p.children&&p.children.length>0?Ee(p.children,S).length>0:p.name.indexOf(S)>-1),Bl=()=>{const a=I(()=>function(d){return d==="0"?"正常":d==="1"?"停止":"未检测"}),S=I(()=>function(d){return d==="0"?"已绑定":"未绑定"}),p=I(()=>function(d){return String(d.serviceType)==="server"&&String(d.runStatus)==="0"?String(d.isSchedule)==="1"?String(d.netStatus)==="1"?{label:"停止",color:"red"}:String(d.netStatus)==="0"?String(d.avgTime)==="undefined"?{label:"正常",color:"green"}:{label:"正常/"+d.avgTime+"ms",color:"green"}:{label:"未检测",color:"blue"}:{label:"未开启",color:"blue"}:{label:"",color:""}}),c=I(()=>function(d){return Ce(d).format("YYYY-MM-DD HH:mm:ss")});return{transRunStatus:a,transNetStatus:p,transServerBind:S,transTime:c}},Gl=a=>(Ke("data-v-625e569e"),a=a(),We(),a),Hl={class:"action-box"},jl={key:0,class:"net-box"},Ql=Gl(()=>N("span",null,"服务名:",-1)),Jl={key:1,class:"net-box"},Kl=Z({__name:"index",setup(a){let S=F(),p=F(),c=j({});const d={showModal:!1,title:"",context:""};let e=j({...d});const f=le(),{commandModal:y,historyModal:D,addServerModal:k,modifyConditionModal:n,testFlowModal:g}=W(f),{transRunStatus:C,transNetStatus:V,transServerBind:h,transTime:i}=Bl(),U=async()=>{const u=await el();u.data.list&&(S.value=Al(u.data.list))};He(async()=>{U()});const m=()=>{if(S.value){const u=Ee(S.value,c.name);S.value=u}},v=()=>{c.name="",U()};let O=F();const A=u=>{k.value=!0,O.value=0,p.value=u};let Y=F();const te=async u=>{p.value=u,u.pid!=="-1"?O.value=1:O.value=3;const s=await rl({serviceId:u.id});k.value=!0,Je(()=>{var z;(z=Y.value)==null||z.setFormData(s.data)})},w=()=>{O.value=2,k.value=!0},ne=F(),q=async(u,s)=>{var pe;g.value=!0;const z=await fl({serviceId:u,page:1,limit:10,dataNumber:s});(pe=ne.value)==null||pe.setTableData(z.data.list,u)};let x=F("");const Q=async u=>{p.value=u,e.showModal=!0,e.width="800",e.top="10vh",e.title="查看日志",e.type=5,x.value="",e.loading=!0;const s=await vl({serviceId:u.id});s.data&&(x.value=s.data),e.loading=!1};let de=F();const Te=async u=>{var s;n.value=!0;try{const z=await pl({serviceId:u.id});console.log(z,"result"),(s=de.value)==null||s.setFrom(z.data,u.id)}catch{ae({message:"查询失败",type:"error"})}},ue=u=>{p.value=u,e.showModal=!0,e.context="是否刷新服务器状态",e.title="信息",e.type=1},ge=async(u,s)=>{p.value=u,e.showModal=!0,e.context=s===0?"是否绑定?":"是否解除绑定?",e.title="信息",e.type=3,e.attrs={postType:s}};let _e=F();const E=u=>{var s;y.value=!0,(s=_e.value)==null||s.getCommondInfo(u)};let we=F();const Me=u=>{var s;D.value=!0,(s=we.value)==null||s.getHistoryRecordRow(u)},be=(u,s)=>{p.value=u,e.showModal=!0,e.context=s===1?"是否开启?":"是否关闭?",e.title="信息",e.type=2,e.attrs={postType:s}};let K=F("www.baidu.com");const L=u=>{p.value=u,e.showModal=!0,e.title="测试地址",e.width="350",e.type=4,K.value="www.baidu.com"},ye=u=>{p.value=u,e.showModal=!0,e.context="确定删除吗？",e.title="信息",e.type=0},Se=async()=>{p.value&&(await sl({id:p.value.id}),U(),e.showModal=!1)},oe=async(u,s)=>{const z=await nl({id:u.id,type:s});ae({message:z.data.data,type:"success"})},ie=()=>{for(let u in e)u in d?e[u]=d[u]:delete e[u];console.log(e,"tipModalInit")},he=async(u,s)=>{if(u===0)Se();else if(u===1)p.value&&(await dl({serviceId:p.value.id}),e.showModal=!1,U());else if(u===2){if(p.value){try{const z=await ul({id:p.value.id,isSchedule:s.postType});ae({message:z.data.result.msg,type:z.data.result.code===200?"success":"error"})}catch{ae({message:"操作失败",type:"error"})}e.showModal=!1,U()}}else if(u===3){if(p.value){try{const z=await il({id:p.value.id,serverBind:s.postType});ae({message:z.data.result.msg,type:z.data.result.code===200?"success":"error"})}catch{ae({message:"操作失败",type:"error"})}e.showModal=!1,U()}}else u===4&&p.value&&(e.loading=!0,await ml({id:p.value.id,link:K.value}),e.loading=!1,e.showModal=!1,U())};return(u,s)=>{const z=me,pe=fe,R=ee,Pe=ve,J=ke,Ne=Ve;return b(),H("div",null,[l(Pe,{inline:!0,model:t(c),class:"demo-form-inline",ref:"formRef"},{default:o(()=>[l(pe,{label:"",prop:"value"},{default:o(()=>[l(z,{modelValue:t(c).name,"onUpdate:modelValue":s[0]||(s[0]=r=>t(c).name=r),style:{width:"180px"},placeholder:"请输入关键字",size:"large",clearable:""},null,8,["modelValue"])]),_:1}),l(pe,null,{default:o(()=>[l(R,{type:"primary",size:"large",icon:t(Re),onClick:m},{default:o(()=>[_("查询")]),_:1},8,["icon"]),l(R,{type:"primary",size:"large",icon:t(Qe),onClick:w},{default:o(()=>[_("添加")]),_:1},8,["icon"]),l(R,{size:"large",icon:t(De),onClick:v},{default:o(()=>[_("重置")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),l(Ne,{data:t(S),style:{width:"100%"},"row-key":"id","tree-props":{children:"children"},"default-sort":{prop:"sort",order:""},"default-expand-all":"",class:"table-container","table-layout":"auto",border:""},{default:o(()=>[l(J,{prop:"sort",label:"排序","show-overflow-tooltip":"",sortable:""}),l(J,{prop:"name",label:"服务器名",width:"180"}),l(J,{label:"运行状态",prop:"runStatus","show-overflow-tooltip":""},{default:o(r=>[N("span",{class:ze({"color-green":r.row.runStatus==="0","color-orange":r.row.runStatus==="1"})},G(t(C)(r.row.runStatus)),3)]),_:1}),l(J,{prop:"serviceType",label:"服务类型","show-overflow-tooltip":""}),l(J,{prop:"remark",label:"服务备注","show-overflow-tooltip":""}),l(J,{prop:"serverBind",label:"绑定状态","show-overflow-tooltip":""},{default:o(r=>[N("span",{class:ze({"color-green":r.row.serverBind==="0","color-orange":r.row.serverBind==="1"})},G(t(h)(r.row.serverBind)),3)]),_:1}),l(J,{prop:"netStatus",label:"网络状态","show-overflow-tooltip":""},{default:o(r=>[N("span",{class:ze({"color-green":t(V)(r.row).color==="green","color-red":t(V)(r.row).color==="red","color-bule":t(V)(r.row).color==="blue"})},G(t(V)(r.row).label),3)]),_:1}),l(J,{prop:"newTime",label:"最新时间"},{default:o(r=>[N("span",null,G(t(i)(r.row.newTime)),1)]),_:1}),l(J,{prop:"address",label:"操作",width:"450"},{default:o(r=>[N("div",Hl,[r.row.pid==="-1"?(b(),M(R,{key:0,size:"small",type:"success",onClick:P=>A(r.row)},{default:o(()=>[_(" 下级 ")]),_:2},1032,["onClick"])):T("",!0),r.row.pid==="-1"?(b(),M(R,{key:1,size:"small",onClick:P=>q(r.row.id)},{default:o(()=>[_(" 测试流量 ")]),_:2},1032,["onClick"])):T("",!0),r.row.serviceType==="web"?(b(),M(R,{key:2,size:"small",onClick:P=>Q(r.row)},{default:o(()=>[_(" 查看日志 ")]),_:2},1032,["onClick"])):T("",!0),l(R,{size:"small",onClick:P=>te(r.row)},{default:o(()=>[_(" 修改 ")]),_:2},1032,["onClick"]),l(R,{size:"small",onClick:P=>Te(r.row)},{default:o(()=>[_(" 修改条件 ")]),_:2},1032,["onClick"]),l(R,{size:"small",onClick:P=>ue(r.row)},{default:o(()=>[_(" 刷新 ")]),_:2},1032,["onClick"]),r.row.serverBind==="1"?(b(),M(R,{key:3,size:"small",type:"primary",onClick:P=>ge(r.row,0)},{default:o(()=>[_(" 绑定 ")]),_:2},1032,["onClick"])):T("",!0),r.row.serverBind!=="1"?(b(),M(R,{key:4,size:"small",type:"warning",onClick:P=>ge(r.row,1)},{default:o(()=>[_(" 解绑 ")]),_:2},1032,["onClick"])):T("",!0),l(R,{size:"small",onClick:P=>Me(r.row)},{default:o(()=>[_(" 历史记录 ")]),_:2},1032,["onClick"]),r.row.isSchedule==="0"?(b(),M(R,{key:5,size:"small",type:"primary",onClick:P=>be(r.row,1)},{default:o(()=>[_(" 开启 ")]),_:2},1032,["onClick"])):T("",!0),r.row.isSchedule!=="0"?(b(),M(R,{key:6,size:"small",type:"primary",onClick:P=>be(r.row,0)},{default:o(()=>[_(" 关闭 ")]),_:2},1032,["onClick"])):T("",!0),r.row.serviceType==="server"&&r.row.isSchedule==="1"?(b(),M(R,{key:7,size:"small",type:"primary",onClick:P=>L(r.row)},{default:o(()=>[_(" 测试网络 ")]),_:2},1032,["onClick"])):T("",!0),l(R,{size:"small",type:"danger",onClick:P=>ye(r.row)},{default:o(()=>[_(" 删除 ")]),_:2},1032,["onClick"]),l(R,{size:"small",type:"success",onClick:P=>E(r.row.id)},{default:o(()=>[_(" 命令 ")]),_:2},1032,["onClick"]),l(R,{size:"small",type:"primary",onClick:P=>oe(r.row,1)},{default:o(()=>[_(" 开启服务 ")]),_:2},1032,["onClick"]),l(R,{size:"small",type:"primary",onClick:P=>oe(r.row,2)},{default:o(()=>[_(" 关闭服务 ")]),_:2},1032,["onClick"]),l(R,{size:"small",type:"primary",onClick:P=>oe(r.row,3)},{default:o(()=>[_(" 重启服务 ")]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"]),t(k)?(b(),M(bl,{key:0,currentRow:t(p),"onUpdate:currentRow":s[1]||(s[1]=r=>B(p)?p.value=r:p=r),addType:t(O),"onUpdate:addType":s[2]||(s[2]=r=>B(O)?O.value=r:O=r),onGetTableData:U,ref_key:"addServerRef",ref:Y},null,8,["currentRow","addType"])):T("",!0),l(Cl,{ref_key:"modifyConditionRef",ref:de},null,512),l(Ml,{ref_key:"commandRef",ref:_e},null,512),l(Nl,{ref_key:"historyRecordRef",ref:we},null,512),t(e).showModal?(b(),M($e,{key:1,showModal:t(e).showModal,"onUpdate:showModal":s[5]||(s[5]=r=>t(e).showModal=r),title:t(e).title,"onUpdate:title":s[6]||(s[6]=r=>t(e).title=r),context:t(e).context,"onUpdate:context":s[7]||(s[7]=r=>t(e).context=r),type:t(e).type,"onUpdate:type":s[8]||(s[8]=r=>t(e).type=r),attrs:t(e).attrs,"onUpdate:attrs":s[9]||(s[9]=r=>t(e).attrs=r),width:t(e).width,"onUpdate:width":s[10]||(s[10]=r=>t(e).width=r),loading:t(e).loading,"onUpdate:loading":s[11]||(s[11]=r=>t(e).loading=r),top:t(e).top,"onUpdate:top":s[12]||(s[12]=r=>t(e).top=r),onCancelModal:ie,onSureModal:he},je({default:o(()=>[t(e).type===4?(b(),H("div",jl,[Ql,l(z,{modelValue:t(K),"onUpdate:modelValue":s[3]||(s[3]=r=>B(K)?K.value=r:K=r),style:{width:"100%"},placeholder:"请输入服务名",size:"large"},null,8,["modelValue"])])):T("",!0),t(e).type===5?(b(),H("div",Jl,[l(z,{modelValue:t(x),"onUpdate:modelValue":s[4]||(s[4]=r=>B(x)?x.value=r:x=r),style:{width:"100%"},rows:20,type:"textarea",placeholder:" "},null,8,["modelValue"])])):T("",!0)]),_:2},[t(e).type===5?{name:"footerBtn",fn:o(()=>[l(R,{type:"primary",onClick:ie,loading:t(e).loading},{default:o(()=>[_(" 关闭")]),_:1},8,["loading"])]),key:"0"}:void 0]),1032,["showModal","title","context","type","attrs","width","loading","top"])):T("",!0),l(Yl,{ref_key:"testFlowRef",ref:ne,onTestFlow:q},null,512)])}}}),ot=X(Kl,[["__scopeId","data-v-625e569e"]]);export{ot as default};
