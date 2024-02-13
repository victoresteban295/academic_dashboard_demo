import { Box, Tooltip, Typography } from "@mui/material"
import { cookies } from "next/dist/client/components/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Dashboard",
}

export const viewport = {
    themeColor: '#78a1bb'
}

const ProfessorHomePage = () => {
    const cookieStore = cookies();
    const { value: username } = cookieStore.get('username');
    const { value: role } = cookieStore.get('role');

    const isProfessor = (username === 'demo-professor') && (role === 'PROFESSOR');
    if(!isProfessor) {
        notFound(); 
    }

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
                }}
            >
                Welcome to
            </Typography>
            <Typography
                variant='h6'
                align='center'
                sx={{
                }}
            >
                Professor Account Demo
            </Typography>
            <Typography
                variant='h6'
                align='center'
                sx={{
                    fontWeight: '700'
                }}
            >
                Dashboard Page Under Development
            </Typography>
        </Box>
    )

}

export default ProfessorHomePage;
