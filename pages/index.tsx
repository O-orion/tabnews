import React from 'react'
import { StyleSheet } from 'react-dom'


export default function Home() {
    return (
        <h1 class={styles.text} >
            Esse carlão é muito viado!
        </h1>
    )
}

const styles =  StyleSheet.create({
    text: {
        color: 'red'
    }
})