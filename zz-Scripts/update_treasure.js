module.exports = async (tp) => {
    // Ensure Dataview API is available
    const dv = app.plugins.plugins.dataview.api;

    let totalXP = 0;
    let completedXP = 0;
    let awardedPP = 0;
    let awardedGP = 0;
    let awardedSP = 0;
    let awardedCP = 0;
    let awardedPermanentItems = [];
    let awardedConsumableItems = [];

    // Use Dataview API to get pages and tasks from the specified folders
    const pages = dv.pages('"8) Adventures"').concat(dv.pages('"9) Completed Adventures"'));
    for (let page of pages) {
        for (let task of page.file.tasks) {
            if (task.completed) {
                let match = task.text.match(/pp::(\d+)/);
                if (match) awardedPP += parseInt(match[1]);

                match = task.text.match(/gp::(\d+)/);
                if (match && !task.text.includes('permanent::') && !task.text.includes('consumable::')) {
                    awardedGP += parseInt(match[1]);
                }

                match = task.text.match(/sp::(\d+)/);
                if (match && !task.text.includes('permanent::') && !task.text.includes('consumable::')) {
                    awardedSP += parseInt(match[1]);
                }

                match = task.text.match(/cp::(\d+)/);
                if (match) awardedCP += parseInt(match[1]);

                match = task.text.match(/permanent::\[\[(.*?)\|(.*?)\]\] \[ilvl::(\d+)\] \[gp::(\d+)\]/);
                if (match) awardedPermanentItems.push({ name: match[2], ilvl: parseInt(match[3]), gp: parseInt(match[4]) });

                match = task.text.match(/consumable::\[\[(.*?)\|(.*?)\]\] \[ilvl::(\d+)\] \[gp::(\d+)\]/);
                if (match) awardedConsumableItems.push({ name: match[2], ilvl: parseInt(match[3]), gp: parseInt(match[4]) });
            }
        }
    }

    tp.frontmatter.awarded_pp = awardedPP;
    tp.frontmatter.awarded_gp = awardedGP;
    tp.frontmatter.awarded_sp = awardedSP;
    tp.frontmatter.awarded_cp = awardedCP;
    tp.frontmatter.awarded_permanent_items = awardedPermanentItems;
    tp.frontmatter.awarded_consumable_items = awardedConsumableItems;
};
