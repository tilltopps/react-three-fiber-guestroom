import * as React from 'react'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import * as Walls from './Walls'

function Astronaut(props: JSX.IntrinsicElements['mesh']) {
  const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
  return <primitive {...props} object={gltf.scene} />
}

function GuestroomWalls(props: JSX.IntrinsicElements['group']) {
  return <Walls.Model scale={0.0001} rotation={[-Math.PI / 2, 0, 0]} />
}

function Box(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.005))
  const scale = props.scale as number
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 * scale : scale}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  const ref = useRef<any>(null!)
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1} environment="city" adjustCamera={0.8}>
          <ambientLight color={0x404040} intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box scale={0.1} position={[0, 0.1, -1.2]} />
          <GuestroomWalls />
          <Astronaut scale={0.1} position={[0.13, 0, -0.7]} rotation={[0, 2, 0]} />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  )
}
