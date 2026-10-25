// Buscador sencillo: carga search.json y filtra en tu navegador.
(function () {
  var lista = document.getElementById("resultados");
  var estado = document.getElementById("estado-busqueda");
  var campo = document.getElementById("q");
  if (!lista || !campo) return;

  // Quita acentos y pasa a minúsculas para que "razon" encuentre "razón".
  function limpiar(t) {
    return (t || "").toString().normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  var indice = [];

  function render(consulta) {
    lista.textContent = "";
    var palabras = limpiar(consulta).split(/\s+/).filter(Boolean);
    if (palabras.length === 0) {
      estado.textContent = "Escribe algo para buscar.";
      return;
    }

    var resultados = indice.filter(function (n) {
      var paja = limpiar(n.title + " " + (n.tags || []).join(" ") + " " + n.text);
      return palabras.every(function (p) { return paja.indexOf(p) !== -1; });
    });

    estado.textContent = resultados.length === 0
      ? "Sin resultados para «" + consulta + "»."
      : resultados.length + (resultados.length === 1 ? " resultado" : " resultados");

    resultados.forEach(function (n) {
      var li = document.createElement("li");
      var info = document.createElement("div");
      info.className = "info";

      var a = document.createElement("a");
      a.className = "title";
      a.href = n.url;
      a.textContent = n.title;

      var cat = document.createElement("span");
      cat.className = "tag";
      cat.textContent = n.categoria;

      // Fragmento de texto alrededor de la primera coincidencia
      var textoLimpio = limpiar(n.text);
      var pos = textoLimpio.indexOf(palabras[0]);
      var ini = Math.max(0, pos - 50);
      var frag = pos === -1 ? n.text.slice(0, 120) : "…" + n.text.slice(ini, ini + 140) + "…";
      var p = document.createElement("p");
      p.className = "excerpt";
      p.textContent = frag;

      info.appendChild(a);
      info.appendChild(document.createTextNode(" "));
      info.appendChild(cat);
      info.appendChild(p);
      li.appendChild(info);
      lista.appendChild(li);
    });
  }

  var params = new URLSearchParams(window.location.search);
  var inicial = params.get("q") || "";
  campo.value = inicial;

  fetch(lista.getAttribute("data-index"))
    .then(function (r) { return r.json(); })
    .then(function (datos) {
      indice = datos;
      render(campo.value);
    })
    .catch(function () {
      estado.textContent = "No pude cargar el índice de búsqueda.";
    });

  campo.addEventListener("input", function () { render(campo.value); });
})();
