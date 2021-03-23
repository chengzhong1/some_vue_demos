const app = new Vue({
  el: '#app',
  data: {
    // name: '',
    // date: '',
    // firstPrice,
    msg: {
      name: '',
      date: '',
      price: '',
      count: 1,
    },
    // text: '',
    // date: '',
    // price: '',
    list: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.list[index].count++
    },
    decrement(index) {
      this.list[index].count--
    },
    handleRemove(index) {
      this.list.splice(index, 1)
    },
    handleUpload() {
      let flag = false
      this.msg.name = '《' + this.msg.name + '》'
      for (let i of this.list) {
        if (i.name == this.msg.name) {
          flag = true
        }
      }
      if (flag) {
        alert('列表中已存在,请不要重复添加!')
        this.msg = {}
        return
      }
      this.list.push(this.msg)
      this.msg = {}

    }
  },
  computed: {
    handlePrice() {
      return parseFloat(this.firstPrice)
    }
  },
  filters: {
    showPrice(value) {
      return '￥' + value.toFixed(2)
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let it of this.list) {
        total += it.price * it.count
      }
      return total
    }
  }
})