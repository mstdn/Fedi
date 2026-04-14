import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export const LoadingScreen = (props) => 
{
  const { started, setStarted } = props
  const { progress, total, loaded, item } = useProgress()
  const [ showLoading, setShowLoading ] = useState(true)

  useEffect(() => 
  {
    if (progress === 100) 
    {
      setStarted(true)
      setShowLoading(false)
    }
  }, [progress])


  return (<>
        
      {showLoading && (
      <div
          className={`
              fixed top-0 left-0 w-full h-full z-50 transition-opacity 
              duration-1000
              flex items-center justify-center bg-[#000000] 
              ${started ? "opacity-0" : "opacity-100"}
          `}
      >
      { progress !== 100 && (

        <div className="text-3xl md:text-5xl font-bold text-[#ffffff] relative">
          <div
            className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          >
            {progress.toFixed(0)}%
          </div>
          <div className="opacity-40">
            {progress.toFixed(0)}%
          </div>
        </div> )}

      </div> )}
  </>);
};
