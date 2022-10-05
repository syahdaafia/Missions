let preveiwContainer = document.querySelector('.geosite-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.geosite-popup .geosite').forEach(geosite =>{
  geosite.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = geosite.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});