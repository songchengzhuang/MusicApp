export default ({
  mutMusicListFn: function (state, musicListObj) {
    state.UnitMusicList = musicListObj
  },
  mutPlayMusicUrl: function (state, musicObj) {
    var newMusicObj = {
      name: musicObj.name,
      id: musicObj.id,
      musicUrl: 'http://music.163.com/song/media/outer/url?id=' + musicObj.id + '.mp3',
      singerArr: musicObj.ar,
      musicImg: musicObj.al.picUrl
    }
    state.playMusicData = newMusicObj
    console.log(state.playMusicData)
  }
})
