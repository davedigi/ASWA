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
    <div className="flex-row items-center w-full max-w-2xl px-10 mt-8 bg-white rounded shadow">
      <h1 className="mb-3 text-xl font-bold">Buyers in the stand</h1>
      <List dense className={classes.root}>
        {["Alex", "David", "Annie", "LadyGaga"].map((value, idx) => {
          // TODO: inserire un modello di acquirenti valido
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={idx} button>
              <ListItemAvatar>
                <div className="relative w-10 h-10">
                  <img
                    className="border border-gray-100 rounded-full shadow-sm"
                    // src={`/assets/buyer/static/img/avatar/${idx + 1}.jpg`}
                    src={`https://randomuser.me/api/portraits/women/${idx + 1}.jpg`}
                    alt="supplier"
                  />
                  <div className="absolute top-0 right-0 w-3 h-3 my-1 bg-green-400 border-2 border-white rounded-full z-2"></div>
                </div>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value}`} />
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
