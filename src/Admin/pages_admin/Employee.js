import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import './Employee.css'; 
import { variables } from '../variables';

export class Employee extends Component {
  constructor(props) {
    super(props);

    this.state={
       employee:[],
       modalTitle:"",
       EmployeeId:0,
       EmployeeName:"",
       EmployeeEmail:"",
       EmployeePhno:"",
       EmployeeDob:"",
       EmployeeDepart:""
    }
  }
  refreshList(){
      fetch(variables.API_URL+'employee')
      .then(response=>response.json())
      .then(data=>{
          this.setState({employee:data});
      });
  }
  
  createClick(){
    fetch(variables.API_URL+'employee',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            EmployeeId:this.state.EmployeeId,
            EmployeeName:this.state.EmployeeName,
            EmployeeEmail:this.state.EmployeeEmail,
            EmployeePhno:this.state.EmployeePhno,
            EmployeeDob:this.state.EmployeeDob,
            EmployeeDepart:this.state.EmployeeDepart
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList();
    },(error)=>{
        alert('Failed');
    })
}

  componentDidMount(){
    this.refreshList();
  }
  changeEmployeeName =(e)=>{
    this.setState({EmployeeName:e.target.value});
  }
  changeEmployeeEmail =(e)=>{
    this.setState({EmployeeEmail:e.target.value});
  }
  changeEmployeePhno =(e)=>{
    this.setState({EmployeePhno:e.target.value});
  }
  changeEmployeeDob =(e)=>{
    this.setState({EmployeeDob:e.target.value});
  }
  changeEmployeeDepart =(e)=>{
    this.setState({EmployeeDepart:e.target.value});
  }
  
  deleteClick(id){
    if(window.confirm('Are you sure?')){
    fetch(variables.API_URL+'employee/'+id,{
        method:'DELETE',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList();
    },(error)=>{
        alert('Failed');
    })
    }
  }
  render(){
    const{
      employee,
      modalTitle,
       EmployeeId,
       EmployeeName,
       EmployeeEmail,
       EmployeePhno,
       EmployeeDob,
       EmployeeDepart
    }=this.state;
  

  return (
    <><div className='wholepage'>
      <div className='create-employee-form'>
        <h2>Create Employee</h2>
        {/* <span className="input-group-text">ID</span>
        <input type="text" className="form-control"
          value={EmployeeId}
          onChange={this.changeEmployeeId} /> */}
        <span className="input-group-text">Name</span>
        <input type="text" className="form-control"
          value={EmployeeName}
          onChange={this.changeEmployeeName} />
        <span className="input-group-text">Email</span>
        <input type="email" className="form-control"
          value={EmployeeEmail}
          onChange={this.changeEmployeeEmail} />
        <span className="input-group-text">Phone no</span>
        <input type="text" className="form-control"
          value={EmployeePhno}
          onChange={this.changeEmployeePhno} />
        <span className="input-group-text">Date of birth</span>
        <input type="date" className="form-control"
          value={EmployeeDob}
          onChange={this.changeEmployeeDob} />
        <span className="input-group-text">Department</span>
        <input type="text" className="form-control"
          value={EmployeeDepart}
          onChange={this.changeEmployeeDepart} />

        <button type="button"
          className="btn btn-primary float-start"
          onClick={() => this.createClick()}
        >Create</button>
      </div>
      <div className="employee-table">
    <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phno</th>
            <th>Date of Birth</th>
            <th>Department</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(alert => (
            <tr key={alert.EmployeeId}>
              <td>{alert.EmployeeId}</td>
              <td>{alert.EmployeeName}</td>
              <td>{alert.EmployeeEmail}</td>
              <td>{alert.EmployeePhno}</td>
              <td>{alert.EmployeeDob}</td>
              <td>{alert.EmployeeDepart}</td>
              <td>
                <button type="button"
                  className="btn btn-light mr-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => this.editClick(alert)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                  </svg>
                </button>
                <button type="button"
                  className="btn btn-light mr-1"
                  onClick={() => this.deleteClick(alert.EmployeeId)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}
}





export default Employee