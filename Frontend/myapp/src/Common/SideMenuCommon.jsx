import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function SideMenu() {
  return (
    <div>
       <div>
      <h1 className='text-xl mt-10 mb-7 text-black'>PRODUCT STATUS</h1>
        <FormGroup className='opacity-60'>
      <FormControlLabel control={<Checkbox defaultChecked />} label="In Stock" />
      <FormControlLabel  control={<Checkbox />} label="On Sale " />
    </FormGroup>
    </div>
    <div>
    <h1 className='text-xl mt-10 mb-7 text-black'>Brands</h1>
        <FormGroup className='opacity-60'>
      <FormControlLabel control={<Checkbox defaultChecked />} label="In Stock" />
      <FormControlLabel  control={<Checkbox />} label="Nespresso" />
      <FormControlLabel  control={<Checkbox />} label="Oreo" />
      <FormControlLabel  control={<Checkbox />} label="Quarker" />
      <FormControlLabel  control={<Checkbox />} label="Welch's" />
    </FormGroup>
    </div>
    </div>
  )
}
