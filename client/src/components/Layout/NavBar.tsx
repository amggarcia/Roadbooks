import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <AppBar position="fixed">
                    <ToolBar>
                        <IconButton>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Button component={Link} to="/">Home Page</Button>
                        <Button component={Link} to="/RoadBookManager">RoadBook Manager</Button>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}


// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default NavBar;
