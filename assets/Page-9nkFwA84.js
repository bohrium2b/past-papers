const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Render-DmLzL5jt.js","assets/index-CxkYhlkB.js","assets/PageRouter-DVocmFZ6.js","assets/App-Xxpp2_jI.js","assets/PageRouter-DJw1hYb5.css","assets/Render-BmvggOba.css"])))=>i.map(i=>d[i]);
import{k as m,l as g,r as l,j as i,c as R,R as v,_ as y}from"./index-CxkYhlkB.js";import{s as w}from"./utils-CGT_jLes.js";import{g as _,a as S,s as $,m as j,u as P,c as A}from"./App-Xxpp2_jI.js";function U(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function E(t){return parseFloat(t)}function M(t){return _("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const N=t=>{const{classes:a,variant:e,animation:n,hasChildren:s,width:o,height:r}=t;return A({root:["root",e,n,s&&"withChildren",s&&!o&&"fitContent",s&&!r&&"heightAuto"]},M,a)},d=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,c=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,T=typeof d!="string"?g`
        animation: ${d} 2s ease-in-out 0.5s infinite;
      `:null,V=typeof c!="string"?g`
        &::after {
          animation: ${c} 2s linear 0.5s infinite;
        }
      `:null,X=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(j(({theme:t})=>{const a=U(t.shape.borderRadius)||"px",e=E(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${a}/${Math.round(e/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:T||{animation:`${d} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:V||{"&::after":{animation:`${c} 2s linear 0.5s infinite`}}}]}})),f=l.forwardRef(function(a,e){const n=P({props:a,name:"MuiSkeleton"}),{animation:s="pulse",className:o,component:r="span",height:h,style:b,variant:k="text",width:x,...u}=n,p={...n,animation:s,component:r,variant:k,hasChildren:!!u.children},C=N(p);return i.jsx(X,{as:r,ref:e,className:R(C.root,o),ownerState:p,...u,style:{width:x,height:h,...b}})}),D=v.lazy(()=>y(()=>import("./Render-DmLzL5jt.js"),__vite__mapDeps([0,1,2,3,4,5])).then(t=>({default:t.Renderer||t}))),I=v.lazy(()=>y(()=>import("./PageRouter-DVocmFZ6.js").then(t=>t.k),__vite__mapDeps([2,1,3,4])).then(t=>({default:t.PageNavigator||t}))),B=t=>(console.log("Rendering Page component for "+t.filename),document.title=`${t.filename} | ${t.code} Reader`,w(t),i.jsxs(i.Fragment,{children:[i.jsx(l.Suspense,{fallback:i.jsx(f,{variant:"rectangular",width:"100%",height:50,sx:{borderRadius:5}}),children:i.jsx(I,{papers:t.papers,code:t.code,currentPaper:t})}),i.jsx(l.Suspense,{fallback:i.jsx(f,{variant:"rectangular",width:"100%",height:600}),children:i.jsx(D,{file:t.filename},t.filename)})]}));export{B as Page,B as default};
