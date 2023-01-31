import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CarouselChart = (props) => {
  return (
    <Link to={props.item.url} target='_blank' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 500, height: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={props.item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
};

export default CarouselChart;
