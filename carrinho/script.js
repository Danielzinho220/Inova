let items = [
    {
        id: 0,
        nome: 'Balaciado',
        img: 'imagens/01.png',
        quantidade: 0,
        price: 100

    },
    {
        id: 1,
        nome: 'Jordan 1 Mid',
        img: 'imagens/jordan1mid.png',
        quantidade: 0,
        price: 100

    },
    {
        id: 2,
        nome: 'Nike Launch',
        img: 'imagens/launch.png',
        quantidade: 0,
        price: 100
    },
    {
        id: 3,
        nome: 'Nike Rebel XX',
        img: 'imagens/rebelxx.png',
        quantidade: 0,
        price: 100
    },
    {
        id: 4,
        nome: 'Jordan Retro',
        img: 'imagens/retro.png',
        quantidade: 0,
        price: 100
    },
    {
        id: 5,
        nome: 'Nike Zoom',
        img: 'imagens/zoom.png',
        quantidade: 0,
        price: 100
    },
    {
        id: 6,
        nome: 'Jordan Phat 1',
        img: 'imagens/jordanPhat1.png',
        quantidade: 0,
        price: 100
    },
    {
        id: 7,
        nome: 'Jordan Old Love',
        img: 'imagens/oldLove.png',
        quantidade: 0,
        price: 100
    },
    {
        id: 8,
        nome: 'Jordan Retro High',
        img: 'imagens/retroHigh.png',
        quantidade: 0,
        price: 100
    }
    
]
inicializarLoja = () => {
    var containerProdutos = document.getElementById("produto")
    items.map((val) => {
        containerProdutos.innerHTML += `

            <div class="produto-single">
                <img src="`+ val.img + `" />
                <p>`+ val.nome + `</p>
                <a key="`+ val.id + `" href="#">Adicionar ao carrinho!<a/>
            </div>

            `
    })
}
inicializarLoja()

/*
function totalCont(items){
    // console.log("valor", product.price);
  
        let cartCont = localStorage.getItem('Total');
        
        console.log("Minha Compra", cartCont);
        console.log(typeof cartCont);
  
        if(cartCont != null){
          cartCont = parseInt(cartCont);
          localStorage.setItem ("Total", cartCont + items.price);
        } else {
          localStorage.setItem ("Total", items.price);
        }
        
        
      
  }*/

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho")
    containerCarrinho.innerHTML = ""
    items.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `

            <p> `+ val.nome + ` | quantidade: ` + val.quantidade + ` | Preço: ` + val.price + `</p>
            <hr>

            `
        }
    })
}


var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key')
        items[key].quantidade++
        items[key].price++
        atualizarCarrinho()
        return false
    })
}