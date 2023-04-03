// 导入样式
import '../css/style.scss'

import { $imgGroup } from './imgGroup'
import { $btnGroup } from './btnGroup'

// 获取根节点dom
const $app = document.getElementById('app')

// 加入子节点imgGroup和btnGroup
$app.append($imgGroup)

$imgGroup.append($btnGroup)

// 注意querySelector的名字前需要加上符号（类或id）
const $leftButton = document.querySelector('.left')

$leftButton.addEventListener('click', () => {
  const $imgList = document.querySelectorAll('.img')
  
  $imgGroup.prepend($imgList[$imgList.length - 1])
})

const $rightButton = document.querySelector('.right')

$rightButton.addEventListener('click', () => {
  const $imgList = document.querySelectorAll('.img')
  $imgGroup.insertBefore($imgList[0], $btnGroup)
})
