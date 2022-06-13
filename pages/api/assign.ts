import axios from "axios";
import useUser from "lib/useUser";
import cookie from "cookie";

export default async function handler(req: any, resp: any) {
  var sessionId = req.body.sessionId;

  var locations = await fetch(
    `${process.env.API_URL}connect/pda/assign-material-item`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Cookie": String("session=" + sessionId),
        "User-Agent": "PDA",
      },
      body: JSON.stringify({
        "MaterialItemID": String(req.body.MaterialItemID),
        "LocationID": String(req.body.LocationID),
      }),
    }
  );

  console.log("AAAH???");
  console.log(req.body.MaterialItemID);
  console.log(req.body.LocationID);

  var data = await locations.json(); // json

  console.log(data);
if (data.status === 200) {
  resp.status(200).json(data);
} else {
    resp.status(500).json({data: "Daar ging iets niet goed!"});
}
}
