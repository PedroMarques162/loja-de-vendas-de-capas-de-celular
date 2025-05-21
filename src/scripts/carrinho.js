const ListaCarrinho = document.getElementById("lista-carrinho");
const TotalContainer = document.getElementById("total");
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderCarrinho() {
    ListaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        ListaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
        TotalContainer.textContent = "R$ 0,00";
        return;
    }

}

carrinho.forEach((produto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})">Remover</button>
    `;
    listaCarrinho.appendChild(li);
  });

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
  TotalContainer.textContent = `R$ ${total.toFixed(2)}`;

function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
}

document.getElementById("finalizar").addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    
    alert("Compra finalizada com sucesso!");
    carrinho = [];
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
});

renderCarrinho();

    

    