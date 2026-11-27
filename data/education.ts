export interface EducationItem {
  degree: string
  field: string
  institution: string
  location: string
  period: string
  cgpa: string
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Sri Sairam Engineering College",
    location: "Chennai, India",
    period: "2020 – 2024",
    cgpa: "8.3 / 10",
  },
]
