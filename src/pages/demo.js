import React from "react"

const Page = (serverData) => {
    return <main>
        <h1>Hello from the server!</h1>
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
    </main>
}

export default Page

export async function getServerData() {
    return { props: {}}
}