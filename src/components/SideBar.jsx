import React from 'react'
import { height, Stack } from '@mui/system'
import { categories } from '../utils/const'

function SideBar({selectedCategory, setSelectedCategory}) {

  return (
    <Stack
        direction="row"
        sx={{
            overflowY : "auto",
            height : {sx : 'auto', md: '95%' },
            flexDirection : {md: 'column'},
        }}
        style={{height: "-webkit-fill-available"}}
    >
        {
            categories.map((category)=>(
                <button className='category-btn' style = {{
                    background: category.name === selectedCategory && '#FC1503',
                    color : "white"
                 }} onClick  = {()=>{setSelectedCategory(category.name)} }
                 key={category.name}
                 >
                    <span style = {{ paddingRight : '8px', 
                        color : category.name === selectedCategory ? 'white' : '#FC1503'
                    }} >{category.icon}</span>
                    <span style = {{opacity : category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default SideBar