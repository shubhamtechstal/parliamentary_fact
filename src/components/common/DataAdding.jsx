// DataHeader.js

import React from "react";
import Box from "./Box";
import Stack from "./Stack";
import Text from "./Text";
import Button from "./Button";

const DataAdding = ({
  totalCount,
  headerText,
  subheaderText,
  addDataText,
  onAddDataClick,
  title,
  startIcon,
  shouldShowTitleAndCount, // new prop for condition
}) => {
  return (
    <Box>
      <Stack
        sx={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={3}
        py={2}
        bgcolor="common.white"
      >
        <Box textAlign="left">
          <Box display="flex" flexDirection="row" mb={1}>
            <Text variant="body1" color="">
              {headerText}
            </Text>
            {shouldShowTitleAndCount && (
              <Box
                sx={{
                  borderRadius: "16px",
                  backgroundColor: "#E5EEFF",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "26px",
                  ml: "8px",
                }}
              >
                <Text sx={{fontSize:"12px"}}>
                  {totalCount} {title}
                </Text>
              </Box>
            )}
          </Box>
          <Text variant="body2" color="text.secondary">
            {subheaderText}
          </Text>
        </Box>
        <Box textAlign="right" mb={2}>
          {addDataText && (
            <Button
              sx={{ padding: "10px,16px" }}
              color="primary"
              size="large"
              startIcon={startIcon}
              children={addDataText}
              onClick={onAddDataClick}
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default DataAdding;
