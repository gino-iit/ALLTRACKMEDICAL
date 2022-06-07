
import React from "react";
import moment from "moment";
import 'moment/locale/nl';

import InfoIcon from './InfoIcon';
import Cookies from 'js-cookie';

    



export default class OverviewDetails extends React.Component {
        render() {

// alert(info)
// alert(Cookies.get('Locations').filter(obj => obj.LocationID == "449f6cf5-9f0c-11ec-945f-0602b2001534" ));

// console.log(Cookies.getItem('Locations'));
// console.log("AAAH");
// var Locations = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('Locations'))));

// // console.log(locations);
// var MaterialTypes = JSON.parse(localStorage.getItem('MaterialTypes'));
// var IdentifierTypes = JSON.parse(localStorage.getItem('IdentifierTypes'));
// var Processes = JSON.parse(localStorage.getItem('Processes'));

// alert(JSON.stringify(MaterialTypes))

// alert(MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name)
var momentObject = moment(this.props.LastSeen).locale('nl')

const last = momentObject.startOf('day').fromNow() ;
var location =  this.props.LocationName != "Onbekend" ? this.props.LocationName : "Onbekend"; ;
    
return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border rounded-xl border-gray-200 mb-8">
            <div className="px-4 pt-5 sm:px-6 flex flex-wrap">
                <h3 className="text-lg leading-6 font-medium text-gray-900 ">Gegevens</h3>
                &nbsp;&nbsp;
                <InfoIcon id={this.props.Name} LocationName={location} MaterialTypeName={this.props.MaterialTypeID}/> 

            </div>
            <div className="px-4 sm:px-6 flex flex-wrap">
            <p class="mt-1 max-w-2xl text-sm text-gray-500 pb-5">
      Laatst gezien: {last}
    </p>
            </div>

            <div className="border-t border-gray-200 ">
                <dl>
                
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Ultimo nummer</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{this.props.Name}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Materiaaltype</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{this.props.MaterialTypeID}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Laatst waargenomen locatie</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{this.props.LocationName}</dd>
                    </div>                    
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Laatste uitgifte</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{moment(this.props.LastModified).locale('nl').startOf('day').fromNow()}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">RSSI</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{this.props.RSSI}</dd>
                    </div>
                    
                </dl>
            </div>
        </div>
    )
}
}