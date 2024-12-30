import { Box, Card, CardContent, CardMedia } from '@mui/material';
import Text from '../Text';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { appConstants } from 'helpers/constants/appConstants';
import './NewsCard.css';

export default function BigNewCards({ data }) {
  const navigate = useNavigate();

  let newsItem;
  if (data) newsItem = data;

  const imageUrl = appConstants.BACKEND_IMAGE_URL;

  const formattedDate = new Date(newsItem?.date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return (
    <Card  onClick={() =>
      navigate(
        `/news/details/${newsItem?.sub_category.toLowerCase().replace(/\s+/g, '-')}/${newsItem?.url}`,
        {
          state: { id: newsItem?.id },
        }
      )
    } sx={{ maxWidth: 450, boxShadow: 'none', borderRadius: '0',cursor:'pointer' }}>
      <CardMedia
        sx={{ height: {xs:'200px',md:"270px"} }}
        src={imageUrl + newsItem?.news_description[0]?.image}
        image={imageUrl + newsItem?.news_description[0]?.image}
        title="green iguana"
      />
      <CardContent  sx={{ margin: 0, padding: '1rem 0 0 0rem', '&:last-child': {
      paddingBottom: 0, // Remove padding-bottom for the last child
    }, }}>
        <Box sx={{ display: 'flex' }}>
          <Text
            sx={{
              background: '#0d0b52',
              color: '#FFF',
              padding: '0.2rem 0.5rem',
              fontSize: '0.625rem',
              marginBottom:'0.5rem',
              fontWeight: 500,
            }}
            text={newsItem?.sub_category}
          ></Text>
        </Box>
        <Text
          className="heading_title"
          onClick={() =>
            navigate(
              `/news/details/${newsItem?.sub_category.toLowerCase().replace(/\s+/g, '-')}/${newsItem?.url}`,
              {
                state: { id: newsItem?.id },
              }
            )
          }
          text={newsItem ? newsItem?.news_description[0]?.title ?? ' ' : ''}
        />
        <Text
          text={formattedDate}
          sx={{ color: '#9e9e9e', margin: '0.6rem 0', fontSize: '0.75rem' }}
        />
        <Text
          font={'Poppins'}
          sx={{
            color: '#767676',
            // display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          className="news_desc"
          text={
            newsItem
              ? parse(newsItem?.news_description[0]?.description ?? ' ')
              : ''
          }
        />
        {/* <Box>
          <span
            style={{ marginTop: '5px', fontSize: '14px' }}
            className="read-more-button"
            onClick={() =>
              navigate(
                `/news/details/${newsItem?.sub_category.toLowerCase().replace(/\s+/g, '-')}/${newsItem?.url}`,
                {
                  state: { id: newsItem?.id },
                }
              )
            }
          >
            Read more
           
          </span> 
        </Box> */}
      </CardContent>
    </Card>
  );
}
