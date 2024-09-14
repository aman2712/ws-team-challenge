import React from 'react'

const Main = () => {
  return (
    <div>
        <div className="main-section">
            <div className="input">
                <input type="text" placeholder='Start typing to search... ' />
                <i className="fa-solid fa-microphone"></i>
            </div>
        </div>

        <div className="container">
        <div className='restaurants'>
            <h2>Popular Restaurants in Your Area</h2>
            <div className="restaurants-list">
            <div className='restaurant-card'>
                <img src='/restaurant-1.jpg' />
                <h3>Petit Ogre</h3>
                <p>2 kms from your current location</p>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>40-50 €</p>
            </div>
            <div className='restaurant-card'>
                <img src='/restaurant-2.jpg' />
                <h3>Restaurant le Splendid Lyon</h3>
                <p>3 kms from your current location</p>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>10-20 €</p>
            </div>
            <div className='restaurant-card'>
                <img src='/restaurant-3.jpg' />
                <h3>L'Étage - Restaurant Gastronomique Lyon</h3>
                <p>5.5 kms from your current location</p>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>30-70 €</p>
            </div>
            <div className='restaurant-card'>
                <img src='/restaurant-4.jpg' />
                <h3>Le Book-Lard</h3>
                <p>6 kms from your current location</p>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>40-50 €</p>
            </div>
            </div>
        </div>
        <div className="quote">
            <h1>"Food is our common ground, a universal experience." — James Beard</h1>
        </div>
        <div className='restaurants dishes'>
            <h2>Explore popular dishes in Lyon</h2>
            <div className="restaurants-list">
            <div className='restaurant-card'>
                <img src='/food-1.jpg' />
                <h3>La tarte praline.</h3>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>40-50 €</p>
            </div>
            <div className='restaurant-card'>
                <img src='/food-2.jpg' />
                <h3>Les bugnes.</h3>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>40-50 €</p>
            </div>
            <div className='restaurant-card'>
                <img src='/food-3.jpg' />
                <h3>La cervelle de canut.</h3>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>40-50 €</p>
            </div>
            <div className='restaurant-card'>
                <img src='/food-4.jpg' />
                <h3>Le Saint-Marcellin.</h3>
                <p className='description'>15 Rue de la Bannière
                    Restaurant branché de cuisine locale
                </p>
                <p className='price'>40-50 €</p>
            </div>
            </div>
        </div>
        </div>

        <div className='cta'>
            <h1>Start Exploring Right Now</h1>
            <button>Explore Restaurants <i class="fa-solid fa-right-long"></i></button>
        </div>
        
        <footer>
            <p>
                &copy; 2024; Flavors of Lyon; All Rights Reserved
            </p>
        </footer>
    </div>
  )
}

export default Main