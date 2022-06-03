import axios from 'axios'
import useUser from 'lib/useUser';



export default async function handler(req, resp) {

    var ultimoNumber = req.body.ultimo;
    var sessionid = req.body.sessionid;


    console.log(ultimoNumber)
    console.log(sessionid)
        

    const apiUrl = "https://asz-assets.test.improvement-it.nl/connect/pda/get-item-info";
    // var body = {
    //     "Name": String(ultimoNumber),
    //     "IMEI": "02:00:00:00:00:00",
    //     "ConnectLogID": "8aacae2f-c0d0-49bf-8838-c78bc46f88d6"
    // };

    //   const requestOptions = {
    //       method: 'POST',
    //       mode: 'no-cors',
    //       headers: {"User-Agent": "PDA", "Content-Type": "application/json;charset=UTF-8", 'Access-Control-Allow-Origin' : '*', "Cookie": `session=${user?.sessionID}`},
    //       body: JSON.stringify(body)
    //   };
    // 
    // axios.post(baseUrl, requestOptions)
    //     .then(response => alert(response));



    
    const res = await fetch(apiUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json;charset=UTF-8', "Cookie": String("session=" + sessionid), "User-Agent": "PDA"

    },
    // 'Content-Type': 'application/x-www-form-urlencoded',
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            "Name": String(ultimoNumber),
            "IMEI": "02:00:00:00:00:00"
            // "ConnectLogID": "8aacae2f-c0d0-49bf-8838-c78bc46f88d6"
        }) // body data type must match "Content-Type" header
        });

        console.log(JSON.stringify({
            "Name": String(ultimoNumber),
            "IMEI": "02:00:00:00:00:00",
            "ConnectLogID": "8aacae2f-c0d0-49bf-8838-c78bc46f88d6"
        }))
        var response = await res.json()
        console.log(JSON.stringify(response));      
        resp.status(200).json(response);

}




  // try{
  //    const data = await axios.post("https://asz-assets.test.improvement-it.nl/", {param: req.body.param}, {'X':1})
  //     res.status(200).json(data)
  //  } catch (error) {
  //     console.error(error)
  //     return res.status(error.status || 500).end(error.message)
  //   }}