let width = 70;
let height = 30;
let background = "orange";
let value = "Test";
let borderRadius = 100;

let button = new Button(width, height, background, value);
document.body.append(button.render());

let modernButton = new ModernButton(width, height, background, value, borderRadius)
document.body.append(modernButton.render());