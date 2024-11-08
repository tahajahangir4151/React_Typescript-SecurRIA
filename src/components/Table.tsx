import React, { ReactNode, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

interface TableComponentProps {
  data: Array<any>;
  headers: Array<string>;
  getRowBackgroundColor?: (index: number) => string;
  renderActions?: (row: any) => ReactNode;
  onRowClick?: (row: any) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  headers,
  getRowBackgroundColor,
  renderActions,
  onRowClick,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TableContainer
      component={Paper}
      key={screenWidth}
      sx={{
        border: "1px solid #C1C1C1",
        maxHeight: { xs: "50vh", sm: "65vh" },
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: "bold",
                  color: "#000000",
                  padding: { xs: "8px", sm: "16px" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: getRowBackgroundColor
                  ? getRowBackgroundColor(index)
                  : "#FFF",
                cursor: onRowClick ? "pointer" : "default",
                textDecoration: onRowClick ? "underline" : "none",
              }}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {Object.entries(row).map(([key, value], idx) => {
                if (key !== "id") {
                  return (
                    <TableCell
                      key={idx}
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        padding: { xs: "8px", sm: "16px" },
                      }}
                    >
                      {value as ReactNode}
                    </TableCell>
                  );
                }
                return null;
              })}

              {renderActions && (
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    {renderActions(row)}
                  </Box>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
