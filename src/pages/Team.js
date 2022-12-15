import React, { useState, useEffect } from 'react'
import axios from 'axios';

import TeamMember from "../components/TeamMember";

const Team = () => {
  useEffect(() => {  }, [])
  const MY_SERVER = 'http://localhost:3005/team'

  useEffect(() => { getData() }, [])


  const [team, setTeam] = useState([])

  const getData = async ()=>{
    const res = await axios.get(MY_SERVER)
    console.log(res.data)
    setTeam(res.data)
    console.log(team)
  }



    const teacherList = [1,2,3,4,5,6,7,8]
  return (
    <div>
      {/* <!-- team header --> */}
      <div className="container py-5 bg-primary">
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4">Team Page</h1>
            <p className="lead mb-0">meet the team </p>
          </div>
        </div>
      </div>

      {/* team people section */}
      <div className="container">
        <div className="row text-center">
          {/* <!-- Team item --> */}

          {teacherList.map((i, n)=> <TeamMember teacher={i} key={i}/>)}

        </div>
      </div>
    </div>
  );
};

export default Team;
