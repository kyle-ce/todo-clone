import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Stack, Skeleton } from "@mui/material"

interface CardProps {
  title: string | undefined
  body: string | undefined
  img: string | undefined
  onClick: () => void
  isFetching: boolean
}

const CatCard = ({ title, body, img, onClick, isFetching }: CardProps) => {
  if (isFetching)
    return (
      <Card sx={{ minWidth: 345 }} className="h-full">
        <Stack spacing={1} margin={2}>
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="rounded" height={80} />
          <Skeleton variant="rounded" height={40} />
          <div className="flex justify-start gap-4">
            <Skeleton variant="rounded" width={50} height={20} />
            <Skeleton variant="rounded" width={50} height={20} />
          </div>
        </Stack>
      </Card>
    )
  return (
    <Card sx={{ minWidth: 300, flexBasis: 1 }}>
      {isFetching ? (
        <p className="flex justify-center items-center">Loading...</p>
      ) : (
        <CardMedia sx={{ height: 140 }} image={img} title="Cat Image" />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button onClick={onClick} size="small">
          Next
        </Button>
      </CardActions>
    </Card>
  )
}

export default CatCard
