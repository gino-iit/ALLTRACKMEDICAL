
import React from "react";


import InfoIcon from './InfoIcon';
import {cookieCutter} from 'cookie-cutter'

    



    export default class Overview extends React.Component {
        
    render() {
// alert(info)
// alert(cookieCutter.get('Locations'))

var Locations = JSON.parse(cookieCutter.get('Locations'));
var MaterialTypes = JSON.parse(cookieCutter.get('MaterialTypes'));
var IdentifierTypes = JSON.parse(cookieCutter.get('IdentifierTypes'));
var Processes = JSON.parse(cookieCutter.get('Processes'));


    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border rounded-xl border-gray-200">
            <div className="px-4 py-5 sm:px-6 flex flex-nowrap">
                <h3 className="text-lg leading-6 font-medium text-gray-900 ">Gegevens</h3>
                &nbsp;&nbsp;
                <InfoIcon id={this.props.Name} location={Locations.filter(obj => obj.LocationID == this.props.LocationID)[0].Name} role={MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name}/> 

            </div>
            <div className="border-t border-gray-200">
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
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Locations.filter(obj => obj.LocationID == this.props.LocationID)[0].Name}</dd>
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