import React from 'react';
import { connect} from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
    if(!mySelectedSong) {
        return (<div>No song is selected</div>)
    } else {
        return (
        <div>
            <h3>Detail For:</h3>
            <p>
                Title: {mySelectedSong.title}<br/>
                Duration: {mySelectedSong.duration}
            </p>
        </div>);
    }

    
};

const mapStateToProps = (state) => {
    return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);