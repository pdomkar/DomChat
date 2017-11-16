import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { SavingSpinner } from '../shared/SavingSpinner';

class AvatarLoader extends React.PureComponent {
    static propTypes = {
        isUploading: PropTypes.bool.isRequired,
        toggleOverlay: PropTypes.func.isRequired,
        onUpload: PropTypes.func.isRequired,
    };

    componentWillUpdate(nextProps) {
        if(this.props.isUploading && !nextProps.isUploading) {
            this.props.toggleOverlay();
        }
    }

    _hideLoader = () => {
        if(!this.props.isUploading) {
            this.props.toggleOverlay();
        }
    };

    render() {
        const { isUploading, onUpload } = this.props;

        const message = isUploading
            ? <SavingSpinner />
            : <i className='fa fa-folder-open fa-4x' />;

        return (
            <div
                className="avatar-pane"
                onMouseLeave={this._hideLoader}
                onDragLeave={this._hideLoader}
            >
                <Dropzone
                    accept="image/gif, image/png, image/jpeg, image/bmp"
                    multiple={false}
                    onDrop={onUpload}
                    disabled={isUploading}
                >
                    {message}
                </Dropzone>
            </div>
        );
    }
}
export {AvatarLoader};