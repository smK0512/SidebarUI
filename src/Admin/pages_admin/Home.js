import React, { useEffect, useState } from "react";
import "../pages_admin/Home.css";
import img1 from "../img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import Table from 'react-bootstrap/Table'
import Chart from "react-apexcharts";
import Modal from "../components_admin/Modal";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
// import emailjs from '@emailjs/browser';
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Card from "../components/Card/Card";


export default function Dashboard() {

  const {buttonPopup, setButtonPopup} = useState(false);
  const data = [
    { name: 'Part A', goal: 4000, achived: 2400, amt: 2400 },
    { name: 'Part B', goal: 3000, achived: 1398, amt: 2210 },
    { name: 'Part C', goal: 2000, achived: 1800, amt: 2290 },
    { name: 'Part D', goal: 2780, achived: 1908, amt: 2000 },
    { name: 'Part E', goal: 1890, achived: 1800, amt: 2181 },
    { name: 'Part F', goal: 2390, achived: 2000, amt: 2500 },
    { name: 'Part G', goal: 4490, achived: 4300, amt: 2100 },
  ];

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_9b8q00c', 'service_9b8q00c', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];

  const cardsData = [
    {
      title: "Sales",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  return (
    <>
    <div className="whole">
      <div className="first-row">
      <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })} 
    </div>
    <div className="graph"><CustomerReview/></div>
    <div className="prolist"><ProjectListTable/></div>
    </div>
    <div className="second-row">
      <div className="charts">
    <BarChart width={500} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="achived" fill="#8884d8" />
        <Bar dataKey="goal" fill="#82ca9d" />
      </BarChart>
      <BarChart width={500} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="achived" fill="#8884d8" />
        <Bar dataKey="goal" fill="#82ca9d" />
      </BarChart>
      </div>
      <div className="info">
      <Table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Contact</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Admin</td>
            <td>
              <Modal/>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>User</td>
            <td>
            <Modal/>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Manager</td>
            <td>
            <Modal/>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Operator</td>
            <td>
            <Modal/>
            </td>
          </tr>
          <tr>
            <td>Array Doe</td>
            <td>john.doe@example.com</td>
            <td>Operator PLC</td>
            <td>
            <Modal/>
            </td>
          </tr>
          <tr>
            <td>Array Doe</td>
            <td>john.doe@example.com</td>
            <td>maintainence</td>
            <td>
            <Modal/>
            </td>
          </tr>
          
        </tbody>
      </Table>
      </div>
      <div className="updates">
      <h1 style={{marginLeft:"10px"}}>Messages</h1>
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
      </div>
    </div>
    </div>
    </>
  );
}

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="CustomerReview">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

function ProjectListTable() {
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      name: 'Project A',
      startDate: '2022-01-01',
      status: 'ongoing'
    },
    {
      id: 2,
      name: 'Project B',
      startDate: '2022-02-01',
      status: 'draft'
    },
    {
      id: 3,
      name: 'Project C',
      startDate: '2022-03-01',
      status: 'ongoing'
    },
    {
      id: 4,
      name: 'Project D',
      startDate: '2022-04-01',
      status: 'draft'
    },
    {
      id: 5,
      name: 'Project E',
      startDate: '2022-05-01',
      status: 'ongoing'
    }
  ]);

  const [showAll, setShowAll] = useState(true);
  const [showOngoing, setShowOngoing] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);

  const filteredProjects = showAll
    ? projectList
    : showOngoing
    ? projectList.filter((project) => project.status === 'ongoing')
    : projectList.filter((project) => project.status === 'draft');

  return (
    <div className="project-list-table">
      <div className="project-list-buttons">
        <button
          className={showAll ? 'active' : ''}
          onClick={() => {
            setShowAll(true);
            setShowOngoing(false);
            setShowDrafts(false);
          }}
        >
          All
        </button>
        <button
          className={showOngoing ? 'active' : ''}
          onClick={() => {
            setShowAll(false);
            setShowOngoing(true);
            setShowDrafts(false);
          }}
        >
          Ongoing
        </button>
        <button
          className={showDrafts ? 'active' : ''}
          onClick={() => {
            setShowAll(false);
            setShowOngoing(false);
            setShowDrafts(true);
          }}
        >
          Drafts
        </button>
      </div>
      <table className="project-list">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}