'use client'
import HomeIcon from '@mui/icons-material/Home';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import Profile from '../ui/Profile';

function SideNav() {

    const pathname = usePathname();

    return (
        <div>
            {!pathname.includes('/auth') &&
                <div className="side-nav" >
                    <div className="side-nav__inner">
                        <div className="side-nav__header">
                            <h2 className="side-nav__name">Sender.</h2>
                        </div>

                        <div className="side-nav__menu">
                            <div className="side-nav__menu-section">
                                <ul className="side-nav__menu-list">
                                    <li className="side-nav__menu-item">
                                        <Link href="/" className="side-nav__menu-link">
                                            <HomeIcon />
                                            Home
                                        </Link>
                                    </li>
                                    <li className="side-nav__menu-item">
                                        <Link href="/transactions" className="side-nav__menu-link"><PaidRoundedIcon />Transactions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Profile />
                </div >
            }
        </div>
    )
}

export default SideNav