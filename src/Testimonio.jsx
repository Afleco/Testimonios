import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Testimonio({ nombre, cargo, imagen, testimonio, altImagen }) {
  const [meGusta, setMeGusta] = useState(false);

  return (
    <Card sx={{ width: '100%', maxWidth: 600, marginBottom: 4, boxShadow: 3 }}>
      <CardMedia component="img" height="400"  image={imagen} alt={altImagen} />
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {nombre}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontStyle: 'italic', color: 'text.secondary', mb: 2 }}>
          {cargo}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', color: 'text.secondary', mb: 2 }}>
          {testimonio}
        </Typography>
        <IconButton 
          onClick={() => setMeGusta(!meGusta)} 
          sx={{ 
            color: meGusta ? '#e91e63' : '#757575',
            p: 0,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'transparent',
              transform: 'scale(1.15)'
            },
            '&:focus': {
              outline: 'none'
            },
            '&:active': {
              transform: 'scale(0.95)'
            }
          }}
          disableRipple
          disableFocusRipple
          disableTouchRipple
        >
          {meGusta ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default Testimonio;