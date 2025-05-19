const todo = [
  { title: "Do Home Work", done: true },
  { title: "Learn js", done: false },
  { title: "Make a simple project", done: true },
  { title: "Understanding the array", done: false },
];

let completedTask = [];
let ongoingTask = [];

todo.forEach((todoitem) => {
  if (todoitem.done) {
    completedTask.push(todoitem);
  } else {
    ongoingTask.push(todoitem);
  }
});

console.log("\n✅ Completed Tasks");

completedTask.forEach((task) => {
  console.log(`   - ${task.title}`);
});

console.log("\n🕐 Ongoing Tasks");

ongoingTask.forEach((task) => {
  console.log(`   - ${task.title}`);
});
