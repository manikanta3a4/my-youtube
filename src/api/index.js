import axios from 'axios';

//const key = 'AIzaSyDBmdV1s2AWkRsJxhmxvf6snn5GV5Myq1I';
const key = 'AIzaSyBetPmcSdJcrOglHUTytRneb501L8hFzzw';

export default axios.create({
     baseURL:'https://www.googleapis.com/youtube/v3',
     params: {
       part: 'snippet',
       maxResults: 5,
       key:key
     }
});
