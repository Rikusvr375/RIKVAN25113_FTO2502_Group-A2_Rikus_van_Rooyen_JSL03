  
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


// New Tasks

// Code for incremented id's
  
  let updatedId = task[task.length-1].id+1;

// Code that allows prompts to run 3 times 
 
  for (let i = 0; i < 3; i++) {
  const title = prompt(`Please enter your task ${updatedId} title.`);
  const description = prompt(`Please enter your task ${updatedId} description.`);
  let status;
  
// Code that secures the right status has been entered

do {
  status = prompt(`Enter task ${updatedId} status (todo, doing, done):`).toLowerCase();
  if (status !== "todo" && status !== "doing" && status !== "done") {
      alert("Invalid status. Please enter `todo`, `doing`, or `done`.");
  }
} while (status !== "todo" && status !== "doing" && status !== "done");

// Order that prompts are shown in

  task.push({
      id: updatedId,
      title: title,
      description: description,
      status: status
    });
    updatedId++
  };
  
console.log("All tasks:",task);

// Code for array with tasks that are done

const doneTasks = task.filter(stat => stat.status === "done");

console.log("Completed tasks:",doneTasks);
