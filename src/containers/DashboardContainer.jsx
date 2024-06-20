import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import BigNewCards from 'components/common/cards/BigNewCards';
import BottomSubHeadingCards from 'components/common/cards/BottomSubHeadingCards';
import HeadingNewCards from 'components/common/cards/HeadingNewCards';
import SideNewCards from 'components/common/cards/SideNewCards';
import SubHeadingNewCard from 'components/common/cards/SubHeadingNewCard';
import './../App.css';
import CenterBackgroudNewsCard from 'components/common/cards/CenterBackgroundNewsCard';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import ShortNewsCard from 'components/common/cards/ShortNewsCard';
import '../components/common/cards/NewsCard.css';

export default function DashboardContainer() {
  // const cardsData = [1, 2, 3, 4, 5, 6];

  // const staticData = [
  //   {
  //     id: 1,
  //     title:
  //       'Lok Sabha Election 2024: आपके राज्‍य में किस सीट पर कब होगा मतदान; यहां देखिए चुनावी शेड्यूल',
  //     author: 'दीप्ति मिश्रा, नई दिल्‍ली',
  //     date: '19/03/2024 - 10:48',
  //     description:
  //       'देश में 18वीं लोकसभा के लिए सात चरणों में चुनाव हो रहा है। पहले चरण में 21 राज्‍यों की 102 सीटों पर मतदान 19 अप्रैल को हुआ। दूसरे चरण में 13 राज्‍यों की 89 लोकसभा सीट पर 26 अप्रैल को चुनाव होना है।',
  //     category: 'Elections',
  //     // image: 'path/to/image3.jpg'
  //     author: 'Stephen Romero',
  //   },
  //   {
  //     id: 2,
  //     category: 'Coronavirus',
  //     title:
  //       '"PoK हमारा नहीं है", Pakistan का बड़ा कबूलनामा! इस्लामाबाद हाईकोर्ट ने पूछा- फिर विदेशी जमीन पर क्यों तैनात किए सैनिक?',
  //     date: '22/05/2024',
  //     description:
  //       'Pakistan big confession on PoK इस्लामाबाद हाईकोर्ट में पाकिस्तान के एक सरकारी वकील ने ही चौंकाने वाला दावा किया है। पाकिस्तान के कब्जे वाले कश्मीर (पीओके) को पाकिस्तान आजाद कश्मीर कहता है जिसपर अब उसने बड़ा बयान दिया है। भारत इसे अपना अभिन्न अंग मानता है। अब पाकिस्तान ने खुद माना है कि पीओके उसके क्षेत्राधिकार में नहीं है और विदेशी जमीन है।',
  //     // image: 'path/to/image1.jpg'
  //     author: 'Stephen Romero',
  //   },
  //   {
  //     id: 3,
  //     category: 'Cars',
  //     title:
  //       'ऐसा कौन करता है! BMW वाले लूट ले गए Audi, रोका फिर लाठी लेकर गाड़ी से उतरे और कर डाला लाल-पीला',
  //     date: '19/03/2020 - 10:48',
  //     author: 'Stephen Romero',
  //   },
  //   {
  //     id: 4,
  //     title:
  //       'विकसित देश के सपने को तोड़ते हादसे, नियम-कानून उल्लंघन पर विचार का समय',
  //     date: '09/06/2024 - 09:48',
  //     category: 'Coronavirus',
  //   },
  //   {
  //     id: 5,
  //     category: 'Vaccancy',
  //     title:
  //       'APSC JE Recruitment 2024: लोक निर्माण विभाग में 80 जूनियर इंजीनियर की भर्ती, आवेदन 5 जून तक',
  //     date: '19/06/2024 - 09:48',
  //   },
  // ];

  // const dashboardNewsData = { records: staticData };

  const { data: dashboardNewsDataApi } =
    dashboardNewsApiAction.getDashboardNews();
  // console.log(dashboardNewsDataApi, 'checkdata');
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
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              background: '#f7f7f7',
              width: '100%',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <HeadingNewCards data={dashboardNewsDataApi?.reviews} />
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
          <Box
            className="BigNewsCardContainer"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ padding: '1rem', maxWidth: '750px' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '0 0 1rem 0' }}
              />
              <Box
                className="BigNewsCardSection"
                sx={{ display: 'flex', gap: '1.5rem' }}
              >
                <BigNewCards data={dashboardNewsDataApi?.reviews} />
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <Box>
                    <BottomSubHeadingCards
                      data={dashboardNewsDataApi?.reviews}
                    />
                  </Box>
                  <Box>
                    <BottomSubHeadingCards
                      data={dashboardNewsDataApi?.reviews}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginRight: '1rem' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '1rem 0rem' }}
              />
              <Box className="SideNewCards">
                {dashboardNewsDataApi?.reviews?.slice(0, 6).map((data) => (
                  <Box key={data.id} sx={{ marginTop: '1rem' }}>
                    <SideNewCards data={dashboardNewsDataApi?.reviews} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="MobileViewRemove"
          sx={{ width: '8rem', height: '43.5rem', background: '#0d0b52' }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '130px',
          background: '#f7f7f7',
          marginBottom: '1rem',
          padding: '1rem 0',
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
            <img className="advertise_img" src="/advertise.jpg" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: '#f7f7f7',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '1rem 0',
        }}
      >
        <Box sx={{ width: '80%' }}>
          <Text text={'Virus confronts'} sx={{ fontWeight: 700 }} />
          <Box className="CenterVirusConfrontSection">
            {dashboardNewsDataApi?.reviews?.slice(0, 5).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <CenterBackgroudNewsCard data={dashboardNewsDataApi?.reviews} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        className="BigNewsCardContainer"
        sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        <Box sx={{ padding: '1rem', maxWidth: '750px' }}>
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '0 0 1rem 0rem' }}
          />
          <Box
            className="BigNewsCardSection"
            sx={{ display: 'flex', gap: '1.5rem' }}
          >
            <BigNewCards data={dashboardNewsDataApi?.reviews} />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <Box>
                <BottomSubHeadingCards data={dashboardNewsDataApi?.reviews} />
              </Box>
              <Box>
                <BottomSubHeadingCards data={dashboardNewsDataApi?.reviews} />
              </Box>
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
              <Box sx={{ maxWidth: '650px', height: '80px' }}>
                <img className="advertise_img" src="/advertise.jpg" />
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: '#f7f7f7', padding: '0.5rem 1rem' }}>
            <Text
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0.5rem' }}
            />
            <Box
              className="BigNewsCardContainer"
              sx={{ display: 'flex', gap: '0.5rem' }}
            >
              <Box className="bottomSubHeadingCardBox">
                {dashboardNewsDataApi?.reviews?.slice(0, 3).map((data) => (
                  <Box
                    key={data.id}
                    sx={{ flex: '1 1 calc(33.33% - 1rem)', margin: '0.5rem' }}
                  >
                    <ShortNewsCard data={dashboardNewsDataApi?.reviews} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            className="BigNewsCardContainer"
            sx={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Text
                text={'Virus confronts'}
                sx={{ fontWeight: 700, margin: '0.5rem 0' }}
              />
              {dashboardNewsDataApi?.reviews?.slice(0, 3).map((data) => (
                <Box key={data.id} sx={{ margin: '0.5rem' }}>
                  <SubHeadingNewCard data={dashboardNewsDataApi?.reviews} />
                </Box>
              ))}
            </Box>
            <Box>
              <Box
                sx={{
                  background: '#f7f7f7',
                  height: '100%',
                  padding: '0.5rem 1rem',
                }}
              >
                <Text
                  text={'Virus confronts'}
                  sx={{ fontWeight: 700, margin: '1rem 0' }}
                />
                <Box className="bottomSubHeadingCardWidth">
                  <BottomSubHeadingCards
                    type={'withbg'}
                    data={dashboardNewsDataApi?.reviews}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '2.5rem 0' }} />
          <Text
            text={'Virus confronts'}
            sx={{ fontWeight: 700, margin: '1rem 0' }}
          />

          {dashboardNewsDataApi?.reviews?.slice(0, 3).map((data) => (
            <Box key={data.id} sx={{ margin: '0.5rem' }}>
              <SubHeadingNewCard data={dashboardNewsDataApi?.reviews} />
              <Divider sx={{ margin: '1rem' }} />
            </Box>
          ))}
        </Box>

        <Box sx={{ marginBottom: '2rem' }}>
          <Box
            sx={{
              margin: '2rem 0',
              height: '250px',
              width: '300px',
              borderTop: '25px solid #f7f7f7',
              borderBottom: '7px solid #f7f7f7',
              borderLeft: '7px solid #f7f7f7',
              borderRight: '7px solid #f7f7f7',
            }}
          ></Box>
          <Box className="sideNewCardsWidth">
            <Text
              text={'Virus confronts'}
              sx={{ fontWeight: 700, margin: '1rem 0rem' }}
            />
            {dashboardNewsDataApi?.reviews?.slice(0, 5).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <SideNewCards data={dashboardNewsDataApi?.reviews} />
              </Box>
            ))}
            <Box
              sx={{
                margin: '2rem 0',
                height: '250px',
                width: '300px',
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
            {dashboardNewsDataApi?.reviews?.slice(0, 6).map((data) => (
              <Box key={data.id} sx={{ marginTop: '1rem' }}>
                <SideNewCards data={dashboardNewsDataApi?.reviews} />
              </Box>
            ))}
          </Box>
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
          padding: '1rem 0',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Text
            sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
            text={'-Advertisement-'}
          />
          <Box sx={{ maxWidth: '728px', height: '90px' }}>
            <img className="advertise_img" src="/advertise.jpg" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
