"use client"
import { login } from "@/app/lib/actions"
import { Box, Button, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useFormState } from "react-dom"

function page() {
    return (
        <Box
            display="flex"
            // justifyContent={"center"}
            alignItems="center"
        >
            <Box bgcolor="#670b78" height={'100vh'} width={'100%'}>
                Image here
            </Box>
            <Login />

        </Box >
    )
}

export default page

// login component here
function Login() {

    const [state, formAction] = useFormState(login, null)

    return (
        <Box height={'100vh'} width={'100%'} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-between"} gap={6} padding={5}>
                <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
                    {/* <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={100} /> */}
                    <Typography variant="h4" fontWeight={700}>Welcome, Morgz</Typography>
                    <Typography variant="subtitle2" color={"GrayText"}>Login to your account to continue</Typography>
                </Box>
                <Box width={"100%"}>
                    <form action={formAction}>
                        <Box display={"flex"} flexDirection={"column"} gap={2} width={'400px'}>
                            <TextField id="outlined-basic" name="email" label="Email" type="email" variant="outlined" fullWidth required />
                            <TextField id="outlined-basic" name="password" label="Password" type="password" variant="outlined" fullWidth required />
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"} paddingTop={"1rem"}>
                            <Typography variant="subtitle1">Remember me</Typography>
                            <Typography variant="subtitle1">Forgot password?</Typography>
                        </Box>
                        <Box display={"flex"} marginTop={5}>
                            <Button type="submit" variant="contained">Login</Button>
                        </Box>
                    </form>
                </Box>
                <Box position={"fixed"} bottom={20}>
                    <Typography variant="subtitle1" display={'flex'} alignItems={"center"} gap={1} fontStyle={"italic"}>Powered by <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={40} /></Typography>
                </Box>
            </Box>

            {/* <Box display={"flex"} justifyContent={"center"} marginTop={2}>
                <Typography variant="subtitle1">Don't have an account?</Typography>
            </Box> */}
        </Box>
    )
}