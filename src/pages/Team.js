import React from "react";
import TeamMember from "../components/TeamMember";

const Team = () => {

    const teacherList = [1,2,3,4,5,6,7,8]
  return (
    <div>
      {/* <!-- team header --> */}
      <div class="container py-5 bg-primary">
        <div class="row text-center text-white">
          <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Team Page</h1>
            <p class="lead mb-0">meet the team </p>
          </div>
        </div>
      </div>

      {/* team people section */}
      <div class="container">
        <div class="row text-center">
          {/* <!-- Team item --> */}

          {teacherList.map((i, n)=> <TeamMember teacher={i} key={i}/>)}

        </div>
      </div>
    </div>
  );
};

export default Team;
