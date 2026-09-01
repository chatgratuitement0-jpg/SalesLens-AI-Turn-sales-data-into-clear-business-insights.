const SL_STORE='saleslens_workspace_v1';
const Store={load(){try{return JSON.parse(localStorage.getItem(SL_STORE))||{datasets:[]}}catch{return{datasets:[]}}},save(x){localStorage.setItem(SL_STORE,JSON.stringify(x))},add(dataset){const x=this.load();x.datasets.unshift({...dataset,id:crypto.randomUUID?.()||String(Date.now()),createdAt:new Date().toISOString()});x.datasets=x.datasets.slice(0,20);this.save(x);return x.datasets[0]},clear(){localStorage.removeItem(SL_STORE)}};
window.SalesLensStore=Store;
