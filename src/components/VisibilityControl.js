// export const VisibilityControl = ({isChecked,setShowCompleted,cleanTasks}) => {

//   const handleDelete = () => {
//         if (window.confirm('¿Estas seguro de querer eliminarlo?')) {
//             cleanTasks()
//         }
//     } /* Primero le preguntamos al usuario si realmente quiere eliminarlo y si le da en true vamos a quitalo  */

//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={(e) => setShowCompleted(e.target.checked)}/* Entonces este recibe un parametro el checked de app,entonces cuando se marque este input en true e.target.checked es el que realmente va cambiar el valor. SI EL input esta marco es true,sino esta marcado es false. Entonces para luego eliminar las tareas, tenemos que crear en app una funcion que permita eliminar[410]*/
//       />{" "}
//       <label>Show Tasks Done</label>

//       <button onClick={handleDelete}>{/* Esto va lanzar una especie de funcion que va quitar todos los elementos, Ahora para usarlo vamos a app, y llamamos el componente.[418 app] */}
//         Clear
//       </button>
//     </div>
//   );
// };
// //Con esto tenemos un input y un label.
//------------------------------------------------------------------------------------------
//[Estilizar nuestra aplicacion.]
export const VisibilityControl = ({isChecked,setShowCompleted,cleanTasks}) => {
    const handleDelete = () => {
          if (window.confirm('¿Estas seguro de querer eliminarlo?')) {
              cleanTasks()
          }
      } 
  
    return (
      <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />{" "}
          <label>Show Tasks Done</label>
        </div>
  
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
          Clear
        </button>
      </div>
    );
  };