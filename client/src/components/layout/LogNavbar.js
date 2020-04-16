import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class LogNavbar extends Component {
  constructor(props) {
        super(props);
        this.state = {
            activeClasses: [],
            indexval: 0,
            log: localStorage.getItem("jwtToken")
        };
        this.addActiveClass = this.addActiveClass.bind(this);
    }

    addActiveClass(index) {
      let activeClasses = []


        switch(index) {
          case 0:
            activeClasses = [true, false, false, false, false]
            break;
          case 1:
            activeClasses = [false, true, false, false, false]
            break;
          case 2:
            activeClasses = [false, false, true, false, false]
            break;
          case 3:
            activeClasses = [false, false, false, true, false]
            break;
          case 4:
            activeClasses = [false, false, false, false, true]
            break;
          default:
            activeClasses = [true, false, false, false, false]
            break;
          }
          this.setState({activeClasses, index});
        }





  render() {
    const activeClasses = this.state.activeClasses.slice();
    return (
      <div className="topnav">
        <nav>
          <div>

            <Link to="/profile" className={activeClasses[0]? "active" : "inactive"} onClick={() => this.addActiveClass(0)} >Profile</Link>
            <Link to="/addproject" className={activeClasses[3]? "active" : "inactive"} onClick={() => this.addActiveClass(3)} > Add project</Link>
            <Link to="/projects" className={activeClasses[4]? "active" : "inactive"} onClick={() => this.addActiveClass(4)} >Projects</Link>


          </div>
        </nav>
      </div>
    );
  }
}
export default LogNavbar;
