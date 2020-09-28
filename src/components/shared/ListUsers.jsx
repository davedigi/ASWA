import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Switch from "@material-ui/core/Switch";
import WifiIcon from "@material-ui/icons/Wifi";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListUsers() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [radiochecked, setRadioChecked] = React.useState("wifi");

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleToggleRadio = (value) => () => {
    const currentIndex = radiochecked.indexOf(value);
    const newChecked = [...radiochecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setRadioChecked(newChecked);
  };

  return (
    <div className="mt-8 w-full rounded bg-white shadow max-w-2xl flex-row items-center px-10">
      <h1 className="text-xl font-bold mb-3">Buyers in the stand</h1>
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map((value) => {
          // TODO: inserire un modello di acquirenti valido
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={`Buyer number ${value + 1}`}
              />
              <ListItemSecondaryAction>
                <WifiIcon />
                <Switch
                  edge="end"
                  onChange={handleToggleRadio("wifi")}
                  radiochecked={
                    radiochecked.indexOf("wifi") !== -1 ? "true" : "false"
                  }
                  inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
                />

                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
                <span>Banker's Credit</span>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
