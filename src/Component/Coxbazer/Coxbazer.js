import React from 'react';
import Booking from '../Booking/Booking';
// import BookingPage from '../BookingPage/BookingPage';
import Manu from '../Manu/Manu';
import './Coxbazer.css';

const Coxbazer = () => {

    const onlineImgUrl = 'https://i.ibb.co/sjfcLR4/Rectangle-1.png';
    const imgStyle = {
        backgroundImage: 'url(' + onlineImgUrl + ')',
        backgroundAttachment:" fixed",
        backgroundRepeat:" no-repeat",
        backgroundSize : 'cover',
        backgroundPosition: "center"
    }
    return (
        <div  className="Home-bg" style={imgStyle}>
            <Manu></Manu>
            {/* <h1>this is coxbazer pages</h1> */}
           
           
             <div class="container">
            <div class="row">

                
                <div className="col-6 placeDetails mt-5">

                    <h1 className='titleStyle' > COX'S BAZER</h1>
                    <p className='mt-3' >
                    Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>

                </div>

                <div className="col-6">
                   <Booking></Booking>


                </div>




            </div>


        </div>
        </div>
    );
};

export default Coxbazer;