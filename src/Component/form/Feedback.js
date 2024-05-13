import React from 'react'
import Drawer1 from '../form/Drawer1';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
  

function Feedback() {
  
    
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer1 />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                <div >
                    <div className=' block md:flex mt-20'>
                        <div>
                            <h1 className=' text-3xl'> Please Select FeedBack form!</h1>
                            <h2> Please Share your reviews to improve our system .Thank You!</h2>
                            <img className='h-[100%]' src='https://img.freepik.com/free-vector/people-discussing-media-ratings_74855-6604.jpg?w=740&t=st=1704532902~exp=1704533502~hmac=bce370fddb6fa647d01e43038a66b766eb33ebee074360be9ee01081b937026b ' alt='yogendra' />

                        </div>



                        <div className=' border border-black w-[100%] md:w-[60%] rounded-xl'>
                            <div className='   space-x-3'>
                                <div className='space-x-3'>
                                    <button className=' border rounded mt-5 ml-4 bg-blue-300   hover:bg-blue-800 hover:text-white p-2 min w-[30%] '>Consultant</button>
                                    <button className='border rounded    bg-blue-300  hover:bg-blue-800  hover:text-white p-2 min w-[30%] '> Staff</button>
                                    <button className='border rounded   bg-blue-300  hover:bg-blue-800   hover:text-white p-2 min w-[30%] '> patient</button>

                                </div>                                <div className=' m-3   '>
                                    <FormControl className='w-[96%] space-y-3 '>
                                        <InputLabel id="demo-simple-select-label"> Department</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            size='small'

                                            label="Department"

                                        >
                                            <MenuItem value={10}>Department1</MenuItem>
                                            <MenuItem value={20}>Department2</MenuItem>
                                            <MenuItem value={30}>Department3</MenuItem>
                                        </Select>
                                        <TextField className=''
                                            size='small'
                                            InputProps={{ endAdornment: <SearchIcon className='' /> }}
                                            label='select Template' />
                                    </FormControl>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </Box></Box>

    )
}

export default Feedback
