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
      <BannerCard>
        <BannerLink to={item.url} target='_blank'>
          <BannerImg image={item.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </BannerLink>
      </BannerCard>
    </BannerContainer>
  )
};

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerCard = styled(Card)`
  width: 500px;
  height: 320px;
`

const BannerLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const BannerImg = styled(CardMedia)`
  height: 200px;
`

export default Banner;
