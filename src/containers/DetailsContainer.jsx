import React, { useState } from 'react';
import { Box, Container, Divider } from '@mui/material';
import Text from 'components/common/Text';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import images from 'helpers/images';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '../App.css';
import SideNewCards from 'components/common/cards/SideNewCards';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { useParams } from 'react-router-dom';
import { appConstants } from 'helpers/constants/appConstants';
import '../components/common/cards/NewsCard.css';

export default function DetailsContainer() {
  const relatedNews = [1, 2, 3, 4];
  const { id } = useParams();

  const { data: headerNewsDataApi } = dashboardNewsApiAction.getNewsById({
    id: id,
  });

  // console.log(headerNewsDataApi?.news?.title,'idhhh');

  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews();

  const imageUrl = appConstants.BACKEND_IMAGE_URL;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container
      sx={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        className="DetailsContainer"
      >
        <Text
          sx={{
            fontWeight: '700',
            marginTop: '1rem',
            fontSize: '1.5rem',
          }}
          text={headerNewsDataApi?.news[0]?.title}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Text
            sx={{ fontWeight: 700, fontSize: '0.7rem' }}
            text={'Stephen Romero'}
          />
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                border: '1px solid #e9e9e9',
                padding: '0.5rem 0.5rem',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              <ShareIcon sx={{ fontSize: '0.8rem' }} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem' }}
                text={'Share'}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                background: '#516eab',
                border: '1px solid #e9e9e9',
                padding: '0.5rem 0.5rem',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              {/* <ShareIcon sx={{fontSize:'0.8rem'}}/> */}
              <img src={images.facebookWhite} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Facebook'}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                background: '#29c5f6',
                border: '1px solid #e9e9e9',
                padding: '0.5rem 0.5rem',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <img src={images.twitterXWhite} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Twitter'}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                background: '#ca212a',
                border: '1px solid #e9e9e9',
                padding: '0.5rem 0.5rem',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <PinterestIcon sx={{ fontSize: '1rem', color: '#FFF' }} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Pinterest'}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                background: '#7bbf6a',
                border: '1px solid #e9e9e9',
                padding: '0.5rem 0.5rem',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: '1rem', color: '#FFF' }} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'WhatsApp'}
              />
            </Box>
          </Box>
        </Box>
        <Text
          font={'Roboto'}
          sx={{ fontSize: '0.8rem', color: '#767676' }}
          text={`Pakistan big confession on PoK इस्लामाबाद हाईकोर्ट में पाकिस्तान के एक सरकारी वकील ने ही चौंकाने वाला दावा किया है। पाकिस्तान के कब्जे वाले कश्मीर (पीओके) को पाकिस्तान आजाद कश्मीर कहता है जिसपर अब उसने बड़ा बयान दिया है। भारत इसे अपना अभिन्न अंग मानता है। अब पाकिस्तान ने खुद माना है कि पीओके उसके क्षेत्राधिकार में नहीं है और विदेशी जमीन है।`}
        />
        <img
          src={images.dummyNews3}
          // src={imageUrl?.image}
          style={{ height: 'auto', width: '100%' }}
        />
        <Box
          sx={{
            width: '100%',
            height: '130px',
            background: '#f7f7f7',
            marginBottom: '1rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Text
              sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
              text={'-Advertisement-'}
            />
            <Box sx={{ maxWidth: '650px', height: '80px' }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="/advertise.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Text
          font={'Roboto'}
          sx={{
            color: '#767676',
            display: '-webkit-box',
            WebkitLineClamp: isExpanded ? 'none' : 5,
            WebkitBoxOrient: 'vertical',
            overflow: isExpanded ? 'visible' : 'hidden',
            textOverflow: isExpanded ? 'unset' : 'ellipsis',
          }}
          text={`A supermarket worker was spat at by a customer attempting to stockpile Pot 
          Noodles while another was told: “I hope you get the virus and die”, as panic-buying
           blighted the nations response to coronavirus pandemic.

           An eyewitness described the scene at a packed branch of Asda in 
          the Wirral, Merseyside, on Saturday, as a man in his 30s attempted to buy
           more than the three Pot Noodles allowed by the store.

           EVERYONE WAS SO WRAPPED UP IN MAKING SURE EVERYBODY

           A woman in her 40s working behind the checkout attempted to enforce the rules,
           brought in to ensure stocks could be maintained, and the gentleman objected to it
            and spat at her, according to businessman Andy Smith, who was in the store.

            Supermarkets have been overwhelmed with unprecedented demand amid the coronavirus crisis.
          The incident, which was raised in parliament by Labour MP Bill Esterson, was just one of the 
          horrendous cases of abuse revealed by supermarket workers in recent days as some customers 
          grow angry over restrictions and empty shelves.

          Supermarkets have been overwhelmed with unprecedented demand amid the coronavirus crisis.
          The incident, which was raised in parliament by Labour MP Bill Esterson, was just one of 
          the horrendous cases of abuse revealed by supermarket workers in recent days as some 
          customers grow angry over restrictions and empty shelves.
           `}
        />
        <span className="read-more-button" onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>

        <Box
          sx={{
            width: '100%',
            height: '130px',
            background: '#f7f7f7',
            marginBottom: '1rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Text
              sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
              text={'-Advertisement-'}
            />
            <Box sx={{ maxWidth: '650px', height: '80px' }}>
              <img
                style={{ width: '100%', height: '100%' }}
                src="/advertise.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Text text={'Related News'} sx={{ fontWeight: '700' }} />
          <Box sx={{ marginTop: '1rem' }}>
            {relatedNews.map((val) => (
              <>
                <SubHeadingNewCard data={dashboardNewsDataApi?.reviews} />
                <Divider sx={{ margin: '1rem' }} />
              </>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          className="sideNewCardsWidth"
          sx={{ position: 'sticky', top: '1rem' }}
        >
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '1rem 0rem' }}
          />
          {relatedNews.map((val) => (
            <Box sx={{ marginTop: '1rem' }}>
              <SideNewCards key={val} data={dashboardNewsDataApi?.reviews} />
            </Box>
          ))}
          <Box
            sx={{
              margin: '2rem 0',
              height: '200px',
              width: '260px',
              borderTop: '25px solid #f7f7f7',
              borderBottom: '7px solid #f7f7f7',
              borderLeft: '7px solid #f7f7f7',
              borderRight: '7px solid #f7f7f7',
            }}
          ></Box>
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '1rem 0rem' }}
          />
          {relatedNews.map((val) => (
            <Box sx={{ marginTop: '1rem' }}>
              <SideNewCards key={val} data={dashboardNewsDataApi?.reviews} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}