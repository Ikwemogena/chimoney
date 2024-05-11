"use client"
import { login } from "@/app/lib/actions"
import { SubmitButton } from "@/app/ui/button/submit"
import { Box, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useFormState } from "react-dom"

function page() {

    const router = useRouter()

    const [state, formAction] = useFormState(login, null)

    const goToSignUp = () => {
        router.push('/auth/sign-up')
    }

    return (
        <Box height={'100vh'} width={'100%'} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-between"} gap={6} padding={5}>
                <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
                    <Typography variant="h4" fontWeight={700}>Welcome back,</Typography>
                    <Typography variant="subtitle2" color={"GrayText"}>Sign in to your account to continue</Typography>
                </Box>
                <Box width={"100%"}>
                    <form action={formAction}>
                        <Box display={"flex"} flexDirection={"column"} gap={2} width={'400px'}>
                            <TextField id="outlined-basic" name="email" label="Email" type="email" variant="outlined" fullWidth required />
                            <TextField id="outlined-basic" name="password" label="Password" type="password" variant="outlined" fullWidth required />
                        </Box>
                        <Box display={"flex"} marginTop={5}>
                            <SubmitButton text="Sign In" />
                        </Box>
                    </form>
                </Box>
                <Box position={"fixed"} bottom={20}>
                    <Typography variant="subtitle1" display={'flex'} alignItems={"center"} gap={1} fontStyle={"italic"}>Powered by <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={40} /></Typography>
                </Box>
            </Box>

            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} marginTop={2} gap={1}>
                <Typography variant="subtitle1">Don't have an account?</Typography>
                <Box>
                    <button className="auth-sign" onClick={() => goToSignUp()}>Sign Up</button>
                </Box>
            </Box>
        </Box>
    )
}

export default page