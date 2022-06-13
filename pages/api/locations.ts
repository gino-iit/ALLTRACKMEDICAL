import axios from 'axios'
import useUser from 'lib/useUser';



export default async function handler(req: any, resp: any) {

    var sessionId = req.body.sessionId;

    // const apiUrl = `${process.env.API_URL}connect/pda/get-item-info`;

    
  

        var locations = await fetch(`${process.env.API_URL}connect/pda/get-locations`, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json;charset=UTF-8', "Cookie": String("session=" + sessionId), "User-Agent": "PDA"
        },
            body: JSON.stringify({ "IMEI": "02:00:00:00:00:00" }) // body data type must match "Content-Type" header
            });
      
    
            // var response = await res.json()
            locations = await locations.json()



        resp.status(200).json(locations);

}




  // try{
  //    const data = await axios.post("https://asz-assets.test.improvement-it.nl/", {param: req.body.param}, {'X':1})
  //     res.status(200).json(data)
  //  } catch (error) {
  //     console.error(error)
  //     return res.status(error.status || 500).end(error.message)
  //   }}