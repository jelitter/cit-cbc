 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/player_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // Replace the 'ytplayer' element with an <iframe> and
 // YouTube player after the API code downloads.
var player1, player2, player3, player4;

function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('ytplayer1', {
        height: '180',
        width: '100%',
        videoId: 'vfTM1mMce40'
    });
    player2 = new YT.Player('ytplayer2', {
        height: '180',
        width: '100%',
        videoId: 'MTymedv_4RE'
    });
    player3 = new YT.Player('ytplayer3', {
        height: '180',
        width: '100%',
        videoId: 'U-dgPOQ0Rxw'
    });
    player4 = new YT.Player('ytplayer4', {
        height: '180',
        width: '100%',
        videoId: 'DIHzwEC9utI'
    });
}