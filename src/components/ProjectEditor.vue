<template>
  <div>
    <h2>{{title}}</h2>
    <el-form class="form">
      <div class="one-work-history" v-for="(item,index) in items">
        <el-form-item v-bind:label="labels[keys[0]] || key">
          <el-input size="small" v-model="item[keys[0]]"></el-input>
        </el-form-item>
        <el-form-item v-bind:label="labels[keys[1]] || key">
          <el-input size="small" type="textarea" :autosize="{ minRows: 4}" placeholder="请输入内容" v-model="item[keys[1]]"></el-input>
        </el-form-item>
        <i class="el-icon-delete" v-on:click="removeItem(index)"></i>
      </div>
      <el-button class="add-block" :plain="true" type="primary" size="small" v-on:click="addItem">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: ['items','labels','title'],
    computed:{
      keys(){
        return (Object.keys(this.items[0]))
      }
    },
    methods:{
      addItem(){
        const empty = {}
        this.keys.map((key) => {
          empty[key] = ''
        })
        this.items.push(empty)
      },
      removeItem(index){
        if(this.items.length > 1){
          this.items.splice(index, 1)
        }else{
          this.$message({
            message:'最少保留一项',
            duration: 1000,
            type: "warning"
          })
        }
      }
    }
  }
</script>