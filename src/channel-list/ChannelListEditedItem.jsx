import React from 'react';
import PropTypes from 'prop-types';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        onCancelEditing: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            editedChannel: props.item
        };
    }

    _onNameChange = (event) => {
        const value = event.target.value;

        this.setState(prevState => ({
            editedChannel: {
                ...prevState.editedChannel,
                name: value
            }
        }));
    };

    render() {
        return (
        <div className="modalWrapper">
            <a onClick={() => this.props.onCancelEditing()}><i className="fa fa-times" aria-hidden="true"/></a>
            Edit channel: {this.props.item.name}
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name">Název</label>
                    <input type="text" id="name" value={this.state.editedChannel.name} onChange={this._onNameChange}/>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => this.props.onSave(this.state.editedChannel)}
                        disabled={this.state.editedChannel === this.props.item}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
        );
    }
}