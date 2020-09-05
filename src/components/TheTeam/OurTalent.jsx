import React, { Component } from 'react';
import $ from "jquery";
import Popup from "reactjs-popup";
import '../../styling/TheTeam/_our-talent.scss';
import { getOurTalent } from '../../utils';
import NavFixed from '../NavFixed';

class OurTalent extends Component {
    state = {
        talent: []
    }
    render() {
        const { talent } = this.state;
        return (
            <div className="full-screen">
                <NavFixed />
                <h1 className="page-title">OUR TALENT</h1>
                <div className="talent-list-container flex-wrap flex-box-row">
                    {talent.map((item, index) => {
                       return( 
                        <div id={item.htmlID} key={index} className="talent">
                            <section className="flex-box-column-center">
                                <div className="flex-box-center width-full">
                                    <div className="button talent-container" onClick={() => {this.openCloseModal(index, true)}} style={{"background-image": `url(${item.imgURL})`}}></div>
                                </div>
                                <div>
                                    <h3>{item.actName}</h3>    
                                </div>
                            </section>
                        <Popup 
                        id={`${item.htmlID}-popup`}
                        open={this.state.talent[index].open === undefined ? false : this.state.talent[index].open}
                        closeOnDocumentClick={() => {this.openCloseModal(index, false)}}
                        onClose={() => {this.openCloseModal(index, false)}}>
                            <div className="modal">
                                <button className="close" onClick={() => this.openCloseModal(index, false)}>&times;</button>
                            </div>
                            <div className="popup-details-container flex-box-column">
                                <section className="width-full flex-box-center">
                                    <section className="img-container" style={{"background-image": `url(${item.imgURL})`}}>
                                    </section>
                                </section>
                                <section className="flex-box-column">
                                    <h5>Act Name: {item.actName}</h5>
                                    <h6>Act: {item.act}</h6>
                                    <h6>Category: {item.category}</h6>
                                    <text>{item.bio}</text>
                                </section>
                            </div>
                        </Popup>
                        </div>)
                    })}
                </div>
            </div>
        );
    }

    componentDidMount = async () => {
        await getOurTalent().then(talent => {
             this.setState({ talent });
         });

         const result = $('#EM000003-popup').attr("open");
         console.log(result, 'result')
    }

    openCloseModal = (index, state) => {
        let { talent } = this.state;
        if (state === true) {
            $('body').addClass("no-scroll");
            $('html').addClass("no-scroll");
        } else {
            $('body').removeClass("no-scroll");
            $('html').removeClass("no-scroll");
        }
        talent[index].open = state;
        const stringifiedTalent = JSON.stringify(talent);
        this.setState({ talent: JSON.parse(stringifiedTalent) })
      }

    // closeModal = (index) => {
    //     let { talent } = this.state;
    //     console.log(talent[index].open, 'talent closed');
    //     talent[index].open = false;
    //     console.log(talent[index].open, 'talent after closed');
    //     const stringifiedTalent = JSON.stringify(talent);
    //     this.setState({ talent: JSON.parse(stringifiedTalent) })
    //   }
}

export default OurTalent;