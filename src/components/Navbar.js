import React, { useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

import { BurgerContext } from "../contexts/BurgerContext";

// export default props => {
//   const { orders } = useContext(BurgerContext);
//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand>
//           <Link to="/">Burger Builder</Link>
//         </NavbarBrand>
//         <NavbarToggler onClick={this.toggle} />
//         <Collapse navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink>
//                 <Link to="/orders">Your Orders ({})</Link>
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink>
//                 <Link to="/signin">Sign in</Link>
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };
export default props => {
  const { orders } = useContext(BurgerContext);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Burger Builder</Link>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/orders">Your Orders ({orders})</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/signin">Sign in</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
