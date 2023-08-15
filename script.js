fetch('data.json')
.then(res => res.json())
.then((json)=> {
    const ul = document.getElementById('lista');
    json.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="Item-start1">
         <img 
         src="${item.logo}" alt="">
         <div class="principal">
         <div class="quali">
           <p  id="Photosnap"> ${item.company}</p>
           <p  id="new">${item.new}</p>
           <p  id="featured"> ${item.featured}</p>
          </div>
           <div class="dev">
             <h3  class="itemPesquisa">${item.position}</h3>
               <!-- Role -->
               <ul>
                 <li id="um"> 1d ago</li>
                 <li> Full Time</li>
                 <li> USA only</li>
               </ul>
           </div>
        </div>
        <ul class="role">
         <li class="itemPesquisa"> ${item.role}</li>
         <!-- Level -->
         <li class="itemLevel">${item.level}</li>
         <!-- Languages -->
         <li class="itemTools"> ${item.languages[0]}</li>
         <li class="itemTools">  ${item.languages[1]}</li>
         <li class="itemLanguages">${item.languages[2]}</li>
        </ul>
        </div>`;
        ul.appendChild(li);
    })
})

function search(){
    var input,
    ul,
    li,
    a,
    txtValue,
    count,
    filter,
    span= 0;

    input = document.getElementById('filtro');
    ul = document.getElementsByClassName('role');

    //filtro 
    filter = input.value.toUpperCase();

    //pegar li's
    li = ul.getElementsByTagName("li");

    //responsavel por percorrer todas as li's
    for(i = 0 ; 1< li.length; 1++){
        //pegar a tag do elemento
        a = li[i].getElementsByTagName("li")[0];
        //pegar o texto dentro da tag
        txtValue = a.textContent|| a.innerText;
        //se o campo  nao esta vazio
        if(txtValue.toUpperCase().indexOf(filter)> -1){
        li[i].style.display= "";
        //incrementa o contador
        count++
        //pega a tag span do item
        span = li[i].querySelector(".itemPesquisa")
            if(span){
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match) =>{
                    return "<b>" + match + "</b>";
                })
            }
        }else{
            //nao mostra o item da lista 
            li[i].style.display= "none";
        }
    }
    if(count === 0 ){
        ul.style.display = "none";
    }else{
        ul.style.display = "block";
    }
}