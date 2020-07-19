import React, { Component } from 'react'
import Layout from '../components/layout'
import styles from '../components/products.module.css'
// console.log(styles)

export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.page}>
                    <h1>This is our products</h1>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto officiis autem, atque porro impedit officia suscipit deserunt, blanditiis error ex quis accusantium dolor possimus! Accusamus facilis officia sunt rerum?
                    </p>
                </div>
            </Layout>
        )
    }
}
