import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

export default function SponsorshipTiers() {
  const tiers = [
    {
      name: "Bronze",
      price: "$250",
      features: {
        "Logo on website": true,
        "Instagram post": true,
        "Sponsored meal": false,
        "Post-event email mention": false,
        '"Powered by [Your Company]" branding': false,
        "Bring branded swag": true,
        "Send mentors": false,
        "Provide prizes": true,
        "Host a workshop": false,
        "Booth space at event": false,
        "Keynote speaker (opening/closing)": false,
      },
    },
    {
      name: "Silver",
      price: "$500",
      features: {
        "Logo on website": true,
        "Instagram post": true,
        "Sponsored meal": false,
        "Post-event email mention": true,
        '"Powered by [Your Company]" branding': false,
        "Bring branded swag": true,
        "Send mentors": true,
        "Provide prizes": true,
        "Host a workshop": true,
        "Booth space at event": false,
        "Keynote speaker (opening/closing)": false,
      },
    },
    {
      name: "Gold",
      price: "$1000",
      features: {
        "Logo on website": true,
        "Instagram post": true,
        "Sponsored meal": true,
        "Post-event email mention": true,
        '"Powered by [Your Company]" branding': true,
        "Bring branded swag": true,
        "Send mentors": true,
        "Provide prizes": true,
        "Host a workshop": true,
        "Booth space at event": true,
        "Keynote speaker (opening/closing)": false,
      },
    },
    {
      name: "Title",
      price: "$5,000+",
      features: {
        "Logo on website": true,
        "Instagram post": true,
        "Sponsored meal": true,
        "Post-event email mention": true,
        '"Powered by [Your Company]" branding': true,
        "Bring branded swag": true,
        "Send mentors": true,
        "Provide prizes": true,
        "Host a workshop": true,
        "Booth space at event": true,
        "Keynote speaker (opening/closing)": true,
      },
    },
  ]

  const allFeatures = Object.keys(tiers[0].features)

  return (
    <div className="overflow-x-auto">
      <Table className="border border-gray-200">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="lowercase font-medium">feature</TableHead>
            {tiers.map((tier) => (
              <TableHead key={tier.name} className="text-center lowercase font-medium">
                {tier.name} <span className="block text-sm">({tier.price})</span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {allFeatures.map((feature) => (
            <TableRow key={feature} className="hover:bg-gray-50">
              <TableCell className="font-medium lowercase">{feature}</TableCell>
              {tiers.map((tier) => (
                <TableCell key={`${tier.name}-${feature}`} className="text-center">
                  {tier.features[feature] ? (
                    <Check className="h-5 w-5 mx-auto text-green-500" />
                  ) : (
                    <X className="h-5 w-5 mx-auto text-red-500" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
