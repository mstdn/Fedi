import { Environment, Stars } from '@react-three/drei'

export default function Lights()
{
    return <>
        <Environment
            // preset='sunset'
            files={ "./assets/images/sunset.hdr" }
        />
        <directionalLight
            castShadow
            position={ [ 20, 10, 10 ] }
            intensity={ 1.0 }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 50 }
            shadow-camera-top={ 50 }
            shadow-camera-right={ 50 }
            shadow-camera-bottom={ - 50 }
            shadow-camera-left={ - 50 }
            shadow-bias={ - 0.01 }
            shadow-mapSize-width={ 2048 }
            shadow-mapSize-height={ 2048 }
        />
        <ambientLight 
            intensity={ 0.5 } 
        />
        <Stars
            radius={ 50 }
            depth={ 10 }
            count={ 2000 }
            speed={ 0.5 }
            fade
        />
    </>
}