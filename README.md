# 主模块
## 处理用户对数据表进行增删改查的相关接口

### 一、模型
#### 无模型

#### controller
<table>
  <tr>
    <th>序号</th>
    <th>方法名称</th>
    <th>方法描述</th>
    <th>返回值类型</th>
  </tr>
  <tr>
    <td>1</td>
    <td>insertData</td>
    <td>新增表数据</td>
    <td>Map</td>
  </tr>
  <tr>
    <td>2</td>
    <td>createDb</td>
    <td>创建数据库</td>
    <td>Map</td>
  </tr>
  <tr>
    <td>3</td>
    <td>getDataInfo</td>
    <td>显示所有数据库信息</td>
    <td>List</td>
  </tr>
  <tr>
    <td>4</td>
    <td>getTablesInfo</td>
    <td>查询单个表的信息</td>
    <td>List</td>
  </tr>  
  <tr>
    <td>5</td>
    <td>createDbTab</td>
    <td>创建表</td>
    <td>Map</td>
  </tr>
  <tr>
    <td>6</td>
    <td>deleteData</td>
    <td>删除表数据</td>
    <td>Map</td>
  </tr>
  <tr>
    <td>7</td>
    <td>updateData</td>
    <td>修改表数据</td>
    <td>Map</td>
  </tr>
  <tr>
    <td>8</td>
    <td>getTableData</td>
    <td>获取表数据信息</td>
    <td>List</td>
  </tr>
  <tr>
    <td>9</td>
    <td>getTableInfo</td>
    <td>显示所有表信息</td>
    <td>List</td>
  </tr>
</table>


### 二、服务接口
#### 接口详情
<table>
  <tr>
    <th>序号</th>
    <th>接口描述</th>
    <th>接口地址</th>
    <th>http方法</th>
  </tr>
  <tr>
    <td>1</td>
    <td>删除表数据</td>
    <td>/data/{dbName}/{tableName}/_delete</td>
    <td>POST</td>
  </tr> 
  <tr>
    <td>2</td>
    <td>新增表数据</td>
    <td>/data/{dbName}/{tableName}/_add</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>3</td>
    <td>修改表数据</td>
    <td>/data/{dbName}/{tableName}/_update</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>4</td>
    <td>查看表数据</td>
    <td>/data/{dbName}/{tableName}/_data</td>
    <td>POST</td>
  </tr>
</table>

#### 环境部署
  1. 访问地址：http://localhost:8083
  2. 运行环境：jdk1.8、linux
  3. 数据库：mysql5.6、redis2.4
