import type { Link as LinkType, Design } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This would normally be fetched from a database
const getDummyData = (username: string) => {
  // Dummy data
  const links: LinkType[] = [
    { id: "1", url: "https://example.com", title: "Product 1", image: null, order: 0 },
    { id: "2", url: "https://shop.com", title: "Product 2", image: null, order: 1 },
    { id: "3", url: "https://store.com", title: "Product 3", image: null, order: 2 },
  ]

  const design: Design = {
    layout: "list",
    primaryColor: "#0D9488",
  }

  return { links, design }
}

export default function StorefrontPage({ params }: { params: { username: string } }) {
  const { username } = params
  const { links, design } = getDummyData(username)

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <Card className="rounded-none border-b shadow-sm py-8 text-center">
        <h1 className="text-3xl font-bold">{username}&apos;s Shopfront</h1>
        <p className="text-muted-foreground">
          Powered by{" "}
          <Link href="/" className="text-teal-600 hover:underline">
            Lnkshop.xyz
          </Link>
        </p>
      </Card>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {links.length === 0 ? (
          <Card className="shadow-lg pt-6 text-center">
            <CardContent>
              <p className="text-muted-foreground">No links yet...</p>
            </CardContent>
          </Card>
        ) : (
          <div
            className={`
            ${design.layout === "list" ? "space-y-6" : ""}
            ${design.layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : ""}
            ${design.layout === "carousel" ? "flex overflow-x-auto gap-6 pb-4" : ""}
          `}
          >
            {links.map((link) => (
              <Card key={link.id} className={`shadow-lg p-4 ${design.layout === "carousel" ? "min-w-[300px]" : ""}`}>
                <div className="w-full h-32 bg-muted rounded-md mb-4 flex items-center justify-center">
                  {/* Replace with <Microlink url={link.url} /> */}
                  <span className="text-xs text-muted-foreground">Preview</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{link.title}</h2>
                <Button
                  className="w-full"
                  style={{ backgroundColor: design.primaryColor }}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  Visit
                </Button>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Card className="rounded-none border-t shadow-sm py-8 text-center mt-auto">
        <p className="text-muted-foreground">
          Powered by{" "}
          <Link href="/" className="text-teal-600 hover:underline">
            Lnkshop.xyz
          </Link>
        </p>
      </Card>
    </div>
  )
}

