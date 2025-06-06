import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  IconButton
} from "@mui/material";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const PublicRequestCard = ({ name = "SURAJ RAJ SINGH", message }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);

  const handleReplyClick = () => {
    setShowReplyInput(!showReplyInput);
  };

  const handleAddReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText.trim()]);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 3,
        mb: 2,
        px: 2,
        py: 1.5,
        backgroundColor: "#D8D8D8",
      }}
    >
      <Box display="flex" gap={2}>
        <Avatar sx={{ bgcolor: "#f9b233", fontWeight: "bold" }}>
          {name[0]}
        </Avatar>
        <Box flex={1}>
          <Typography fontSize={14} fontWeight={600}>
            {message?.split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight={600}
            mt={0.5}
            display="block"
          >
            {name}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mt={1}
            fontSize={13}
            color="text.secondary"
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <ThumbUpAltOutlinedIcon fontSize="small" />
              1000
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <ChatBubbleOutlineIcon fontSize="small" />
              1000
            </Box>
            <Typography
              sx={{ marginLeft: "auto", cursor: "pointer", fontWeight: 600 }}
              onClick={handleReplyClick}
            >
              Reply
            </Typography>
          </Box>

          {showReplyInput && (
            <Box mt={2}>
              <TextField
                fullWidth
                size="small"
                placeholder="Write your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <Button
                variant="contained"
                size="small"
                sx={{ mt: 1 }}
                onClick={handleAddReply}
              >
                Submit
              </Button>
            </Box>
          )}

          {replies.map((reply, idx) => (
            <Box key={idx} display="flex" gap={2} mt={3} ml={3}>
              <Avatar sx={{ bgcolor: "#f9b233", fontSize: 14, width: 32, height: 32 }}>
                S
              </Avatar>
              <Box>
                <Typography fontSize={14} fontWeight={600}>
                  {reply?.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={600}
                  mt={0.5}
                  display="block"
                >
                  {name}
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  mt={1}
                  fontSize={13}
                  color="text.secondary"
                >
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <ThumbUpAltOutlinedIcon fontSize="small" />
                    1000
                  </Box>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    1000
                  </Box>
                  <Typography
                    sx={{ marginLeft: "auto", cursor: "pointer", fontWeight: 600 }}
                    onClick={handleReplyClick}
                  >
                    Reply
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default PublicRequestCard;

// import React from "react";
// import { Card, CardContent, Avatar, Typography, Box, IconButton } from "@mui/material";
// import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// const PublicRequestCard = ({ name = "SURAJ RAJ SINGH", message }) => {
//   return (
//     <Card
//       elevation={1}
//       sx={{
//         borderRadius: 3,
//         mb: 2,
//         px: 2,
//         py: 1.5,
//         backgroundColor: "#D8D8D8",
//       }}
//     >
//       <Box display="flex" gap={2}>
//         <Avatar sx={{ bgcolor: "#f9b233", fontWeight: "bold" }}>
//           {name[0]}
//         </Avatar>
//         <Box>
//           <Typography fontSize={14} fontWeight={600}>
//             {message?.split("\n").map((line, idx) => (
//               <div key={idx}>{line}</div>
//             ))}
//           </Typography>

//           <Typography
//             variant="caption"
//             color="text.secondary"
//             fontWeight={600}
//             mt={0.5}
//             display="block"
//           >
//             {name}
//           </Typography>

//           <Box
//             display="flex"
//             alignItems="center"
//             gap={2}
//             mt={1}
//             fontSize={13}
//             color="text.secondary"
//           >
//             <Box display="flex" alignItems="center" gap={0.5}>
//               <ThumbUpAltOutlinedIcon fontSize="small" />
//               1000
//             </Box>
//             <Box display="flex" alignItems="center" gap={0.5}>
//               <ChatBubbleOutlineIcon fontSize="small" />
//               1000
//             </Box>
//             <Typography
//               sx={{ marginLeft: "auto", cursor: "pointer", fontWeight: 600 }}
//             >
//               Reply
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// export default PublicRequestCard;
