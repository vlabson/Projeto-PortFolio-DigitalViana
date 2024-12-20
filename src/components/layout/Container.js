function Container(props) {
    return (
        <main className=" w-full flex justify-between flex-wrap">
            <h1 className="hidden">digitalviana</h1>
            {props.children}
        </main>
    )
}

export default Container
