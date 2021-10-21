/*
    definition songs
*/
const songs = [
    {
        "name": "Human",
        "artist": "Rag’n’Bone Man",
        "album": "Human (Remixes)",
        "url": "src/Rag'n'Bone Man - Human (Official Video).mp3",
        "cover_art_url": "img/Human_-_Rag'n'Bone_Man_Single.png"
        // "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
    },
    {
        "name": "Luce a Milano",
        "artist": "Egreen",
        "album": "Luce a Milano",
        "url": "src/Luce a Milano.mp3",
        "cover_art_url": "img/ask-the-dust.jpeg"
        // "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg"
    },
    {
        "name": "Fragili",
        "artist": "Club Dogo",
        "album": "Non siamo più quelli di Mi fist",
        "url": "src/Club Dogo - Fragili ft. Arisa.mp3",
        "cover_art_url": "img/fragili.jpeg"
    },
    {
        "name": "Infinito",
        "artist": "Raf",
        "album": "Iperbole",
        "url": "src/Raf - Infinito (Official Video).mp3",
        "cover_art_url": "img/raf.jpeg"
    }
];

/*
    Set responsive height for body
*/
document.body.style.height = `${window.innerHeight}px`;

/*
    create song
*/
songs.forEach(appendSong);


/*
    instance object Amplitude
*/
Amplitude.init({"songs": songs});


/*
  Shows the playlist
*/
document.getElementsByClassName('show-playlist')[0].addEventListener('click', function () {
    document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
    document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
    document.getElementById('white-player-playlist-container').style.display = "block";
});

/*
  Hides the playlist
*/
document.getElementsByClassName('close-playlist')[0].addEventListener('click', function () {
    document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
    document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
    document.getElementById('white-player-playlist-container').style.display = "none";
});

/*
  Repeat song
*/
document.getElementById("repeat").addEventListener("click", function () {
    Amplitude.getRepeat() ? Amplitude.setRepeatSong(true) : Amplitude.setRepeatSong(false);
});


/*
  shuffle song
*/
document.getElementById("shuffle").addEventListener("click", function () {
    Amplitude.getShuffle() ? Amplitude.setShuffle(true) : Amplitude.setShuffle(false);
});


/**
 * function to create song elements
 * @param song
 * @param index
 * @return {HTMLDivElement}
 */
function createSong(song, index) {
    const divContainerSong = document.createElement("div"),
        coverImage = document.createElement("img"),
        divMetaSong = document.createElement("div"),
        spanNameSong = document.createElement("span"),
        spanArtistAlbum = document.createElement("span");

    divContainerSong.setAttribute("class", "white-player-playlist-song amplitude-song-container amplitude-play-pause");
    divContainerSong.setAttribute("data-amplitude-song-index", index);

    coverImage.setAttribute("src", song.cover_art_url);
    coverImage.setAttribute("alt", "song cover");

    divMetaSong.setAttribute("class", "playlist-song-meta");

    spanNameSong.setAttribute("class", "playlist-song-name");
    spanNameSong.innerHTML = song.name;

    spanArtistAlbum.setAttribute("class", "playlist-artist-album");
    spanArtistAlbum.innerHTML = `${song.artist} &bull; ${song.album}`;


    divMetaSong.appendChild(spanNameSong);
    divMetaSong.appendChild(spanArtistAlbum);

    divContainerSong.appendChild(coverImage);
    divContainerSong.appendChild(divMetaSong);


    return divContainerSong;

}


/**
 * function to append song to playlist
 * @param song
 * @param index
 */
function appendSong(song, index) {
    document.getElementById("myPlaylist").appendChild(createSong(song, index))
}