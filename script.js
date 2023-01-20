
const btnWrapper = document.querySelector("#btnWrapper") ;

btnWrapper.innerHTML = `
<button class="btns">
<li class="lili">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Gross
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Grass</a></li>
            <li><a class="dropdown-item" href="#">Poison</a></li>
            <li><a class="dropdown-item" href="#">Fire</a></li>
          </ul>
        </li>
</button>
<button class="btns sorchuz">Search<i class="bi bi-search"></i></button>
<button class="btns">Aa-Zz</button>
<button class="btns">Button</button>
`
pokemons.splice(100)
const Pokem = pokemons.map((el) => {
    console.log(el);
    return {
        "img" : el.img,
        "name" : el.name,
        "type" : el.type,
        "kg" : el.weight,
        "age" : el.candy_count 
    }
})

const wrapper = document.querySelector("#wrapper")

function Allpokemons(){
    Pokem.forEach((el) => {
      const card = createElement('div', 'card w-18', `
      <img src="${el.img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">
              <span><h5><b>${el.name}</b> <span> <br> ${el.type}</span> </h5></span>
              <i class="bi bi-heart"></i>
          </h5>
              <p>${el.kg}</p>
              <p>${el.age} age</p>
      </div>
      `)
    wrapper.appendChild(card)
    })
}

Allpokemons()