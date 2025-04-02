import { TeamMemberCard } from "@/components/team-member-card"

export default function Team() {
  const teamMembers = [
    {
      name: "Rishaan Jain",
      position: "Event Lead",
      imageUrl: "/placeholder.svg?height=500&width=500",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Edward Lai",
      position: "Finance Lead",
      imageUrl: "/placeholder.svg?height=500&width=500",
      linkedinUrl: "https://linkedin.com",
    },
    
  ]
  

  return (
    <div className="container py-12">
      <div className="griddy mx-auto grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))}
      </div>
    </div>
  )
}

