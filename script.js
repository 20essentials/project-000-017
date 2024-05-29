const d = document;

d.addEventListener("click", e => {
  if (e.target.matches("input[type=radio]")) {
    let $valor = e.target.nextElementSibling.textContent,
    element = d.querySelector(`.container-star-wars-${$valor}`);
    let $todoMostrar = d.querySelectorAll(".mostrar");
    $todoMostrar.forEach(el => el.classList.remove("mostrar"));
    element.classList.add("mostrar");
  }
  if (e.target.matches(".container-SW")) {
    e.target.classList.toggle("pausar");
  }
})