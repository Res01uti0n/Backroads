import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMap } from "react-icons/fa"

import styles from "../../css/tour.module.css"

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  let mainImage = images[0].fluid

  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="Single tour" />

        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          Details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>

        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>

          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
