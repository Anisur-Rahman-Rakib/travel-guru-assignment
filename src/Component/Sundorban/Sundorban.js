import React from 'react';
import './Sundorban.css';
import Booking from '../Booking/Booking';
import Manu from '../Manu/Manu';

const Sundorban = () => {
    const onlineImgUrl = "https://i.ibb.co/SR7w2tb/sundorbon.png";
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
            {/* <h1>this is sundorban pages</h1> */}
            <div class="container">
            <div class="row">

                
                <div className="col-6 placeDetails mt-5">

                    <h1 className='titleStyle' >Sundorban</h1>
                    <p className='mt-3' >
                    The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh
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

export default Sundorban;