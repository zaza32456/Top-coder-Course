import data from '../../data/db.json'

// 获取btn列表
const btnList = data.buttons

// 创建并导出btnGroup，并添加'btnGroup'l类
export const $btnGroup = document.createElement('div')

$btnGroup.classList.add('btnGroup')

// 遍历列表将btn加入到$btnGroup中
btnList.forEach(btnInfo => {
    const $btn = document.createElement('i')
    // 通过遍历将classname中的字符串加入到类名中
    btnInfo.classNames.forEach(className => {
        $btn.classList.add(className)
    })

    $btnGroup.append($btn)

})