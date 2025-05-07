  let task = [];

// Initial tasks
   task.push(
    {
      id: 1,
      title: "Launch Epic Career",
      description: "Create a killer Resume",
      status: "todo",
    });
   task.push({
      id: 2,
      title: "Master JavaScript",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    });
   task.push({
      id: 3,
      title: "Contribute to Open Source Projects",
      description:
        "Gain practical experience and collaborate with others in the software development community",
      status: "done",
    });


// Code for incremented id's
  
let updatedId = task[task.length-1].id+1;

// New Tasks

for (let i = 0; i < 3; i++) {

  task.push({
      id: updatedId,
      title: prompt("Please enter your task's title."),
      description: prompt("Please enter your task description."),
      status: "asojf",
    });
    updatedId++
  }
  

