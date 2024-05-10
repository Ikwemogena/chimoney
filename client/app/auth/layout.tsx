import { Box } from "@mui/material";

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
            <Box bgcolor="#670b78" height={'100vh'} width={'100%'}>
                Image here
            </Box>
            {children}

        </Box >
    );
}
