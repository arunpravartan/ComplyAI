import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
import TitleStyled from './TitleStyled';
import Logo from 'components/logo';
import Typography from 'themes/typography';

// ==============================|| DRAWER HEADER ||============================== //

export default function Title() {
  const theme = useTheme();

  return (
    <TitleStyled theme={theme}>
      <Logo sx={{ width: 'auto', height: 35 }} />
    </TitleStyled>
  );
}

Title.propTypes = {};
