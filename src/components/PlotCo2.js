import React from "react";
const Cloudant = require("@cloudant/cloudant");

const acc = 'dbd4794d-5232-4fad-b286-4cfdb1f472d9-bluemix';
const password = '7888907172093393010a31e7934a818525283fec3bb21b56eae5585484727c88';

const PlotCo2 = () => {

    // Cloudant({ account: acc, password: password}, function(err, cloudant, pong) {;
    //     if (err) {
    //         return console.log('Failed to initialize Cloudant: ' + err.message);
    //         }
    //         console.log(pong); // {"couchdb":"Welcome","version": ...
    //         // Lists all the databases.
    //         cloudant.db.list().then((body) => {
    //         body.forEach((db) => {
    //             console.log(db);
    //         });
    //         }).catch((err) => { console.log(err); });
    //     });





        return (
            <div>
                <h2>CO2 Plot Here</h2>
            </div>
        )
    }

export default PlotCo2