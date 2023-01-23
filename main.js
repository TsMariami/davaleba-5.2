const todolist= [ {
    id: '1',
    title: 'groceries'
},

{
    id: '2',
    title: 'workout'
},
{
    id:'3',
    title: 'chores'
}]

const input = document.getElementById('inp')
const button = document.getElementById('but')
const ul = document.getElementById('u')

var id= todolist.length +1

// button.addEventListener('click', additemtolist)

function additemtolist() 
{ let newInputValue= input.value
  if(validateinput(newInputValue)) {
    let newitem = new Object()
    newitem.id= id
    id++
    newitem.title = input.value
    todolist.push(newitem)
    input.value= ''
    rendermylist() }
else{
    console.log('the input must not be empty')
}

}

function deleteitemfromlist(id)
{
   deletetodoitemfromthelist(id)
   rendermylist()
}

function rendermylist()
{
    ul.innerHTML = ''
todolist.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = item.title + ' ID'  + ':' + item.id + ' '
    let deletebutt = document.createElement('button')
    deletebutt.innerHTML = 'delete'
    deletebutt.addEventListener ('click' , () => {
        deleteitemfromlist(item, id)
    })
    li.appendChild(deletebutt)
    ul.appendChild(li)

   })

}

function deletetodoitemfromthelist(id){
    let item = todolist.find(value => value.id === id)
    todolist.splice(todolist.indexOf(item), 1)
    
}

function validateinput(value)
{
   if (value !== null && value == li) {return true}
   else{ return false}

}

rendermylist()