import React from "react"

const Page = ({serverData}) => {
    return <main>
        <h1>Hello from the server!</h1>
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
        {serverData.cat.img}
    </main>
}

export default Page

export async function getServerData() {
    let cat = await (await fetch('https://cataas.com/cat?json=true')).json()
    cat.img = <img src={`https://cataas.com${cat.url}`} />
    return { props: {
        cat
    }}
}