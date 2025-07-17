import { Box, Container, Typography } from '@mui/material';
import Divider from 'components/common/Divider';
import SectionHeading from 'components/common/SectionHeading';

export const ProfileSection = ({
  isSectionHeading = true,
  title,
  children,
}) => (
  <Box sx={{ fontFamily:'"Sora", sans-serif' }}>
    {isSectionHeading ? (
      <SectionHeading fontSize={'1.2rem'} title={title} />
    ) : (
      <h2 style={{ fontSize: '1.1rem' }}>{title}</h2>
    )}
    <Container>{children}</Container>
    <Divider sx={{ my: 3 }} />
  </Box>
);

export const LabeledItem = ({ label, value }) => (
  <Box sx={{ fontFamily:'"Sora", sans-serif' }}>
    <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem', mb:1,  fontFamily:'"Sora", sans-serif' }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ fontFamily:'"Sora", sans-serif', fontWeight:'bold', fontSize: '1.2rem'}}>
      {value}
    </Typography>
  </Box>
);
