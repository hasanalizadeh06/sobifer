"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import { parseCookies } from 'nookies'
import { redirect } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
import defaultimg from '@/../public/images/user_default.png';
type User = {
  id: number;
  username: string;
  email: string;
  photo: string;
};
function Page() {
  const cookies = parseCookies();
  const [users, setUsers] = useState<User[]>([]);
  const t = useTranslations('Admin');
  useEffect(() => {
    if (!cookies.accessToken) {
      redirect('/admin/login');
      return;
    }
    axios.get(process.env.NEXT_PUBLIC_API_URL+'/users/all')
      .then(res => {
        setUsers(res.data);
      })
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">{t('dashboard')}</h1>
      <div className="flex gap-4">
        {users.length === 0 ? (
          <div>{t('noUsers')}</div>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 bg-white rounded shadow"
            >
              <Image
              src={user.photo || defaultimg}
              width={48}
              height={48}
              alt={user.username}
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = defaultimg.src;
              } }
              />
              <div>
              <div className="font-semibold">{user.username}</div>
              <div className="text-gray-600 text-sm">{user.email}</div>
              <div className="text-gray-400 text-xs">{t('userId')}: {user.id}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;