<template>
  <div class="home">
    <!-- 对象解构 -->
    <div v-for="{ name, id } in testArr" :key="id">{{ name }}</div>

    <!-- 循环对象 -->
    <div v-for="(val, key) in testObj" :key="key">{{ key }}: {{ val }}</div>

    <ul>
      <li v-for="n in 5">Item #{{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      testArr: [
        { name: 'aaa', id: 0 },
        { name: 'bbb', id: 1 },
        { name: 'ccc', id: 2 },
        { name: 'ddd', id: 3 },
      ],
      testObj: {
        age: 22,
        name: 'bee',
      },
    }
  },
  mounted() {
    console.log(this.$data)
  },
}
</script>
