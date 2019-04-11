import React, { Component } from "react";
import API from "../utils/API";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

class Results extends Component {
    state = {
        results: "",

    };
    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {
        API.getResults().then(res =>
            this.setState({
                results: res.data,
            })
        ).catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
            <Searchbar />
                <Row>
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
                </Row>

            <Navbar />

            </Container>
        )
    }


}

export default Results;