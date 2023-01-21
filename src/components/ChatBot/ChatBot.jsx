import React, { Component,useEffect } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import axios from "axios";
import validator from "validator";
function SendMail(props) {
  const { steps } = props;
  const { name, courses, phoneNumber, email } = steps;
  const data = {
    name: name.value,
    courses: courses.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
  };
  const configuration = {
    method: "post",
    url: "https://castle-academia-server.onrender.com/send-mail-form-submission",
    // url : "http://localhost:9000/send-mail-form-submission",
    data: data,
  };
  axios(configuration)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return `Thanks ${data.name}, we will get back to you soon shortly`;
}

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      courses: "",
      phoneNumber: "",
      email: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, courses, phoneNumber, email } = steps;

    this.setState({ name, courses, phoneNumber, email });
  }

  render() {
    const { name, courses, phoneNumber, email } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Courses</td>
              <td>{courses.value}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{phoneNumber.value}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// SendMail.prototypes = {
//   steps: PropTypes.object,
// };
// SendMail.defaultProps = {
//   steps: undefined,
// };

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


class ChatBotForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {clear : true}
  // }
  

  // componentWillMount() {
  //   let handleClear = () => {
  //     this.setState({ clear: true }, () => {
  //       this.setState({ clear: false });
  //     });
  //   }
  // }


  
 
  render() {
    return (
      <ChatBot
        width="330px"
        enableMobileAutoFocus={true}
        bubbleStyle={{ backgroundColor: "#000" }}
        floatingStyle={{ backgroundColor: "#000" }}
        headerTitle="Castle Academia"
        floating={true}
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
            validator : (value)=>{
              if(value.length === 0){
                return "Name has atleast 3 characters"
              }
              return true
            }
          },
          {
            id: "3",
            message: "Hi {previousValue}! What is your Interested Course?",
            trigger: "courses",
          },
          {
            id: "courses",
            options: [
              { value: "CRT Training", label: "CRT Training", trigger: "5" },
              { value: "Startup Plan", label: "Startup Plan", trigger: "5" },
              {
                value: "Abroad Studies",
                label: "Abroad Studies",
                trigger: "5",
              },
            ],
          },
          {
            id: "5",
            message: "Enter your phone number ",
            trigger: "phoneNumber",
          },
          {
            id: "phoneNumber",
            user: true,
            trigger: "100",
            validator: (value) => {
              if (!value.length) {
                return "Enter Valid Number";
              } else if (value.length < 10) {
                return "Enter Valid Phone Number";
              } else if (value.length > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: "100",
            message: "Enter your Email Address",
            trigger: "email",
          },
          {
            id: "email",
            user: true,
            validator : (value)=>{
              if(value.length === 0 ||  !isNaN(value)){
                return "Invalid Email Adress "
              }
              if(!validator.isEmail(value)){
                return "Enter a Valid Email"
              }
              return true;
            },
            trigger: "7",
          },
          {
            id: "7",
            message: "Great!",
            trigger: "end-message",
          },

          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update",
          },
          {
            id: "update",
            message: "Would you like to update some field?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "yes", label: "Yes", trigger: "update-yes" },
              { value: "no", label: "No", trigger: "end-message" },
            ],
          },
          {
            id: "send-data",
            component: <SendMail />,
            trigger: "end-message",
          },
          {
            id: "update-yes",
            message: "What field would you like to update?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              { value: "name", label: "Name", trigger: "update-name" },
              { value: "courses", label: "Courses", trigger: "update-courses" },
              {
                value: "phoneNumber",
                label: "Phone Number",
                trigger: "update-phoneNumber",
              },
              { value: "email", label: "Email", trigger: "update-email" },
            ],
          },
          {
            id: "update-name",
            update: "name",
            trigger: "7",
          },
          {
            id: "update-courses",
            update: "courses",
            trigger: "7",
          },
          {
            id: "update-phoneNumber",
            update: "phoneNumber",
            trigger: "7",
          },
          {
            id: "update-email",
            update: "email",
            trigger: "7",
          },
          {
            id: "end-message",
            component : (<SendMail />),
            asMessage : true ,
            end : true
          },
          {
            id : "refer-chat",
            component : (<this.handleClear />),
            end : true
          }
        ]}
      />
    );
  }
}

export default ChatBotForm;
