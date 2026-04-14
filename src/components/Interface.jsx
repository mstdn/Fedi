export const Interface = (props) => 
{
    return(
    <>
            <header className='absolute top-0 left-0'>
                <ul className='flex'>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://github.com/mstdn/Fedi" target="_blank">
                            Source
                        </a>
                    </li>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://mstdn.social/@stux" target="_blank">
                            Author
                        </a>
                    </li>
                </ul>
            </header>
            <div className="absolute bottom-0 right-0 p-4">
                <ul className='flex items-end mt-0'>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://fedidb.com/" target="_blank">
                            FediDB
                        </a>
                    </li>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://instances.social/" target="_blank">
                            Instances
                        </a>
                    </li>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://fediverse.observer/" target="_blank">
                            Observer
                        </a>
                    </li>
                </ul>
            </div>
    </>)
}