import fs from "fs";

function deletetodo(name, task) {
    try {
        if (!fs.existsSync("todo.json")) {
            console.log("todo.json file not found");
            return;
        }

        let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                data[i].todo = data[i].todo.filter(
                    (item) => item.task !== task
                );
            }
        }

        fs.writeFileSync("todo.json", JSON.stringify(data, null, 2));
        console.log("Todo deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

export default deletetodo;
