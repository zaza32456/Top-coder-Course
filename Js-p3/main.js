import { sortList } from "./src/component/sort";

const inputList = [] 

const input = document.querySelector('input')
const add = document.querySelector("#add")
const clr = document.querySelector("#clear")
const tbody = document.querySelector("tbody")



add.addEventListener('click', () => {
  if(input.value !== '') { // input无输入时add无效

    inputList.push(+input.value) //+号强制转换数据类型
  
    input.value =''//清空input
    tbody.innerHTML='' //清空表格内容
    let result = sortList(inputList)
  
  
    console.log(result)
  
    result.forEach((e,index) => {
      console.log(index+1,e)
      const newTh = document.createElement('th') 
      const newTd = document.createElement('td') 
      const newTr = document.createElement('tr') 
  
      newTh.textContent = index +1
      newTd.textContent = e
  
      newTr.append(newTh,newTd)
      tbody.append(newTr)
  
    })
  
  }

})

clr.addEventListener('click', ()=> {
  inputList.length = 0 //清空数据
  tbody.innerHTML='' 
})
