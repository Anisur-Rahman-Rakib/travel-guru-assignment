import React from 'react';
import '../Home/Home.css'
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const onlineImgUrl = 'https://i.ibb.co/sjfcLR4/Rectangle-1.png';
    const imgStyle = {
        backgroundImage: 'url(' + onlineImgUrl + ')',
        backgroundAttachment:" fixed",
        backgroundRepeat:" no-repeat",
        backgroundSize : 'cover',
        backgroundPosition: "center"
    }
    return (
        <div  className="Home-bg" style={imgStyle} >
            <h1>this is home ccc page</h1>

            <CardDeck >
   <Card className="CustomCard">
     <Card.Img variant="top" src="https://i.ibb.co/sjfcLR4/Rectangle-1.png" />
     <Card.Body>
    
     <Card.Title>COX'S Bazar</Card.Title>
     </Card.Body>
     <Card.Footer>
     {/* <Link to="/coxsbazar"> */}
         <button className='buttonStyle bg-primary' >Book Here</button>
         {/* </Link> */}
     </Card.Footer>
</Card>
{/* 1st card */}
   <Card className="CustomCard">
     <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdsA4enN3WE7VvJB7jU18LmUlTNjMQ0RNAjQ&usqp=CAU" />
     <Card.Body>
       <Card.Title>Sundorban</Card.Title>
      
     </Card.Body>
     <Card.Footer>
     {/* <Link to="/sundarban"> */}
         <button className='buttonStyle bg-danger'>Book Here</button>
         {/* </Link> */}
     </Card.Footer>
   </Card>

   <Card className="CustomCard lastCard">
     <Card.Img variant="top" src="https://travelbd.xyz/en/wp-content/uploads/2018/09/teagarden_sylhet_beautifulbangladesh-2.jpeg" />
     <Card.Body>
       <Card.Title>Sreemangal</Card.Title>
       
     </Card.Body>
     <Card.Footer>
     {/* <Link to="/sreemangal"> */}
         <button className='buttonStyle bg-info'>Book Here</button>
         {/* </Link> */}
     </Card.Footer>
   </Card>
 </CardDeck>



        </div>
    );
};

export default Home;