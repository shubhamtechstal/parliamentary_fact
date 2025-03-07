import { Box, Grid } from '@mui/material';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';

const FundSpentInTopAreaTextGroup = ({ category, value, date, index }) => {
  return (
    <Box
      key={index}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        // padding: '1rem',
        minWidth: {md:'20%', sm:'30%'},
      }}
    >
      <GrayDot />
      <Box>
        <Text
          sx={{
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
          text={value}
        />
        <Text
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
            text={category}
          />
      </Box>
    </Box>
  );
};
const FundDataTextGroup = ({ index, title,unit, percentage }) => {
  return (
    <div
      key={index}
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        fontSize: '14px',
        width: {sm : '50%',md: '25%'},
      }}
    >
      <GrayDot />
      <div>
        <span
          style={{
            color: '#FF936F',
            fontWeight: '600',
            textWrap: ' ',
            wordWrap: 'break-word',
          }}
        >
          <span style={{ fontWeight: '800', fontSize: '1.5rem' }}>
            {percentage}
          </span>{' '}
          %
        </span>{' '}
        <br />
        <h3 style={{margin:'0px',}}>{unit}</h3>
        <span>{title}</span>
      </div>
    </div>
  );
};

function MpFundSection({ MpFundSection, BottomRightChip }) {
  return (
    <div style={{ padding: '2rem 10rem', position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          padding: '2rem 0rem',
        }}
      >
        <SectionHeading title={MpFundSection.title} />
        <Box
          sx={{
            color: '#00000080',
            borderBottom: '1px solid #D3D3D3',
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            padding: '0 30px 5px',
          }}
        >
          <div
            style={{
              padding: '1px 7px',
              border: '1px solid #00000080',
              borderRadius: '50%',
              fontSize: '10px',
              height: '18px',
              width: '18px',
            }}
          >{' '} i</div>{' '}
          {MpFundSection.readBeforeCheck}
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-evenly',
          marginTop: '1rem',
        }}
      >
        <Grid
          spacing={2}
          xs={12}
          md={3}
          sx={{
            position: 'relative',
            top:'-4rem',
            width: { xs: '47%', md: 'auto' },
          }}
        >
          <ProgressMeter
            titleText={MpFundSection.progressTitle}
            isMultiSubtitle={true}
            centerDate={MpFundSection.date}
            percentText={'100.'}
            subPercentText={'20%'}
            width={230}
            height={250}
            innerRadius={98}
            percentNumFontSize={'2.5rem'}
            percent_x="40%"
            percent_y="55%"
            dotPercentFontSize={'1.5rem'}
            dotPercent_x="72%"
            dotPercent_y="57%"
          />
        </Grid>
        <Grid xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8%',
              alignItems: 'start',
              flexWrap: 'wrap',
            }}
          >
            {MpFundSection.fundData.map((item, index) => (
              <FundDataTextGroup
                index={index}
                title={item.title}
                unit={item.unit}
                percentage={item.value}
              />
            ))}
          </Box>
          <hr style={{ margin: '2rem 0' }} />
          <h3 style={{borderBottom : "4px solid #FF936F", width:'300px', paddingBottom:'5px'}}>{MpFundSection.fundSpentInTopArea.title} </h3>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {MpFundSection.fundSpentInTopArea.items.map((item, index) => (
              <FundSpentInTopAreaTextGroup index={index} {...item} />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <BottomRightChip />
      </Box>
    </div>
  );
}

export default MpFundSection;
