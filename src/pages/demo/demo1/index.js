import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import NormalLoginForm from './form'
import { Card } from 'antd';
import TableDemo from './table'
class Demo extends PureComponent {

  state = {
    // 列表查询参数
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  };

  getNameCallback = async (name) => {
    // 父子组件通信
    const params = { ...this.state.params, ...name }
    // set 居然是异步，谢特
    await this.setState({
      params
    })
    console.log(this.state.params)
  }

  render() {
    const { params } = this.state;
    return (
      <PageHeaderWrapper>
        <div>
          <NormalLoginForm getName={this.getNameCallback.bind(this)} />
        </div>
        <div style={{ marginTop: '30px' }}>
          <Card title="Card title" bordered={false} >
            <TableDemo param={params} />
          </Card>
        </div>
      </PageHeaderWrapper>
    )
  }
}


export default Demo