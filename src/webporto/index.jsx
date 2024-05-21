import React from "react";
import "./Style/index.css";
import Contents from "./classcontents";
import Footer from "./classFooter";
import Header from "./classheader";
import Nav from "./classnav";
export default class Porto extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Nav/>
                <Contents/>
                <Footer/>
            </div>
        )
    }
}