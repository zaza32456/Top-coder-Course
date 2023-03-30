// 导入样式
import '../css/style.scss'

import { $imgGroup } from './imgGroup'
// 获取根节点dom
const $app = document.getElementById('app')

// 加入子节点imgGroup和btnGroup
$app.append($imgGroup)

