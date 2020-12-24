import React, { Component } from 'react'
import Style from './NavApp.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default class NavApp extends Component {
    render() {
        return (
            <div className={Style.body}>
                <AppBar position="static" className={Style.appbar}>
                    <Toolbar className={Style.toolbar}>
                        <div>
                            <Link to="/" style={{textDecoration:"none", color:"white"}}> 
                                <Typography variant="h6" className={Style.title}>Huddll</Typography>
                            </Link>
                        </div>
                        <div>
                            <Link to="/singin" style={{textDecoration:"none", color:"white"}}> 
                                <Button color="inherit" className={Style.btn}>Sigin/Singup</Button>
                            </Link>
                            <Link to="/news" style={{textDecoration:"none", color:"white"}}> 
                                <Button color="inherit" className={Style.btn}>News</Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
