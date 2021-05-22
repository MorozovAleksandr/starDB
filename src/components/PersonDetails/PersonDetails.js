import React from 'react';
import './PersonDetails.css';


const PersonDetails = () => {
    return (
        <div>
            <div className="PersonDetails card">
                <img src="https://avatars.mds.yandex.net/get-mpic/372220/img_id4700864391923911943.jpeg/13hq" alt="" className="personImage" />
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flash">
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year: </span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color: </span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails;