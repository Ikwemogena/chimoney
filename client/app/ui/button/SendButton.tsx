'use client'

import CircularProgress from '@mui/material/CircularProgress';
import { useFormStatus } from 'react-dom'


interface SubmitButtonProps {
    text: 'Send' | 'Request'
}

export function SendButton({ text }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending}>
            {pending && <Loader />} {text}
        </button>
    )
}

function Loader() {
    return (
        <CircularProgress size={15} color='inherit' />
    )
}