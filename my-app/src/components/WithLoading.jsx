import React, { useEffect, useState } from "react";
import IsLoading from "./IsLoading";
import { toast } from "react-toastify";


function withLoading(WrappedComponent, api, id) {

    function WithLoadingComponent({ ...props }) {
        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);
        const [length, setLength] = useState(0);
        useEffect(() => {
            if (id) {
                api += '/' + id;
            }
            console.log(api);
            fetch(api)
                .then((response) => {
                    if (!response.ok) {
                        toast.error("Not defined");
                    } else { return response.json() }
                })
                .then((result) => {
                    if (result) {
                        setLoading(false);
                        setData(result)
                        setLength(result.length)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    toast.error("request failed!");
                });

        }, []);

        return (
            (isLoading) ? <IsLoading /> : <WrappedComponent data={data} length={length} {...props} />
        )
    }

    return WithLoadingComponent
}

export default withLoading
