//import { useState } from "react";
export const TaskAdd = ({
  addTask,
  asterisc,
  onChangeTarea,
  onChangeAsterisc,
  onClickAdd,
}) => {
  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
          value={addTask}
          onChange={onChangeTarea}
        />
      </div>
      <div className="mb-3 col-5">
        <input
          type="password"
          className="form-control"
          placeholder="Agregar valoracion"
          value={asterisc}
          onChange={onChangeAsterisc}
        />
      </div>
      <div className="mb-3 col-5">
        <button
          className="btn btn-success"
          onClick={(value) => onClickAdd(value)}
        >
          AGREGAR
        </button>
      </div>
    </>
  );
};
//Esta funcion realiza un callback. Esto es cuando se quiere pasar un valor por una funcion
//onClick={() => onClickPadre()}
