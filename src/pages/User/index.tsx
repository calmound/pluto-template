import { useModel } from '@umijs/max';
import { Table } from 'antd';
import { useEffect } from 'react';

export default function Page() {
  const { list, getList } = useModel('user');
  useEffect(() => {
    getList();
  }, []);

  const columns = [
    {
      title: '名称',
      dataIndex: 'Nickname',
      tip: '名称是唯一的 key',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '名称为必填项',
          },
        ],
      },
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      valueType: 'text',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      hideInForm: true,
      valueEnum: {
        0: { text: '男', status: 'MALE' },
        1: { text: '女', status: 'FEMALE' },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <>
          <a className="mt-16">配置</a>
          <a href="">订阅警报</a>
        </>
      ),
    },
  ];
  return (
    <div style={{ height: '100vh' }}>
      <div className="text-body-4">我是</div>
      <Table
        rowKey="id"
        columns={columns}
        // request={() => {
        //   return { data: list };
        // }}
        dataSource={list}
      />
    </div>
  );
}
