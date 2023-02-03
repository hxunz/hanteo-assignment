import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Category() {
  return (
    <>
      <AppBar>
        <Box sx={{ display: 'flex', backgroundColor: '#FFB0B2' }}>
          <Button sx={{ my: 2, color: 'white' }} href='/chart'>
            차트
          </Button>
          <Button sx={{ my: 2, color: 'white' }} href='/Whook'>
            Whook
          </Button>
          <Button sx={{ my: 2, color: 'white' }} href='/event'>
            이벤트
          </Button>
          <Button sx={{ my: 2, color: 'white' }} href='/news'>
            뉴스
          </Button>
          <Button sx={{ my: 2, color: 'white' }} href='/store'>
            스토어
          </Button>
        </Box>
      </AppBar>
    </>
  );
}

const CustomButton = styled(Button)`

`
export default Category;