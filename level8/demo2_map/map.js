var m = new Map();
m.set('11', 67); // 添加新的key-value
m.set('22', 59);
m.has('11'); // 是否存在key 'Adam': true
m.get('11'); // 67
m.delete('11'); // 删除key 'Adam'
m.get('11'); // undefined

console.log(m.get('22'))

// map 和 set都是键不能重复