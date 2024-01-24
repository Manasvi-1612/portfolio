type PrimeTitleProps = {
  title: string,
  subtitle: string
}

const PrimeTitle = ({ title, subtitle }: PrimeTitleProps) => {
  return (
    <>
      <div className="my-20 ml-[10%] uppercase">
        <h1 className='h1-bold text-secondary-light dark:text-secondary-dark absolute'>{title}</h1>
        <h2 className="h2-bold z-20 text-nowrap text-title-light py-[5%] px-[25%]">{subtitle}</h2>
      </div>
    </>
  )
}

export default PrimeTitle
