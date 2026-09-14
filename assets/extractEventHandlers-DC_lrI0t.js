const s=(e,r=[])=>{if(e===void 0)return{};const n={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!r.includes(t)).forEach(t=>{n[t]=e[t]}),n};export{s as e};
