(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{894:function(e,t,r){var s,a,o=Object.create,l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(s=n(t,a))||s.enumerable});return e},c=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=y(l({},"__esModule",{value:!0}),d);var m=(a=null!=(s=r(2265))?o(p(s)):{},y(s&&s.__esModule?a:l(a,"default",{value:s,enumerable:!0}),s)),f=r(4117),b=r(5087);class P extends m.Component{constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"secondsLoaded",null),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unmute")}),c(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,f.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t}),this.player.on("buffered",({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let e=this.props.url.match(b.MATCH_URL_STREAMABLE)[1];return m.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}c(P,"displayName","Streamable"),c(P,"canPlay",b.canPlay.streamable)}}]);