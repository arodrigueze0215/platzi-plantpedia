import { GetStaticProps, InferGetStaticPropsType } from "Next";

import { Layout } from '@components/Layout'
import { getPlantList, getAuthorList } from "@api";

import { PlantCollection } from "@components/PlantCollection";
import { Authors } from "@components/Authors";

export const getStaticProps: GetStaticProps = async () => {
  const plants = await getPlantList({limit: 20})
  const authors = await getAuthorList({limit: 20})
  return {
    props: {
      plants,
      authors
    }
  }
}

export default function Home({ plants, authors }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Authors authors={authors} className="mb-10"/>
      <PlantCollection plants={plants} variant="square"/>
    </Layout>
  )
}