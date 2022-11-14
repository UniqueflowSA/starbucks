
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* // 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads. */
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: '78ggQXQyjLE',
    PlayerVars: {
      autoplay: true, // 자동 재생
      loop: true,
      Playlist: '78ggQXQyjLE' //loop에는 반복재생할 영상 아이디를 제시해야한다.
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  });
}