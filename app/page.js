'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setMsg } from '@/store/sliceMsg';
import { useEffect, useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import Login from '@/components/Login';
import * as socketService from './socketService';

export default function Home() {
  const msg = useSelector(state => state.msg);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTimeout(() => {
      socketService.emit('echo', {msg: 'echo this'});
    }, 5000)
  })

  if (!isLoggedIn) {
    return <Login 
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      setIsLoggedIn={setIsLoggedIn}
    />
  }

  return (
    <main >
      <Text fontSize="2rem" textAlign={'center'}>{msg}</Text>
      <Button variant={'outline'} display='block' margin='auto'>Click</Button>
    </main>
  )
}
