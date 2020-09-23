import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css';


const BookingPage = () => {
    return (
        <div>
             <div class="container">
            <div class="locationInfo row">

                {/* Location details */}
                <div className="col-md-6">

                    <h1 style={{ fontSize: '70px' }}> name</h1>
                    <p style={{ fontSize: '20px', marginTop: '4px' }}>details</p>

                </div>

                <div className="col-md-5">
                    <form action="" className="bookingForm">
                        <div className="form-group">
                            <label for="Origin">Origin</label>
                            <input type="text" id="origin" class="form-control bg-light" placeholder="Origin" />
                        </div>
                        <div className="form-group">
                            <label for="Destination">Destination</label>
                            <input type="text" id="destination" class="form-control bg-light" placeholder="Destination" />
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="from">From</label>
                                <input type="date" class="form-control bg-light"  />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="to">To</label>
                                <input type="date" class="form-control bg-light"  />
                            </div>
                        </div>


                        {/* <a href="/login" class="btn btn-warning col-md-12" role="button">Start Booking</a> */}

                        <Link to="/search" >
                            <button className="btn btn-warning col-md-12" href="">Start Booking</button>
                        </Link>
                    </form>


                </div>




            </div>


        </div>
        </div>
    );
};

export default BookingPage;