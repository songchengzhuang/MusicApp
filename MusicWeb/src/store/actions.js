export default ({
  actMusicListFn: function (ctx, musicListObj) {
    ctx.commit('mutMusicListFn', musicListObj);
  },
  actPlayMusicUrl: function (ctx, musicObj) {
    ctx.commit('mutPlayMusicUrl', musicObj);
  }
})
