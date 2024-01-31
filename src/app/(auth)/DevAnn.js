import { Alert, AlertTitle, Box } from "@mui/material";

const DevAnn = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 2,
            }}
        >
            <Alert 
                variant="outlined"
                severity="warning" 
                sx={{
                    maxWidth: '500px',
                }}
            >
                <AlertTitle> Website is Under Development </AlertTitle>
                Certain pages are under development! Updates will be made as soon as they become available.
            </Alert>
        </Box>
    )
}

export default DevAnn;
