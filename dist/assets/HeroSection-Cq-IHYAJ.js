import{r as e,j as t,b as i,C as n,V as a,H as r,T as s,B as o,z as l,F as d,J as x}from"./chakra-DeYGNAPY.js";import"./vendor-DPo8IFD3.js";const c=l`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(0, -20px, 0) rotate(5deg); }
  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
`,p=l`
  0% { transform: scale3d(1, 1, 1) rotate(0deg); }
  50% { transform: scale3d(1.05, 1.05, 1) rotate(3deg); }
  100% { transform: scale3d(1, 1, 1) rotate(0deg); }
`,h=l`
  0% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% { 
    transform: translate(-30px, 20px) scale(1.08); 
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% { 
    transform: translate(15px, -25px) scale(0.95); 
    border-radius: 50% 60% 30% 70% / 30% 40% 60% 50%;
  }
  75% { 
    transform: translate(-10px, 30px) scale(1.03); 
    border-radius: 70% 30% 60% 40% / 40% 70% 50% 30%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`,g=l`
  0% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
  30% { 
    transform: translate(25px, -15px) scale(0.92); 
    border-radius: 60% 40% 30% 70% / 70% 30% 40% 60%;
  }
  60% { 
    transform: translate(-20px, 35px) scale(1.12); 
    border-radius: 30% 70% 40% 60% / 50% 40% 70% 30%;
  }
  85% { 
    transform: translate(40px, -10px) scale(0.98); 
    border-radius: 70% 30% 60% 40% / 30% 60% 50% 40%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
`,b=l`
  0% { 
    transform: translateX(-50%) translate(0px, 0px) scale(1); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
  20% { 
    transform: translateX(-50%) translate(-35px, 25px) scale(1.06); 
    border-radius: 60% 40% 70% 30% / 60% 40% 30% 70%;
  }
  45% { 
    transform: translateX(-50%) translate(20px, -30px) scale(0.89); 
    border-radius: 40% 70% 30% 60% / 40% 60% 70% 30%;
  }
  70% { 
    transform: translateX(-50%) translate(-15px, 40px) scale(1.15); 
    border-radius: 70% 30% 60% 40% / 50% 30% 40% 70%;
  }
  100% { 
    transform: translateX(-50%) translate(0px, 0px) scale(1); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
`,u=["Confident","Uncertain","Friendly","Passionate","Neutral"],m={Confident:"#38A169",Uncertain:"#E53E3E",Friendly:"#4299E1",Passionate:"#9F7AEA",Neutral:"#4A5568"},f=["What's your greatest strength?","Tell me about a challenging project you led.","How do you handle conflict in a team?","Describe a time you failed and what you learned."],j=["Ask for specific examples with metrics","Probe deeper into their decision-making process","Clarify their role vs team contributions","Request concrete outcomes and learnings"],y=e.memo((()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{position:"absolute",top:"5%",left:"5%",width:"650px",height:"650px",borderRadius:"full",background:"radial-gradient(circle, rgba(223,246,255,0.2) 0%, rgba(16,118,209,0.1) 100%)",filter:"blur(40px)",animation:`${c} 8s ease-in-out infinite`,zIndex:0}),t.jsx(i,{position:"absolute",bottom:"15%",right:"10%",width:"300px",height:"300px",borderRadius:"full",background:"radial-gradient(circle, rgba(30,42,120,0.15) 0%, rgba(95,157,247,0.1) 100%)",filter:"blur(30px)",animation:`${p} 10s ease-in-out infinite`,zIndex:0})]})));y.displayName="BackgroundDecorations";const w=e.memo((()=>t.jsxs(i,{width:"100%",height:"100%",position:"relative",bg:"#ff5c57",borderRadius:"24px",overflow:"hidden",children:[t.jsx(i,{position:"absolute",top:"10%",left:"-5%",width:"1000px",height:"1050px",backgroundImage:"url('/clarivue-blob-1.png')",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:.8,zIndex:10,sx:{animation:`${h} 14s cubic-bezier(0.4, 0.0, 0.6, 1) infinite`}}),t.jsx(i,{position:"absolute",top:"15%",right:"-3%",width:"950px",height:"950px",backgroundImage:"url('/clarivue-blob-22.png')",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:.8,zIndex:11,sx:{animation:`${g} 18s cubic-bezier(0.25, 0.1, 0.75, 0.9) infinite`,animationDelay:"3s"}}),t.jsx(i,{position:"absolute",bottom:"17%",left:"50%",width:"650px",height:"650px",backgroundImage:"url('/clarivue-blob-3.png')",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:.8,zIndex:12,sx:{animation:`${b} 22s cubic-bezier(0.3, 0.0, 0.7, 1) infinite`,animationDelay:"7s"}})]})));w.displayName="GradientBackgroundComponent";const v=e.memo((()=>{const[n,a]=e.useState(0),[r,o]=e.useState("questions"),[l,c]=e.useState(0),[p,h]=e.useState(0),[g,b]=e.useState(""),[y,w]=e.useState(!1),v=["I think my greatest strength is my ability to adapt to new challenges and learn quickly from each experience.","When I led that project, I had to coordinate with multiple teams while managing tight deadlines and changing requirements.","I believe in open communication when there's conflict, so I try to understand everyone's perspective first.","That failure taught me the importance of thorough planning and having backup strategies in place."];e.useEffect((()=>{const e=v[l];let t=0;b(""),w(!0);const i=setInterval((()=>{t<e.length?(b(e.slice(0,t+1)),t++):(w(!1),clearInterval(i))}),80);return()=>clearInterval(i)}),[l]),e.useEffect((()=>{const e=setInterval((()=>{a((e=>(e+1)%u.length))}),8e3),t=setInterval((()=>{const e="questions"===r?"cues":"questions";o(e),"questions"===e?c((e=>(e+1)%f.length)):h((e=>(e+1)%j.length))}),1e4);return()=>{clearInterval(e),clearInterval(t)}}),[r]);const I=()=>[65,45,80,90,55][n];return t.jsxs(i,{width:"100%",height:"auto",background:"#FFFEFC",borderRadius:"20px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)",p:"1.9rem",fontFamily:"body",color:"#2c3e50",children:[t.jsxs(i,{display:"flex",alignItems:"flex-start",justifyContent:"space-between",mb:7,children:[t.jsxs(i,{display:"flex",alignItems:"center",gap:3,children:[t.jsx(i,{width:"52px",height:"52px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",children:t.jsx("img",{src:"/brandassets/icon-trans-real-new.png",alt:"Clarivue",style:{width:"60px",height:"60px",objectFit:"contain"}})}),t.jsxs(i,{children:[t.jsx(s,{fontSize:"20px",fontWeight:"700",color:"#1e1e1e",children:"Clarivue"}),t.jsx(s,{fontSize:"14px",color:"#6B7280",fontWeight:"500",children:"Interview Assistant"})]})]}),t.jsxs(i,{display:"flex",alignItems:"center",gap:1,children:[t.jsx(i,{width:"8px",height:"8px",borderRadius:"full",bg:"#EF4444",animation:"pulse 2s infinite"}),t.jsx(s,{fontSize:"11px",color:"#EF4444",fontWeight:"600",children:"LIVE"})]})]}),t.jsx(i,{mb:5,children:t.jsxs(i,{display:"flex",alignItems:"flex-start",gap:3,children:[t.jsx(i,{width:"40px",height:"40px",borderRadius:"full",overflow:"hidden",border:"2px solid rgba(255, 255, 255, 0.8)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",children:t.jsx("img",{src:"https://i.pravatar.cc/150?img=44",alt:"Courtney",style:{width:"100%",height:"100%",objectFit:"cover"}})}),t.jsxs(i,{flex:"1",children:[t.jsxs(i,{display:"flex",alignItems:"center",gap:2,mb:1,children:[t.jsx(s,{fontSize:"12px",fontWeight:"600",color:"#2c3e50",children:"Courtney"}),t.jsx(s,{fontSize:"10px",color:"#6B7280",children:"9:15 AM"})]}),t.jsx(i,{bg:"#001223",borderRadius:"18px",borderTopLeftRadius:"6px",p:4,color:"white",width:"fit-content",maxWidth:"85%",minWidth:"200px",boxShadow:"0 2px 12px rgba(66, 153, 225, 0.3)",children:t.jsxs(s,{fontSize:"14px",lineHeight:"1.4",fontWeight:"500",minHeight:"60px",children:[g,y&&t.jsx(i,{as:"span",display:"inline-block",width:"2px",height:"16px",bg:"white",ml:1,animation:"blink 1.5s infinite",sx:{"@keyframes blink":{"0%, 50%":{opacity:1},"51%, 100%":{opacity:0}}}})]})})]})]})}),t.jsxs(i,{mb:5,textAlign:"center",children:[t.jsx(i,{position:"relative",display:"inline-block",mb:3,children:t.jsx(d.div,{style:{width:"80px",height:"80px",borderRadius:"50%",background:`conic-gradient(${m[u[n]]} ${3.6*I()}deg, #F3F4F6 0deg)`,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(i,{width:"64px",height:"64px",borderRadius:"50%",bg:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:t.jsxs(s,{fontSize:"16px",fontWeight:"700",color:m[u[n]],children:[I(),"%"]})})})}),t.jsx(x,{mode:"wait",children:t.jsxs(d.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.8},children:[t.jsx(s,{fontSize:"16px",fontWeight:"600",color:m[u[n]],mb:1,children:u[n]}),t.jsx(s,{fontSize:"12px",color:"#6B7280",children:{Confident:"High confidence detected",Uncertain:"Some hesitation detected",Friendly:"Positive engagement detected",Passionate:"Strong enthusiasm detected",Neutral:"Balanced tone detected"}[u[n]]})]},n)})]}),t.jsxs(i,{children:[t.jsxs(i,{display:"flex",gap:1,mb:3,children:[t.jsx(i,{as:"button",px:4,py:2,borderRadius:"8px",bg:"questions"===r?"#5f9df7":"rgba(95, 157, 247, 0.1)",color:"questions"===r?"white":"#5f9df7",fontSize:"14px",fontWeight:"600",flex:"1",textAlign:"center",transition:"all 0.2s ease",children:"Follow-up"}),t.jsx(i,{as:"button",px:4,py:2,borderRadius:"8px",bg:"cues"===r?"#5f9df7":"rgba(95, 157, 247, 0.1)",color:"cues"===r?"white":"#5f9df7",fontSize:"14px",fontWeight:"600",flex:"1",textAlign:"center",transition:"all 0.2s ease",children:"Cues"})]}),t.jsx(i,{bg:"white",borderRadius:"10px",p:4,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",border:"1px solid rgba(0, 0, 0, 0.05)",children:t.jsxs(i,{display:"flex",alignItems:"flex-start",gap:3,children:[t.jsx("img",{src:"/brandassets/icon-trans-real-new.png",alt:"Clarivue",style:{width:"24px",height:"24px",objectFit:"contain"}}),t.jsx(i,{flex:"1",children:t.jsx(x,{mode:"wait",children:t.jsx(d.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.8},children:t.jsx(s,{fontSize:"14px",color:"#1e1e1e",fontWeight:"500",lineHeight:"1.4",children:"questions"===r?f[l]:j[p]})},"questions"===r?`question-${l}`:`cue-${p}`)})})]})})]})]})}));v.displayName="ClarivueSimulatedPane";const I=e.memo((()=>t.jsx(i,{w:"90vw",maxW:"1200px",mx:"auto",position:"relative",borderRadius:"24px",overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(59, 130, 246, 0.25)",zIndex:2,transition:"box-shadow 0.3s ease-in-out",_hover:{boxShadow:"0 35px 60px -12px rgba(59, 130, 246, 0.35)"},children:t.jsxs(i,{width:"100%",height:"570px",overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",children:[t.jsx(w,{}),t.jsx(i,{position:"absolute",top:"56%",left:"50%",transform:"translate(-50%, -50%) scale(0.9)",width:{base:"95%",sm:"90%",md:"480px"},height:"auto",zIndex:20,children:t.jsx(i,{position:"relative",width:"100%",height:"100%",_before:{content:'""',position:"absolute",top:"-20px",left:"-20px",right:"-20px",bottom:"-20px",background:"radial-gradient(ellipse at center, transparent 60%, rgba(242, 249, 255, 0.4) 80%, rgba(242, 249, 255, 0.8) 100%)",backdropFilter:"blur(6px)",borderRadius:"30px",zIndex:-1},children:t.jsx(v,{})})})]})})));I.displayName="MediaSection";const S=e.memo((()=>t.jsxs(i,{bg:"white",minH:"100vh",pt:{base:"100px",md:"140px"},pb:"2rem",overflow:"hidden",position:"relative",_after:{content:'""',position:"absolute",bottom:0,left:0,right:0,height:"60px",background:"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)",pointerEvents:"none",zIndex:10},children:[t.jsx(y,{}),t.jsx(n,{maxW:"container.xl",px:{base:4,md:6},position:"relative",zIndex:5,children:t.jsxs(a,{spacing:5,align:"center",maxW:"1011px",mx:"auto",children:[t.jsxs(i,{textAlign:"center",maxW:"900px",children:[t.jsx(r,{as:"h1",fontSize:{base:"36px",sm:"48px",md:"72px"},lineHeight:{base:"44px",sm:"56px",md:"80px"},color:"#001223",mb:8,fontWeight:"bold",children:"The all-in-one intelligence for smarter interview decisions"}),t.jsx(s,{fontSize:{base:"18px",sm:"20px",md:"24px"},lineHeight:{base:"28px",sm:"32px",md:"36px"},color:"#001223",mb:3,fontWeight:"100",children:"Clarivue brings you cutting-edge AI assistance, real-time cues, and intelligent scoring — all within a single, secure platform tailored for modern hiring teams."})]}),t.jsx(o,{background:"#001223",color:"white",size:"lg",height:{base:"60px",md:"81px"},px:{base:"6",md:"8"},fontSize:{base:"18px",md:"23px"},fontWeight:"600",borderRadius:"16px",_hover:{background:"linear-gradient(135deg,rgb(250, 185, 159) 0%,rgb(251, 202, 248) 100%)",color:"#001223",transform:"translateY(-2px)",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.15)"},transition:"all 0.3s ease",rightIcon:t.jsx(i,{as:"span",ml:2,children:"➜"}),children:"Get Started Free"})]})}),t.jsx(i,{position:"relative",w:"100%",display:"flex",justifyContent:"center",px:{base:2,sm:3,md:6},zIndex:3,mt:"3rem",mb:"1rem",children:t.jsx(I,{})})]})));export{S as HeroSection};
