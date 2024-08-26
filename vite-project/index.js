// 该文件用来练习，非vue3目录文件
// observer
// 发布订阅模式
class bookStore {
    bookNameArr = {}
    on(subscribeName, cb) {
        console.log(this.bookNameArr[subscribeName]);

        if (!this.bookNameArr[subscribeName]) {
            this.bookNameArr[subscribeName] = [cb]

        }else{
            this.bookNameArr[subscribeName].push(cb)
        }
    }
    trigger(subscribeName) {
        const cbs = this.bookNameArr[subscribeName];
        if (cbs) {
            cbs.forEach(cb => cb());
        }
    }
    remove(subscribeName) {

    }

}
const bookstoreBoss = new bookStore()
bookstoreBoss.on('泰戈尔',()=>{
    console.log('1号来买书');
})
bookstoreBoss.on('泰戈尔',()=>{
    console.log('2号来买书');
})

bookstoreBoss.trigger('泰戈尔')