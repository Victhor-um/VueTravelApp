import{o,c as a,a as n,t as i,r as p,u as h,b as x,d,e as u,f as m,F as f,g as k,h as $,w}from"./index-dfbc8524.js";const y={class:"card"},b=["src","alt"],B={class:"card__text"},C={__name:"ExperienceCard",props:{experience:{type:Object,required:!0}},setup(s){const e=s;return console.log("child log: ",e),(t,c)=>(o(),a("div",y,[n("img",{src:`/images/${e.experience.image}`,alt:e.experience.name},null,8,b),n("span",B,i(e.experience.name),1)]))}},D=(s,e)=>{const t=s.__vccOpts||s;for(const[c,l]of e)t[c]=l;return t},N={},S={class:"go-back"};function j(s,e){return o(),a("span",S,[n("button",{onClick:e[0]||(e[0]=t=>s.$router.back())},"go back")])}const E=D(N,[["render",j]]),V={key:0,class:"destination"},q={class:"destination-details"},F=["src","alt"],O={key:1,class:"experiences"},G={class:"cards"},R={__name:"DestinationShow",props:{id:{type:Number,required:!0}},setup(s){const e=p(void 0),t=p(void 0),c=h(),l=async()=>{const _=await fetch(`https://travel-dummy-api.netlify.app/${c.params.slug}.json`);e.value=await _.json(),t.value=await e.value.experiences,console.log("🚀 ~ file: DestinationShow.vue:38 ~ loadDestination ~  experiences.value:",t.value),console.log(e.value)};return x(()=>l()),(_,L)=>{const v=d("router-link"),g=d("router-view");return o(),a("div",null,[e.value?(o(),a("section",V,[n("h1",null,i(e.value.name),1),u(E),n("div",q,[n("img",{src:`/images/${e.value.image}`,alt:e.value.name},null,8,F),n("p",null,i(e.value.description),1)])])):m("",!0),t.value?(o(),a("section",O,[n("h2",null,"Top Experiences in "+i(e.value.name),1),n("div",G,[(o(!0),a(f,null,k(t.value,r=>(o(),$(v,{key:r.slug,to:{name:"experience.show",params:{experienceSlug:r.slug}},experience:r},{default:w(()=>[u(C,{experience:r},null,8,["experience"])]),_:2},1032,["to","experience"]))),128))]),u(g)])):m("",!0)])}}};export{R as default};
