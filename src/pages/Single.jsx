import React from 'react'

const Single = () => {
  return (
    
    <div className='container ' >
        <div className="section-imnage">
            <div className="main-img">
                <img src="img1.jpg" alt="" />
            </div>
            <div className="two-section-img">
                <div className="img">
                <img src="img2.jpg" alt="" />
                </div>
                <div className="img">
                <img src="img3.jpg" alt="" />
                </div>
            </div>
        </div>

        <div className="infos">
            <div className="details">
                <h1>details</h1>
                <div className="detail">
                <h2> Price Range </h2>
                <p> 20.00$ -45.00$ </p>
                </div>
                <div className="detail">
                <h2> Kitchens </h2>
                <p> Frensh , Grill  ,Modern </p>
                </div>
                <div className="detail">
                <h2> Mail </h2>
                <p> Lunch ,Dinner,Drinks </p>
                </div>
                <div className="btns">
                    <button>3D  Expreience</button>
                </div>
            </div>
            <div className="map">
                <div className="map-img">
                    <img src="map.png" alt="" />
                </div>
                <div className="map-item">
                <i class="fa-solid fa-location-dot"></i>
                <p>
                11 Quai Jules Courmont In the Boscolo Hotel, 69002 Lyon France
                </p>
                </div>
                <div className="items">
                <div className="map-item">
                <i class="fa-solid fa-house"></i>         
                       <p>
                Cordeliers - Jacobins
                </p>
                </div>
                <div className="map-item">
                <i class="fa-solid fa-envelope"></i>
               <p>
               Email
                </p>
                </div>
                
                </div>
                <div className="map-item">
                <i class="fa-solid fa-phone"></i>
                <p>
               Phone
                </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Single