import React from "react";
import { Grid, Paper } from "@mui/material";
import UserContext from "./_common/context/UserContext";
import ListDataService from "./_common/services/ListService";
import AddItem from "./_common/components/AddItem";
import List from "./_common/components/List";
import LoadingList from "./_common/Loading/LoadingList";
import { db } from "./_common/services/firebase";
import { collection, where, query, onSnapshot } from "@firebase/firestore";

function TodoList() {
  const { data } = React.useContext(UserContext);
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let rows = [];
    const listRef = collection(db, "list");
    if (data) {
      console.log(data.uid);
      const q = query(listRef, where("user", "==", `${data.uid}`));
      const querySnapshot = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          rows.push({ id: doc.id, ...doc.data() });
        });
      });
      setList(rows);
      setLoading(false);
    }
  }, [data]);

  return (
    <div>
      <Paper elevation={5} sx={{ padding: "20px", marginTop: "0 auto" }}>
        <h1>Todo list App</h1>
        <Grid direction="column" container spacing={5}>
          <AddItem addItemToList={setList} />
          {loading ? (
            <LoadingList />
          ) : (
            <Grid item xs={12} md={6}>
              <List list={list} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoList;
