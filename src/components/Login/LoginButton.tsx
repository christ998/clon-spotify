import React from 'react'
import {Button} from "@mui/material";

interface LoginButtonProps {
    children: React.ReactNode
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    variant?: "contained" | "text" | "outlined" | undefined
    onClick?: React.MouseEventHandler
}

const LoginButton = ({children, color="primary", variant ="contained", onClick}:LoginButtonProps) => {
    return (
        <Button sx={{
            padding: "20px",
            borderRadius: "90px",
            color: "#fff",
            fontWeight: "bolder"
        }}
                variant={variant}
                color={color}
                onClick={onClick}
        >
            {children}
        </Button>
    )
}


export default LoginButton