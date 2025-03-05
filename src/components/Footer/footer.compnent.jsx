import { Box, Divider, Typography } from "@mui/material";
import { Fragment } from "react"
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Footer = () => {


    return (

        <Fragment>

            <Box sx={{ width: '100%', background: '#015789', display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:'column' }}>


                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', color: 'white', alignItems: 'start',padding:'1rem' }}>


                    <Box sx={{ display: 'flex', flexDirection: 'column',width:'26%',rowGap:'1rem' }}>
                        <Typography variant="h5" sx={{fontFamily:'Rowdies'}}>Blueshield Energy</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>BlueShield Energy is committed to powering a sustainable future with cutting-edge solar solutions. Our mission: "Zero Bills, Infinite Energy." we help homes and businesses switch to clean, cost-effective power. Join us in shaping a greener tomorrow!</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column',rowGap:'1rem' }}>

                        <Typography variant="h5"sx={{fontFamily:'Rowdies'}}>Quick Links</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>Project</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>Services</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>About Us</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>Contact Us</Typography>


                    </Box>



                    <Box sx={{ display: 'flex', flexDirection: 'column',rowGap:'1rem' }}>

                        <Typography variant="h5" sx={{fontFamily:'Rowdies'}}>Legals</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>Licence</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>Privacy Policy</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive' }}>Terms & Condition</Typography>


                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column',rowGap:'1rem' }}>

                        <Typography variant="h5"sx={{fontFamily:'Rowdies'}}>Contact Us</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive',display:'flex',columnGap:'10px' }}><PhoneIcon />+91 9601286531</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive',display:'flex',columnGap:'10px' }}><AttachEmailIcon /> yashusoni003@gmail.com</Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem',fontFamily:'cursive',display:'flex',columnGap:'10px' }}><LocationOnIcon /> Palak Park</Typography>


                    </Box>


                        

                </Box>
                    <Divider  orientation="horizontal" sx={{width:'80%',color:'#908e8e'}}/>
                   <Typography variant="h6" sx={{color:'white',fontFamily:'cursive',marginTop:'1rem',fontSize:'1rem'}}>@2025 Blueshield Energy All right reserved </Typography>
            </Box>



        </Fragment>
    )
}


export default Footer;