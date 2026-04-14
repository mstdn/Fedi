import { Canvas } from '@react-three/fiber'
import { LoadingScreen } from './components/LoadingScreen'
import { Interface } from './components/Interface'
import { Suspense, useState } from 'react'
import Experience from './components/Experience'

export default function App()
{
    const [ started, setStarted ] = useState(false)

    return(<>
        <LoadingScreen 
            started={ started } 
            setStarted={ setStarted }
        />
        <Canvas
            shadows
            style={{ background: '#000000' }}
            camera={ 
                {
                    fov: 45,
                    position: [ 0, 0.5, 4.5 ],
                    near: 0.1,
                    far: 600,
                }
            }
        >
            <Suspense>
                { started && (
                    <Experience />
                )}
            </Suspense>
        </Canvas>
        { started && (
            <Interface />
        )}
    </>)
}