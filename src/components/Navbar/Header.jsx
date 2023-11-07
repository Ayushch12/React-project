// import { Button, Navbar } from 'flowbite-react';
// import React from 'react';
// import { Link } from "react-router-dom";

// export default function header() {

//   return (

//     <div >

//       <Navbar fluid rounded className=" top-[-10px] w-full  left-0  " >
//         <Navbar.Brand >
//           <img src="/assurmatch-banner1.png" className=" mr-3 h-24 sm:h-28" alt="Assurmatch Banner" />

//           <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
//         </Navbar.Brand>

//         <Navbar.Collapse className="mr-auto pl-20 font-roboto" >

//           <li><Link to="/Accueil">Accueil</Link></li>
//           <li><Link to="/Solutions">Solutions d'Assurance</Link></li>
//           <li><Link to="/Expertise">Expertise & Conseils</Link></li>
//           <li><Link to="/Quisommes">Qui Sommes-Nous</Link></li>
//           <li><Link to="/Contactez">Contactez-Nous</Link></li>

//         </Navbar.Collapse>

//         <div className="flex md:order-2 mr-auto pl-10">
//           <Button variant="primary" className="pr-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800">Obtenir un Devis</Button>
//           <Navbar.Toggle />
//         </div>

//       </Navbar>

//     </div>

//   );

// }

import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";



export default function header() {
  return (
    <div>
      <Navbar fluid rounded  fixed top-0 left-0 w-full bg-white shadow-lg >

      <img src="/assurmatch-banner1.png" className=" mr-3 h-24 sm:h-28" alt="Assurmatch Banner" />

        <div className="flex md:order-2 ">
          <Button className="bg-blue-600">Obtenir un Devis</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="font-roboto">

          <li>
            <Link to="/Accueil" active>Accueil</Link>
          </li>
          <li>
            <Link to="/Solutions">Solutions d'Assurance</Link>
          </li>
          <li>
            <Link to="/Expertise">Expertise & Conseils</Link>
          </li>
          <li>
            <Link to="/Quisommes">Qui Sommes-Nous</Link>
          </li>
          <li>
            <Link to="/Contactez">Contactez-Nous</Link>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
