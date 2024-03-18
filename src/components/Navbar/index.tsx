import SearchBar from '@/components/SearchBar';
import { LOGO } from '@/utils/Constants';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={LOGO} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
