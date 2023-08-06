const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

/* 처음에 적은 코드
   const getMaxId = todos => 
   todos.reduce((a,c) =>(a > c.id ? a :c.id),0);
*/

const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
