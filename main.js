// // ただのスライドショー + opacity0, transition(allのみ) + .slide-item.active
const slideItems =document.getElementsByClassName("slide-item");

const maxSlideNum = slideItems.length - 1
let activeNum = 0
const intervalTime = 2000

slideItems[0].classList.add('active')


setInterval(function() {
    slideItems[activeNum].classList.remove('active')

    // activeNum更新
    activeNum = activeNum === maxSlideNum ? 0 : activeNum+1
    slideItems[activeNum].classList.add('active')

}, intervalTime)

// ズーム付きスライドショー + transform + transition(transform)
// 後追加: window.~追加
// window.addEventListener('load', function() {
//     const slideItems =document.getElementsByClassName("slide-item");
    
//     const maxSlideNum = slideItems.length - 1
//     let activeNum = 0
//     const intervalTime = 2000

//     // 後追加: fadeOutTime追加
//     const fadeOutTime = 1000
    
//     // 変更: zoom追加
//     slideItems[0].classList.add('active','zoom')
        
//     setInterval(function() {
//         // 追加: currentNumを定義
//         const currentNum = activeNum

//         // 変更: activeNum => currentNum
//         slideItems[currentNum].classList.remove('active')

//         // 追加: slideItemsのzoomを外す
//         // ズームの途中でスライドが切り替わると元の大きさに戻ってしまうので少し時間(１秒)を持たせてzoomを外す
//         // =>１秒ズームの延長ができる
//         // =>延長したままの状態で切り替えができる
//         setTimeout(function(){
//             slideItems[currentNum].classList.remove('zoom')
//         }, fadeOutTime)

//         // activeNum更新
//         activeNum = activeNum === maxSlideNum ? 0 : activeNum+1

//         // 追加: zoom追加
//         slideItems[activeNum].classList.add('active', 'zoom')
    
//     }, intervalTime)
// })

