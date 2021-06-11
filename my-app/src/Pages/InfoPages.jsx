import React from "react";
import Info from '../components/Info';
import Container from '@material-ui/core/Container';
import "../css/App.css";
import "../font-en/font-en.css";
import WithLoading from "../components/WithLoading";
import { useParams } from "react-router-dom";



function InfoPages() {

    let { id } = useParams();
    const LoadInfo = WithLoading(Info, `https://60b4f7e4fe923b0017c8352a.mockapi.io/blog/info/`, id);

    return (
        <div>
            <Container maxWidth="lg" style={{ marginTop: "100px" }}>
                <LoadInfo/>
            </Container>
        </div>
    );
}

export default InfoPages;
