import React from 'react';
import '../Home/Home.css'
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Manu from '../Manu/Manu';

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
            {/* <h1>this is home ccc page</h1> */}
             <Manu></Manu>

            <CardDeck className="customdeck" >
   <Card className="CustomCard">
     <Card.Img variant="top" src="https://i.ibb.co/sjfcLR4/Rectangle-1.png" />
     <Card.Body>
    
     <Card.Title>COX'S Bazar</Card.Title>
     </Card.Body>
     <Card.Footer>
     <Link to="/Coxbazer">
         <button className='buttonStyle bg-primary' >Book Here</button>
          </Link>
     </Card.Footer>
</Card>
{/* 1st card */}
   <Card className="CustomCard">
     <Card.Img className='imgStyle' variant="top" src="https://i.ibb.co/SR7w2tb/sundorbon.png" />
     <Card.Body>
       <Card.Title>Sundorban</Card.Title>

       {/* <a href="https://ibb.co/BqK2myb"><img src="https://i.ibb.co/SR7w2tb/sundorbon.png" alt="sundorbon" border="0"></a> */}



      
     </Card.Body>
     <Card.Footer>
     <Link to="/Sundorban">
         <button className='buttonStyle bg-danger'>Book Here</button>
          </Link> 
     </Card.Footer>
   </Card>

   <Card className="CustomCard lastCard">
     <Card.Img className='imgStyle' variant="top" src="https://i.ibb.co/6Bwd7wz/Sreemongol.png" />
     <Card.Body>
       <Card.Title>Sreemangal</Card.Title>


       {/* <a href="https://ibb.co/NSC4dC5"><img src="https://i.ibb.co/6Bwd7wz/Sreemongol.png" alt="Sreemongol" border="0"></a> */}




       
     </Card.Body>
     <Card.Footer>
      <Link to="/Sremongul">
         <button className='buttonStyle bg-info'>Book Here</button>
          </Link> 
     </Card.Footer>
   </Card>
 </CardDeck>



        </div>
    );
};

export default Home;