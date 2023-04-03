// 使用vite时才可以使用这个方法引入
import data from '../../data/db.json'



// 获取img列表
const imgList = data.images

// 创建imgGroup节点
export const $imgGroup = document.createElement('div')
$imgGroup.classList.add('imgGroup')

// 将所有img加入imgGroup节点中,为其添加img的class
imgList.forEach(imgInfo => {
  const $img = document.createElement('div')
  $img.classList.add('img')
  // 将div背景设置为图片
  $img.style.backgroundImage = `url(${imgInfo.address})`
  // 将img添加到imgGroup中
  $imgGroup.append($img)
}) 

