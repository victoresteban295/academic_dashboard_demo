import { Box, Button, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText, Alert, Stack } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/lib/schemas/authSchema";

const LoginForm = ({ triggerLoading, closeLoading }) => {
    const router = useRouter();

    /* React Hook Form */
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(LoginFormSchema), //Zod Validation Schema
    });
    const { errors } = formState;

    /* User Entered Incorrect Username/Password */
    const [alert, setAlert] = useState(false);

    /* User Successfully Created Account */
    const searchParams = useSearchParams();
    const [regSuccess, setSuccess] = useState(searchParams.get('success') === 'true');

    /* Backend Rest API Error */
    const [displayWarning, setdisplayWarning] = useState(false);

    /* Handle Password View */
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLoginForm = async (data) => {
        triggerLoading();
        localStorage.clear(); //Clear In-Case Logout
        const res = await fetch('https://academic-dashboard-demo.vercel.app/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username, 
                password: data.password 
            })
        });
        
        if(res.ok) {
            setAlert(false);
            const body = await res.json(); //Get User's role
            router.push(`/${body.role}/${body.username}`);
        } else {
            closeLoading();
            setdisplayWarning(false);
            setSuccess(false);
            setAlert(true);
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit(handleLoginForm)} >
            <Stack
                spacing={1}
            >
                {regSuccess && (
                    <Alert
                        severity="success"
                        sx={{
                            width: '100%',
                        }} 
                    > 
                        Account Successfully Created
                    </Alert>
                )}
                {alert && (
                    <Alert
                        severity="error"
                        sx={{
                            width: '100%',
                        }} 
                    > 
                        Wrong Username/Password 
                    </Alert>
                )}
                {displayWarning && (
                    <Alert
                        severity="warning"
                        sx={{
                            maxWidth: '266px',
                        }} 
                    > 
                        Something went wrong on our end - Please try again later!
                    </Alert>
                )}
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    {...register("username")} 
                />
                <FormControl sx={{ m: 1 }} variant="outlined" error={!!errors.password} >
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        {...register("password")} 
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <FormHelperText>{errors.password?.message}</FormHelperText>
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button 
                        type='submit' 
                        variant="text"
                        sx={{
                            bgcolor: 'primary.light',
                            px: 3,
                        }}
                    >
                        <Typography 
                            sx={{
                                color: 'primary.main',
                                fontWeight: '700',
                            }}
                            variant="button">
                            Login
                        </Typography>
                    </Button>
                </Box>
            </Stack>
        </form>
    )
}

export default LoginForm;
