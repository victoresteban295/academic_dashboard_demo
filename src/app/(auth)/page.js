import LoginWidget from "@/components/auth/login/LoginWidget"
import { Box } from "@mui/material"
import DemoAnnBackdrop from "./DemoAnnBackdrop"

const login = () => {
    return (
        <>
            <DemoAnnBackdrop />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 2,
                    maxWidth: '100%',
                }}
            >
                <LoginWidget />
            </Box>
        </>
    )
}

export default login
