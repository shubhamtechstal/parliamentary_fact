import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import SideNewCards from 'components/common/cards/SideNewCards';
import '../App.css';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import { useLocation, useParams } from 'react-router-dom';
import '../components/common/cards/NewsCard.css';
import React from 'react';

export default function SearchContainer() {
  const { id } = useParams();
  const location = useLocation();
  const { keyword } = location.state || {};
  const { category } = location.state || {};

  const { data: headerNewsDataApi } = dashboardNewsApiAction.getDashboardNews({
    category: category,
  });

  const { data: searchKeywordApi } = dashboardNewsApiAction.getSearchKeyword({
    keyword: keyword,
  });

  console.log(searchKeywordApi, 'searchKeywordApi');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0rem 1rem',
        }}
      >
         <Box
          className="MobileViewRemove"
          sx={{ width: '10rem', height: '37.5rem', background: '#0d0b52',position:'sticky',top:0 }}
        >
           <img 
           onClick={()=>window.open("https://www.theshilp.com/product-details/fortunate-maha-ganesha", "_blank")}
           className="advertise_img" src="/Assets/ads/leftSideImage.jpg" />
        </Box>
      
        <Box sx={{ width: '100%' ,}}>
          <Box>
            <Text
              text={`Search Results for : ${keyword}`}
              sx={{
                fontSize: '1.2rem',
                fontWeight: 600,
                textAlign: 'left',
                margin: '1rem 1rem 0rem 1rem',
                fontFamily:'Roboto',
                color:'#0d0b52',
              }}
            />
          </Box>
          <Box
            className="BigNewsCardContainer"
            sx={{ display: 'flex', justifyContent: 'space-between',height:"100%" }}
          >
            <Box className="categorieSubheadingCard" sx={{width:"100%",alignItems:'center'}}>
              <Text
                text={id}
                sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
              />
              {searchKeywordApi?.reviews?.length ? (
                searchKeywordApi.reviews.map((val, index) => (
                  <React.Fragment key={index}>
                    <SubHeadingNewCard data={val} style={{flexDirection:'row'}}/>
                    <Divider sx={{ margin: '1rem' }} />
                    {index === 3 && (
                   <Box className="mobileAd"
                   sx={{
                    
                     height: '130px',
                     background: '#f7f7f7',
                     
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
                     <Box className="desktop-advertise" sx={{ maxWidth: '650px', height: '80px' }}>
                       <img
                         onClick={() =>
                           window.open(
                             'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                             '_blank'
                           )
                         }
                         style={{ height: '100%', width: '100%' }}
                         className="advertise_img"
                         src="/Assets/ads/728x90ad.jpg"
                       />
                     </Box>
                     <Box className="mobile-advertise" sx={{ maxWidth: '650px', height: '50px' }}>
                       <img
                         onClick={() =>
                           window.open(
                             'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                             '_blank'
                           )
                         }
                         style={{ height: '100%', width: '100%' }}
                         className="advertise_img"
                         src="/Assets/ads/shilp-mobile-ad-300x50-2.jpg"
                       />
                     </Box>
                   </Box>
                 </Box>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    padding: '1rem 0rem',
                    textAlign: 'center',
                    color: '#767676',
                    fontSize: '1.5rem',
                  }}
                >
                  No News found on search... {`${keyword}`}
                </Box>
              )}
            </Box>
            <Box className="categoriesSideCard">

            <Box  sx={{ position: 'sticky', top: '1rem',marginBottom:'4rem' }}>
              <Text
                text={'Trending News'}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
              {headerNewsDataApi?.reviews?.slice(0, 6).map((val, index) => (
                <Box sx={{ marginTop: '1rem' }} key={index}>
                  <SideNewCards data={val} />
                </Box>
              ))}
            </Box>
            </Box>

          </Box>
        </Box>
        <Box
          className="MobileViewRemove"
          sx={{ width: '10rem', height: '37.5rem', background: '#0d0b52',position:'sticky',top:0 }}
        >
           <img 
           onClick={()=>window.open("https://www.theshilp.com/product-details/indian-army-strike-antique-bronze-gold", "_blank")}
           className="advertise_img" src="/Assets/ads/rightSideImage.jpg" />
        </Box>
      
      </Box>
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
          <Box sx={{ maxWidth: '728px', height: '90px' }}>
            <img
              style={{ width: '100%', height: '100%' }}
              src="/advertise.jpg"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
