import React, { Component } from 'react'
import Style from './HomePage.module.css'
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

export default class HomePage extends Component {
    render() {
        return (
            <div className={Style.body}>
               
                <div className={Style.card_arrng}>  
                    <img src='./huddllicon.jpg' className={Style.img}></img>
                    <Card className={Style.card}>
                        <div className={Style.card_content}>
                            <Typography variant="h6" className={Style.title}>HUDDLL</Typography>
                            <Typography variant="p" className={Style.title}>Huddll is a revolutionary mobile app that will let you interact, in real-time, with football and baseball games - while watching live or on TV.</Typography>
                        </div>
                    </Card>
                </div> 
            </div>
        )
    }
}
