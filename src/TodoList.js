import React from "react";
import { Grid, Paper } from "@mui/material";
import UserContext from "./_common/context/UserContext";
import ListDataService from "./_common/services/ListService";
import AddItem from "./_common/components/AddItem";
import List from "./_common/components/List";
import LoadingList from "./_common/Loading/LoadingList";
import { db } from "./_common/services/firebase";

function TodoList() {
  const { data } = React.useContext(UserContext);
  const [userData, setUserData] = React.useState([]);
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const listRef = collection(db, "list");

  const user = React.useCallback(() => {
    if (data) {
      setUserData(data);
      return data;
    }
  }, [data]);

  React.useEffect(() => {
    const listItems = [];
    const userId = user() ? user().uid : "";

    db.collection("list")
      .where("user", "==", userId)
      .orderBy("create_at", "desc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(data);
      });
  }, [user]);

  React.useEffect(() => {
    if (list && list.length > 0) {
      setLoading(false);
    }
    console.log(list);
  }, [list]);

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
