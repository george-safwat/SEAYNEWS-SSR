import Config from '../config/variables';

export default function fetchSectionsNames(data) {
    const URL = `${Config.SERVER_IP }/sections/names`;
    return fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(data => {
        if(data.status == 404) throw new Error("404");
        if(data.status != 200) throw new Error("500");
        return data.json()
    });
}