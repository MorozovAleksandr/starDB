import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';
import './ItemDetails.css';


const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    )
}

export { Record };

class ItemDetails extends React.Component {

    state = {
        item: null,
        spinner: false,
        image: null
    };

    swapiServices = new SwapiService();

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        this.setState({ spinner: true });
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    spinner: false,
                    image: getImageUrl(item)
                });
            });
    }

    render() {

        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }
        const { item: { name }, spinner, image, item } = this.state;

        if (spinner) {
            return <Spinner />
        }

        return (
            <div className="PersonDetails card">
                <img src={image} alt="" className="personImage" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flash">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ItemDetails;