import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
// import { useEffect, useState } from "react"

export const Github = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getUsers({ query: "masai" })
    }, [])

    const getUsers = ({ query = "masai" }) => {
        return axios({
            method: 'get',
            url: 'https://api.github.com/users',
            params: {
                q: query
            }

        })
            .then(function (res) {
                setData(res.data.items)
                console.log(res)
            })
            .catch((err) => {
                return console.log("somthing went wrong")
            })
    }



    // const [loading, setLoading] = useState(true)
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     getUsers({ query: "masai" })
    // }, []);

    // //API request to get data...
    // const getUsers = ({ query = "masai" }) => {

    //     setLoading(true)

    //     return axios({
    //         url: "https://api.github.com/users",
    //         params: {
    //             q: query
    //         }
    //     })

    //         // putting data in data by using setData
    //         .then((res) => {
    //             setData(res.data.items);
    //             setLoading(false);
    //             console.log(res)
    //         })
    //         //if any error this will be called...
    //         .catch((err) => {
    //             setError(true);
    //             setLoading(false);
    //         });
    // }

    // if (loading) {
    //     return <div>Loading</div>
    // }

    // if (error) {
    //     return <div>Somthing went wrong...</div>
    // }

    return (
        <div>
            {data.map((item) => (
                <div key={item.node_id}>
                    <h4>{item.login}</h4>
                </div>
            ))}
        </div>
    )
}