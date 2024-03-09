import { FC } from 'react';
import { Stack } from '@mui/material';
import { categories } from '@/utils/Constants';

const SideBar: FC = () => {
    const selectedCategory = 'New'
    const allCategories =()=>{
      return  categories.map((category)=>{
        const Icon = category.icon
        return (
            <button key={category.name}
            className='category-btn'
            style={{
                background:category.name === selectedCategory?"#FC1503":'',
                color:'white'
            }}
            >
              <span    style={{
                color:category.name === selectedCategory?"white":'red',
                marginRight: '15px'
            }}><Icon /></span>
              <span  style={{
                opacity:category.name === selectedCategory?"1":'0.8',
            }}>{category.name}</span>
            </button>
          );
        })
    }
  return (
    <Stack
    direction='row'
    sx={{
        overflowY:'auto',
        height:{sx:'auto', md:'95%'},
        flexDirection:{md:'column'},

    }}
    >
{allCategories()}   
 </Stack>
  );
};

export default SideBar;