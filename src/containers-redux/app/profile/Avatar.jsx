import { connect } from 'react-redux';
import { Avatar as AvatarComponent } from '../../../components/app/profile/Avatar';
import { AvatarLoader } from '../../../components/app/profile/AvatarLoader';
import { withOverlay } from '../../../components/shared/withOverlay';
import { uploadUserAvatar } from '../../../actions/profile';

const mapStateToProps = (state) => ({
    uri: state.profile.avatarUri,
    isUploading: state.profile.isUploadingAvatar,
});

const mapDispatchToProps = (dispatch) => ({
    onUpload: (files) => dispatch(uploadUserAvatar(files[0])),
});


const AvatarWithOverlay = withOverlay(AvatarComponent, AvatarLoader);
const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(AvatarWithOverlay);

export { connectedComponent as Avatar };