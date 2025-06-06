import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
export const StickyFooter = () => {

  return (
    <Box display={{ xs: 'flex', md: 'none' }} className="sticky-footer">
      <Link
        className="footer-tab"
        to="/mps-performance"
      >
        <p style={{ margin: '0 0' }}>
          <LeaderboardOutlinedIcon />
        </p>
        <p style={{ margin: '0 10px', textWrap: 'nowrap' }}>MPs Performance</p>
      </Link>
      <Link
        className="footer-tab"
        to="/rate-your-mp"
      >
        <p style={{ margin: '0 0' }}>
          {' '}
          <StarBorderPurple500OutlinedIcon />
          <StarBorderPurple500OutlinedIcon />
          <StarBorderPurple500OutlinedIcon />
        </p>{' '}
        Rate your MP
      </Link>
      <div className="footer-tab">
        <p style={{ margin: '0 0' }}>
          {' '}
          <PlayArrowOutlinedIcon />
        </p>{' '}
        Video
      </div>
      <Link to={'/news'} className="footer-tab">
        <p style={{ margin: '0 0' }}>
          <ArticleOutlinedIcon />
        </p>{' '}
        News
      </Link>
    </Box>
  );
};
