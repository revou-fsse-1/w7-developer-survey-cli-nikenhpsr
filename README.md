# Developer Survey CLI

- Assignment Example for Week 7: Programming — JavaScript, Node.js, npm, TypeScript

This is a Simple Developer Survey using CLI, JavaScript, and NPM Package called Inquirer

## Prerequisites

- Node.js
- NPM
  - Inquirer
- JavaScript
- Terminal

## Configuration

1. First Name

To configure that the name is required. I chose to use `do ... while...`. So you can't continue to the next questions if you're not entered a name.

Rules:
  - Input type "input"
  - Validate not empty

Configuration :
```
{
    type: "input",
    name: "name",
    message: "What's your first name?",
    validate: (firstName) => {
      if (firstName !== "") {
        return true;
      } else {
        do {
          return "You must enter a valid name.";
        } while (firstName === "");
      }
    },
  }
```


2. Email Address

I configured that the email address is required and it should contain "@" and "." characters. If you entered something without those characters then it you can;t continue to the next question.

Rules:
  - Input type "input"
  - Validate not empty


Configuration :

```
{
    type: "input",
    name: "email",
    message: "Hello! What's your email address?",
    validate: (email) => {
      if (email !== "" && email.includes("@" && ".")) {
        return true;
      } else {
        do {
          return "Please enter a valid email address.";
        } while (email === "" && email.excludes("@" && "."));
      }
    },
  }
```
3. Experience (Boolean)

Nothing interested about this question

  Rules:

  - Input type "list", [yes, no]
  - Validate not empty

Configuration:
```
  {
    type: "list",
    name: "dev",
    message: "Are you experienced Developer?",
    choices: ["Yes", "No"],
    validate: (dev) => {
      dev === "" ? false : true;
    },
  }
```

4. Experiences

This question can only be asked when the user answers "Yes" to previous question. So additional `when` prop is used.

Rules:
  - Input type "list", ["0-1", "1-3", "3-5", "5-10", "10+"]
  - Validate not empty
  - Only show if question 3 selected "yes"

Configuration:

```
{
    type: "list",
    name: "experience",
    message: "How many years of experience you have with JavaScript?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when: (answers) => answers["dev"] === "Yes",
    validate: (experience) => {
      experience === "" ? false : true;
    },
  }
```

5. JS Libraries

Same as the fourth question.

  Rules:

  - Input type "checkbox", ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"]
  - Validate not empty
  - Only show if question 3 selected "yes"

Configuration:
```
{
    type: "checkbox",
    name: "technologies",
    message: "What JavaScript library do you know?",
    choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
    when: (answers) => answers["dev"] === "Yes",
    validate: (technologies) => {
      technologies === "" ? false : true;
    },
  }
```
6. Salary

Same as the fourth and fifth question.

  Rules:

  - Input type "number"
  - Validate salary more than zero
  - Only show if question 3 selected "yes"

Configuration:
```
{
    type: "number",
    name: "salary",
    message: "What is your salary requirement?",
    validate: (salary) => {
      if (salary >= 0) {
        return true;
      } else {
        do {
          return "You must enter a valid salary.";
        } while (salary < 0);
      }
    },
  }
```