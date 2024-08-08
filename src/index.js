const clique = document.querySelector("button");
clique.addEventListener("click", function () {
  const corpinho = document.getElementById("tete");
  const lista = document.createElement("ol");
  const item = document.createElement("il");
  item.textContent = "hehe";
  lista.append(item);
  corpinho.append(lista);

  // corpinho.append("tchau");
});
