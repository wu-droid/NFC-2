const d=document.getElementById('lightbox');
document.getElementById('openPhoto').addEventListener('click',()=>d.showModal());
document.getElementById('closeLightbox').addEventListener('click',()=>d.close());
d.addEventListener('click',e=>{if(e.target===d)d.close();});