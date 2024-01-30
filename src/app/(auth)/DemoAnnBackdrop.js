import { Box, Button, Divider, Popover, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const DemoAnnBackdrop = ({ openDemoAnn, handleCloseDemoAnn}) => {
    return (
        <Popover
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{ 
                bgcolor: 'rgba(0,0,0,0.5)',
                zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
            open={openDemoAnn}
            onClose={handleCloseDemoAnn}
        >
            <Stack
                className="popover-widget"
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '700px',
                    p: 4,
                }}
            >
                <Stack
                    className="demo-descipt"
                    spacing={1}
                >
                    <Typography
                        variant='h4'
                        align='center'
                        sx={{
                            fontFamily: teko.style.fontFamily,
                        }}
                    >
                        Academic Dashboard Demo
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            textAlign:{xs: 'center', sm: 'left'} 
                        }}
                    >
                        {"The purpose of this demo is to showcase Academic Dashboard’s intuitive UI without connecting to any backend dependency. Users can explore Academic Dashboard as a student or professor but any changes made will be reverted after the page refreshes."}
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            textAlign:{xs: 'center', sm: 'left'} 
                        }}
                    >
                        {"To view Academic Dashboard's source code, click on the GitHub link found on the footer below."}
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            textAlign:{xs: 'center', sm: 'left'} 
                        }}
                    >
                        {"To log in as a professor or as a student use the following credentials: "}
                    </Typography>
                </Stack>
                <Stack
                    className="accounts-credentials"
                    direction={{xs: 'column', sm: 'row'}}
                    spacing={3}
                    justifyContent="space-evenly"
                    alignItems="center"
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Stack
                        className="professor-credentials"
                        spacing={1}
                    >
                        <Typography 
                            variant="h5"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                borderBottom: '2px solid',
                                borderColor: '#000'
                            }}
                        >
                            {"Professor's Account"}
                        </Typography>
                        <Stack
                            spacing={0}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {"Username:"}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                >
                                    {"demo-professor"}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {"Password:"}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                >
                                    {"password"}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        className="student-credentials"
                        spacing={1}
                    >
                        <Typography 
                            variant="h5"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                borderBottom: '2px solid',
                                borderColor: '#000'
                            }}
                        >
                            {"Student's Account"}
                        </Typography>
                        <Stack
                            spacing={0}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {"Username:"}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                >
                                    {"demo-student"}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {"Password:"}
                                </Typography>
                                <Typography 
                                    variant="body1"
                                >
                                    {"password"}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: {xs: 'center', sm: 'flex-end'},
                        pt: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        startIcon={<Close />}
                        onClick={handleCloseDemoAnn}
                    >
                        Close
                    </Button>
                </Box>
            </Stack>
        </Popover>
    )
}

export default DemoAnnBackdrop;
