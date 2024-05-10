'use client'
import HomeIcon from '@mui/icons-material/Home';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

function SideNav() {

    const pathname = usePathname();

    return (
        <div>
            {!pathname.includes('/auth') &&
                <div className="side-nav" >
                    <div className="side-nav__header">
                        <h2 className="side-nav__name">name</h2>
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

                        <div className="side-nav__menu-section">
                            <ul className="side-nav__menu-list">
                                <li className="side-nav__menu-item">
                                    <a href="#" className="side-nav__menu-link"><QuestionMarkRoundedIcon />Help</a>
                                </li>
                                <li className="side-nav__menu-item">
                                    <a href="#" className="side-nav__menu-link"><SettingsRoundedIcon />Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="side-nav__footer">
                        <div className="side-nav__footer-section">
                            <p className="side-nav__footer-icon"></p>
                            <div className="side-nav__footer-user">
                                <p className="side-nav__footer-username">John Doe</p>
                            </div>
                        </div>
                        <ArrowDropDownRoundedIcon />
                    </div>
                </div >
            }
        </div>
    )
}

export default SideNav