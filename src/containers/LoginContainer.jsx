import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const LoginContainer = () => {
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [otpTimer, setOTPTimer] = useState(0);
    const [formError, setFormError] = useState({
        mobileNumber: '',
        otp: '',
    });
    
    const { control, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: {
            mobileNumber: "",
        },
    })

    useEffect(() => {
        const otpInterval = setInterval(() => {
            if (otpTimer > 0) {
                setOTPTimer(otpTimer - 1);
            }
            
            if (otpTimer === 0) {
                clearInterval(otpInterval)
            }
        }, 1000);

        return () => {
            clearInterval(otpInterval);
        }
    }, [otpTimer])

    const handleLoginSubmit = (formData) => {
        // console.log({ formData });
        // API call for login and verify OTP here
    }

    const handleSendOTP = () => {
        setIsOTPSent(true);
        setOTPTimer(50);
        // API call for send OTP
    }


    return (
        <Stack
            alignItems="flex-start"
            justifyContent="center"
            sx={{
                // backgroundColor: '#F4F6F9',
                backgroundImage: 'url(/login_background.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                ml: '200px'
            }}
        >
            <Card raised sx={{ width: '420px' }}>
                <Stack sx={{ p: 3, minHeight: '360px' }}>
                    <Stack sx={{ flex: 0, mb: 4 }} alignItems="center" justifyContent="center">
                        <div>
                            <img src="/vite.svg" style={{ height: `80px` }} />
                        </div>
                    </Stack>

                    <Stack sx={{ flex: 1, px: 2 }} alignItems="center" justifyContent="center">
                        <form onSubmit={handleSubmit(handleLoginSubmit)}>
                            <Stack sx={{ mb: 3 }}>
                                <Controller
                                    name="mobileNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            size="small"
                                            label="Mobile Number"
                                            InputProps={{ endAdornment: (
                                                <Button
                                                    onClick={handleSendOTP}
                                                    disabled={isOTPSent ? otpTimer > 0 : !field.value}
                                                    disableRipple
                                                    sx={{ whiteSpace: 'nowrap', textTransform: 'none' }}
                                                    size="small"
                                                    variant="text"
                                                >
                                                    {isOTPSent ? 'Resend OTP' : 'Send OTP'}
                                                </Button>
                                            )}}
                                        />
                                    )}
                                />
                                
                                {isOTPSent && <Typography variant="caption">Resend OTP in {otpTimer}s</Typography>}
                            </Stack>

                            <Controller
                                name="otp"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        disabled={!isOTPSent}
                                        fullWidth
                                        size="small"
                                        label="OTP"
                                        sx={{ mb: 3 }}
                                    />
                                )}
                            />

                            <Button
                                disabled={!isOTPSent}
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mb: 2 }}
                            >
                                Login
                            </Button>
                        </form>
                        
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    )
}

export default LoginContainer;