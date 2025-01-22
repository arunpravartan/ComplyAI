// material-ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const TitleStyled = styled(Box)(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent:'flex-start',
  paddingLeft: theme.spacing(3)
}));

export default TitleStyled;
