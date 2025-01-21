// @mui
import Typography from '@mui/material/Typography';

// @project
import GraphicsImage from '@/components/GraphicsImage';
import { BUY_NOW_URL, FREEBIES_URL } from '@/path';

/***************************  HERO - HEADLINE  ***************************/

function HeadlineText() {
  return (
    <Typography variant="h1" align="center" sx={{ width: { xs: 343, sm: 700, md: 850 } }}>
      Effortless CRM Management, Seamless Business
      <GraphicsImage
        sx={{
          display: 'inline-block',
          height: { xs: 32, sm: 45, md: 57 },
          width: { xs: 61, sm: 86, md: 109 },
          backgroundSize: 'contain',
          mx: { xs: 0.5, sm: 1, md: 1.5 },
          verticalAlign: 'sub'
        }}
        image="/assets/images/graphics/crm/rocket.svg"
      />
      Growth
    </Typography>
  );
}

/***************************  HERO - DATA  ***************************/

export const hero = {
  chip: {
    label: 'New Beta Version is Release ',
    link: { children: 'explore now', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' }
  },
  headLine: <HeadlineText />,
  captionLine: 'Empowering Businesses with a Customizable, Data-Driven CRM Solution.',
  image: { light: '/assets/images/graphics/crm/desktop1-light.svg', dark: '/assets/images/graphics/crm/desktop1-dark.svg' },
  primaryBtn: { children: 'Get Started - It’s Free', href: FREEBIES_URL, target: '_blank', rel: 'noopener noreferrer' },
  secondaryBtn: { children: 'Buy now', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' }
};
