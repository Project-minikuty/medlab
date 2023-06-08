import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListView() {

    return(
        <div class="d-flex flex-row">
            <div class="d-flex flex-col">Username</div>
            <div class="d-flex flex-col">Name</div>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            
        </div>
    );
}