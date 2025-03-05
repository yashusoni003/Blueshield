import { Fragment, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, AvatarGroup, Box, Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Grid2, TextField, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import HomeIcon from '@mui/icons-material/Home';
import FactoryIcon from '@mui/icons-material/Factory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SavingsIcon from '@mui/icons-material/Savings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../home/home.style.scss'
import { ArrowDownward } from '@mui/icons-material';



  const serviceObj = [

    {
      imgLink: '/SolarHome.jpg',
      text: 'Residential Solar',

    },
    {
      imgLink: '/SolarClean.jpg',
      text: 'Solar Panel Cleaning',
    },
    {
      imgLink: '/SolarMaintance.jpg',
      text: 'Solar Panel Maintance'
    }
  ]

  const Home = () => {
    
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <Fragment>
  {/* Quote Form */}

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
               handleClose()

            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column',rowGap:'1rem'}}>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
          required
          id="standard-required"
          label="First Name"
          defaultValue=""
          variant="standard"
        />
            <TextField
          required
          id="standard-required"
          label="Last Name"
          defaultValue=""
          variant="standard"
        />
            <TextField
          required
          id="standard-required"
          label="Phone Number"
          defaultValue=""
          variant="standard"
        /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>

      <Box className="DisplayImage" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h3' sx={{ color: "white", width: "70%", textAlign: "center", fontFamily: "Rowdies", fontSize: { xs: '2rem', sm: '3rem' } }} >Electricity bills? Never heard of them.BlueShield Energy  has changed the game!</Typography>
        <Typography variant='h6' sx={{ textAlign: 'center', color: 'white', width: '50%', marginTop: '1rem', fontFamily: 'Zain' }}>Let the sun fuel your home while you focus on what truly matters and say goodbye to rising electricity bills forever.</Typography>
        <Button sx={{ background: '#42f72d', borderRadius: '21px', fontFamily: 'Zain', textTransform: 'none', color: '#0f6000', fontWeight: '600',fontSize:'1.2rem', marginTop: '1rem', letterSpacing: '1px' }}onClick={handleClickOpen} >&rarr; Get A Free Quote</Button>
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

            <Box sx={{
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
            </Box>
          </Box>

        </Box>


      </Box>
      <Box sx={{ width: "100%", background: '#e7f2ff', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '80%', marginTop: '1rem' }}>
          <Typography variant='h6' sx={{ color: '#13a8ff', width: '10rem', background: '#d2edfd', padding: '0.3rem', borderRadius: '15px' }} >&#9679; Services</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', flexDirection: { xs: 'column', sm: 'row' } }}
            component={motion.div}
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}

          >
            <Typography variant='h4' sx={{ color: '#015789', fontFamily: 'Major Mono Display', marginBottom: { xs: '1rem', sm: '0rem' }, textAlign: { xs: 'center', sm: 'unset' } }}>Our Solar Solutions</Typography>
            <Typography variant='h6' sx={{ fontFamily: 'Zain', width: '21rem', textAlign: 'center', lineHeight: '1' }}>We belive in the power of solar energy to transform lives and communities</Typography>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            {
              serviceObj.map((item) => (
                <Box sx={{ width: '340px' }}
                  component={motion.div}
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="340"
                        image={item.imgLink}
                        alt="green iguana"
                      />
                      <CardContent sx={{ position: 'absolute', top: '17rem', left: '0', color: 'white' }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.text}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', width: '5rem', height: '5rem', position: 'relative', top: '-73px', left: { sm: '284px', xs: '276px' }, background: '#E7F2FF' }}>
                    <Button sx={{ borderRadius: '50%', background: '#13A8ff', position: 'relative', width: '4rem', height: '4rem' }}
                      component={motion.div}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    ><ArrowOutwardIcon sx={{ color: 'white' }} /></Button>
                  </Box>
                </Box>)
              )
            }
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            component={motion.div}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <Button className='ViewServiceBtn' sx={{ background: '#42f72d', borderRadius: '21px', fontFamily: 'Rowdies', padding: '0.7rem', textTransform: 'none', color: '#0f6000', fontWeight: '600', marginTop: '1rem', letterSpacing: '1px' }}

            > View All Services &rarr;</Button>
          </Box>



        </Box>
      </Box>



      <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', padding: '1rem', flexDirection: 'column', alignItems: 'center' }}>


        <Box sx={{ display: 'flex', justifyContent: 'center', width: '80%', flexDirection: 'column', alignItems: 'center' }}>

          <Typography variant='h4' sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}>Illuminating a Sustainable Future with Solar Power</Typography>
          <Box sx={{ backgroundColor: "#e7f2ff", padding: '1rem', borderRadius: '30px', marginTop: '1rem' }}>
            <Typography sx={{ color: '#138Aff', fontFamily: 'Kanit' }}>Goverment Subsudy Initiatve</Typography>
          </Box>
          <Typography sx={{ marginTop: '1rem', fontFamily: 'Kanit', color: '#015789' }}> Get up to 78,000 on Every 3kW Solar Installation</Typography>
        </Box>

        <Box sx={{ display: 'flex', marginTop: '3rem', flexDirection: { xs: 'column', sm: 'row' } }}>

          <Box className="rightPartContainer" sx={{ display: 'flex', flexDirection: 'column', width: '50%', padding: '1rem' }}>
            <Typography variant='h4' sx={{ fontFamily: 'Kanit' }}><span style={{ color: '#015789' }}> Apply Now</span> and Receive Your Subsidy in <span style={{ color: '#015789' }}>90 Days</span></Typography>

            <Typography sx={{ marginTop: '1rem', color: '#5aadff', fontFamily: 'Zain', fontSize: '1.2rem' }}>Total Subsidy for system larger than 3kW capped at Rs 78.000</Typography>

            <Typography sx={{ marginTop: '1rem', color: '#015789', fontFamily: 'Rowdies' }}>Solar Capacity for household</Typography>
            <Box sx={{ flexGrow: 1, marginTop: '1rem' }}>
              <Grid2 container spacing={0} sx={{ borderCollapse: "collapse", boxShadow: 'none', border: '2px solid #13A8ff', borderRadius: '15px', width: '55%', height: '27rem' }} >
                <Grid2 size={4} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '10px 0px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ textAlign: 'center', fontFamily: 'cursive', color: '#015789' }}>Average Monthly Electricity Consuption (unit)</Typography>
                </Grid2>
                <Grid2 size={8} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 10px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ textAlign: 'center', fontFamily: 'cursive', color: '#015789' }}>Suitable Ruftop Solar Plant Capacity</Typography>
                </Grid2>
                <Grid2 size={4} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 0px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{
                    backgroundColor: '#e7f2ff', border: '1px solid #138Aff', borderRadius: '10px', width: "40%",
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}>0-150</Typography>
                  </Box>


                </Grid2>
                <Grid2 size={8} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 0px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{
                    backgroundColor: '#e7f2ff', border: '1px solid #138Aff', borderRadius: '10px', width: "40%",
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}>1-2 kW</Typography>
                  </Box>
                </Grid2>
                <Grid2 size={4} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 0px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{
                    backgroundColor: '#e7f2ff', border: '1px solid #138Aff', borderRadius: '10px', width: "40%",
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}>150-300</Typography>
                  </Box>
                </Grid2>
                <Grid2 size={8} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 0px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{
                    backgroundColor: '#e7f2ff', border: '1px solid #138Aff', borderRadius: '10px', width: "40%",
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}>2-3 kW</Typography>
                  </Box>
                </Grid2>
                <Grid2 size={4} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 0px 0px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{
                    backgroundColor: '#e7f2ff', border: '1px solid #138Aff', borderRadius: '10px', width: "40%",
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}> &#62;300</Typography>
                  </Box>
                </Grid2>
                <Grid2 size={8} sx={{ border: '1px solid #13A8ff', boxShadow: 'none', borderRadius: '0px 0px 10px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{
                    backgroundColor: '#e7f2ff', border: '1px solid #138Aff', borderRadius: '10px', width: "40%",
                    height: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ textAlign: 'center', color: '#015789', fontFamily: 'Rowdies' }}>Above 3 kW</Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
          <Box className="leftPartContainer" sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>

            <Box
              component='img'
              src='/SolarPanel.png'
              sx={{ width: '35rem' }}
            />

            <Box>


              <Typography sx={{ color: '#5aadff', fontFamily: 'Rowdies' }}><span style={{ fontSize: '50PX', color: '#015789' }}>U</span>nlock Maximum Savings with the Government Subsidy!</Typography>

              <Typography sx={{ marginTop: '1rem', color: '#015789', fontFamily: 'Rowdies' }}>78,000x2=1,56,000 </Typography>

              <Typography sx={{ marginTop: '1rem', color: '#5aadff', fontFamily: 'Rowdies' }}>For a 3 kW rooftop solar installation, you could receive a subsidy of *78,000. If you're planning a larger installation, the subsidy scales with each unit-two 3 kW systems would allow a subsidy of ₹1,56,000. Take advantage of this substantial financial support to make solar energy more affordable and accessible for your home or business.</Typography>

            </Box>

          </Box>

        </Box>


      </Box>


      <Box sx={{ width: '100%', background: '#e7f2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: "100%", sm: '60%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '1rem' }}>
          <Typography variant='h4' sx={{ textAlign: 'center', fontFamily: 'Rowdies', color: '#015789' }}>Top Benefits Of Going Solar</Typography>
          <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '2rem' }}>
            <Grid2 size={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'white', padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <RequestQuoteIcon sx={{ width: '10rem', height: '5rem', color: '#015789' }} />
              <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Kanit' }}>Save On Electricity Bills</Typography>
            </Grid2>
            <Grid2 size={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'white', padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <HomeIcon sx={{ width: '10rem', height: '5rem', color: '#015789' }} />
              <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Kanit' }}>Increase Your Home’s Value</Typography>

            </Grid2>
            <Grid2 size={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'white', padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FactoryIcon sx={{ width: '10rem', height: '5rem', color: '#015789' }} />
              <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Kanit' }}>Reduce Pollution</Typography>

            </Grid2>
            <Grid2 size={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'white', padding: '1rem' }}
              component={motion.div}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <MonetizationOnIcon sx={{ width: '10rem', height: '5rem', color: '#015789' }} />
              <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Kanit' }}>Profit From Your Solar Panels</Typography>

            </Grid2>
            <Grid2 size={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'white', padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <EnergySavingsLeafIcon sx={{ width: '10rem', height: '5rem', color: '#015789' }} />
              <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Kanit' }}>Use Energy Guilt-Free</Typography>

            </Grid2>
            <Grid2 size={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: 'white', padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <SavingsIcon sx={{ width: '10rem', height: '5rem', color: '#015789' }} />
              <Typography variant='h5' sx={{ textAlign: 'center', fontFamily: 'Kanit' }}>Earn Tax Credits & Incentives</Typography>

            </Grid2>
          </Grid2>
        </Box>
      </Box>


      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '1rem' }}>
          <Typography variant='h4' sx={{ color: '#015789', fontFamily: 'Rowdies' }}>View FAQ'S About Solar Energy</Typography>
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', rowGap: '1rem', marginTop: '1rem' }}>


            <Accordion sx={{ padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" variant='h5' sx={{ fontFamily: 'Rowdies', color: '#13A8ff' }}>How do solar panels work?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Kanit' }}>
                  Solar panels convert sunlight into electricity using photovoltaic (PV) cells. This electricity can power your home or business, reducing your reliance on the grid.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" variant='h5' sx={{ fontFamily: 'Rowdies', color: '#13A8ff' }}> How long does it take to install solar panels?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Kanit' }}>
                  The installation process typically takes 1-3 days, but the entire process, including permits and approvals, may take a few weeks.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" variant='h5' sx={{ fontFamily: 'Rowdies', color: '#13A8ff' }}>Do solar panels work on cloudy or rainy days?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Kanit' }}>
                  Yes, but efficiency may be reduced. Solar panels still generate electricity in indirect sunlight, though at a lower capacity.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" variant='h5' sx={{ fontFamily: 'Rowdies', color: '#13A8ff' }}>What is the lifespan of solar panels?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Kanit' }}>
                  Most solar panels last 25-30 years, with some continuing to generate power beyond that period at reduced efficiency.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" variant='h5' sx={{ fontFamily: 'Rowdies', color: '#13A8ff' }}>How much maintenance do solar panels require?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Kanit' }}>
                  Very little. Routine cleaning and occasional inspections ensure optimal performance.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ padding: '1rem', borderRadius: '10px' }}
              component={motion.div}
              initial={{ x: -350, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" variant='h5' sx={{ fontFamily: 'Rowdies', color: '#13A8ff' }}>Can solar panels be installed on any type of roof?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Kanit' }}>
                  Solar panels can be installed on most roof types, but factors like angle, material, and shading affect suitability. Our experts will assess your roof before installation.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>

    </Fragment>
  )

}


export default Home;