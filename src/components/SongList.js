import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions' 



class SongList extends Component {
 renderedList(){
       const  songs= this.props.songs
     
       const renderedSongs = songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className=" right floated content">
                        <button
                         className=" ui button primary"
                         onClick={() => this.props.selectSong(song)}
                        >
                        Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
         })
        return renderedSongs
        }
     
    render(){
        
        return  <div>{this.renderedList()}</div>
    }
}


const mapStateToProps = (state)=>{
  return {songs: state.songsList}

}

const mapDispatchToProps =(dispatch) =>{
    return {
        selectSong: (song)=>dispatch(selectSong(song))
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(SongList)