
const xmlString =  `
<list>
  <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`


const parser = new DOMParser()
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list")
const student = listNode.querySelectorAll('student');


let list = []
student.forEach(item => {
    list.push({
      name: item.querySelector('first').textContent + ' ' + item.querySelector('second').textContent,
      age: Number(item.querySelector('age').textContent),
      prof: item.querySelector('prof').textContent,
      lang: item.getAttribute('lang'),
    })
})

console.log("list", list)



