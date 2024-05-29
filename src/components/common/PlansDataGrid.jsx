import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
const PlansDataGrid = ({ items, columns }) => {
  const [showDataGrid, setShowDataGrid] = useState(true);
  const flattenItems = Array.isArray(items)
    ? items.flatMap((it) =>
        Array.isArray(it.subCategories)
          ? it.subCategories.flatMap((item, index) =>
              index === 0
                ? {
                    ...item,
                    planName: it.planName,
                    plan_id: it.plan_id,
                    min_amount: it.min_amount,
                    max_amount: it.max_amount,
                  }
                : { ...item }
            )
          : []
      )
    : [];
  const toggleDataGrid = () => {
    setShowDataGrid((prevShowDataGrid) => !prevShowDataGrid);
  };
  const getUpdatedRows = () => {
    return flattenItems.map((item, index) => ({
      ...item,
      id: `${item.planName}-${index}`,
    }));
  };

  const getCellClassName = () => {
    return "";
  };

  return (
    <div>
      {showDataGrid && (
        <Box
          // sx={{
          //   width: "auto",
          //   overflowX: "auto",
          //   "& .bold": {
          //     fontWeight: 600,
          //   },
          //   "& .super-app-theme--header": {
          //     backgroundColor: "#ECECEC !important",
          //   },
          //   "& .total-background": {
          //     backgroundColor: "#F2FAFE !important",
          //   },
          //   "& .total-back": {
          //     backgroundColor: "#C3EAFD !important",
          //   },
          // }}
        >
          <DataGrid
            style={{
              minWidth: "100%",
              fontSize: "14px",
              fontWeight: "400",
              boxShadow: 2,
              border: 0,
              borderColor: "primary.light",
            }}
            autoHeight
            autoWidth
            disableColumnFilter
            disableColumnSort
            disableColumnMenu
            disableColumnReorder
            disableRowSelectionOnClick={true}
            disableSelectionOnClick={true}
            disableCellSelectionOnClick={true}
            disableExtendRowFullWidth={false}
            disableExtendColumnFullWidth={false}
            hideFooter
            getCellClassName={getCellClassName}
            columns={columns}
            rows={getUpdatedRows()}
            rowHeight="72px"
          />
        </Box>
      )}
    </div>
  );
};

export default PlansDataGrid;
