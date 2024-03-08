import { Alert, Box, Button, Dialog, Stack, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import AccountReviewInput from "./AccountReviewInput";
import StudentReviewInput from "./StudentReviewInput";
import ProfessorReviewInput from "./ProfessorReviewInput";
import { useState } from "react";
import LoadingBackDrop from "@/components/loading/LoadingBackDrop";
import { PersonAddAlt } from "@mui/icons-material";

const ReviewForm = ({ 
    profileType, 
    schoolName, 
    schoolId,
    firstname,
    middlename,
    lastname,
    birthMonth,
    birthDay,
    birthYear,
    email,
    phone,
    username,
    password,
    academicYear,
    major,
    minor,
    concentration,
    academicRole,
    apptYear,
    department,
    officeBuilding,
    officeRoom,
    handleBack }) => {

    const router = useRouter();
    const [alert, setAlert] = useState(false);
    let displayAlert
    if(alert) {
        displayAlert = {}
    } else {
        displayAlert = {
            display: 'none',
        }
    }

    const [loading, setLoading] = useState(false);
    const triggerLoading = () => {
        setLoading(true);
    }

    const handleSubmitForm = () => {
        handleOpenWarnDemo();
        /* triggerLoading(); */
        /* router.push('/')  */
    }

    /* Warn Demo Backdrop */
    const [openWarnDemo, setOpenWarnDemo] = useState(false);
    const handleOpenWarnDemo = () => {
        setOpenWarnDemo(true);
        setTimeout(() => {
            handleCloseWarnDemo();
        }, "5000");
    }
    const handleCloseWarnDemo = () => {
        setOpenWarnDemo(false);
    }
    
    //add action and server action
    return (
        <Box
            id='review-form'
            className='form'
            sx={{
                flexGrow: 1,
                maxWidth: '500px',
            }}
        >
            <Dialog
                fullWidth={true}
                maxWidth="mobile"
                open={openWarnDemo}
            >
                <Box
                    sx={{
                        p: 2,
                    }}
                >
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        {"Creating a New Account is not available for Demo!"}
                    </Typography>
                </Box>
            </Dialog>

            <LoadingBackDrop loading={loading} />
            <form noValidate action={handleSubmitForm}>
                <Alert
                    severity='error'
                sx={{
                    m: 2,
                    ...displayAlert,
                }}
                >
                    Something Went Wrong - please try again later 
                </Alert> 
                <Stack
                    id='review-form-sections'
                    className='form-sections'
                    spacing={4}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <AccountReviewInput 
                        profileType={profileType}
                        schoolName={schoolName}
                        firstname={firstname}
                        middlename={middlename}
                        lastname={lastname}
                        birthMonth={birthMonth}
                        birthDay={birthDay}
                        birthYear={birthYear}
                        email={email}
                        phone={phone}
                        username={username}
                        password={password.length}
                    />
                    {profileType === 'STUDENT' ? (
                        <StudentReviewInput 
                            academicYear={academicYear}
                            major={major}
                            minor={minor}
                            concentration={concentration}
                        />
                    ) : (
                        <ProfessorReviewInput 
                            academicRole={academicRole} 
                            apptYear={apptYear}
                            department={department}
                            officeBuilding={officeBuilding}
                            officeRoom={officeRoom}
                        />
                    )}
                </Stack>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button 
                        variant="text"
                        onClick={handleBack}
                        sx={{ 
                            bgcolor: 'primary.light',
                            mr: 1 ,
                            px: 3,
                        }}
                    > 
                        <Typography
                            variant="button"
                            sx={{
                                color: 'primary.main',
                                fontWeight: '700',
                            }}
                        >
                            Back
                        </Typography>
                    </Button> 
                    <Box sx={{ flex: '1 1 auto' }} /> 
                    <Button 
                        type="submit"
                        variant="text" 
                        startIcon={<PersonAddAlt />}
                        sx={{
                            bgcolor: '#ebfff2',
                        }}
                    > 
                        <Typography
                            variant="button"
                            sx={{
                                fontWeight: '700',
                            }}
                        >
                            Submit
                        </Typography>
                    </Button> 
                </Box> 
            </form>
        </Box>

    )

}

export default ReviewForm;
