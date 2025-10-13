import{Y as i,X as b,_ as m}from"./chunks/theme.CSHym8GW.js";import{d as P,B as y,c as w,o as C,at as p,G as d,j as t,w as s,k as c,a as l,a7 as r}from"./chunks/framework.BSvSrwQ3.js";const I=JSON.parse('{"title":"TanstackTable","description":"","frontmatter":{},"headers":[],"relativePath":"components/tanstacktable.md","filePath":"components/tanstacktable.md","lastUpdated":1732085261000}'),S={name:"components/tanstacktable.md"},R=P({...S,setup(q){const u=[{firstName:"tanner",lastName:"linsley",age:24,visits:100,status:"loading"},{firstName:"tandy",lastName:"miller",age:40,visits:40,status:"success"},{firstName:"tanner",lastName:"linsley",age:24,visits:100,status:"loading"}],g=[{firstName:"tanner",lastName:"linsley",age:24,visits:100,status:"In Relationship",progress:50},{firstName:"tandy",lastName:"miller",age:40,visits:40,status:"Single",progress:80},{firstName:"joe",lastName:"dirte",age:45,visits:20,status:"Complicated",progress:10}],k=[{firstName:"Justina",lastName:"Auer",age:1,children:[{firstName:"Luz",lastName:"Hayes",age:13},{firstName:"Susan",lastName:"Rempel",age:14,children:[{firstName:"Madisyn",lastName:"Lemke",age:26}]}]},{firstName:"Ralph",lastName:"Lindgren",age:33}],h=[{header:"姓名",cell:a=>`${a.firstName}.${a.lastName}`},{key:"age",title:"年龄"},{key:"visits",title:"访问次数"},{header:"状态",key:"status",cell:a=>{let e="primary";return a.status==="success"?e="success":a.status==="error"&&(e="error"),r(b,{type:e},{default:()=>a.status})}},{header:"操作",id:"operation",cell:()=>[r(m,{type:"primary",text:!0},{default:()=>"编辑"}),r(m,{type:"primary",text:!0},{default:()=>"删除"})]}],N=[{header:"姓名",cell:a=>`${a.firstName}.${a.lastName}`,size:200,fixed:"left"},{key:"age",title:"年龄",size:80},{key:"visits",title:"访问次数",size:160},{header:"状态",key:"status",cell:a=>{let e="primary";return a.status==="success"?e="success":a.status==="error"&&(e="error"),r(b,{type:e},{default:()=>a.status})},size:180},{header:"操作",id:"operation",cell:()=>[r(m,{type:"primary",text:!0},{default:()=>"编辑"}),r(m,{type:"primary",text:!0},{default:()=>"删除"})],size:200,fixed:"right"}],f=[{type:"selection"},...h],x=[{header:"姓名",cell:a=>`${a.firstName}.${a.lastName}`},{key:"age",title:"年龄",sorter:!0},{key:"visits",title:"访问次数"},{header:"状态",key:"status",cell:a=>{let e="primary";return a.status==="success"?e="success":a.status==="error"&&(e="error"),r(b,{type:e},{default:()=>a.status})}},{header:"操作",id:"operation",cell:()=>[r(m,{type:"primary",text:!0},{default:()=>"编辑"}),r(m,{type:"primary",text:!0},{default:()=>"删除"})]}],T=[{header:"hello",id:"hello",columns:[{accessorKey:"firstName"},{accessorKey:"lastName",header:"Last Name"}]},{header:"Info",columns:[{accessorKey:"age",header:"Age"},{header:"More Info",id:"MoreInfo",columns:[{accessorKey:"visits",header:"Visits"},{accessorKey:"status",header:"Status"},{accessorKey:"progress",header:"Profile Progress"}]}]}],v=[{type:"selection"},{key:"firstName"},{key:"lastName"},{key:"age"}],_={rowExpandable:a=>a.age<40,expandedRowRender:a=>r("div",JSON.stringify(a,null,8))};return(a,e)=>{const o=y("CodePreview"),n=y("ClientOnly");return C(),w("div",null,[e[8]||(e[8]=p("",8)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:u,columns:h,border:""})]),default:s(()=>[e[0]||(e[0]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    import { h } from 'vue'
    //-
    type Person = {
      firstName: string;
      lastName: string;
      age: number;
      visits: number;
      status: string;
      progress: number;
    };
    //-
    const data: Person[] = [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'loading',
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'success',
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'error',
      },
    ];
    //-
    const columns = [
      {
        header: '姓名',
        cell: (row) => {
          return \`\${row.firstName}.\${row.lastName}\`
        },
      },
      {
        key: 'age',
        title: '年龄'
      },
      {
        key: 'visits',
        title: '访问次数'
      },
      {
        header: '状态',
        key: 'status',
        cell: (row) => {
          let type = 'primary'
          if (row.status === 'success') {
            type = 'success'
          } else if (row.status === 'error') {
            type = 'error'
          }
          return h(NtTag, { type: type }, { default: () => row.status })
        }
      },
      {
        header: '操作',
        id: 'operation',
        cell: () => {
          return [
            h(NtButton, { type: 'primary', text: true }, { default: () => '编辑' }),
            h(NtButton, { type: 'primary', text: true }, { default: () => '删除' })
          ]
        }
      }
    ]
  <\/script>
  <template>
    <lt-tanstack-table :data="data" :columns="columns" border></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[9]||(e[9]=p("",2)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:u,columns:N,"fixed-head":"",style:{"max-height":"150px"}})]),default:s(()=>[e[1]||(e[1]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    const columns1 = [
      {
        header: '姓名',
        cell: (row) => {
          return \`\${row.firstName}.\${row.lastName}\`
        },
        size:200,
        fixed: 'left'
      },
      {
        key: 'age',
        title: '年龄',
        size: 80
      },
      {
        key: 'visits',
        title: '访问次数',
        size: 160
      },
      {
        header: '状态',
        key: 'status',
        cell: (row) => {
          let type = 'primary'
          if (row.status === 'success') {
            type = 'success'
          } else if (row.status === 'error') {
            type = 'error'
          }
          return h(NtTag, { type: type }, { default: () => row.status })
        },
        size: 180
      },
      {
        header: '操作',
        id: 'operation',
        cell: () => {
          return [
            h(NtButton, { type: 'primary', text: true }, { default: () => '编辑' }),
            h(NtButton, { type: 'primary', text: true }, { default: () => '删除' })
          ]
        },
        size: 200,
        fixed: 'right'
      }
    ]
  <\/script>
  <template>
    <lt-tanstack-table
      :data="data"
      :columns="columns1"
      fixed-head
      style="max-height:150px;"
    ></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[10]||(e[10]=t("h3",{id:"选中行-多选",tabindex:"-1"},[l("选中行(多选) "),t("a",{class:"header-anchor",href:"#选中行-多选","aria-label":'Permalink to "选中行(多选)"'},"​")],-1)),e[11]||(e[11]=t("p",null,[l("通过将第一列配置 "),t("code",null,"type=selection"),l(" 让行变为可选的")],-1)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:u,columns:f})]),default:s(()=>[e[2]||(e[2]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    const columns2 = [{
      type: 'selection'
    }, ...columns]
  <\/script>
  <template>
    <lt-tanstack-table :data="data" :columns="columns2"></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[12]||(e[12]=t("h3",{id:"选中行-单选",tabindex:"-1"},[l("选中行(单选) "),t("a",{class:"header-anchor",href:"#选中行-单选","aria-label":'Permalink to "选中行(单选)"'},"​")],-1)),e[13]||(e[13]=t("p",null,[l("同多选一样配置一列 "),t("code",null,"type: 'selection'"),l("，然后设置表格属性 "),t("code",null,"multi-selection=false"),l(" 单选")],-1)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:u,columns:f,"multi-selection":!1})]),default:s(()=>[e[3]||(e[3]=t("textarea",{lang:"vue-html"},`    <lt-tanstack-table :data="data" :columns="columns2" :multi-selection="false"></lt-tanstack-table>
  `,-1))]),_:1})]),_:1}),e[14]||(e[14]=p("",2)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:u,columns:x})]),default:s(()=>[e[4]||(e[4]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    const columns3 = [{
      key: 'age',
      title: '年龄',
      sorter: true
    }]
  <\/script>
  <template>
    <lt-tanstack-table :data="data" :columns="columns3"></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[15]||(e[15]=t("h3",{id:"表头分组",tabindex:"-1"},[l("表头分组 "),t("a",{class:"header-anchor",href:"#表头分组","aria-label":'Permalink to "表头分组"'},"​")],-1)),e[16]||(e[16]=t("p",null,"数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。",-1)),e[17]||(e[17]=t("p",null,[l("通过在配置表头的 "),t("code",null,"columns[n]"),l(" 内嵌 "),t("code",null,"columns"),l(" 属性，实现多级表头。")],-1)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:g,columns:T,border:""})]),default:s(()=>[e[5]||(e[5]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    const data1 =  [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
      },
    ]
    //-
    const columns4 = [
      {
        header: 'hello',
        id: 'hello',
        columns: [
          { accessorKey: 'firstName' },
          { accessorKey: 'lastName', header: 'Last Name' }
        ]
      },
      {
        header: 'Info',
        columns: [
          { accessorKey: 'age', header: 'Age' },
          {
            header: 'More Info',
            id: 'MoreInfo',
            columns: [
              { accessorKey: 'visits', header: 'Visits' },
              { accessorKey: 'status', header: 'Status' },
              { accessorKey: 'progress', header: 'Profile Progress' }
            ]
          }
        ]
      }
    ]
  <\/script>
  <template>
    <lt-tanstack-table :data="data1" :columns="columns4" border></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[18]||(e[18]=t("h3",{id:"树形数据",tabindex:"-1"},[l("树形数据 "),t("a",{class:"header-anchor",href:"#树形数据","aria-label":'Permalink to "树形数据"'},"​")],-1)),e[19]||(e[19]=t("p",null,[l("表格支持树形数据的展示，当数据中有 "),t("code",null,"children"),l(" 字段时会自动展示为树形表格")],-1)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:k,columns:v})]),default:s(()=>[e[6]||(e[6]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    const data2 = [
      {
        "firstName": "Justina",
        "lastName": "Auer",
        "age": 1,
        "children": [
          {
            "firstName": "Luz",
            "lastName": "Hayes",
            "age": 13
          },
          {
            "firstName": "Susan",
            "lastName": "Rempel",
            "age": 14,
            "children": [
              {
                "firstName": "Madisyn",
                "lastName": "Lemke",
                "age": 26
              }
            ]
          }
        ]
      },
      {
        "firstName": "Ralph",
        "lastName": "Lindgren",
        "age": 33
      }
    ]
    //-
    const columns5 = [
      { type: 'selection' },
      { key: 'firstName' },
      { key: 'lastName' },
      { key: 'age' }
    ]
  <\/script>
  <template>
    <lt-tanstack-table :data="data2" :columns="columns5"></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[20]||(e[20]=t("blockquote",null,[t("p",null,[l("当前树形展开选择时存在bug: "),t("a",{href:"https://github.com/TanStack/table/issues/5620#issue-2365424488",target:"_blank",rel:"noreferrer"},"选中状态不正确")])],-1)),e[21]||(e[21]=t("h3",{id:"展开行",tabindex:"-1"},[l("展开行 "),t("a",{class:"header-anchor",href:"#展开行","aria-label":'Permalink to "展开行"'},"​")],-1)),e[22]||(e[22]=t("p",null,[l("当表格内容较多不能一次性完全展示时。可以使用 "),t("code",null,"Table"),l(" 展开行功能。")],-1)),e[23]||(e[23]=t("p",null,[l("通过配置表格的 "),t("code",null,"expandable"),l(" 对象属性可以开启展开行功能。")],-1)),d(n,null,{default:s(()=>[d(o,null,{preview:s(()=>[d(c(i),{data:u,columns:h,expandable:_})]),default:s(()=>[e[7]||(e[7]=t("textarea",{lang:"vue"},`  <script setup lang="ts">
    const expandable = {
      rowExpandable: (record) => record.age < 40,
      expandedRowRender: (record) => h('div', JSON.stringify(record, null, 8))
    }
  <\/script>
  <template>
    <lt-tanstack-table :data="data" :columns="columns" :expandable="expandable"></lt-tanstack-table>
  </template>
  `,-1))]),_:1})]),_:1}),e[24]||(e[24]=p("",7))])}}});export{I as __pageData,R as default};
