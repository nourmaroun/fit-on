import {React, createContext} from 'react'
import { Route, Routes, Outlet, Link, Switch,
   BrowserRouter as Router, Navigate} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import HealthyLifestyle from './pages/HealthyLifestyle'
import SportsNews from './pages/SportsNews'
import WorkoutPlaylists from './pages/WorkoutPlaylists'
import ContactUs from './pages/ContactUs'
import Signin from './pages/Singin'
import Signup from './pages/Signup'
import PassRecovery from './pages/PassRecovery'
import EditProfile from './pages/EditProfile'
import Favorites from './pages/Favorites'
import SmoothieRecipes from './pages/SmoothieRecipes'
import NutritiousBreakfast from './pages/NutritiousBreakfast'
import BalancedDiet from './pages/BalancedDiet'
import JointsHarming from './pages/JointsHarming'
import Streching from './pages/Streching'
import Hiit from './pages/Hiit'
import WorkoutSongs from './pages/WorkoutSongs'
import ChildrenInSports from './pages/ChildrenInSports'
import BurnFatsTreadmill from './pages/BurnFatsTreadmill'
import { AuthProvider } from './contexts/AuthContext'


const App = () => {

  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="healthy-lifestyle" element={<HealthyLifestyle />} />
          <Route path="sports-news" element={<SportsNews />} />
          <Route path="workout-playlists" element={<WorkoutPlaylists />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="password-recovery" element={<PassRecovery />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="smoothie-recipes" element={<SmoothieRecipes/>} />
          <Route path="nutritious-breakfast" element={<NutritiousBreakfast />} />
          <Route path="balanced-diet" element={<BalancedDiet />} />
          <Route path="joints-harming" element={<JointsHarming />} />
          <Route path="streching" element={<Streching />} />
          <Route path="hiit" element={<Hiit />} />
          <Route path="workout-songs" element={<WorkoutSongs />} />
          <Route path="children-in-sports" element={<ChildrenInSports />} />
          <Route path="burn-fats-treadmill" element={<BurnFatsTreadmill />} />          
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </AuthProvider>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App
