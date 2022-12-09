
function ColorCircle ({ label, colorClassName }) {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <h3>{label}</h3>
      <div className={`circle-10 ${colorClassName} outline-none outline-1 outline-neutral/50`}></div>
    </div>
  )
}


function App () {
  return (
    <div data-theme="test" className="App text-single-color">
      <h1 className='text-neutral'>Tailwind Semantic Setup</h1>

      <div className='grid grid-cols-4 place-items-center gap-x-4 gap-y-10 rounded-2xl p-6'>
        <ColorCircle label='Primary' colorClassName='bg-primary' />
        <ColorCircle label='Primary Dark' colorClassName='bg-primary-dark' />
        <ColorCircle label='Primary Content' colorClassName='bg-primary-content' />
        <div/>

        <ColorCircle label='Secondary' colorClassName='bg-secondary' />
        <ColorCircle label='Secondary Dark' colorClassName='bg-secondary-dark' />
        <ColorCircle label='Secondary Content' colorClassName='bg-secondary-content' />
        <div/>

        <ColorCircle label='Accent' colorClassName='bg-accent' />
        <ColorCircle label='Accent Dark' colorClassName='bg-accent-dark' />
        <ColorCircle label='Accent Content' colorClassName='bg-accent-content' />
        <div/>

        <ColorCircle label='Neutral' colorClassName='bg-neutral' />
        <ColorCircle label='Neutral Dark' colorClassName='bg-neutral-dark' />
        <ColorCircle label='Neutral Content' colorClassName='bg-neutral-content' />
        <div/>

        <ColorCircle label='Base' colorClassName='bg-base outline-base-dark' />
        <ColorCircle label='Base Dark' colorClassName='bg-base-dark' />
        <ColorCircle label='Base Darkest' colorClassName='bg-base-darkest' />
        <ColorCircle label='Base Content' colorClassName='bg-base-content' />

        <ColorCircle label='Info' colorClassName='bg-info' />
        <ColorCircle label='Info Content' colorClassName='bg-info-content' />
        <div/>
        <div/>

        <ColorCircle label='Success' colorClassName='bg-success' />
        <ColorCircle label='Success Content' colorClassName='bg-success-content' />
        <div/>
        <div/>

        <ColorCircle label='Warning' colorClassName='bg-warning' />
        <ColorCircle label='Warning Content' colorClassName='bg-warning-content' />
        <div/>
        <div/>


        <ColorCircle label='Error' colorClassName='bg-error' />
        <ColorCircle label='Error Content' colorClassName='bg-error-content' />

      </div>
    </div>
  )
}

export default App
