type PrimeTitleProps = {
  title: string,
  subtitle: string,
  span?: string
}

const PrimeTitle = ({ title, subtitle, span }: PrimeTitleProps) => {
  return (
    //  uppercase relative -z-10  my-0 mx-auto
    <section className="md:my-20 my-10 uppercase relative w-full -z-10 right-0 left-0 text-center ">
      <h1 className='prime-title'>{title}</h1>
      <h2 className="h2-bold z-30 text-title-light dark:text-white m-0">{subtitle} <span className="text-primary-light dark:text-primary-dark">{span}</span></h2>
    </section>
  )
}

export default PrimeTitle
