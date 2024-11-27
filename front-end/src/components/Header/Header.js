import React from 'react'
import styles from './Header.module.css'
import image from '../../assets/Home.png'

const Home = () => {
  return (
    <div className={styles.container}>

        <div className={styles.heading}>
        <h1>ResumeHero</h1>
        <p>Crafting legendary <span>Resumes</span> for real life <span>Heros</span></p>
       
        </div>

        <div className={styles.Homeimage}>
           <img src={image} alt="bot making resume" /> 
        </div>
    </div>
  )
}

export default Home
