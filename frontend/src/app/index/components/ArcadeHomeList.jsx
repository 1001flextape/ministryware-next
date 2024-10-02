import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Next.js Image component
import bounceImage from '../../../public/images/bouncing_ball_game_arcade_style-crop.jpg'; // Ensure image path is correct

// Arcade Card styles
const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '20px auto',
  backgroundColor: '#222', // Dark arcade background for card
  color: '#fff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Give it a cool shadow
  cursor: "pointer",
});

// ArcadeHomeHero Component
const ArcadeHomeList = () => {
  const router = useRouter();

  return (
    <Box>
      {/* Game Cards */}
      <Grid container spacing={2} justifyContent="center" sx={{ paddingTop: 2 }}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography
              variant="body1"
              component="div"
              sx={{
                padding: "0 23px",
                fontStyle: 'italic',
                fontSize: '18px',
                color: "#555",
              }}
            >
              The Bill Wilson and Dr. Bob Smith arcade.
            </Typography>
          </div>
          <StyledCard onClick={() => router.push('/arcade/bounce/')}>
            <CardMedia>
              <Image
                src={bounceImage}
                alt="Bounce Game"
                height={140} // Ensure height is specified
                layout="responsive" // Better for responsive design
                objectFit="cover" // Ensure the image fits nicely within the bounds
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bounce
              </Typography>
              <Typography variant="body2" color="white">
                Bounce is a fun and addictive arcade game where you use a paddle to bounce a ball and break all the blocks.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArcadeHomeList;
