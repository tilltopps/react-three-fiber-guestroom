/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../public/Oven.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Oven.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Oven_01_Cube041-Mesh'].geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes['Oven_01_Cube041-Mesh_1'].geometry} material={materials['1A1A1A']} />
    </group>
  )
}

useGLTF.preload('/Oven.glb')
