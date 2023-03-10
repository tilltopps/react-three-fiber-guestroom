/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../public/Closet.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Closet.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.67, 1.54, 0.37]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Closet_LeftDoor_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Closet_LeftDoor_2.geometry} material={materials.Metal} />
      </group>
      <group position={[0.67, 1.54, 0.37]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Closet_RightDoor_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Closet_RightDoor_2.geometry} material={materials.Metal} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Closet_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Closet_2.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Closet.glb')
