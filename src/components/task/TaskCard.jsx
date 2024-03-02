import React from "react";

export const TaskCard = ({ dataCardItem, deleteCard }) => {
  return (
    <>
      <div className="col-sm-3 gy-3 gx-3">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title ">Tarea N°: {dataCardItem.id} </h5>
            <p className="card-text"> Comentario: {dataCardItem.taskTitle} </p>
            <p className="card-text" type="password">
              {" "}
              Valoracion: {dataCardItem.asterisc}{" "}
            </p>

            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => deleteCard(dataCardItem.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//El componente recibe por parametro la funcion dataCardItem que campura el item de la funcion map en le componente padre
