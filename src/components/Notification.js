import React from 'react';
import  { useState,  Component } from "react";
import "../components/Alarm.css";
import { variables } from '../variables';
function Alert() { 
  return (
    <div className="admin-alerts-page">
      <header>
        <h1>Alerts Dashboard</h1>
      </header>
      <div className="page-content">
        <main>
         <div className='Accepts'>
         <CreateAlertForm/>
         <AlertList/>
         <UserAlertsList/>
         </div>
        </main>
      </div>
    </div>
  );
}


export class AlertList extends Component {
  constructor(props){
    super(props);
    this.state={
      adminalerts:[],
      AlertDate:"",
      AlertSeverity:"",
      AlertDesc:"",
    }

  }
  refreshList(){
    fetch(variables.API_URL+'adminalerts')
    .then(response=>response.json())
    .then(data=>{
        this.setState({adminalerts:data});
    });
}
componentDidMount(){
  this.refreshList();
}

ChangeAlertDate=(e)=>{
     this.setState({AlertDate:e.target.value});
}
ChangeAlertSeverity=(e)=>{
  this.setState({AlertSeverity:e.target.value});
}
ChangeAlertDesc=(e)=>{
  this.setState({AlertDesc:e.target.value});
}
addClick(alert){
  this.setState({
      AlertID:0,
      AlertDate:"",
      AlertSeverity:"",
      AlertDesc:""
  });
}
editClick(alert){
  this.setState({
      AlertID:alert.AlertID,
      AlertDate:alert.AlertDate,
      AlertSeverity:alert.AlertSeverity,
      AlertDesc:alert.AlertDesc,
  });
}
createClick(){
  fetch(variables.API_URL+'adminalerts',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          AlertDate:this.state.AlertDate,
          AlertDesc:this.state.AlertDesc,
          AlertSeverity:this.state.AlertSeverity
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
deleteClick(id){
  if(window.confirm('Are you sure?')){
  fetch(variables.API_URL+'adminalerts/'+id,{
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
      adminalerts,
      AlertID
    }=this.state;
  return (
    <div className="alert-list">
      <h2>Admin Alerts</h2>
      <table>
      <thead>
        <tr>
          <th>Alert Id</th>
          <th>Date/Time</th>
          <th>Severity</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {adminalerts.map((alert) => (
          <tr key={alert.AlertId}>
            <td>{alert.AlertID}</td>
            <td>{alert.AlertDate}</td>
            <td className={`severity-${alert.AlertSeverity.toLowerCase()}`}>{alert.AlertSeverity}</td>
            <td>{alert.AlertDesc}</td>
            <td>
                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(alert.AlertID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
}

export class CreateAlertForm extends Component{
  constructor(props){
    super(props);
    this.state={
      useralerts:[],
      UserName:"",
      UserDesc:"",
      UserDate:"",
      UserStatus:""
    }

  }
  refreshList(){
    fetch(variables.API_URL+'adminalerts')
    .then(response=>response.json())
    .then(data=>{
        this.setState({adminalerts:data});
    });
}
componentDidMount(){
  this.refreshList();
}

ChangeUserName=(e)=>{
     this.setState({UserName:e.target.value});
}
ChangeUserDesc=(e)=>{
  this.setState({UserDesc:e.target.value});
}
ChangeUserDate=(e)=>{
  this.setState({UserDate:e.target.value});
}
ChangeUserStatus=(e)=>{
  this.setState({UserStatus:e.target.value});
}
addClick(alert){
  this.setState({
    UserName:"",
    UserDesc:"",
    UserDate:"",
    UserStatus:""
  });
}

createClick(){
  fetch(variables.API_URL+'useralerts',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          UserName:this.state.UserName,
          UserDesc:this.state.UserDesc,
          UserDate:this.state.UserDate,
          UserStatus:this.state.UserStatus,
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
deleteClick(id){
  if(window.confirm('Are you sure?')){
  fetch(variables.API_URL+'useralerts/'+id,{
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
      useralerts,
      UserName,
      UserDesc,
      UserDate,
      UserStatus
    }=this.state;
  return(
    <div className="create-alert-form">
      <h2>Create Alert</h2>
      <span className='input-group-text'>User Name</span>
      <input type="text" className='form-time'
       value={UserName}
       onChange={this.ChangeUserName}/>
       <span className='input-group-text'>Severity</span>
      <select value={UserStatus} onChange={this.ChangeUserStatus}>
       <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <span className='input-group-text'>Date and Time</span>
      <input type="datetime-local" className='form-time'
       value={UserDate}
       onChange={this.ChangeUserDate}/>
      <span className='input-group-text'>Alert Description</span>
      <textarea value={UserDesc}
       onChange={this.ChangeUserDesc}></textarea>
      {/* {AlertID==0? */}
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
      </div>
      
  )
  }
}

export class UserAlertsList extends Component {
  constructor(props) {
    super(props);

    this.state={
       useralerts:[],
       UserID:0
    }
  }
  refreshList(){
      fetch(variables.API_URL+'useralerts')
      .then(response=>response.json())
      .then(data=>{
          this.setState({useralerts:data});
      });
  }

  componentDidMount(){
    this.refreshList();
  }
  deleteClick(id){
    if(window.confirm('Are you sure?')){
    fetch(variables.API_URL+'useralerts/'+id,{
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
      useralerts,
      UserID
    }=this.state;
  const handleApprove = (id) => {
    // handle approve button click here
  };

  const handleDelete = (id) => {
    // handle delete button click here
  };

  return (
    <div className="user-alerts-list">
      <h2>User Alerts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Message</th>
            <th>Created At</th>
            <th>Severity</th>
            <th>Delete</th> 
          </tr>
        </thead>
        <tbody>
          {useralerts.map(alert => (
            <tr key={alert.UserID}>
              <td>{alert.UserID}</td>
              <td>{alert.UserName}</td>
              <td>{alert.UserDesc}</td>
              <td>{alert.UserDate}</td>
              <td>{alert.UserStatus}</td>
              <td> <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(alert.UserID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button></td>
              {/* <td>
                {alert.UserStatus === "pending" && (
                  <>
                    <button onClick={() => handleApprove(alert.UserID)}>Approve</button>
                    <button onClick={() => handleDelete(alert.UserID)}>Delete</button>
                  </>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
}



export default Alert;
