'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setMsg } from '@/store/sliceMsg';
import { useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';
import * as socketService from './socketService';

export default function Home() {
  const msg = useSelector(state => state.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      socketService.emit('echo', {msg: 'echo this'});
    }, 5000)
  })
  return (
    <main >
      <Text fontSize="2rem" textAlign={'center'}>{msg}</Text>
      <Button variant={'outline'} display='block' margin='auto'>Click</Button>
    </main>
  )
}
