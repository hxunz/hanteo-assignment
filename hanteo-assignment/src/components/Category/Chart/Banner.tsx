import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

type Props = {
  item: {
    url: string,
    img: string,
    name: string,
    description: string,
  };
}

const Banner: React.FC<Props> = ({ item }) => {
  return (
    <Link to={item.url} target='_blank' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: 500, height: 320 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
};

export default Banner;
