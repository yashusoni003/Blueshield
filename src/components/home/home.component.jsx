import { Fragment } from 'react';
import { Avatar, AvatarGroup, Box, Button, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import '../home/home.style.scss'



const Home = () => {

  console.log("jjj")

  return (
    <Fragment>


      <Box className="DisplayImage" sx={{ display: 'flex', flexDirection: 'column' }}>


        <Typography variant='h3' sx={{ color: "white", width: "70%", textAlign: "center", fontFamily: "Rowdies", fontSize: { xs: '2rem', sm: '3rem' } }} >Electricity bills? Never heard of them.BlueShield Energies  has changed the game!</Typography>

        <Typography variant='h6' sx={{ textAlign: 'center', color: 'white', width: '50%', marginTop: '1rem', fontFamily: 'Zain' }}>Let the sun fuel your home while you focus on what truly matters and say goodbye to rising electricity bills forever.</Typography>


        <Button sx={{ background: '#42f72d', borderRadius: '21px', fontFamily: 'Zain', textTransform: 'none', color: '#0f6000', fontWeight: '600', marginTop: '1rem', letterSpacing: '1px' }}>&rarr; Get A Free Quote</Button>
      </Box>


      <Box sx={{ display: 'flex', marginTop: '3rem', padding: '2rem' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>


          <Typography variant='h6' sx={{ color: '#13a8ff', width: '12%', background: '#d2edfd', padding: '0.3rem', borderRadius: '15px' }} >&#9679; About Us</Typography>


          <Typography variant='h4' sx={{ marginTop: '2rem', color: '#015789', fontFamily: 'Cinzel' }}>Blueshield Energies</Typography>


          <Typography variant='h6' sx={{ fontFamily: 'Zain', width: '60%' }}>

            Blueshield Energies is dedicated to making solar power simple, affordable, and accessible. We provide high-quality solar installations that help you cut electricity costs, reduce carbon footprints, and gain energy independence. With expert solutions tailored to your needs, we turn sunlight into savings—because the future is solar, and we’re here to power it.

          </Typography>


          <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ color: '#ebc600' }} />  Excellant 4.8 / 5  |  <AvatarGroup total={54}>
              <Avatar alt="Remy Sharp" src="/avatar1.jpg" />
              <Avatar alt="Travis Howard" src="/avatar2.jpg" />
              <Avatar alt="Agnes Walker" src="/avatar3.jpg" />
              <Avatar alt="Trevor Henderson" src="/avatar4.jpg" />
            </AvatarGroup>
          </Typography>


          <Button sx={{ color: 'white', background: '#13a8ff', borderRadius: '8px', width: '15%', marginTop: '2rem', textTransform: 'none', fontFamily: 'Zain', letterSpacing: '1px', fontSize: '18px' }}> Learn More  &rarr;</Button>

        </Box>

        <Box sx={{ display: 'flex' }}>

          <Box
            component="img"
            src="/AboutUs.jpg"
            alt="Description"
            sx={{ width: "50%", height: "auto", borderRadius: '8px' }}
          />

          <Box>

            <Box sx={{ borderRadius: '17px',background:'beige',
    width: '20rem',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '2rem',
    alignItems: 'center' }}>
              <Typography variant='h4' sx={{textAlign:'center'}}>50+ Customers satiesfied acrros PAN India</Typography>
            </Box>

            <Box sx={{ borderRadius: '17px',background:'beige',
    width: '20rem',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '2rem',
    alignItems: 'center' }}>
              <Typography variant='h4' sx={{textAlign:'center'}}>50+ Customers satiesfied acrros PAN India</Typography>
            </Box>
          </Box>

        </Box>


      </Box>

    </Fragment>
  )

}


export default Home;