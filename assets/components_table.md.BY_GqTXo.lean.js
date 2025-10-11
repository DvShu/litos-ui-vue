import{W as o,_ as r,o as _}from"./chunks/theme.DD-_cGzL.js";import{p as q,B as y,c as C,o as T,at as c,G as a,j as e,w as s,k as p,a7 as d,a as n,t as A}from"./chunks/framework.BSvSrwQ3.js";const N=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","filePath":"components/table.md","lastUpdated":1760171877000}'),D={name:"components/table.md"},I=Object.assign(D,{setup(B){const k=[{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],g=[{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"李四",age:19,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}],b=[{name:"李四",age:19,address:"北京朝阳"},{name:"李四",age:19,address:"北京西城"},{name:"王五",age:18,address:"北京朝阳"},{name:"张三",age:20,address:"北京朝阳"}],u=q([{name:"李四",age:19,address:"北京朝阳"},{name:"张三",age:18,address:"北京朝阳"},{name:"王五",age:20,address:"北京朝阳"}]),E=[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[d(r,{type:"primary",text:!0},{default:()=>"编辑"}),d(r,{type:"primary",text:!0},{default:()=>"删除"})]}],f=[{title:"姓名",key:"name",fixed:"left",width:80},{title:"年龄",key:"age",width:200},{title:"住址",key:"address",width:200},{title:"操作",key:"action",width:200,fixed:"right",render:()=>[d(r,{type:"primary",text:!0},{default:()=>"编辑"}),d(r,{type:"primary",text:!0},{default:()=>"删除"})]}],m=[{title:"姓名",key:"name"},{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[d(r,{type:"primary",text:!0},{default:()=>"编辑"}),d(r,{type:"primary",text:!0},{default:()=>"删除"})]}],x=[{title:"姓名",key:"name"},{title:"基本信息",children:[{title:"年龄",key:"age",sorter:!0},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[d(r,{type:"primary",text:!0},{default:()=>"编辑"}),d(r,{type:"primary",text:!0},{default:()=>"删除"})]}],v=[{title:"姓名",key:"name",colspan:(h,t)=>t===2?2:1,rowspan:(h,t)=>t===0?2:t===1?0:1},{title:"基本信息",children:[{title:"年龄",key:"age",colspan:(h,t)=>t===2?0:1,rowspan:(h,t)=>t===0?2:t===1?0:1},{title:"住址",key:"address"}]},{title:"操作",key:"action",render:()=>[d(r,{type:"primary",text:!0},{default:()=>"编辑"}),d(r,{type:"primary",text:!0},{default:()=>"删除"})]}],F=[{title:"姓名",key:"name"},{title:"年龄",key:"age",render:(h,t)=>d(_,{modelValue:h.age,htmlType:"number","onUpdate:modelValue":l=>{const i=[...u.value];i[t].age=l,u.value=i}})},{title:"住址",key:"address"},{title:"操作",key:"action",render:()=>[d(r,{type:"primary",text:!0},{default:()=>"编辑"}),d(r,{type:"primary",text:!0},{default:()=>"删除"})]}],w={key:"age",order:"desc"};function S(){return d("tr",[d("td","合计"),d("td",{colspan:"3"},k.reduce((h,t)=>h+t.age,0))])}return(h,t)=>{const l=y("CodePreview"),i=y("ClientOnly");return T(),C("div",null,[t[11]||(t[11]=c("",6)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:k,columns:E})]),default:s(()=>[t[0]||(t[0]=e("textarea",{lang:"vue"},`  <script setup>
    import { h } from 'vue';
    const dataSource = [
      {
        id: 1,
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        id: 2,
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        id: 3,
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ]
    const columns = [{
      title: '姓名',
      key: 'name'
      width: 80
    }, {
      title: '年龄',
      key: 'age',
      width: 80
    }, {
      title: '住址',
      key: 'address',
      width: 80
    }, {
      title: '操作',
      width: 80,
      render: () => [
        h(NtButton, { type: 'text' }, { default: () => '编辑'}),
        h(NtButton, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  <\/script>
  <template>
    <lv-table :data="dataSource" :columns="columns"></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[12]||(t[12]=e("h3",{id:"斑马纹",tabindex:"-1"},[n("斑马纹 "),e("a",{class:"header-anchor",href:"#斑马纹","aria-label":'Permalink to "斑马纹"'},"​")],-1)),t[13]||(t[13]=e("p",null,[n("表格默认带斑马纹，可以通过设置 "),e("code",null,"stripe"),n(" 为 "),e("code",null,"false"),n(" 来取消斑马纹")],-1)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:k,columns:E,stripe:!1})]),default:s(()=>[t[1]||(t[1]=e("textarea",{lang:"vue"},`  <template>
    <lv-table :data="dataSource" :columns="columns" :stripe="false"></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[14]||(t[14]=e("h3",{id:"边框",tabindex:"-1"},[n("边框 "),e("a",{class:"header-anchor",href:"#边框","aria-label":'Permalink to "边框"'},"​")],-1)),t[15]||(t[15]=e("p",null,[n("默认情况下，"),e("code",null,"Table"),n(" 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),e("code",null,"border"),n(" 属性，把该属性设置为 "),e("code",null,"true"),n(" 即可启用。")],-1)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:k,columns:E,border:""})]),default:s(()=>[t[2]||(t[2]=e("textarea",{lang:"vue"},`  <template>
    <lv-table :data="dataSource" :columns="columns" border></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[16]||(t[16]=e("h3",{id:"空表格",tabindex:"-1"},[n("空表格 "),e("a",{class:"header-anchor",href:"#空表格","aria-label":'Permalink to "空表格"'},"​")],-1)),t[17]||(t[17]=e("p",null,"数据列表没有数据时，显示空表格",-1)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:[],columns:E})]),default:s(()=>[t[3]||(t[3]=e("textarea",{lang:"vue"},`  <template>
    <lv-table :data="[]" :columns="columns"></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[18]||(t[18]=c("",2)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:g,columns:f,"fixed-head":"",style:{"max-height":"200px"},class:"nt-scrollbar"})]),default:s(()=>[t[4]||(t[4]=e("textarea",{lang:"vue"},`  <script setup>
    import { h } from 'vue';
    const dataSource = [
      {
        id: 1,
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        id: 2,
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        id: 3,
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ]
    const columns2 = [{
      title: '姓名',
      key: 'name',
      fixed: 'left',
      width: 80,
    }, {
      title: '年龄',
      key: 'age',
      width: 200,
    }, {
      title: '住址',
      key: 'address',
      width: 200,
    }, {
      title: '操作',
      key: 'action',
      width: 200,
      fixed: 'right',
      render: () => [
        h(Button, { type: 'text' }, { default: () => '编辑'}),
        h(Button, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  <\/script>
  <template>
    <lv-table :data="dataSource2" :columns="columns" fixed-head style="max-height:200px;" class="nt-scrollbar"></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[19]||(t[19]=c("",3)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:k,columns:m,"default-sort":w})]),default:s(()=>[t[5]||(t[5]=e("textarea",{lang:"vue"},`  <script setup>
  const columns3 = [{
    title: '姓名',
    key: 'name',
  }, {
    title: '年龄',
    key: 'age',
    sorter: true
  }, {
    title: '住址',
    key: 'address'
  }, {
    title: '操作',
    key: 'action',
    render: () => [
      h(Button, { type: 'text' }, { default: () => '编辑'}),
      h(Button, { type: 'text' }, { default: () => '删除'})
    ]
  }]
  const defaultSort = { key: 'age', order: 'desc' }
  <\/script>
  <template>
    <lv-table :data="dataSource1" :columns="columns3" :default-sort="defaultSort"></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[20]||(t[20]=e("h3",{id:"表尾合计行",tabindex:"-1"},[n("表尾合计行 "),e("a",{class:"header-anchor",href:"#表尾合计行","aria-label":'Permalink to "表尾合计行"'},"​")],-1)),t[21]||(t[21]=e("p",null,[n("设置 "),e("code",null,"renderSummary"),n(" 函数来渲染表尾合计行")],-1)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:k,columns:m,"render-summary":S})]),default:s(()=>[t[6]||(t[6]=e("textarea",{lang:"vue"},`  <script setup>
    function renderSummary() {
      return h('tr', [
        h('td', '合计'),
        h('td', { colspan: '3' },dataSource1.reduce((sum, item) => sum + item.age, 0)),
      ])
    }
  <\/script>
  <template>
    <lv-table :data="dataSource1" :columns="columns3" :render-summary="renderSummary"></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[22]||(t[22]=e("h3",{id:"多级表头",tabindex:"-1"},[n("多级表头 "),e("a",{class:"header-anchor",href:"#多级表头","aria-label":'Permalink to "多级表头"'},"​")],-1)),t[23]||(t[23]=e("p",null,[n("配置 "),e("code",null,"columns"),n(" 的时候，给某一列增加一个 "),e("code",null,"children"),n(" 就能实现表头分组")],-1)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:k,columns:x,border:""})]),default:s(()=>[t[7]||(t[7]=e("textarea",{lang:"vue"},`  <script setup>
    const columns4 = [{
      title: '姓名',
      key: 'name'
    }, {
      title: '基本信息',
      children: [{
        title: '年龄',
        key: 'age',
        sorter: true,
      }, {
        title: '住址',
        key: 'address'
      }]
    }, {
      title: '操作',
      key: 'action',
      render: () => [
        h(NtButton, { type: 'text' }, { default: () => '编辑'}),
        h(NtButton, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  <\/script>
  <template>
    <lv-table :data="dataSource1" :columns="columns4" border></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[24]||(t[24]=c("",2)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:b,columns:v,border:""})]),default:s(()=>[t[8]||(t[8]=e("textarea",{lang:"vue-html"},`  <template>
    <lv-table :data="dataSource3" :columns="columns5" border></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[25]||(t[25]=e("h3",{id:"可编辑表格",tabindex:"-1"},[n("可编辑表格 "),e("a",{class:"header-anchor",href:"#可编辑表格","aria-label":'Permalink to "可编辑表格"'},"​")],-1)),t[26]||(t[26]=e("p",null,"通过自定义渲染的形式能够快速实现单元格的编辑",-1)),a(i,null,{default:s(()=>[a(l,null,{preview:s(()=>[a(p(o),{data:u.value,columns:F,border:""},null,8,["data"]),t[9]||(t[9]=e("hr",null,null,-1)),e("div",null,A(JSON.stringify(u.value,null,2)),1)]),default:s(()=>[t[10]||(t[10]=e("textarea",{lang:"vue"},`  <script setup>
    const dataSource4 = ref([
      {
        name: '李四',
        age: 19,
        address: '北京朝阳',
      },
      {
        name: '张三',
        age: 18,
        address: '北京朝阳',
      },
      {
        name: '王五',
        age: 20,
        address: '北京朝阳',
      },
    ])
    const columns6 = [{
      title: '姓名',
      key: 'name',
    }, {
      title: '年龄',
      key: 'age',
      render: (row, index) => {
        return h(Input, {
          modelValue: row.age,
          htmlType: 'number',
          'onUpdate:modelValue': (value) => {
            const newData = [...dataSource4.value]
            newData[index].age = value
            dataSource4.value = newData
          }
        })
      }
    }, {
      title: '住址',
      key: 'address'
    }, {
      title: '操作',
      key: 'action',
      render: () => [
        h(Button, { type: 'text' }, { default: () => '编辑'}),
        h(Button, { type: 'text' }, { default: () => '删除'})
      ]
    }]
  <\/script>
  <template>
    <lv-table :data="dataSource4" :columns="columns6" border></lv-table>
  </template>
  `,-1))]),_:1})]),_:1}),t[27]||(t[27]=c("",12))])}}});export{N as __pageData,I as default};
