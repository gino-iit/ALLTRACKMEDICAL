
import React from "react";
import moment from "moment";
import 'moment/locale/nl';

import InfoIcon from './InfoIcon';
import Cookies from 'js-cookie';

    



export default class Overview extends React.Component {
        render() {

// alert(info)
// alert(cookieCutter.get('Locations'))

var Locations = JSON.parse(Cookies.get('Locations'));
var MaterialTypes = JSON.parse(Cookies.get('MaterialTypes'));
var IdentifierTypes = JSON.parse(Cookies.get('IdentifierTypes'));
var Processes = JSON.parse(Cookies.get('Processes'));

// alert(JSON.stringify(MaterialTypes))

// alert(MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name)
var momentObject = moment(this.props.LastSeen).locale('nl')

const last = momentObject.startOf('day').fromNow(); ;
var location =  this.props.LocationID != "Onbekend" ? Locations.filter(obj => obj.LocationID == this.props.LocationID)[0].Name : "Onbekend";
    
return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border rounded-xl border-gray-200 mb-8">
            <div className="px-4 pt-5 sm:px-6 flex flex-wrap">
                <h3 className="text-lg leading-6 font-medium text-gray-900 ">Gegevens</h3>
                &nbsp;&nbsp;
                <InfoIcon id={this.props.Name} location={location} role={MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name}/> 

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
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Laatst waargenomen locatie</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{location}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Tags</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{this.props.tag}</dd>
                    </div>
                    
                </dl>
            </div>
        </div>
    )
}
}