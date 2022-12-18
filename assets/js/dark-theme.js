document.querySelector('input[type="checkbox"]').addEventListener('click', function(){
// verify if body contains class theme-light to toggle button theme
    this.checked ? document.querySelector('body').classList.toggle('light-theme') : document.querySelector('body').classList.remove('light-theme')
})