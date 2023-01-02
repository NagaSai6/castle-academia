import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      courses : '',
      phoneNumber : '',
      email : ''
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, courses, phoneNumber,email} = steps;

    this.setState({ name, courses, phoneNumber,email });
  }

  render() {
    const { name, courses, phoneNumber,email} = this.state;
    return (
      <div style={{ width: '100%' }}>
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

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
      bubbleStyle= {{backgroundColor : "#FDD03B"}}
      floatingStyle={{backgroundColor : "#000"}}
      headerTitle="Castle Academia"
        floating = {true}
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your Interested Course?',
            trigger: 'courses',
          },
          {
            id: 'courses',
            options: [
              { value: 'CRT Training', label: 'CRT Training', trigger: '5' },
              { value: 'Start Up Plan', label: 'Start-Up Plan', trigger: '5' },
              { value: 'Abroad Studies', label: 'Abroad Studies', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'Enter your phone number ',
            trigger: 'phoneNumber',
          },
          {
            id: 'phoneNumber',
            user: true,
            trigger: '100',
            validator: (value) => {
              if (!value.length) {
                return 'Enter Valid Number';
              } else if (value.length < 6) {
                return 'Enter Valid Phone Number';
              } else if (value.length > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id  : '100',
            message : 'Enter your Email Address',
            trigger : 'email'
          },
          {
            id : 'email',
            user : true,
            trigger : '7'

         },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },

          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'courses', label: 'Courses', trigger: 'update-courses' },
              { value: 'phoneNumber', label: 'Phone Number', trigger: 'update-phoneNumber' },
              { value: 'email', label: 'Email', trigger: 'update-email' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-courses',
            update: 'courses',
            trigger: '7',
          },
          {
            id: 'update-phoneNumber',
            update: 'phoneNumber',
            trigger: '7',
          },
          {
            id: 'update-email',
            update: 'email',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;