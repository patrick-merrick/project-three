import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
    return (<ProfileCard
        {props.profiles.map(item => (
            <li className="list-group-item" key={item.id}>

                {item.firstName}
                {item.lastName}
                {/* item.profilePicture = {profiles[0].profilePicture}
                  firstName = {profiles[0].firstName}
                  lastName = {profiles[0].lastName}
                  city = {profiles[0].city}
                  headline = {profiles[0].headline}
                  summary = {profiles[0].summary}
                  skill1 = {profiles[0].skill1}
                  skill2 = {profiles[0].skill2}
                  skill3 = {profiles[0].skill3}
                  email = {profiles[0].email} */}
        
      ));
  );
  />
}

export default List;