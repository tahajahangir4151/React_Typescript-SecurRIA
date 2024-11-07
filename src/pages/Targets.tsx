import React, { useState } from "react";
import { Box, Grid, IconButton, useTheme } from "@mui/material";
import TableComponent from "../components/Table";
import PaginationComponent from "../components/Pagination";
import { targetData as initialData, TargetData } from "../data/targetData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TargetDialog from "../components/TargetDialog";
import {
  ButtonGrid,
  DescriptionTypography,
  StyledButton,
  StyledGrid,
  StyledHeading,
  TitleTypography,
} from "../styles/PageHeadingStyle";

const Targets: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState<TargetData[]>(initialData);
  const [editingTarget, setEditingTarget] = useState<TargetData | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const handleAddClick = () => {
    setEditingTarget(null);
    setOpenDialog(true);
  };

  const handleEditClick = (target: TargetData) => {
    setEditingTarget(target);
    setOpenDialog(true);
  };

  const handleDeleteClick = (targetId: number) => {
    setData(data.filter((target) => target.id !== targetId));
  };

  const handleDialogSubmit = (newTarget: TargetData) => {
    if (editingTarget) {
      setData(
        data.map((target) => (target.id === newTarget.id ? newTarget : target))
      );
    } else {
      const newId = data.length ? Math.max(...data.map((t) => t.id)) + 1 : 1;
      setData([...data, { ...newTarget, id: newId }]);
    }
    setOpenDialog(false);
  };

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getRowBackgroundColor = (index: number) => {
    return index % 2 === 0 ? "#E6F2FF" : theme.palette.common.white;
  };

  const headers = ["Name", "Email", "Title", "Option"];

  return (
    <>
      <StyledGrid container spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledHeading>
            <TitleTypography variant="h4">Target</TitleTypography>
            <DescriptionTypography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </DescriptionTypography>
          </StyledHeading>
        </Grid>
        <ButtonGrid item xs={12} md={4}>
          <StyledButton onClick={handleAddClick}>Add Target</StyledButton>
        </ButtonGrid>
      </StyledGrid>
      <Box sx={{ mt: 3 }}>
        <TableComponent
          data={data.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          headers={headers}
          getRowBackgroundColor={getRowBackgroundColor}
          renderActions={(row) => (
            <>
              <IconButton color="primary" onClick={() => handleEditClick(row)}>
                <EditIcon
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                  }}
                />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={() => handleDeleteClick(row.id)}
              >
                <DeleteIcon
                  sx={{ backgroundColor: "#BE0505", color: theme.palette.common.white }}
                />
              </IconButton>
            </>
          )}
        />
        <PaginationComponent
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <TargetDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleDialogSubmit}
        initialData={editingTarget} // Pass data for editing
      />
    </>
  );
};

export default Targets;
