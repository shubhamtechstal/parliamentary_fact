import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShareIcon from '@mui/icons-material/Share';
import GrayButton from 'components/common/GrayButton';

const MpsHomeCampaignCard = ({ cardInfo = {}, key, isPublicRequest }) => {
  return (
    <Card
      key={key}
      sx={{
        maxWidth: 400,
        minWidth: 314,
        borderRadius: 4,
        boxShadow: 3,
        p: '1.2rem 1rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Box display="flex" alignItems="start" mb={2}>
        <Box>
          <Avatar
            sx={{ bgcolor: '#f5b400', color: 'white', mr: 1 }}
            alt={cardInfo.sender}
            src={cardInfo.senderImage ?? cardInfo.sender}
          />
          <Box
            sx={{
              width: '2px',
              height: 50,
              borderLeft: '2px dotted gray',
              // my: 1,
              position: 'relative',
              left: '40%',
            }}
          />
          <Avatar
            sx={{ bgcolor: '#f5b400', color: 'white', mr: 1 }}
            alt={cardInfo.mpName}
            src={cardInfo.mpImage}
          />
        </Box>
        <Box>
          <Typography fontWeight="bold" fontSize={12}>
            {cardInfo.msgText}
          </Typography>

          <Typography
            variant="caption"
            fontWeight="bold"
            color="text.secondary"
            sx={{ textTransform: 'uppercase', fontSize: 11 }}
          >
            {cardInfo.sender}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 0.5,
              py: 1,
              borderBottom: '1px solid gray',
              borderTop: '1px solid gray',
              display: 'flex',
              textWrap: 'nowrap',
              alignItems: 'center',
              textOverflow: 'ellipsis',
              gap: 1,
            }}
          >
            <span style={{ fontSize: '8px' }}> To MP - </span>
            <span
              style={{
                color: 'red',
                fontSize: '12px',
                fontWeight: 'bold',
                textOverflow: 'ellipsis',
              }}
            >
              {cardInfo.mpName}
            </span>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'end',
            }}
          >
            <Box
              mt={2}
              display="flex"
              gap={4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <FavoriteBorderIcon fontSize="small" />
                <Typography fontSize={13}>{cardInfo.likesCount}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <ChatBubbleOutlineIcon fontSize="small" />
                <Typography fontSize={13}>{cardInfo.commentsCount}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <GroupOutlinedIcon fontSize="small" />
                <Typography fontSize={13}>{cardInfo.folowCount}</Typography>
              </Stack>
            </Box>
            <IconButton
              size="small"
              sx={{
                background:
                  'transparent linear-gradient(180deg, #E1DD31 0%, #FFA200 100%) 0% 0% no-repeat padding-box;',
                width: '30px',
              }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {isPublicRequest && (
        <Box
          sx={{
            mt: 2,
            p: 1,
            borderRadius: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <img
            src="/Assets/icons/kharchImage.png"
            width={80}
            height={50}
            alt=""
          />
          <GrayButton height={'30px'} bgColor="#E39A00">
            Support Karen
          </GrayButton>
        </Box>
      )}
    </Card>
  );
};

export default MpsHomeCampaignCard;
