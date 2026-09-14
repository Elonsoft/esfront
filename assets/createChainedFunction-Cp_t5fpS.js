const o=(...i)=>i.reduce((t,n)=>n==null?t:function(...e){t.apply(this,e),n.apply(this,e)},()=>{});export{o as c};
