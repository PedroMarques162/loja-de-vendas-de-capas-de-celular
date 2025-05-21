const produtos = [
  {
    id: 1,
    nome: "Capa Personalizada do Flamengo - Transparente",
    preco: 49.9,
    imagem: "https://via.placeholder.com/300x200.png?text=Capa+iPhone+14"
  },
  {
    id: 2,
    nome: "Capa Personalizada do Flamengo - Preta",
    preco: 49.9,
    imagem: "https://via.placeholder.com/300x200.png?text=Capa+iPhone+14"
  },
  {
    id: 3,
    nome: "Capa Personalizada do Flamengo - Branca",
    preco: 49.9,
    imagem: "https://via.placeholder.com/300x200.png?text=Capa+iPhone+14"
  },
  {
    id: 4,
    nome: "Capa Personalizada do Flamengo - Azul",
    preco: 49.9,
    imagem: "https://via.placeholder.com/300x200.png?text=Capa+iPhone+14"
  }
];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderProdutos() {
    const listas = document.getElementById("product-list");
    listas.innerHTML = ""; // Limpa antes de renderizar
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button>Adicionar ao Carrinho</button>
        `;
        card.querySelector("button").addEventListener("click", () => adicionarAoCarrinho(produto.id));
        listas.appendChild(card);
    });
}

function adicionarAoCarrinho(id) {
    const item = produtos.find(p => p.id === id);
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContador();
    // Feedback visual simples
    const cart = document.getElementById("cart");
    cart.classList.add("highlight");
    setTimeout(() => cart.classList.remove("highlight"), 500);
}

function atualizarContador() {
    document.getElementById("cart-count").innerText = carrinho.length;
}

renderProdutos();
atualizarContador();