import { combineReducers } from "redux"

const initsongs = [
    {title:'no scrubs', duration: '4.05'},
    {title:'no scrubs again', duration: '24.05'},
    {title:'no scrubs now ever', duration: '10.05'},
    {title:'no scrubs lot nome', duration: '1.05'}
]

const selectedSong = null
 

 const songsListReducer = (songsList=initsongs) => {
     return songsList
 }

 const selectedSongReducer = (selected = selectedSong, action)=>{
     if (action.type === 'SONG_SELECTED'){
         const newState = {
             
             selectedSong: action.payload
         }

         return newState
     }

     return selected
 }

 

export default combineReducers({
    songsList: songsListReducer,
    selectedSong: selectedSongReducer

})