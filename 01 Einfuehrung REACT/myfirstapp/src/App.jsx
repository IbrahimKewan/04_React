function App(props) {
    const currDate = new Date();

    return (
        <div>
            <h1>Ibrahim Kewan</h1>
            <h2>
                It is {currDate.toLocaleDateString()} and The Time now is{" "}
                {currDate.toLocaleTimeString()}.
            </h2>
        </div>
    );
}
export default App;
