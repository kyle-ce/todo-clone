import { useEffect } from "react"
import {
  catFactApi,
  useGetCatFactQuery,
  useGetCatFactsQuery,
} from "../../services/CatFacts"
import {
  useGetCatImgQuery,
  useLazyGetCatImgQuery,
} from "../../services/CatImgs"
import CatCard from "./CatCard"

const CatFacts = () => {
  const facts = useGetCatFactsQuery().data?.data
  const fact = useGetCatFactQuery()?.data?.fact
  const data = useGetCatImgQuery().data
  const [triggerCatFact] = catFactApi.useLazyGetCatFactQuery()
  const [triggerCatImg] = useLazyGetCatImgQuery()
  const handleClick = () => {
    triggerCatFact()
    triggerCatImg()
  }
  console.log(facts)
  if (data && fact) {
    return (
      <CatCard title={""} body={fact} img={data[0].url} onClick={handleClick} />
    )
  }
}

export default CatFacts
