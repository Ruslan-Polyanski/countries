import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ICountryData } from '../types/global';
import { getFlagToEmoji } from '../utils/getFlagToEmoji';

const CardCountry: FC<ICountryData> = ({emoji, capital, currency, continent, name, phone}) => {
 const flag = getFlagToEmoji(emoji);

  return (
      <Card sx={{ maxWidth: 300, minWidth: 200 }}>
        <div>{flag}</div>
        <div>{emoji}</div>
        <div>{capital}</div>
        <div>{currency}</div>
        <div>{continent?.name}</div>
        <div>{name}</div>
        <div>{phone}</div>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
    </Card>
  )
}

export { CardCountry }