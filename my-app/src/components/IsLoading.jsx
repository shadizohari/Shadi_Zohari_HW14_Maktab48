import "../css/IsLoading.css"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function IsLoading() {

    return (
        <div>
            <ToastContainer />
            <div id="loader"></div>
        </div>
    );
}

export default IsLoading;
