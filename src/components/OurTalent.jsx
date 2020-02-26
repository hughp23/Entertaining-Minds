import React, { Component } from 'react';
import $ from "jquery";
import Popup from "reactjs-popup";
import '../styling/_our-talent.scss';
import { getOurTalent } from '../utils.js';

class OurTalent extends Component {
    state = {
        talent: []
    }
    render() {
        const { talent } = this.state;
        return (
            <div className="full-screen">
                <h2>Our Talent</h2>
                <div className="talent-list-container flex-wrap flex-box-row">
                    {talent.map((item, index) => {
                       return( 
                        <div id={item.htmlID} key={index} >
                            {/* <h4>{item.name}</h4> */}
                        <div className="button talent-container" onClick={() => {this.openCloseModal(index, true)}} style={{"background-image": `url(${item.imgURL})`}}></div>
                        <Popup 
                        id={`${item.htmlID}-popup`}
                        open={this.state.talent[index].open === undefined ? false : this.state.talent[index].open}
                        closeOnDocumentClick={() => {this.openCloseModal(index, false)}}
                        onClose={() => {this.openCloseModal(index, false)}}
                        >
                            <div className="modal">
                                <button className="close" onClick={() => this.openCloseModal(index, false)}>&times;</button>
                            </div>
                            <div className="popup-details-container flex-box-column">
                                <section className="img-container">
                                    <img src={item.imgURL} alt={item.actName} />
                                </section>
                                <section className="flex-box-column">
                                    <h3>Act Name: {item.actName}</h3>

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
        console.log(talent[index].open, 'talent open');
        talent[index].open = state;
        console.log(talent[index].open, 'talent after open');
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