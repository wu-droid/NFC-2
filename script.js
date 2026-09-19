const dialog=document.getElementById('lightbox');
document.getElementById('openPhoto').addEventListener('click',()=>dialog.showModal());
document.getElementById('closeLightbox').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
