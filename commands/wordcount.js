const fs = require('fs');

module.exports = {
  name: 'wordcount',
  description: 'Number Counter',
  execute(interaction) {
    const path = "./assets/data/counter.txt"

    //add to counter
    const file = fs.readFileSync(path, 'utf-8')
    let num = parseInt(file)
    num += 1

    fs.writeFileSync(path, num.toString(), { encoding:'utf8', flag:'w' })

    const output = "Counter: " + num + ", Sorry Cameron..."

    return void interaction.reply(output);
  },
};
