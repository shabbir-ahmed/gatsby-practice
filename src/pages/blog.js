import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is out blog page</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem a pariatur laboriosam quidem eveniet cum, magnam vitae. Soluta nulla sapiente ipsam reprehenderit, placeat quos voluptates provident eum sequi quidem? Officiis?</p>
            </div>
        </Layout>
    )
}

export default blog
