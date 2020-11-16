import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AppsIcon from '@material-ui/icons/Apps';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  // TODO trasform all with Tailwindcss
  return (

    <div className="flex flex-row"
      value={value}
      onChange={(event, newValue) => { setValue(newValue) }}
    >
      <button className="px-2 py-1 m-1 text-white bg-teal-500 border rounded-lg hover:bg-green border-blue hover:border-black">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg> */}
        <AppsIcon />
        <span className="text-xs">Apps</span>
      </button>

      <button className="px-2 py-1 m-1 text-white bg-teal-500 border rounded-lg hover:bg-green border-blue hover:border-black">
        <SettingsIcon /><span className="text-xs">Settings</span>
      </button>

      <button className="px-2 py-1 m-1 text-white bg-teal-500 border rounded-lg hover:bg-green border-blue hover:border-black">
        <SettingsRemoteIcon /><span className="text-xs">Remote controls</span>
      </button>



    </div>
  )
}
