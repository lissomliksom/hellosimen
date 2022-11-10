import BioImage from "./BioImage"
import BioHeadline from "./BioHeadline"
import BioTabs from "./BioTabs"

const Bio = () => {
  return (
    <section className="px-5">
      <div className="xl:grid xl:grid-cols-4">
        <BioImage />
        <div className="py-10 space-y-2 xl:col-span-3">
          <BioHeadline  />
          <BioTabs />
        </div>
      </div>

    </section>
  )
}

export default Bio
