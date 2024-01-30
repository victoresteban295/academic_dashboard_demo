"use client"
import { Alert, AlertTitle, Box } from "@mui/material";
import { useState } from "react";
import DemoAnnBackdrop from "./DemoAnnBackdrop";


const DemoAnn = () => {

    /* Backdrop Demo Announcement State Value & Function */
    const [openDemoAnn, setDemoAnn] = useState(false);
    const handleOpenDemoAnn = () => {
        setDemoAnn(true);
    }
    const handleCloseDemoAnn = () => {
        setDemoAnn(false);
    }

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
                severity="info" 
                onClick={handleOpenDemoAnn}
                sx={{
                    maxWidth: '500px',
                    cursor: 'pointer',
                }}
            >
                <AlertTitle> Demo </AlertTitle>
                Certain features are not available and any changes made will not be saved! Click here to learn more!
            </Alert>
            <DemoAnnBackdrop 
                openDemoAnn={openDemoAnn}
                handleCloseDemoAnn={handleCloseDemoAnn}
            />
        </Box>
    )
}

export default DemoAnn;
