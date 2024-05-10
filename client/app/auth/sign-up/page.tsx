"use client"
import { register } from "@/app/lib/actions"
import { SubmitButton } from "@/app/ui/button/submit"
import { Box, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useFormState } from "react-dom"

function page() {
  const router = useRouter()

  const goToSignIn = () => {
    router.push('/auth/sign-in')
  }


  const [state, formAction] = useFormState(register, null)

  return (
    <Box height={'100vh'} width={'100%'} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-between"} gap={6} paddingX={3} paddingY={3}>
        <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
          {/* <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={100} /> */}
          <Typography variant="h4" fontWeight={700}>Hi there,</Typography>
          <Typography variant="subtitle2" color={"GrayText"}>Sign up to start sending money instantly</Typography>
        </Box>
        <Box width={"100%"}>
          <form action={formAction}>
            <Box display={"flex"} flexDirection={"column"} gap={2} width={'400px'}>
              <TextField id="outlined-basic" name="name" label="Full Name" type="text" variant="outlined" fullWidth required />
              <TextField id="outlined-basic" name="username" label="Username" type="text" variant="outlined" fullWidth required />
              <TextField id="outlined-basic" name="email" label="Email" type="email" variant="outlined" fullWidth required />
              <TextField id="outlined-basic" name="phone_number" label="Phone Number" type="text" variant="outlined" fullWidth required />
              <TextField id="outlined-basic" name="password" label="Password" type="password" variant="outlined" fullWidth required />
            </Box>
            <Box display={"flex"} marginTop={5}>
              <SubmitButton text='Create My Account' />
            </Box>
          </form>
        </Box>
        <Box position={"fixed"} bottom={0}>
          <Typography variant="subtitle1" display={'flex'} alignItems={"center"} gap={1} fontStyle={"italic"}>Powered by <Image src="https://chimoney.io/assets/icons/chimoney-purple-logo.svg" alt="Chimoney Logo" width={100} height={40} /></Typography>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1}>
        <Typography variant="subtitle1">Have an account?</Typography>
        <Box>
          <button className="auth-sign" onClick={() => goToSignIn()}>Sign In</button>
        </Box>
      </Box>
    </Box>
  )
}

export default page