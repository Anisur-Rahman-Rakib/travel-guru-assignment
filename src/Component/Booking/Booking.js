import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    return (
        <div className='bookingFromdesign mt-5'>
             <form action="" className="fromDesign">
                        <div className="form-group">
                            <p>Origin</p>
                            <input type="text"  class="form-control bg-light" placeholder="Origin" />
                        </div>
                        <div className="form-group">
                            <p classname='text-left'>Destination</p>
                            <input type="text" class="form-control bg-light" placeholder="Destination" />
                        </div>

                        <div className="form-row">
                            <div class="form-group col-6">
                                <label for="html">From</label>
                                <input type="date" class="form-control bg-light"  />
                            </div>
                            <div class="form-group col-6">
                                <label for="html">To</label>
                                <input type="date" class="form-control bg-light"  />
                            </div>
                        </div>


                       
                        <Link to="/BookingDetails" >
                            <button className="btn btn-warning col-12" href="">Start Booking</button>
                        </Link>
                    </form>
        </div>
    );
};

export default Booking;