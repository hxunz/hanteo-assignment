import styled from '@emotion/styled';
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
    <BannerContainer>
      <Card sx={{ width: 500, height: 320 }}>
        <BannerLink to={item.url} target='_blank'>
          <CardMedia
            sx={{ height: 200 }}
            image={item.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </BannerLink>
      </Card>
    </BannerContainer>
  )
};

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default Banner;
