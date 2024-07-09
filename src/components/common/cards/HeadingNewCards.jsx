import { Box } from '@mui/material';
import Text from '../Text';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';
import parse from 'html-react-parser';
import { appConstants } from 'helpers/constants/appConstants';

export default function HeadingNewCards({ data }) {
  const navigate = useNavigate();
  let newsItem;
  if (data) newsItem = data;

  const formattedDate = new Date(newsItem?.date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const imageUrl = appConstants.BACKEND_IMAGE_URL;

  return (
    <>
      <Box
        sx={{
          background: '#f7f7f7',
          width: '100%',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          className="headCard"
          sx={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <Box className="vedio_news_box">
            {newsItem?.video ? (
              <iframe
                width="100%"
                height="100%"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                src={newsItem?.video}
              ></iframe>
            ) : newsItem?.news_description[0]?.image ? (
              <img
                src={imageUrl + newsItem?.news_description[0].image}
                alt="News"
                style={{ height: '250px', width: '100%' }}
              />
            ) : null}
          </Box>
          <Box
            sx={{
              maxWidth: '350px',
              maxHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <Box>
              <Text
                className="heading_title"
                onClick={() =>
                  navigate(`/details/${newsItem?.url}`, {
                    state: { id: newsItem?.id },
                  })
                }
                text={
                  newsItem ? newsItem?.news_description[0]?.title ?? ' ' : ''
                }
              />

              <Box
                sx={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  marginTop: '10px',
                }}
              >
                <Text
                  sx={{
                    background: '#0d0b52',
                    color: '#FFF',
                    padding: '0.1rem 0.5rem',
                    fontSize: '0.625rem',
                    fontWeight: 700,
                  }}
                  text={newsItem?.sub_category}
                ></Text>
                <Text
                  sx={{ fontWeight: 700, fontSize: '0.7rem' }}
                  text={newsItem?.city}
                ></Text>
                <Text
                  sx={{
                    textAlign: 'center',
                    color: '#767676',
                    fontSize: '0.75rem',
                  }}
                  text={formattedDate}
                ></Text>
              </Box>
            </Box>
            <Text
              className="news_desc"
              // font={'Roboto'}
              sx={{
                color: '#767676',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              text={
                newsItem
                  ? parse(newsItem?.news_description[0]?.description ?? ' ')
                  : ''
              }
            />
          </Box>
        </Box>
        <Box
          className="MobileViewRemove"
          sx={{
            height: '250px',
            maxWidth: '300px',
            width: '100%',
            background: '#abb8c3',
          }}
        ></Box>
      </Box>
    </>
  );
}
