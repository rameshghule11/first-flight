import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const num = 13;
root.render(
    <>
    <h1>
        {num} is {num % 2 == 0 ? "even" : "odd"}
    </h1>
    </>
)
