function onClick(elem){
    document.getElementById('img01').src = elem.src;
    document.getElementById('theModal').style.display = "block";
} 
$('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  })