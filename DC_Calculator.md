# `=this.file.name`

# Skill DC
```dataviewjs
// Create text labels and line breaks
const skillLabel = dv.el('span', 'Select Skill Level:  ');
skillLabel.style.fontWeight = 'bold';  
const difficultyLabel = dv.el('span', 'Select Difficulty:  ');
difficultyLabel.style.fontWeight = 'bold';  
const break1 = dv.el('br');
const break2 = dv.el('br');

// skill dropdown
const skillDropdown = dv.el('select');
skillDropdown.style.marginLeft = '2ch';

// difficulty dropdown
const difficultyDropdown = dv.el('select');
difficultyDropdown.style.marginLeft = '2ch';

// output field
const outputField = dv.el('div');
outputField.innerHTML = "Final DC: ";

// options for skill dropdown
const skillOptions = [
  {text: 'Untrained', value: 10},
  {text: 'Trained', value: 15},
  {text: 'Expert', value: 20},
  {text: 'Master', value: 30},
  {text: 'Legendary', value: 40}
];

// options for difficulty dropdown
const difficultyOptions = [
  {text: 'Normal', value: 0},
  {text: 'Incredibly Easy', value: -10},
  {text: 'Very Easy', value: -5},
  {text: 'Easy', value: -2},
  {text: 'Hard', value: 2},
  {text: 'Very Hard', value: 5},
  {text: 'Incredibly Hard', value: 10}
];

const populateDropdown = (dropdown, options) => {
  options.forEach(({text, value}) => {
    const option = document.createElement('option');
    option.value = value;
    option.innerHTML = text;
    dropdown.appendChild(option);
  });
};

populateDropdown(skillDropdown, skillOptions);
populateDropdown(difficultyDropdown, difficultyOptions);

// function to calculate and set DC
const calculateDC = () => {
  const skillValue = parseInt(skillDropdown.value, 10);
  const difficultyValue = parseInt(difficultyDropdown.value, 10);
  outputField.innerHTML = "Final DC: " + (skillValue + difficultyValue);
};

// initial value of 10
outputField.innerHTML = "Final DC: 10";
outputField.style.fontWeight = 'bold'; // Make text bold

// event listeners
skillDropdown.addEventListener('change', calculateDC);
difficultyDropdown.addEventListener('change', calculateDC);

// dataViewJS container
dv.container.appendChild(skillLabel);
dv.container.appendChild(skillDropdown);
dv.container.appendChild(break1);
dv.container.appendChild(difficultyLabel);
dv.container.appendChild(difficultyDropdown);
dv.container.appendChild(break2);
dv.container.appendChild(outputField);
```

# Level DC
```dataviewjs
// input field and button
dv.el("bold", "Input Difficulty Level: ")
const inputField = dv.el('input', "input field")
const btn = dv.el('button', "Calculate DC")

// template out the 4 results to remove
dv.paragraph("Incredibly Easy DC:")
dv.paragraph("Very Easy DC:")
dv.paragraph("Easy DC:")
dv.paragraph("Normal DC:")
dv.paragraph("Hard DC:")
dv.paragraph("Very Hard DC:")
dv.paragraph("Incredibly Hard DC:")

// on-click event
btn.addEventListener('click', (event) => {
    event.preventDefault()

    // remove the last 6 results (or defaults)
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()

    let input_dc = parseInt(inputField.value);
    let dcMod = Math.floor((input_dc / 5)*2);
    let dcOutput = Math.floor(input_dc + 15 + dcMod)
    let varIncEasy = Math.floor(input_dc + 15 + dcMod-10)
    let varVryEasy = Math.floor(input_dc + 15 + dcMod-5)
    let varEasy = Math.floor(input_dc + 15 + dcMod-2)
    let varHard = Math.floor(input_dc + 15 + dcMod+2)
    let varVryHard = Math.floor(input_dc + 15 + dcMod+5)
    let varIncHard = Math.floor(input_dc + 15 + dcMod+10)

    dv.paragraph("Incredibly Easy DC: " + varIncEasy)
    dv.paragraph("Very Easy DC: " + varVryEasy)
    dv.paragraph("Easy DC: " + varEasy)
    dv.paragraph("Normal DC: " + dcOutput)
    dv.paragraph("Hard DC: " + varHard)
    dv.paragraph("Very Hard DC: " + varVryHard)
    dv.paragraph("Incredibly Hard DC: " + varIncHard)
});
```

# DC Tables

## Simple DCs
| Proficiency Rank | DC  |
| ---------------- | --- |
| Untrained        | 10  |
| Trained          | 15  |
| Expert           | 20  |
| Master           | 30  |
| Legendary        | 40  |

## Difficulty Table
| Difficulty      | Adjustment | Rarity                 |
| --------------- | ---------- | ---------------------- |
| Incredibly Easy | -10        | -                      |
| Very Easy       | - 5        | -                      |
| Easy            | -2         | -                      |
| Normal          | 0          | -                      |
| Hard            | +2         | [[uncommon\|Uncommon]] |
| Very Hard       | +5         | [[rare\|Rare]]         |
| Incredibly Hard | +10        | [[unique\|Unique]]     |
| 

