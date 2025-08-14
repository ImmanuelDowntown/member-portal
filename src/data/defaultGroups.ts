type Group = { name: string; slug: string; description?: string; parentId?: string | null; meta?: Record<string, any>; };
const groups: Group[] = [
  { name: "Strategy and Planning Group", slug: "strategy", description: "Leadership strategy & planning hub" },
  { name: "Branding", slug: "branding", parentId: "strategy", description: "Subgroup: visual identity & messaging" },
  { name: "Marketing", slug: "marketing", parentId: "strategy", description: "Subgroup: outreach & campaigns" },
  { name: "Wednesday Bible Study", slug: "wednesday-bible-study", description: "Midweek Scripture study group" },
  { name: "Disciple Alpha", slug: "disciple-alpha", description: "Discipleship cohort (Alpha)" },
  { name: "Disciple Beta", slug: "disciple-beta", description: "Discipleship cohort (Beta)" },
  { name: "Board", slug: "board", description: "Board members" },
  { name: "Immanuel Worship", slug: "immanuel-worship", description: "Worship & music team" },
  { name: "Explore", slug: "explore", description: "4-week introduction course" },
  { name: "Foundations", slug: "foundations", description: "8-week Christian fundamentals" },
];
export default groups;
