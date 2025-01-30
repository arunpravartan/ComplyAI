// material-ui
import { useTheme, useMediaQuery } from '@mui/material';

// project import
import TitleStyled from './TitleStyled';
import Logo from 'components/logo';

// ==============================|| DRAWER HEADER ||============================== //

export default function Title() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleLogoClick = () => {
    window.location.href = '/';
  }
  return (
    <TitleStyled theme={theme}>
      <Logo sx={{ width: 'auto', maxHeight: isDesktop ? 30 : 20 }} onClick={() => {handleLogoClick()}} />
    </TitleStyled>
  );
}

Title.propTypes = {};
