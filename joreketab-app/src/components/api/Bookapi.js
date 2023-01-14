import React from 'react';
import { ReactDOM } from "react";
import { Axios } from 'axios';
const Bookapi= () => {


    const axios = require('axios');
    axios.get('https://api.itbook.store/1.0/search/mongodb')
    .then(resp => {
        console.log(resp.data);
         });
     
           
    return (
        <div>
     
        </div>
    );
};

export default Bookapi;