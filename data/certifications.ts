export interface Certification {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: "Claude Architecture Professional", issuer: "Anthropic" },
  { name: "Claude Architecture Foundation", issuer: "Anthropic" },
  { name: "Claude Developer Foundation", issuer: "Anthropic" },
  { name: "Oracle AI Professional Certification", issuer: "Oracle" },
]
