export interface TeamMember {
  id: number
  name: string
  role: string
  sector: string
  year: string
  major: string
  bio: string
  image?: string
  linkedin?: string
  email: string
}

export interface Sector {
  name: string
  description: string
  color: string
  members: TeamMember[]
}

export const teamData: Sector[] = [
  {
    name: "Leadership",
    description: "Executive team managing fund operations and strategic direction",
    color: "from-navy to-deep",
    members: [
      {
        id: 1,
        name: "Sarah Chen",
        role: "Fund Manager",
        sector: "Leadership",
        year: "Senior",
        major: "Finance",
        bio: "Leads equity research team and developed our ESG investment strategy with 3.9 GPA. Passionate about sustainable investing.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "sarah.chen@csi.cuny.edu",
      },
      {
        id: 2,
        name: "Emily Johnson",
        role: "Research Director",
        sector: "Leadership",
        year: "Senior",
        major: "Business Administration",
        bio: "Oversees fundamental analysis and leads weekly investment committee meetings. Expert in market research.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "emily.johnson@csi.cuny.edu",
      },
      {
        id: 3,
        name: "Marcus Williams",
        role: "Portfolio Manager",
        sector: "Leadership",
        year: "Senior",
        major: "Economics",
        bio: "Manages portfolio allocation and risk assessment strategies. Specializes in quantitative analysis.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "marcus.williams@csi.cuny.edu",
      },
      {
        id: 4,
        name: "Lisa Rodriguez",
        role: "Operations Director",
        sector: "Leadership",
        year: "Senior",
        major: "Finance",
        bio: "Coordinates fund operations and member development programs. Expert in financial planning.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "lisa.rodriguez@csi.cuny.edu",
      },
    ],
  },
  {
    name: "Technology",
    description: "Analyzing tech companies and managing trading systems",
    color: "from-purple-600 to-blue-600",
    members: [
      {
        id: 5,
        name: "David Kim",
        role: "Technology Analyst",
        sector: "Technology",
        year: "Junior",
        major: "Computer Science",
        bio: "Develops trading algorithms and maintains portfolio management systems. Expert in fintech solutions.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "david.kim@csi.cuny.edu",
      },
      {
        id: 6,
        name: "Alex Chen",
        role: "Fintech Specialist",
        sector: "Technology",
        year: "Sophomore",
        major: "Information Systems",
        bio: "Focuses on fintech investments and blockchain technology analysis. Passionate about digital innovation.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "alex.chen@csi.cuny.edu",
      },
      {
        id: 7,
        name: "Priya Patel",
        role: "Data Analyst",
        sector: "Technology",
        year: "Junior",
        major: "Data Science",
        bio: "Specializes in big data analytics and machine learning applications for investment decisions.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "priya.patel@csi.cuny.edu",
      },
      {
        id: 8,
        name: "James Liu",
        role: "Systems Developer",
        sector: "Technology",
        year: "Sophomore",
        major: "Computer Engineering",
        bio: "Builds and maintains our trading platforms and risk management systems.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "james.liu@csi.cuny.edu",
      },
    ],
  },
  {
    name: "Healthcare",
    description: "Pharmaceutical and biotech investment research",
    color: "from-green-600 to-teal-600",
    members: [
      {
        id: 9,
        name: "Jessica Martinez",
        role: "Healthcare Analyst",
        sector: "Healthcare",
        year: "Senior",
        major: "Biology",
        bio: "Specializes in pharmaceutical and biotech company valuations and drug pipeline analysis.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "jessica.martinez@csi.cuny.edu",
      },
      {
        id: 10,
        name: "Robert Chang",
        role: "Biotech Specialist",
        sector: "Healthcare",
        year: "Junior",
        major: "Biochemistry",
        bio: "Focuses on emerging biotech companies and medical device investments. Expert in clinical trials.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "robert.chang@csi.cuny.edu",
      },
      {
        id: 11,
        name: "Amanda Foster",
        role: "Pharma Analyst",
        sector: "Healthcare",
        year: "Senior",
        major: "Chemistry",
        bio: "Analyzes pharmaceutical companies and drug development pipelines. Specializes in FDA approvals.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "amanda.foster@csi.cuny.edu",
      },
      {
        id: 12,
        name: "Kevin Park",
        role: "Medical Devices Analyst",
        sector: "Healthcare",
        year: "Junior",
        major: "Biomedical Engineering",
        bio: "Evaluates medical device companies and healthcare technology innovations.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "kevin.park@csi.cuny.edu",
      },
    ],
  },
  {
    name: "Financial Services",
    description: "Banking, insurance, and financial sector analysis",
    color: "from-indigo-600 to-purple-600",
    members: [
      {
        id: 13,
        name: "Michael Rodriguez",
        role: "Financial Analyst",
        sector: "Financial Services",
        year: "Junior",
        major: "Economics",
        bio: "Specializes in quantitative analysis and risk management for financial institutions.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "michael.rodriguez@csi.cuny.edu",
      },
      {
        id: 14,
        name: "Alex Thompson",
        role: "Fixed Income Analyst",
        sector: "Financial Services",
        year: "Junior",
        major: "Mathematics",
        bio: "Manages bond portfolio and conducts credit analysis with mathematical modeling expertise.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "alex.thompson@csi.cuny.edu",
      },
      {
        id: 15,
        name: "Sophia Garcia",
        role: "Banking Specialist",
        sector: "Financial Services",
        year: "Senior",
        major: "Finance",
        bio: "Analyzes banking sector investments and regulatory impacts on financial institutions.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "sophia.garcia@csi.cuny.edu",
      },
      {
        id: 16,
        name: "Daniel Wong",
        role: "Insurance Analyst",
        sector: "Financial Services",
        year: "Junior",
        major: "Actuarial Science",
        bio: "Evaluates insurance companies and analyzes risk assessment models and market trends.",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "#",
        email: "daniel.wong@csi.cuny.edu",
      },
    ],
  },
]

// Helper function to get all members across sectors
export const getAllMembers = (): TeamMember[] => {
  return teamData.flatMap((sector) => sector.members)
}

// Helper function to get members by sector
export const getMembersBySector = (sectorName: string): TeamMember[] => {
  const sector = teamData.find((s) => s.name === sectorName)
  return sector ? sector.members : []
}
