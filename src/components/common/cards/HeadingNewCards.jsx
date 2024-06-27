import { Box } from '@mui/material';
import Text from '../Text';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';
import parse from 'html-react-parser';

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
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
              maxHeight: '250px',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              src={newsItem?.video}
            ></iframe>
          </Box>
          <Box
            sx={{
              maxWidth: '350px',
              maxHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Text
                onClick={() => navigate(`/details/${newsItem?.url}`,{state : {id:newsItem?.id}})}

                sx={{
                  lineHeight: '30px',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  paddingBottom: '3px',
                  position: 'relative',
                  '&:hover': {
                    color: '#da251d',
                    '&::before': {
                      width: '90%',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '1px',
                    backgroundColor: '#da251d',
                    transition: 'width 0.4s ease-out',
                  },
                }}
                text={newsItem ? (newsItem?.news_description[0]?.title ?? ' ') : ''  }
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
              font={'Roboto'}
              sx={{
                color: '#767676',
                fontSize: '14px',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: '600',
              }}
              text={newsItem ? parse(newsItem?.news_description[0]?.description ?? ' ') : ''}
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
