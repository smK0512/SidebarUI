// App.js
import React, { Component } from 'react';
import '../components/Invalid_Records.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { variables } from '../variables';

export class Valid_Records extends Component {

  constructor(props) {
    super(props);

    this.state={
       plcinfo:[]
    }
  }
  refreshList(){
      fetch(variables.API_URL+'plcinfo')
      .then(response=>response.json())
      .then(data=>{
          this.setState({plcinfo:data});
      });
  }

  componentDidMount(){
    this.refreshList();
  }
  render() {
    const{
      plcinfo
    }=this.state;
 
  return (
    <div className='PLC_Output'>
      <div className='table_output'>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>ADD</th>
            <th>MADD</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plcinfo.map(alert => (
            <tr key={alert.PLCMADD}>
              <td>{alert.PLCStatus}</td>
              <td>{alert.PLCADD}</td>
              <td>{alert.PLCMADD}</td>
              <td>{alert.PLCDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
  }
}

export default Valid_Records;