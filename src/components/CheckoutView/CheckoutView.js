import React, {Component} from 'react';
import axios from 'axios';
import TopComponent from './TopComponent/TopComponent';
import TableComponent from './TableComponent/TableComponent';
//import component

class CheckoutView extends Component{
    render(){
        return(
            <div>
            <TopComponent />
            <TableComponent />
            </div>
        )
    }//end render

}//end class

export default CheckoutView;
