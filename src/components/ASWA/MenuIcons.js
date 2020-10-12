import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
                
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Apps" icon={<AppsIcon />} />
        <BottomNavigationAction label="Impostazioni" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Telecomandi" icon={<SettingsRemoteIcon />} />
      </BottomNavigation>
    </div>
  );
};
