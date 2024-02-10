type PrimeTitleProps = {
  title: string,
  subtitle: string,
  span?: string
}

const PrimeTitle = ({ title, subtitle, span }: PrimeTitleProps) => {
  return (
    //  
    <>
      <section className="my-20">
        <div className="uppercase fixed right-0 left-0 text-center -z-10">
          <h1 className='prime-title'>{title}</h1>
          <h2 className="h2-bold z-30 text-title-light dark:text-white m-0">{subtitle} <span className="text-primary-light dark:text-primary-dark">{span}</span></h2>
        </div>
      </section>
    </>
  )
}

export default PrimeTitle
