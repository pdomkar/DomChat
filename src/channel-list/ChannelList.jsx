import React from 'react';
import { uuid } from '../utils/uuidGenerator';
import Immutable from 'immutable';

export class ChannelList extends React.Component {
    constructor() {
        super();

        this.state = {
            list: Immutable.List([
                {
                    id: uuid(),
                    name: 'React',
                },
                {
                    id: uuid(),
                    name: 'Angular',
                },
            ])
        };
    }

    _onAddClick = () => {
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuid(),
                name: 'New Channel'
            })
        }));
    };

    render() {
        const { list } = this.state;

        const itemElements = list.map( item => {
            return (
                <li key={item.id}>
                    {item.name}
                </li>);
        });

        return(
            <div>
                <h3>
                    Channels
                    <a
                        type="button"
                        className="btn"
                        onClick={this._onAddClick}
                    >
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </a>
                </h3>
                <ul>
                    {itemElements}
                </ul>
            </div>
        );
    }
}