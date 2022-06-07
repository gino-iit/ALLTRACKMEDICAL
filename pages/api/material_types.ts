import axios from 'axios'
import useUser from 'lib/useUser';



export default async function handler(req: any, resp: any) {

    var sessionid = req.body.session;
    console.log(req.body.Name)
    console.log(req.body.Name)
    console.log(req.body.Name)
    console.log(req.body.Name)
    // const apiUrl = `${process.env.API_URL}connect/pda/get-item-info`;
    const apiUrl = `${process.env.API_URL}material-items/get`;
    
    const res = await fetch(apiUrl, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json;charset=UTF-8', "Cookie": String("session=" + sessionid), "User-Agent": "PDA"
    },
        body: JSON.stringify({ "Name": req.body.Name}) // body data type must match "Content-Type" header
        });

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