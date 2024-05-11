"use client"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { fetchUser, signOut } from '../lib/actions';
import { toast } from 'sonner';
export default function Profile() {
    const [email, setEmail] = useState(null);
    const [account, setAccount] = useState(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const copyToClipboard = () => {
        if (account) {
            navigator.clipboard.writeText(account);
            toast.info('Copied to clipboard');
        }
    };

    const logout = () => {
        signOut()
        handleClose()
    }

    const fetchData = async () => {
        const user = await fetchUser();
        setEmail(user?.email);
        setAccount(user?.id);
    };

    useEffect(() => {

        fetchData();
    }, []);

    return (
        <div>

            <div className="side-nav__footer" id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <div className="side-nav__footer-section">
                    <p className="side-nav__footer-icon"></p>
                    <div className="side-nav__footer-user">
                        <p className="side-nav__footer-username">{email}</p>
                    </div>
                </div>
                <ArrowDropDownRoundedIcon />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={copyToClipboard}>{account}</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
