import React, { Component } from 'react'
import Style from './Authing.module.css'
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

export default class Authing extends Component {
    render() {
        return (
            <div className={Style.body}>
                <Card className={Style.card}>
                    <div className={Style.card_header}>
                        <Typography variant="h6" className={Style.title}>Mockup to HTML</Typography>
                    </div>
                    <div className={Style.card_content}>
                        <Typography variant="p" className={Style.title}>Lorem Ipsum Bro</Typography>
                        <input placeholder="Email Address" className={Style.inputbox}/>
                        <input placeholder="Password" className={Style.inputbox}/>
                        <Button variant="outlined" className={Style.signin_btn}>Sing In</Button>
                        <Button variant="outlined" className={Style.signup_btn}>Create an Account</Button>
                    </div>
                    <div className={Style.card_footer}>
                        <a href="#" style={{color:"#212426"}}>Forgate Password</a>
                        <SettingsIcon/>
                    </div>
                </Card>
            </div>
        )
    }
}
