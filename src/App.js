// //[React aplicacion tema 1]
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [newTaskName, setNewTaskName] = useState();

//   return (
//     <div className="App">
//       <form onSubmit={() => alert('submiting')}>
//         <input
//           type="text"
//           placeholder="Ingresa una tarea"
//           onChange={(e) => setNewTaskName(e.target.value)}
//         ></input>
//         <button>Guardar</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//Empezamos recibiendo la entrada del usuario.La guardamos en un estado,state.El use State lo tenemos que ejecutar antes de que renderize todo el componente.El use state nos puede devolver un arreglo. Dentor del array hay una variable una funcion. La funcion sirve para acutualizar la variable. La funcion tiene set + el nombre de la variable. Para poder llenar la variable usamos la funcion. En donde bueno donde se tipea[14]. Y si lo querems ver lo ponermos en alert, la variable!
//Si ponemos el button, y el input, dentro de un form, vamos poder tener envios. Ya que el formulario tiene para enviar: onSubmit y lo que hace es enviar datos a un backend. Pero como no hay backen lo que hara es caputurar los datos antes de que se envien, (al backend que no existe xd).
//Entonces sacamos las cosas de button:[onClick={() => alert(newTaskName)}], escribimos lo que hay en el form. Y lo que ocurre es que ahora antes de que se envie los datos se captura, y una vez que aceptamos se reinicia la pagina por que no hay backend.
//-----------------------------------------------------------------------------------------
//[React aplicacion tema 1]
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [newTaskName, setNewTaskName] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault('')
//     localStorage.setItem('tasks', newTaskName)
//     setNewTaskName('')
//   }
//   //Lo que hacemos en este caso es que una vez que se guarda, lo establecemos como un string vacio.

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ingresa una tarea"
//           value={newTaskName}
//           onChange={(e) => setNewTaskName(e.target.value)}
//         ></input>
//         <button>Guardar</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//Entonces para capturar como corresponde los datos. Se hace una const por aparte. Tipicamente se dice  handleSubmit como diciendo que esta manejando el evento de envio. ENTONCES le decimos al onSubmit que utilice esa const. Y como antes la e se lo pasaba ahora el que se lo pasa es handleSubmmit. Acordemosno que el e, es donde esta todo el objeto. Si nos acordamos sabemos que preventDefault es para cancelar los comportamientos po defecto de form, mas tambien por consecuencia lo de sus hijos. Entonces aqui no refresca la pagina.
//Ahora que pasa si queremos guardar lo tipeado?Bueno el navegador tiene algunas app as o digamos alguna especie de funcionalidad para poder persistir datos. ENtonces si en google vamos a console, aplicacion, veran que hay varias formas de persistir datos. La forma mas comun es en almacenamiento/Almacenamiento local y ese https que hay dentro,sirve para almacenar datos dentro del navegador y si así nosostros cambiemos de pagina,cerremos o salgamos, si volvemos a estar los datos estaran ahi.
//Tambien esta el almacenamiento de sesion,(o sesion storage) que es para guardar datos a partir de una sesion activa, si nosotros guardamos datos en nuestra pagina en un sesion storage y luego cerramos la pagina si lo volvemos a abrir ya no van a estar los datos.
//TAMBIEN esta indexdb y web sql, que ese voy a usar despues!
//Lo que espera almacenamiento local, es una clave y un valor. Una especie de propiedad en un objeto de js o una propiedad de un objeto json. Okey entonces----------------->
//Llamamos a localStorage[Parece un objeto xd].Luego para guardar algo---->setItem()-------->y dentro van los dos valores: nombre y valor------>entonces cuando guardamos un dato, solo guardamos el hola y el 30 pero no el tipado------> entonces le decimos que lo que va guardar como nombre es tasks y el valor va ser lo que se a guardado------> y para eso llamamos al nombre del array.
//Solo es para guardar un solo dato a la vez.Y se puede borra de ahi mismo. De esta forma guardamos cosas dentro de nuestro navegador. Esto es para el navegador en que el usuario a abierto la aplicacion de react en este caso.
//[TODO ESTE CODIGO ESTA BIEN PARA EMPEZAR PERO NO DA QUE EL FORMULARIO NI EL INPUT ESTE AQUI, ESTARIA BUENO QUE ESTE EN SU PROPIO COMPONENTE.]:
//[React aplicacion tema 1]
// import "./App.css";
// import {TaskCreator} from "./components/TaskCreator";

// function App() {
//   //Lo que hacemos en este caso es que una vez que se guarda, lo establecemos como un string vacio.

//   return (
//     <div className="App">
//       <TaskCreator />
//     </div>
//   );
// }

// export default App;
//Entonces creamos una caprte llamada component.[Ir a TaskCreator.js]. Si queremos.Para utilizar el taskcreator simplemente lo llamos como etiqueta. Y leston.
//-----------------------------------------------------------------------------------------
//[Mostrar tareas en pantalla]
// import { useState } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";

// function App() {
//   const [tasksItems, setTasksItems] = useState([
//     { name: "mi primer tarea", done: false },
//     { name: "mi segunda tarea", done: false },
//     { name: "mi tercera tarea", done: false },
//   ]);

//   return (
//     <div className="App">
//       <TaskCreator />

//       <table>
//         <thead>
//           <tr>Tarea</tr>
//         </thead>
//         <tbody>
//           {
//             tasksItems.map((task) => (
//               <tr key={task.name}>
//                 <td>
//                   {task.name}
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
//Para poder mostrar tareas tenemos que definir una variable en donde vana  estar multiples objetos para poder representarlos. Si queremos mostrar en pantalla lso objetos del arreglo, para eso podemos usart todas las funciones que tiene js para los arreglos map, filter, redux, foreach, etc.
//Thead seria el encabezado de la pagina y un t body qeu es el cuerpo de una tabla.tr seria una fila de la cabezera
//Cada elemento hijo debe tener una cable unica.¿Por que ponemos como clave unica?task.name? por que luego voy a decir que si existe una tarea no quiero que se añada,cada una de las tareas va ser unica.
//Los nodos de texto no puede ser hijos, no pueden aparecer como elementos hijos de tr.Asique los objetos {task.name} deben tener otra etiqueta dentro. que se llame td.

//[Mostrar tareas en pantalla]
// import { useState } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";

// function App() {
//   const [tasksItems, setTasksItems] = useState([
//     { name: "mi primer tarea", done: false },
//     { name: "mi segunda tarea", done: false },
//     { name: "mi tercera tarea", done: false },
//   ]);

//   function createNewTask(taskName) {
//     if (!tasksItems.find(task => task.name === taskName)) {
//     setTasksItems([...tasksItems, {name: taskName, done:false}])
//   }
// }
//   return (
//     <div className="App">
//       <TaskCreator createNewTask={createNewTask}/>
//       <table>
//         <thead>
//           <tr>Tarea</tr>
//         </thead>
//         <tbody>
//           {
//             tasksItems.map((task) => (
//               <tr key={task.name}>
//                 <td>
//                   {task.name}
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App
//Si quiero que cuando le doy click, quiero que no solo se guarde en el navegador, sino en la lista de tareas.Para ser eso tenemos que entender donde esta la lista de tareas, y eso esta en app.Dentro de app esta creator y esta la tabla. De alguna forma tenemos que pasarle una funcion desde app a taskcreator para que taskcreator lo ejecute y al ajecutarlo me pase nuevo dato. React puede recibir string,numeros, pero tambien funciones.

//Como hacer si quiero que que si guardo don tareas iguales, hacerle entender que son dos datos distintos, aunque sea la misma tarea?
//Podemos colocarle una validacion al createnewtask.

// [Con ese objeto podemos revisar si eciste o no][141]
//-------------------------------------------------------------------
//[Como guardar en el local storage]
// import { useState, useEffect } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";

// function App() {
//   const [tasksItems, setTasksItems] = useState([
//     { name: "mi primer tarea", done: false },
//     { name: "mi segunda tarea", done: false },
//     { name: "mi tercera tarea", done: false },
//   ]);

//   function createNewTask(taskName) {
//     if (!tasksItems.find((task) => task.name === taskName)) {
//       setTasksItems([...tasksItems, { name: taskName, done: false }]);
//     }
//   }

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasksItems))
//   }, [tasksItems]);

//   return (
//     <div className="App">
//       <TaskCreator createNewTask={createNewTask} />
//       <table>
//         <thead>
//           <tr>Tarea</tr>
//         </thead>
//         <tbody>
//           {tasksItems.map((task) => (
//             <tr key={task.name}>
//               <td>{task.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;
//Entonces con cuestiones de modificaciones aplicamos una nueva funcionalidad useEffect! useEfect se ejecuta cada vez que un dato cambia.
//Lo que hace useEffect en funcion es que va ejecutar lo que escribamos ahi adentro basado en un codigo que cambie.
//Entonces creamos un array donde sabemos que ahi dentro constamente se ira modificando cosas[189]
// Entonces en conclusion hay que pasar lo de taskItem a stringify para luego ser pasado como array.Oh propiedad unica[192]. Ir a aplication para ver como quedo.Lo que podemos ver ahi es que se recrea todo lo que estaba en stringify!!!!

//[Como guardar en el local storage]
// import { useState, useEffect } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";

// function App() {
//   const [tasksItems, setTasksItems] = useState([]);

//   function createNewTask(taskName) {
//     if (!tasksItems.find((task) => task.name === taskName)) {
//       setTasksItems([...tasksItems, { name: taskName, done: false }]);
//     }
//   }

//   useEffect(() => {
//     let data = localStorage.getItem('tasks')
//     if (data) {
//       setTasksItems(JSON.parse(data))
//     }
//   },[])
//   //Le vamos a decir que cuando cargue la aplicacion inicialmente va ejecutar lo de adentro de las llaves.Entonces ahi decimos que si tiene algo, lo convertimos en stringify para recrearlo y luego pasarlo a las tareas.

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasksItems))
//   }, [tasksItems]);

//   return (
//     <div className="App">
//       <TaskCreator createNewTask={createNewTask} />
//       <table>
//         <thead>
//           <tr>Tarea</tr>
//         </thead>
//         <tbody>
//           {tasksItems.map((task) => (
//             <tr key={task.name}>
//               <td>{task.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;
//Ahora hay un problema, si refrescamos, simplemente vuelve con los tres valores que hay en taskItems. Cuando inica la aplicacion arranca tres propieadaes, esas propiedades son convertidas en stringify y solo se guardan esas tres.
//Entonces creamos un use effect que rebice si el local strorage tiene elementos, si tiene elementos que los establezca en createnewTask.
//La razon por la cual no se guarda es por que tenemos que sacar la etiqueta de react stric mode que habia en index.
//-------------------------------------------------------------------
//[Actualizacion de tareas.]
//Vamos a hacer, como nuestras tareas que estamos guardando en este estado puedan cambiar en su propiedad dom de false a true o viceversa.
// import { useState, useEffect } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";
// import {TaskTable} from './components/TaskTable'

// function App() {
//   const [tasksItems, setTasksItems] = useState([
//   ]);

//   function createNewTask(taskName) {
//     if (!tasksItems.find((task) => task.name === taskName)) {
//       setTasksItems([...tasksItems, { name: taskName, done: false }]);
//     }
//   }
  
//   const toggleTask = task => {
//     setTasksItems(
//       tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done}: t))
//       );
//   };
//   //La tarea que esta recorriendo coincide con el valor que le estan pasando y tiene su propiedad en true lo va cambiar a false y si tiene false, lo va cambiar a true, si no lo encuentra va conservar el valor t(que seria la tarea.). Todo esto devolvera un nuevo arreglo ese nuevo arreglo sera de setTasksItems.

//   useEffect(() => {
//     let data = localStorage.getItem('tasks')
//     if (data) {
//       setTasksItems(JSON.parse(data))
//     }
//   },[])
//   //Le vamos a decir que cuando cargue la aplicacion inicialmente va ejecutar lo de adentro de las llaves.Entonces ahi decimos que si tiene algo, lo convertimos en stringify para recrearlo y luego pasarlo a las tareas[311]

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasksItems))
//   }, [tasksItems]);

//   return (
//     <div className="App">
//       <TaskCreator createNewTask={createNewTask} />
//       <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
      
//     </div>
//   );
// }
// export default App;
//Esta funcion lo va utilizar tasktable, por este tiene la lista de tareas. En taskTable lo van a utuliza pasan la propiedad toggleTask y lo usamos tambien 
//-------------------------------------------------------------------
//[Tablas]
// import { useState, useEffect } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";
// import {TaskTable} from './components/TaskTable'

// function App() {
//   const [tasksItems, setTasksItems] = useState([
//   ]);

//   const [showCompleted, setShowCompleted] = useState(false)
//   /* De esta forma nostros le pasamos un valor false a taskable[362] a la segunda tabla*/

//   function createNewTask(taskName) {
//     if (!tasksItems.find((task) => task.name === taskName)) {
//       setTasksItems([...tasksItems, { name: taskName, done: false }]);
//     }
//   }
  
//   const toggleTask = task => {
//     setTasksItems(
//       tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done}: t))
//       );
//   };
//   //La tarea que esta recorriendo coincide con el valor que le estan pasando y tiene su propiedad en true lo va cambiar a false y si tiene false, lo va cambiar a true, si no lo encuentra va conservar el valor t(que seria la tarea.). Todo esto devolvera un nuevo arreglo ese nuevo arreglo sera de setTasksItems.

//   useEffect(() => {
//     let data = localStorage.getItem('tasks')
//     if (data) {
//       setTasksItems(JSON.parse(data))
//     }
//   },[])
//   //Le vamos a decir que cuando cargue la aplicacion inicialmente va ejecutar lo de adentro de las llaves.Entonces ahi decimos que si tiene algo, lo convertimos en stringify para recrearlo y luego pasarlo a las tareas[311]

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasksItems));
//   }, [tasksItems]);

//   return (
//     <div className="App">
//       <TaskCreator createNewTask={createNewTask} />
//       <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>

//       <div>
//         <input type="checkbox" onChange={e=> setShowCompleted(!showCompleted)}/><label>Show Tasks Done</label>  {/* [355]Nos ayuda a ver el titulo de las tareas que faltan por hacer.Lo de !showCompleted hace que si vale un true el show completed y lo ejecutamos va ser false, sino lo coloca true. */}
//       </div>

//       {
//         showCompleted === true ? (
//           <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
//         ) : null
//       } {/* Esto es como  decir si show completed es igual true entonces muestro. Caso contrario es igual a true.*/}
      
//     </div>
//   );
// }

// export default App;
//Si prestamos atencion hay ahora una repetecion de la tabla, y podemos usar esta paa tener dos tablas.
//Con showCompleted es como decir muestrame las tareas que no estan hechas.
//En la primera tabla como no tiene ningun valor es false.Las que faltan por hacer. Y en el segundo muestran las qu estan en true.
//De esta forma mostramos nuevamente el componente de la pantalla.
//------------------------------------------------------------------------------------------
//Eliminar tareas. Primero cortamos la parte de div, dentro del div, en otro compomente, para que haya espacio.
// import { useState, useEffect } from "react";
// import "./App.css";
// import { TaskCreator } from "./components/TaskCreator";
// import {TaskTable} from './components/TaskTable'
// import { VisibilityControl } from "./components/VisibilityControl";

// function App() {
//   const [tasksItems, setTasksItems] = useState([
//   ]);

//   const [showCompleted, setShowCompleted] = useState(false)

//   function createNewTask(taskName) {
//     if (!tasksItems.find((task) => task.name === taskName)) {
//       setTasksItems([...tasksItems, { name: taskName, done: false }]);
//     }
//   }
  
//   const toggleTask = task => {
//     setTasksItems(
//       tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done}: t))
//       );
//   };

//   useEffect(() => {
//     let data = localStorage.getItem('tasks')
//     if (data) {
//       setTasksItems(JSON.parse(data))
//     }
//   },[])

//   const cleanTasks = () => {
//     setTasksItems(tasksItems.filter(task => !task.done))
//     setShowCompleted(false)/* Esto ara que el Show Tasks Done tambien cambie a false para que este oculto. */
//   }
//     /* No vamos a eliminar todas las tareas, solo las tareas que ya fueron hechas, entonces vamos a tner que utilizar un filter. Vamos a buscar de todas las tareas que estan en el arreglo, vamos hacer un filter y por cada una de las tareas vamos a buscar las que de su propiedad done estan en true. Por cada una de estas tareas no queremos retornar si estan hechas sino vamos retornar las que no estan hechas, entonces colocamos un signo de admiracion. Lo unicoq ue estamos haciendo es quitar las taras que ya fueron hechas de el arreglo. Pero esto no lo establece en el estado, para establecer hay que ponerle setTaskItems (Para cuando lo veas ya estara hecho.).Entonces al cambiar esto se va establecer y las tareas que fueron hechas van a quedar fuera del estado y fuera del local storage. Ahora lo unico que falta es ejecutar esta funcion en el botn clear. Entonces le pasamos el clear Tasks en visibility control,esto en la etiquete de visibility aqui en app. Luego ir a vibilitu control.js y conectamos el cleanTasks.Luego ir a ver en [5] en visibilitytasks*/

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasksItems));
//   }, [tasksItems]);

//   return (
//     <div className="App">
//       <TaskCreator createNewTask={createNewTask} />
//       <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
//       <VisibilityControl
//         isChecked={showCompleted}
//         setShowCompleted={(checked) => setShowCompleted(checked)}
//         cleanTasks={cleanTasks}
//       />{/*El visibilitu control antes utilizaba una funcion llamda setShowCompleted, esta funcion actualizaba el estado en app y tenemos que pasarle ese valor de alguna forma. Podriamos pasarle una prpiedad, un nombre. ENtonces al recibir este parametro es que esta recibiendo una forma de actualizar el estado de set showCompleted [389] y para usarlo vamos a visibility control y conectamos el setShowCompleted. Dentro del objeto de show completed va recibir un parametro y una funcion llamda checked y lo va establecer como valor del setShowCompleted. De esta forma evitamos pasrle el el setshowCompleted[389. Esta funcion se llama setShowCompleted en Visibility control, pero aqui se llama checked.Entonces yendo a [11.Visibility control]*/}
//       {/* Tambien le podemos mostrar el valor de que si esta marcado o no.Con ischecked. Entonces si el show completed si ya cambio a true va mostrar va mostrar marcado tambien el show tasks done sino lo va dejar en false. tambien tenemos que mandar este ischecked a visibility control.*/}

//       {
//         showCompleted === true ? (
//           <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
//         ) : null
//       }
//     </div>
//   );
// }

// export default App;
//------------------------------------------------------------------------------------------
//[Estilizar nuestra aplicacion.][Va usar get boostrap por que quiere esterilizar mas rapido] npm i bootstrap@5.2.1 Pegamos ese codigo en la terminal. En index.js ponemos: import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import {TaskTable} from './components/TaskTable'
import { VisibilityControl } from "./components/VisibilityControl";
import {Container} from "./components/Container"

function App() {
  const [tasksItems, setTasksItems] = useState([
  ]);

  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }
  
  const toggleTask = task => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done}: t))
      );
  };

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  },[])

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
          <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
          <VisibilityControl
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
          />
          {
            showCompleted === true ? (
              <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
            ) : null
          }
      </Container>
    </main>
  );
}

export default App;
