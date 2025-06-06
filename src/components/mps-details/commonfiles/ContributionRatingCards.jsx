import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ratingData = [
  {
    title: "Contribution in development in area",
    subtitle: "क्षेत्र के विकास में योगदान",
    rating: 3,
    label: "अच्छा है / Good",
  },
  {
    title: "How is the image among the public",
    subtitle: "जनता के बीच कैसी है छवि",
    rating: 3,
    label: "अच्छा है / Good",
  },
  {
    title: "MP's presence in constituency",
    subtitle: "क्षेत्र में सांसद की उपस्थिति",
    rating: 3,
    label: "अच्छा है / Good",
  },
  {
    title: "Seriousness towards local issues",
    subtitle: "स्थानीय मुद्दों को लेकर गंभीरता",
    rating: 3,
    label: "अच्छा है / Good",
  },
  {
    title: "To deal with public problems",
    subtitle: "जनता की समस्याओं के निपटारे में",
    rating: 3,
    label: "अच्छा है / Good",
  },
];

const RatingCard = ({ item }) => {
  return (
    <Card sx={{ mb: 2, borderRadius: 4, boxShadow: 1, textAlign:'center', width:{xs:'100%', md :'30%'}, color:'#707070', boxShadow:'0px 0px 10px #EB313329' }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {item.subtitle}
        </Typography>

        {/* Stars */}
        <Box display="flex" justifyContent="center" mb={1}>
          {[1, 2, 3, 4, 5].map((num) =>
            num <= item.rating ? (
              <StarIcon key={num} sx={{ color: "#E39A00" }} />
            ) : (
              <StarIcon key={num} sx={{ color: "gray" }} />
            )
          )}
        </Box>

        <Typography variant="caption" color="text.secondary">
          {item.label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function ContributionRatingCard() {
  return (
    <Box display={'flex'} p={1} flexWrap={'wrap'} justifyContent={'space-between'}>
      {ratingData.map((item, index) => (
        <RatingCard key={index} item={item} />
      ))}
    </Box>
  );
}

  
  
//   import React from 'react';

//   export default function ContributionRatingCard() {
//     return <div>ContributionRatingCards</div>;
//   }