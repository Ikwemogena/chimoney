import { Box } from "@mui/material";
import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Box
            display="flex"
            alignItems="center"
        >
            <Box className="auth-image" bgcolor="#670b78" height={'100vh'} width={'100%'} overflow={"hidden"}>
                {/* <Image src={'https://images.unsplash.com/photo-1593182440959-9d5165b29b59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} width={100} height={100} layout="responsive" quality={100}
                    alt="Auth Image" /> */}
            </Box>
            {children}

        </Box >
    );
}
