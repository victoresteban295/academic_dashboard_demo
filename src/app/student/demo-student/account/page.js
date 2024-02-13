import { Box, Tooltip, Typography } from "@mui/material"
import Image from "next/image";

export const metadata = {
    title: "Account",
}

export const viewport = {
    themeColor: '#78a1bb'
}

const StudAccountPage = () => {

    return (
        <Box
            sx={{
                mx:2,
                height: '100%',
                pt: '50px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Tooltip title="Icon By Icon8" arrow placement="right">
                    <Image 
                        src="/images/development.png"
                        height={96}
                        width={96}
                        alt="Picture of Gear"
                    />
                </Tooltip>
            </Box>
            <Typography
                variant='h6'
                align='center'
                sx={{
                    fontWeight: '700'
                }}
            >
                {"Student's Account Page Under Development"}
            </Typography>
        </Box>
    )
}

export default StudAccountPage;
