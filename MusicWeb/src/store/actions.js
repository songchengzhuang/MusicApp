export default ({
  actMusicListFn: function (ctx, musicListObj) {
    ctx.commit('mutMusicListFn', musicListObj);
  }
})
