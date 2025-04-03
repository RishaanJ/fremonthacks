import { Card } from "@/components/ui/card"

export default function TeamTree() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Meet the FremontHacks Family</h2>

      <div className="flex flex-col items-center">
        {/* Event Lead */}
        <div className="relative">
          <TeamCard name="Rishaan Jain" role="Event Lead" />

          {/* Vertical line from Event Lead */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-16 bg-gray-300"></div>
        </div>

        {/* Horizontal line connecting all leads */}
        <div className="relative w-full max-w-5xl h-0.5 bg-gray-300 mt-16"></div>

        {/* Department Leads */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 w-full max-w-5xl">
          {/* Finance Lead */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            <TeamCard name="Savir Dillikar" role="Finance Lead" />

            {/* Vertical line to team members */}
            <div className="w-0.5 h-16 bg-gray-300 my-4"></div>

            {/* Team members */}
            <div className="grid grid-cols-1 gap-4 w-full">
              <TeamCard name="Ronit Parikh" role="Finance Member"  />
            </div>
          </div>

          {/* Logistics Lead */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            <TeamCard name="Utkarsh Joshi" role="Logistics Lead" />

            {/* Vertical line to team members */}
            <div className="w-0.5 h-16 bg-gray-300 my-4"></div>

            {/* Team members */}
            <div className="grid grid-cols-1 gap-4 w-full">

            </div>
          </div>

          {/* Marketing Lead */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            <TeamCard name="Kara Liu" role="Marketing Lead" />

            {/* Vertical line to team members */}
            <div className="w-0.5 h-16 bg-gray-300 my-4"></div>

            {/* Team members */}
            <div className="grid grid-cols-1 gap-4 w-full">

            </div>
          </div>

          {/* Tech Lead */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300"></div>
            <TeamCard name="Edward Lai" role="Tech Lead"  />

            {/* Vertical line to team members */}
            <div className="w-0.5 h-16 bg-gray-300 my-4"></div>

            {/* Team members - only one */}
            <div className="grid grid-cols-1 gap-4 w-full">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface TeamCardProps {
  name: string
  role: string
  empty?: boolean
}

function TeamCard({ name, role, empty = false }: TeamCardProps) {
  return (
    <Card
      className={`p-4 w-full text-center transition-all duration-300 ${empty ? "border-dashed border-2 bg-gray-50 hover:bg-white" : "shadow-md"}`}
    >
      <h3 className="font-medium text-lg">{name || "Name"}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </Card>
  )
}

