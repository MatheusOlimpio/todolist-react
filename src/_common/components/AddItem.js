import { Button, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import ListDataService from "../services/ListService";
import UserContext from "../context/UserContext";
import AlertSuccess from "./Alert/AlertSuccess";
function AddItem() {
  const [task, setTask] = React.useState();
  const [success, setSuccess] = React.useState(null);
  const [openMessage, setOpenMessage] = React.useState(false);
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
      await list.create(data.uid, task);
      setSuccess("Tarefa adicionada com sucesso!");
      setOpenMessage(true);
    } catch (error) {
      setSuccess(null);
    } finally {
      setTask("");
      setOpenMessage(false);
    }
  };

  return (
    <Grid item direction="row" alignItems="center" container spacing={2}>
      <AlertSuccess openMessage={openMessage} message={success} />
      <Grid item xs={12} md={5}>
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
