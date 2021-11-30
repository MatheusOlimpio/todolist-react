import { Alert, Button, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import ListDataService from "../services/ListService";
import UserContext from "../context/UserContext";
function AddItem({ addItemToList }) {
  const [task, setTask] = React.useState();
  const [success, setSuccess] = React.useState(null);
  const { data } = React.useContext(UserContext);
  function handleTask() {
    if (!task || task.length === 0) {
      setTask("");
      return false;
    }
    addTask();
  }

  const addTask = async () => {
    try {
      const list = new ListDataService();
      const newItem = await list.create(data.uid, task);
      addItemToList((oldItems) => [...oldItems, newItem]);
      setSuccess("Tarefa adicionada com sucesso!");
    } catch (error) {
      setSuccess(null);
    }
  };

  return (
    <Grid item direction="row" alignItems="center" container spacing={2}>
      <Grid item xs={12} md={5}>
        {success && <Alert severity="success">{success}</Alert>}
        <FormControl sx={{ width: "100%" }}>
          <TextField
            multiline
            maxRows={4}
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </FormControl>
      </Grid>
      <Grid item>
        <Button size="large" variant="contained" onClick={handleTask}>
          Add task
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddItem;
