document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("solicitud-turno");
  if (form) {
      form.addEventListener("submit", handleSubmit);
  }
  
  function handleSubmit(event) {
      event.preventDefault();
      
      var nombreInput = document.getElementById("nombre");
      var emailInput = document.getElementById("email");
      var fechaInput = document.getElementById("fecha");
      var horaInput = document.getElementById("hora");
      
      if (nombreInput && emailInput && fechaInput && horaInput) {
          var nombre = nombreInput.value;
          var email = emailInput.value;
          var fecha = fechaInput.value;
          var hora = horaInput.value;
          
          console.log("Solicitud de turno enviada:");
          console.log("Nombre:", nombre);
          console.log("Email:", email);
          console.log("Fecha:", fecha);
          console.log("Hora:", hora);
          
          if (form) {
              form.reset();
          }
      }
  }
});

// Obtener elementos del DOM
const tareaInput = document.getElementById('taskInput');
const agregarTareaBtn = document.getElementById('addTaskBtn');
const listaDeTareas = document.getElementById('taskList');

// Manejador de eventos para agregar tarea
function addTask() {
  const textoTarea = tareaInput.value.trim();
  
  if (textoTarea !== '') {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea;
    taskList.appendChild(nuevaTarea);
    tareaInput.value = '';
  }
}

// Manejador de eventos para eliminar tarea
function deleteTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
}

// Agregar evento al botón de agregar tarea
agregarTareaBtn.addEventListener('click', addTask);

// Agregar evento a la lista de tareas para eliminar tarea al hacer clic
listaDeTareas.addEventListener('click', deleteTask);

  //document.getElementById("taskForm") busca y selecciona un elemento del documento con el id "taskForm". Presumiblemente, este es el formulario que contiene las tareas que deseas manejar.
//.addEventListener("submit", function(event) { ... }) agrega un "escuchador de eventos" al formulario para el evento "submit" (enviar). Esto significa que cuando se envíe el formulario, se ejecutará la función proporcionada como segundo argumento.
//event.preventDefault(); es una línea que evita que el formulario se envíe y se recargue la página. Esto se logra llamando al método preventDefault() en el objeto event proporcionado a la función. En resumen, esta línea evita que el formulario realice su acción de envío predeterminada.
//const checkboxes = document.getElementsByName("task"); busca todos los elementos en el documento con el atributo name igual a "task" y los guarda en la variable checkboxes. Presumiblemente, estos elementos son casillas de verificación que representan las tareas.
//const selectedTasks = []; crea un nuevo array vacío llamado selectedTasks que se utilizará para almacenar las tareas seleccionadas.
//checkboxes.forEach(function(checkbox) { ... }) itera sobre cada elemento en el array checkboxes y ejecuta la función proporcionada para cada elemento.
//if (checkbox.checked) { selectedTasks.push(checkbox.value); } verifica si la casilla de verificación está marcada (es decir, checked es verdadero) y, en ese caso, agrega el valor de la casilla de verificación al array selectedTasks utilizando el método push().
//console.log("Tareas seleccionadas:", selectedTasks); muestra en la consola las tareas seleccionadas. Puedes usar console.log() para imprimir información en la consola del navegador con fines de depuración.
//checkboxes.forEach(function(checkbox) { checkbox.checked = false; }); itera sobre cada elemento en el array checkboxes y establece su propiedad checked en falso, desmarcando todas las casillas de verificación.
//Después de ejecutar este código, las tareas seleccionadas se mostrarán en la consola y las casillas de verificación se desmarcarán, lo que proporciona una forma básica de procesar y reiniciar las tareas seleccionadas en el formulario. Puedes agregar más acciones o lógica dentro de la función para realizar otras operaciones con las tareas seleccionadas si es necesario.





