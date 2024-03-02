import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { TaskAdd } from "./TaskAdd";
import { dataCard } from "../../data/Task";

export const Task = () => {
  const [addDataCard, setAddDataCard] = useState(dataCard);
  const [addTask, setAddTask] = useState("");
  const [asterisc, setAsterisc] = useState("");

  //Funciones para TaskCard
  const onChangeTarea = (e) => {
    setAddTask(e.target.value);
    console.log({ addTask });
  };

  const onChangeAsterisc = (e) => {
    setAsterisc(e.target.value);
    console.log(asterisc);
  };

  //Nueva card
  const onClickNewTask = (newValue) => {
    //Genera objeto con los valores que recibe para la card nueva

    const newTaskObj = {
      id: addDataCard[addDataCard.length - 1].id + 1,
      taskTitle: addTask,
      asterisc: "*".repeat(asterisc.length),
    };
    //Almacena el objeto nuevo en el estado del array
    setAddDataCard([...addDataCard, newTaskObj]);

    console.log(newTaskObj);
  };

  const onClickDelete = (id) => {
    //Genera un array nuevo sin el id que elimine
    const newArrCard = addDataCard.filter((item) => item.id != id);
    //Guardo el array en el estado
    setAddDataCard(newArrCard);
  };

  return (
    <div className="container" id="featured-3">
      <div className="row py-5">
        {addDataCard.map((item) => (
          <TaskCard
            key={item.id}
            dataCardItem={item}
            deleteCard={(id) => onClickDelete(id)}
          />
        ))}
      </div>
      <TaskAdd
        onChangeTarea={onChangeTarea}
        onChangeAsterisc={onChangeAsterisc}
        onClickAdd={(newValue) => onClickNewTask(newValue)}
      />
    </div>
  );
};

//Callback
//<TaskAdd onClickPadre={(value) => onClickTaskAdd}

//La funcion map cuando debe devolver elementos html debe hacer un return implicito utilizando () en lugar de {}
//{dataCard.map((item) => ()} por eso item => devuelve ()

//Todas las funciones maps tiene una KEY que identifica cada objeto
//key={id}

//Para generar una card nueva, hay que guardar el array en un useState para poder cambiar su estado
