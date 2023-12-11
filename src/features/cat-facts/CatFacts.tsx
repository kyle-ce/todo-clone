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
import { Grid, Pagination, Stack } from "@mui/material"

const CatFacts = () => {
  const { isFetching, data } = useGetCatFactsQuery(3)
  //   const fact = useGetCatFactQuery()?.data?.fact
  const { data: imgData, isFetching: isImgFetcing } = useGetCatImgQuery()
  const [triggerCatFact] = catFactApi.useLazyGetCatFactQuery()
  const [triggerCatImg] = useLazyGetCatImgQuery()
  const handleClick = () => {
    triggerCatFact()
    triggerCatImg()
  }
  if (imgData && data?.data[0].fact) {
    return (
      <div className="flex items-center flex-col gap-5">
        <Grid
          lg={3}
          wrap="nowrap"
          container
          flexDirection={"row"}
          justifyContent="center"
          spacing={2}
        >
          {data?.data.map(({ fact }, i) => (
            <Grid key={i} item>
              <CatCard
                title={""}
                body={fact}
                img={imgData[0].url}
                onClick={handleClick}
                isFetching={isImgFetcing}
              />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2}>
          <Pagination count={5} shape="rounded" />
        </Stack>
      </div>
    )
  }
}

export default CatFacts
