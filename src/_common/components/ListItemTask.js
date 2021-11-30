import {
  Checkbox,
  IconButton,
  ListItem as Item,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Fade,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../services/firebase";
import { collection, doc, deleteDoc } from "@firebase/firestore";

function ListItemTask({ item }) {
  const handleDelete = async () => {
    const listRef = collection(db, "list");
    await deleteDoc(doc(listRef, item.id));
    return true;
  };

  return (
    <Fade in timeout={1000}>
      <Item
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemButton role={undefined} onClick={() => {}}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={Boolean(item.checked)}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": item.uid }}
            />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </Item>
    </Fade>
  );
}

export default ListItemTask;
