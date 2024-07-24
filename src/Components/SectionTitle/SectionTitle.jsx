

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="w-1/3 mx-auto mt-20 mb-12">
        <h3 className="text-[#D99904] text-xl italic text-center mb-4">---{subHeading}---</h3>
        <p className="text-4xl uppercase text-center border-y-4 py-5">{heading}</p>
    </div>
  )
}

export default SectionTitle