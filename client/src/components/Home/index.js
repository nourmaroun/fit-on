import React from 'react'
import { 
  PicturesCategory, 
  Picture, 
  Picturetitle, 
  PictureAndTitle, 
  Categorytitle,
  Category
} from './HomeElements'
import home21 from '../../images/home-2-1.jpg'
import home22 from '../../images/home-2-2.jpg'
import home23 from '../../images/home-2-3.jpg'
import home31 from '../../images/home-3-1.jpg'
import home32 from '../../images/home-3-2.jpg'
import home33 from '../../images/home-3-3.jpg'
import home41 from '../../images/home-4-1.jpg'
import home42 from '../../images/home-4-2.jpg'
import home43 from '../../images/home-4-3.jpg'


const HomeElements = () => {
  return (
    <>
      <Category style={{marginTop: '0'}}>
      <Categorytitle>NUTRITION</Categorytitle>
      <PicturesCategory>
        <PictureAndTitle>
          <a href='smoothie-recipes'><Picture src={home21} alt={'SMOOTHIE RECIPES'} /></a>
          <Picturetitle>​DELICIOUS SMOOTHIE RECIPES</Picturetitle>
        </PictureAndTitle>
        <PictureAndTitle>
          <a href='nutritious-breakfast'><Picture src={home22} alt={'NUTRITIOUS BREAKFAST'} /></a>
          <Picturetitle>​GET STARTED WITH A NUTRITIOUS BREAKFAST</Picturetitle>
        </PictureAndTitle>
        <PictureAndTitle>
          <a href='balanced-diet'><Picture src={home23} alt={'BALANCED DIET'} /></a>
          <Picturetitle>HOW TO MAKE SURE YOUR DIET IS BALANCED</Picturetitle>
        </PictureAndTitle>
      </PicturesCategory>
      </Category>
      <Category>
      <Categorytitle>STRENGTH</Categorytitle>
      <PicturesCategory>
        <PictureAndTitle>
          <a href='joints-harming'><Picture src={home31} alt={'JOINTS HARMING MISTAKES'} /></a>
          <Picturetitle>5 EXERCICE MISTAKES HARMING YOUR JOINTS</Picturetitle>
        </PictureAndTitle>
        <PictureAndTitle>
          <a href='streching'><Picture src={home32} alt={'STRECHING EVERYDAY​'} /></a>
          <Picturetitle>HOW TO START STRECHING EVERYDAY​</Picturetitle>
        </PictureAndTitle>
        <PictureAndTitle>
          <a href='hiit'><Picture src={home33} alt={'2O MINUTES HIIT WORKOUT'} /></a>
          <Picturetitle>2O MINUTES HIIT WORKOUT FOR A STRONGER UPPER BODY</Picturetitle>
        </PictureAndTitle>
      </PicturesCategory>
      </Category>
      <Category>
      <Categorytitle>CARDIO</Categorytitle>
      <PicturesCategory>
        <PictureAndTitle>
          <a href='workout-songs'><Picture src={home41} alt={'SMOOTHIE RECIPES'} /></a>
          <Picturetitle>HOW TO EASILY BURN MORE FATS IN THE TREADMILL</Picturetitle>
        </PictureAndTitle>
        <PictureAndTitle>
          <a href='children-in-sports'><Picture src={home42} alt={'NUTRITIOUS BREAKFAST'} /></a>
          <Picturetitle>HOW TO INVOLVE CHILDREN IN SPORTS</Picturetitle>
        </PictureAndTitle>
        <PictureAndTitle>
          <a href='burn-fats-treadmill'><Picture src={home43} alt={'BALANCED DIET'} /></a>
          <Picturetitle>SONGS FOR YOUR WORKOUT PLAYLIST</Picturetitle>
        </PictureAndTitle>
      </PicturesCategory>
      </Category>
    </>
  )
}

export default HomeElements