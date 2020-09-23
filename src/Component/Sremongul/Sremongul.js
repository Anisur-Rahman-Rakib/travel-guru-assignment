import React from 'react';
import './Sremongul.css';
import Booking from '../Booking/Booking';
import Manu from '../Manu/Manu';

const Sremongul = () => {
    const onlineImgUrl = "https://i.ibb.co/6Bwd7wz/Sreemongol.png";
    const imgStyle = {
        backgroundImage: 'url(' + onlineImgUrl + ')',
        backgroundAttachment:" fixed",
        backgroundRepeat:" no-repeat",
        backgroundSize : 'cover',
        backgroundPosition: "center"
    }
    return (
        <div className="Home-bg" style={imgStyle}>
            <Manu></Manu>
            {/* <h1>this is sremongul pages</h1> */}
            <div class="container">
            <div class="row">

           
                <div className="col-6 placeDetails mt-5">

                    <h1 className='titleStyle' >Sremongul</h1>
                    <p className='mt-3' >
                    Madhobpur Lake is one of the main tourist attractions in sreemangal.  Sreemangal has been nicknamed the tea capital of Bangladesh, due to the number of tea gardens in the area, and is the place of origin of the Seven Color Tea.[2] The Bangladesh Tea Research Institute in Sreemangal has made a number of contributions in evolving and standardising the quality of tea, and introducing its research findings to the tea industry of Bangladesh.[8] Pineapples from the Sreemangal area are known for their flavour and natural sweetness.[citation needed] In 2010, 
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

export default Sremongul;