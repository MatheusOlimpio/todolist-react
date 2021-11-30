import { List as Lista } from "@mui/material";
import React from "react";
import ListItemTask from "./ListItemTask";

function List({ list }) {
  return (
    <div>
      <h1>Lista</h1>
      {list.length > 0 ? (
        <Lista sx={{ maxWidth: "600px" }}>
          {list.map((item, index) => (
            <ListItemTask item={item} key={index} />
          ))}
        </Lista>
      ) : (
        <p>Nenhuma tarefa</p>
      )}
    </div>
  );
}

export default List;
