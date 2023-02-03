import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import { router } from 'src/routes';

function Category() {
  const location = useLocation();

  const handleClickCategory = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <AppBar>
        <CategoryBox>
          {router.map(({
            path,
            name
          }) => (
            <Categories
              to={path}
              isActive={location.pathname === `${path}`}
              onClick={handleClickCategory}
            >
              {name}
            </Categories>
          ))}
        </CategoryBox>
      </AppBar>
    </>
  );
}

const CategoryBox = styled(Box)`
  display: flex;
  background-color: #FFB0B2;
`

const Categories = styled(Link) <{ isActive: boolean }>`
  color: ${props => props.isActive ? 'white' : 'black'};
  text-decoration: none;
  font-weight: bold;
  margin: 2rem 0 1rem 2rem;
`

export default Category;