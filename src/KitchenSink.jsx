/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../public/KitchenSink.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/KitchenSink.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.kitchenSink_2.geometry} material={materials.wood} />
      <mesh geometry={nodes.kitchenSink_2_1.geometry} material={materials.metal} />
      <mesh geometry={nodes.kitchenSink_2_2.geometry} material={materials.metalDark} />
      <mesh geometry={nodes.kitchenSink_2_3.geometry} material={materials.metalLight} />
      <mesh geometry={nodes.kitchenSink_2_4.geometry} material={materials._defaultMat} />
      <mesh geometry={nodes.kitchenSink_3.geometry} material={materials._defaultMat} />
      <mesh geometry={nodes.kitchenSink_3_1.geometry} material={materials.wood} />
      <mesh geometry={nodes.kitchenSink_3_2.geometry} material={materials.metal} />
      <mesh geometry={nodes.kitchenSink_3_3.geometry} material={materials.metalDark} />
      <mesh geometry={nodes.kitchenSink_3_4.geometry} material={materials.metalLight} />
      <mesh geometry={nodes.door_1.geometry} material={materials.wood} />
      <mesh geometry={nodes.door_1_1.geometry} material={materials.woodDark} />
      <mesh geometry={nodes.door_1_2.geometry} material={materials.metal} />
    </group>
  )
}

useGLTF.preload('/KitchenSink.glb')
