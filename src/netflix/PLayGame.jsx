import React from 'react'
import { useParams } from 'react-router-dom';

export const PLayGame = () => {
    const id = useParams().id;
  return (
    <div>PLaying game with id = {id}</div>
  )
}
