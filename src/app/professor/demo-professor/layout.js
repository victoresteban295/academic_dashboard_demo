import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { Box, Stack } from '@mui/material';
import SideNavbar from '@/components/SideNavbar';

const ProfLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <Box
                    id="page"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                    }}
                >
                    <Navbar 
                        username="demo-professor"
                        firstname="demo"
                        lastname="professor"
                        role="professor"
                    />
                    <Box
                        id="page-content-container"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            id="center-page-container"
                            sx={{
                                display: 'flex',
                                flexGrow: 1,
                                maxWidth: '1175px',
                                pt: '70px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Stack
                                id="maincontent-footer-container"
                                sx={{
                                    flexGrow: 1,
                                    width: '100%',
                                }} 
                            >
                                <Box
                                    id="main-content"
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <Box
                                        id="sidenavbar-container"
                                        sx={{
                                            display: {xs: 'none', sm: 'flex'},
                                            flexGrow: 1,
                                            justifyContent: 'center',
                                            maxWidth: '175px',
                                            mt: 2,
                                            mx: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                            }}
                                        >
                                            <SideNavbar
                                                username="demo-professor"
                                                role="professor"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        id="main-content-container"
                                        sx={{
                                            maxWidth: '1000px',
                                            flexGrow: 1,
                                        }}
                                    >
                                        {children}
                                    </Box>
                                </Box>
                                <Footer />
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </body>
        </html>
    )

}

export default ProfLayout;
