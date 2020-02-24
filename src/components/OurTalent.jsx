import React, { Component } from 'react';
import '../styling/_our-talent.scss';
import { getHeadshot } from '../utils.js';

class OurTalent extends Component {
    state = {
        talent: [
            {name: "Actor 1", imgName: "jessicaHeadshot.jpg", id: "jessica-paul"},
            {name: "Actor 2", imgName: "jessicaHeadshot.jpg", id: "jessica-paul"},
            {name: "Actor 3", imgName: "jessicaHeadshot.jpg", id: "jessica-paul"},
            {name: "Actor 4", imgName: "jessicaHeadshot.jpg", id: "jessica-paul"},
            {name: "Actor 5", imgName: "jessicaHeadshot.jpg", id: "jessica-paul"}]
    }
    render() {
        const { talent } = this.state;
        return (
            <div className="full-screen">
                <h2>Our Talent</h2>
                <div className="talent-list-container flex-wrap">
                    {talent.map((item, index) => {
                       return( 
                        <div id={item.id} key={index} className="talent-container">
                            <h4>{item.name}</h4>
                        </div>)
                    })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        const { talent } = this.state;
        for(let i = 0; i < talent.length; i++) {
            getHeadshot(talent[i].imgName).then(url => {
                if (url !== undefined && url !== "") {
                    document.getElementById(talent[i].id).style.backgroundImage = `url(${url})`;
                }
            });
        }
    }
}

export default OurTalent;