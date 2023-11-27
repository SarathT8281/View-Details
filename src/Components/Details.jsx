
import { useNavigate, useParams } from 'react-router-dom';
import './Details.css'
import { BiLeftArrowCircle } from 'react-icons/bi';


function Details({dat}) {
  


  const { id } = useParams();

  const demo =dat.find((user) => user.id === parseInt(id));
  


  const nav=useNavigate()
  const home =()=>{
    nav('/')
  }
 


  return (
    <div className='main-div'>
      <div className='head'>
       
          <div onClick={home} style={{ marginLeft: '10px', fontSize: '25px' }}>
           <BiLeftArrowCircle />
            <p style={{ padding: '10px' }}>ID: {demo.id}  </p>
            <h3 style={{ padding: '10px' }}>Name: {demo.name} </h3>
            <p style={{ padding: '10px' }}>Email:{demo.email}</p>
            <h3 style={{ padding: '10px' }}>Address:</h3>
            <p style={{ padding: '10px' }}>Street:{demo.address.street} </p>
            <p style={{ padding: '10px' }}>Suit:{demo.address.suit}</p>
            <p style={{ padding: '10px' }}>City:{demo.address.city} </p>
            <p style={{ padding: '10px' }}>Zip Code:{demo.address.zipcode} </p>
            <p style={{ padding: '10px' }}>Phone:{demo.address.phone}</p>
            <p style={{ padding: '10px' }}>Website:{demo.address.website} </p>
            <h3 style={{ padding: '10px' }}>Company:</h3>
            <p style={{ padding: '10px' }}>Name: {demo.company.name} </p>
            <p>Catch phrase:  {demo.company.catchPhrase} </p>
          </div>
       
      </div>
    </div>
  );
}

export default Details;



