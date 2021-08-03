import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import withSwapiService from "../hoc-helper/withSwapiService";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="populdation" label="Populdation" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diametr" label="Diametr" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);