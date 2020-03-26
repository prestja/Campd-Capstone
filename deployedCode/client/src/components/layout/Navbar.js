import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';



class Navbar extends Component {
  constructor(props) {
        super(props);
        this.state = {
            activeClasses: [],
            indexval: 0,
        };
        this.addActiveClass = this.addActiveClass.bind(this);
    }

    addActiveClass(index) {
      let activeClasses = []


      switch(index) {
        case 0:
          activeClasses = [true, false, false, false]
          break;
        case 1:
          activeClasses = [false, true, false, false]
          break;
        case 2:
          activeClasses = [false, false, true, false]
          break;
        case 3:
          activeClasses = [false, false, false, true]
          break;
        default:
          activeClasses = [true, false, false, false]
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

            <Link to="/" className={activeClasses[0]? "active" : "inactive"} onClick={() => this.addActiveClass(0)} >Home</Link>
            <Link to="/projects" className={activeClasses[1]? "active" : "inactive"} onClick={() => this.addActiveClass(1)} >Registration</Link>
            <Link to="/login" className={activeClasses[2]? "active" : "inactive"} onClick={() => this.addActiveClass(2)} >Login</Link>
            <Link to="/signup" className={activeClasses[3]? "active" : "inactive"} onClick={() => this.addActiveClass(3)} >Signup</Link>


          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
