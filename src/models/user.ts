import { getAdminUserList } from '@/services';
import { useState } from 'react';

// src/models/userModel.ts
export default function Page() {
  const [list, setList] = useState([]);

  const getList = async () => {
    const res = await getAdminUserList({ query: { PageNum: 1, PageSize: 20 } });
    setList(res.data.UserList);
  };

  return { list, getList };
}
