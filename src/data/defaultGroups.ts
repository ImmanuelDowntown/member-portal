export type AppGroup = {
  slug: string
  name: string
  description?: string
  parentId?: string // slug of parent group
}

// Initial group catalog. You can later move this into Firestore if preferred.
const defaultGroups: AppGroup[] = [
  { slug: "board", name: "Board", description: "Governing board of Immanuel Downtown." },

  { slug: "immanuel-worship", name: "Immanuel Worship", description: "Worship team planning, schedules, and resources." },

  { slug: "discipleship-alpha", name: "Discipleship Alpha", description: "Alpha discipleship cohort." },
  { slug: "discipleship-beta", name: "Discipleship Beta", description: "Beta discipleship cohort." },

  { slug: "wednesday-bible-study", name: "Wednesday Bible Study", description: "Weekly Bible study and discussion." },

  { slug: "strategy-and-planning", name: "Strategy and Planning", description: "Leaders coordinating strategy and planning." },
  { slug: "branding", name: "Branding", parentId: "strategy-and-planning", description: "Subgroup for identity and design." },
  { slug: "marketing", name: "Marketing", parentId: "strategy-and-planning", description: "Subgroup focused on outreach." },

  { slug: "explore", name: "Explore", description: "Exploring faith and community together." },
  { slug: "foundations", name: "Foundations", description: "Foundations course and resources." },
]

export default defaultGroups
