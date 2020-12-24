import React, { Component } from 'react';
import Style from './News.module.css';
import Axios from 'axios'
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class News extends Component {
    constructor(props){
        super(props)
        this.state={
            news:[],
        }
    }
    componentDidMount=()=>{
        Axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
            .then(response => {
                let topstories = response.data.slice(0,50);
                
                topstories.forEach(element=>{
                    Axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`)
                    .then(result=>{
                        this.state.news.push(result.data)
                        this.forceUpdate();
                    })
                    .catch(err=>{
                        alert("data not fount")
                    })
                })
            })
            .catch(err => alert("ERROR"));   
    }
    render() {
       console.log(this.state.news)
        return (
            <div className={Style.body}>
                {   
                    this.state.news.length>0?
                        <div className={Style.heading}>
                            <Typography variant="h4" style={{color:"#fff"}}>Hacker News Top Stories</Typography>
                            {
                                this.state.news.map((e)=>{
                                    return(
                                        <div className={Style.card}>
                                            <Typography variant="h6">{e.title}</Typography>
                                            <div className={Style.card_body}>
                                                <div className={Style.card_content}>
                                                    <Typography variant="p">Type:</Typography>
                                                    <Typography variant="p">{e.type}</Typography>
                                                </div>
                                                <div className={Style.card_content}>
                                                    <Divider className={Style.divider}/>
                                                </div>
                                                <div className={Style.card_content}>
                                                    <Typography variant="p">Score:</Typography>
                                                    <Typography variant="p">{e.score}</Typography>
                                                </div>
                                                <div className={Style.card_content}>
                                                    <Divider className={Style.divider}/>
                                                </div>
                                                <div className={Style.card_content}>
                                                    <Typography variant="p">By:</Typography>
                                                    <Typography variant="p">{e.by}</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    :
                    <div className={Style.loader_div}>
                        <CircularProgress/>
                        <span>Loading News please wait</span>
                    </div>  
                
                }
                
            </div>
        )
    }
}
