'use client'

import CircularProgress from '@mui/material/CircularProgress';
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button className='submit-button' type="submit" disabled={pending}>
            {pending && <Loader />} Submit
        </button>
    )
}

function Loader() {
    return (
        <CircularProgress size={15} color='inherit' />
    )
}