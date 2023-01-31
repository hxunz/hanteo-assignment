import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const pages = ['차트', 'Whook', '이벤트', '뉴스', '스토어', '충전소'];

function Category() {

  return (
    <AppBar>
      <Box sx={{ display: 'flex', backgroundColor: '#FFB0B2' }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: 'white' }}
          >
            {page}
          </Button>
        ))}
      </Box>

    </AppBar>
  );
}
export default Category;