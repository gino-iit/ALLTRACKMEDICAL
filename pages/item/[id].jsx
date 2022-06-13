import React from 'react'
import Layout from 'components/Layout'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { User } from 'pages/api/user'
import BackButton from '../../components/BackButton'
import { InferGetServerSidePropsType } from 'next'
import fetchJson from 'lib/fetchJson'
import moment from "moment";
import 'moment/locale/nl';
import OverviewDetails from 'components/OverviewDetails'

export default function SsrProfile({
  user, item
}) {
  return (
      <>
    <Layout>

    <BackButton id={item}/>

<div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">

<link rel="stylesheet" href="https://tailwindui.com/css/components-v2.css"/>

    <h1 className="text-3xl font-bold leading-normal">{item && <span>{item.Name}</span>}</h1>
    <h3 className="text-xl font-light leading-normal mb-6">{item.MaterialTypeName}</h3>


<OverviewDetails Name={item.Name} MaterialTypeID={item.MaterialTypeName} LocationName={item.LocationName} LastModified={item.LastModified} RSSI={item.RSSI}/>


 
  </div>




    </Layout>

    </>
  )
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
  query
}) {
  const user = req.session.user

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: { isLoggedIn: false, login: '', sessionID: '' },
      },
    }
  }






    var session = "session=" + req.session.user?.sessionID; //+ cookie.parse(context.req.headers.cookie.userSession);

        var data = await fetchJson(process.env.BASE_URL + 'api/material_types', {
          method: 'POST',
          headers: {         'Content-Type': 'application/json;charset=UTF-8', "Cookie": session, "User-Agent": "PDA"        },
          body: JSON.stringify({"session": req.session.user?.sessionID, "Name": String(query.id)}),
        })

        data = data.data.map(x => x) .filter(data => data.MaterialItemID == query.id)[0]

        console.log(JSON.stringify(data))

  return {
    props: { user: req.session.user, item: data },
  }
},
sessionOptions)



