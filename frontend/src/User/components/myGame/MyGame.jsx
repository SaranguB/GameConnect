import { Card } from '@mui/material'
import React from 'react'
import { Box, } from '@mui/material'

const MyGame = () => {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

        <Card sx={{ p: 10, backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'center', gap: 5 }}>
          <Card sx={{padding:2}}>

            <div style={{alignContent:'center',alignItems:'center'}}><h1>Play List</h1>
            </div>
            <button> <Card sx={{  border: 'none', cursor: 'pointer', }}>
              <img src='https://www.yourdecoration.com/cdn/shop/products/gbeye-fp4959-assassins-creed-valhalla-standard-edition-poster-61x91-5cm_8ca28556-193e-4545-be19-04d2d5109202.jpg?v=1701783151'
                style={{ height: 300 }}
                alt=''></img>
            </Card></button>
            <button> <Card sx={{ gap: 10,cursor: 'pointer' }}>
              <img src='https://www.yourdecoration.com/cdn/shop/products/gbeye-fp4959-assassins-creed-valhalla-standard-edition-poster-61x91-5cm_8ca28556-193e-4545-be19-04d2d5109202.jpg?v=1701783151'
                style={{ height: 300 }}
                alt=''></img>
            </Card ></button>
            <button><Card sx={{ cursor: 'pointer' }}>
              <img src='https://www.yourdecoration.com/cdn/shop/products/gbeye-fp4959-assassins-creed-valhalla-standard-edition-poster-61x91-5cm_8ca28556-193e-4545-be19-04d2d5109202.jpg?v=1701783151'
                style={{ height: 300 }}
                alt=''></img>
            </Card>
            </button>
          </Card>
        </Card>
      </Box>
    </div>
  )
}

export default MyGame