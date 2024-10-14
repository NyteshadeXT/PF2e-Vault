<%_*
const phrase = await tp.system.prompt("Enter Search Key (Markdown sensitive)", "^Inventory");
const property = await tp.system.prompt("Enter property name to filter for", "category"); 
const propertyValue = await tp.system.prompt("Enter the property's value", "Location");
const StartString = await tp.system.prompt("Enter starting string (Markdown sensitive)", "Money supply");
const EndString = await tp.system.prompt("Enter end string (Markdown sensistive)", "##");
const NumCol = await tp.system.prompt("Enter number of columns", "4");
const title = await tp.system.prompt("Enter Title", "Shops");
_%>

```dataviewjs
// Function to check if content contains the phrase
function containsPhrase(content, phrase) {
  return content.includes(phrase);
}

// Function to extract the requested string-span
function extractContent(content) {
  const regex = new RegExp(`<% StartString %>((.|\n)*?)<% EndString %>`, 'gm');
  const match = content.match(regex);
  if (match) {
	return match[0].slice(0, -2).split('\n').map(line => `>> ${line}`).join('\n');
  } else {
  return `**ERROR! No such string was found!**`
  }
}

// Get the folder of the current note
const folder = dv.current().file.folder;

// Query all the notes in the same folder with the property value
const pages = dv.pages(`"${folder}"`)
  .where(p => p.category && (p.<% property %>.includes("<% propertyValue %>")));

// Futher restrict the search by include a markdown sensistive string (phrase) that appears in the note.
const phrase = "<% phrase %>";

// Initialize an array to hold the column content
let columns = []; // Adjust size based on number of columns

pages.forEach((page, index) => {
  const pageContent = app.vault.cachedRead(app.vault.getAbstractFileByPath(page.file.path));
  pageContent.then(content => {
    if (containsPhrase(content, phrase)) {
      const extractedContent = extractContent(content);
      const formattedContent = `[[${page.file.name}]]\n${extractedContent}`;
      columns.push(`>> [!note | clean no-i]- ## ${formattedContent.trim()}`);
      
      // Log the name of the note to the console
      console.log(`Processed note: ${page.file.name}`);
    }
    
    // Output the results when all pages are processed
    if (index === pages.length - 1) {
      // Combine columns into the ITS column callout box format
      const columnMarkdown = `> [!columns | <% NumCol %> clean no-i ttl-c] <font size=6 color="#F4A460"><% title %></font>\n${columns.join('\n> \n')}`;
      dv.paragraph(columnMarkdown);
    }
  });
});
