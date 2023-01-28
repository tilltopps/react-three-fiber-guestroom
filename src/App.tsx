import * as React from 'react'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import * as Walls from './Walls'
import * as BedKing from './BedKing'
import * as Couch from './Couch'
import * as Closet from './Closet'
import * as FridgeAndCooker from './FridgeAndCooker'
import * as KitchenFridgeSmall from './KitchenFridgeSmall'
import * as KitchenSink from './KitchenSink'
import * as Oven from './Oven'
import * as GardenLounger from './GardenLounger'

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
          {/* <Box scale={0.1} position={[0, 0.1, -1.2]} /> */}
          <GuestroomWalls />
          <group name="Entrance">
            <Couch.Model scale={0.0031} position={[0.73, 0, 0.38]} rotation={[0, Math.PI / 2, 0]} />
          </group>
          <group name="Bedroom">
            <BedKing.Model scale={0.056} position={[0.29, 0, -0.12]} rotation={[0, -Math.PI / 2, 0]} />
            <Closet.Model scale={0.06} position={[0.036, 0, -0.062]} rotation={[0, Math.PI / 2, 0]} />
            <Closet.Model scale={0.06} position={[0.036, 0, -0.162]} rotation={[0, Math.PI / 2, 0]} />
          </group>
          <group name="Kitchen">
            {/* <Oven.Model scale={0.006} position={[0.381, 0, -0.63]} rotation={[0, -Math.PI / 2, 0]} /> */}
            {/* <KitchenFridgeSmall.Model scale={0.1} position={[0.371, 0, -0.77]} rotation={[0, Math.PI / 2, 0]} /> */}
            <FridgeAndCooker.Model scale={0.029} position={[0.371, 0.127, -0.67]} rotation={[0, Math.PI / 2, 0]} />
            {/* <KitchenSink.Model scale={0.12} position={[0.357, 0, -0.72]} rotation={[0, Math.PI / 2, 0]} /> */}
          </group>
          <group name="Garden">
            <GardenLounger.Model scale={0.0024} position={[0.311, 0, -1.06]} rotation={[0, (14.3 * Math.PI) / 10, 0]} />
            <GardenLounger.Model scale={0.0024} position={[0.391, 0, -1.07]} rotation={[0, (14.9 * Math.PI) / 10, 0]} />
          </group>
          <Astronaut scale={0.1} position={[0.14, 0, -0.65]} rotation={[0, 2.5, 0]} />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  )
}
