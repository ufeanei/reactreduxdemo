import React from 'react'
import {connect} from 'react-redux'


 const SongDetail  = ({song}) =>{
    if (!song.selectedSong){
    return <h3>Please select a song to view</h3>   
    }else{
        return (
            <div>
            <h3>Details For:</h3>
            <p>Title: {song.selectedSong.title}<br/>
               Duration: {song.selectedSong.duration}
            </p>
            </div>
        )
    }    

 }

 const mapStateToProps = (state) =>{
     return {song: state.selectedSong}
 }
export default connect(mapStateToProps)(SongDetail) 
