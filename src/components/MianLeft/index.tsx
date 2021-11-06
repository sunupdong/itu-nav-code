import React from 'react'
import { Avatar, Card, Tabs, Tooltip } from 'antd'
import { BankOutlined, ToolOutlined, ClusterOutlined, CameraOutlined, ProfileOutlined, BulbOutlined } from '@ant-design/icons'
import { CommunityData, onlineData } from '@/utils/resourceData'
import { getLocal } from '@/utils/auth'

const { TabPane } = Tabs

const MainLeft = () => {
  const oss = 'https://itudb.oss-cn-hangzhou.aliyuncs.com/'
  const itudb_theme = getLocal('itudb_theme') ? getLocal('itudb_theme') : '#f09393'

  // 社区
  const renderViewByTabCommunityData = CommunityData.map((resource, index) =>
    <a href={resource.link} target='_blank' key={index} rel='noreferrer'>
      <Card.Grid className='gird-style'>
        <Avatar shape='square' className={`bg-${resource.background}`} src={oss + 'community/' + resource.icon} />
        <div className='resource-name'>{resource.name}</div>
      </Card.Grid>
    </a>
  )

  // 在线工具
  const renderViewByTabOnlineData = onlineData.map((resource, index) =>
    <a href={resource.link} target='_blank' key={index} rel='noreferrer'>
      <Card.Grid className='gird-style'>
        <Tooltip placement='bottom' title={resource.presentation} color={itudb_theme}>
          <Avatar shape='square' src={oss + 'onlineTools/' + resource.icon} />
        </Tooltip>
        <div className='resource-name'>{resource.name}</div>
        <div className='resource-name font-12 text-faild'>{resource.presentation}</div>
      </Card.Grid>
    </a>
  )

  return (
    <Tabs defaultActiveKey='1'>
      <TabPane
        key='1'
        tab={<h3> <BankOutlined /> 社区 </h3>}
      >
        <div className='card-wrapper'>
          {
            <Card className='card' bordered={false}>
              {renderViewByTabCommunityData}
            </Card>
          }
        </div>
      </TabPane>
      <TabPane
        key='2'
        tab={<h3> <ToolOutlined /> 在线工具 </h3>}
      >
        <div className='card-wrapper'>
          {
            <Card className='card' bordered={false}>
              {renderViewByTabOnlineData}
            </Card>
          }
        </div>
      </TabPane>
      <TabPane
        key='3'
        tab={<h3> <ClusterOutlined /> 框架 </h3>}
      >
        <div className='card-wrapper'>
          {
            <Card className='card' bordered={false}>
              {/* {renderViewByTabOnlineData} */}
            </Card>
          }
        </div>
      </TabPane>
      <TabPane
        key='4'
        tab={<h3> <CameraOutlined /> UI框架 </h3>}
      >
        <div className='card-wrapper'>
          {
            <Card className='card' bordered={false}>
              {/* {renderViewByTabOnlineData} */}
            </Card>
          }
        </div>
      </TabPane>
      <TabPane
        key='5'
        tab={<h3> <ProfileOutlined /> 类库 </h3>}
      >
        <div className='card-wrapper'>
          {
            <Card className='card' bordered={false}>
              {/* {renderViewByTabOnlineData} */}
            </Card>
          }
        </div>
      </TabPane>
      <TabPane
        key='6'
        tab={<h3> <BulbOutlined /> 图标 </h3>}
      >
        <div className='card-wrapper'>
          {
            <Card className='card' bordered={false}>
              {/* {renderViewByTabOnlineData} */}
            </Card>
          }
        </div>
      </TabPane>
    </Tabs>
  )
}

export default MainLeft
