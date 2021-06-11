import LoadUser from '../components/TableData'
import Container from '@material-ui/core/Container';
import "../css/App.css";

function HomePeges() {

    return (
        < div className="container-table">
            <Container maxWidth="lg">
                <LoadUser />
            </Container>
        </div>
    );
}

export default HomePeges;
