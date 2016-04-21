# 主模块
## 处理用户对数据表进行增删改查的相关接口

### 一、模型
#### 无模型

#### controller
  1. insertData 新增表数据 返回类型 java.util.Map
  2. createDb 创建数据库 返回类型 java.util.Map
  3. getDataInfo 显示所有数据库信息 返回类型 java.util.List
  4. getTablesInfo 查询单个表的信息 返回类型 java.util.List
  5. createDbTab 创建表 返回类型 java.util.Map
  6. deleteData 删除表数据 返回类型 java.util.Map
  7. updateData 修改表数据 返回类型 java.util.Map
  8. getTableData 获取表数据信息 返回类型 java.util.List
  9. getTableInfo 显示所有表信息 返回类型 java.util.List

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
