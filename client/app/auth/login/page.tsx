"use client"
import { Box, Button, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useState } from "react";

function page() {
    return (
        <Box
            display="flex"
            // justifyContent={"center"}
            alignItems="center"
        >
            <Box bgcolor="#670b78" height={'100vh'} width={'100%'}>
                onmi
            </Box>
            <Login />

        </Box >
    )
}

export default page

// login component here
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box height={'100vh'} width={'100%'} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-between"} border={'1px solid red'} borderRadius={2} padding={5}>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={100} />
                    <Typography variant="h6">Welcome to FundStack</Typography>
                </Box>
                <Box width={"100%"}>
                    <form onSubmit={handleSubmit}>
                        <Box display={"flex"} flexDirection={"column"} gap={2} width={'350px'}>
                            <TextField id="outlined-basic" label="Email" type="email" variant="outlined" fullWidth value={email} onChange={handleEmailChange} required />
                            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth value={password} onChange={handlePasswordChange} required />
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} marginTop={2}>
                            <Button type="submit" variant="contained">Login</Button>
                        </Box>
                    </form>
                </Box>
                <Box position={"fixed"} bottom={20}>
                    <Typography variant="subtitle1" display={'flex'} alignItems={"center"} gap={1} fontStyle={"italic"}>Powered by <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={40} /></Typography>
                </Box>
            </Box>
        </Box>
    )
}