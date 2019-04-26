import React, { Component } from "react";
import API from "../utils/API";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Brand from "../components/Brand";
import Loader from "../components/Loader";

class Results extends Component {
    state = {
        results: "",
        loading: false

    };
    // componentDidMount() {
    //     this.loadResults();
    // }

    // loadResults = () => {
    //     API.getResults().then(res =>
    //         this.setState({
    //             results: res.data,
    //             loading: false
    //         })
    //     ).catch(err => console.log(err));
    // };

    render(props) {
        return (
            <div>
                <Container>
           <div className="Results">
           <Row>
                            <Col xs={4} md={4}>
                                <Brand />
                            </Col>
                            <Col xs={8} md={8} id="search">
                                <Searchbar />
                            </Col>
                        </Row>
                        
                {this.state.loading? <Row>
                    <Col size="md-6">
                        <div>
                            {this.state.results}
                        </div>
                    </Col>
                    <Col size="md-6">
                        <div>
                            {this.state.results}
                        </div>
                    </Col>
                </Row>: Loader}
                </div>
                </Container>
            <Navbar />
            
            </div>
            
        )
    }


}

export default Results;