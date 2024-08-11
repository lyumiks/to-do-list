const buttonAdd = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const fullList = document.querySelector(".list-tasks");

//Feito um array para agrupar as tarefas
let myToDoList = [];

//A função abaixo serve para adicionar uma nova tarefa na lista. O intuito é que as tarefas sejam agrupadas/adicionadas a lista e não sejam substituídas
function addTask() {
  if (input.value === "") {
    return;
  }
  myToDoList.push(input.value);
  input.value = "";
  //A tarefa já foi adicionada, por isso o próximo passo é que ela seja exibida na lista. Esse é o objetivo da função abaixo:
  showTasks();
}
function removeTask(event) {
  myToDoList.splice(event.target.getAttribute("index"), 1);
  showTasks();
}

function concludeTask(event) {
  myToDoList.splice(event.target.getAttribute("index"), 1);
  showTasks();
}

function showTasks() {
  //Cada item da lista, no HTML é uma <li>, a estrutura é a mesma, mas para que o nosso objetivo seja executado (montar uma lista de tarefas), precisamos que a estrutura de li (de item da lista), se repita a cada tarefa adicionada
  let newLi = "";
  myToDoList.forEach((taskItem, index) => {
    //Por que uma adição? Porque precisamos que tarefas sejam adicionadas, e não substituídas. Caso não tivesse sido especificiado que é necessário ADICIONAR, a primeira tarefa seria escrita normalmente, porém a segunda se sobrescreveria à primeira!
    newLi =
      newLi +
      `<li class="task  ">
    <p>${taskItem}</p>
    <button class="button-task-conclude" index=${index}>Concluída</button>
    <button class="button-task-remove" index=${index}>Cancelada</button>
    </li>`;
  });

  fullList.innerHTML = newLi;
  const buttonsRemove = document.getElementsByClassName("button-task-remove");
  const buttonsConclude = document.getElementsByClassName(
    "button-task-conclude"
  );

  for (let button of buttonsRemove) {
    button.addEventListener("click", removeTask);
  }

  for (let button of buttonsConclude) {
    button.addEventListener("click", removeTask);
  }
}

buttonAdd.addEventListener("click", addTask);
