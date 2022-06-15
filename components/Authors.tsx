import Link from 'next/link'
import { Grid } from '@ui/Grid'
import { Typography } from '@ui/Typography'

type AuthorProps = {
  className?: string
  authors: Author[]

}

export function Authors({ className, authors }: AuthorProps) {

    return (
    <Grid container spacing={4} className={className} justify="center">
      {authors.map(({ id, photo, fullName, handle }) => (
        <Grid item key={id}>
          <Link href={`/top-stories/${handle}`}>
            <a title={`See latest stories from ${fullName}`}>
              <img src={photo.url} width={150} />
              <Typography variant="h5" component="p">
                {fullName}
              </Typography>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}