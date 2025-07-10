import { Box, Typography, Container } from '@mui/material';
import { LabeledItem, ProfileSection } from '../commonfiles/HelperComponents';
import Divider from 'components/common/Divider';

const MpProfileSection = ({ mp_profile_detail, homeInfo }) => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 4 }}>
      <ProfileSection title="Electoral Profile">
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem label="Total Electorate" value="Na" />
          <LabeledItem label="Total Vote" value="Na" />
          <LabeledItem
            label="Winning Margin"
            value={mp_profile_detail?.winning_vote_margin}
          />
          <LabeledItem label="Winning Percentage" value={'Na'} />
        </Box>
      </ProfileSection>

      <ProfileSection title="Parliamentary Profile">
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Term"
            value={mp_profile_detail?.term_loksabha_expr ?? 'Na'}
          />
          <LabeledItem
            label="Current Position"
            value={homeInfo?.current_position ?? 'Na'}
          />
          <LabeledItem label="Ministry" value={homeInfo?.ministry ?? 'Na'} />
        </Box>
        <Box mt={2}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            Member of Parliament Committee
          </Typography>
          <div>
            {' '}
            <span
              style={{
                border: '4px solid red',
                opacity: '0.6',
                marginRight: '10px',
                height: '18px',
                width: '18px',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            ></span>
            {homeInfo?.current_position} - {homeInfo?.ministry}
          </div>
          {/* <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            <li>
              Cabinet Minister - Ministry of Defence Govt of India (25 Apr 2024
              – 24 Mar 2025)
            </li>
            <li>
              Cabinet Minister - Ministry of Defence Govt of India (25 Apr 2024
              – 24 Mar 2025)
            </li>
            <li>
              Cabinet Minister - Ministry of Defence Govt of India (25 Apr 2024
              – 24 Mar 2025)
            </li>
          </ul> */}
        </Box>
      </ProfileSection>

      <ProfileSection title="Personal Profile">
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Birth Date"
            value={mp_profile_detail?.date_of_birth}
          />
          <LabeledItem
            label="Birth Place"
            value={mp_profile_detail?.birth_place}
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Father Name"
            value={mp_profile_detail?.father_name}
          />
          <LabeledItem
            label="Mother Name"
            value={mp_profile_detail?.mother_name}
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Marital Status"
            value={mp_profile_detail?.marital_status}
          />
          <LabeledItem
            label="Spouse Name"
            value={mp_profile_detail?.spouse_name ?? 'Na'}
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Number of Sons"
            value={mp_profile_detail?.sons ?? 'Na'}
          />
          <LabeledItem
            label="Number of Daughters"
            value={mp_profile_detail?.daughters ?? 'NA'}
          />
        </Box>
        {/* <Divider sx={{my: 3}} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Son Name"
            value=". Arjun Kumar Rahul Gandhi, . Arjun Kumar Rahul Gandhi"
          />
          <LabeledItem label="Daughter Name" value="NA" />
        </Box> */}
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Educational Qualification"
            value={mp_profile_detail?.education?.replaceAll("<br/>", ' (') + ( mp_profile_detail?.education?.includes('<br/>') && ' )') ?? 'Na'}
          />
          <LabeledItem label="Profession" value="Strategy Consultant" />
        </Box>
      </ProfileSection>

      <ProfileSection title="Other Information">
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Hobbies"
            value={mp_profile_detail?.hobbies !=='' ? mp_profile_detail?.hobbies : 'Na'}
          />
          <LabeledItem
            label="Countries Visited"
            value={mp_profile_detail?.countries_visited !=='' ? mp_profile_detail?.countries_visited : 'Na'}
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Sports and Clubs"
            value={
              mp_profile_detail?.sports !== ''
                ? mp_profile_detail?.sports
                : 'Na'
            }
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Special Interests"
            value={mp_profile_detail?.interest ?? 'Na'}
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LabeledItem
            label="Social & Cultural Activities"
            value={mp_profile_detail?.social_profile ?? 'Na'}
          />
        </Box>
      </ProfileSection>
    </Container>
  );
};

export default MpProfileSection;
