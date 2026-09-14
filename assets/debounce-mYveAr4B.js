const r=(o,c=166)=>{let e;const t=(...u)=>{clearTimeout(e),e=setTimeout(()=>{o(...u)},c)};return t.clear=()=>{clearTimeout(e)},t};export{r as d};
