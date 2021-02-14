
import {Table,Image} from 'react-bootstrap';
import logo from './react-image.jpeg';
import './img-style.css';

function App()
{
  return(

    <div className="main_div">
        
      <h1> Image in React Bootstrap</h1>
     <h2>This is Rounded Image Use the rounded props to customise the image.</h2>
      <Image className="my_logo"  src={logo} rounded />
   
      <h2>This is roundedCircle Image. Use the roundedCircle props to customise the image.</h2>
      <Image className="my_logo"  src={logo} roundedCircle />
     
      <h2>This is  thumbnail Image. Use the thumbnail props to customise the image.</h2>
      <Image className="my_logo"  src={logo} thumbnail />

      <h2>This is  bsPrefix Image</h2>
      <Image className="my_logo"  src={logo} bsPrefix />
     
      <h2>This is  bsPrefix Image
          Use the fluid to scale image nicely to the parent element.
      </h2>
      <Image className="my_logo"  src={logo} bsPrefix />
    
    </div>
  );
}
export default App;

