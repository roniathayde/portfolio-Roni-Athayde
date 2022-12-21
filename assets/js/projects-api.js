let elements = [];
fetch('https://api.github.com/users/roniathayde/repos')
.then( async res=>{
    
    if ( !res.ok ){
        throw new Error(res.status)
    }

    var data = await res.json()
    
    let lista = document.querySelector('.projects_all-projects');

    data.map(item => {
        if (item.homepage) {
        let div = document.createElement('div')
        div.classList.add('projects_all-projects--a-project');
        let link = document.createElement('a');
        link.classList.add('projects_all-projects--a-project_link');
        link.setAttribute('href', item.homepage);
        link.setAttribute('target', '_blank')

        let titulo = document.createElement('h3');
        titulo.classList.add('projects_all-projects--a-project_link--title');
        titulo.innerHTML = item.name;

        div.appendChild(link);
        link.appendChild(titulo);



        lista.appendChild(div)
        }


    })

} )
.catch(e => console.log(e))