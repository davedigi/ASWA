import React from 'react';
import TextField from "@material-ui/core/TextField";

export const FlowerDescr = (props) => (
   <TextField className="mb-3 text-3xl font-bold" helperText="F2 help" fullWidth // margin="normal"
      tabIndex={1}
      // InputLabelProps={{
      //     shrink: true,
      // }}
      // required
      // label="Required"
      // defaultValue="Flower name"
      id="flowerDescr" value={props.flowerDescr || ''} 
      onChange={e => props.onChangeHandler(e)}
      onBlur={e => props.onBlurHandler(e)} 
      onKeyDown={e => props.onKeyDown(e)} 
      />
);
