import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import roomImg1 from '../../Image/Rectangle 26.png';
import roomImg2 from '../../Image/Rectangle 27.png';
import roomImg3 from '../../Image/Rectangle 28.png';
import  './BookingDetails.css';


const BookingDetails = () => {
    return (
        <div className = 'd-flex '>
            <div className="roomBook mt-4 ml-5 ">
               
                <div className=" d-flex mb-3 ">
                    <div>
                        <img src={roomImg1} alt="roomImg" />

                    </div>
                   
                     <div className = " ml-4 ">
                        <h5>Apartment in safe peaceful stay</h5>
                        <p><small>1 guests 1 bedrooms 1 beds 1 baths</small></p>
                        <p><small>With Air conditioning kitchen</small></p>
                        <p><small>Cancellation flexibility available</small></p>
                        <p> <FontAwesomeIcon className = "starIcon"icon={faStar} />  <b>4.8(10)  $52/</b>night $167 total</p>
                    </div>

                </div>
                <div className="d-flex mb-3">
                    <div>
                        <img src={roomImg2} alt="roomImg" />
                    </div>
                    <div className = " ml-4 ">
                        <h5>Apartment in Lost Panorama</h5>
                        <p><small>2 guests 1 bedrooms 2 beds 1 baths</small></p>
                        <p><small>With Air conditioning kitchen</small></p>
                        <p><small>Cancellation flexibility available</small></p>
                        <p> <FontAwesomeIcon className = "starIcon"icon={faStar} />  <b>4.8(10)  $52/</b>night $167 total</p>
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div>
                        <img src={roomImg3} alt="roomImg" />

                    </div>
                    <div className = "ml-4">
                        <h5>Air Lounge & Pool</h5>
                        <p> <small>4 guests 2 bedrooms 2 beds 2 baths</small> </p>
                        <p><small>With Air conditioning kitchen</small></p>
                        <p><small>Cancellation flexibility available</small></p>
                        <p> <FontAwesomeIcon className = "starIcon"icon={faStar} /> <b> 4.9(25)  $44/</b>night $167 total</p>
                    </div>


                </div>


            </div>

            <div className = "mt-4 ml-5">
           

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496722.01896206!2d85.84717398125468!3d23.442104785813886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1600854562506!5m2!1sen!2sbd" width="500" height="650" frameborder="0" style={{border:'0' ,borderRadius:'10px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>

        </div>
    );
};

export default BookingDetails;