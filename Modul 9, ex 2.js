
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const data = JSON.parse(jsonString);
const listNode = data.list;

let list = []

listNode.forEach(item => {
  list.push({
  name: item.name,
  age: Number(item.age),
  prof: item.prof,
  })
})

console.log('list', list);
