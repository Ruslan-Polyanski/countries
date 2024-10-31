import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ICountryData } from '../types/global';
import style from './CardCountry.module.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PeopleIcon from '@mui/icons-material/People';

const CardCountry: FC<ICountryData> = ({emoji, capital, currency, continent, name, phone, languages}) => {

  return (
      <Card sx={{ maxWidth: 400, minWidth: 300 }}>
        <div className='emoji'>{emoji}</div>

        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <div className={style['cap-box']}>
            <Typography gutterBottom component="div">
              {capital}
            </Typography>
            <Typography gutterBottom component="div">
              {continent?.name}
            </Typography>
          </div>

          <div className={style['data-box']}>
              <div className={style['phone-box']}>
                <LocalPhoneIcon fontSize='small'/>
                <Typography sx={{marginLeft: '5px'}}>
                  {phone}
                </Typography>
              </div>
              
              <div className={style['coin-box']}>
                <CurrencyBitcoinIcon fontSize='small'/>
                <Typography sx={{ color: 'text.secondary', marginLeft: '5px' }}>
                  {currency}
                </Typography>
              </div>
          </div>

          <div className={style['lang-box']}>
            <PeopleIcon />
            {languages.map((lang, index) => {
              return <Typography key={index} sx={{ color: 'text.secondary', marginLeft: '10px' }}>{lang.name}</Typography>
            })}
          </div>
        </CardContent>
    </Card>
  )
}

export { CardCountry }