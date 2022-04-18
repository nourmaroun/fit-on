import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
           <CloseIcon /> 
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='workouts' onClick={toggle}>Workouts</SidebarLink>
            <SidebarLink to='healthy-lifestyle' onClick={toggle}>Healthy Lifestyle</SidebarLink>
            <SidebarLink to='sports-news' onClick={toggle}>Sports News</SidebarLink>
            <SidebarLink to='workout-playlists' onClick={toggle}>Workout Playlists</SidebarLink>
            <SidebarLink to='contact-us' onClick={toggle}>Contact Us</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar