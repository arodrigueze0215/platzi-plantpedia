import { GetStaticProps, InferGetStaticPropsType } from "Next";
import { useEffect, useState } from "react";

import { Layout } from '@components/Layout'
import { getPlantList } from "@api";

import { PlantCollection } from "@components/PlantCollection";

export const getStaticProps: GetStaticProps = async () => {
  const plants = await getPlantList({limit: 10})
  console.log(plants)
  return {
    props: {
      plants
    }
  }
}

export default function Home({ plants }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <PlantCollection plants={plants} variant="square"/>
    </Layout>
  )
}