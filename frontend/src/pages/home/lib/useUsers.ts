import { useEffect, useState } from 'react';
import axios from 'axios';
import { env } from '@shared/lib/env.ts';

export interface User {
  username: string;
  email: string;
  password: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>();

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${env.API_URL}/user/all`, {
        withCredentials: true,
      })

      setUsers(response.data);
      console.log(response.data);
    } catch (e) {
      console.error('Error fetching users:', e);
    }
  }

  useEffect(() => {
    void fetchUsers();

    const interval = setInterval(() => {
      void fetchUsers();
    }, 5000)

    return () => clearInterval(interval);
  }, [fetchUsers]);

  return { users };
}
