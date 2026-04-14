import { Float, Html, Image, Text } from "@react-three/drei"
import { Background } from "./models/Background"
import { useState } from "react"

export default function World()
{
    const [ Mastodon, setMastodon ] = useState(false)
    const [ PeerTube, setPeerTube ] = useState(false)
    const [ Lemmy, setLemmy ] = useState(false)
    const [ Pixelfed, setPixelfed ] = useState(false)

    return(
    <>
        <group>
            <Float
                position={ [ 0, 0, 0 ] }
            >
                <group>
                    {/* Mastodon */}
                    <Image
                        position={ [ - 0.8, 0.8, 0 ] }
                        url="./assets/images/mastodon.png" 
                        onPointerOver={ () => setMastodon(true) }
                        onPointerOut={ () => setMastodon(false) } 
                        scale={ Mastodon ? 1 : 0.8 }
                        onClick={ () => window.open("https://joinmastodon.org/") }
                        transparent
                    >
                        { Mastodon && (
                            <Html position={ [ 0.60, 0, 0 ] }>
                                <div className="text-white">
                                    Mastodon
                                </div>
                            </Html>
                        ) }
                    </Image>
                    {/* PeerTube */}
                    <Image
                        position={ [ 0.8, 0.8, 0 ] }
                        url="./assets/images/peertube.png" 
                        onPointerOver={ () => setPeerTube(true) }
                        onPointerOut={ () => setPeerTube(false) } 
                        scale={ PeerTube ? 1 : 0.8 }
                        onClick={ () => window.open("https://joinpeertube.org/") }
                        transparent
                    >
                        { PeerTube && (
                            <Html position={ [ - 0.8, 0, 0 ] }>
                                <div className="text-white">
                                    PeerTube
                                </div>
                            </Html>
                        ) }
                    </Image>

                    {/* Lemmy */}
                    <Image
                        position={ [ 0.8, - 0.8, 0 ] }
                        url="./assets/images/lemmy.png" 
                        onPointerOver={ () => setLemmy(true) }
                        onPointerOut={ () => setLemmy(false) } 
                        scale={ Lemmy ? 1.1 : 1 }
                        onClick={ () => window.open("https://join-lemmy.org/") }
                        transparent
                    >
                        { Lemmy && (
                            <Html position={ [ - 0.65, 0, 0 ] }>
                                <div className="text-white">
                                    Lemmy
                                </div>
                            </Html>
                        ) }
                    </Image>


                    {/* Pixelfed */}
                    <Image
                        position={ [ - 0.8, - 0.8, 0 ] }
                        url="./assets/images/pixelfed.png" 
                        onPointerOver={ () => setPixelfed(true) }
                        onPointerOut={ () => setPixelfed(false) } 
                        scale={ Pixelfed ? 1 : 0.9 }
                        onClick={ () => window.open("https://pixelfed.org/") }
                        transparent
                    >
                        { Pixelfed && (
                            <Html position={ [ 0.60, 0, 0 ] }>
                                <div className="text-white">
                                    Pixelfed
                                </div>
                            </Html>
                        ) }
                    </Image>

                </group>
                <group
                    position={ [ 0, 0.1, 0.5 ] }
                >
                    <Text
                        font="./assets/fonts/machine.otf"
                        fontSize={ 0.15 }
                    >
                        Join the
                    </Text>
                    <Text
                        position={ [ 0, - 0.15, 0 ] }
                        font="./assets/fonts/machine.otf"
                        fontSize={ 0.20 }
                    >
                        Fediverse
                    </Text>
                </group>
            </Float>
            <Background 
                scale={ 20 }
                position={ [ 0, - 1, - 10 ] }
            />

        </group>
    </>
    )
}