import React, { useState } from 'react'
import "./nav.css"
import "../profilecard/procard.css"
import p1 from "../../Assets/Rectangle10.png"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProfileCard from '../profilecard/ProfileCard';
import Logout from '../logout/Logout';

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className='nav'>
        <div className="nav-left">
           <h3> Good Morning ! 🌞</h3>
        </div>
        <div className="nav-right">
            {window.innerWidth < 800 ? 
            <>
             <Button aria-describedby={id} variant="none" onClick={handleClick}>
             {/* <div className="profile"> */}
            <div className="profile-pic">
                    <img src={p1} alt="" />
                </div>
                {/* </div> */}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
       <div className="popovercard">
        <ProfileCard/>
        <Logout/>
       </div>
      </Popover>
            </> :
             <>
            <div className="profile">
                <div className="name">
                    <p>John Deo</p>
                    <p>johndeo@g.com</p>
                </div>
                <div className="profile-pic">
                    {/* <img src={p1} alt="" /> */}
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Nav