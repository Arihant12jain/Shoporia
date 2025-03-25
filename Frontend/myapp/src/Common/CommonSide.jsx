import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Filter from './FilterRange.jsx';
import SideMenu from './SideMenuCommon.jsx';
import Scr from '../Shot.png';
export default function Products(props) {
  return (
    <div>
      
      <div className=''>
      
        <div className='flex md:flex-col gap-10 md:gap-0 '>
        
            <div>
            <h1 className='text-xl'>PRODUCT CATOGRIES</h1> 
        <FormGroup >

      <FormControlLabel control={<Checkbox defaultChecked />} label={props.Shoes[0]} />
      <FormControlLabel  control={<Checkbox />} label={props.Shoes[1]}/>
      <FormControlLabel control={<Checkbox />} label={props.Shoes[2]} />
      <FormControlLabel control={<Checkbox />} label={props.Shoes[3]} />
      <FormControlLabel control={<Checkbox />} label={props.Shoes[4]} />
      <FormControlLabel control={<Checkbox />} label={props.Shoes[5]}/>
      <FormControlLabel control={<Checkbox />} label={props.Shoes[6]}/>
    </FormGroup>
    </div>
    <div className='md:mt-10'>
        <Filter></Filter>
        <SideMenu></SideMenu>
        <img src={Scr} className='mt-20 md:inline hidden'></img>
    </div>
        </div>
        
    </div>
    </div>
  )
}
