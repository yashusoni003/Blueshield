import { Fragment } from 'react';
import { Avatar, AvatarGroup, Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../home/home.style.scss'



const Home = () => {

  console.log("jjj")
const cards = [1,2,3]

  return (
    <Fragment>
      <Box className="DisplayImage" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h3' sx={{ color: "white", width: "70%", textAlign: "center", fontFamily: "Rowdies", fontSize: { xs: '2rem', sm: '3rem' } }} >Electricity bills? Never heard of them.BlueShield Energies  has changed the game!</Typography>
        <Typography variant='h6' sx={{ textAlign: 'center', color: 'white', width: '50%', marginTop: '1rem', fontFamily: 'Zain' }}>Let the sun fuel your home while you focus on what truly matters and say goodbye to rising electricity bills forever.</Typography>
        <Button sx={{ background: '#42f72d', borderRadius: '21px', fontFamily: 'Zain', textTransform: 'none', color: '#0f6000', fontWeight: '600', marginTop: '1rem', letterSpacing: '1px' }}>&rarr; Get A Free Quote</Button>
      </Box>
      <Box sx={{ width: { sm: '80%', xs: '100%' }, display: 'flex', marginTop: '3rem', padding: '2rem', flexDirection: { xs: 'column', sm: 'row' } }}>

        <motion.Box sx={{ display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        >


          <Typography variant='h6' sx={{ color: '#13a8ff', width: '10rem', background: '#d2edfd', padding: '0.3rem', borderRadius: '15px' }} >&#9679; About Us</Typography>


          <Typography variant='h4' sx={{ marginTop: '2rem', color: '#015789', fontFamily: 'Cinzel', width: '27rem', fontSize: { xs: '2rem', sm: '2.125rem' } }}>Blueshield Energies</Typography>


          <Typography variant='h6' sx={{ fontFamily: 'Zain', width: { sm: '60%', xs: '100%' } }}>

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


          <Button sx={{ color: 'white', background: '#13a8ff', borderRadius: '8px', width: '10rem', marginTop: '2rem', textTransform: 'none', fontFamily: 'Zain', letterSpacing: '1px', fontSize: '18px' }}> Learn More  &rarr;</Button>

        </motion.Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>

          <Box
            component="img"
            src="/AboutUs.jpg"
            alt="Description"
            sx={{ width: { sm: "50%", xs: "100%" }, height: { sm: "auto", xs: '20rem' }, marginTop: { sm: '0rem', xs: '1rem' }, borderRadius: '8px', }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <Box sx={{
              borderRadius: '17px', background: '#13A8ff',
              width: { sm: '20rem', xs: '100%' },
              height: '15rem',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: { sm: '2rem', xs: '0rem' },
              marginTop: { sm: '0rem', xs: '1rem' },
              alignItems: 'flex-start',
              padding: '1rem',
              flexDirection: 'column',
              color: 'white'
            }}
              component={motion.div}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
            >
              <Typography variant='h4' sx={{ textAlign: 'center' }}>95% <span style={{ fontSize: '17px' }}>Success</span></Typography>
              <Typography variant='h6' sx={{ fontSize: '12px', marginTop: '3rem' }}>With a 95% success rate, we don’t just install solar panels—we guarantee results. Trusted by customers nationwide, our expertise ensures seamless, efficient, and cost-effective solar solutions that truly make a difference.</Typography>
            </Box>

            {/* <Box sx={{
              borderRadius: '17px', background: 'transparent',
              width: { sm: '20rem', xs: '100%' },
              height: '15rem',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: { sm: '2rem', xs: '0rem' },
              marginTop: '2rem',
              flexDirection: 'column',
              padding: '1rem',
              position: { xs: 'none', sm: 'relative' },
              right: { xs: '0rem', sm: '8rem' },
              backdropFilter: 'blur(9px)',
              alignItems: { sm: 'flex-start', xs: 'flex-end' },
              color: '#13A8ff'
            }}
              component={motion.div}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
            >
              <Typography variant='h4' sx={{ textAlign: 'center' }}>200+ <span style={{ fontSize: '17px' }}>Customers</span></Typography>

              <Typography variant='h6' sx={{ fontSize: '12px', marginTop: '3rem', textAlign: { xs: 'end', sm: 'start' } }}>We take pride in serving over 50+ customers across India, delivering reliable and efficient solar solutions. Our commitment to quality and innovation powers homes and businesses nationwide.</Typography>
            </Box> */}
          </Box>

        </Box>


      </Box>
      <Box sx={{ width: "100%", background: '#e7f2ff', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '80%', marginTop: '1rem' }}>
          <Typography variant='h6' sx={{ color: '#13a8ff', width: '10rem', background: '#d2edfd', padding: '0.3rem', borderRadius: '15px' }} >&#9679; Services</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h4' sx={{ color: '#015789' }}>Our Solar Solutions</Typography>
            <Typography variant='h6'>We belive in the power of solar energy to transform lives and communities</Typography>
          </Box>


          <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'space-between'}}>

           
           {
cards.map(()=>(
            <Box sx={{width:'340px'}}>

              <Card sx={{ maxWidth: 345  }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="340"
                    image="/AboutUs.jpg"
                    alt="green iguana"
                  />
                  <CardContent sx={{position:'absolute',top:'17rem',left:'0',color:'white'}}>
                    <Typography gutterBottom variant="h5" component="div">
                      Residential Solar
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%',width:'5rem',height:'5rem',position:'relative',top:'-73px',left:'284px',background:'#E7F2FF'}}>
                 <Button sx={{borderRadius:'50%',background:'#13A8ff',position:'relative',width:'4rem',height:'4rem'}}><ArrowOutwardIcon sx={{color:'white'}}/></Button>

                </Box>


            </Box>)
)
}

          </Box>


        </Box>
      </Box>
    </Fragment>
  )

}


export default Home;