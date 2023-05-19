import React from "react";

function withUser(Component) {
  return function (props) {
    const user = { name: "John", email: "john@example.com" };
    return <Component {...props} user={user} />;
  };
}

const MyComponent = ({ user }) => {
  return (
    <div>
      {`Hello ${user.name}!`}
    </div>
  )
};

const MyComponentWithUser = withUser(MyComponent);

export default MyComponentWithUser