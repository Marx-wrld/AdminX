import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'accesslevel', headerName: 'Access Level', flex: 1, renderCell: (params) => {
                const { value } = params;
                let icon;
                switch (value) {
                    case 'admin':
                        icon = <AdminPanelSettingsOutlined />;
                        break;
                    case 'manager':
                        icon = <SecurityOutlined />;
                        break;
                    case 'user':
                        icon = <LockOpenOutlined />;
                        break;
                    default:
                        icon = null;
                        break;
                }
                return (
                    <Box
                        component="div"
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                    >
                        {icon}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {value}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Manage the Team members" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;
