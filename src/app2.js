import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

//事件委托，找到li
$tabBar.on('click','li', e => {
    const $li = $(e.currentTarget)
    $li
    .addClass('selected')
    .siblings()
    .removeClass('selected')
    let index = $li.index()
    $tabContent.children()
    .eq(index).addClass('active')  //不要用.css  .show  .hide
    .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')//触发点击事件，默认第一个