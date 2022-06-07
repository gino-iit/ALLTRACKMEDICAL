import type { User } from './user'

import { Octokit } from 'octokit'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import useUser from 'lib/useUser'
const octokit = new Octokit()
import { serialize } from 'cookie';





export default withIronSessionApiRoute(materialTypesRoute, sessionOptions)

async function materialTypesRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password, sessionid } = await req.body
  try {
    const apiUrl = String(process.env.API_URL);
    
      var body = {
          "AppVersion": 4,
          "BlockReasonsVersion": 0,
          "HandlingUnitsVersion": 0,
          "IdentifierTypesVersion": -1,
          "IdentifiersVersion": -1,
          "LocationsVersion": -1,
          "MaterialTypesVersion": -1,
          "ProcessesVersion": -1,
          "Username": "gino",
          "Password": "Welkom123",

          // "Username": "Gino1",
          // "Password": "9in0",

          // "Username": String(username),
          // "Password": String(password),

          "StorageBinTypesVersion": 0,
          "TwelveNcsVersion": 0,
          "IMEI": "02:00:00:00:00:00",
          "ConnectLogID": "61dc5ec5-85b8-40d8-9ad9-2b6a17188706"
      };
      console.log(body);

     
    // var sessioncookie = "session=" + user?.sessionID;
    // console.log(sessioncookie);
    const request = await fetch(apiUrl, {
      method: 'POST',
      // mode: 'no-cors',
      headers: {"User-Agent": "PDA", "Content-Type": "application/json;charset=UTF-8", 'Access-Control-Allow-Origin' : '*'},
      body: JSON.stringify(body)
      });


      
  

    
          var response = await request.json()
          console.log(JSON.stringify(response))



      if (response["___system___"].code === -7){
        throw new RangeError("Verkeerde wachtwoord/gebruikersnaam combinatie");
      }
      console.log(JSON.stringify({"Locations": response.Locations}));


      res.setHeader('Set-Cookie', [ 
      serialize('User', JSON.stringify({"Username": body.Username}), { path: '/' }),
    ]);



    const user = { isLoggedIn: true, login: response.Username, sessionID: response.SessionId } as User
    req.session.user = user
    await req.session.save()
    res.json({user, response})

  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}



















///

// const { username } = await req.body
// console.log(JSON.stringify(req.body))
//   try {
//     // const {
//     //   data: { login, avatar_url },
//     // } = await octokit.rest.users.getByUsername({ username })



//     const apiUrl = "https://asz-assets.test.improvement-it.nl/";
//   var body = {
//       "AppVersion": 4,
//       "BlockReasonsVersion": 0,
//       "HandlingUnitsVersion": 0,
//       "IdentifierTypesVersion": -1,
//       "IdentifiersVersion": -1,
//       "LocationsVersion": -1,
//       "MaterialTypesVersion": -1,
//       "ProcessesVersion": -1,
//       "Username": "gino",
//       "Password": "qokraz-jaqZu5-xuqsid",
//       "StorageBinTypesVersion": 0,
//       "TwelveNcsVersion": 0,
//       "IMEI": "02:00:00:00:00:00",
//       "ConnectLogID": "61dc5ec5-85b8-40d8-9ad9-2b6a17188706"
//   };

 

// const res = await fetch(apiUrl, {
//   method: 'POST',
//   mode: 'no-cors',
//   headers: {"User-Agent": "PDA", "Content-Type": "application/json;charset=UTF-8", 'Access-Control-Allow-Origin' : '*'},
//   body: JSON.stringify(body)
//   });

  
//       console.log(JSON.stringify(res))

//       var response = await res.json()
//       console.log("response.sessionID")
//       // console.log(response);      
//       // resp.status(200).json(response);

//     // var login = (response.sessionID instanceof String) ? true : false;

//     const user = { isLoggedIn: true, login: 'Ghino', sessionID: "response.sessionID" } as User
//     req.session.user = user
//     await req.session.save()
//     res.json(user)
//   } catch (error) {
//     res.status(500).json({ message: (error as Error).message })
//   }
// }





// import axios from 'axios'
// import useUser from 'lib/useUser';




// export default async function handler(req, resp) {
//     const user = req.session.user

//     var ultimoNumber = req.body.ultimo;

//     const apiUrl = process.env.API_URL + "connect/pda/get-item-info";


//     console.log(user.sessionID);      
//     console.log(696969);      

    
//     const res = await fetch(apiUrl, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         // mode: 'cors', // no-cors, *cors, same-origin
//         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         // credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//         'Content-Type': 'application/json;charset=UTF-8', "Cookie": String("session=" + user.sessionID), "User-Agent": "PDA"

//     },
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//         // redirect: 'follow', // manual, *follow, error
//         // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify({
//             "Name": String(ultimoNumber),
//             "IMEI": "02:00:00:00:00:00"
//             // "ConnectLogID": "8aacae2f-c0d0-49bf-8838-c78bc46f88d6"
//         }) // body data type must match "Content-Type" header
//         });

//         console.log(JSON.stringify({
//             "Name": String(ultimoNumber),
//             "IMEI": "02:00:00:00:00:00",
//             "ConnectLogID": "8aacae2f-c0d0-49bf-8838-c78bc46f88d6"
//         }))
//         var response = await res.json()
//         console.log(JSON.stringify(response));      
//         resp.status(200).json(response);

// }




//   // try{
//   //    const data = await axios.post("https://asz-assets.test.improvement-it.nl/", {param: req.body.param}, {'X':1})
//   //     res.status(200).json(data)
//   //  } catch (error) {
//   //     console.error(error)
//   //     return res.status(error.status || 500).end(error.message)
//   //   }}